-- CreateEnum
CREATE TYPE "MagicProperty" AS ENUM ('COLOR_TRANSFORMATION', 'FLOATING_ANIMATION', 'SPARKLING_GLITTER', 'INVISIBLE_INK', 'MYSTIC_GLOW');

-- CreateTable
CREATE TABLE "Memo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "magicProperty" "MagicProperty" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Memo_pkey" PRIMARY KEY ("id")
);
