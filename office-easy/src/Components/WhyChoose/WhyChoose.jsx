import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Styles from "./WhyChoose.module.css";
import Cards from "../Cards/Cards";
import VerifiedIcon from "@mui/icons-material/Verified";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const WhyChoose = () => {
  const trustedInfo = [
    {
      title: "Trusted",
      description:
        "Office Eassy is the preferred online property finder trusted by a community of thousands of users.",
      icon: <VerifiedIcon />,
    },
    {
      title: "Affordable Prices",
      description:
        "Find your dream home from our wide range of verified listings.",
      icon: <CurrencyRupeeIcon />,
    },
    {
      title: "Support 24X7",
      description:
        "The team of Office Easy works together 24*7 for client satisfaction and provides the best real estate solutions.",
      icon: <QuestionMarkIcon />,
    },
    {
      title: "Satisfaction",
      description:
        "The team of Office Easy works together 24*7 for client satisfaction and provides the best real estate solutions.",
      icon: <ThumbUpAltIcon />,
    },
  ];

  return (
    <Stack sx={{ py: 10 }} className={Styles.whySection}>
      <Typography
        gutterBottom
        sx={{ color: "#fff", fontSize: "2rem", fontWeight: 700 }}
      >
        Why Choose Office Easy
      </Typography>
      <Container sx={{mt:4}}>
        <Grid container rowSpacing={3} columnSpacing={4}>
          {trustedInfo.map((item,index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Cards item={item} useIn="whyChoose" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default WhyChoose;
