import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { footerData } from "../../footerData";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

const CompanyInfo = () => {
  const addressSection = footerData.find((item) => item.id === "address");

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "location":
        return <LocationOn sx={{ color: "#fff", mr: 1 }} />;
      case "phone":
        return <Phone sx={{ color: "#fff", mr: 1 }} />;
      case "email":
        return <Email sx={{ color: "#fff", mr: 1 }} />;
      default:
        return null;
    }
  };

  return (
    <Stack
      sx={{
        padding: "50px 0px 300px 0px",
        backgroundColor: "primary.light",
      }}
    >
      <Container>
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid
            size={{ xs: 12, sm: 12, md: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mb: 3.5,
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 500,
                letterSpacing: 0.3,
              }}
            >
              Get in Touch with us
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 400,
              }}
            >
              Fill up the form and our team will get in touch with you.
            </Typography>
          </Grid>
          {addressSection?.types?.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                {getIcon(item.id)}{" "}
                <Typography
                  component="span"
                  sx={{ color: "text.secondary", textTransform: "capitalize",fontWeight:800,fontSize:'1.5rem',letterSpacing:0.3 }}
                >
                  {item.name}
                </Typography>
              </Box>
              <Box sx={{ width: "100%", mt: 1 }}>
                {item.id === "phone" || item.id === "email" ? (
                  item.content.map((phone) => (
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        color: "text.secondary",
                        fontWeight: 400,
                        fontSize: "1rem",
                        py: 1,
                        letterSpacing: 1,
                        cursor:'pointer'
                      }}
                    >
                      <SubdirectoryArrowRightIcon
                        sx={{ color: "#fff", mr: 1 }}
                      />
                      {phone.item}
                    </Typography>
                  ))
                ) : (
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      color: "text.secondary",
                      fontWeight: 400,
                      fontSize: "1rem",
                      py: 1,
                      letterSpacing: 1,
                      cursor:'pointer'
                    }}
                  >
                    <SubdirectoryArrowRightIcon sx={{ color: "#fff", mr: 1 }} />
                    {item.content}
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default CompanyInfo;
