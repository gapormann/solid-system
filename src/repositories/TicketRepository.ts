import { PrismaClient } from "@prisma/client";
import { Ticket } from "../entities/Ticket";

export class TicketRepository {
  private readonly db;
  constructor() {
    this.db = new PrismaClient();
  }
  async saveTicket(ticket: Ticket): Promise<void> {
    await this.db.ticket.create({
      data: {
        email: ticket.email,
        price: ticket.price,
        ticket_id: ticket.ticketId,
        event_id: ticket.eventId,
      },
    });
  }
  async getTicket(ticketId: string): Promise<Ticket | null> {
    const ticketData = await this.db.ticket.findUnique({
      where: { ticket_id: ticketId },
    });
    if (!ticketData) return null;
    return new Ticket(
      ticketData?.ticket_id,
      ticketData?.event_id,
      ticketData?.email,
      ticketData?.price.toNumber()
    );
  }
}
