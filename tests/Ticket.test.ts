import { Ticket } from "../src/entities/Ticket";

test("Should create a ticket", async () => {
  const ticket = Ticket.create("", "gabriel.pormann@gmail.com", 100);
  expect(ticket.getEmail()).toBe("gabriel.pormann@gmail.com");
  expect(ticket.price).toBe(100);
});

test("Should not create a ticket with invalid email", async () => {
  expect(() => Ticket.create("", "gabriel.pormann@gmail", 100)).toThrow(
    new Error("Invalid email")
  );
});

test("Should not create a ticket with invalid price", async () => {
  expect(() => Ticket.create("", "gabriel.pormann@gmail.com", -100)).toThrow(
    new Error("Invalid price")
  );
});

//test("Should not create a ticket with invalid price", async () => {});
