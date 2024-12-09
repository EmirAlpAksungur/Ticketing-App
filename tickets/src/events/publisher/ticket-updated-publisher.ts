import { Publisher, Subjects, TicketUpdatedEvent } from "@eaatickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
