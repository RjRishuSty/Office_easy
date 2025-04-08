import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectInputs = ({ label, options, value, onChange, useIn }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        sx={{
          svg: { color: "#ffa229" },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: useIn === "career" ? "#fff" : "#ffa229",
              color: useIn === "career" ? "#000" : "#fff",
              "& .MuiMenuItem-root:hover": {
                backgroundColor: useIn === "career" ? "#fff" : "#ffb347",
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
