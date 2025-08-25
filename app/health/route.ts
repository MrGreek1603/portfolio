// app/api/health/route.ts
import { NextResponse } from "next/server";

// Handles GET requests
export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}
