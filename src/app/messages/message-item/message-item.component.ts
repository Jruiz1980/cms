import { Component, Input } from '@angular/core';
import { Message } from '../message.module';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css'
})
export class MessageItemComponent {
  @Input() message: Message;
}
