import { Product } from "@/interfaces";

const getProducts = async (categoryId: string) => {
  const res = await fetch(`/api/products/${categoryId}`);
  const products = await res.json();
  return products;
};

interface TopProducts extends Product {
  total_sold: number;
  total_available: number;
}

const getTopProducts = async (): Promise<TopProducts[]> => {
  const res = await fetch(`${process.env.API_URL}/api/products/top`);
  const products = await res.json();
  return products;
};

export { getProducts, getTopProducts };
