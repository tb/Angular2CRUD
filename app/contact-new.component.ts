import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ElasticApiService} from './elastic-api.service';

@Component({
    selector: 'contact-new',
    providers: [ElasticApiService],
    template: `
        <form #f="ngForm" (ngSubmit)="onSubmit(f.value)" class="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
            <div class="mdl-card__supporting-text">
                <div class="mdl-textfield mdl-js-textfield">
                    <label class="mdl-textfield__label" for="firstName">First Name</label>
                    <input class="mdl-textfield__input" type="text" ngControl="firstName" required>
                </div>

                <div class="mdl-textfield mdl-js-textfield">
                    <label class="mdl-textfield__label" for="lastName">Last Name</label>
                    <input class="mdl-textfield__input" type="text" ngControl="lastName" required>
                </div>
            </div>

            <div class="mdl-card__actions mdl-card--border">
                <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="submit">Submit</button>
                <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="button" (click)="onCancel()">Cancel</button>
            </div>
        </form>
    `
})
export class ContactNewComponent {

    /**
     * ContactNewComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ElasticApiService} _apiService - Private ElasticApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router,
                private _elasticApiService: ElasticApiService) {}

    /**
     * Submit click handler.
     */
    onSubmit(contact) {
        this._elasticApiService.createContact(contact).then(() => this._router.navigate(['Contacts']));
    }

    /**
     * Cancel click handler.
     */
    onCancel() {
        this._router.navigate(['Contacts']);
    }
}