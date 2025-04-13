import { useState } from "react";
import CloseButton from "../CloseButton/CloseButton";
import Logo from "../Logo/Logo";
import MenuLists from "../MenuList/MenuLists";
import Styles from "./SideBar.module.css";
import { Box } from "@mui/material";
import SocalMediaIcons from "../SocalMediaIcons/SocalMediaIcons";

const SideBar = ({ setIsOpen }) => {
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
          padding: "15px 20px",
        }}
      >
        <Logo />
        <CloseButton setIsOpen={setIsOpen} />
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "auto",
          py: 2,
          mt: 3,
          mb: 3,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "primary.light",
        }}
      >
        <SocalMediaIcons useIn='sidebar'/>
      </Box>
      <Box
        sx={{
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          m: "20px 0px",
          padding: "15px 20px",
          backgroundColor: "background.main",
        }}
      >
        <MenuLists useIn="sidebar" setIsOpen={setIsOpen} />
      </Box>
    </Box>
  );
};

export default SideBar;
