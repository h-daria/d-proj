export class Message {
  text: string;
  dateTime: Date;
  sentByCurrentUser: Boolean;

  constructor(text, dateTime, sentByCurrentUser) {
    this.text = text;
    this.dateTime = dateTime;
    this.sentByCurrentUser = sentByCurrentUser;
  }
}
