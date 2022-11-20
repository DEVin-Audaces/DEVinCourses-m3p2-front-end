import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Training } from 'src/app/interfaces/training';

@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
  styleUrls: ['./create-register.component.scss']
})
export class CreateRegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      summary: ['', Validators.required],
      instructor: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(8)]],
    });
   }

  ngOnInit() {
    this.form.reset();
  }

  getTraining(): Training {
    let training: Training = this.form.value;
    this.form.disable();

    return training;
  }

  checkValidity(): boolean {
    return this.form.valid;
  }
}
