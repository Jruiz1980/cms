import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.module';
import { ContactService } from '../contact.service';


@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  @Output() selectedContactEvent = new EventEmitter<Contact>();
  contacts: Contact[] = [];
  contactService: any;

  onSelected(contact: Contact){
    this.selectedContactEvent.emit(contact);
  }
   ngOnInit(){
    this.contacts = this.contactService.getContacts();
  }
}

