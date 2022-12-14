import { ContentComponent } from './trainings/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { TrainingRegistrationComponent } from './trainings/training-registration/training-registration.component';
import { CreateTrainingComponent } from './trainings/create-training/create-training.component';
import { InitialScreenComponent } from './trainings/initial-screen/initial-screen.component';
import { ReportListComponent } from './trainings/report-list/report-list.component';
import { ProfileComponent } from './profile/profile.component';
import { NewUserPageComponent } from '../public/components/new-user-page/new-user-page.component';

const routes: Routes = [
  {
    path: '', component: FullpageComponent,
    children: [
      { path: 'home', component: InitialScreenComponent },
      { path: 'registration/:id', component: TrainingRegistrationComponent },
      { path: 'report', component: ReportListComponent },
      { path: 'create-training', component: CreateTrainingComponent },
      { path: 'profile', component: ProfileComponent },
      { path: ':id', component: ContentComponent },
      {path:'EditUser/:id', component:NewUserPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrivateRoutingModule { }
