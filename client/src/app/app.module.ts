import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import {AppComponent} from './app.component'
import {LoginPageComponent} from './login-page/login-page.component'
import {AppRoutingModule} from './app-routing.module'
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component'
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component'
import {RegisterPageComponent} from './register-page/register-page.component'
import {HomeLayoutComponent} from './shared/layouts/home-layout/home-layout.component'
import {OverviewPageComponent} from './overview-page/overview-page.component'
import {TokenInterceptor} from './shared/classes/token.interceptor'
import {AnalyticsPageComponent} from './analytics-page/analytics-page.component'
import {HistoryPageComponent} from './history-page/history-page.component'
import {OrderPageComponent} from './order-page/order-page.component'
import {CategoriesPageComponent} from './categories-page/categories-page.component'
import {UsersPageComponent} from './users-page/users-page.component'
import {LoaderComponent} from './shared/components/loader/loader.component'
import {CategoriesFormComponent} from './categories-page/categories-form/categories-form.component'
import {PositionsFormComponent} from './categories-page/categories-form/positions-form/positions-form.component'
import {UsersFormComponent} from './users-page/users-form/users-form.component'
import {OrderCategoriesComponent} from './order-page/order-categories/order-categories.component'
import {OrderPositionsComponent} from './order-page/order-positions/order-positions.component'





@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    HomeLayoutComponent,
    OverviewPageComponent,
    AnalyticsPageComponent,
    HistoryPageComponent,
    OrderPageComponent,
    CategoriesPageComponent,
	UsersPageComponent,
	LoaderComponent,
    CategoriesFormComponent,
    PositionsFormComponent,
    UsersFormComponent,
    OrderCategoriesComponent,
    OrderPositionsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [
  {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
