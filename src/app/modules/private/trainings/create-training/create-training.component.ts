import { CreateTrainingService } from '../../services/create-training.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Training } from 'src/app/interfaces/training';
import { Module } from 'src/app/interfaces/module';
import { CreateModuleComponent } from '../create-module/create-module.component';
import { CreateRegisterComponent } from '../create-register/create-register.component';

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
  public moduleArray: Module[] = []

  constructor(private _createTrainingService: CreateTrainingService) {}

  ngOnInit(): void {
    this._createTrainingService
      .getModule()
      .subscribe(module => {
        module.index = this.modules.length;
        this.modules.push(module)
      });
  }

  public addElement(): void {
    this.moduleContainer.createComponent(CreateModuleComponent);
    this.numberOfModules++;
  }

  // onSendTraining(): void {
  //   this.displayCreateModule = true
  // }

  public invokeChildren(): void {
    const isFormValid: boolean = this.RegisterChild.checkValidity();

    if (isFormValid == false || this.numberOfModules != this.modules.length || this.numberOfModules == 0) {
      this.errorMessage = true;
      return;
    }

    let training = this.RegisterChild.getTraining();
    training.modules = this.modules;

    console.log(training); // TODO: implementar service
  }
}
