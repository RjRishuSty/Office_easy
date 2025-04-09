import { Stack, Typography } from "@mui/material";
import React from "react";
import SlideSwiper from "../Swipers/SlideSwiper";
import { propertyList } from "../../whatWeDo";

const WhatWeDo = () => {
  return (
    <Stack sx={{ py: 10 }}>
      <Typography
        sx={{
          textTransform: "uppercase",
          color: "text.primary",
          fontWeight: 700,
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        What We Do
      </Typography>
      <SlideSwiper sliderData={propertyList} useIn="whatWeDo" />
    </Stack>
  );
};

export default WhatWeDo;
