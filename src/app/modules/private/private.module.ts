import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
<<<<<<< HEAD
import { CreateModuleComponent } from './trainings/create-module/create-module.component';
=======
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { HeaderComponent } from './components/header/header.component';

// import { HomeComponent } from './components/home/home.component';
// import { TrainingComponent } from './components/training/training.component';
>>>>>>> Develop



@NgModule({
  declarations: [
<<<<<<< HEAD
    CreateModuleComponent
=======
    FullpageComponent,
    HeaderComponent,
    // HomeComponent,
    // TrainingComponent
>>>>>>> Develop
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
