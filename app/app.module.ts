import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { routing,
    appRoutingProviders } from './app.routing';

import { AppComponent }             from './app.component';
import { NavbarComponent }          from './components/nabvar/navbar'
import { MainHeaderComponent }      from './components/header/header';
import { MainFooterComponent }      from './components/footer/footer';
import { HomeComponent }            from './components/home/home';
import { AboutComponent }           from './components/about/about';
import {IntroComponent} from "./components/intro/intro";

@NgModule({
    imports:
        [
            BrowserModule,
            FormsModule,
            routing
        ],
    declarations:
        [
            AppComponent,
            NavbarComponent,
            MainHeaderComponent,
            MainFooterComponent,
            HomeComponent,
            AboutComponent,
            IntroComponent
        ],
    providers: [
        appRoutingProviders
    ],
    bootstrap:
        [
        AppComponent
        ]
})
export class AppModule { }
