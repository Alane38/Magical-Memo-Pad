import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { MagicProperty, Memo } from '@prisma/client';
import { rateLimit } from '@/lib/security';

const validateMemo = (memo: Memo): { valid: boolean; error?: string } => {
  if (!memo.title || typeof memo.title !== 'string') {
    return { valid: false, error: 'Invalid or missing title' };
  }

  if (!memo.content || typeof memo.content !== 'string') {
    return { valid: false, error: 'Invalid or missing content' };
  }

  if (!memo.magicProperty || !Object.values(MagicProperty).includes(memo.magicProperty)) {
    return { valid: false, error: 'Invalid or missing magic property' };
  }

  return { valid: true };
};

export async function GET(req: NextRequest) {
  const isRateLimited = await rateLimit(req);
  if (isRateLimited) {
    return new NextResponse('Rate limit exceeded', { status: 429 });
  }

  try {
    const memos = await prisma.memo.findMany();
    return NextResponse.json(memos);
  } catch (error) {
    console.error('Error fetching memos:', error);
    return new NextResponse('Failed to fetch memos', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const isRateLimited = await rateLimit(req);
  if (isRateLimited) {
    return new NextResponse('Rate limit exceeded', { status: 429 });
  }

  try {
    const memo: Memo = await req.json();
    const { valid, error } = validateMemo(memo);
    if (!valid) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    const createdMemo = await prisma.memo.create({ data: memo });
    return NextResponse.json(createdMemo);
  } catch (error) {
    console.error('Error creating memo:', error);
    return new NextResponse('Failed to create memo', { status: 500 });
  }
}
