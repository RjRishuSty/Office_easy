import { Container, Stack } from "@mui/material";
import React from "react";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import FormInput from "../InputsFields/FormInput/FormInput";

const ContactHero = () => {
  return (
    <Stack
      sx={{
        pb: 10,
        backgroundColor: "#f9f7fd",
      }}
    >
      <CompanyInfo />
      <Container
        sx={{
          mt: -22.7,
          backgroundColor: "#f9f7fd",
          borderRadius: 5,
          boxShadow: "0px 0px 10px #ffa229",
        }}
      >
        <FormInput useIn='contact'/>
      </Container>
    </Stack>
  );
};

export default ContactHero;
