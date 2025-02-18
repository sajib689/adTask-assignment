"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png", "/7.png"
];

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    arrows: false, 
  };

  return (
    <div className="w-full flex justify-center items-center mt-5 mb-10">
      <Slider {...settings} className="w-full max-w-4xl flex justify-center items-center">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center items-center px-2">
            <Image 
              src={src} 
              alt={`Slide ${index + 1}`} 
              width={100} 
              height={120} 
              priority 
              className="rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSection;
