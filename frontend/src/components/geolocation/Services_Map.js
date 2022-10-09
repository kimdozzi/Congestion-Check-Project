import React, { useEffect } from "react";
import "assets/Map.css";
import { get_places } from "restapi/places";

const { kakao } = window;

function Map() {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(35.1380032, 129.1011432),
    };
    let kakaoMap = new kakao.maps.Map(container, options);

    let map = new kakao.maps.Map(container, options);

    let marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      let latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      let resultDiv = document.createElement("div");
      let markerData = document.querySelector(".markerData");
      markerData.appendChild(resultDiv);

      let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
      message += "경도는 " + latlng.getLng() + " 입니다";

      //   markerData.innerHTML = message;
      alert(message);
      console.log(message);
    });

    get_places()
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          let marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(
              res.data[i].Latitude,
              res.data[i].Longitude
            ),
          });
          marker.setMap(kakaoMap);

          // Add infowindow
          let infowindow = new kakao.maps.CustomOverlay({
            clickable: true,
            content: `<div id="p${res.data[i].PlaceID}" class="infowindow">
            <h1>${res.data[i].Name}</h1>
            <h2>${res.data[i].Object} : 6</h2>
            <button class="close">X</button>
            </div>`,
            position: marker.getPosition(),
            yAnchor: 1.2,
            zIndex: 1000,
          });

          kakao.maps.event.addListener(marker, "click", () => {
            infowindow.setMap(kakaoMap);
            let clsbtn = document.querySelector(
              `#p${res.data[i].PlaceID} .close`
            );
            clsbtn.addEventListener("click", () => {
              infowindow.setMap(null);
            });
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div
        className="kakaoMap__position"
        id="map"
        style={{ width: "600px", height: "500px" }}
      ></div>
    </div>
  );
}

export default Map;
