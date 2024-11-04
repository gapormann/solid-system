import { Ticket } from "../entities/Ticket";
import { RepositoryFactory } from "../repositories/factory/RepositoryFactory.interface";
import { EventRepository } from "../repositories/event/EventRepository.interface";
import { TicketRepository } from "../repositories/ticket/TicketRepository.interface";

export class PurchaseTicket {
  private readonly eventRepository: EventRepository;
  private readonly ticketRepository: TicketRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.eventRepository = repositoryFactory.createEventRepository();
    this.ticketRepository = repositoryFactory.createTicketRepository();
  }

  async execute(input: Input): Promise<Output> {
    const event = await this.eventRepository.getEvent(input.eventId);
    if (!event) throw new Error("This event not exists.");
    const ticket = Ticket.create(input.eventId, input.email, event.price);
    await this.ticketRepository.saveTicket(ticket);
    return {
      ticketId: ticket.ticketId,
    };
  }
}

type Input = {
  eventId: string;
  email: string;
};

type Output = {
  ticketId: string;
};
