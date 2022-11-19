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
    get_places()
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          var imageSrc =
              res.data[i].NumberOfHuman <= res.data[i].CrowdThreshold
                ? "/images/marker0.png"
                : "/images/marker1.png", // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(29, 42), // 마커이미지의 크기입니다
            imageOption = { offset: new kakao.maps.Point(14, 42) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

          // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
          var markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          );
          console.log(i);
          console.log(imageSrc);

          let marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(
              res.data[i].Latitude,
              res.data[i].Longitude
            ),
            image: markerImage,
          });
          marker.setMap(kakaoMap);

          // Add infowindow
          let infowindow = new kakao.maps.CustomOverlay({
            clickable: true,
            content: `<div id="p${res.data[i].PlaceID}" class="infowindow">
            <h2>(${res.data[i].PlaceID}) ${res.data[i].Name}</h2>
            <h2>employees : ${res.data[i].Employees}</h2>
            <h3>people: ${res.data[i].NumberOfHuman} (${res.data[i].CrowdThreshold})</h3>
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
