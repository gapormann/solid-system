import { DatabaseConnection } from "../../database/interfaces/DatabaseConnection.interface";
import { Event } from "../../entities/Event";
import { EventRepository } from "./EventRepository.interface";

export class EventRepositoryDatabase implements EventRepository {
  constructor(private readonly connection: DatabaseConnection) {}
  async getEvent(eventId: string): Promise<Event | null> {
    const [eventData] = await this.connection.query(
      `select * from event where event_id = $1`,
      [eventId]
    );
    if (!eventData) return null;
    return new Event(
      eventData.event_id,
      eventData.description,
      parseFloat(eventData.price)
    );
  }
}
