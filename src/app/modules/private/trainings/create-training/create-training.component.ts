import { Component, OnInit, ViewChild } from '@angular/core';
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

  ngOnInit(): void {
  }
  
  public displayCreateModule: boolean = false
  public training!: Training;
  public moduleArray: Module[] = []

  
  onSendTraining(): void {
    this.displayCreateModule = true
  }

  public invokeChildren(): Training {
    this.training = this.RegisterChild.getTraining()
    this.moduleArray.push(this.ModuleChild.getModule())
    this.training.modules = this.moduleArray
    //console.log(this.training)
    return this.training 
  }
}
