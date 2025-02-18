"use client";

import { Box, Tooltip } from "@mui/material";
import { SiGoogleads, SiTiktok, SiMeta, SiLinkedin, SiAmazon, SiX } from "react-icons/si";

const icons = [
  { name: "Google Ads", icon: <SiGoogleads size={40} /> },
  { name: "TikTok", icon: <SiTiktok size={40} /> },
  { name: "Meta", icon: <SiMeta size={40} /> },
  { name: "LinkedIn", icon: <SiLinkedin size={40} /> },
  { name: "Amazon", icon: <SiAmazon size={40} /> },
  { name: "X (Twitter)", icon: <SiX size={40} /> },
];

const IconGrid = () => {
  return (
    <Box className="flex justify-center items-center gap-6 p-6 bg-black min-h-screen">
      {icons.map((item, index) => (
        <Tooltip key={index} title={item.name} arrow>
          <Box
            className="w-16 h-16 flex justify-center items-center rounded-xl bg-gray-800/50 backdrop-blur-md 
                       hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
          >
            {item.icon}
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
};

export default IconGrid;
