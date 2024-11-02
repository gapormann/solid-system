import { ulid } from "ulid";
import { TicketRepository } from "../repositories/TicketRepository";
import { EventRepository } from "../repositories/EventRepository";

export class PurchaseTicket {
  eventRepository = new EventRepository();
  ticketRepository = new TicketRepository();

  async execute(input: Input): Promise<Output> {
    const eventData = await this.eventRepository.getEvent(input.eventId);
    const ticket = {
      ticketId: ulid(),
      eventId: input.eventId,
      email: input.email,
      price: eventData.price,
    };
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
