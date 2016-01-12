import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {LoginComponent} from './login.component';
import {CreateComponent} from './create.component';
import {LoggedInRouterOutletDirective} from './logged-in-router-outlet.directive';

@Component({
    selector: 'crud-app',
    directives: [LoggedInRouterOutletDirective],
    template: `
        <logged-in-router-outlet></logged-in-router-outlet> <!-- Display views produced by the router. -->
    `
})
@RouteConfig([ // Configure a router with RouteDefinitions, each mapping a URL path to a component.
    { path: '/', name: 'Login', component: LoginComponent },
    { path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/create', name: 'Create', component: CreateComponent }
])
export class CrudAppComponent {}