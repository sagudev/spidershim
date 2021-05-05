SRC_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
OUT_DIR ?= $(SRC_DIR)target
MOZ_OUT ?= $(OUT_DIR)/mozjs
DEBUG ?= 1
CCACHE ?= ccache

$(shell  mkdir $(OUT_DIR))

all:

.PHONY : all mozjs spidershim test clean

all: mozjs spidershim

mozjs:
	$(info Building mozjs)
	$(shell mkdir $(MOZ_OUT))
	CCACHE=$(CCACHE) DEBUG=$(DEBUG) OUT_DIR="$(MOZ_OUT)" \
	$(MAKE) -C $(MOZ_OUT) -f $(SRC_DIR)/spidermonkey.mk

spidershim: mozjs
	$(info Building spidershim)
	$(shell mkdir $(OUT_DIR)/spidershim)
	CCACHE=$(CCACHE) DEBUG=$(DEBUG) MOZ_OUT="$(MOZ_OUT)" OUT_DIR="$(OUT_DIR)/spidershim" \
	$(MAKE) -C "$(OUT_DIR)/spidershim" -f $(SRC_DIR)/spidershim.mk

test: spidershim
	$(MAKE) -f test.mk

clean:
	rm -rf $(OUT_DIR)