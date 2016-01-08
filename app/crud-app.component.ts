import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactListComponent} from './contact-list.component';
import {ContactDetailComponent} from './contact-detail.component';
import {ContactNewComponent} from './contact-new.component';
import {ContactEditComponent} from './contact-edit.component';
import {ElasticApiService} from './elastic-api.service';

@Component({
    selector: 'crud-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ElasticApiService],
    template: `
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <!--<span class="mdl-layout-title">Contact List</span>-->

                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>

                    <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
                        <i class="material-icons">more_vert</i>
                    </button>
                    <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
                        <li class="mdl-menu__item">About</li>
                        <li class="mdl-menu__item">Contact</li>
                        <li class="mdl-menu__item">Legal information</li>
                    </ul>
                </div>
            </header>

            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Angular 2 CRUD</span>
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" [routerLink]="['Contacts']">Contact List</a> <!-- Bind clickable HTML to a route. -->
                    <a class="mdl-navigation__link" [routerLink]="['ContactNew']">New Contact</a>
                </nav>
            </div>
            
            <main class="mdl-layout__content">
                <router-outlet class="page-content"></router-outlet> <!-- Display views produced by the router. -->
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
     * @param {ElasticApiService} _apiService - Private ElasticApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _elasticApiService: ElasticApiService) {}
    /**
     * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
     * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    ngOnInit() {
        this._elasticApiService.initElasticIndex();
    }
}