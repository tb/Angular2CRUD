import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactListComponent} from './contact-list.component';
import {ContactDetailComponent} from './contact-detail.component';
import {ContactNewComponent} from './contact-new.component';
import {ContactEditComponent} from './contact-edit.component';

@Component({
    selector: 'crud-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <nav>
            <a [routerLink]="['Contacts']">Contacts</a> | <!-- Bind clickable HTML to a route. -->
            <a [routerLink]="['ContactNew']">New Contact</a>
        </nav>
        <br>
        <router-outlet></router-outlet> <!-- Display views produced by the router. -->
    `
})
@RouteConfig([ // Configure a router with RouteDefinitions, each mapping a URL path to a component.
    { path: '/contacts', name: 'Contacts', component: ContactListComponent },
    { path: '/contact/new', name: 'ContactNew', component: ContactNewComponent },
    { path: '/contact/:id', name: 'ContactDetail', component: ContactDetailComponent },
    { path: '/contact/edit/:id', name: 'ContactEdit', component: ContactEditComponent }
])
export class CrudAppComponent { }