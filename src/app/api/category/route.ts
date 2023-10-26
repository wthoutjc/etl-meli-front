import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

export async function GET() {
  const result = await conn.query("SELECT * FROM Categories");
  return NextResponse.json(result);
}
