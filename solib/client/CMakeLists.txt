cmake_minimum_required(VERSION 3.10)
project(fxnV4L2test)

set(LIB_NAME fxnV4L2)
set(LIB_TEST_NAME fxnV4L2test)

set(BRT_BUILD_PREFIX /home/justin126/workspace/rv1126/prebuilts/gcc/linux-x86/arm/gcc-arm-8.3-2019.03-x86_64-arm-linux-gnueabihf/bin/arm-linux-gnueabihf-)
set(BRT_HOST /home/justin126/workspace/rv1126/buildroot/output/rockchip_rv1126_rv1109/host)
set(CMAKE_C_COMPILER ${BRT_BUILD_PREFIX}gcc)
set(CMAKE_CXX_COMPILER ${BRT_BUILD_PREFIX}g++)


include_directories(${PROJECT_SOURCE_DIR}/../lib/)
link_directories(${PROJECT_SOURCE_DIR}/../lib/)
add_executable(${LIB_TEST_NAME} ${LIB_TEST_NAME}.c)

target_link_libraries(${LIB_TEST_NAME} lib${LIB_NAME}.so)