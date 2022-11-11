import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullpageComponent } from './layout/fullpage/fullpage.component';

// import { HomeComponent } from './components/home/home.component';
// import { TrainingComponent } from './components/training/training.component';

const routes: Routes = [
  // {
  //   path:'', component:FullpageComponent,
  //   children:[
  //     {path:'home', component:HomeComponent},
  //     {path:'training', component: TrainingComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrivateRoutingModule { }
