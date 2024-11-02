import { PrismaClient } from "@prisma/client";

export class TicketRepository {
  private readonly db;
  constructor() {
    this.db = new PrismaClient();
  }
  async saveTicket(ticket: any): Promise<void> {
    await this.db.ticket.create({
      data: {
        email: ticket.email,
        price: ticket.price,
        ticket_id: ticket.ticketId,
        event_id: ticket.eventId,
      },
    });
  }
  async getTicket(ticketId: string): Promise<any> {
    const ticketData = await this.db.ticket.findUnique({
      where: { ticket_id: ticketId },
    });
    return ticketData;
  }
}
