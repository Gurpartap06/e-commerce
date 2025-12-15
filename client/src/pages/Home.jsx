import React from "react";
import "./home.css";

import one from "../home pic/1.webp";
import two from "../home pic/2.webp";
import three from "../home pic/3.gif";
import four from "../home pic/4.gif";
import five from "../home pic/5.webp";
import six from "../home pic/6.jpg";

import disc from "../home pic/disc.webp";

import new1 from "../new article/1.webp";
import new2 from "../new article/2.webp";
import new3 from "../new article/3.webp";
import new4 from "../new article/4.webp";
import new5 from "../new article/5.webp";

import tre1 from "../trend/1.webp";
import tre2 from "../trend/2.webp";
import tre3 from "../trend/3.webp";
import tre4 from "../trend/4.webp";
import tre5 from "../trend/5.webp";
import tre6 from "../trend/6.webp";
import tre7 from "../trend/7.webp";
import tre8 from "../trend/8.webp";
import tre9 from "../trend/9.webp";
import tre10 from "../trend/10.webp";
import tre11 from "../trend/11.webp";
import tre12 from "../trend/12.webp";

import wom1 from "../women/1.webp";
import wom2 from "../women/2.webp";
import wom3 from "../women/3.webp";
import wom4 from "../women/4.webp";
import wom5 from "../women/5.webp";
import wom6 from "../women/6.webp";
import wom7 from "../women/7.webp";
import wom8 from "../women/8.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide><img src={one} alt="one" /></SwiperSlide>
        <SwiperSlide><img src={two} alt="two" /></SwiperSlide>
        <SwiperSlide><img src={three} alt="three" /></SwiperSlide>
        <SwiperSlide><img src={four} alt="four" /></SwiperSlide>
        <SwiperSlide><img src={five} alt="five" /></SwiperSlide>
        <SwiperSlide><img src={six} alt="six" /></SwiperSlide>
      </Swiper>

      <div className="mt-10">
        <img src={disc} alt="disc" />
      </div>

      <div className="bg-black text-white text-center py-3 text-lg font-semibold">
        <p className=" text-2xl font-semibold text-yellow-300" >
          NEW ARRIVALS
        </p>
        <div className="grid grid-cols-5 gap-4 px-4 pt-4">
          <img src={new1} alt="new1" />
          <img src={new2} alt="new2" />
          <img src={new3} alt="new3" />
          <img src={new4} alt="new4" />
          <img src={new5} alt="new5" />
        </div>
      </div>

      <div className="bg-black text-white text-center py-3 text-lg font-semibold">
        <p className="text-2xl font-semibold text-yellow-300">TRENDING CATEGORIES</p>
        <div className="grid grid-cols-4 gap-4 pt-4">
          <img src={tre1} alt="tre1" />
          <img src={tre2} alt="tre2" />
          <img src={tre3} alt="tre3" />
          <img src={tre4} alt="tre4" />
          <img src={tre5} alt="tre5" />
          <img src={tre6} alt="tre6" />
          <img src={tre7} alt="tre7" />
          <img src={tre8} alt="tre8" />
          <img src={tre9} alt="tre9" />
          <img src={tre10} alt="tre10" />
          <img src={tre11} alt="tre11" />
          <img src={tre12} alt="tre12" />
        </div>
      </div>

      <div className="bg-black text-white text-center py-3 text-lg font-semibold">
        <p className="text-2xl font-semibold text-yellow-300">TRENDING WOMEN</p>
        <div className="grid grid-cols-4 gap-4 pt-4">
          <img src={wom1} alt="tre1" />
          <img src={wom2} alt="tre2" />
          <img src={wom3} alt="tre3" />
          <img src={wom4} alt="tre4" />
          <img src={wom5} alt="tre5" />
          <img src={wom6} alt="tre6" />
          <img src={wom7} alt="tre7" />
          <img src={wom8} alt="tre8" />

        </div>
      </div>

    </>
  );
};

export default Home;
