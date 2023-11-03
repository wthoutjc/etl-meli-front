"use client";
import { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";

// Icons
import FeedIcon from '@mui/icons-material/Feed';

// Services
import { getSeller } from "@/services";

// Interfaces
import { Seller as ISeller } from "@/interfaces";

// Components
import { Seller } from "@/components/Seller/Seller";
import { SellerSkeleton } from "@/components/Seller/SellerSkeleton";

interface Props {
  sellerId: string;
}

const SellerInfo = ({ sellerId }: Props) => {
  const [loading, setLoading] = useState(true);
  const [seller, setSeller] = useState<ISeller | null>(null);

  useEffect(() => {
    setLoading(true);
    getSeller(sellerId)
      .then((res) => {
        setSeller(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, [sellerId]);

  return (
    <>
      <Box sx={{ display: "flex", p: 1.5, alignItems: "center" }}>
        <FeedIcon sx={{ mr: 1 }} />
        <Typography variant="h6" fontWeight={500}>
          Información del vendendor
        </Typography>
      </Box>
      <Divider />
      {loading ? (
        <SellerSkeleton />
      ) : !seller ? (
        <Box
          sx={{
            p: 2,
          }}
        >
          Vendedor no encontrado
        </Box>
      ) : (
        <Seller seller={seller} />
      )}
    </>
  );
};

export { SellerInfo };
