/*import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];
  messageChangedEvent = new EventEmitter<Message[]>();

  constructor() {
    this.messages = MOCKMESSAGES;
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    let theMessage: Message = null;
    this.messages.forEach(msg => {
      if(msg.id === id){
        theMessage = msg;
      }
    })
    return theMessage;
  }

  addMessage(message: Message){
    this.messages.push(message);
    this.messageChangedEvent.emit(this.messages.slice());
  }

}*/
import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];
  maxMessageId: number;
  messageChangedEvent = new Subject<Message[]>();

  constructor(private http: HttpClient) {
    http.get('https://wdd-project-ecdc5-default-rtdb.firebaseio.com/messages.json')
    .subscribe(
      (messages: Message[]) => {
        this.messages = messages;
        this.maxMessageId = this.getMaxId();
        this.messageChangedEvent.next(this.messages.slice());
      },
      (error: any) => {console.log(error)}
    );
}

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    let theMessage: Message = null;
    this.messages.forEach(msg => {
      if(msg.id === id){
        theMessage = msg;
      }
    })
    return theMessage;
  }

  getMaxId(): number {
    let maxId = 0;
    this.messages.forEach(message => {
      let currentId = Number(message.id)
      if (currentId > maxId){
        maxId = currentId;
      }
    })
    return maxId;
    }
  

  addMessage(message: Message){
    this.messages.push(message);
    this.storeMessages();
    // this.messageChangedEvent.next(this.messages.slice());
  }

  storeMessages(){
    const header = new HttpHeaders({'contentType': 'application/json'});
    const data = JSON.stringify(this.getMessages());
    this.http.put('https://wdd-project-ecdc5-default-rtdb.firebaseio.com/messages.json', data, {'headers':header})
    .subscribe(()=>{
      this.messageChangedEvent.next(this.messages.slice());
    })
  }

}