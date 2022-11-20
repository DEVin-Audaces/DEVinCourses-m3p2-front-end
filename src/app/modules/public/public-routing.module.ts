import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login-component/login/login.component';

const routes: Routes = [

  {
    path:'',
    component: HomePageComponent,
    children:[
      { path: '', component: LoginComponent }
    ]

},
  {
    path:'main',
    loadChildren:() => import('../private/private.module').then(m => m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
