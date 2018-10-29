import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
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
import { LiveTrafficCamsComponent } from './live-traffic-cams/live-traffic-cams.component';
import { Cam10fwyWestOfMonteVistaAveComponent } from './live-traffic-cams/cam-10fwy-west-of-monte-vista-ave/cam-10fwy-west-of-monte-vista-ave.component';
import { SigalertComponent } from './live-traffic-cams/sigalert/sigalert.component';
import { TexasComponent } from './stations-main/texas/texas.component';
import { Fox4TexasComponent } from './stations-main/texas/fox-4-texas/fox-4-texas.component';
import { News3AbcPalmspringsComponent } from './stations-main/california/news-3-abc-palmsprings/news-3-abc-palmsprings.component';
import { Live2Component } from './live-2/live-2.component';
import { HoroscopesComponent } from './extras/horoscopes/horoscopes.component';
import { StockMarketComponent } from './extras/stock-market/stock-market.component';
import { IndependancedayComponent } from './independanceday/independanceday.component';
import { IcecreamComponent } from './national-day/icecream/icecream.component';
import { VansusopenofsurfingLiveComponent } from './vansusopenofsurfing-live/vansusopenofsurfing-live.component';
import { RollerCoasterComponent } from './national-day/roller-coaster/roller-coaster.component';
import { DogDayComponent } from './national-day/dog-day/dog-day.component';
import { LaCountyFairComponent } from './la-county-fair/la-county-fair.component';
import { NewsComponent } from './news/news.component';
import { CbsComponent } from './usa/cbs/cbs.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { HomeVideo0Component } from './home-video/home-video-0/home-video-0.component';
import { HomeVideo1Component } from './home-video/home-video-1/home-video-1.component';
import { HomeVideo2Component } from './home-video/home-video-2/home-video-2.component';
import { HomeVideo3Component } from './home-video/home-video-3/home-video-3.component';
import { HomeVideo4Component } from './home-video/home-video-4/home-video-4.component';
import { HomeVideo5Component } from './home-video/home-video-5/home-video-5.component';
import { Ad1Component } from './home-video/ad/ad1/ad1.component';
import { CoffeeDayComponent } from './national-day/coffee-day/coffee-day.component';
import { SocaltelevisionComponent } from './feeds/socaltelevision/socaltelevision.component';



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
    BakersfieldNews23abcComponent,
    Abc30BakersfieldComponent,
    Boston25NewsComponent,
    MassachusettsComponent,
    Fox10phoenixComponent,
    ArizonaComponent,
    ColoradoComponent,
    Colorado9newsComponent,
    Nbc11newsComponent,
    ContactusComponent,
    LiveTrafficCamsComponent,
    Cam10fwyWestOfMonteVistaAveComponent,
    SigalertComponent,
    TexasComponent,
    Fox4TexasComponent,
    News3AbcPalmspringsComponent,
    Live2Component,
    HoroscopesComponent,
    StockMarketComponent,
    IndependancedayComponent,
    IcecreamComponent,
    VansusopenofsurfingLiveComponent,
    RollerCoasterComponent,
    DogDayComponent,
    LaCountyFairComponent,
    NewsComponent,
    CbsComponent,
    HomeVideoComponent,
    HomeVideo0Component,
    HomeVideo1Component,
    HomeVideo2Component,
    HomeVideo3Component,
    HomeVideo4Component,
    HomeVideo5Component,
    Ad1Component,
    CoffeeDayComponent,
    SocaltelevisionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'usa/cbs', component: CbsComponent},

      {path: 'home-video', component: HomeVideoComponent},
      {path: 'home-video-0', component: HomeVideo0Component},
      {path: 'home-video-1', component: HomeVideo1Component},
      {path: 'home-video-2', component: HomeVideo2Component},
      {path: 'home-video-3', component: HomeVideo3Component},
      {path: 'home-video-4', component: HomeVideo4Component},
      {path: 'home-video-5', component: HomeVideo5Component},

      {path: 'ad1', component: Ad1Component},

      { path: 'news', component: NewsComponent},
      { path: 'live', component: LiveComponent},
      { path: 'live-2', component: Live2Component},
      { path: 'la-county-fair', component: LaCountyFairComponent},
      { path: 'independence-day', component: IndependancedayComponent},
      { path: 'extras/daily-horoscope', component: HoroscopesComponent},
      { path: 'extras/stock-market', component: StockMarketComponent},
      { path: 'local-reviews', component: LocalReviewsComponent},
      { path: 'advertise-commercial', component: AdvertiseCommercialComponent},
      { path: 'about', component: AboutComponent},
      { path: 'contact', component: ContactusComponent},
      { path: 'live-traffic-cams', component: LiveTrafficCamsComponent},
      { path: 'live-traffic/sigalert', component: SigalertComponent},
      { path: 'live-traffic-cam/cam-10fwy_West-MonteVistaAve', component: Cam10fwyWestOfMonteVistaAveComponent},
      { path: 'stations-main', component: StationsMainComponent},
      { path: 'arizona-tv-stations', component: ArizonaComponent},
      { path: 'fox10-phoenix', component: Fox10phoenixComponent},
      
      { path: 'national-day/dog-day', component: DogDayComponent},
      { path: 'national-day/icecream', component: IcecreamComponent},
      { path: 'national-day/rollercoaster', component: RollerCoasterComponent},
      { path: 'national-day/coffee-day', component: CoffeeDayComponent},
      { path: 'usopenofsurfing', component: VansusopenofsurfingLiveComponent},
      { path: 'california-tv-stations', component: CaliforniaComponent },
      { path: 'ktla5', component: Ktla5Component},
      { path: 'fox11la', component: Fox11laComponent},
      { path: 'fox5sandiego', component: Fox5sandiegoComponent},
      { path: 'kron4', component: Kron4Component},
      { path: 'bakersfield-news-23abc', component: BakersfieldNews23abcComponent},
      { path: 'abc30-bakersfield', component: Abc30BakersfieldComponent},
      { path: 'news-3-abc', component: News3AbcPalmspringsComponent},

      { path: 'texas-tv-stations', component: TexasComponent },
      { path: 'fow-4-texas', component: Fox4TexasComponent},

      { path: 'colorado-tv-stations', component: ColoradoComponent },
      { path: 'colorado-9news', component: Colorado9newsComponent },
      { path: 'nbc11news', component: Nbc11newsComponent },

      { path: 'massachusetts-tv-stations', component: MassachusettsComponent },
      { path: 'boston-25-news', component: Boston25NewsComponent},

      { path: 'hawaii-tv-stations', component: HawaiiComponent},
      { path: 'hawaii-news-now', component: HawaiiNewsNowComponent },
      { path: 'kitv4-hawaii', component: Kitv4hawaiiComponent},
      { path: 'khon2-hawaii', component: Khon2hawaiiComponent},

      { path: '', redirectTo: '/home-video-0', pathMatch: 'full'},
      { path: '**', component: HomeVideo0Component }
    ], {useHash : true}),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }