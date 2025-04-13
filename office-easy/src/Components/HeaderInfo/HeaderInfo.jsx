import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { footerData } from "../../footerData";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import SocalMediaIcons from "../SocalMediaIcons/SocalMediaIcons";
import XsmallHeaderInfo from "./XsmallHeaderInfo";

const HeaderInfo = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const xSmall = useMediaQuery("(max-width:585px)");
  const companyInfo = footerData.find((item) => item.id === "address");

  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "primary.light",
        py: 0.7,
        zIndex: 999,
      }}
    >
      {xSmall ? (
        <XsmallHeaderInfo />
      ) : (
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {companyInfo?.types
            .filter((item) => item.id !== "location")
            .map((item) => (
              <Grid
                size={{ xs: 6, sm: 6, md: 4 }}
                key={item.id}
                sx={{
                  // border: "2px solid white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {Array.isArray(item.content)
                  ? item.content.map((content, index) => (
                      <Link
                        to={content.path}
                        key={`${content.id}-${index}`}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {content.id === "phone" ? (
                          <LocalPhoneIcon
                            fontSize="small"
                            sx={{ color: "text.secondary", mr: 0.5 }}
                          />
                        ) : (
                          <MailIcon
                            fontSize="small"
                            sx={{ color: "text.secondary", mr: 1 }}
                          />
                        )}
                        <Typography
                          variant="body2"
                          sx={{ color: "#fff", mr: 1.5 }}
                        >
                          {content.item}
                        </Typography>
                      </Link>
                    ))
                  : null}
              </Grid>
            ))}
          {!isMobile && (
            <Grid
              size={{ sm: 12, xs: 12, md: 4 }}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <SocalMediaIcons useIn="header" />
            </Grid>
          )}
        </Grid>
      )}
    </Stack>
  );
};

export default HeaderInfo;
