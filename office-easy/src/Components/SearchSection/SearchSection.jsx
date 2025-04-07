import { Button, Container, Grid, Stack } from "@mui/material";
import React from "react";
import SearchInput from "../InputsFields/SearchInput/SearchInput";
import SelectInputs from "../InputsFields/SelectInputs/SelectInputs";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const SearchSection = () => {
  const searchData = [
    { id: "search", type: "search", element: <SearchInput /> },
    {
      id: "propertyType",
      type: "dropDownButton",
      label: "Property Types",
      element: (
        <SelectInputs
          label="Property Types"
          options={["Office", "Warehouse", "Factory"]}
        />
      ),
    },
    {
      id: "propertyLocation",
      type: "dropDownButton",
      label: "Property Locations",
      element: (
        <SelectInputs
          label="Property Locations"
          options={["Noida", "Greater Noida"]}
        />
      ),
    },
    {
      id: "btn",
      type: "button",
      element: (
        <Button
          size="large"
          variant="contained"
          sx={{
            backgroundColor: "primary.dark",
            color: "#fff",
            fontSize: "1rem",
            textTransform:'capitalize',
            padding: { sm: "8px 100px", xs: "6px 50px", md: "10px 30px" },
          }}
          endIcon={<LocationSearchingIcon fontSize="large" sx={{color:'text.main'}}/>}
        >
          Search
        </Button>
      ),
    },
  ];

  return (
    <Stack sx={{ margin: "0px 0px 50px 0px" }}>
      <Container
        sx={{
          py: 10,
          minWidth: "90%",
          borderRadius:2,
          backgroundColor: "primary.light",
        }}
      >
        <Grid
          container
          columnSpacing={2}
          rowSpacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {searchData.map((item) => (
            <Grid
              key={item.id}
              size={{
                xs: 12,
                sm: 12,
                md:
                  item.id === "search"
                    ? 4
                    : item.type === "dropDownButton"
                    ? 2.7
                    : 2,
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <>{item.element}</>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default SearchSection;
