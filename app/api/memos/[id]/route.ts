import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Memo } from '@prisma/client';

const validateUpdateMemo = (memo: Memo): { valid: boolean; error?: string } => {
  if (memo.title && typeof memo.title !== 'string') {
    return { valid: false, error: 'Invalid title' };
  }

  if (memo.content && typeof memo.content !== 'string') {
    return { valid: false, error: 'Invalid content' };
  }

  if (memo.magicProperty && typeof memo.magicProperty !== 'string') {
    return { valid: false, error: 'Invalid magic property' };
  }

  return { valid: true };
};

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const updateData: Memo = await req.json();
    
    // Validate the update data
    const { valid, error } = validateUpdateMemo(updateData);
    if (!valid) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    // Update the memo
    const updatedMemo = await prisma.memo.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedMemo);
  } catch (error) {
    console.error('Error updating memo:', error);
    return NextResponse.json({ message: 'Failed to update memo' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const deletedMemo = await prisma.memo.delete({
      where: { id },
    });

    return NextResponse.json(deletedMemo);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to delete memo' }, { status: 500 });
  }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const memo = await prisma.memo.findUnique({
      where: { id },
    });

    if (memo) {
      return NextResponse.json(memo);
    } else {
      return NextResponse.json({ message: 'Memo not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching memo:', error);
    return NextResponse.json({ message: 'Failed to fetch memo' }, { status: 500 });
  }
}