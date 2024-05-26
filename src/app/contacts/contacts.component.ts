import { Component, Input } from '@angular/core';
import { Contact } from './contact.module';
import { ContactService } from './contact.service';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
    @Input() selectedContact?: Contact;

    constructor(private contactService: ContactService) {}

    ngOnInit() {
    this.contactService.contactSelectedEvent.subscribe(e =>{this.selectedContact=e});
  }
}