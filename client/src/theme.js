import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6494ED",
      light: "#9AC4FF",
      dark: "#2667BA"
    },
    secondary: {
      main: "#EDBD64",
      light: "#FFEF94"
    },
    error: {
      main: "#b00020"
    },
    background: {
      default: "#fff"
    }
  }
});

export default theme;
