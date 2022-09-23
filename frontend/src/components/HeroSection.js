import React from "react";
import "../App.css";
import "../assets/HeroSection.css";
import Map from "../components/Map";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="hero-container__divTag">
        <h1>Congestion Checking Project</h1>
        <p>What are you waiting for?</p>
      </div>
      <Map />
    </div>
  );
}

export default HeroSection;
