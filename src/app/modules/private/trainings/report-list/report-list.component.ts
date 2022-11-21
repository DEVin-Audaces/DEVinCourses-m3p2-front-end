import { Observable } from 'rxjs';
import { TrainingsService } from '../../services/trainings.service';
import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/interfaces/report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

  public reports!: Observable<Report[]>;

  constructor(private _trainingsService: TrainingsService) { }

  ngOnInit(): void {
    this.reports = this._trainingsService.getReport();
  }

}
