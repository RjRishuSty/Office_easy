import { Button, Container, Grid, Typography } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import React from "react";
import SlideSwiper from "../Swipers/SlideSwiper";
import office1 from "../../assets/office1.jpg";
import office2 from "../../assets/office2.jpg";
import office3 from "../../assets/office3.jpg";
import office4 from "../../assets/office4.jpg";
import office5 from "../../assets/office5.jpg";

const HomeHero = () => {
  const sliderData = [
    { id: "1", img: office1 },
    { id: "2", img: office2 },
    { id: "3", img: office3 },
    { id: "4", img: office4 },
    { id: "5", img: office5 },
    // {id:'6',img:office1},
  ];
  return (
    <>
      <Container sx={{py:10 }}>
        <Grid container rowSpacing={5} columnSpacing={5}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              order: { xs: 2, sm: 2, md: 1 },
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "text.main",
                // textTransform: "capitalize",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "text.primary",
                }}
              >
                Premium
              </Typography>{" "}
              office spaces
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              At{" "}
              <Typography
                component="span"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                Office Easy
              </Typography>
              , we provide office spaces —
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "text.light", lineHeight: 1.5,paddingRight:5 }}
            >
              We build lasting partnerships. Whether you're looking for modern
              offices, warehouses, factories, or tech labs, we offer affordable,
              premium options in Noida and Greater Noida. From paperwork to
              personalized support, we make your commercial journey seamless and
              stress-free.
            </Typography>
            <Button
              size="large"
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "text.secondary",
                color: "#fff",
                textTransform: "capitalize",
              }}
              endIcon={<HomeWorkIcon sx={{ color: "text.main" }} />}
            >
              Get Your Space Now
            </Button>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              borderRadius: 5,
              overflow:'hidden',
              order: { xs: 1, sm: 1, md: 2 },
            }}
          >
            <SlideSwiper sliderData={sliderData} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomeHero;
