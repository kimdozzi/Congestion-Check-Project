import React, { useEffect } from "react";
import "../../assets/Map.css";

const { kakao } = window;

function Map() {
  // const [useMap, setUseMap] = useState(null);
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(35.1404032, 129.1026432),
    };
    let kakaoMap = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(35.1404032, 129.1026432);
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(kakaoMap);
  }, []);

  // let currentPosition = [];
  // if ("geolocation" in navigator) {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position.coords.latitude, position.coords.longitude);
  //     currentPosition[0] = position.coords.latitude;
  //     currentPosition[1] = position.coords.longitude;
  //     console.log(currentPosition[0], currentPosition[1]);
  //   });
  // } else {
  //   return;
  // }
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
