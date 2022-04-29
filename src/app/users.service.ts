import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './models/Message';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  emitLastMessage: EventEmitter<any> = new EventEmitter();
  private users = [
    new User(
      1,
      'Jenny', 
      'J',
      '/assets/images/photo_2022-04-25_01-29-20.jpg',
      [
        new Message('Hello!', new Date(2022, 0O4, 20, 14, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 20, 14, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 21, 15, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 21, 16, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 22, 18, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 22, 19, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 23, 13, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 23, 13, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 24, 19, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 24, 19, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 25, 16, 30), true),
        new Message('Hey! How r u?', new Date(2022, 0O4, 25, 16, 30), false),
      ]
    ),
    new User(
      2,
      'Susie', 
      'B',
      '/assets/images/photo_2022-04-25_02-22-32.jpg',
      [
        new Message('Hello!', new Date(2022, 0O4, 20, 14, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 20, 14, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 21, 15, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 21, 16, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 22, 18, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 22, 19, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 23, 13, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 23, 13, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 24, 19, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 24, 19, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 25, 16, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 25, 16, 30), false),
      ]
    ),
    new User(
      3,
      'Danny', 
      'D',
      '/assets/images/photo_2022-04-25_01-29-07.jpg',
      [
        new Message('Hello!', new Date(2022, 0O4, 20, 14, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 20, 14, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 21, 15, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 21, 16, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 22, 18, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 22, 19, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 23, 13, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 23, 13, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 24, 19, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 24, 19, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 25, 16, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 25, 16, 30), false),
      ]
    ),
    new User(
      4,
      'Jacky', 
      'A',
      '/assets/images/photo_2022-04-25_01-29-16.jpg',
      [
        new Message('Hello!', new Date(2022, 0O4, 20, 14, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 20, 14, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 21, 15, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 21, 16, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 22, 18, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 22, 19, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 23, 13, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 23, 13, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 24, 19, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 24, 19, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 25, 16, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 25, 16, 30), false),
      ]
    ),
    new User(
      5,
      'Ann', 
      'F',
      '/assets/images/photo_2022-04-25_02-06-44.jpg',
      [
        new Message('Hello!', new Date(2022, 0O4, 20, 14, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 20, 14, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 21, 15, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 21, 16, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 22, 18, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 22, 19, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 23, 13, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 23, 13, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 24, 19, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 24, 19, 30), false),
        new Message('Hello!', new Date(2022, 0O4, 25, 16, 30), true),
        new Message('Hey!', new Date(2022, 0O4, 25, 16, 30), false),
      ]
    ),
  ];
  constructor() { }

  getUsers(): User[] {
    this.getUsersFromLocalStorage();
    return this.users;
  }

  getUserById(userId): User {
    return this.users.find(user => user.id == userId);
  }

  saveUsersData(users: User[]) {
    if(!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
  rewriteUserData() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  getUsersFromLocalStorage() {
    if(localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users'));
    }
  }
}
