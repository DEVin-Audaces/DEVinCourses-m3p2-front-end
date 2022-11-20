import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guard/authentication.guard';
import { LoginGuard } from './guard/login.guard';


const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'login'},
  {
    path:'trainings',
    loadChildren:() => import('../app/modules/private/private.module').then(m => m.PrivateModule),
    canLoad: [AuthenticationGuard]
  },
  {
    path:'login',
    loadChildren:() => import('../app/modules/public/public.module').then(m => m.PublicModule),
    canLoad: [LoginGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
