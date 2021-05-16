# We need to use bash here, as there are a couple of targets below
# that use [[ to do conditional things
SHELL := /usr/bin/env bash

SRC_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))mozjs

# Default flags
# 	--disable-export-js
CONFIGURE_FLAGS := \
	--disable-jemalloc \
	--disable-js-shell \
	--disable-tests \
	--disable-shared-js \
	--build-backends=RecursiveMake

ifeq ($(DEBUG),0)
$(info Optimized mozjs)
 	CONFIGURE_FLAGS += --enable-strip --enable-optimize --disable-debug
else
$(info Debug mozjs)
 	CONFIGURE_FLAGS += --enable-debug --disable-optimize --enable-gczeal
endif

.PHONY : all maybe-configure

all: maybe-configure
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
	  $(JSSRC)/configure $(strip $(CONFIGURE_FLAGS)) || (cat config.log && exit 1) ; \
	fi