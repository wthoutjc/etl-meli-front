import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

export async function GET() {
  const result =
    await conn.query(`SELECT Sellers.k_sellers, name, country, department, Sellers.city, COUNT(k_products) AS total_sales,
  SUM(amount_sold) as total_sold, SUM(available_quantity) as total_available 
  FROM Sellers, Product_Details, Locations
  WHERE Sellers.k_sellers = Product_Details.k_sellers
  AND Sellers.city = Locations.city
  GROUP BY Sellers.k_sellers
  ORDER BY total_sold DESC
  LIMIT 10`);
  return NextResponse.json(result);
}
