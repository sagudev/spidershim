##clang
SRC_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
CXX ?= c++

VVFLAGS := -std=c++17 -pthread -Wall -Wextra -Wno-unused-parameter -fPIC -m64 -O3 -fno-omit-frame-pointer -fno-rtti -fno-exceptions

# load spidershim headers
CXXFLAGS := \
	-I $(SRC_DIR)/include \
	-I $(SRC_DIR)/src

# SpiderMonkey 
CXXFLAGS += \
	-include $(MOZ_OUT)/js/src/js-confdefs.h \
	-isystem $(MOZ_OUT)/dist/include \
	-I $(MOZ_OUT)/js/src \
	-L $(MOZ_OUT)/js/src/build \
	-DSTATIC_JS_API

# force color
CXXFLAGS += -fcolor-diagnostics

LDFLAGS = -fuse-ld=lld -ljs_static -lstdc++ -lm -ldl

ifeq ($(DEBUG),1)
	CXXFLAGS += -DDEBUG
endif

.PHONY : all

#mozjs:
#	$(info SPIDERSHIM: mozjs)
#	$(MAKE) -f spidermonkey.mk

SRC := $(SRC_DIR)/src

SOURCES := $(wildcard $(SRC)/*.cc)
OBJS := $(patsubst $(SRC)/%.cc, %.o, $(SOURCES))

all: v8

v8: $(OBJS)
	$(info done)
	$(AR) crsT lib$@.a $(OBJS)

%.o: $(SRC)/%.cc
	$(info $< | $@)
	$(CXX) $(CXXFLAGS) $(VVFLAGS) -c -o $@ $< $(LDFLAGS)
