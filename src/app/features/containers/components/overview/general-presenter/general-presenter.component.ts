import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IContainer } from 'src/app/features/containers/interfaces/container';

@Component({
  selector: 'app-overview-general-presenter',
  templateUrl: './general-presenter.component.html',
  styleUrls: ['./general-presenter.component.scss']
})
export class OverviewGeneralPresenterComponent implements AfterViewInit, OnChanges {

  @Input() containers: IContainer[];

  @Output() onEdit = new EventEmitter<string>();
  @Output() onRemove = new EventEmitter<string>();

  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IContainer>;
  displayedColumns: string[] = [
    'inhoud',
    'gewicht',
    'startLocatie',
    'eindLocatie',
    'actions'
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.containers) {
      this.initDataSource(changes.containers.currentValue);
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  initDataSource(containers: IContainer[]): void {
    this.dataSource = new MatTableDataSource(containers);
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
