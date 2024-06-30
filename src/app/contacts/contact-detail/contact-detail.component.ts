/*import { Component, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  @Input() contact : Contact;
  id: string;

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.contact = this.contactService.getContact(this.id);
      }
    )
  }

  onEditContact(){
    this.contactService.startedEditing = 
      new Observable((observer) => {observer.next(null)});
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteContact(){
    this.contactService.deleteContact(this.contact);
    this.router.navigate(['contacts'])
  }
  
}*/

import { Component, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  @Input() contact : Contact;
  id: string;

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.contact = this.contactService.getContact(this.id);
      }
    )
  }

  onEditContact(){
    this.contactService.startedEditing.next(null);
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteContact(){
    this.contactService.deleteContact(this.contact);
    this.router.navigate(['contacts'])
  }
  
}