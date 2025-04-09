import { Stack, Typography } from "@mui/material";
import React from "react";

const AmenitiesSection = () => {
  return (
    <Stack sx={{ border:'2px solid red', }}>
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
    </Stack>
  );
};

export default AmenitiesSection;
