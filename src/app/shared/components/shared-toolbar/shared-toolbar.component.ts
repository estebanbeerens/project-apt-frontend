import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-toolbar',
  templateUrl: './shared-toolbar.component.html',
  styleUrls: ['./shared-toolbar.component.scss']
})
export class SharedToolbarComponent {

  @Input() title: string;
  @Output() clickedAdd = new EventEmitter<MouseEvent>();

  constructor() {}

  handleClick(event: MouseEvent) {
    this.clickedAdd.emit(event);
  }
  
}
