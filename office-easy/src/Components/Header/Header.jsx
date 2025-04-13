import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Logo/Logo";
import { Button, useMediaQuery } from "@mui/material";
import MenuLists from "../MenuList/MenuLists";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import SideBar from "../SideBar/SideBar";
import { useState, useCallback } from "react";
import HeaderInfo from "../HeaderInfo/HeaderInfo";

// Elevation effect on scroll
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      ...children.props.sx,
      top: trigger ? 0 : 35,
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const miniLatop = useMediaQuery("(max-width:1276px)");

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <HeaderInfo />
      <ElevationScroll {...props}>
        <AppBar
          position="fixed"
          sx={{
            py: 0.7,
            backgroundColor: "primary.main",
            zIndex: 1200,
            mt: isMobile ? -0.4 : 0,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Logo useIn="header" />
            {!isMobile && (
              <>
                <MenuLists />
                <Box
                  sx={{
                    width: "auto",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <Button
                    startIcon={<LoginIcon />}
                    variant="contained"
                    size={miniLatop ? "small" : "medium"}
                    sx={{
                      backgroundColor: "primary.light",
                      mr: 2,
                      color: "#fff",
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    endIcon={<HowToRegIcon />}
                    variant="contained"
                    size={miniLatop ? "small" : "medium"}
                    sx={{ backgroundColor: "primary.dark", color: "#fff" }}
                  >
                    Register
                  </Button>
                </Box>
              </>
            )}
            {isMobile && (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ ml: "auto" }}
                  onClick={handleToggle}
                >
                  <MenuIcon sx={{ fontSize: 40, color: "text.primary" }} />
                </IconButton>
                {isOpen ? <SideBar setIsOpen={setIsOpen} /> : null}
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

export default Header;
