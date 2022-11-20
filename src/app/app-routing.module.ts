import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './modules/private/services/authentication.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('../app/modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'trainings',
    loadChildren:() => import('../app/modules/private/private.module').then(m => m.PrivateModule),
    canLoad: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
