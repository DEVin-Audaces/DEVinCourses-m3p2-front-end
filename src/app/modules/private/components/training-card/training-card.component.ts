import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Training } from 'src/app/interfaces/training';
import { TrainingModalComponent } from '../training-modal/training-modal.component';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {


  @Input() training: Training = {
    id: '',
    name: '',
    summary: '',
    instructor: '',
    duration: 0,
    active: false,
    author: ''
  }

  @Input() isCompleted:Boolean = false;
  @Input() isRegistered:Boolean = false;

  constructor(public dialog: MatDialog) { }

  
  ngOnInit(): void {
  }

  openDialog(training: Training) {
    const dialogRef = this.dialog.open(TrainingModalComponent, {data:{training: training, isRegistered: this.isRegistered}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
