System.register(['angular2/core', 'angular2/router', './contact-list.component', './contact-detail.component', './contact-new.component', './contact-edit.component', './api.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, contact_list_component_1, contact_detail_component_1, contact_new_component_1, contact_edit_component_1, api_service_1;
    var CrudAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (contact_detail_component_1_1) {
                contact_detail_component_1 = contact_detail_component_1_1;
            },
            function (contact_new_component_1_1) {
                contact_new_component_1 = contact_new_component_1_1;
            },
            function (contact_edit_component_1_1) {
                contact_edit_component_1 = contact_edit_component_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            CrudAppComponent = (function () {
                /**
                 * CrudAppComponent Constructor.
                 *
                 * @param {ApiService} _apiService - Private ApiService injected into this component.
                 * Note: Underscore convention in Angular 2 signifies a private variable.
                 */
                function CrudAppComponent(_apiService) {
                    this._apiService = _apiService;
                }
                /**
                 * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
                 * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
                 */
                CrudAppComponent.prototype.ngOnInit = function () {
                    this._apiService.init();
                };
                CrudAppComponent = __decorate([
                    core_1.Component({
                        selector: 'crud-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [api_service_1.ApiService],
                        template: "\n        <div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n            <header class=\"demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600\">\n                <div class=\"mdl-layout__header-row\">\n                    <!-- Title -->\n                    <span class=\"mdl-layout-title\">Angular 2 - Sample CRUD Application</span>\n\n                    <!-- Add spacer, to align navigation to the right -->\n                    <div class=\"mdl-layout-spacer\"></div>\n\n                    <!-- More info button. -->\n                    <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"hdrbtn\">\n                        <i class=\"material-icons\">more_vert</i>\n                    </button>\n                    <ul class=\"mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right\" for=\"hdrbtn\">\n                        <li class=\"mdl-menu__item\">About</li>\n                        <li class=\"mdl-menu__item\">Legal information</li>\n                    </ul>\n                </div>\n            </header>\n\n            <div class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\n                <header class=\"demo-drawer-header\">\n                    <img src=\"http://www.getmdl.io/templates/dashboard/images/user.jpg\" class=\"demo-avatar\">\n                    <div class=\"demo-avatar-dropdown\">\n                        <span>hello@example.com</span>\n                        \n                        <div class=\"mdl-layout-spacer\"></div>\n                        \n                        <button id=\"accbtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\n                            <i class=\"material-icons\" role=\"presentation\">arrow_drop_down</i>\n                            <span class=\"visuallyhidden\">Accounts</span>\n                        </button>\n                        <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" for=\"accbtn\">\n                            <li class=\"mdl-menu__item\">hello@example.com</li>\n                            <li class=\"mdl-menu__item\">info@example.com</li>\n                            <li class=\"mdl-menu__item\"><i class=\"material-icons\">add</i>Add another account...</li>\n                        </ul>\n                    </div>\n                </header>\n                <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n                    <a class=\"mdl-navigation__link\" [routerLink]=\"['Contacts']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">people</i>Contact List</a> <!-- Bind clickable HTML to a route. -->\n                    <a class=\"mdl-navigation__link\" [routerLink]=\"['ContactNew']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">flag</i>New Contact</a>\n                </nav>\n            </div>\n            \n            <main class=\"mdl-layout__content mdl-color--grey-100\">\n                <router-outlet class=\"mdl-grid demo-content\"></router-outlet> <!-- Display views produced by the router. -->\n            </main>\n        </div>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent },
                        { path: '/contact/new', name: 'ContactNew', component: contact_new_component_1.ContactNewComponent },
                        { path: '/contact/:id', name: 'ContactDetail', component: contact_detail_component_1.ContactDetailComponent },
                        { path: '/contact/edit/:id', name: 'ContactEdit', component: contact_edit_component_1.ContactEditComponent }
                    ]), 
                    __metadata('design:paramtypes', [api_service_1.ApiService])
                ], CrudAppComponent);
                return CrudAppComponent;
            })();
            exports_1("CrudAppComponent", CrudAppComponent);
        }
    }
});
