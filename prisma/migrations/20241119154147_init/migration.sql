-- CreateEnum
CREATE TYPE "ServiceTypeEnum" AS ENUM ('Normal', 'VIP');

-- CreateEnum
CREATE TYPE "DurationTypeEnum" AS ENUM ('Hourly', 'Weekly', 'Monthly');

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "type" "ServiceTypeEnum" NOT NULL DEFAULT 'Normal',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServicePrice" (
    "id" SERIAL NOT NULL,
    "duration" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" "DurationTypeEnum" NOT NULL DEFAULT 'Hourly',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServicePrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
