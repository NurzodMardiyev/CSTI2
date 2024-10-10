import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function News() {
  const newsData = [
    {
      image:
        "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "В АО «Самрук-Қазына» прошел брифинг, посвященный финансовым результатам Фонда в 2023 году... Все права защищены. Используйте активную ссылку на https://sk.kz/?lang=ru",
      date: "2024-10-01",
    },
    {
      image:
        "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "В АО «Самрук-Қазына» прошел брифинг, посвященный финансовым результатам Фонда в 2023 году... Все права защищены. Используйте активную ссылку на https://sk.kz/?lang=ru",
      date: "2024-10-01",
    },
    {
      image:
        "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "В АО «Самрук-Қазына» прошел брифинг, посвященный финансовым результатам Фонда в 2023 году... Все права защищены. Используйте активную ссылку на https://sk.kz/?lang=ru",
      date: "2024-10-01",
    },
    {
      image:
        "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "В АО «Самрук-Қазына» прошел брифинг, посвященный финансовым результатам Фонда в 2023 году... Все права защищены. Используйте активную ссылку на https://sk.kz/?lang=ru",
      date: "2024-10-01",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        '" style="flex: 1; width: 25%; color:black; ">' +
        newsData[index].date +
        "</div>"
      );
    },
  };
  return (
    <div>
      <div className="container lg:max-w-9xl md:mx-auto  md:py-3 py-1.5 max-w-[90%] mx-auto items-center gap-3 my-14">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="news-content">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-6 p-10">
                    <FaQuoteLeft className="text-[36px] text-[#fec139] mb-6" />
                    <h2 className="news_title text-[28px]">
                      АО «Самрук-Қазына» по итогам 2023 года нарастило выручку
                      до 15,4 трлн тенге Все права защищены. Используйте
                      активную ссылку
                    </h2>
                    <p>{newsData[0].text}</p>
                    <div>
                      <Link>Подробнее</Link>
                    </div>
                  </div>
                  <div className="col-span-6 border">
                    <img
                      src={newsData[0].image}
                      alt={`News ${0 + 1}`}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="news-content">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-6 px-6">
                    <h2 className="news_title text-[28px]">
                      АО «Самрук-Қазына» по итогам 2023 года нарастило выручку
                      до 15,4 трлн тенге Все права защищены. Используйте
                      активную ссылку
                    </h2>
                    <p>{newsData[1].text}</p>
                    <div>
                      <Link>Подробнее</Link>
                    </div>
                  </div>
                  <div className="col-span-6 border">
                    <img
                      src={newsData[1].image}
                      alt={`News ${0 + 1}`}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="news-content">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-6 px-6">
                    <h2 className="news_title text-[28px]">
                      АО «Самрук-Қазына» по итогам 2023 года нарастило выручку
                      до 15,4 трлн тенге Все права защищены. Используйте
                      активную ссылку
                    </h2>
                    <p>{newsData[2].text}</p>
                    <div>
                      <Link>Подробнее</Link>
                    </div>
                  </div>
                  <div className="col-span-6 border">
                    <img
                      src={newsData[2].image}
                      alt={`News ${0 + 1}`}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="news-content">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-6 px-6">
                    <h2 className="news_title text-[28px]">
                      АО «Самрук-Қазына» по итогам 2023 года нарастило выручку
                      до 15,4 трлн тенге Все права защищены. Используйте
                      активную ссылку
                    </h2>
                    <p>{newsData[2].text}</p>
                    <div>
                      <Link>Подробнее</Link>
                    </div>
                  </div>
                  <div className="col-span-6 border">
                    <img
                      src={newsData[2].image}
                      alt={`News ${0 + 1}`}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
        </Swiper>
        {/* <div className="flex flex-col">
          
          <div ref={newsRef} className="news-content">
            <div className="grid grid-cols-12 ">
              <div className="col-span-6">
                <h2 className="news_title text-[40px]">
                  АО «Самрук-Қазына» по итогам 2023 года нарастило выручку до
                  15,4 трлн тенге Все права защищены. Используйте активную
                  ссылку на https://sk.kz/?lang=ru
                </h2>
                <p>{newsData[currentNews].text}</p>
                <div>
                  <Link>Подробнее</Link>
                </div>
              </div>
              <div className="col-span-6 border">
                <img
                  src={newsData[currentNews].image}
                  alt={`News ${currentNews + 1}`}
                  className="w-full"
                />
              </div>
            </div>
          </div>

         
          <div className="button-group">
            {newsData.map((_, index) => (
              <button key={index} onClick={() => slideInOutNews(index)}>
                Yangilik {index + 1}
              </button>
            ))}
          </div>
        </div> */}
      </div>
      <style jsx="true">{`
        .swiper-pagination {
          display: flex;
          justify-content: space-between; /* Bullet'larni bir xil masofada joylashtirish */
        }

        .swiper-pagination .swiper-pagination-bullet {
          display: flex; /* Har bir bullet flex bo'ladi */
          justify-content: center; /* O'rtaga joylashadi */
          align-items: center; /* Vertikal o'rtaga joylashadi */
          width: 25%; /* Kengligi 25% */
          height: 50px; /* Zaruriy balandlik */
          background: #ccc; /* Background rangi */
          border-radius: 5px; /* Radius */
          color: #fff; /* Matn rangi */
        }
        .swiper-pagination .swiper-pagination-bullet {
          background: #fec139 !important;
        }
        .news_title::after {
          content: "";
          margin-top: 10px;
          margin-bottom: 20px;
          display: flex;
          height: 2px;
          width: 100px;
          background-color: black;
        }
      `}</style>
    </div>
  );
}
