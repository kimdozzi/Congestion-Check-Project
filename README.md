# [AI를 활용한 혼잡도 검색 시스템]
진행기간: 2022-06-05 ~ 2022-12-20 

주요내용 : object detection을 이용한 혼잡도 정보 제공 웹 서비스

<img src="https://github.com/kimdozzi/congestion-checking-project/assets/95005061/de0f8495-5ee5-4a0c-be5e-d104ccf6b507"  width="450" height="300"/>

<img src="https://github.com/kimdozzi/congestion-checking-project/assets/95005061/34654f0a-3471-4844-9f4d-377437bdb988"  width="450" height="300"/>

---
## 시스템 플로우

<img src="https://github.com/kimdozzi/congestion-checking-project/assets/95005061/ad39fe4e-cefb-4f76-9631-048257d6fc0a" width="450" height="350"/>

<img src="https://github.com/kimdozzi/congestion-checking-project/assets/95005061/89abb7c5-183f-4f37-aebf-8a9ff2a7d088" width="450" height="350"/>

- 아두이노에서는 캠으로 찍은 사진을 서버에 일정 시간 간격으로 보냄
  
- 서버에서는 사진으로부터 사람 수를 측정해서 데이터베이스에 저장
  
- 사용자는 웹서버로 웹페이지를 요청하면 서버에서는 웹 어플리케이션을 제공
  
- 클라이언트에서 혼잡도 정보를 서버에 요청하면 서버에서는 데이터베이스로부터 혼잡도 데이터를 가져와서 클라이언트에 보냄
  
- 받은 혼잡도 데이터를 카카오 맵에서 제공
  
---
## 사용한 Skill
```
    - React, Javascript, flask, Python
    - Mysql, Docker
    - 아두이노, YOLO7, ESP32-module
```
---
## 본인이 기여한점    
- ESP32-cam 모듈과 서버 통신 구축

- React.js를 이용한 웹 서버를 구축

- kakao map API를 통해 사용자에게 경로 안내를 제공

- 비동기 통신 적용
---
## 어려웠던점
- kakao map api에서 제공하는 코드를 프로젝트에 필요한 방향으로 개선해서 테스트하고 적용하는 것
  
- 서버는 여러 클라이언트로부터 받는 요청을 비동기 수행하고, 이 과정에서 객체 검출을 동시에 진행하다 보니 충돌이 발생
  
- 객체검출을 진행하는 업로드 모듈에서 세마포어를 활용해 문제를 해결
---
## 결과
- 공학사 학위 논문 작성
  
- 캡스톤 디자인 1, 2학기 A+ 학점
  
- 정보융합대학 해카톤 대회 팀워크상 수상
  
- 컴퓨퍼공학과 해카톤 대회 아이디어상 수상
  


