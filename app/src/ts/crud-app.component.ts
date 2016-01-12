import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginComponent} from './login.component';
import {ApiService} from './api.service';
import {DashboardComponent} from './dashboard.component';

@Component({
    selector: 'crud-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ApiService],
    template: `
        <router-outlet></router-outlet> <!-- Display views produced by the router. -->
    `
})
@RouteConfig([ // Configure a router with RouteDefinitions, each mapping a URL path to a component.
    { path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent },
    { path: '/login', name: 'Login', component: LoginComponent }
])
export class CrudAppComponent {}