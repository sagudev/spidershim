SRC_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
OUT_DIR ?= $(SRC_DIR)target
MOZ_OUT ?= $(OUT_DIR)/mozjs
DEBUG ?= 1
CCACHE ?= ccache

.PHONY: clean

.PHONY: all mozjs spidershim test clean gtest

all: spidershim test

$(shell  mkdir $(OUT_DIR))

mozjs:
	$(info Building MOZJS)
	$(shell mkdir $(MOZ_OUT))
	CCACHE=$(CCACHE) DEBUG=$(DEBUG) OUT_DIR="$(MOZ_OUT)" \
	$(MAKE) -C $(MOZ_OUT) -f $(SRC_DIR)/spidermonkey.mk

spidershim: mozjs
	$(info Building SPIDERSHIM)
	$(shell mkdir $(OUT_DIR)/spidershim)
	CCACHE=$(CCACHE) DEBUG=$(DEBUG) MOZ_OUT="$(MOZ_OUT)" OUT_DIR="$(OUT_DIR)/spidershim" \
	$(MAKE) -C "$(OUT_DIR)/spidershim" -f $(SRC_DIR)/spidershim.mk

test: spidershim gtest
	$(info Testing SPIDERSHIM)
	$(shell mkdir $(OUT_DIR)/test)
	CCACHE=$(CCACHE) DEBUG=$(DEBUG) OUT="$(OUT_DIR)" MOZ_OUT="$(MOZ_OUT)" OUT_DIR="$(OUT_DIR)/test" \
	$(MAKE) -C "$(OUT_DIR)/test" -f $(SRC_DIR)/test.mk

gtest:
	$(info GTEST)
	$(shell mkdir $(OUT_DIR)/gtest)
	CCACHE=$(CCACHE) DEBUG=$(DEBUG) OUT_DIR="$(OUT_DIR)/gtest" \
	$(MAKE) -C "$(OUT_DIR)/gtest" -f $(SRC_DIR)/gtest/gtest.mk

clean:
	rm -rf $(OUT_DIR)

%:
	CCACHE=$(CCACHE) DEBUG=$(DEBUG) MOZ_OUT="$(MOZ_OUT)" OUT_DIR="$(OUT_DIR)/spidershim" \
	$(MAKE) -C "$(OUT_DIR)/spidershim" -f $(SRC_DIR)/spidershim.mk $@.o