import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IShipyard } from 'src/app/features/shipyards/interfaces/shipyard';

@Component({
  selector: 'app-input-general-presenter',
  templateUrl: './general-presenter.component.html',
  styleUrls: ['./general-presenter.component.scss']
})
export class InputGeneralPresenterComponent {
  
  @Input() shipyard: IShipyard;
  @Input() isNew: boolean;
  @Input() generalForm: FormGroup;

  @Output() closeDialog = new EventEmitter();
  @Output() submitForm = new EventEmitter<IShipyard>();
  
  onCloseDialog(){
    this.closeDialog.emit();
  }

  onSubmit(data: IShipyard){
    this.submitForm.emit(data);
  }

}
