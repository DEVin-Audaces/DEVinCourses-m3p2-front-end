import { HeaderComponent } from './components/header/header.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { CreateModuleComponent } from './trainings/create-module/create-module.component';



@NgModule({
  declarations: [
    FullpageComponent,
    HeaderComponent,
    CreateModuleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
