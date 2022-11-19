import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Module } from 'src/app/interfaces/module';
import { Topic } from 'src/app/interfaces/topic';

@Component({
  selector: 'app-content-module',
  templateUrl: './content-module.component.html',
  styleUrls: ['./content-module.component.scss']
})
export class ContentModuleComponent implements OnInit {

  @Output() topic: EventEmitter<Topic> =new EventEmitter<Topic>();
  @Input() modules!:Module[];

  constructor() { }

  public mock:Module[] = [{
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Módulo 1",
    "index": 0,
    "topics": [
        {
            "id": "1fa85f64-5717-4562-b3fc-2c963f66afa6",
            "type": "lesson",
            "name": "Aula 1",
            "content": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "index": 0
        },
        {
            "id": "2fa85f64-5717-4562-b3fc-2c963f66afa6",
            "type": "activity",
            "name": "Atividade 1",
            "content": "Lavar a roupa",
            "index": 1
        },
        {
            "id": "5fa85f64-5717-4562-b3fc-2c963f66afa6",
            "type": "lesson",
            "name": "Aula 2",
            "content": "https://www.youtube.com/watch?v=NnZZMkwI6KI",
            "index": 2
        },
        {
            "id": "6fa85f64-5717-4562-b3fc-2c963f66afa6",
            "type": "activity",
            "name": "Atividade 2",
            "content": "Estender a roupa",
            "index": 3
        }
    ]
}, {
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa7",
  "name": "Módulo 2",
  "index": 1,
  "topics": [
      {
          "id": "1fa85f64-5717-4562-b3fc-2c963f66afa6",
          "type": "lesson",
          "name": "Aula 1",
          "content": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "index": 0
      },
      {
          "id": "2fa85f64-5717-4562-b3fc-2c963f66afa6",
          "type": "activity",
          "name": "Atividade 1",
          "content": "Lavar a roupa",
          "index": 1
      },
      {
          "id": "5fa85f64-5717-4562-b3fc-2c963f66afa6",
          "type": "lesson",
          "name": "Aula 2",
          "content": "https://www.youtube.com/watch?v=NnZZMkwI6KI",
          "index": 2
      },
      {
          "id": "6fa85f64-5717-4562-b3fc-2c963f66afa6",
          "type": "activity",
          "name": "Atividade 2",
          "content": "Estender a roupa",
          "index": 3
      }
  ]
}]

  isHidden: Boolean[] = [];
  
  
  ngOnInit(): void {

  for (const i of this.mock) {
    this.isHidden.push(false);
  }
  console.log(this.isHidden)
  
  }




  showLesson(id:string, index:number) {
    this.isHidden[index] = !this.isHidden[index];
  }

  openTopic(topic:Topic) {
    this.topic.emit(topic);
  }

}
