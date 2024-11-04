import { RepositoryFactory } from "../repositories/factory/RepositoryFactory.interface";
import { TicketRepository } from "../repositories/ticket/TicketRepository.interface";

export class GetTicket {
  readonly ticketRepository: TicketRepository;
  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.ticketRepository = repositoryFactory.createTicketRepository();
  }

  async execute(ticketId: string): Promise<Output | null> {
    const ticket = await this.ticketRepository.getTicket(ticketId);
    if (!ticket) return null;
    return {
      ticketId: ticket.ticketId,
      eventId: ticket.eventId,
      email: ticket.getEmail(),
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
