import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import {LoginComponent} from "./components/login-component/login.component";
import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';

const routes: Routes = [
  {
    path:'main',
    loadChildren:() => import('../private/private.module').then(m => m.PrivateModule)
  },
  {
    path:'',
    component: HomePageComponent,
    children:[
      { path: '', component: LoginComponent },
      { path: 'cadastrar', component: NewUserPageComponent}
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
