import { EventRepositoryFake } from "../event/EventRepository.fake";
import { EventRepository } from "../event/EventRepository.interface";
import { TicketRepositoryFake } from "../ticket/TicketRepository.fake";
import { TicketRepository } from "../ticket/TicketRepository.interface";
import { RepositoryFactory } from "./RepositoryFactory.interface";

export class RepositoryFactoryFake implements RepositoryFactory {
  createEventRepository(): EventRepository {
    return EventRepositoryFake.getInstance();
  }
  createTicketRepository(): TicketRepository {
    return TicketRepositoryFake.getInstance();
  }
}
