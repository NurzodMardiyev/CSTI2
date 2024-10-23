import React from "react";
import logo from "../../images/logo_center.png";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="border-t border-gray-700  mt-[140px]">
      <div className="container lg:max-w-9xl md:mx-auto  md:py-3 py-1.5 max-w-[90%] mx-auto items-start gap-3 my-14 flex justify-between  ">
        <div>
          <div className="logoSec  flex items-center gap-3" to="/">
            <img src={logo} alt="csti logo" className="md:w-[70px]  w-[30px]" />
            <p className="md:text-[20px] font-semibold md:mb-1 text-[12px] md:leading-[25px] logo">
              Ilmiy texnik <br /> axborot markazi
            </p>
          </div>
          <Link
            to="https://maps.app.goo.gl/WYjxXC7bKiLLKzGX6"
            className="flex items-center gap-3 mt-[20px]"
          >
            <FaMapLocationDot className="text-[18px]" />
            <p>Olmazor t. universitet ko’chasi 7</p>
          </Link>
          <Link
            to="tel:+998712033223"
            className="flex items-center mt-[8px] gap-3"
          >
            <FaPhoneAlt />
            <p>+998 (71) 203-32-23</p>
          </Link>
          <Link
            to="mailto:info@ilmiy.uz"
            className="flex items-center mt-[8px] gap-3"
          >
            <IoMdMailUnread className="text-[19px]" />
            <p>info.csti@ilmiy.uz</p>
          </Link>
          <span className="text-[12px] text-gray-300 w-[130px] mt-[30px] inline-block">
            Copyright 2024 © CSTI ®. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col">
          <Link to="/" className="font-semibold">
            Bosh sahifa
          </Link>
          <Link to="/about" className="text-[14px] font-[500] mt-[20px]">
            Markaz haqida
          </Link>
          <Link to="/tuzilma" className="text-[14px] font-[500] mt-[8px]">
            Tashkiliy tuzilma
          </Link>
        </div>
        <div>
          <Link to="/liders" className="font-semibold">
            Rahbariyat
          </Link>
        </div>
        <div>
          <Link to="/activity" className="font-semibold">
            Faoliyat
          </Link>
        </div>
        <div>
          <Link to="/dijests" className="font-semibold">
            Dayjestlar
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">Galareyalar</div>
          <Link to="/projects" className="text-[14px] font-[500] mt-[20px]">
            Loyihalar
          </Link>
          <Link to="/fotogalary" className="text-[14px] font-[500] mt-[8px]">
            Fotogalareya
          </Link>
          <Link to="/videogalary" className="text-[14px] font-[500] mt-[8px]">
            Videogalareya
          </Link>
        </div>
      </div>
    </div>
  );
}
