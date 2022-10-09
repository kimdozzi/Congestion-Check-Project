import React, { useEffect } from "react";
import "assets/Map.css";
import { propTypes } from "react-bootstrap/esm/Image";

const { kakao } = window;

function Map(props) {
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
      //   latlng.getLat(),latlng.getLng()

      props.setLatLng(latlng.getLat(), latlng.getLng());
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
