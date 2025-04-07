import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { TextField, InputAdornment, IconButton } from "@mui/material";

const SearchInput = () => {
  const [input, setInput] = useState("");

  const handleClear = () => {
    setInput("");
  };

  return (
    <TextField
      fullWidth
      type="text"
      label="Search Propertys"
      variant="outlined"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      InputProps={{
        sx: {
          color: "#fff", 
          cursor:'pointer',
        },
        endAdornment: (
          <InputAdornment position="end">
            {input.length > 0 ? (
              <IconButton onClick={handleClear}>
                <ClearIcon sx={{ color: "text.secondary" }} />
              </IconButton>
            ) : (
              <SearchIcon sx={{ color: "text.secondary" }} />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
