import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

//https://bareynol.github.io/mui-theme-creator/
//https://mui.com/material-ui/customization/default-theme
export const Theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
