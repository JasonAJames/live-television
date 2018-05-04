import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import { routes } from './app.router';

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
import { LiveHighSpeedPursuitFeedComponent } from './stations-main/live-high-speed-pursuit-feed/live-high-speed-pursuit-feed.component';
import { BakersfieldNews23abcComponent } from './stations-main/california/bakersfield-news-23abc/bakersfield-news-23abc.component';
import { Abc30BakersfieldComponent } from './stations-main/california/abc30-bakersfield/abc30-bakersfield.component';
import { Boston25NewsComponent } from './stations-main/massachusetts/boston-25-news/boston-25-news.component';
import { MassachusettsComponent } from './stations-main/massachusetts/massachusetts.component';
import { Fox10phoenixComponent } from './stations-main/arizona/fox10phoenix/fox10phoenix.component';
import { ArizonaComponent } from './stations-main/arizona/arizona.component';
import { ColoradoComponent } from './stations-main/colorado/colorado.component';
import { Colorado9newsComponent } from './stations-main/colorado/colorado-9news/colorado-9news.component';
import { Nbc11newsComponent } from './stations-main/colorado/nbc11news/nbc11news.component';
import { ContactusComponent } from './contactus/contactus.component';



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
    Abc30BakersfieldComponent,
    Boston25NewsComponent,
    MassachusettsComponent,
    Fox10phoenixComponent,
    ArizonaComponent,
    ColoradoComponent,
    Colorado9newsComponent,
    Nbc11newsComponent,
    ContactusComponent

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
      { path: 'contact', component: ContactusComponent},
      { path: 'stations-main', component: StationsMainComponent},

      { path: 'arizona-tv-stations', component: ArizonaComponent},
      { path: 'fox10-phoenix', component: Fox10phoenixComponent},

      { path: 'california-tv-stations', component: CaliforniaComponent },
      { path: 'ktla5', component: Ktla5Component},
      { path: 'fox11la', component: Fox11laComponent},
      { path: 'fox5sandiego', component: Fox5sandiegoComponent},
      { path: 'kron4', component: Kron4Component},
      { path: 'bakersfield-news-23abc', component: BakersfieldNews23abcComponent},
      { path: 'abc30-bakersfield', component: Abc30BakersfieldComponent},

      { path: 'colorado-tv-stations', component: ColoradoComponent },
      { path: 'colorado-9news', component: Colorado9newsComponent },
      { path: 'nbc11news', component: Nbc11newsComponent },

      { path: 'massachusetts-tv-stations', component: MassachusettsComponent },
      { path: 'boston-25-news', component: Boston25NewsComponent},

      { path: 'hawaii-tv-stations', component: HawaiiComponent},
      { path: 'hawaii-news-now', component: HawaiiNewsNowComponent },
      { path: 'kitv4-hawaii', component: Kitv4hawaiiComponent},
      { path: 'khon2-hawaii', component: Khon2hawaiiComponent},

      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', component: HomeComponent}
    ], {useHash : true}),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }