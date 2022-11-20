import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/authentication/auth-service/authentication.service';
import {UsersService} from "../../services/user-service/user-service";
import { Login } from '../../../../interfaces/login';
import { ModalService } from '../../services/modal-service/modal.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userObj: any;
  hide = true;
  errorMsg:boolean = false;
  public login!: {};

  formLogin: FormGroup = this._form.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private _form: FormBuilder,
              private _router: Router,
              private _loginService: AuthenticationService,
              private _userService: UsersService,
              private _modal: ModalService
            ) { }

  ngOnInit(): void {
  }

  userLogin(){
    const email: string = this.formLogin.value.email;
    const password: string = this.formLogin.value.password;
    const login: Login = {email: email, password: password}
    this._loginService.autenticar(login)
    .subscribe(
      (response ) => {
          if(response.status != 200){
            console.log(response)
            this.errorMsg = true
            console.log(this.errorMsg)
          }else{
            const token = response.body?.accessToken;
            this._userService.saveToken(token!);
            this._userService.getUser().subscribe(x => console.log(x));
            this._router.navigate(['/main/'])
          }
      }
    )
  }

  openModal() {
    this._modal.open();
  }
}
