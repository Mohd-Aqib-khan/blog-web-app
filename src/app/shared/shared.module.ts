import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'; // Add this
import { GenericTableComponent } from './components/generic-table/generic-table-component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GenericCardComponent,
    NavBarComponent,
    GenericTableComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule, // Ensure this is included
    MatSortModule,

  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    GenericCardComponent,
    NavBarComponent,
    GenericTableComponent
  ]
})
export class SharedModule { }
