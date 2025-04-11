import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';

export interface ColumnDefinition {
  columnDef: string;
  header: string;
  cell: (element: any) => any;
}

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table-component.html',
  styleUrls: ['./generic-table-component.scss']
})
export class GenericTableComponent {
  @Input() data: any[] = []; // Input data for the table
  @Input() columns: ColumnDefinition[] = []; // Column definitions
  @Output() rowClick = new EventEmitter<any>(); // Event emitted on row click

  @ViewChild(MatPaginator) paginator!: MatTableDataSourcePaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];

  ngOnChanges(): void {
    // Update dataSource and displayedColumns when inputs change
    this.dataSource.data = this.data;
    this.displayedColumns = this.columns.map(col => col.columnDef);
  }

  ngAfterViewInit(): void {
    // Connect paginator and sort to the dataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Emit row click event
  onRowClick(row: any): void {
    this.rowClick.emit(row);
  }
}
