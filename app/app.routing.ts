import { Routes, RouterModule }   from '@angular/router';
import {AboutComponent} from "./components/about/about";
import {HomeComponent} from "./components/home/home";

const appRoutes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        data: {
            title: 'about us'
        }
    },
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'about us'
        }
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);