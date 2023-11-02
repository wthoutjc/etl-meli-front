import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

// Interfaces
import { ProductHistory } from "@/interfaces";

export async function GET(req: Request) {
  const id = req.url.split("product-details/history/")[1];

  const result = (await conn.query(
    `SELECT k_products, YEAR(date) AS year_date, MONTH(date) AS month_date, 
    SUM(amount_sold) AS total_sold, SUM(available_quantity) AS total_available_quantity
    FROM Product_Details 
    WHERE k_products = ?
    GROUP BY year_date, month_date;`,
    [id]
  )) as ProductHistory[];
  return NextResponse.json(result);
}
