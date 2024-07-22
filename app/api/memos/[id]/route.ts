import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { title, content, magicPropertyType } = await req.json();

  const updatedMemo = await prisma.memo.update({
    where: { id: id },
    data: { title, content, magicProperty: magicPropertyType },
  });

  if (updatedMemo) {
    return NextResponse.json(updatedMemo);
  } else {
    return NextResponse.json({ message: 'Memo not found' }, { status: 404 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  const deletedMemo = await prisma.memo.delete({
    where: { id: id },
  });

  if (deletedMemo) {
    return NextResponse.json(deletedMemo);
  } else {
    return NextResponse.json({ message: 'Memo not found' }, { status: 404 });
  }
}
