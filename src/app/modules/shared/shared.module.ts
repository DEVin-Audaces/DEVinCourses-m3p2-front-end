import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material/material-components/material-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AuthenticationModule,
  ],
  exports: [
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AuthenticationModule
  ]
})
export class SharedModule { }
