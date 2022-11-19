import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from 'src/app/interfaces/training';
import { TokenService } from '../../public/services/token-service/token.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  resultLoad: any;
  userId = '4C4AF6A4-716E-4D2C-B439-3AC76991CB79'; // TODO Depois realizar a consulta do id automatico


  trainingList: Training[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _profileService: ProfileService, private _tokenService: TokenService) { }

  async ngOnInit(): Promise<void> {

    // const user:any = this._tokenService.returnJwtData();
    // this.userId = user.jti;

    await this._activatedRoute.params.subscribe((params) => {

      this._profileService.loadByUserId(this.userId).then((data: any) => {
        this.resultLoad = data;


        console.log(this.resultLoad);
        
      }
      );

    })
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
