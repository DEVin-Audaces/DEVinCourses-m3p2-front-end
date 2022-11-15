import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

  mockCursos: Array<any>;

  constructor() { 

    this.mockCursos = [
      {
        name: "Curso 1",
        duration: 8,
        finished_students: 87,
        active: true
      },
      {
        name: "Curso 2",
        duration: 12,
        finished_students: 413,
        active: false
      },
      {
        name: "Curso 3",
        duration: 9,
        finished_students: 312,
        active: true
      },
      {
        name: "Curso 4",
        duration: 16,
        finished_students: 642,
        active: false
      },
      {
        name: "Curso 5",
        duration: 12,
        finished_students: 127,
        active: false
      }
];
 
}

  ngOnInit(): void {
   
  }

}
