"use client";
import { Box, Divider, Paper, Typography } from "@mui/material";

// Zustand
import { useDetailsStore } from "@/zustand";

// Components
import { DetailCard } from "@/components/Details/DetailCard";
import { NoDetails } from "@/components/Details/NoDetails";
import { Recently } from "@/components/Details/Recently";
import { SellerInfo } from "@/components/Seller/SellerInfo";
import { ToggleMenu } from "@/components/ui/ToggleMenu/ToggleMenu";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Details = () => {
  const { productDetails } = useDetailsStore();
  const { details } = productDetails;

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
          <NoDetails />
        ) : (
          <>
            <Box sx={{ display: "flex", p: 1.5, alignItems: "center" }}>
              <AddShoppingCartIcon sx={{ mr: 1 }} />
              <Typography variant="h6" fontWeight={500}>
                Resultados
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <ToggleMenu />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "Wrap",
                }}
              >
                {details.map((product, i) => (
                  <DetailCard key={i} product={product} />
                ))}
              </Box>
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
