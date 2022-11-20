import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal-service/modal.service';
import { UsersService } from '../../services/user-service/user-service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  hide = true;
  errorMsg:boolean = false;
  public mensagem = "teste";

  constructor(private _form: FormBuilder,
              private _user: UsersService,
              private _modal: ModalService
               ) { }

  form: FormGroup = this._form.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  changePassword(){
    this._user.changeUserPassword(this.form.value.email, this.form.value.password).subscribe(
      ( resp ) => {
        if(resp.status != 200){
          this.mensagem = resp.body.error;
          this.errorMsg = true;
        }else{
          this.errorMsg = true;
          this.mensagem = "Senha alterada com sucesso, retornando a pagina de login..."
          setTimeout(() => {
            this._modal.close()
          }, 3000);
        }
      }

    );
  }

  closeModal(){
    this._modal.close();
  }

}
