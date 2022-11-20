import { TrainingsService } from './../../services/trainings.service';
import { CreateTrainingService } from '../../services/create-training.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Training } from 'src/app/interfaces/training';
import { Module } from 'src/app/interfaces/module';
import { CreateModuleComponent } from '../create-module/create-module.component';
import { CreateRegisterComponent } from '../create-register/create-register.component';
import { TokenService } from 'src/app/modules/public/services/token-service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.scss']
})
export class CreateTrainingComponent implements OnInit {

  @ViewChild(CreateRegisterComponent) RegisterChild!: CreateRegisterComponent;
  @ViewChild(CreateModuleComponent) ModuleChild!: CreateModuleComponent;

  @ViewChild('moduleContainer', {read: ViewContainerRef}) moduleContainer!: ViewContainerRef;

  public numberOfModules: number = 0;
  public modules: Module[] = [];
  public errorMessage: boolean = false;
  public displayCreateModule: boolean = false
  public training!: Training;
  public moduleArray: Module[] = [];
  private userId!: string;

  constructor(private _createTrainingService: CreateTrainingService,
              private _jwtService: TokenService,
              private _trainingsService: TrainingsService,
              private _router: Router) {}

  ngOnInit(): void {
    this._createTrainingService
      .getModule()
      .subscribe(module => {
        module.index = this.modules.length;
        this.modules.push(module)
      });

    this.userId = this._jwtService.returnJwtData().id;
  }

  public addElement(): void {
    this.moduleContainer.createComponent(CreateModuleComponent);
    this.numberOfModules++;
  }

  public createTraining(): void {
    const isTrainingValid = this.checkValidity();

    if (isTrainingValid == false) {
      this.errorMessage = true;
      return;
    }

    let training = this.RegisterChild.getTraining();
    training.modules = this.modules;
    training.author = this.userId;
    training.active = true;

    this._trainingsService.postTraining(training).subscribe(() =>
      this._router.navigateByUrl('trainings/home')
    );
  }

  private checkValidity(): boolean {
    const isFormValid: boolean = this.RegisterChild.checkValidity();

    if (isFormValid == false || this.numberOfModules != this.modules.length || this.numberOfModules == 0) {
      return false;
    }

    return true;
  }
}
