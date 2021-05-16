##clang
SRC_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
CXX ?= c++

VVFLAGS := -std=c++17 -Wno-unused-parameter -fPIC -m64 -O3

# load spidershim headers
CXXFLAGS := \
	-I $(SRC_DIR)/include \
	-I $(SRC_DIR)

# force color
CXXFLAGS += -fcolor-diagnostics

.PHONY : all

SRC := $(SRC_DIR)/src

SOURCES := $(wildcard $(SRC)/*.cc)
OBJS := $(patsubst $(SRC)/%.cc, %.o, $(SOURCES))

all: gtest

gtest: $(OBJS)
	$(info done)
	$(AR) crsT lib$@.a $(OBJS)

%.o: $(SRC)/%.cc
	$(info $< | $@)
	$(CXX) $(CXXFLAGS) $(VVFLAGS) -c -o $@ $< $(LDFLAGS)
