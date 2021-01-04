import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { IShip } from 'src/app/features/ships/interfaces/ship';
import { ShipsService } from 'src/app/features/ships/services/ships.service';
import { IShipyard } from 'src/app/features/shipyards/interfaces/shipyard';
import { ShipyardsService } from 'src/app/features/shipyards/services/shipyards.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class InputShellComponent implements OnInit, OnDestroy {

  ship$: Observable<IShip>;
  shipyardDropdown$: Observable<IShipyard[]>;

  generalForm: FormGroup;
  id: string;
  isNew: boolean;
  sub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private shipsService: ShipsService,
    private shipyardsService: ShipyardsService,
    public dialogRef: MatDialogRef<InputShellComponent>
  ) { }

  ngOnInit(): void {
    this.shipyardsService.loadOverview();
    this.ship$ = this.shipsService.details$;
    this.shipyardDropdown$ = this.shipyardsService.overview$;

    this.sub = this.ship$.subscribe((ship) => {
      this.loadForm(ship);
      this.defineIsNew(ship);
    });
  }
  
  defineIsNew(ship: IShip) {
    this.id = ship.id;
    if (ship.id == '' ){
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
        this.shipsService.create(formOutput);
    } else {
      this.shipsService.update(this.id, formOutput);
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
