import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact.module';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>();

  constructor() {
    this.contacts = MOCKCONTACTS;
   }

   getContacts(): Contact[] {
    return this.contacts.slice();
   }

   getContact(id: string): Contact {
    let contacts: Contact[] = this.getContacts();
    let theContact: Contact = {} as Contact;
    
    contacts.forEach(contact => {
      if(id === contact.id){
        theContact = contact;
      }
    })
    return theContact;
   }
}