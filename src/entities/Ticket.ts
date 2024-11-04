import { ulid } from "ulid";
import { Email } from "../value-objects/Email";

export class Ticket {
  readonly email: Email;

  constructor(
    readonly ticketId: string,
    readonly eventId: string,
    email: string,
    readonly price: number
  ) {
    this.email = new Email(email);
    if (price <= 0) throw new Error("Invalid price");
  }

  static create(eventId: string, email: string, price: number) {
    return new Ticket(ulid(), eventId, email, price);
  }

  getEmail() {
    return this.email.getValue();
  }
}
