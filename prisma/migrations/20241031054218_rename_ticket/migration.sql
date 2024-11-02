/*
  Warnings:

  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_event_id_fkey";

-- DropTable
DROP TABLE "Ticket";

-- CreateTable
CREATE TABLE "ticket" (
    "ticket_id" VARCHAR(26) NOT NULL,
    "event_id" VARCHAR(26) NOT NULL,
    "email" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("ticket_id")
);

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "event"("event_id") ON DELETE RESTRICT ON UPDATE CASCADE;
