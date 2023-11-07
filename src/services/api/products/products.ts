import { TopProduct } from "@/interfaces";

const getProducts = async (categoryId: string) => {
  const res = await fetch(`/api/products/${categoryId}`);
  const products = await res.json();
  return products;
};

const getTopProducts = async (): Promise<TopProduct[]> => {
  const res = await fetch(`/api/products/top`);
  const products = await res.json();
  return products;
};

export { getProducts, getTopProducts };
