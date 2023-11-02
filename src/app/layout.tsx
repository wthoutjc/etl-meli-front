import "@/styles/globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "@/themes/ThemeRegistry";

// Components
import { Alerts, Navbar, SearchDrawer } from "@/components";
import { Box, Typography } from "@mui/material";

// Moment
import moment from "moment";

export const metadata: Metadata = {
  title: "Frontend - MELI",
  description: "Aplicación de búsqueda de productos de Mercado Libre",
  keywords: [
    "MELI",
    "Mercado Libre",
    "ETL",
    "ELT/ETL",
    "MySQL",
    "Python",
    "NextJS",
    "Universidad Distrital",
    "Tendencias avanzadas en ingeniería de software",
  ],
};

interface Props {
  children: React.ReactNode;
  sideClient: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <ThemeRegistry>
        <body>
          <Alerts />
          <SearchDrawer />
          <Navbar />

          <Box
            sx={{
              p: 1.4,
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Typography variant="body1" sx={{ mb: 1 }}>
                Universidad Distrital Francisco José de Caldas
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <i>
                  {moment().toDate().toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </i>
              </Typography>
            </Box>
            {children}
          </Box>
        </body>
      </ThemeRegistry>
    </html>
  );
}
