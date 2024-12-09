import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@eaatickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
