import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { TrainingRegistrationComponent } from './trainings/training-registration/training-registration.component';
import { TrainingScreenComponent } from './trainings/training-screen/training-screen.component';
import { CreateTrainingComponent } from './trainings/create-training/create-training.component';

const routes: Routes = [
  {
    path:'trainings', component:FullpageComponent,
    children:[
      {path:'home', component: TrainingScreenComponent}, // componente temporário para testes
      {path:'watch', component:TrainingScreenComponent},
      {path:'registration', component:TrainingRegistrationComponent},
      {path:'create', component:CreateTrainingComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrivateRoutingModule { }