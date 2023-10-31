"use client";
import { useState } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";

// Zustand
import { useDetailsStore } from "@/zustand";

// Components
import { DetailCard } from "@/components/Details/DetailCard";
import { NoDetails } from "@/components/Details/NoDetails";
import { Recently } from "@/components/Recently/Recently";
import { SellerInfo } from "@/components/Seller/SellerInfo";
import { ToggleMenu } from "@/components/ui/ToggleMenu/ToggleMenu";
import { Products } from "@/components/Products/Products";
import { GraphDetails } from "@/components/Details/GraphDetails";
import { NPL } from "@/components/NPL/NPL";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type ViewDetails = "grid" | "list" | "graph";

const Details = () => {
  const { productDetails } = useDetailsStore();
  const { details } = productDetails;

  const [view, setView] = useState<ViewDetails>("graph");

  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Paper
        sx={{
          width: "80%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        {details.length === 0 ? (
          // <NoDetails />
          <Products />
        ) : (
          <>
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
                p: 1,
              }}
            >
              <ToggleMenu view={view} setView={setView} />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {view === "graph" && (
                  <Box
                    sx={{
                      backgroundColor: "#001122",
                      width: "100%",
                    }}
                  >
                    <GraphDetails details={details} />
                  </Box>
                )}
                {view === "list" && <div>List</div>}
                {view === "grid" && (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {details.map((product, i) => (
                      <DetailCard key={i} product={product} />
                    ))}
                  </Box>
                )}
                <Box>Donas</Box>
              </Box>
              <NPL />
            </Box>
          </>
        )}
      </Paper>
      <Paper
        sx={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          ml: 2,
        }}
      >
        {details.length === 0 ? <Recently /> : <SellerInfo />}
      </Paper>
    </Box>
  );
};

export { Details };
