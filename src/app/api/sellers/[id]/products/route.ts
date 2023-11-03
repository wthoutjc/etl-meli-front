import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/")[3];

  const result = await conn.query(
    `SELECT DISTINCT Sellers.k_sellers, Sellers.name, 
    Products.k_products, Products.name, price, Products.condition, k_categories
    FROM Sellers, Product_Details, Products
    WHERE Sellers.k_sellers = Product_Details.k_sellers
    AND Product_Details.k_products = Products.k_products
    AND Sellers.k_sellers = ?`,
    [id]
  );
  return NextResponse.json(result);
}
