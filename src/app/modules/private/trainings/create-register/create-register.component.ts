import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
  styleUrls: ['./create-register.component.scss']
})
export class CreateRegisterComponent implements OnInit {
 
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [],
      name: ['', Validators.required],
      instructor: ['', Validators.required],
      summary: ['', Validators.required],
      duration: ['', Validators.required],
    });
   }

  ngOnInit() {
    this.refreshTraining();
  }
  
  refreshTraining() {
    this.form.reset();
  };

  public addTraining() {
      this.refreshTraining();
  };
}
