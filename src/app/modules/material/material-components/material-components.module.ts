import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule
  ],
  exports:[
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule
  ]
})
export class MaterialComponentsModule { }
