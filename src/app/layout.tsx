import "../styles/globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "@/themes/ThemeRegistry";

// Components
import { Navbar, SearchDrawer } from "@/components";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Frontend - MELI",
  description: "Frontend - MELI",
  keywords: ["Frontend - MELI"],
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
          <SearchDrawer />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Navbar />
            <Box
              sx={{
                height: "100%",
              }}
            >
              {children}
            </Box>
          </Box>
        </body>
      </ThemeRegistry>
    </html>
  );
}
