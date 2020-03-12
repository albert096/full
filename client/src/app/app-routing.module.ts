import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {LoginPageComponent} from './login-page/login-page.component'
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component'
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component'
import {HomeLayoutComponent} from './shared/layouts/home-layout/home-layout.component'
import {RegisterPageComponent} from './register-page/register-page.component'
import {AuthGuard} from './shared/classes/auth.guard'
import {OverviewPageComponent} from './overview-page/overview-page.component'
import {AnalyticsPageComponent} from './analytics-page/analytics-page.component'
import {HistoryPageComponent} from './history-page/history-page.component'
import {OrderPageComponent} from './order-page/order-page.component'
import {OrderCategoriesComponent} from './order-page/order-categories/order-categories.component'
import {OrderPositionsComponent} from './order-page/order-positions/order-positions.component'
import {CategoriesPageComponent} from './categories-page/categories-page.component'
import {CategoriesFormComponent} from './categories-page/categories-form/categories-form.component'
import {UsersPageComponent} from './users-page/users-page.component'
import {UsersFormComponent} from './users-page/users-form/users-form.component'


const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
	{path: '', redirectTo: '/', pathMatch: 'full'}
	]
  },
  
  {
    path: '', component: AuthLayoutComponent, children: [
	  {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
		{path: 'overview', component: OverviewPageComponent},
		{path: 'analytics', component: AnalyticsPageComponent},
        {path: 'history', component: HistoryPageComponent},
        {path: 'order', component: OrderPageComponent, children: [
        {path: '', component: OrderCategoriesComponent},
        {path: ':id', component: OrderPositionsComponent}
        ]},
        {path: 'categories', component: CategoriesPageComponent},
		{path: 'categories/new', component: CategoriesFormComponent},
        {path: 'categories/:id', component: CategoriesFormComponent},
		{path: 'users', component: UsersPageComponent},
		{path: 'users/:new', component: UsersFormComponent},
		{path: 'users/:id', component: UsersFormComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


