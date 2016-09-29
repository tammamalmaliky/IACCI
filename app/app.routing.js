"use strict";
var router_1 = require('@angular/router');
var about_1 = require("./components/about/about");
var home_1 = require("./components/home/home");
var appRoutes = [
    {
        path: 'about',
        component: about_1.AboutComponent,
        data: {
            title: 'about us'
        }
    },
    {
        path: '',
        component: home_1.HomeComponent,
        data: {
            title: 'about us'
        }
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map