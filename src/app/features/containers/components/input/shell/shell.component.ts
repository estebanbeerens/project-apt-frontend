import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { IContainer } from 'src/app/features/containers/interfaces/container';
import { ContainersService } from 'src/app/features/containers/services/containers.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class InputShellComponent implements OnInit, OnDestroy {

  container$: Observable<IContainer>;

  generalForm: FormGroup;
  id: number;
  isNew: boolean;
  sub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private service: ContainersService,
    public dialogRef: MatDialogRef<InputShellComponent>
  ) { }

  ngOnInit(): void {
    this.container$ = this.service.details$;

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
