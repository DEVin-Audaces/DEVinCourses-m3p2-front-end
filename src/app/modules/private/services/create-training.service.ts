import { Training } from './../../../interfaces/training';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Module } from 'src/app/interfaces/module';

@Injectable({
  providedIn: 'root'
})
export class CreateTrainingService {

  private module: Subject<Module> = new Subject<Module>();
  private training: Subject<Training> = new Subject<Training>();

  constructor() { }

  public getModule(): Observable<Module> {
    return this.module.asObservable();
  }

  public setModule(module: Module): void {
    this.module.next(module);
  }

  public getTraining(): Observable<Training> {
    return this.training.asObservable();
  }

  public setTraining(training: Training): void {
    this.training.next(training);
  }
}
