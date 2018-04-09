import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import { routes } from './app.router';

import { AdvertiseCommercialComponent } from './advertise-commercial/advertise-commercial.component';
import { PaymentProcessor1Component } from './payment-processor1/payment-processor1.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LiveComponent } from './live/live.component';
import { HomeComponent } from './stations-main/socaltelevision/home.component';
import { StationsMainComponent } from './stations-main/stations-main.component';
import { Ktla5Component } from './stations-main/ktla5/ktla5.component';
import { Fox11laComponent } from './stations-main/fox11la/fox11la.component';
import { Fox5sandiegoComponent } from './stations-main/fox5sandiego/fox5sandiego.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentProcessor1Component,
    LiveComponent,
    AdvertiseCommercialComponent,
    AboutComponent,
    HomeComponent,
    StationsMainComponent,
    Ktla5Component,
    Fox11laComponent,
    Fox5sandiegoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'payment-processor', component: PaymentProcessor1Component },
      { path: 'live', component: LiveComponent},
      { path: 'advertise-commercial', component: AdvertiseCommercialComponent},
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