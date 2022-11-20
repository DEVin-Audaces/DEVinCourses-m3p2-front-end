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

  public duration: string = '5:00';

  public title: string = 'Introdução ao JavaScript';

  public summary: string = 'Este curso prepara você para aprender JS.';

  public instructor: string = 'Jamil';

  public training$!: Observable<Training>;
  public training!: Training;
  public topic?: Topic;

  private trainingId = "";
  private userId = "";

  constructor(private _trainingsService: TrainingsService, private _activatedRoute: ActivatedRoute,
    private _tokenService: TokenService) { }

  ngOnInit(): void {
    this.trainingId = this._activatedRoute.snapshot.params['id'];

    this.training$ = this._trainingsService.getTrainingById(this.trainingId);

    this.training$.subscribe(training => this.training = training);

    const user: any = this._tokenService.returnJwtData();
    this.userId = user.jti;
  }

  public getTopic(topic: Topic): void {
    this.topic = topic;
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
