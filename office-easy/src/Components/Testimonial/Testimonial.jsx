import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import SlideSwiper from "../Swipers/SlideSwiper";
import { testimonials } from "../../testimonial";

const Testimonial = () => {
    const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Stack
      sx={{
        pb: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          color: "text.primary",
          fontWeight: 700,
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        What Our Clients Say
      </Typography>
      <Typography
        sx={{
          color: "text.light",
          fontSize: "1rem",
          textAlign: "center",
          width: isMobile?"90%":"50%",
        }}
      >
        At Easy Office Property, client satisfaction is our top priority. Read
        how we’ve made property search seamless and stress-free for many.
      </Typography>
      <Container>
        <SlideSwiper sliderData={testimonials} useIn="testimonial" />
      </Container>
    </Stack>
  );
};

export default Testimonial;
