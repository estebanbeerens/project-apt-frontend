import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { IShipyard } from 'src/app/features/shipyards/interfaces/shipyard';
import { ShipyardsService } from 'src/app/features/shipyards/services/shipyards.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class InputShellComponent implements OnInit {

  shipyard$: Observable<IShipyard>;

  generalForm: FormGroup;
  id: string;
  isNew: boolean;
  sub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private service: ShipyardsService,
    public dialogRef: MatDialogRef<InputShellComponent>
  ) { }

  ngOnInit(): void {
    this.shipyard$ = this.service.details$;

    this.sub = this.shipyard$.subscribe((shipyard) => {
      this.loadForm(shipyard);
      this.defineIsNew(shipyard);
    });
  }
  
  defineIsNew(shipyard: IShipyard) {
    this.id = shipyard.id;
    if (shipyard.id == '' ){
      this.isNew = true;
    } else {
      this.isNew = false;
    }
  }

  loadForm(shipyard: IShipyard) {
    this.generalForm = this.formBuilder.group({
      id: [shipyard.id],
      naam: [shipyard.naam, Validators.required],
      mail: [shipyard.mail, [Validators.required, Validators.email]],
      telefoon: [shipyard.telefoon, Validators.required],
      postcode: [shipyard.postcode, Validators.required],
      gemeente: [shipyard.gemeente, Validators.required]
    });
  }

  submitForm(formOutput: IShipyard): void {
    if (this.isNew) {
        this.service.create(formOutput);
    } else {
      this.service.update(this.id, formOutput);
    }
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
  ngOnDestroy() : void {
    this.sub.unsubscribe();
  }


}
