import React, { useState } from "react";
import Styles from "./MenuList.module.css";
import { Box, Menu, MenuItem, Typography, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { pages } from "../../pages";

const MenuLists = ({ useIn, item }) => {
  const miniTab = useMediaQuery("(max-width:1189px)");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggle = (event) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filteredPages = Array.isArray(item)
    ? item
    : pages.filter((item) => !(useIn === "footer" && item.id === "properties"));

  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        justifyContent: "start",
        alignItems: useIn === "footer" ? "start" : "center",
        flexDirection: useIn === "footer" ? "column" : "row",
      }}
    >
      {filteredPages.map((item) => (
        <MenuItem
          key={item.id}
          sx={{ borderRadius: 2, mx: 0.5 }}
          onClick={item.id === "properties" ? handleToggle : undefined}
        >
          {item.id === "properties" ? (
            <>
              <Typography
                variant="button"
                aria-controls="properties-menu"
                aria-haspopup="true"
                aria-expanded={Boolean(anchorEl)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  color:
                    useIn === "footer"
                      ? "#fff"
                      : anchorEl
                      ? "text.secondary"
                      : "text.primary",
                  fontWeight: 500,
                  fontSize: 17,
                  cursor: "pointer",
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "text.secondary",
                  },
                }}
              >
                {item.name}
                <ArrowDropDownIcon
                  fontSize="small"
                  sx={{
                    transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              </Typography>

              <Menu
                id="properties-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                {item.section?.map((subItem) => (
                  <MenuItem
                    key={subItem.id}
                    onClick={handleClose}
                    component={NavLink}
                    to={subItem.path}
                  >
                    {subItem.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <NavLink
              to={item.path}
              aria-label={item.name}
              style={{ textDecoration: "none" }}
            >
              {({ isActive }) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  {isActive && (
                    useIn ==='footer'?"":
                    <Box
                      className={Styles.circle}
                      sx={{
                        backgroundColor: "text.secondary",
                        mx: miniTab ? 0.5 : 1,
                      }}
                    ></Box>
                  )}
                  <Typography
                    variant="button"
                    sx={{
                      color:
                        useIn === "footer"
                          ? "#fff"
                          : isActive
                          ? "text.secondary"
                          : "text.primary",
                      fontWeight: 500,
                      fontSize: 17,
                      cursor: "pointer",
                      textTransform: "capitalize",
                      "&:hover": {
                        color: "text.secondary",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              )}
            </NavLink>
          )}
        </MenuItem>
      ))}
    </Box>
  );
};

export default MenuLists;
