import { Message } from "./Message";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  userImagePath: string;
  messages: Message[];

  constructor(id, firstName, lastName, userImagePath, messages) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userImagePath = userImagePath;
    this.messages = messages;
  }
}
