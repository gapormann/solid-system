import { TicketRepository } from "../repositories/TicketRepository";

export class GetTicket {
  private readonly ticketRepository = new TicketRepository();
  async execute(ticketId: string): Promise<Output | null> {
    const ticket = await this.ticketRepository.getTicket(ticketId);
    if (!ticket) return null;
    return {
      ticketId: ticket.ticketId,
      eventId: ticket.eventId,
      email: ticket.email,
      price: ticket.price,
    };
  }
}

type Output = {
  ticketId: string;
  eventId: string;
  email: string;
  price: number;
};
