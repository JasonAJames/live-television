import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StationsMainComponent } from './stations-main/stations-main.component';
import { Ktla5Component } from './ktla5/ktla5.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { Fox11laComponent } from './fox11la/fox11la.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    StationsMainComponent,
    Ktla5Component,
    HeroFormComponent,
    Fox11laComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
