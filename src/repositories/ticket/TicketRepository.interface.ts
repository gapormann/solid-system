import { Ticket } from "../../entities/Ticket";

export interface TicketRepository {
  saveTicket(ticket: Ticket): Promise<void>;
  getTicket(ticketId: string): Promise<Ticket | null>;
}
