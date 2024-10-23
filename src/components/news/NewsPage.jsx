import React, { useEffect, useState } from "react";
import { BiSolidArrowToBottom } from "react-icons/bi";
import img from "../../images/contact.webp";

export default function NewsPage() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`relative z-10 ${isFixed ? "md:mt-[93px] mt-[48px]" : ""}`}>
      <div className="container md:max-w-7xl md:mx-auto grid  md:py-3 py-1.5 max-w-[90%] mx-auto items-center  gap-3 ">
        <div>
          <h2 className="text-[46px] font-[500] my-10 ">Blog and News</h2>
          <div className="grid grid-cols-12 justify-between space-x-8 items-center w-full ">
            <div
              className="img_news col-span-6 px-10 py-20 rounded-xl"
              style={{
                width: "100%",
                backgroundImage: `url(${img})`,
              }}
            >
              <div className="logotip text-[#FEC139] text-[26px] font-[600]">
                CSTI
              </div>
              <h4 className="text-[26px] font-[600] max-w-[300px]">
                10 razones para implementar un sistema ERP en tu negocio
              </h4>
            </div>
            <div className="col-span-6">
              <span className="data">May 10, 2024</span>
              <h3 className="text-[32px] font-[600]">
                10 razones para implementar un sistema ERP en tu negocio
              </h3>
              <div>
                <button className="mt-2 px-5 py-2.5 bg-[#FEC139] rounded text-[17px] font-[700] text-black flex items-center gap-3">
                  Batafsil o'qing
                  <BiSolidArrowToBottom className="inline-block text-[22px]" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[42px] text-center font-[600] my-10">
              More articles of interest
            </h2>
            <div className="grid grid-cols-12 space-x-3 mt-4 ">
              <div className="col-span-4 my-5">
                <div
                  className="px-10 py-16 rounded-xl"
                  style={{
                    width: "100%",
                    backgroundImage: `url(${img})`,
                  }}
                >
                  <p className="logotip  text-[#FEC139] text-[20px] font-[600]">
                    CSTI
                  </p>
                  <h5 className="text-[18px] font-[600]">
                    10 razones para implementar un sistema ERP en tu negocio
                  </h5>
                </div>
                <div className="mt-4">
                  <span>May 10, 2024</span>
                  <h3 className="text-[24px] font-[600]">
                    10 razones para implementar un sistema ERP en tu negocio
                  </h3>
                  <div>
                    <button className="mt-2 px-5 py-2.5 bg-[#FEC139] rounded text-[17px] font-[500] text-black flex items-center gap-3">
                      Batafsil o'qing
                      <BiSolidArrowToBottom className="inline-block text-[22px]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-4 my-5">
                <div
                  className="px-10 py-16 rounded-xl"
                  style={{
                    width: "100%",
                    backgroundImage: `url(${img})`,
                  }}
                >
                  <p className="logotip  text-[#FEC139] text-[20px] font-[600]">
                    CSTI
                  </p>
                  <h5 className="text-[18px] font-[600]">
                    10 razones para implementar un sistema ERP en tu negocio
                  </h5>
                </div>
                <div className="mt-4">
                  <span>May 10, 2024</span>
                  <h3 className="text-[24px] font-[600]">
                    10 razones para implementar un sistema ERP en tu negocio
                  </h3>
                  <div>
                    <button className="mt-2 px-5 py-2.5 bg-[#FEC139] rounded text-[17px] font-[500] text-black flex items-center gap-3">
                      Batafsil o'qing
                      <BiSolidArrowToBottom className="inline-block text-[22px]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-4 my-5">
                <div
                  className="px-10 py-16 rounded-xl"
                  style={{
                    width: "100%",
                    backgroundImage: `url(${img})`,
                  }}
                >
                  <p className="logotip  text-[#FEC139] text-[20px] font-[600]">
                    CSTI
                  </p>
                  <h5 className="text-[18px] font-[600]">
                    10 razones para implementar un sistema ERP en tu negocio
                  </h5>
                </div>
                <div className="mt-4">
                  <span>May 10, 2024</span>
                  <h3 className="text-[24px] font-[600]">
                    10 razones para implementar un sistema ERP en tu negocio
                  </h3>
                  <div>
                    <button className="mt-2 px-5 py-2.5 bg-[#FEC139] rounded text-[17px] font-[500] text-black flex items-center gap-3">
                      Batafsil o'qing
                      <BiSolidArrowToBottom className="inline-block text-[22px]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-4 my-5">
                <div
                  className="px-10 py-16 rounded-xl"
                  style={{
                    width: "100%",
                    backgroundImage: `url(${img})`,
                  }}
                >
                  <p className="logotip  text-[#FEC139] text-[20px] font-[600]">
                    CSTI
                  </p>
                  <h5 className="text-[18px] font-[600]">
                    10 razones para implementar un sistema ERP en tu negocio
                  </h5>
                </div>
                <div className="mt-4">
                  <span>May 10, 2024</span>
                  <h3 className="text-[24px] font-[600]">
                    10 razones para implementar un sistema ERP en tu negocio
                  </h3>
                  <div>
                    <button className="mt-2 px-5 py-2.5 bg-[#FEC139] rounded text-[17px] font-[500] text-black flex items-center gap-3">
                      Batafsil o'qing
                      <BiSolidArrowToBottom className="inline-block text-[22px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
