#if !defined(FXN_V4L2_H)
#define FXN_V4L2_H


typedef struct FxnBufferInfo
{
    void* buffer;

} FXN_BUFFER_INFO;



typedef void (*FxnOnBufferGet)(FXN_BUFFER_INFO buffer);

typedef enum
{
    BUF_TYPE_YUYV,
} BUF_TYPE;

typedef struct FxnV4L2Info
{
    char devPath[256];
    int width;
    int height;
    BUF_TYPE bufType;
    FxnOnBufferGet onBufferGet;

} FXN_V4L2_INFO;


void fxnInitV4L2(FXN_V4L2_INFO info);

void fxnCaptureStart();

void fxnCaptureRelease();

void fxnTest();


#endif // FXN_V4L2_H
