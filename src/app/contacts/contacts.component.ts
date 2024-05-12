import { Component, Input } from '@angular/core';
import { Contact } from './contact.module';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
    @Input() selectedContact: Contact;
}