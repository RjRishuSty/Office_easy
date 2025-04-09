import { Box } from "@mui/material";
import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import SearchSection from "../../Components/SearchSection/SearchSection";
import WhyChoose from "../../Components/WhyChoose/WhyChoose";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import Testimonial from "../../Components/Testimonial/Testimonial";
import AmenitiesSection from "../../Components/AmenitiesSection/AmenitiesSection";

const Home = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <HeroSection />
      <SearchSection />
      <WhyChoose />
      <WhatWeDo />
      <AmenitiesSection />
      <Testimonial />
    </Box>
  );
};

export default Home;
