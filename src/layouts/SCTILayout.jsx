import React from "react";
import HeadNavbar from "../components/navbar/HeadNavbar";
import { Outlet } from "react-router-dom";
import NavbarJS from "../components/navbar/NavbarJS";
import Header from "../components/header/Header.jsx";
// import video from "../images/video.gif";
import "../App.css";
export default function SCTI() {
  return (
    <div>
      <div className="bg_img">
        <div className="">
          <HeadNavbar />
          <NavbarJS />
          <Header />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
