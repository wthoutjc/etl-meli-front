import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

export async function GET() {
  const result = await conn.query(
    `SELECT Products.k_products, Products.name, price, Products.condition, k_categories,
    SUM(amount_sold) as total_sold, SUM(available_quantity) AS total_available 
    FROM Products, Product_Details
    WHERE Products.k_products = Product_Details.k_products
    GROUP BY Products.k_products
    ORDER BY total_sold DESC
    LIMIT 10;`
  );
  return NextResponse.json(result);
}
