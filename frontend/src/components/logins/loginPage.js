import React from "react";
import "../../App.css";
import { Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Profile from "./Profile";

function loginPage() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Signin />;
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Profile />
        </Route>
      </Routes>
    </div>
  );
}

export default loginPage;
