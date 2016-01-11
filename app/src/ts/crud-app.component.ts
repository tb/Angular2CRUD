import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactListComponent} from './contact-list.component';
import {ContactDetailComponent} from './contact-detail.component';
import {ContactNewComponent} from './contact-new.component';
import {ContactEditComponent} from './contact-edit.component';
import {ApiService} from './api.service';

@Component({
    selector: 'crud-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ApiService],
    template: `
        <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
            <header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">Angular 2 - Sample CRUD Application</span>

                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>

                    <!-- More info button. -->
                    <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
                        <i class="material-icons">more_vert</i>
                    </button>
                    <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
                        <li class="mdl-menu__item">About</li>
                        <li class="mdl-menu__item">Legal information</li>
                    </ul>
                </div>
            </header>

            <div class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
                <header class="demo-drawer-header">
                    <img src="http://www.getmdl.io/templates/dashboard/images/user.jpg" class="demo-avatar">
                    <div class="demo-avatar-dropdown">
                        <span>hello@example.com</span>
                        
                        <div class="mdl-layout-spacer"></div>
                        
                        <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                            <i class="material-icons" role="presentation">arrow_drop_down</i>
                            <span class="visuallyhidden">Accounts</span>
                        </button>
                        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
                            <li class="mdl-menu__item">hello@example.com</li>
                            <li class="mdl-menu__item">info@example.com</li>
                            <li class="mdl-menu__item"><i class="material-icons">add</i>Add another account...</li>
                        </ul>
                    </div>
                </header>
                <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
                    <a class="mdl-navigation__link" [routerLink]="['Contacts']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Contact List</a> <!-- Bind clickable HTML to a route. -->
                    <a class="mdl-navigation__link" [routerLink]="['ContactNew']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>New Contact</a>
                </nav>
            </div>
            
            <main class="mdl-layout__content mdl-color--grey-100">
                <router-outlet class="mdl-grid demo-content"></router-outlet> <!-- Display views produced by the router. -->
            </main>
        </div>
    `
})
@RouteConfig([ // Configure a router with RouteDefinitions, each mapping a URL path to a component.
    { path: '/contacts', name: 'Contacts', component: ContactListComponent },
    { path: '/contact/new', name: 'ContactNew', component: ContactNewComponent },
    { path: '/contact/:id', name: 'ContactDetail', component: ContactDetailComponent },
    { path: '/contact/edit/:id', name: 'ContactEdit', component: ContactEditComponent }
])
export class CrudAppComponent implements OnInit {
    
    /**
     * CrudAppComponent Constructor.
     *
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _apiService: ApiService) {}
    
    /**
     * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
     * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    ngOnInit() {
        this._apiService.init();
    }
}
