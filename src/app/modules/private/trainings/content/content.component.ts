import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public duration: string = '5:00';
   
  public title: string = 'Introdução ao JavaScript';

  public summary: string = 'Este curso prepara você para aprender JS.';

  public instructor: string = 'Jamil';

  constructor() { }

  ngOnInit(): void {
  }

}
