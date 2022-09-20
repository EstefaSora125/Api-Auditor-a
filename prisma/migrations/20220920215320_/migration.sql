/*
  Warnings:

  - You are about to alter the column `phone_number` on the `authors` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `authors` MODIFY `phone_number` INTEGER NULL;
