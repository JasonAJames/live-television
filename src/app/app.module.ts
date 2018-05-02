import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import { routes } from './app.router';

import { AdvertiseCommercialComponent } from './advertise-commercial/advertise-commercial.component';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LocalReviewsComponent } from './local-reviews/local-reviews.component';
import { LiveComponent } from './live/live.component';
import { HomeComponent } from './stations-main/socaltelevision/home.component';
import { CaliforniaComponent } from './stations-main/california/california.component';
import { HawaiiComponent } from './stations-main/hawaii/hawaii.component';
import { StationsMainComponent } from './stations-main/stations-main.component';
import { Ktla5Component } from './stations-main/ktla5/ktla5.component';
import { Fox11laComponent } from './stations-main/fox11la/fox11la.component';
import { Fox5sandiegoComponent } from './stations-main/fox5sandiego/fox5sandiego.component';
import { HawaiiNewsNowComponent } from './stations-main/hawaiinewsnow/hawaii-news-now.component';
import { Kitv4hawaiiComponent } from './stations-main/kitv4hawaii/kitv4hawaii.component';
import { Khon2hawaiiComponent } from './stations-main/khon2hawaii/khon2hawaii.component';
import { Kron4Component } from './stations-main/kron4/kron4.component';
import { LiveHighSpeedPursuitFeedComponent } from './stations-main/live-high-speed-pursuit-feed/live-high-speed-pursuit-feed.component';
import { BakersfieldNews23abcComponent } from './stations-main/bakersfield-news-23abc/bakersfield-news-23abc.component';
import { Abc30BakersfieldComponent } from './stations-main/abc30-bakersfield/abc30-bakersfield.component';


@NgModule({
  declarations: [
    AppComponent,
    LocalReviewsComponent,
    LiveComponent,
    AdvertiseCommercialComponent,
    AboutComponent,
    HomeComponent,
    CaliforniaComponent,
    HawaiiComponent,
    StationsMainComponent,
    Ktla5Component,
    Fox11laComponent,
    Fox5sandiegoComponent,
    HawaiiNewsNowComponent,
    Kitv4hawaiiComponent,
    Khon2hawaiiComponent,
    Kron4Component,
    LiveHighSpeedPursuitFeedComponent,
    BakersfieldNews23abcComponent,
    Abc30BakersfieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'live', component: LiveComponent},
      { path: 'live-high-speed-pursuit', component: LiveHighSpeedPursuitFeedComponent},
      { path: 'local-reviews', component: LocalReviewsComponent},
      { path: 'advertise-commercial', component: AdvertiseCommercialComponent},
      { path: 'about', component: AboutComponent},
      { path: 'california-tv-stations', component: CaliforniaComponent },
      { path: 'hawaii-tv-stations', component: HawaiiComponent},
      { path: 'stations-main', component: StationsMainComponent},
      { path: 'ktla5', component: Ktla5Component},
      { path: 'fox11la', component: Fox11laComponent},
      { path: 'fox5sandiego', component: Fox5sandiegoComponent},
      { path: 'hawaii-news-now', component: HawaiiNewsNowComponent },
      { path: 'kitv4-hawaii', component: Kitv4hawaiiComponent},
      { path: 'khon2-hawaii', component: Khon2hawaiiComponent},
      { path: 'kron4', component: Kron4Component},
      { path: 'bakersfield-news-23abc', component: BakersfieldNews23abcComponent},
      { path: 'abc30-bakersfield', component: Abc30BakersfieldComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', component: HomeComponent}
    ], {useHash : true}),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }