import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { IShip } from 'src/app/features/ships/interfaces/ship';
import { ShipsService } from 'src/app/features/ships/services/ships.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class InputShellComponent implements OnInit, OnDestroy {

  ship$: Observable<IShip>;

  generalForm: FormGroup;
  id: number;
  isNew: boolean;
  sub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private service: ShipsService,
    public dialogRef: MatDialogRef<InputShellComponent>
  ) { }

  ngOnInit(): void {
    this.ship$ = this.service.details$;

    this.sub = this.ship$.subscribe((ship) => {
      this.loadForm(ship);
      this.defineIsNew(ship);
    });
  }
  
  defineIsNew(ship: IShip) {
    this.id = ship.id;
    if (ship.id == 0 ){
      this.isNew = true;
    } else {
      this.isNew = false;
    }
  }

  loadForm(ship: IShip) {
    this.generalForm = this.formBuilder.group({
      id: [ship.id],
      naam: [ship.naam, Validators.required],
      rederijId: [ship.rederijId, Validators.required],
      capaciteit: [ship.capaciteit, Validators.required],
      startLocatie: [ship.startLocatie, Validators.required],
      eindLocatie: [ship.eindLocatie, Validators.required]
    });
  }

  submitForm(formOutput: IShip): void {
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
