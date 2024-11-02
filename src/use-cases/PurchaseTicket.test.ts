import { GetTicket } from "./GetTicket";
import { PurchaseTicket } from "./PurchaseTicket";

describe("Purchase ticket", () => {
  it("(PurchaseTicket) Should purchase a ticket", async () => {
    const purchaseTicket = new PurchaseTicket();
    const inputPurchaseTicket = {
      eventId: "01JBGDSPWCWWS1H3XH1QEGE5K5",
      email: "john.doe@gmail.com",
    };
    const outputPurchaseTicket = await purchaseTicket.execute(
      inputPurchaseTicket
    );
    expect(outputPurchaseTicket.ticketId).toBeDefined();
    const getTicket = new GetTicket();
    const outputGetTicket = await getTicket.execute(
      outputPurchaseTicket.ticketId
    );
    expect(outputGetTicket?.ticketId).toBe(outputPurchaseTicket.ticketId);
    expect(outputGetTicket?.eventId).toBe(inputPurchaseTicket.eventId);
    expect(outputGetTicket?.email).toBe(inputPurchaseTicket.email);
    expect(outputGetTicket?.price).toBe(100);
  });
});
