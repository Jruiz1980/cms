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
    http.get('http://localhost:3000/messages')
    .subscribe(
      (messages) => {
        console.log(messages);
        this.messages = messages['messageList'];
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
    if (!message){
      return;
    }
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    message.id = '';
    console.log(message)
    // add to database
    this.http.post<{ message: string, newMessage: Message }>('http://localhost:3000/messages',
      message,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new
          this.messages.push(responseData.newMessage);
          this.messageChangedEvent.next(this.messages.slice());
        }
      );
  }

  storeMessages(){
    const header = new HttpHeaders({'contentType': 'application/json'});
    const data = JSON.stringify(this.getMessages());
    this.http.put('mongodb://localhost:27017/cms/messages.json', data, {'headers':header})
    .subscribe(()=>{
      this.messageChangedEvent.next(this.messages.slice());
    })
  }

}