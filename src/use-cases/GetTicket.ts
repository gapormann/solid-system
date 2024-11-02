import { TicketRepository } from "../repositories/TicketRepository";

export class GetTicket {
  private readonly ticketRepository = new TicketRepository();
  async execute(ticketId: string): Promise<Output | null> {
    const ticketData = await this.ticketRepository.getTicket(ticketId);
    if (!ticketData) return null;
    return {
      ticketId: ticketData.ticket_id,
      eventId: ticketData.event_id,
      email: ticketData.email,
      price: ticketData.price.toNumber(),
    };
  }
}

type Output = {
  ticketId: string;
  eventId: string;
  email: string;
  price: number;
};
