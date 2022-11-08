import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
