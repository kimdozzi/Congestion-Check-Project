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
          console.log(res.data[i]);
          var imageSrc = "/images/marker0.png",
            // res.data[i].NumberOfHuman <= res.data[i].CrowdThreshold
            //   ? "/images/marker0.png"
            //   : "/images/marker1.png",
            imageSize = new kakao.maps.Size(29, 42),
            imageOption = { offset: new kakao.maps.Point(14, 42) };
          var markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          );

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
            <h2>${res.data[i].Name}</h2>
            <h3>${res.data[i].Employees} ((${res.data[i].CrowdThreshold}))</h3> 
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
