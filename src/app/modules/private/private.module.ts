import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { TrainingScreenComponent } from 'src/app/components/training-screen/training-screen.component';



@NgModule({
  declarations: [
    TrainingScreenComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
