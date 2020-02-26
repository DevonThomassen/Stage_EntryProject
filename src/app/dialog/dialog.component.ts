import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  @Input() info: string;
  @Input() isOpen: boolean;

  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() confirmed = new EventEmitter<boolean>();

  constructor() { }

  close() {
    this.closeDialog.emit(true);
  }

  confirm() {
    this.confirmed.emit(true);
  }

}
