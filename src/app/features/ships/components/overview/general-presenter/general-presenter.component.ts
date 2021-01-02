import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IShip } from 'src/app/features/ships/interfaces/ship';

@Component({
  selector: 'app-overview-general-presenter',
  templateUrl: './general-presenter.component.html',
  styleUrls: ['./general-presenter.component.scss']
})
export class OverviewGeneralPresenterComponent implements AfterViewInit, OnChanges {

  @Input() ships: IShip[];

  @Output() onEdit = new EventEmitter<number>();
  @Output() onRemove = new EventEmitter<number>();

  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IShip>;
  displayedColumns: string[] = [
    'naam',
    'capaciteit',
    'startLocatie',
    'eindLocatie',
    'actions'
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ships) {
      this.initDataSource(changes.ships.currentValue);
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  initDataSource(ships: IShip[]): void {
    this.dataSource = new MatTableDataSource(ships);
    this.dataSource.sort = this.sort;
  }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(tagID: number): void {
    this.onEdit.emit(tagID);
  }

  remove(tagID: number): void {
    this.onRemove.emit(tagID);
  }

}
