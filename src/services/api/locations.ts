// Interfaces
import { TopProductsLocation } from "@/interfaces";

const getTopLocations = async () => {
  const response = await fetch(`/api/locations/top-products`);
  const data = await response.json();
  return data;
};

const getTopProductsByLocations = async (
  id: string
): Promise<TopProductsLocation[]> => {
  const response = await fetch(`/api/locations/${id}`);
  const data = await response.json();
  return data;
};

export { getTopLocations, getTopProductsByLocations };
