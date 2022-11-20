import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Module } from 'src/app/interfaces/module';
import { Topic } from 'src/app/interfaces/topic';
import { CreateTrainingService } from '../../services/create-training.service';
import { youtubeValidator } from './youtube.validator';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {

  public errorMessage: boolean = false;
  public finished: boolean = false;

  public topicForms: FormGroup[] = [];

  public moduleForm: FormGroup = this._fb.group({
    name: ['', [Validators.required]]
  });

  constructor(private _fb: FormBuilder, private _moduleService: CreateTrainingService) { }

  ngOnInit(): void {
  }

  public addAssignment(): void {
    let assignmentForm: FormGroup = this._fb.group({
      name: ['', [Validators.required]],
      content: ['', [Validators.required]],
      type: ['assignment'],
      index: [this.topicForms.length]
    });

    this.topicForms.push(assignmentForm);
  }

  public addLesson(): void {
    let lessonForm: FormGroup = this._fb.group({
      name: ['', [Validators.required]],
      content: ['', [Validators.required, youtubeValidator]],
      type: ['lesson'],
      index: [this.topicForms.length]
    });

    this.topicForms.push(lessonForm);
  }

  public sendModule(): void {
    const isValid: boolean = this.checkValidity();

    if (isValid == false) {
      this.errorMessage = true;
      return;
    };

    this.disableForms();
    this.finished = true;

    const module: Module = this.getModule();
    this._moduleService.setModule(module);
  }

  public getModule(): Module {
    const name: string = this.moduleForm.value['name'];
    const topics: Topic[] = this.topicForms.map(form => form.value);

    const module: Module = {
      name: name,
      topics: topics
    };

    return module;
  }

  private checkValidity(): boolean {
    if (this.moduleForm.valid == false) {
      return false;
    };

    for (let form of this.topicForms) {
      if (form.valid == false) {
        return false;
      }
    };

    return true;
  }

  private disableForms(): void {
    this.moduleForm.disable();

    for (let form of this.topicForms) {
      form.disable();
    };
  }
}
