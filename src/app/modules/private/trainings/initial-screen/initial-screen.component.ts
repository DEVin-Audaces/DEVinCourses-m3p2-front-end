import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from 'src/app/interfaces/report';
import { Training } from 'src/app/interfaces/training';
import { TrainingsService } from '../../services/trainings.service';

@Component({
  selector: 'app-initial-screen',
  templateUrl: './initial-screen.component.html',
  styleUrls: ['./initial-screen.component.scss']
})
export class InitialScreenComponent implements OnInit {

  public photos: string[] = [
    "https://img.freepik.com/fotos-gratis/todos-estao-sorrindo-e-ouvindo-grupo-de-pessoas-em-conferencia-de-negocios-em-sala-de-aula-moderna-durante-o-dia_146671-16288.jpg",
    "https://img.freepik.com/fotos-gratis/todos-estao-sorrindo-e-ouvindo-grupo-de-pessoas-em-conferencia-de-negocios-em-sala-de-aula-moderna-durante-o-dia_146671-16288.jpg",
    "https://img.freepik.com/fotos-gratis/aluno-em-sala-de-aula-olhando-para-o-curso_23-2148888810.jpg",
    "https://img.freepik.com/fotos-gratis/feche-a-mao-fazendo-anotacoes_23-2148888827.jpg",
    "https://img.freepik.com/fotos-gratis/feche-a-mao-escrevendo-na-vista-superior-do-caderno_23-2148888824.jpg"
  ]

  public trainings!: Observable<Training[]>;

  constructor(private _trainingsService: TrainingsService) { }

  ngOnInit(): void {

    this.trainings = this._trainingsService.getAllTrainings();

  }



} 
