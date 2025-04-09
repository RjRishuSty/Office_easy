import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import { properties } from "../../propertyes";
import Cards from "../Cards/Cards";

const CommercialProperty = () => {
  const commercialSpace = properties.filter(
    (item) => item.propertyType === "Commercial"
  );
  return (
    <Stack
      sx={{ py: 10, backgroundColor: "primary.main" }}
    >
      <Container>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {commercialSpace.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 6,xl:4 }} >
              <Cards item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default CommercialProperty;
