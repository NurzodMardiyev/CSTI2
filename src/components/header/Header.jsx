import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { csti } from "../../feature/queryApi.js";
import { Flex, Spin } from "antd";
import { BiSolidArrowToBottom } from "react-icons/bi";

export default function HeaderJS() {
  const [isFixed, setIsFixed] = useState(false);

  // const queryClient = useQueryClient();

  // const heroSection = useMutation(csti.heroSection, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("heroSection");
  //   },
  //   onError: (error) => {
  //     console.log("Mutation error:", error); // Xatolik haqida batafsil ma'lumot
  //   },
  // });

  // useEffect(() => {
  //   heroSection.mutate(); // Mutationni boshlash
  // }, []);

  // const { data, error, isLoading } = useQuery(["heroSection"], () =>
  //   csti.heroSection("")
  // );

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

  // if (isLoading)
  //   return (
  //     <div className="absolute w-full h-[100vh] top-0 left-0 flex items-center justify-center">
  //       <Flex>
  //         <Spin size="large" />
  //       </Flex>
  //     </div>
  //   );
  // if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div className={`relative z-10 ${isFixed ? "md:mt-[93px] mt-[48px]" : ""}`}>
      <div className="headerInfo  w-full h-[500px] z-10 text-white">
        <div className="container md:max-w-9xl md:mx-auto flex flex-col  md:py-3 py-1.5 max-w-[90%] mx-auto justify-start h-full gap-3">
          <h1 className="md:text-[54px] text-[32px] font-[400]    lg:mt-[50px]">
            Launch into{" "}
            <span className="font-[600] text-[#FEC139]">
              {" "}
              the Digital Universe!
            </span>
          </h1>
          <p className="md:text-[18px] text-[14px] md:w-[750px] w-[330px] font-[400]">
            {/* {data[0]?.description} */} Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Itaque inventore commodi ratione
            eveniet dicta, dolore sint velit expedita
          </p>
          <div>
            <button className="mt-2 px-5 py-2.5 bg-[#FEC139] rounded text-[17px] font-[700] text-black flex items-center gap-3">
              Get Started
              <BiSolidArrowToBottom className="inline-block text-[22px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
