import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </>
  );
}

export default App;
