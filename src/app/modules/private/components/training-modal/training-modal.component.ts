import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Training } from 'src/app/interfaces/training';


@Component({
  selector: 'app-training-modal',
  templateUrl: './training-modal.component.html',
  styleUrls: ['./training-modal.component.scss']
})
export class TrainingModalComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  training:Training = this.data.training;

  isRegistered:boolean = this.data.isRegistered;

  ngOnInit(): void {
    console.log(this.training);
    console.log(this.isRegistered);    
  }

}

