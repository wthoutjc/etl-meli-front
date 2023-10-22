import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

export async function GET() {
  const result = await conn.query("SELECT * FROM Proveedores");
  console.log(result);
  return NextResponse.json(result);
}
