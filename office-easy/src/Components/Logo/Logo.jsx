import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box
      component="div"
      sx={{
        // border:'2px solid blue',
        width: "15%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <img
          src={logo}
          alt="RegisterKaro"
          style={{
            width: "auto",
            height: isMobile ? 50 : 60,
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </NavLink>
    </Box>
  );
};

export default Logo;
