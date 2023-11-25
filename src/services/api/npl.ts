// Interfaces
import { NPL } from "@/interfaces";

const getNPL = async (productId: string): Promise<NPL[]> => {
  const response = await fetch(`/api/npl/${productId}`);
  const data = await response.json();
  return data;
};

export { getNPL };
