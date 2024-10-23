import React from "react";
import { BiSolidArrowToBottom } from "react-icons/bi";
import "../../App.css";

export default function About() {
  return (
    <div>
      <div className="second_head-bg ">
        <div className="container lg:max-w-9xl md:mx-auto px-8">
          <div className="max-w-[800px]">
            <h2 className="text-[46px] text-white font-[400]  ">
              Expand your horizons in the{" "}
              <span className="text-[#FEC139]">digital universe!</span>
            </h2>
            <p className="text-white mb-5 mt-2 text-[21px]">
              We are proud leaders in the fields of consulting and technology
              services, driving efficiency, productivity, and business success
              through innovation.
            </p>
          </div>
          <div>
            <button className="mt-2 px-5 py-2.5 bg-[#FEC139] rounded text-[17px] font-[700] text-black flex items-center gap-3">
              Batafsil
              <BiSolidArrowToBottom className="inline-block text-[22px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="container lg:max-w-9xl md:mx-auto  md:py-3 py-1.5 max-w-[90%] mx-auto items-center gap-3 my-14"></div>
    </div>
  );
}
