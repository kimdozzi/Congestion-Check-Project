# [AI를 활용한 혼잡도 검색 시스템]

1. 진행기간: 2022-06-05 ~ 2022-12-20 

<br>
<br>

2. 주요내용 : object detection을 이용한 혼잡도 정보 제공 웹 서비스

![image](https://github.com/kimdozzi/ps_python/assets/95005061/e28b8d4b-d7d2-4e11-bd8b-b2b68c615dfb)

<br>

[동작과정 간략 소개]
1. 특정장소에 카메라를 설치해서 해당장소를 찍은 사진을 일정 시간 간격으로 서버에 보낸다.
2. 서버에서는 사진으로부터 객체 검출을 통해 몇명의 사람이 있는지에 대한 정보를 추출한다.
3. 해당 지역이 사람이 많아서 혼잡한지 또는 적은지에 대한 정보를 클라이언트에 보낸다.

<br>
<br>

![image](https://github.com/kimdozzi/ps_python/assets/95005061/741b4821-748e-429e-8fe3-d13c7fbd893d)

[시스템 플로우]
- 아두이노에서는 캠으로 찍은 사진을 서버에 일정 시간 간격으로 보냄
- 서버에서는 사진으로부터 사람 수를 측정해서 데이터베이스에 저장
- 사용자는 웹서버로 웹페이지를 요청하면 서버에서는 웹 어플리케이션을 제공
- 클라이언트에서 혼잡도 정보를 서버에 요청하면 서버에서는 데이터베이스로부터 혼잡도 데이터를 가져와서 클라이언트에 보냄
- 받은 혼잡도 데이터를 카카오 맵에서 제공

<br>
<br>


3. 사용한 Skill
```
    - 아두이노, YOLO7
    - 웹 서버 -> flask
    - 데이터베이스 -> mysql
    - 웹 프론트엔드 -> react.js
```

<br>
<br>


4. 본인이 기여한점
- ESP32-cam 모듈과 서버 통신 구축
- React.js를 이용한 웹 서버를 구축
- kakao map API를 통해 사용자에게 경로 안내를 제공
- 비동기 통신 적용


<br>
<br>

5. 어려웠던점
- kakao map api에서 제공하는 코드를 프로젝트에 필요한 방향으로 개선해서 테스트하고 적용하는 것
- 서버는 여러 클라이언트로부터 받는 요청을 비동기 수행하고, 이 과정에서 객체 검출을 동시에 진행하다 보니 충돌이 발생

<br>
<br>

6. 해결 과정
- 지속적인 코드 개선을 통해 프로그래밍 활용 능력을 기르고 동료들과의 의견 공유 및 교수님의 피드백을 받으며 더 나은 코드를 작성할 수 있게 됨
- 객체검출을 진행하는 업로드 모듈에서 세마포어를 활용해 문제를 해결
   
<br>
<br>

7. 결과
- 공학사 학위 논문 작성
- 캡스톤 디자인 1, 2학기 A+ 학점
- 정보융합대학 해카톤 대회 팀워크상 수상
- 컴퓨퍼공학과 해카톤 대회 아이디어상 수상


