import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

// Interfaces
import { TopProductsLocation } from "@/interfaces";

export async function GET(req: Request) {
  const id = req.url.split("locations/")[1];

  const result = (await conn.query(
    `SELECT Sellers.k_sellers, Sellers.name as seller_name, Sellers.rating, 
    SUM(amount_sold) AS total_sold, SUM(available_quantity) AS total_available,
    Products.k_products, Products.name as product_name, Products.price, Products.condition
    FROM Locations, Sellers, Product_Details, Products
    WHERE Locations.city = Sellers.city
    AND Sellers.k_sellers = Product_Details.k_sellers
    AND Product_Details.k_products = Products.k_products
    AND Locations.city = ?
    GROUP BY Products.k_products
    ORDER BY total_sold DESC
    LIMIT 10;`,
    [id]
  )) as TopProductsLocation[];
  return NextResponse.json(result);
}
