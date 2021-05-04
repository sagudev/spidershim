# We need to use bash here, as there are a couple of targets below
# that use [[ to do conditional things
SHELL := /usr/bin/env bash

ifneq (,$(MACOS_SDK_PATH))
	CONFIGURE_FLAGS += --with-macos-sdk=$(MACOS_SDK_PATH)
endif

ifeq (windows,$(findstring windows,$(TARGET)))
	WINDOWS := 1
	# Override any attempt to use the debug CRT when building with debug.
	CFLAGS += -MD
	CXXFLAGS += -MD
else
	WINDOWS :=
endif

ifneq ($(HOST),$(TARGET))

	ifeq (armv7-linux-androideabi,$(TARGET))
		# Reset TARGET variable because armv7 target name used by Rust is not 
		# the same as the target name needed for the CXX toolchain.
		TARGET = arm-linux-androideabi
		CONFIGURE_FLAGS += \
			--with-arch=armv7-a \
			--with-fpu=neon \
			$(NULL)
	endif

	ifeq (aarch64-unknown-linux-gnu,$(TARGET))
	    # Reset TARGET variable because aarch64 target name used by Rust is not 
		# the same as the target name needed for the CXX toolchain.
		TARGET = aarch64-linux-gnu
		CONFIGURE_FLAGS += \
			--with-arch=armv8-a \
			$(NULL)
	endif

	ifeq (android,$(findstring android,$(TARGET)))
		ifneq (,$(STLPORT_CPPFLAGS))
			CONFIGURE_FLAGS += STLPORT_CPPFLAGS="$(STLPORT_CPPFLAGS)"
		endif
		ifneq (,$(ANDROID_NDK))
			CONFIGURE_FLAGS += --with-android-ndk=$(ANDROID_NDK)
		endif
		ifneq (,$(ANDROID_NDK_VERSION))
			CONFIGURE_FLAGS += --with-android-ndk-version=$(ANDROID_NDK_VERSION)
		endif
		ifneq (,$(ANDROID_VERSION))
			CONFIGURE_FLAGS += --with-android-version=$(ANDROID_VERSION)
		endif
		ifneq (,$(ANDROID_PLATFORM_DIR))
			CONFIGURE_FLAGS += --with-android-platform=$(ANDROID_PLATFORM_DIR)
		endif
		ifneq (,$(ANDROID_TOOLCHAIN_DIR))
			CONFIGURE_FLAGS += --with-android-toolchain=$(ANDROID_TOOLCHAIN_DIR)
		endif
		ifneq (,$(ANDROID_CLANG))
			CONFIGURE_FLAGS += --with-android-clang=$(ANDROID_CLANG)
		endif
	endif

	ifeq ($(WINDOWS),)
		CC ?= $(TARGET)-gcc
		CPP ?= $(TARGET)-gcc -E
		CXX ?= $(TARGET)-g++
		AR ?= $(TARGET)-ar
		CONFIGURE_FLAGS += --target=$(TARGET) --disable-gold
	endif

else

	ifeq (,$(WINDOWS))
		ifeq (freebsd,$(findstring freebsd,$(TARGET)))
			# Does not symlink clang as "gcc" like macOS does
			CC ?= clang
			CPP ?= clang -E
			CXX ?= clang++
		else
			CC ?= gcc
			CPP ?= gcc -E
			CXX ?= g++
		endif
		AR ?= ar

	endif

endif

ifneq (,$(CCACHE))
	CONFIGURE_FLAGS += --with-ccache=$(CCACHE)
else ifneq (,$(SCCACHE))
	CONFIGURE_FLAGS += --with-ccache=$(SCCACHE)
endif

ifneq ($(WINDOWS),)
	# Visual Studio build
	NEED_WIN_PYTHON := 1

	# There's no cygpath in mozilla-build, and we're expecting to
	# be building with MOZ_BUILD_TOOLS, so do our best
	OUT_DIR:=$(subst \,/,$(OUT_DIR))

	ifeq ($(findstring x86_64,$(TARGET)),x86_64)
		# This is the correct target for MSVC builds
		CONFIGURE_FLAGS += --target=x86_64-pc-mingw32 --host=x86_64-pc-mingw32
	else ifeq ($(findstring i686,$(TARGET)),i686)
		# This is the correct target for MSVC builds
		CONFIGURE_FLAGS += --target=i686-pc-mingw32 --host=x86_64-pc-mingw32
	else ifeq ($(findstring aarch64,$(TARGET)),aarch64)
		# This is the correct target for MSVC builds
		CONFIGURE_FLAGS += --target=aarch64-windows-mingw32 --host=x86_64-pc-mingw32
	endif
	MOZ_TOOLS=/

else ifeq ($(MSYSTEM),MINGW64)
	# MSYS2/MINGW64 build
	NEED_WIN_PYTHON := 1

	# msys2 sets CC=cc as default. however, there is no `cc.exe`.
	# overwrite it here.
	ifeq ($(CC),cc)
		CC = gcc
		CPP = gcc -E
	endif

	# cargo uses Windows native path. msys2 make unfortunately doesn't understand it.
	OUT_DIR:=$(shell cygpath "$(OUT_DIR)")

	# Fake out the SM build with a dummy dir here; just needs $(MOZ_TOOLS)/bin
	# to exist
	MOZ_TOOLS=/
endif