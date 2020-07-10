cmake_minimum_required(VERSION 3.10)
project(fxnV4L2)

set(LIB_NAME fxnV4L2)

set(BRT_BUILD_PREFIX /home/justin126/workspace/rv1126/prebuilts/gcc/linux-x86/arm/gcc-arm-8.3-2019.03-x86_64-arm-linux-gnueabihf/bin/arm-linux-gnueabihf-)
set(BRT_HOST /home/justin126/workspace/rv1126/buildroot/output/rockchip_rv1126_rv1109/host)

set(CMAKE_C_COMPILER ${BRT_BUILD_PREFIX}gcc)
set(CMAKE_CXX_COMPILER ${BRT_BUILD_PREFIX}g++)

add_library(${LIB_NAME} SHARED
    ${PROJECT_SOURCE_DIR}/${LIB_NAME}.c)