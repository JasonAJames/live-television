import { ModuleWithProviders } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LiveComponent } from './live/live.component';
import { HomeComponent } from './stations-main/socaltelevision/home.component';
import { StationsMainComponent } from './stations-main/stations-main.component';
import { Ktla5Component } from './stations-main/ktla5/ktla5.component';
import { Fox5sandiegoComponent } from './stations-main/fox5sandiego/fox5sandiego.component';
import { Fox11laComponent } from './stations-main/fox11la/fox11la.component';



export const router: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'live', component: LiveComponent},
    { path: 'about', component: AboutComponent},
    { path: 'stations-main', component: StationsMainComponent},
    { path: 'ktla5', component: Ktla5Component},
    { path: 'fox11la', component: Fox11laComponent},
    { path: 'fox5sandiego', component: Fox5sandiegoComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: HomeComponent}
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});