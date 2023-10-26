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
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export { lightTheme };
