import { DatabaseConnection } from "../../database/interfaces/DatabaseConnection.interface";
import { EventRepositoryDatabase } from "../event/EventRepository.db";
import { EventRepository } from "../event/EventRepository.interface";
import { TicketRepository } from "../ticket/TicketRepository.interface";
import { TicketRepositoryDatabase } from "../ticket/TicketRepository.db";
import { RepositoryFactory } from "./RepositoryFactory.interface";

export class RepositoryFactoryDatabase implements RepositoryFactory {
  constructor(readonly connection: DatabaseConnection) {}

  createEventRepository(): EventRepository {
    return new EventRepositoryDatabase(this.connection);
  }

  createTicketRepository(): TicketRepository {
    return new TicketRepositoryDatabase(this.connection);
  }
}
