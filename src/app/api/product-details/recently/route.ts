import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

// Moment
import moment from "moment";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = moment(searchParams.get("date")).toDate();

  const result = await conn.query(
    `SELECT Products.k_products, Products.name, Products.price, Products.condition, Product_Details.date, Product_Details.amount_sold, Product_Details.available_quantity
      FROM Product_Details, Products
      WHERE Product_Details.k_products = Products.k_products
      AND Product_Details.date < ?
      ORDER BY Product_Details.date DESC
      LIMIT 7`,
    [date]
  );
  return NextResponse.json(result);
}
