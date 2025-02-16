"use client";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Image from "next/image";

const images = [
  "/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png", "/7.png"
];

const SliderSection = () => {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <Flicking
        circular={true}
        autoPlay={true}
        autoPlayInterval={2000}
        className="w-full"
      >
        {images.map((src, index) => (
          <div key={index} className="mx-2 w-[300px]">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={100}
              height={120}
              priority
            />
          </div>
        ))}
      </Flicking>
    </div>
  );
};

export default SliderSection;
