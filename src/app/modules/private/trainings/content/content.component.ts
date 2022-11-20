import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/interfaces/topic';
import { Training } from 'src/app/interfaces/training';
import { TrainingsService } from '../../services/trainings.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public duration: string = '5:00';

  public title: string = 'Introdução ao JavaScript';

  public summary: string = 'Este curso prepara você para aprender JS.';

  public instructor: string = 'Jamil';

  public training$!: Observable<Training>;
  public training!: Training;
  public topic?: Topic;

  constructor(private _trainingsService: TrainingsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params['id'];

    this.training$ = this._trainingsService.getTrainingById(id);

    this.training$.subscribe(training => this.training = training);
  }

  public getTopic(topic: Topic): void {
    this.topic = topic;
  }

}
