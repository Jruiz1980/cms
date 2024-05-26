import { Component, OnInit } from '@angular/core';
import { Document } from './document.module';
import { DocumentService } from './document.service';


@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentListComponent implements OnInit {

  documents: Document[] = []

  constructor(private docService: DocumentService) {}

  ngOnInit(){
    this.documents = this.docService.getDocuments();
  }


  onSelectedDocument(document: Document){
    this.docService.documentSelectedEvent.emit(document);
  }
}
/*export class DocumentsComponent implements OnInit {
  selectedDocument?: Document;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.selectedDocumentEvent.subscribe(
      (document: Document) => {
        this.selectedDocument = document;
      }
    );
  }
}*/
