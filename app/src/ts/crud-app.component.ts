import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {LoginComponent} from './login.component';
import {CreateComponent} from './create.component';
import {LoggedInOutletDirective} from './logged-in-outlet.directive';

@Component({
    selector: 'crud-app',
    directives: [LoggedInOutletDirective],
    template: `
        <logged-in-outlet></logged-in-outlet> <!-- Display views produced by the router. -->
    `
})
@RouteConfig([ // Configure a router with RouteDefinitions, each mapping a URL path to a component.
    { path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/create', name: 'Create', component: CreateComponent }
])
export class CrudAppComponent {}