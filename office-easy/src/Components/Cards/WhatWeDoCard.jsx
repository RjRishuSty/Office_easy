import { Box, Card, CardMedia, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const WhatWeDoCard = ({ item }) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Card
      sx={{
        width: "100%",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={item.img}
        alt=" Property Space"
        sx={{
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(85%)",
          transition: "transform 0.4s ease-in-out, filter 0.3s ease-in-out",
          transform: "scale(1)",
          "&:hover": {
            filter: "brightness(100%)",
            transform: "scale(1.05)",
          },
        }}
      />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "primary.light",
          py: 3,
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontSize: isMobile ? "1.5rem" : "1rem",
            fontWeight: 700,
            textAlign: "center",
            textTransform: "uppercase",
            color: "text.secondary",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontSize: isMobile ? "1rem" : "0.8rem",
            fontWeight: 500,
            textAlign: "center",
            textTransform: "capitalize",
            color: "#fff",
          }}
        >
          {item.status}
        </Typography>
      </Box>
    </Card>
  );
};

export default WhatWeDoCard;
