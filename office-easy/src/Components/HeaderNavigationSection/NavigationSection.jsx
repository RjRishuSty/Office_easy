import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import CubeBackground from "../Background/CubeBackground/CubeBackground";

const NavigationSection = () => {
  const location = useLocation();
  const path = location.pathname;

  const pathSegments = path.split("/").filter(Boolean);

  const getPageLabel = (segment) => {
    switch (segment) {
      case "":
        return "Home";
      case "about":
        return "About";
      case "contact":
        return "Contact";
      case "services":
        return "Services";
      case "faq":
        return "FAQ";
      default:
        return segment.charAt(0).toUpperCase() + segment.slice(1);
    }
  };

  const breadcrumbLinks = [];

  // First add Home link
  breadcrumbLinks.push(
    <NavLink
      key="home"
      to="/"
      style={({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#ffa229" : "#1976d2",
        fontWeight: 600,
      })}
    >
      Home
    </NavLink>
  );

  let cumulativePath = "";
  pathSegments.forEach((segment, index) => {
    cumulativePath += `/${segment}`;
    breadcrumbLinks.push(
      <span key={`sep-${index}`} style={{ margin: "0 8px" }}>
        /
      </span>,
      <NavLink
        key={segment}
        to={cumulativePath}
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#ffa229" : "#1976d2",
          fontWeight: 600,
        })}
      >
        {getPageLabel(segment)}
      </NavLink>
    );
  });

  return (
    <>
      <CubeBackground />
      <Stack sx={{ py: 5, }}>
        <Container
          sx={{
            py: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {breadcrumbLinks}
          </Typography>
        </Container>
      </Stack>
    </>
  );
};

export default NavigationSection;
