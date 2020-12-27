import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'apt-header-general-presenter',
  templateUrl: './general-presenter.component.html',
  styleUrls: ['./general-presenter.component.scss']
})
export class HeaderGeneralPresenterComponent {
  
  @Input() sideNavToggled: boolean;

  @Output() onTogglePressed = new EventEmitter();

  toggle(): void {
    this.onTogglePressed.emit();
  }
  
}
