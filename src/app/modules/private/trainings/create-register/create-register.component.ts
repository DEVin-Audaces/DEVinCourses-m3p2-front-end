import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Training } from 'src/app/interfaces/training';

@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
  styleUrls: ['./create-register.component.scss']
})
export class CreateRegisterComponent implements OnInit {
  @Output() sendTrainingEvent = new EventEmitter<Training>()
 
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      summary: ['', Validators.required],
      instructor: ['', Validators.required],
      duration: ['', Validators.required],
    });
   }

  ngOnInit() {
    this.form.reset();
  }

  addTraining() {
      this.form.disable();
      this.sendTrainingEvent.emit();
  }

  getTraining(): Training {
    return this.form.value;
  }
  
}
