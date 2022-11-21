import { SafePipe } from './services/safe-url.service';
import { ReportListComponent } from './trainings/report-list/report-list.component';
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
import { TrainingRegistrationComponent } from './trainings/training-registration/training-registration.component';
import { CreateTrainingComponent } from './trainings/create-training/create-training.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { ContentModuleComponent } from './trainings/content/content-module/content-module.component';
import { InitialScreenComponent } from './trainings/initial-screen/initial-screen.component';
import { ProfileComponent } from './profile/profile.component';
import { TrainingCardComponent } from './components/training-card/training-card.component';
import { TrainingModalComponent } from './components/training-modal/training-modal.component';


@NgModule({
  declarations: [
    FullpageComponent,
    HeaderComponent,
    CreateModuleComponent,
    TrainingScreenComponent,
    ContentComponent,
    CreateRegisterComponent,
    TrainingRegistrationComponent,
    CreateTrainingComponent,
    ReportListComponent,
    ContentModuleComponent,
    InitialScreenComponent,
    SafePipe,
    ProfileComponent,
    TrainingCardComponent,
    TrainingModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCardModule
  ]
})
export class PrivateModule { } 
