"use client";

import { Box } from "@mui/material";
import { SiGoogleads, SiTiktok, SiMeta, SiLinkedin, SiAmazon, SiX } from 'react-icons/si';

const icons = [
  { name: "Google Ads", icon: <SiGoogleads size={48} /> },
  { name: "TikTok", icon: <SiTiktok size={48} /> },
  { name: "Meta", icon: <SiMeta size={48} /> },
  { name: "LinkedIn", icon: <SiLinkedin size={48} /> },
  { name: "Amazon", icon: <SiAmazon size={48} /> },
  { name: "X", icon: <SiX size={48} /> },
];

const IconGrid = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-6 mt-6">
      {icons.map((iconItem) => (
        <Box
          key={iconItem.name}
          className="relative group flex flex-col justify-center items-center cursor-pointer"
        >
          {/* Icon Container with Gradient Background & Border */}
          <div className="bg-gradient-to-b from-[#7687B5] to-[#333B4F] border border-[#5d6a97] rounded-xl p-5 flex justify-center items-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
            <div className="text-white">{iconItem.icon}</div>
          </div>

          {/* Icon Name */}
          <div className="opacity-0 group-hover:opacity-100 text-[#7687B5] text-sm font-medium transition-all duration-300 mt-2">
            {iconItem.name}
          </div>
        </Box>
      ))}
    </div>
  );
};

export default IconGrid;
