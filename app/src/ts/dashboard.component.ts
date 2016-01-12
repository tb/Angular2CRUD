import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactListComponent} from './contact-list.component';
import {ContactDetailComponent} from './contact-detail.component';
import {ContactNewComponent} from './contact-new.component';
import {ContactEditComponent} from './contact-edit.component';
import {ApiService} from './api.service';

@Component({
    selector: 'home',
    directives: [ROUTER_DIRECTIVES],
    providers: [ApiService],
    template: `
        <br>

        <nav>
            <button [routerLink]="['Contacts']">Contact List</button> | <!-- Bind clickable HTML to a route. -->
            <button [routerLink]="['ContactNew']">New Contact</button> |
            <button (click)="onLogout()">Logout</button>
            
            <span class="pull-right">
                {{email}} &nbsp;
            </span>
        </nav>

        <br>

        <router-outlet></router-outlet> <!-- Display views produced by the router. -->
    `,
    styles: [`
        .pull-right {
            float: right
        }
    `]
})
@RouteConfig([ // Configure a router with RouteDefinitions, each mapping a URL path to a component.
    { path: '/contacts', name: 'Contacts', component: ContactListComponent },
    { path: '/contact/new', name: 'ContactNew', component: ContactNewComponent },
    { path: '/contact/:id', name: 'ContactDetail', component: ContactDetailComponent },
    { path: '/contact/edit/:id', name: 'ContactEdit', component: ContactEditComponent },
])
export class DashboardComponent implements OnInit {
    public email: string; // Logged in user email.
    
    /**
     * DashboardComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router,
                private _apiService: ApiService) {}
    
    /**
     * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
     * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    ngOnInit() {
        this._apiService.init();
        this.email = this._apiService.getLoggedInAccountEmail();
    }

    /**
     * Logout click callback.
     */
    onLogout() {
        this._apiService.logoutAccount(success => {
            if (success) {
                this._router.navigate(['Login']);
            }
        });
    }
}