"use client";

import { Box } from "@mui/material";
import { SiGoogleads, SiTiktok, SiMeta, SiLinkedin, SiAmazon, SiX } from 'react-icons/si';

const icons = [
  { name: "Google Ads", icon: <SiGoogleads size={40} /> },
  { name: "TikTok", icon: <SiTiktok size={40} /> },
  { name: "Meta", icon: <SiMeta size={40} /> },
  { name: "LinkedIn", icon: <SiLinkedin size={40} /> },
  { name: "Amazon", icon: <SiAmazon size={40} /> },
  { name: "X", icon: <SiX size={40} /> },
];

const IconGrid = () => {
  return (
    <div className="grid grid-cols-6 p-4">
      {icons.map((iconItem) => (
        <Box
          key={iconItem.name}
          className="relative group flex flex-col justify-center items-center cursor-pointer"
        >
          {/* Icon with hover effect */}
          <div className="text-[#7687B5] transition-all duration-300 group-hover:-translate-y-2">
            {iconItem.icon}
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
