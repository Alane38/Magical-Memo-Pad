import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const memos = await prisma.memo.findMany({
    include: {
      magicProperty: true,
    },
  });
  return NextResponse.json(memos);
}

export async function POST(req: NextRequest) {
  const { title, content, magicPropertyType } = await req.json();

  const magicProperty = await prisma.magicProperty.create({
    data: {
      type: magicPropertyType,
      description: 'Auto-generated description'
    },
  });

  const newNote = await prisma.memo.create({
    data: {
      title,
      content,
      magicProperty: {
        connect: { id: magicProperty.id },
      },
    },
  });

  return NextResponse.json(newNote, { status: 201 });
}
