import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StationsMainComponent } from './stations-main/stations-main.component';
import { Ktla5Component } from './ktla5/ktla5.component';



export const router: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'stations-main', component: StationsMainComponent},
    { path: 'ktla5', component: Ktla5Component},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: HomeComponent}
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });