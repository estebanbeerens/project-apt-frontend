import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { InputShellComponent } from 'src/app/features/ships/components/input/shell/shell.component';
import { IShip } from 'src/app/features/ships/interfaces/ship';
import { ShipsService } from 'src/app/features/ships/services/ships.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class OverviewShellComponent implements OnInit {

  title: string = 'Overzicht schepen';

  isLoading$: Observable<boolean>;
  ships$: Observable<IShip[]>;

  constructor(
    private service: ShipsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.service.loadOverview();
    this.isLoading$ = this.service.isLoading$.asObservable();
    this.ships$ = this.service.overview$.asObservable();
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

  edit(id: number): void {
    this.service.loadDetails(id);
    this.openDialog();
  }

  remove(id: number): void {
    this.service.delete(id);
  }

}
