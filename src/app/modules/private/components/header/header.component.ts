import { Users } from './../../../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { UsersService } from 'src/app/modules/public/services/user-service/user-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public users!:any
  


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUserLogin().subscribe(users => 
      this.users = {
        name : users?.name,
        image : `data:image/jpg;base64,${users?.image}`,
        id: users?.id
      }

      )
  }



}
