import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { IContainer } from 'src/app/features/containers/interfaces/container';
import { ContainersService } from 'src/app/features/containers/services/containers.service';
import { IShip } from 'src/app/features/ships/interfaces/ship';
import { ShipsService } from 'src/app/features/ships/services/ships.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class InputShellComponent implements OnInit, OnDestroy {

  container$: Observable<IContainer>;
  shipDropdown$: Observable<IShip[]>;

  generalForm: FormGroup;
  id: number;
  isNew: boolean;
  sub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private containersService: ContainersService,
    private shipsService: ShipsService,
    public dialogRef: MatDialogRef<InputShellComponent>
  ) { }

  ngOnInit(): void {
    this.shipsService.loadOverview();
    this.container$ = this.containersService.details$;
    this.shipDropdown$ = this.shipsService.overview$;

    this.sub = this.container$.subscribe((container) => {
      this.loadForm(container);
      this.defineIsNew(container);
    });
  }
  
  defineIsNew(container: IContainer) {
    this.id = container.id;
    if (container.id == 0 ){
      this.isNew = true;
    } else {
      this.isNew = false;
    }
  }

  loadForm(container: IContainer) {
    this.generalForm = this.formBuilder.group({
      id: [container.id],
      schipId: [container.schipId, Validators.required],
      gewicht: [container.gewicht, Validators.required],
      inhoud: [container.inhoud, Validators.required],
      startLocatie: [container.startLocatie, Validators.required],
      eindLocatie: [container.eindLocatie, Validators.required]
    });
  }

  submitForm(formOutput: IContainer): void {
    if (this.isNew) {
        this.containersService.create(formOutput);
    } else {
      this.containersService.update(this.id, formOutput);
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
