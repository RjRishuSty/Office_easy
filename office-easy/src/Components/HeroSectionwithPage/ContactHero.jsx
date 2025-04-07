import {
  Button,
  Container,
  Grid,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React from "react";
import Styles from "./ContactHero.module.css";
import { contactInfo } from "../../contactInfo";
import PublishIcon from "@mui/icons-material/Publish";
import CompanyInfo from "../CompanyInfo/CompanyInfo";

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
        <Grid container rowSpacing={2} columnSpacing={5} sx={{ py: 5 }}>
          {contactInfo.map((field, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: field.id === "message" ? 12 : 6,
                md: field.id === "message" ? 12 : 6,
              }}
            >
              {field.type === "textarea" ? (
                <TextareaAutosize
                  fullWidth
                  aria-label={field.label}
                  minRows={2}
                  placeholder={field.label}
                  className={Styles.textarea}
                />
              ) : (
                <TextField
                  fullWidth
                  id={field.id}
                  label={field.label}
                  type={field.type}
                  variant="outlined"
                  style={{ color: "text.main" }}
                />
              )}
            </Grid>
          ))}
          <Grid
            size={{ xs: 12, md: 12, sm: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{ color: "#fff", backgroundColor: "text.secondary" }}
              endIcon={<PublishIcon sx={{ color: "text.main" }} />}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default ContactHero;
