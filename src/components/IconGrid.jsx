"use client";

import { Box } from "@mui/material";
import { SiGoogleads, SiTiktok, SiMeta, SiLinkedin, SiAmazon, SiX } from 'react-icons/si';

const icons = [
  { name: "Google Ads", icon: <SiGoogleads size={24} /> },
  { name: "TikTok", icon: <SiTiktok size={24} /> },
  { name: "Meta", icon: <SiMeta size={24} /> },
  { name: "LinkedIn", icon: <SiLinkedin size={24} /> },
  { name: "Amazon", icon: <SiAmazon size={24} /> },
  { name: "X", icon: <SiX size={24} /> },
];

const IconGrid = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-6">
      {icons.map((iconItem) => (
        <Box
          key={iconItem.name}
          className="relative group flex flex-col justify-center items-center cursor-pointer"
        >
          {/* Icon Container with Background & Border */}
          <div className="bg-[#7687B5] border border-[#5d6a97] rounded-xl p-4 flex justify-center items-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
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