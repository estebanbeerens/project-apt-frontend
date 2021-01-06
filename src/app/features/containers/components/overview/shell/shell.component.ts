import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { InputShellComponent } from 'src/app/features/containers/components/input/shell/shell.component';
import { IContainer } from 'src/app/features/containers/interfaces/container';
import { ContainersService } from 'src/app/features/containers/services/containers.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class OverviewShellComponent implements OnInit {

  title: string = 'Overzicht containers';

  isLoading$: Observable<boolean>;
  containers$: Observable<IContainer[]>;

  constructor(
    private service: ContainersService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.service.loadOverview();
    this.isLoading$ = this.service.isLoading$.asObservable();
    this.containers$ = this.service.overview$.asObservable();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InputShellComponent, {
      width: '90%'
    });
  }

  create(): void {
    this.service.resetDetails();
    this.openDialog();
  }

  edit(id: string): void {
    this.service.loadDetails(id);
    this.openDialog();
  }

  remove(id: number): void {
    this.service.delete(id);
  }

}
