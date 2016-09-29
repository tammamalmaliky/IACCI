import { Component } from '@angular/core';
import { NavbarComponent } from './components/nabvar/navbar';
import { MainHeaderComponent} from "./components/header/header";
import { HomeComponent } from './components/home/home';
import {MainFooterComponent} from "./components/footer/footer";
@Component({
    selector: 'my-app',
    template: '<navbar></navbar><router-outlet></router-outlet><main-footer></main-footer>',
    directives: [NavbarComponent, MainHeaderComponent, HomeComponent, MainFooterComponent]
})
export class AppComponent { }
