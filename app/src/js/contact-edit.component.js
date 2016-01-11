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
    var ContactEditComponent;
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
            ContactEditComponent = (function () {
                /**
                 * ContactEditComponent Constructor.
                 *
                 * @param {Router} _router - Private Router injected into this component.
                 * @param {ApiService} _apiService - Private ApiService injected into this component.
                 * Note: Underscore convention in Angular 2 signifies a private variable.
                 */
                function ContactEditComponent(_router, _routeParams, _apiService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._apiService = _apiService;
                }
                /**
                 * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
                 * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
                 */
                ContactEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id'); // 'let' keyword allows block scoping for variables.
                    this._apiService.getContact(id).subscribe(function (contact) { return _this.contact = contact; });
                };
                /**
                 * Submit click handler.
                 */
                ContactEditComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this._apiService.updateContact(this.contact).then(function () { return _this._router.navigate(['Contacts']); });
                };
                /**
                 * Cancel click callback.
                 */
                ContactEditComponent.prototype.onCancel = function () {
                    this._router.navigate(['ContactDetail', { id: this.contact.id }]);
                };
                ContactEditComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-edit',
                        providers: [api_service_1.ApiService],
                        template: "\n        <div *ngIf=\"contact\">\n            <div class=\"detail-card mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\n                <div class=\"mdl-card__title\">\n                    <h2 class=\"mdl-card__title-text\">{{contact.firstName}} {{contact.lastName}}</h2>\n                </div>\n\n                <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"mdl-card__supporting-text\">\n                        <div class=\"mdl-textfield mdl-js-textfield\">\n                            <label for=\"firstName\">First Name</label>\n                            <input class=\"mdl-textfield__input\" type=\"text\" [(ngModel)]=\"contact.firstName\" required>\n                        </div>\n\n                        <div class=\"mdl-textfield mdl-js-textfield\">\n                            <label for=\"lastName\">Last Name</label>\n                            <input class=\"mdl-textfield__input\" type=\"text\" [(ngModel)]=\"contact.lastName\" required>\n                        </div>\n                    </div>\n\n                    <div class=\"mdl-card__actions\">\n                        <button class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" type=\"submit\">Submit</button>\n                        <button class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, api_service_1.ApiService])
                ], ContactEditComponent);
                return ContactEditComponent;
            })();
            exports_1("ContactEditComponent", ContactEditComponent);
        }
    }
});
