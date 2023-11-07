// Interfaces
import { ProductDetails } from "@/interfaces";

const getProductDetails = async (
  id: string,
  from?: string,
  to?: string
): Promise<ProductDetails[]> => {
  try {
    const res = await fetch(
      `/api/product-details/${id}${from && to ? `?from=${from}&to=${to}` : ""}`
    );
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
