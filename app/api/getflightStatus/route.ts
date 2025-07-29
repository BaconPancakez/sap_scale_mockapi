import { NextResponse } from "next/server";

const statusCode = ['Approve', 'pending']
export async function GET() {
  const randomPercent = Math.random() * 100;

  const status = statusCode[Math.floor(Math.random() * statusCode.length)]

  return NextResponse.json({
    status
  })

}