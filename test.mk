##clang
SRC_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
CXX ?= c++

VVFLAGS := -std=gnu++17 -pthread -Wall -Wextra -Wno-unused-parameter -fPIC -m64 -O3 -fno-omit-frame-pointer -fno-rtti -fno-exceptions

# load spidershim headers
CXXFLAGS := \
	-I $(SRC_DIR)/include \
	-I $(SRC_DIR)/gtest/include \
	-I $(SRC_DIR)/test

CXXFLAGS += \
	-L $(MOZ_OUT)/js/src/build \
	-L $(OUT)/gtest \
	-L $(MOZ_OUT)/x86_64-unknown-linux-gnu/debug \
	-L $(OUT)/spidershim

# force color
CXXFLAGS += -fcolor-diagnostics

LDFLAGS = -fuse-ld=lld -ljsrust -ljs_static -lstdc++ -lv8 -lgtest -lm -ldl -lz

ifeq ($(DEBUG),1)
	CXXFLAGS += -DDEBUG
endif

.PHONY : all

SRC := $(SRC_DIR)/test

SS := $(wildcard $(SRC)/*.cc)
SOURCES := $(patsubst $(SRC)/%.cc, %, $(SS))

all: test

test: hello-world #$(SOURCES)
	$(info running hello-world)
	echo "r \n bt" | gdb ./hello-world

%: $(SRC)/%.cc
	$(info $< | $@)
	$(CXX) $(CXXFLAGS) $(VVFLAGS) -o $@ $< $(LDFLAGS)
