import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from '../models/Message';
import { Response } from '../models/Response';
import { User } from '../models/User';
import { UsersService } from '../users.service';
import { NgModel } from '@angular/forms';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  inputText = '';
  user: User;
  // @Output() emitFirstMessage: EventEmitter<any> = new EventEmitter();
  

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let userId = +params['userId'];
      this.user = this.usersService.getUserById(userId);
    });
    let chat = document.getElementById('chat');
    chat.addEventListener('DOMCharacterDataModified', () => {
      chat.scrollTop = chat.scrollHeight;
    });

    let input = document.getElementById('chat-input');

    input.addEventListener("keypress", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.send();
      }
    });
  }

  private getMessage() {
    this.http
      .get('https://api.chucknorris.io/jokes/random')
      .subscribe( (response: Response) => {
        let userId = this.user.id;
        setTimeout(() => {
          let userAtTheMoment = this.usersService.getUserById(userId);
          userAtTheMoment.messages.push(new Message(response.value, new Date(), false));
          this.usersService.rewriteUserData();
          this.sendNotification(userId);
        }, (Math.random() * (15000 - 10000 + 1) + 10000));
      });
  }

  send() {
    if(this.inputText) {
      this.user.messages.push(new Message(this.inputText, new Date(), true));
      this.sendNotification(this.user.id);
      this.inputText = '';
      this.usersService.rewriteUserData();
      this.getMessage();
    }
  }

  sendNotification(userId): void {
    this.usersService.emitLastMessage.emit(userId);
  }
}
