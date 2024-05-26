import { EventEmitter,Injectable } from '@angular/core';
import { Document } from './document.module';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>();

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }
  
  getDocuments(): Document[] {
    return this.documents.slice();
   }
  
  getDocument(id: string): Document {
    let document:Document |undefined = this.documents.find((d) => d.id === id);
    if (!document) {
      throw new Error("Document not found")
    }
    return document;
  }
  
}
