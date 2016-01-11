System.register(['angular2/core', 'angular2/router', './api.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, api_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                /**
                 * ContactListComponent Constructor.
                 *
                 * @param {Router} _router - Private Router injected into this component.
                 * @param {ApiService} _apiService - Private ApiService injected into this component.
                 * Note: Underscore convention in Angular 2 signifies a private variable.
                 */
                function ContactListComponent(_router, _apiService) {
                    this._router = _router;
                    this._apiService = _apiService;
                }
                /**
                 * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
                 * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
                 */
                ContactListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._apiService.getContacts().subscribe(function (contacts) { return _this.contacts = contacts; });
                };
                /**
                 * Callback for clicking on a contact.
                 */
                ContactListComponent.prototype.onSelect = function (contact) {
                    this._router.navigate(['ContactDetail', { id: contact.id }]);
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        providers: [api_service_1.ApiService],
                        template: "\n        <table class=\"mdl-data-table mdl-js-data-table mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid\">\n            <tr>\n                <th>Id</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Phone Number</th>\n                <th>Email</th>\n            </tr>\n            <tr *ngFor=\"#contact of contacts\" (click)=\"onSelect(contact)\">\n                <td>{{contact.id}}</td>\n                <td>{{contact.firstName}}</td>\n                <td>{{contact.lastName}}</td>\n                <td>(555)555-5555</td>\n                <td>example@example.com</td>\n            </tr>\n        </table>\n    ",
                        styles: ["\n        tr {\n            cursor: pointer;\n        }\n\n        th {\n            text-align:left;\n        }\n\n        td {\n            text-align:left;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, api_service_1.ApiService])
                ], ContactListComponent);
                return ContactListComponent;
            })();
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});
