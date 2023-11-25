import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

export async function GET(req: Request) {
  const id = req.url.split("npl/")[1];

  const result = await conn.query(
    "SELECT nlp_score AS score, comment_text AS comment FROM Comments WHERE k_products = ?",
    [id]
  );
  return NextResponse.json(result);
}
