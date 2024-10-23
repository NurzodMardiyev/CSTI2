import React, { useEffect, useState } from "react";
import HeadNavbar from "../components/navbar/HeadNavbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavbarJS from "../components/navbar/NavbarJS";
import "../App.css";
import Footer from "../components/footer/Footer.jsx";
import HeaderJS from "../components/header/Header.jsx";
export default function SCTI() {
  const location = useLocation();
  const [loc, setLoc] = useState("");

  useEffect(() => {
    setLoc(location.pathname);
  }, [location]);

  return (
    <div>
      <div className={`${loc === "/" ? "bg_img" : "bg-[#12274B]"}`}>
        <div className="">
          <HeadNavbar />
          <NavbarJS />
          {loc === "/" ? <HeaderJS /> : ""}
        </div>
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
}
