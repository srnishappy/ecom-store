/*
  Warnings:

  - You are about to drop the column `amount` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `currentcy` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `stripePaymentId` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `amount`,
    DROP COLUMN `currentcy`,
    DROP COLUMN `status`,
    DROP COLUMN `stripePaymentId`;
