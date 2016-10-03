// import { Component } from '@angular/core';
// @Component({
//     moduleId: module.id,
//     selector: 'home',
//     templateUrl: 'home.html'
// })
// export class HomeComponent { }

import { Component } from '@angular/core';
import {MainHeaderComponent} from "../header/header";
import {HomeComponent} from "../home/home";
import {IntroComponent} from "../intro/intro";
import {MainFooterComponent} from "../footer/footer";
import {NavbarComponent} from "../nabvar/navbar";
@Component({
    selector: 'home',
    template: '<navbar></navbar><main-header></main-header><intro></intro>',
    directives: [NavbarComponent, MainHeaderComponent, IntroComponent]
})
export class HomeComponent { }