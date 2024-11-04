import { Event } from "../../entities/Event";
import { EventRepository } from "./EventRepository.interface";

export class EventRepositoryFake implements EventRepository {
  private static instance: EventRepositoryFake;
  private constructor() {}

  async getEvent(eventId: string): Promise<Event | null> {
    return new Event(eventId, "A", 100);
  }

  static getInstance() {
    if (!EventRepositoryFake.instance) {
      EventRepositoryFake.instance = new EventRepositoryFake();
    }
    return EventRepositoryFake.instance;
  }
}
