import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { HeaderComponent } from './components/header/header.component';

// import { HomeComponent } from './components/home/home.component';
// import { TrainingComponent } from './components/training/training.component';



@NgModule({
  declarations: [
    FullpageComponent,
    HeaderComponent,
    // HomeComponent,
    // TrainingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
