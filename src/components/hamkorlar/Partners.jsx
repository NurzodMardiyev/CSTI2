import React from "react";
import partner1 from "../../images/partners1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../../App.css";

const data = [
  {
    id: 1,
    images: [
      {
        image:
          "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    title: "nurzod",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque labore possimus officiis.",
    source: "https://kun.uz",
  },
  {
    id: 2,
    images: [
      {
        image:
          "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    title: "dima",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque labore possimus officiis.",
    source: "https://kun.uz",
  },
  {
    id: 3,
    images: [
      {
        image:
          "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    title: "shakae",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque labore possimus officiis.",
    source: "https://kun.uz",
  },
  {
    id: 4,
    images: [
      {
        image:
          "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    title: "shalea",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque labore possimus officiis.",
    source: "https://kun.uz",
  },
];

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
};

// Maxsus orqaga o'tkazish tugmasi
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

export default function Partners() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1338, // sm va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 2, // 1ta slayd ko'rsatadi
        },
      },
      {
        breakpoint: 1024, // sm va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 2, // 1ta slayd ko'rsatadi
        },
      },
      {
        breakpoint: 767, // mobil va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 1, // 1ta slayd ko'rsatadi
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-[#F2FEFF] to-[#fff] py-10">
      <div className="title flex justify-center mb-4">
        <h1 className="lg:text-[42px] text-[30px] font-[600] text-[#12284C]">
          Global technology experts
        </h1>
      </div>
      <div className="container md:max-w-[1400px] md:mx-auto grid  md:py-3 py-1.5 max-w-[90%] mx-auto items-center grid-cols-12 gap-3 justify-center ">
        <div className="card bg-white max-w-[380px]  rounded-xl lg:flex flex-col items-center px-10 py-14 hidden col-span-4 ">
          <div>
            <img src={partner1} alt="partner1" />
          </div>
          <p className="text-center text-[#12284C] text-[14px]">
            With over a decade’s experience with SAP technology and managing IT
            projects, we have a proven track record of success reflected in our
            extensive clients roster.
          </p>
        </div>
        <div className="md:max-w-[840px] max-w-[420px]   lg:col-span-8 col-span-12 mx-auto">
          <Slider {...settings} className="  max-w-[840px] gap-2 ">
            {data?.map((card) => (
              <div className="card bg-white col-span-6 lg:col-span-4  max-w-[380px]  rounded-xl flex flex-col items-center justify-center px-10 py-14">
                <div>
                  <img src={partner1} alt="partner1" />
                </div>
                <p className="text-center text-[#12284C] text-[14px]">
                  With over a decade’s experience with SAP technology and
                  managing IT projects, we have a proven track record of success
                  reflected in our extensive clients roster.
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
