import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/interfaces/module';
import { Topic } from 'src/app/interfaces/topic';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {

  public topics: Topic[] = [];
  public module: Module = { topics: this.topics };

  constructor() { }

  ngOnInit(): void {
  }

  public addAssignment(): void {
    let activity: Topic = {
      type: 'assignment',
      index: this.topics.length
    }

    this.topics.push(activity);
  }

  public addLesson(): void {
    let activity: Topic = {
      type: 'lesson',
      index: this.topics.length
    }

    this.topics.push(activity);
  }
}
