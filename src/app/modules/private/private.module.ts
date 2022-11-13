import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { TrainingScreenComponent } from 'src/app/components/training-screen/training-screen.component';
import { ContentComponent } from 'src/app/components/content/content.component';



@NgModule({
  declarations: [
    TrainingScreenComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
