// rfce
import React from "react";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWATIS</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btn"></div>
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        GET STARTED
      </Button>
    </div>
  );
}

export default HeroSection;
