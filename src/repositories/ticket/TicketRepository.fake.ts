import { Ticket } from "../../entities/Ticket";
import { TicketRepository } from "./TicketRepository.interface";

export class TicketRepositoryFake implements TicketRepository {
  private readonly tickets: Ticket[] = [];
  private static instance: TicketRepositoryFake;

  private constructor() {}

  async saveTicket(ticket: Ticket): Promise<void> {
    this.tickets.push(ticket);
  }

  async getTicket(ticketId: string): Promise<Ticket | null> {
    const ticket = this.tickets.find((tk) => tk.ticketId === ticketId);
    if (!ticket) return null;
    return ticket;
  }

  static getInstance() {
    if (!TicketRepositoryFake.instance) {
      TicketRepositoryFake.instance = new TicketRepositoryFake();
    }
    return TicketRepositoryFake.instance;
  }
}
