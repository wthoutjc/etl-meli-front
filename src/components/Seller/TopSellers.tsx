"use client";
import { useState, useEffect } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";

// Interfaces
import { TopSellers } from "@/interfaces";

// Components
import { TopSellerCard } from "@/components/Seller/TopSellerCard";

// Services
import { getSellers } from "@/services";

const TopSellers = () => {
  const [topSellers, settopSellers] = useState<TopSellers[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTopSellers = async () => {
      const sellers = await getSellers();
      settopSellers(sellers);
      setIsLoading(false);
    };

    fetchTopSellers();
  }, []);

  return (
    <Box>
      <Paper
        sx={{
          p: 2,
          width: "100%",
          borderRadius: 1,
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
          Top Mejores Vendedores
        </Typography>
        <Divider
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            mt: 1,
            mb: 1,
          }}
        />
        <Typography variant="body1" fontWeight={400}>
          Los mejores vendedores de la plataforma de Mercado Libre - Colombia
        </Typography>
      </Paper>

      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {topSellers.map((seller, i) => (
          <TopSellerCard key={i} seller={seller} index={i + 1} />
        ))}
      </Paper>
    </Box>
  );
};

export { TopSellers };
