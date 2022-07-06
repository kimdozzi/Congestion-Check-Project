# 환경 세팅

필요 준비물

1. 도커 설치
2. VcXsrv 설치

<br>


## 1.1. VcXsrv 세팅

 도커 컨테이너 내부에서는 gui를 지원하지 않기 때문에 host os와의 통신을 통해서 host os에서 gui를 대신 출력해주어야한다. 그래서 VcXsrv를 사용한다.

~/.bashrc 파일의 맨 아래 끝에 다음 명령어를 추가하고 저장한다.

```bash
export DISPLAY="`grep nameserver /etc/resolv.conf | sed 's/nameserver //'`:0"
export LIBGL_ALWAYS_INDIRECT=1
```

그리고 ~/.bashrc파일에서 나와서 bash 셸에서 다음 명령어를 입력한다

`source ~/.bashrc`

<br>


## 1.2. 도커 컨테이너 만들기

dockerhub에 캡스톤 디자인을 위한 이미지가 올라와 있다. 이를 이용해서 컨테이너를 만든다.

1. `docker pull goodjinu/caap:latest`
2. `docker run -it --name [컨테이너 이름] -v /tmp/.X11-unix:/tmp/.X11-unix -v [호스트에서 공유할 디렉토리]:[컨테이너 디렉토리] -e DISPLAY=$DISPLAY -p [호스트 포트]:[컨테이너 포트] goodjinu/caap:latest`

