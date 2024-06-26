import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { DropdownDirective } from './dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsFilterPipe } from './contacts/contacts-filter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Environment } from '../environment/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DropdownDirective,
    ContactEditComponent,
    DocumentEditComponent,
    ContactsFilterPipe,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    DragDropModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    { provide: 'firebaseConfig', useValue: Environment.firebaseConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
