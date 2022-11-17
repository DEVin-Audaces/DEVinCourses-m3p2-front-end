import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-training-registration',
  templateUrl: './training-registration.component.html',
  styleUrls: ['./training-registration.component.scss']
})
export class TrainingRegistrationComponent implements OnInit {
  userId = 'B62DCFA2-F5EF-4840-B40B-8A3ADCE3BAE3'; // TODO Depois realizar a consulta do id automatico
  buttonType = 'não matriculado';  // TODO Depois realizar a consulta inicial para verificar se o usuário possui ou não matricula

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

  public mockTraining = {
    trainingId: 'EDFEB1A7-3073-4DFB-B3D3-84DEB535BE1A',
    name: "Nome do Treinamento",
    summary: "resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo",
    duration: 8,
    instructor: "Nome do Professor",
    module: [
      {
        name: 'Nome do Módulo 1',
        topics: [{
          topicId: 'C14BAB10-0DEF-4962-9790-85CBBF6630E9',
          name: 'Nome do Tópico 1',
          type: 'Aula'
        },
        {
          topicId: '501C7ED2-6120-418E-A622-8FC98C904C2C',
          name: 'Nome do Tópico 2',
          type: 'Atividade'
        },
        {
          topicId: '7EB0638F-BB06-46AD-B674-90DDE2E4AA93',
          name: 'Nome do Tópico 3',
          type: 'Aula'
        }]
      }
    ]
  }

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.randomImage = this.photoList[Math.floor(Math.random() * this.photoList.length)];
  }

  submitSubscription() {
    // TODO Depois inserir código para realizar a matrícula

    console.log('Exemplo de dados que serão enviados para a matrícula: ', {
      UserId: this.userId,
      TrainingId: this.mockTraining.trainingId,
      TopicId: ['C14BAB10-0DEF-4962-9790-85CBBF6630E9',
        '501C7ED2-6120-418E-A622-8FC98C904C2C',
        '7EB0638F-BB06-46AD-B674-90DDE2E4AA93']
    });
    this.openSnackBar(this.mockTraining.name, 'matriculado');
  }

  cancelSubscription() {
    // TODO Depois inserir código para realizar o cancelamento/desmatrícula

    console.log('Exemplo de dados que serão enviados para a desmatricula: ', {
      UserId: this.userId,
      TrainingId: this.mockTraining.trainingId,
      TopicId: ['C14BAB10-0DEF-4962-9790-85CBBF6630E9',
        '501C7ED2-6120-418E-A622-8FC98C904C2C',
        '7EB0638F-BB06-46AD-B674-90DDE2E4AA93']
    });
    this.openSnackBar(this.mockTraining.name, 'não matriculado');
  }

  openSnackBar(trainingName: string, NewButtonType: string) {
    this.buttonType = NewButtonType;

    if (this.buttonType == 'matriculado') {
      this._snackBar.open(`✔️ Matrícula realizada em: ${trainingName}`, 'Fechar', { duration: 5000 });
    } else {
      this._snackBar.open(`Você foi desmatriculado de: ${trainingName}`, 'Fechar', { duration: 5000 });
    }
  }

}
