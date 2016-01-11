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
    var ContactNewComponent;
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
            ContactNewComponent = (function () {
                /**
                 * ContactNewComponent Constructor.
                 *
                 * @param {Router} _router - Private Router injected into this component.
                 * @param {ApiService} _apiService - Private ApiService injected into this component.
                 * Note: Underscore convention in Angular 2 signifies a private variable.
                 */
                function ContactNewComponent(_router, _apiService) {
                    this._router = _router;
                    this._apiService = _apiService;
                }
                /**
                 * Submit click handler.
                 */
                ContactNewComponent.prototype.onSubmit = function (contact) {
                    var _this = this;
                    this._apiService.createContact(contact).then(function () { return _this._router.navigate(['Contacts']); });
                };
                /**
                 * Cancel click handler.
                 */
                ContactNewComponent.prototype.onCancel = function () {
                    this._router.navigate(['Contacts']);
                };
                ContactNewComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-new',
                        providers: [api_service_1.ApiService],
                        template: "\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\" class=\"demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid\">\n            <div class=\"mdl-card__supporting-text\">\n                <div class=\"mdl-textfield mdl-js-textfield\">\n                    <label for=\"firstName\">First Name</label>\n                    <input class=\"mdl-textfield__input\" type=\"text\" ngControl=\"firstName\" required>\n                </div>\n\n                <div class=\"mdl-textfield mdl-js-textfield\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input class=\"mdl-textfield__input\" type=\"text\" ngControl=\"lastName\" required>\n                </div>\n            </div>\n\n            <div class=\"mdl-card__actions mdl-card--border\">\n                <button class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" type=\"submit\">Submit</button>\n                <button class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\n            </div>\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, api_service_1.ApiService])
                ], ContactNewComponent);
                return ContactNewComponent;
            })();
            exports_1("ContactNewComponent", ContactNewComponent);
        }
    }
});
