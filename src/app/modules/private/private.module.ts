import { HeaderComponent } from './components/header/header.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { CreateModuleComponent } from './trainings/create-module/create-module.component';
import { TrainingScreenComponent } from 'src/app/modules/private/trainings/training-screen/training-screen.component';
import { ContentComponent } from 'src/app/modules/private/trainings/content/content.component';
import { CreateRegisterComponent } from './trainings/create-register/create-register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FullpageComponent,
    HeaderComponent,
    CreateModuleComponent,
    TrainingScreenComponent,
    ContentComponent,
    CreateRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
