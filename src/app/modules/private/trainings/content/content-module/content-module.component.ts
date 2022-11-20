import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Module } from 'src/app/interfaces/module';
import { Topic } from 'src/app/interfaces/topic';

@Component({
  selector: 'app-content-module',
  templateUrl: './content-module.component.html',
  styleUrls: ['./content-module.component.scss'],
})
export class ContentModuleComponent implements OnInit {
  @Output() topic: EventEmitter<Topic> = new EventEmitter<Topic>();
  @Input() modules!: Module[];
  isHidden: Boolean[] = [];

  constructor() {}


  ngOnInit(): void {
    for (const i of this.modules) {
      this.isHidden.push(false);
    }
  }

  showModule(index: number) {
    this.isHidden = this.isHidden.map(value => value = false);
    this.isHidden[index] = !this.isHidden[index];
  }

  openTopic(topic: Topic) {
    this.topic.emit(topic);
  }
}
