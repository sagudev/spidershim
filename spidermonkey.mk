# We need to use bash here, as there are a couple of targets below
# that use [[ to do conditional things
SHELL := /usr/bin/env bash

# Default flags
CONFIGURE_FLAGS := \
	--disable-jemalloc \
	--disable-js-shell \
	--disable-tests \
	--disable-export-js \
	--disable-shared-js \
	--build-backends=RecursiveMake

include $(dir $(abspath $(firstword $(MAKEFILE_LIST))))cc.mk

ifneq (,$(JITSPEW))
    CONFIGURE_FLAGS += --enable-jitspew
endif

ifeq ($(PROFILE),"release")
	CONFIGURE_FLAGS += --enable-strip --enable-optimize --disable-debug
else
	CONFIGURE_FLAGS += --enable-debug --disable-optimize --enable-gczeal
endif

# ifneq (,$(CARGO_FEATURE_PROFILEMOZJS))
# 	CONFIGURE_FLAGS += --enable-profiling
# endif

# If we need to do extra work to find an appropriate python on
# Windows, do it here
ifeq ($(NEED_WIN_PYTHON),1)
	ifneq (,$(NATIVE_WIN32_PYTHON))
		PYTHON := $(NATIVE_WIN32_PYTHON)
	else ifneq (,$(wildcard c:/python27/python.exe))
		PYTHON := c:/python27/python.exe
	else
		$(message You must either have the Native Win32 python installed in C:/python27, or set NATIVE_WIN32_PYTHON to point to the appropriate python.exe.)
		$(message Download the Python installer from  https://www.python.org/downloads/release/python-2710/)
		$(error Native Win32 Python not found)
	endif
endif

.PHONY : all maybe-configure

all: maybe-configure
	$(info MOZ: building)
	$(MAKE) -f Makefile

# Only touch and run configure if we need to, to avoid unnecessary rebuilds.
# The second two time checks handle the case of configure.in and configure having
# the same timestamp (e.g. after a git checkout)
JSSRC := '$(SRC_DIR)'/js/src
maybe-configure:
	$(info MOZ: configuring)
	[[ $(JSSRC)/configure -ot $(JSSRC)/configure.in ]] && touch $(JSSRC)/configure || true
	[[ $(JSSRC)/old-configure -ot $(JSSRC)/old-configure.in ]] && touch $(JSSRC)/old-configure || true
	! [[ $(JSSRC)/configure.in -ot $(JSSRC)/configure ]] && touch $(JSSRC)/configure || true
	! [[ $(JSSRC)/old-configure.in -ot $(JSSRC)/old-configure ]] && touch $(JSSRC)/old-configure || true
	if [[ $(JSSRC)/configure -nt config.status ]] ; then \
	  PYTHON="$(PYTHON)" MOZ_TOOLS="$(MOZ_TOOLS)" \
	  CC="$(CC)" CFLAGS="$(CFLAGS)" \
	  CPP="$(CPP)" CPPFLAGS="$(CPPFLAGS)" \
	  CXX="$(CXX)" CXXFLAGS="$(CXXFLAGS)" \
	  AS="$(AS)" AR="$(AR)" \
	  STLPORT_LIBS="$(STLPORT_LIBS)" \
	  $(JSSRC)/configure $(strip $(CONFIGURE_FLAGS)) || (cat config.log && exit 1) ; \
	fi