import React, { useEffect } from "react";
import "../assets/Map.css";

const { kakao } = window;

function Map() {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    console.log("loading kakao maps ...");
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
