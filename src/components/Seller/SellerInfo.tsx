"use client";
import { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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
        <AddShoppingCartIcon sx={{ mr: 1 }} />
        <Typography variant="h6" fontWeight={500}>
          Información del vendendor
        </Typography>
      </Box>
      <Divider />
      {loading ? (
        <SellerSkeleton />
      ) : !seller ? (
        <>Not found !</>
      ) : (
        <Seller seller={seller} />
      )}
    </>
  );
};

export { SellerInfo };
