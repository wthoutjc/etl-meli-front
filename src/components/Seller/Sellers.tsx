"use client";
import { useState, useEffect } from "react";

// Services
import { getProductsBySeller } from "@/services";

// Interfaces
import { Product } from "@/interfaces";

// Components
import { ProductCard } from "@/components/Products/ProductCard";

interface Props {
  sellerId: string;
}

const Sellers = ({ sellerId }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSellers = async () => {
      const products = await getProductsBySeller(sellerId);
      setProducts(products);
      setIsLoading(false);
    };

    fetchSellers();
  }, [sellerId]);

  return (
    <>
      {products.map((product, i) => (
        <ProductCard key={i} product={product} index={i} />
      ))}
    </>
  );
};

export { Sellers };
