import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Aplicação funcionando",
    timestamp: new Date().toISOString(),
  });
}