import { Box, Typography } from "@mui/material";
import React from "react";
import SocalMediaIcons from "../SocalMediaIcons/SocalMediaIcons";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { footerData } from "../../footerData";
import { Link } from "react-router-dom";

const XsmallHeaderInfo = () => {
  const addressSection = footerData.find((item) => item.id === "address");
  const phoneType = addressSection?.types.find((type) => type.id === "phone");

  return (
    <Box
      sx={{
        width:'100%',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        pb: 0.2,
        px:1
      }}
    >
      {phoneType?.content?.map((phone, index) => (
        <Link key={index} to={phone.path} style={{textDecoration:'none'}}>
          <LocalPhoneIcon
            sx={{
              cursor: "pointer",
              color: "#ffc307",
              padding: 0.5,
              "&:hover": {
                color: "#fff",
              },
            }}
          />
          <Typography component='span' sx={{fontSize:"10px",color:"#fff"}}>{++index}</Typography>
        </Link>
      ))}

      <SocalMediaIcons useIn="xsHeader" />
    </Box>
  );
};

export default XsmallHeaderInfo;
