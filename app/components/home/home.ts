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
@Component({
    selector: 'home',
    template: '<main-header></main-header><intro></intro>',
    directives: [MainHeaderComponent, HomeComponent, IntroComponent]
})
export class HomeComponent { }