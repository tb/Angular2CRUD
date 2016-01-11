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
    var ContactDetailComponent;
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
            ContactDetailComponent = (function () {
                /**
                 * ContactDetailComponent Constructor.
                 *
                 * @param {Router} _router - Private Router injected into this component.
                 * @param {RouteParams} _routeParams - Private RouteParams injected into this component.
                 * @param {ApiService} _apiService - Private ApiService injected into this component.
                 * Note: Underscore convention in Angular 2 signifies a private variable.
                 */
                function ContactDetailComponent(_router, _routeParams, _apiService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._apiService = _apiService;
                }
                /**
                 * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
                 * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
                 */
                ContactDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id'); // 'let' keyword allows block scoping for variables.
                    this._apiService.getContact(id).subscribe(function (contact) { return _this.contact = contact; });
                };
                /**
                 * Edit contact click callback.
                 */
                ContactDetailComponent.prototype.onEdit = function () {
                    this._router.navigate(['ContactEdit', { id: this.contact.id }]);
                };
                /**
                 * Delete contact click callback.
                 */
                ContactDetailComponent.prototype.onDelete = function () {
                    var _this = this;
                    this._apiService.deleteContact(this.contact.id).then(function () { return _this._router.navigate(['Contacts']); });
                };
                ContactDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-detail',
                        providers: [api_service_1.ApiService],
                        template: "\n        <div *ngIf=\"contact\">\n            <div class=\"detail-card mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\n                <div class=\"mdl-card__title\">\n                    <h2 class=\"mdl-card__title-text\">{{contact.firstName}} {{contact.lastName}}</h2>\n                </div>\n\n                <div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">\n                    Phone Number: (555)555-5555\n                    <br>\n                    <br>\n                    Email: example@example.com\n                </div>\n\n                <div class=\"mdl-card__actions mdl-card--border\">\n                    <button class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" type=\"button\" (click)=\"onEdit()\">Edit</button>\n                    <button class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" type=\"button\" (click)=\"onDelete()\">Delete</button>\n                </div>\n            </div>\n        </div>\n    ",
                        styles: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, api_service_1.ApiService])
                ], ContactDetailComponent);
                return ContactDetailComponent;
            })();
            exports_1("ContactDetailComponent", ContactDetailComponent);
        }
    }
});
