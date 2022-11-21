import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from 'src/app/interfaces/training';
import { TrainingUser } from 'src/app/interfaces/training-user';
import { TokenService } from '../../public/services/token-service/token.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId: any;
  // userId = '5691B39A-B968-4187-8009-08DACA4E7BC8'; // TODO Depois realizar a consulta do id automatico

  trainingList: any;
  trainingUsersList: any;

  trainingListUnDone: any;
  trainingListDone: any;

  constructor(private _activatedRoute: ActivatedRoute, private _profileService: ProfileService, private _tokenService: TokenService) { }

  async ngOnInit(): Promise<void> {

    const user: any = this._tokenService.returnJwtData();
    this.userId = user.id;

    //Get Trainings List
    this._profileService.loadByUserId(this.userId).then((data: any) => {
      this.trainingList = data;

      console.log(this.trainingList);
    }
    );

    //Get TrainingsUser List and prepare trainingListUnDone and trainingListDone
    this._profileService.loadRegisteredTrainings(this.userId).then((data: any) => {
      this.trainingUsersList = data;

      console.log(this.trainingUsersList);

      this.trainingListUnDone = this.trainingList.filter((training: Training) => {
        const checkUndone =
          this.trainingUsersList.find((trainingUser: TrainingUser) =>
            trainingUser.trainingId == training.id && !trainingUser.completed)

        if (checkUndone) {
          return training;
        }
        return null;
      })

      this.trainingListDone = this.trainingList.filter((training: Training) => {
        const checkDone =
          this.trainingUsersList.find((trainingUser: TrainingUser) =>
            trainingUser.trainingId == training.id && trainingUser.completed)

        if (checkDone) {
          return training;
        }
        return null;
      })

      console.log(this.trainingListUnDone);
      console.log(this.trainingListDone);
    });





  }

  //hiding content from 
  isLogged: boolean = true;

  //hiding info box
  visibleUndone: boolean = false
  visibleDone: boolean = false

  //onclick toggling divs
  onclickUndone() {
    this.visibleUndone = !this.visibleUndone;
  }
  onclickDone() {
    this.visibleDone = !this.visibleDone;
  }


}
