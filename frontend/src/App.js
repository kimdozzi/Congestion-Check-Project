import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
      <HeroSection />
    </>
  );
}

export default App;
