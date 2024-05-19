import { Component, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.module';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('001', 'winter', 'a winter document.', 
                  'https://en.islcollective.com/english-esl-worksheets/winter/131001', null),
    new Document('002', 'spring', 'a spring document.', 
    'https://en.islcollective.com/english-esl-worksheets/general-topic/spring/spring/15524', null),
    new Document('003', 'summer', 'a summer document.', 
    'https://en.islcollective.com/english-esl-worksheets/general-topic/summer/summer/8670', null),
    new Document('004', 'fall', 'a fall document.', 
    'https://en.islcollective.com/english-esl-worksheets/fall-foods/41528', null)
  ]

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }
}
