import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

export async function GET(req: Request) {
  const id = req.url.split("products/")[1];

  const result = await conn.query(
    "SELECT * FROM Products WHERE k_categories = ?",
    [id]
  );
  return NextResponse.json(result);
}
