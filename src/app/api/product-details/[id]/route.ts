import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

// Interfaces
import { ProductDetails } from "@/interfaces";

export async function GET(req: Request) {
  const id = req.url.split("product-details/")[1].split("?")[0];
  const url = new URL(req.url);
  const { from, to } = Object.fromEntries(url.searchParams) as {
    from?: string;
    to?: string;
  };

  const result = (await conn.query(
    `SELECT Products.k_products, Products.name, DATE(date) as etl_date, 
    SUM(amount_sold) as amount_sold, SUM(available_quantity) as available_quantity, k_sellers
    FROM Products, Product_Details 
    WHERE Products.k_products = ?
    AND Product_Details.k_products = Products.k_products
    ` +
      (from && to ? `AND DATE(date) BETWEEN ? AND ?` : ``) +
      `
    GROUP BY etl_date;`,
    [id, from, to]
  )) as ProductDetails[];
  return NextResponse.json(result);
}
