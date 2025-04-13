import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../../assets/about.jpg";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const AboutHero = () => {
  return (
    <Stack sx={{ py: 10, backgroundColor: "#f9f7fd" }}>
      <Container>
        <Grid container rowSpacing={5} columnSpacing={5}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <img
              src={heroImg}
              alt="Office Easy"
              style={{
                width: "100%",
                height: "550px",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 4,
                filter: "brightness(90%)",
              }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              gutterBottom
              component="h2"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "text.main",
                textTransform: "uppercase",
              }}
            >
              About{" "}
              <Typography
                component="span"
                sx={{
                  fontSize: "1.5rem",
                  color: "text.primary",
                  fontWeight: 800,
                }}
              >
                Office
              </Typography>{" "}
              <Typography
                component="span"
                sx={{
                  fontSize: "1.5rem",
                  color: "text.main",
                  fontWeight: 800,
                }}
              >
                Easy —
              </Typography>
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              Creating Space for Your Growth
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontSize: "1rem",
                color: "text.light",
                lineHeight: 1.5,
                paddingRight: 5,
              }}
            >
              At Office Easy, we build trust. We are one of the leading
              companies in providing Premium, yet affordable office spaces,
              warehouses, factories, Tech lab spaces in the commercial hub of
              NCR that is in Noida and Greater Noida regions.
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontSize: "1rem",
                color: "text.light",
                lineHeight: 1.5,
                paddingRight: 5,
              }}
            >
              We just do not assume the paperwork as a one and done deal. We are
              living in a complex age with manifold challenges; thus, all your
              requirements are just a click away. The focus of the Office Easy
              team has always been customers’ satisfaction.
            </Typography>
            <Typography variant="caption" sx={{ color: "text.primary" }}>
              If you have any questions or want to learn more — we’re just a
              click away.
            </Typography>
            <NavLink to="/contact">
              <Button
                size="large"
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "text.secondary",
                  color: "#fff",
                  textTransform: "capitalize",
                }}
                endIcon={<ContactSupportIcon sx={{ color: "text.main" }} />}
              >
                Learn more
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default AboutHero;
