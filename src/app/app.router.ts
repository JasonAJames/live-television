import { ModuleWithProviders } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';

import { AdvertiseCommercialComponent } from './advertise/advertise-commercial/advertise-commercial.component';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LocalReviewsComponent } from './local-reviews/local-reviews.component';
import { LiveComponent } from './stations-main/live/live.component';
import { HomeComponent } from './stations-main/socaltelevision/home.component';
import { CaliforniaComponent } from './stations-main/california/california.component';
import { HawaiiComponent } from './stations-main/hawaii/hawaii.component';
import { StationsMainComponent } from './stations-main/stations-main.component';
import { Ktla5Component } from './stations-main/california/ktla5/ktla5.component';
import { Fox11laComponent } from './stations-main/california/fox11la/fox11la.component';
import { Fox5sandiegoComponent } from './stations-main/california/fox5sandiego/fox5sandiego.component';
import { HawaiiNewsNowComponent } from './stations-main/hawaii/hawaiinewsnow/hawaii-news-now.component';
import { Kitv4hawaiiComponent } from './stations-main/hawaii/kitv4hawaii/kitv4hawaii.component';
import { Khon2hawaiiComponent } from './stations-main/hawaii/khon2hawaii/khon2hawaii.component';
import { Kron4Component } from './stations-main/california/kron4/kron4.component';
import { BakersfieldNews23abcComponent } from './stations-main/california/bakersfield-news-23abc/bakersfield-news-23abc.component';
import { Abc30BakersfieldComponent } from './stations-main/california/abc30-bakersfield/abc30-bakersfield.component';
import { Boston25NewsComponent } from './stations-main/massachusetts/boston-25-news/boston-25-news.component';
import { MassachusettsComponent } from './stations-main/massachusetts/massachusetts.component';
import { Fox10phoenixComponent } from './stations-main/arizona/fox10phoenix/fox10phoenix.component';
import { ArizonaComponent } from './stations-main/arizona/arizona.component';



export const router: Routes = [
    { path: 'home', component: HomeComponent},
      { path: 'live', component: LiveComponent},
      { path: 'advertise-commercial', component: AdvertiseCommercialComponent},
      { path: 'about', component: AboutComponent},
      { path: 'stations-main', component: StationsMainComponent},
      { path: 'ktla5', component: Ktla5Component},
      { path: 'fox11la', component: Fox11laComponent},
      { path: 'fox5sandiego', component: Fox5sandiegoComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', component: HomeComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});