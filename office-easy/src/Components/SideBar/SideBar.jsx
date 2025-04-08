import { useState } from "react";
import CloseButton from "../CloseButton/CloseButton";
import Logo from "../Logo/Logo";
import MenuLists from "../MenuList/MenuLists";
import Styles from "./SideBar.module.css";
import { Box } from "@mui/material";
import SocalMediaIcons from "../SocalMediaIcons/SocalMediaIcons";

const SideBar = ({setIsOpen}) => {
   
  return (
    <Box
      component="div"
      className={Styles.sidebar}
      sx={{ backgroundColor: "#f9f7fd" }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <CloseButton setIsOpen={setIsOpen}/>
      </Box>
      <Box
        sx={{
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          m: "20px 0px",
          backgroundColor: "background.main",
        }}
      >
        <MenuLists useIn="sidebar" setIsOpen={setIsOpen} />
      </Box>
      <Box component="div" sx={{pl:3, mt: 5 }}>
        <SocalMediaIcons />
      </Box>
    </Box>
  );
};

export default SideBar;
