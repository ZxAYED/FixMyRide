/*
  Warnings:

  - Changed the type of `brand` on the `Bike` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `ServiceRecord` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Bike" DROP COLUMN "brand",
ADD COLUMN     "brand" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServiceRecord" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Brand";

-- DropEnum
DROP TYPE "status";
