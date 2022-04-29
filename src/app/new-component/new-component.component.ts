import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Message } from '../models/Message';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  users: User[];
  
  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.usersService.emitLastMessage.subscribe(userId => {
      this.latestUserMessage(userId);
    });

    let search = document.getElementById('search-input');
    search.addEventListener('input', (event: InputEvent) => {
      this.users = this.usersService.getUsers().filter(item => `${item.firstName.toUpperCase()} ${item.lastName.toUpperCase()}`
      .includes((<HTMLInputElement>event.target).value.toUpperCase()));
    });

    // console.log())
    this.usersService.saveUsersData(this.users);
  }
  
  lastMessage(user: User): Message {
    return user.messages[user.messages.length - 1];
  }

  latestUserMessage(userId): void {
    let user = this.users.find(item => item.id == userId);
    let newUsersArray = this.users.filter(item => item.id !== user.id);
    newUsersArray.unshift(user);
    this.users = newUsersArray;
  }
}
