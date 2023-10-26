import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

export async function GET(req: Request) {
  const id = req.url.split("product-details/")[1];
  console.log(id);
  
  const result = await conn.query(
    "SELECT * FROM Product_Details WHERE k_products = ?",
    [id]
  );
  return NextResponse.json(result);
}
