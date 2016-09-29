import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {AppComponent} from './app.component'
import {appRoutingProviders} from './app.routing'

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
