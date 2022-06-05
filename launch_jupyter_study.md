# docker 환경에서 주피터노트북 실행하기
> The Jupyter Notebook is a web-based interactive computing platform.

컨테이너를 만들 때 포트 포워딩 설정을 해야한다.
```bash
docker run ... ... -p [호스트 포트]:[컨테이터 포트] ... goodjinu/caap:latest
```

주피터노트북 실행
```bash
jupyter notebook --ip=0.0.0.0 --port=[포트포워딩한 포트] --allow-root
```

다음과 같은 url이 생성된다.

`http://0.0.0.0:8000/?token=a732c64da157a27fffaa00f3702de46229372270e349a89e`

이 주소를 다음과 같이 0.0.0.0을 127.0.0.1로 바꾼다.

`http://127.0.0.1:8000/?token=a732c64da157a27fffaa00f3702de46229372270e349a89e`

브라우저로 접속해서 주피터 노트북 이용

![jupytenotebook](https://jupyter.org/assets/homepage/labpreview.png)