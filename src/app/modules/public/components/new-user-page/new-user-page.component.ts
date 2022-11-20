import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/interfaces/user';
import { UsersService } from '../../services/user-service/user-service';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements OnInit {
  public newUser: FormGroup = this.form.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    age: [, [Validators.required, Validators.min(18)]],
    cpf: [, [Validators.required]],
    passwordRepeat: ['', [Validators.required, Validators.minLength(8)]],
  })

  constructor(private form: FormBuilder, private userService: UsersService ) {
    }

  ngOnInit(): void {
  }

  public submitForm() {
      if (this.newUser.valid && this.newUser.value.password == this.newUser.value.passwordRepeat) {
        const newUser: Users = this.newUser.value
        this.userService.createUser(newUser);
      }
    }
}
