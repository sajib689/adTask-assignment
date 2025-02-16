"use client";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Resources", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#0A0A0A", height: "100%" }}
    >
      <Typography variant="h6" sx={{ my: 2, color: "white" }}>
        ad<b>Task</b>.ai
      </Typography>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} button component={Link} href={item.href}>
            <ListItemText
              primary={item.label}
              sx={{ color: "white", textAlign: "center" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      className="container mx-auto"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#050506",
          boxShadow: "none",
          mx: "auto",
          borderColor: "#555",
          borderRadius: "24px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
  variant="h4"
  sx={{
    color: "white",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
      transform: "scale(1.05)",
    },
  }}
>
  ad
  <Box
    component="span"
    sx={{
      color: "#D1D5DB",
      transition: "color 0.3s ease-in-out",
      "&:hover": {
        color: "#fff",
      },
    }}
  >
    Task
  </Box>
  .ai
</Typography>


          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{ color: "white", textTransform: "none", mx: 2 }}
                component={Link}
                href={item.href}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Button
            variant="outlined"
            sx={{
              position: "relative",
              color: "white",
              borderColor: "#7687B5",
              borderRadius: "24px",
              textTransform: "none",
              px: 3,
              overflow: "hidden",
              transition: "border-color 0.3s ease-in-out",

              "&:hover": {
                borderColor: "#888",
              },

              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                opacity: 0,
                transform: "translateX(-100%)",
                transition:
                  "opacity 0.3s ease-in-out, transform 0.6s ease-in-out",
              },

              "&:hover::before": {
                opacity: 1,
                transform: "translateX(100%)",
              },
            }}
          >
            Try Now for Free
          </Button>

          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </Box>
  );
}
