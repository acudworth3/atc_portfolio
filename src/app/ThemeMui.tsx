import { createTheme, ThemeOptions } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

//https://bareynol.github.io/mui-theme-creator/
//https://mui.com/material-ui/customization/default-theme
export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    // background: {
    //   paper: "#000000",
    // },
  },
};

export const Theme = createTheme(themeOptions);
