import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login-component/login/login.component';
import { ChangePasswordComponent } from './components/changePasswordModal/change-password.component';
import { ModalService } from './services/modal-service/modal.service';
import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';




@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    ChangePasswordComponent,
    NewUserPageComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule,

  ],
  providers:[ModalService],
  entryComponents: [
    ChangePasswordComponent
  ]
})
export class PublicModule { }
