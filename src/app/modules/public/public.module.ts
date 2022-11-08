import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
