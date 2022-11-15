import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Module } from 'src/app/interfaces/module';
import { Topic } from 'src/app/interfaces/topic';
import { youtubeValidator } from './youtube.validator';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {

  public forms: FormGroup[] = [];

  public moduleForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public addAssignment(): void {
    let assignmentForm: FormGroup = this.fb.group({
      name: ['', [Validators.required]],
      content: ['', [Validators.required]],
      type: ['assignment'],
      index: [this.forms.length]
    });

    this.forms.push(assignmentForm);
  }

  public addLesson(): void {
    let lessonForm: FormGroup = this.fb.group({
      name: ['', [Validators.required]],
      content: ['', [Validators.required, youtubeValidator]],
      type: ['lesson'],
      index: [this.forms.length]
    });

    this.forms.push(lessonForm);
  }

  public getModule(): Module {
    const name: string = this.moduleForm.value['name'];
    const topics: Topic[] = this.forms.map(form => form.value);

    const module: Module = {
      name: name,
      topics: topics
    };

    return module;
  }
}
