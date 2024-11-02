import { PrismaClient } from "@prisma/client";
import { Event } from "../entities/Event";

export class EventRepository {
  private readonly db;
  constructor() {
    this.db = new PrismaClient();
  }
  async getEvent(eventId: string): Promise<Event | null> {
    const eventData = await this.db.event.findUnique({
      where: { event_id: eventId },
    });
    if (!eventData) return null;
    return new Event(
      eventData.event_id,
      eventData.description,
      eventData.price.toNumber()
    );
  }
}
