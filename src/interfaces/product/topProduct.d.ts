import { Product } from "@/interfaces";

export interface TopProduct extends Product {
  total_sold: number;
  total_available: number;
}
