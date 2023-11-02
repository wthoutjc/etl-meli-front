"use client";
import { useState } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";

// Components
import { DetailCard } from "@/components/Details/DetailCard";
import { SellerInfo } from "@/components/Seller/SellerInfo";
import { ToggleMenu } from "@/components/ui/ToggleMenu/ToggleMenu";
import { GraphDetails } from "@/components/Details/Line/GraphDetails";
import { NPL } from "@/components/NPL/NPL";
import { DoughnutDetails } from "@/components/Details/Doughnuts/DoughnutDetails";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Interfaces
import { ProductDetails } from "@/interfaces";

type ViewDetails = "grid" | "list" | "graph";

interface Props {
  details: ProductDetails[];
}

const Details = ({ details }: Props) => {
  const [view, setView] = useState<ViewDetails>("graph");

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Paper
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 1.5,
            alignItems: "center",
          }}
        >
          <AddShoppingCartIcon sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight={500}>
            Resultados -{" "}
            <b>
              {details[0].k_products} - {details[0].name}
            </b>
          </Typography>
        </Box>
        <Divider />

        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <ToggleMenu view={view} setView={setView} details={details} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
            }}
          >
            <DoughnutDetails productId={details[0].k_products} />
            {view === "graph" && (
              <Paper
                sx={{
                  backgroundColor: "#001122",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                elevation={3}
              >
                <GraphDetails details={details} />
              </Paper>
            )}
            {view === "list" && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                }}
              >
                List
              </Box>
            )}
            {view === "grid" && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "auto",
                }}
              >
                {details.map((product, i) => (
                  <DetailCard key={i} product={product} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
      <Box
        sx={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          ml: 2,
        }}
      >
        <Paper>
          <SellerInfo sellerId={details[0].k_sellers} />
        </Paper>
        <NPL />
      </Box>
    </Box>
  );
};

export { Details };
