import { ulid } from "ulid";
import { TicketRepository } from "../repositories/TicketRepository";
import { EventRepository } from "../repositories/EventRepository";
import { Ticket } from "../entities/Ticket";

export class PurchaseTicket {
  eventRepository = new EventRepository();
  ticketRepository = new TicketRepository();

  async execute(input: Input): Promise<Output> {
    const event = await this.eventRepository.getEvent(input.eventId);
    if (!event) throw new Error("This event not exists.");
    const ticket = new Ticket(ulid(), input.eventId, input.email, event.price);
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
