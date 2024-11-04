import { EventRepository } from "../event/EventRepository.interface";
import { TicketRepository } from "../ticket/TicketRepository.interface";

export interface RepositoryFactory {
  createEventRepository(): EventRepository;
  createTicketRepository(): TicketRepository;
}
