import { Event } from "../../entities/Event";

export interface EventRepository {
  getEvent(eventId: string): Promise<Event | null>;
}
