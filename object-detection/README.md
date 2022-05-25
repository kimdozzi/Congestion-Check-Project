# object detection

yolo를 사용하여 object detection을  수행한다.

## 1. 환경 설정

[draknet repository](https://github.com/AlexeyAB/darknet/releases/tag/yolov4)에 Assets에서 source code zip파일을 다운받아서 압축을 푼 다음에 안에 `darknet-yolov4`폴더를 이 폴더안에 옮깁니다. `darknet-yolov4/build.ps1`을 실행해서 CUDA 사용에는 `no`를 입력하고 나머지에는 `yes`를 입력합니다.

GPU를 사용하고 싶다면 참고: [https://pjreddie.com/darknet/install/](https://pjreddie.com/darknet/install/)