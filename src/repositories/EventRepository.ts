import { PrismaClient } from "@prisma/client";

export class EventRepository {
  private readonly db;
  constructor() {
    this.db = new PrismaClient();
  }
  async getEvent(eventId: string): Promise<any> {
    const eventData = await this.db.event.findUnique({
      where: { event_id: eventId },
    });
    return eventData;
  }
}
