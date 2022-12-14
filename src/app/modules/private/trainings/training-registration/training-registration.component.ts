import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserJwtData } from 'src/app/interfaces/userJwtData';
import { TokenService } from 'src/app/modules/public/services/token-service/token.service';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-training-registration',
  templateUrl: './training-registration.component.html',
  styleUrls: ['./training-registration.component.scss']
})
export class TrainingRegistrationComponent implements OnInit {
  trainingId: any;
  userId = '';
  buttonType = 'não matriculado';

  panelOpenState = false;

  randomImage!: string;
  private photoList = [
    "https://img.freepik.com/fotos-gratis/todos-estao-sorrindo-e-ouvindo-grupo-de-pessoas-em-conferencia-de-negocios-em-sala-de-aula-moderna-durante-o-dia_146671-16288.jpg",
    "https://img.freepik.com/fotos-gratis/aluno-em-sala-de-aula-olhando-para-o-curso_23-2148888810.jpg",
    "https://img.freepik.com/fotos-gratis/feche-a-mao-fazendo-anotacoes_23-2148888827.jpg",
    "https://img.freepik.com/fotos-gratis/feche-a-mao-escrevendo-na-vista-superior-do-caderno_23-2148888824.jpg",
    "https://img.freepik.com/fotos-gratis/jovem-aluna-ouvindo-a-professora-de-ingles_23-2148999530.jpg",
    "https://img.freepik.com/fotos-gratis/aluno-negro-discutindo-estrategia-de-marketing-com-professor-universitario-remoto_482257-20326.jpg",
    "https://img.freepik.com/fotos-gratis/feliz-macho-escrita-positivo-correio-para-cliente_1163-3986.jpg",
    "https://img.freepik.com/fotos-gratis/empresaria-participa-de-reuniao-on-line_1163-4281.jpg",
    "https://img.freepik.com/fotos-gratis/jovem-empresario-trabalhando-com-computador-remotamente_1328-3388.jpg",
    "https://img.freepik.com/fotos-gratis/close-up-das-maos-de-dactilografia-masculina-no-teclado-do-portatil_1262-2250.jpg",
    "https://img.freepik.com/fotos-gratis/aluno-de-tiro-medio-estudando-com-laptop_23-2148913216.jpg",
    "https://img.freepik.com/fotos-gratis/mulher-frequentando-aula-online_23-2148854911.jpg",
  ];

  resultTrainingId: any;
  listTopicIds: string[] = [];

  constructor(private _snackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute,
    private _registrationService:RegistrationService,
    private _tokenService: TokenService,
    private _router: Router) { }

  async ngOnInit(): Promise<void>{
    this.randomImage = this.photoList[Math.floor(Math.random() * this.photoList.length)];

    const user:any = this._tokenService.returnJwtData();
    this.userId = user.jti;

    await this._activatedRoute.params.subscribe((params) => {
      if (params['id'] != undefined) {
        this.trainingId = params['id'];
        this._registrationService.loadById(this.trainingId).then((data: any) => {
          this.resultTrainingId = data;
          if (this.resultTrainingId.active == false) this.buttonType = 'suspenso';
          data.modules.forEach((mod: any) => {
            mod.topics.forEach((topic: any) => {
              this.listTopicIds.push(topic.id);
            });
          });
        }
        );
      }
    })
  }

  async submitSubscription() {
    const registration = {
      UserId: this.userId,
      TrainingId: this.resultTrainingId.id,
      TopicIds: this.listTopicIds
    };

    await this._registrationService.create(registration).subscribe();
    this.openSnackBar(this.resultTrainingId.name, 'matriculado');
  }

  cancelSubscription() {
    // TODO Depois inserir código para realizar o cancelamento/desmatrícula

    console.log('Exemplo de dados que serão enviados para a desmatricula: ', {
      UserId: this.userId,
      TrainingId: this.resultTrainingId.trainingId,
      TopicId: ['C14BAB10-0DEF-4962-9790-85CBBF6630E9',
        '501C7ED2-6120-418E-A622-8FC98C904C2C',
        '7EB0638F-BB06-46AD-B674-90DDE2E4AA93']
    });
    
    console.log(this.userId)
    this._registrationService.unRegisterTraining(this.userId, this.trainingId)
    .subscribe((response: any) => {
      console.log("aqui", response)
      if (response.status === 404) {
        alert("Aluno não matriculado no curso")
      } else alert('Tópico concluído com sucesso')
    })

    this.openSnackBar(this.resultTrainingId.name, 'não matriculado');
  }

  openSnackBar(trainingName: string, NewButtonType: string) {
    this.buttonType = NewButtonType;

    if (this.buttonType == 'matriculado') {
      this._snackBar.open(`✔️ Matrícula realizada em: ${trainingName}`, 'Fechar', { duration: 5000 });
    } else {
      this._snackBar.open(`Você foi desmatriculado de: ${trainingName}`, 'Fechar', { duration: 5000 });
    }
  }

  public accessTraining(): void {
    const id = this._activatedRoute.snapshot.params['id'];
    this._router.navigateByUrl(`/trainings/${id}`);
  }
}
