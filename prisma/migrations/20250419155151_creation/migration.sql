/*
  Warnings:

  - The values [PULSAR] on the enum `brand` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "brand_new" AS ENUM ('KTM', 'HONDA', 'SUZUKI', 'YAMAHA', 'TVS', 'KAWASAKI', 'DUCATI', 'ROYAL_ENFIELD', 'BAJAJ');
ALTER TABLE "Bike" ALTER COLUMN "brand" TYPE "brand_new" USING ("brand"::text::"brand_new");
ALTER TYPE "brand" RENAME TO "brand_old";
ALTER TYPE "brand_new" RENAME TO "brand";
DROP TYPE "brand_old";
COMMIT;
