// Interfaces
import { Product, Seller, TopSellers } from "@/interfaces";

const getSeller = async (sellerId: string) => {
  const res = await fetch(`/api/sellers/${sellerId}`);
  const seller = await res.json();
  return seller;
};

const getSellers = async (): Promise<TopSellers[]> => {
  const res = await fetch(`/api/sellers`);
  const sellers = await res.json();
  return sellers;
};

const getProductsBySeller = async (sellerId: string): Promise<Product[]> => {
  const res = await fetch(`/api/sellers/${sellerId}/products`);
  const products = await res.json();
  return products;
};

export { getSeller, getSellers, getProductsBySeller };
