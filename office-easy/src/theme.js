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
      primary: "#0d1321",
      secondary: "#ffa229",
      light: "#0000",
    },
  },
  typography: {
    fontFamily: '"Kumbh Sans", sans-serif',
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000", // default label color

          "&.Mui-focused": {
            color: "#000", // label color on focus
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#000", // default border color
        },
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000", // border color on focus
          },
        },
      },
    },
  },
});
