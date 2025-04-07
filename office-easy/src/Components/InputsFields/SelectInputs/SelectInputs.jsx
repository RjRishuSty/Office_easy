import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const SelectInputs = ({ label, options }) => {
  const [value, setValue] = useState("");

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(e) => setValue(e.target.value)}
        sx={{
          svg: { color: "#ffa229" }, 
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#ffa229", // Menu background color
              color: "#fff",               // Text color (optional)
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "#ffb347", // Hover effect (optional)
              },
            },
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInputs;
