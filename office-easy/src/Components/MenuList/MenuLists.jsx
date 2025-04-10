import React from "react";
import Styles from "./MenuList.module.css";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import { pages } from "../../pages";
import DropDownMenu from "./DropDownMenu";

const MenuLists = ({ useIn, item, setIsOpen }) => {
  const miniLatop = useMediaQuery("(max-width:1276px)");
  const smallTablet = useMediaQuery("(max-width:1033px)");
  const isMobile = useMediaQuery("(max-width:900px)");

  const filteredPages = Array.isArray(item)
    ? item
    : pages.filter((p) => !(useIn === "footer" && p.id === "propertyLease"));

  return (
    <Box
      sx={{
        width: useIn === "footer" || useIn === "sidebar" ? "100%" : "auto",
        display: "flex",
        justifyContent: "start",
        alignItems:
          useIn === "footer" || useIn === "sidebar" ? "start" : "center",
        flexDirection:
          useIn === "footer" || useIn === "sidebar" ? "column" : "row",
      }}
    >
      {filteredPages.map((item) =>
        item.section && useIn !== "footer" ? (
          <DropDownMenu item={item} useIn={useIn} setIsOpen={setIsOpen} />
        ) : item.id === "properties" ? (
          ""
        ) : (
          <NavLink
            to={item.path}
            aria-label={item.name}
            style={{ textDecoration: "none", padding: 1 }}
            onClick={() => {
              if (setIsOpen) setIsOpen(false);
            }}
          >
            {({ isActive }) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                {isActive && useIn !== "footer" && (
                  <Box
                    className={Styles.circle}
                    sx={{
                      backgroundColor: "text.secondary",
                      mx: miniLatop ? 0.5 : 0.7,
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

                    borderRadius: 1,
                    mr: 2.5,
                    // border: "2px solid red",
                    pl: isMobile ? 0.5 : 0,
                    mb: useIn === "footer" || useIn === "sidebar" ? 0.7 : 0,
                    fontWeight: 500,
                    fontSize: isMobile ? 18 : miniLatop ? 14 : 17,
                    cursor: "pointer",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "text.secondary",
                    },
                  }}
                >
                  {smallTablet
                    ? item.id === "about"
                      ? item.name.slice(0, 5)
                      : smallTablet
                      ? item.id === "contact"
                        ? item.name.slice(0, 7)
                        : item.name
                      : item.name
                    : item.name}
                </Typography>
              </Box>
            )}
          </NavLink>
        )
      )}
    </Box>
  );
};

export default MenuLists;
