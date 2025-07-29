import { NextResponse } from "next/server";

const statusCode = ['Approve', 'pending']
export async function GET() {
  const randomPercent = Math.random() * 100;

  const status = statusCode[Math.floor(Math.random() * statusCode.length)]

  const response = NextResponse.json({
    status
  })

  // Add CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  return response

}