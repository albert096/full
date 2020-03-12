import {Component, OnInit} from '@angular/core'
import {UsersService} from '../shared/services/users.service'
import {User} from '../shared/interfaces'
import {Observable} from 'rxjs/index'



@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
	
	users$: Observable<User[]>

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
	  this.users$ = this.usersService.fetch()
  }

}
