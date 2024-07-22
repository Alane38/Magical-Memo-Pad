import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const memos = await prisma.memo.findMany();
  return NextResponse.json(memos);
}

export async function POST(req: NextRequest) {
  const { title, content, magicPropertyType } = await req.json();

  const newMemo = await prisma.memo.create({
    data: { title, content, magicProperty: magicPropertyType },
  });

  return NextResponse.json(newMemo);

}