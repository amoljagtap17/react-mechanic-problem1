import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const _theme = createTheme({
  typography: {
    fontFamily: ["Playfair Display", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: grey[900],
    },
    text: {
      primary: "#424851",
    },
  },
});

export const theme = responsiveFontSizes(_theme);
