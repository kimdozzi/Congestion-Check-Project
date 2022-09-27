import React, { useEffect } from "react";
import "assets/Map.css";
import { get_places } from "restapi/places";

const { kakao } = window;

function Map() {
  // const [useMap, setUseMap] = useState(null);
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(35.1380032, 129.1011432),
    };
    let kakaoMap = new kakao.maps.Map(container, options);
    get_places().then(res => {
      for(let i = 0; i<res.data.length; i++) {
        let marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(res.data[i].Latitude, res.data[i].Longitude)
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
          zIndex: 1000
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          infowindow.setMap(kakaoMap);
          let clsbtn = document.querySelector(`#p${res.data[i].PlaceID} .close`);
          clsbtn.addEventListener('click', () => {
            infowindow.setMap(null);
          });
        });
      }
    })
    .catch(err => {
      console.error(err);
    })
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
