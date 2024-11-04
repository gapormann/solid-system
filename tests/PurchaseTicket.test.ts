import { PgPromiseAdapter } from "../src/database/adapters/PgPromiseAdapter";
import { EventRepositoryDatabase } from "../src/repositories/event/EventRepository.db";
import { RepositoryFactoryDatabase } from "../src/repositories/factory/RepositoryFactory.db";
import { RepositoryFactoryFake } from "../src/repositories/factory/RepositoryFactory.fake";
import { TicketRepositoryDatabase } from "../src/repositories/ticket/TicketRepository.db";
import { GetTicket } from "../src/use-cases/GetTicket";
import { PurchaseTicket } from "../src/use-cases/PurchaseTicket";

describe("Purchase ticket", () => {
  it("(PurchaseTicket) Should purchase a ticket", async () => {
    const repositoryFactory = new RepositoryFactoryFake();
    const purchaseTicket = new PurchaseTicket(repositoryFactory);
    const inputPurchaseTicket = {
      eventId: "01JBGDSPWCWWS1H3XH1QEGE5K5",
      email: "john.doe@gmail.com",
    };
    const outputPurchaseTicket = await purchaseTicket.execute(
      inputPurchaseTicket
    );
    expect(outputPurchaseTicket.ticketId).toBeDefined();
    const getTicket = new GetTicket(repositoryFactory);
    const outputGetTicket = await getTicket.execute(
      outputPurchaseTicket.ticketId
    );
    expect(outputGetTicket?.ticketId).toBe(outputPurchaseTicket.ticketId);
    expect(outputGetTicket?.eventId).toBe(inputPurchaseTicket.eventId);
    expect(outputGetTicket?.email).toBe(inputPurchaseTicket.email);
    expect(outputGetTicket?.price).toBe(100);
  });
});
