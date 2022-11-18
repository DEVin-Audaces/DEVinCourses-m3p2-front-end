import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login-component/login.component';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
