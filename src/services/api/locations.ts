// Interfaces
import { TopProductsLocation } from "@/interfaces";

const getTopLocations = async () => {
  console.log(`${process.env.API_URL}/api/locations/top-products`);
  const response = await fetch(
    `${process.env.API_URL}/api/locations/top-products`
  );
  console.log(response);
  const data = await response.json();
  return data;
};

const getTopProductsByLocations = async (
  id: string
): Promise<TopProductsLocation[]> => {
  console.log(`${process.env.API_URL}/api/locations/${id}`);
  const response = await fetch(`${process.env.API_URL}/api/locations/${id}`);
  console.log(response);
  const data = await response.json();

  return data;
};

export { getTopLocations, getTopProductsByLocations };
