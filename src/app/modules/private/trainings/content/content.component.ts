import { TokenService } from 'src/app/modules/public/services/token-service/token.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/interfaces/topic';
import { Training } from 'src/app/interfaces/training';
import { TokenService } from 'src/app/modules/public/services/token-service/token.service';
import { TrainingsService } from '../../services/trainings.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public training$!: Observable<Training>;
  public training!: Training;
  public topic?: Topic;

  public trainingId!: string;
  public userId!: string;
  public authorId!: string;
  public trainingIsSuspended!: boolean;

  constructor(private _trainingsService: TrainingsService,
              private _activatedRoute: ActivatedRoute,
              private _jwtService: TokenService) { }

  ngOnInit(): void {
    this.trainingId = this._activatedRoute.snapshot.params['id'];
    this.userId = this._jwtService.returnJwtData().id;

    this.training$ = this._trainingsService.getTrainingById(this.trainingId);

    this.training$.subscribe(training => {
      this.training = training;
      this.authorId = training.author!;
      this.trainingIsSuspended = !training.active!;
    });

  }

  public getTopic(topic: Topic): void {
    this.topic = topic;
  }

  public suspendTraining() {
    this._trainingsService.suspendTraining(this.trainingId).subscribe();
  }

  onComplete() {
    this._trainingsService.completeTraining(this.userId, this.trainingId)
      .subscribe((response: any) => {
        console.log("aqui", response)
        if (response.status === 404) {
          alert("Aluno não matriculado no curso")
        } else if (response.body === 400) {
          alert("Nem todos os tópicos do curso foram concluídos. Favor concluir todas as atividades do treinamento")
        } else alert('Curso concluído com sucesso')
      })
  }
}
