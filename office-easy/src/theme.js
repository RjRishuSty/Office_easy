import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f9f7fd",
      light: "#0d1321",
      dark: "#ffa229",
    },
    text: {
      main: "#000",
      primary: "#2b5aac",
      secondary: "#ffa229",
      light: "#808080	",
    },
  },
  typography: {
    fontFamily: '"Kumbh Sans", sans-serif',
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ffa229", 

          "&.Mui-focused": {
            color: "#ffa229", 
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#ffa229", 
        },
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffa229",
          },
        },
      },
    },
  },
});
