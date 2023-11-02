import { NextResponse } from "next/server";

// Database - MySQL
import { conn } from "@/libs/db";

// Interfaces
import { Seller } from "@/interfaces";

export async function GET(req: Request) {
  const id = req.url.split("sellers/")[1];

  const result = (await conn.query(
    `SELECT k_sellers, name, rating, Sellers.city, department, country
    FROM Sellers, Locations 
    WHERE k_sellers = ?
    AND Sellers.city = Locations.city;`,
    [id]
  )) as Seller[];

  if (result.length > 0) {
    return NextResponse.json(result[0]);
  }

  return NextResponse.json({ error: "No se encontró el vendedor" });
}
