"use client";
import { useState, useEffect } from "react";
import { Paper } from "@mui/material";

// Services
import { getTopProducts } from "@/services";

// Interfaces
import { TopProduct } from "@/interfaces";

// Components
import { ProductCard } from "@/components/Products/ProductCard";

const TopProducts = () => {
  const [products, setProducts] = useState<TopProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTopProducts = async () => {
      const products = await getTopProducts();
      setProducts(products);
      setIsLoading(false);
    };

    fetchTopProducts();
  }, []);

  return (
    <Paper sx={{ p: 2, display: "flex", flexWrap: "wrap" }}>
      {products.map((product, i) => (
        <ProductCard key={i} product={product} index={i} />
      ))}
    </Paper>
  );
};

export { TopProducts };
