import { createTheme } from "@mui/material";

// Fonts
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#112233",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      paper: "#ecf0f1",
      default: "#b2bec3",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export { lightTheme };
