import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import NavigationSection from "../Components/HeaderNavigationSection/NavigationSection";
import { Box } from "@mui/material";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <ScrollToTop />
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
