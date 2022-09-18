import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// 45:07
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </>
  );
};

export default App;
