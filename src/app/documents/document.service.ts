import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = [];
  selectedDocumentEvent = new EventEmitter<Document>();
  documentChangedEvent = new Subject<Document[]>();

  maxDocumentId : number;

  constructor(private http: HttpClient) {
    http.get('https://wdd-project-ecdc5-default-rtdb.firebaseio.com/documents.json')
    .subscribe(
      (documents: Document[]) => {
        this.documents = documents;
        this.maxDocumentId = this.getMaxId();
        this.documents.sort(function(a: Document, b:Document){
          return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
        })
        this.documentChangedEvent.next(this.documents.slice());
      },
      (error: any) => {console.log(error)}
    );

  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    let theDocument: Document = null;

    this.documents.forEach(doc => {
      if(doc.id === id){
        theDocument = doc;
      }
    })
    return theDocument;
  }

  deleteDocument(document: Document){
    if(!document){
      return;
    }
    const position = this.documents.indexOf(document);
    if (position < 0) {
      return
    }
    this.documents.splice(position, 1);
    this.storeDocuments();
  }

  getMaxId(): number {
    let maxId = 0;
    this.documents.forEach(document => {
      let currentId = +document.id
      if (currentId > maxId){
        maxId = currentId;
      }
    })

    return maxId;
  }

  addDocument(newDocument: Document){
    if(newDocument === undefined || newDocument === null){
      return;
    }
    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);

    this.storeDocuments();
  }

  updateDocument(originalDocument: Document, newDocument: Document){
    if(originalDocument === undefined || originalDocument === null || newDocument === undefined || newDocument === null){
      return;
    }
    let position = this.documents.indexOf(originalDocument);
    if (position < 0){
      return;
    }
    newDocument.id = originalDocument.id;
    this.documents[position] = newDocument;
    this.storeDocuments();
  }

  storeDocuments(){
    const header = new HttpHeaders({'contentType': 'application/json'});
    const data = JSON.stringify(this.getDocuments());
    this.http.put('https://wdd-project-ecdc5-default-rtdb.firebaseio.com/documents.json', data, {'headers':header})
    .subscribe(()=>{
      this.documentChangedEvent.next(this.documents.slice());
    })
  }

}