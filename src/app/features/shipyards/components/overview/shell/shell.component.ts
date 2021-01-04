import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { InputShellComponent } from 'src/app/features/shipyards/components/input/shell/shell.component';
import { IShipyard } from 'src/app/features/shipyards/interfaces/shipyard';
import { ShipyardsService } from 'src/app/features/shipyards/services/shipyards.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class OverviewShellComponent implements OnInit {

  title: string = 'Overzicht rederijen';

  isLoading$: Observable<boolean>;
  shipyards$: Observable<IShipyard[]>;

  constructor(
    private service: ShipyardsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.service.loadOverview();
    this.isLoading$ = this.service.isLoading$.asObservable();
    this.shipyards$ = this.service.overview$.asObservable();
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

  remove(id: string): void {
    this.service.delete(id);
  }

}
