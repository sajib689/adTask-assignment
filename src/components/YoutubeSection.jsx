"use client";

import Image from "next/image";

const YoutubeSection = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-gray-900 text-white flex items-center justify-center">
      <div className="relative w-[850px] h-[650px] flex items-center justify-center">
        <div className="youtube-box">
          <Image
            src="/youtube.png"
            alt="Youtube Logo"
            width={850}
            height={650}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default YoutubeSection;
