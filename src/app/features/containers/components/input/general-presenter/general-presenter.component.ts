import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IContainer } from 'src/app/features/containers/interfaces/container';
import { IShip } from 'src/app/features/ships/interfaces/ship';

@Component({
  selector: 'app-input-general-presenter',
  templateUrl: './general-presenter.component.html',
  styleUrls: ['./general-presenter.component.scss']
})
export class InputGeneralPresenterComponent {
  
  @Input() container: IContainer;
  @Input() shipDropdown: IShip[];
  @Input() isNew: boolean;
  @Input() generalForm: FormGroup;

  @Output() closeDialog = new EventEmitter();
  @Output() submitForm = new EventEmitter<IContainer>();
  
  onCloseDialog(){
    this.closeDialog.emit();
  }

  onSubmit(data: IContainer){
    this.submitForm.emit(data);
  }

}
