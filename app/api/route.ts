import { rateLimit } from "@/lib/security"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto
 
export async function GET(request: Request) {
  const isRateLimited = await rateLimit(request)
  if (isRateLimited) {
    return new NextResponse("Rate limit exceeded", { status: 429 })
  }

  return new Response('Hello world!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    // },
  })
}

export async function POST(request: Request) {
  const isRateLimited = await rateLimit(request)
  if (isRateLimited) {
    return new NextResponse("Rate limit exceeded", { status: 429 })
  }

  return new Response('Hello world!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}