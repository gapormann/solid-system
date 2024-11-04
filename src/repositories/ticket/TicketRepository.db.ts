import { DatabaseConnection } from "../../database/interfaces/DatabaseConnection.interface";
import { Ticket } from "../../entities/Ticket";
import { TicketRepository } from "./TicketRepository.interface";

export class TicketRepositoryDatabase implements TicketRepository {
  constructor(private readonly connection: DatabaseConnection) {}
  async saveTicket(ticket: Ticket): Promise<void> {
    await this.connection.query(
      `
        insert into ticket 
          (email, price, ticket_id, event_id) 
            values ($1, $2, $3, $4)
      `,
      [ticket.getEmail(), ticket.price, ticket.ticketId, ticket.eventId]
    );
  }
  async getTicket(ticketId: string): Promise<Ticket | null> {
    const [ticketData] = await this.connection.query(
      `
      select * from ticket where ticket_id = $1
    `,
      [ticketId]
    );
    if (!ticketData) return null;
    return new Ticket(
      ticketData?.ticket_id,
      ticketData?.event_id,
      ticketData?.email,
      parseFloat(ticketData?.price)
    );
  }
}
