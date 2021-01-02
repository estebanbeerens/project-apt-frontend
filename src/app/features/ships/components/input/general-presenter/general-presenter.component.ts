import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IShip } from 'src/app/features/ships/interfaces/ship';
import { IShipyard } from 'src/app/features/shipyards/interfaces/shipyard';

@Component({
  selector: 'app-input-general-presenter',
  templateUrl: './general-presenter.component.html',
  styleUrls: ['./general-presenter.component.scss']
})
export class InputGeneralPresenterComponent {
  
  @Input() ship: IShip;
  @Input() shipyardDropdown: IShipyard[];
  @Input() isNew: boolean;
  @Input() generalForm: FormGroup;

  @Output() closeDialog = new EventEmitter();
  @Output() submitForm = new EventEmitter<IShip>();
  
  onCloseDialog(){
    this.closeDialog.emit();
  }

  onSubmit(data: IShip){
    this.submitForm.emit(data);
  }
}
