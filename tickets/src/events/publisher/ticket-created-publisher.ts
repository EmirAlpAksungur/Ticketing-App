import { Publisher, Subjects, TicketCreatedEvent } from "@eaatickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
