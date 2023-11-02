// Interfaces
import { ProductDetails } from "@/interfaces";

const getProductDetails = async (id: string): Promise<ProductDetails[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/product-details/${id}`);
    const productDetails = await res.json();
    return productDetails as ProductDetails[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getRecently = async (date: string) => {
  const res = await fetch(`/api/product-details/recently?date=${date}`);
  const recently = await res.json();
  return recently;
};

export { getProductDetails, getRecently };
