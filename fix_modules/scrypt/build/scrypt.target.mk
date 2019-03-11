# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := scrypt
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=scrypt' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG' \
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-std=c++11 \
	-g \
	-O0

# Flags passed to only C files.
CFLAGS_C_Debug :=

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-fno-rtti \
	-fno-exceptions \
	-std=gnu++1y

INCS_Debug := \
	-I/root/.node-gyp/10.10.0/include/node \
	-I/root/.node-gyp/10.10.0/src \
	-I/root/.node-gyp/10.10.0/deps/openssl/config \
	-I/root/.node-gyp/10.10.0/deps/openssl/openssl/include \
	-I/root/.node-gyp/10.10.0/deps/uv/include \
	-I/root/.node-gyp/10.10.0/deps/zlib \
	-I/root/.node-gyp/10.10.0/deps/v8/include \
	-I$(srcdir)/../../node_modules/nan \
	-I$(srcdir)/src/util \
	-I$(srcdir)/src/scryptwrapper/inc \
	-I$(srcdir)/src/node-boilerplate/inc

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=scrypt' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-std=c++11 \
	-O3 \
	-fno-omit-frame-pointer

# Flags passed to only C files.
CFLAGS_C_Release :=

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-fno-rtti \
	-fno-exceptions \
	-std=gnu++1y

INCS_Release := \
	-I/root/.node-gyp/10.10.0/include/node \
	-I/root/.node-gyp/10.10.0/src \
	-I/root/.node-gyp/10.10.0/deps/openssl/config \
	-I/root/.node-gyp/10.10.0/deps/openssl/openssl/include \
	-I/root/.node-gyp/10.10.0/deps/uv/include \
	-I/root/.node-gyp/10.10.0/deps/zlib \
	-I/root/.node-gyp/10.10.0/deps/v8/include \
	-I$(srcdir)/../../node_modules/nan \
	-I$(srcdir)/src/util \
	-I$(srcdir)/src/scryptwrapper/inc \
	-I$(srcdir)/src/node-boilerplate/inc

OBJS := \
	$(obj).target/$(TARGET)/src/node-boilerplate/scrypt_common.o \
	$(obj).target/$(TARGET)/src/node-boilerplate/scrypt_params_async.o \
	$(obj).target/$(TARGET)/src/node-boilerplate/scrypt_params_sync.o \
	$(obj).target/$(TARGET)/src/node-boilerplate/scrypt_kdf_async.o \
	$(obj).target/$(TARGET)/src/node-boilerplate/scrypt_kdf_sync.o \
	$(obj).target/$(TARGET)/src/node-boilerplate/scrypt_kdf-verify_sync.o \
	$(obj).target/$(TARGET)/src/node-boilerplate/scrypt_kdf-verify_async.o \
	$(obj).target/$(TARGET)/src/node-boilerplate/scrypt_hash_sync.o \
	$(obj).target/$(TARGET)/src/node-boilerplate/scrypt_hash_async.o \
	$(obj).target/$(TARGET)/scrypt_node.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# Make sure our dependencies are built before any of us.
$(OBJS): | $(builddir)/scrypt_wrapper.a $(builddir)/scrypt_lib.a $(obj).target/scrypt_wrapper.a $(obj).target/scrypt_lib.a

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-pthread \
	-rdynamic \
	-m64

LDFLAGS_Release := \
	-pthread \
	-rdynamic \
	-m64

LIBS :=

$(obj).target/scrypt.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(obj).target/scrypt.node: LIBS := $(LIBS)
$(obj).target/scrypt.node: TOOLSET := $(TOOLSET)
$(obj).target/scrypt.node: $(OBJS) $(obj).target/scrypt_wrapper.a $(obj).target/scrypt_lib.a FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(obj).target/scrypt.node
# Add target alias
.PHONY: scrypt
scrypt: $(builddir)/scrypt.node

# Copy this to the executable output path.
$(builddir)/scrypt.node: TOOLSET := $(TOOLSET)
$(builddir)/scrypt.node: $(obj).target/scrypt.node FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(builddir)/scrypt.node
# Short alias for building this executable.
.PHONY: scrypt.node
scrypt.node: $(obj).target/scrypt.node $(builddir)/scrypt.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/scrypt.node

