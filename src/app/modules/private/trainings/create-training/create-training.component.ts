import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/interfaces/training';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.scss']
})
export class CreateTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSendTraining(training: Training): void {
    console.log(training);
  }

}
