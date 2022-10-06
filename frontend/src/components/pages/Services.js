import React, { useState, useEffect } from "react";
import "../../App.css";
import { post_place } from "restapi/places";

export default function Services() {
  const [placeName, setPlaceName] = useState('');
  const [objectType, setObjectType] = useState('human');
  const [latitude, setLatitude] = useState(35.15772848796884);
  const [longitude, setLongitude] = useState(129.05912439551273);
  return (
    <div>
      <h1>Register your place to trace congestion</h1>
      <input type="text" onChange={(e) => {setPlaceName(e.target.value);}} placeholder="Place name" value={placeName}/>
      <input type="radio" onClick={(e) => {setObjectType('human')}} name="obj" id="objChoice1" checked/>
      <label for="objChoice1">human</label>
      <input type="radio" onClick={(e) => {setObjectType('car')}} name="obj" id="objChoice2"/>
      <label for="objChoice2">car</label>
      <input type="number" onChange={(e) => {setLatitude(e.target.value);}} placeholder="Latitude" value={latitude}/>
      <input type="number" onChange={(e) => {setLongitude(e.target.value);}} placeholder="Longitude" value={longitude}/>
      <button onClick={(e) => {post_place({
        Name: placeName,
        Object: objectType,
        Latitude: latitude,
        Longitude: longitude
      });}}>Send</button>
    </div>
  );
}
