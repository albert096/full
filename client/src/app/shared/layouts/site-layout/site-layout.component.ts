import {AfterViewInit, Component, OnInit, ElementRef, ViewChild} from '@angular/core'
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'

import {UsersService} from '../../services/users.service'
import {User} from '../../interfaces'
import {Observable} from 'rxjs/index'
import {MaterialService} from '../../classes/material.service'


@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit, AfterViewInit {
	
	

  @ViewChild('floating') floatingRef: ElementRef

  links = [
    {url: '/overview', name: 'Обзор'},
    {url: '/analytics', name: 'Аналитика'},
    {url: '/history', name: 'История'},
    {url: '/order', name: 'Добавить заказ'},
    {url: '/categories', name: 'Ассортимент'},
	{url: '/users', name: 'Пользователи'}
  ]
  
  
  
  

  constructor(private auth: AuthService,
              private router: Router, 
			  private usersService: UsersService) {
  }
  
  
  
  ngOnInit(): void {
	
  }
  
  

  ngAfterViewInit() {
    MaterialService.initializeFloatingButton(this.floatingRef)
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
