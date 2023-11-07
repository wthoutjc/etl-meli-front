"use client";
import { useState, useEffect } from "react";
import { Paper } from "@mui/material";

// Interfaces
import { TopProductsLocation } from "@/interfaces";

// Components
import { LocationProductCard } from "./LocationProductCard";

// Services
import { getTopProductsByLocations } from "@/services";

interface Props {
  id: string;
}

const LocationProducts = ({ id }: Props) => {
  const [products, setProducts] = useState<TopProductsLocation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTopProductsByLocations = async () => {
      const products = await getTopProductsByLocations(id);
      setProducts(products);
      setIsLoading(false);
    };

    fetchTopProductsByLocations();
  }, [id]);

  return (
    <Paper
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {products.map((product, i) => (
        <LocationProductCard key={i} product={product} index={i} />
      ))}
    </Paper>
  );
};

export { LocationProducts };
