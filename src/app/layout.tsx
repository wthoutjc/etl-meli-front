import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";

// Components
import { Navbar } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <html lang="es">
      <body
        className={`${montserrat.className} flex flex-col max-w-full min-h-screen bg-slate-100 dark:bg-gray-900 dark:text-slate-100`}
      >
        {/* <Modal /> */}
        <Navbar />
        <div className="flex flex-[1_0_auto] justify-center">
          <div
            className="flex flex-col max-w-7xl w-full md:flex-row"
            id="content"
          >
            {/* <MeCard /> */}
            <div
              className="flex flex-col p-3 md:pt-3 md:p-0 w-full md:w-3/4"
              id="content"
            >
              {children}
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
