import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule
  ],
  exports:[
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule
  ]
})
export class MaterialComponentsModule { }
