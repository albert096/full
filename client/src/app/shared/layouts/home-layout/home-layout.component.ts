import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core'
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import {MaterialService} from '../../classes/material.service'

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements AfterViewInit {

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
              private router: Router) {
  }
  
  ngOnInit(): void {
	
  }

  ngAfterViewInit() {
    MaterialService.initializeFloatingButton(this.floatingRef)
  }

  

}


