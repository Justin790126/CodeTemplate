
CLEAN_CMAKE='rm -rf CMakeFiles CMakeCache.txt'

# build .so
cd lib
${CLEAN_CMAKE}
cmake ./ && make

adb push *.so /usr/lib

cd ../

# build exe
cd client
${CLEAN_CMAKE}
cmake ./ && make

adb push fxnV4L2test /usr/bin

cd ../

