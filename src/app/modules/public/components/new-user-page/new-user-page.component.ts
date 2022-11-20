import { Users } from './../../../../interfaces/user';
import { UsersService } from './../../services/user-service/user-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements OnInit {

  public registration = true
  public edit = false
  public selectedFile!: File;
  public newUser: FormGroup = this.form.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    age: [, [Validators.required, Validators.min(18)]],
    cpf: [, [Validators.required]],
    passwordRepeat: ['', [Validators.required, Validators.minLength(8)]],
  })

  constructor(private form: FormBuilder, private userService: UsersService, private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    if (id) {
      this.edit = true
      this.registration = false
      this.userService.getUserLogin().subscribe(users =>
        this.updateForm(users)
      )
    }
  }

  public submitForm() {
    if (this.edit) {
      this.userService.getUserLogin().subscribe(users =>
        this.updateForm(users))
      const newUser: Users = this.newUser.value
      this.userService.updateUser(newUser)
    } else {
      if (this.newUser.valid && this.newUser.value.password == this.newUser.value.passwordRepeat) {
        const newUser: Users = this.newUser.value
        this.userService.createUser(newUser);
      }
    }
  }

  public onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
    let newFormData = new FormData();
    newFormData.append('ImageUpload', this.selectedFile);
    this.userService.postImg(newFormData)
  }

  public updateForm(collection: any) {
    this.newUser.patchValue({
      id: collection.id,
      image: collection.image,
      name: collection.name,
      email: collection.email,
      age: collection.age,
      cpf: collection.cpf,
      password: collection.password,
      passwordRepeat: collection.passwordRepeat
    })
  }
  

}
