import { HeaderComponent } from './components/header/header.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { CreateModuleComponent } from './trainings/create-module/create-module.component';
import { TrainingScreenComponent } from 'src/app/components/training-screen/training-screen.component';



@NgModule({
  declarations: [
    FullpageComponent,
    HeaderComponent,
    CreateModuleComponent,
    TrainingScreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
