##clang
CXX := c++

VVFLAGS := -fuse-ld=lld -std=c++17 -pthread -Wall -Wextra -Wno-unused-parameter -fPIC -m64 -O3 -fno-omit-frame-pointer -fno-rtti -fno-exceptions -MMD -MF

# load spidershim headers
CXXFLAGS := \
	-I $(SRC_DIR)/include \
	-I $(SRC_DIR)/src

# SpiderMonkey 
CXXFLAGS += \
	-include $(MOZ_OUT)/js/src/js-confdefs.h \
	-I $(MOZ_OUT)/dist/include \
	-I $(MOZ_OUT)/js/src \
	-L $(MOZ_OUT)/js/src/build \
	-DSTATIC_JS_API \
	-std=c++17

# force color
CXXFLAGS += -fcolor-diagnostics

MOZA = -ljs_static -lm -ldl 

ifneq ($(PROFILE),"release")
	CXXFLAGS += -DDEBUG
endif

include $(dir $(abspath $(firstword $(MAKEFILE_LIST))))cc.mk

.PHONY : all v8 test

#mozjs:
#	$(info SPIDERSHIM: mozjs)
#	$(MAKE) -f spidermonkey.mk

SRC := $(SRC_DIR)/src

SOURCES := $(wildcard $(SRC)/*.cc)
OBJS := $(patsubst $(SRC)/%.cc, %.o, $(SOURCES))

all: v8

v8: $(OBJS)
	$(AR) crsT $@ $(OBJS)

%.o: $(SRC)/%.cc
	$(info $< | $@)
	$(CXX) $(CXXFLAGS) $(VVFLAGS) -c -o $@ $< $(MOZA)