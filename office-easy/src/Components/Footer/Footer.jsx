import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { footerData } from "../../footerData.js";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MenuLists from "../MenuList/MenuLists.jsx";
import { pages } from "../../pages.js";

const Footer = () => {
  return (
    <Stack
      component="footer"
      sx={{
        width: "100%",
        height: "auto",
        py: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // position:'rel',
        bottom: 0,
        left: 0,
        backgroundColor: "primary.light",
        // border: "2px solid red",
      }}
    >
      <Container maxWidth="false" sx={{ maxWidth: "90%" }}>
        <Grid container rowSpacing={5} columnSpacing={{ md: 5, sm: 2, xs: 1 }}>
          {footerData.map((item) => (
            <Grid
              key={item.id}
              size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
              sx={{ border: "2px solid red", p: 1 }}
            >
              <Typography
                component="span"
                gutterBottom
                sx={{
                  width: "auto",
                  color: "text.secondary",
                  fontWeight: 600,
                  fontSize: "1rem",
                  margin:'0px 0px 0px 20px',
                  textTransform: "uppercase",
                  textAlign: "center",
                  borderBottom: "2px solid gray",
                }}
              >
                {item.name}
              </Typography>
              <Box sx={{ mt: 2.5 }}>
                {item.id === "address" ? (
                  item.types.map(({ name }) => (
                    <Typography
                      gutterBottom
                      sx={{
                        color: "#fff",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <KeyboardDoubleArrowRightIcon
                        sx={{
                          fontSize: "25",
                          mr: 0.6,
                          color: "text.secondary",
                        }}
                      />
                      {name}
                    </Typography>
                  ))
                ) : item.id === "link" ? (
                  <MenuLists useIn="footer" />
                ) : item.id === "services" ? (
                  <MenuLists useIn="footer" item={pages.find((p) => p.id === "properties")?.section} />
                ) : (
                  item.id === 'about'?<Typography sx={{color:'#fff',textAlign:'start',pl:3,fontSize:'1rem',opacity:0.9}}>{item.content}</Typography>:""
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
