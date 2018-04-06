import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './stations-main/socaltelevision/home.component';
import { StationsMainComponent } from './stations-main/stations-main.component';
import { Ktla5Component } from './stations-main/ktla5/ktla5.component';
import { Fox11laComponent } from './stations-main/fox11la/fox11la.component';
import { LiveComponent } from './live/live.component';
import { Fox5sandiegoComponent } from './stations-main/fox5sandiego/fox5sandiego.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveComponent,
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
      { path: 'live', component: LiveComponent},
      { path: 'about', component: AboutComponent},
      { path: 'stations-main', component: StationsMainComponent},
      { path: 'ktla5', component: Ktla5Component},
      { path: 'fox11la', component: Fox11laComponent},
      { path: 'fox5sandiego', component: Fox5sandiegoComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', component: HomeComponent}
    ], {useHash : true}),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
