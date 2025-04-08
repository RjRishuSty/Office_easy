import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import { properties } from "../../propertyes";
import Cards from "../Cards/Cards";

const IndustrialProperty = () => {
  const industrialSpace = properties.filter(
    (item) => item.propertyType === "Industrial"
  );
  return (
    <Stack
      sx={{ border: "2px solid red", py: 10, backgroundColor: "primary.main" }}
    >
      <Container sx={{ border: "2px solid red" }}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {industrialSpace.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, xl: 4 }}>
              <Cards item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default IndustrialProperty;
