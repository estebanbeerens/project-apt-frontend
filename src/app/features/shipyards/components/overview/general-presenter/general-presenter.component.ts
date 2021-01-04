import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IShipyard } from 'src/app/features/shipyards/interfaces/shipyard';

@Component({
  selector: 'app-overview-general-presenter',
  templateUrl: './general-presenter.component.html',
  styleUrls: ['./general-presenter.component.scss']
})
export class OverviewGeneralPresenterComponent implements AfterViewInit, OnChanges {

  @Input() shipyards: IShipyard[];

  @Output() onEdit = new EventEmitter<string>();
  @Output() onRemove = new EventEmitter<string>();

  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IShipyard>;
  displayedColumns: string[] = [
    'naam',
    'mail',
    'telefoon',
    'gemeente',
    'actions'
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.shipyards) {
      this.initDataSource(changes.shipyards.currentValue);
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  initDataSource(shipyards: IShipyard[]): void {
    this.dataSource = new MatTableDataSource(shipyards);
    this.dataSource.sort = this.sort;
  }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(id: string): void {
    this.onEdit.emit(id);
  }

  remove(id: string): void {
    this.onRemove.emit(id);
  }

}
