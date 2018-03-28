import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StationsMainComponent } from './stations-main/stations-main.component';
import { Ktla5Component } from './ktla5/ktla5.component';
import { Fox11laComponent } from './fox11la/fox11la.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    StationsMainComponent,
    Ktla5Component,
    Fox11laComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'stations-main', component: StationsMainComponent},
      { path: 'ktla5', component: Ktla5Component},
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', component: HomeComponent}
    ], {useHash : true}),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
