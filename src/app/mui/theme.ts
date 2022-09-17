import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const _theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: grey[900],
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: "#424851",
    },
    background: {
      default: "#F9F9F9",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiCard: {
      defaultProps: {
        raised: false,
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "0px 3px 15px -10px rgb(0 0 0 / 50%)",
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(_theme);
