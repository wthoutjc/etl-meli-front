import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

export async function GET() {
  const result = await conn.query(
    `SELECT Country, department, Q1.city, total_sold, total_available, total_sellers FROM (
      SELECT Locations.city, 
      COUNT(Sellers.k_sellers) AS total_sellers
      FROM Sellers, Locations
      WHERE Sellers.city = Locations.city
      GROUP BY Locations.city
    ) AS Q1, (
      SELECT Country, department, Locations.city, 
      SUM(amount_sold) AS total_sold, SUM(available_quantity) AS total_available
      FROM Sellers, Locations, Product_Details
      WHERE Product_Details.k_sellers = Sellers.k_sellers
      AND Sellers.city = Locations.city
      GROUP BY Locations.city
      ORDER BY total_sold DESC
    ) AS Q2
    WHERE Q1.city = Q2.city
    ORDER BY total_sold DESC
    LIMIT 10;`
  );
  return NextResponse.json(result);
}
