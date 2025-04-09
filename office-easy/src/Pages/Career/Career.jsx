import React from "react";
import FormInput from "../../Components/InputsFields/FormInput/FormInput";
import { Container, Stack, Typography, useMediaQuery } from "@mui/material";

const Career = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Stack
      sx={{ border: "2px solid red", backgroundColor: "primary.main", py: 10 }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          gutterBottom
          sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: 600 }}
        >
          Join Our Team
        </Typography>
        <Typography
          gutterBottom
          sx={{ width:isMobile?"90%": "50%", color: "text.light", fontSize: "0.9rem",textAlign:'center' }}
        >
          At Office Easy, we’re always on the lookout for passionate and driven
          individuals ready to make an impact. Fill out the form below to apply
          — we’d love to hear from you!
        </Typography>
        <FormInput useIn="career" />
      </Container>
    </Stack>
  );
};

export default Career;
