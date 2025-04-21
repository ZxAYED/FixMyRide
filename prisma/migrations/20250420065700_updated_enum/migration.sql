/*
  Warnings:

  - Changed the type of `brand` on the `Bike` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('KTM', 'HONDA', 'SUZUKI', 'YAMAHA', 'TVS', 'KAWASAKI', 'DUCATI', 'ROYAL_ENFIELD', 'BAJAJ');

-- AlterTable
ALTER TABLE "Bike" DROP COLUMN "brand",
ADD COLUMN     "brand" "Brand" NOT NULL;

-- DropEnum
DROP TYPE "brand";
