/*
  Warnings:

  - Added the required column `name` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_id` to the `ServicePrice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "name" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "ServicePrice" ADD COLUMN     "service_id" INTEGER NOT NULL,
ALTER COLUMN "duration" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ServicePrice" ADD CONSTRAINT "ServicePrice_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
