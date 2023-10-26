import "../styles/globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "@/themes/ThemeRegistry";

// Components
import { Navbar, SearchDrawer } from "@/components";

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
          <SearchDrawer />
          <Navbar />
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
