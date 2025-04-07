import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import NavigationSection from "../Components/HeaderNavigationSection/NavigationSection";
import { Box } from "@mui/material";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <Header />
      {path !== "/" && (
        <Box sx={{ mt: 10 }}>
          <NavigationSection />
        </Box>
      )}

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
