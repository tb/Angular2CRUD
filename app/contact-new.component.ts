import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ElasticApiService} from './elastic-api.service';

@Component({
    selector: 'contact-new',
    providers: [ElasticApiService],
    template: `
        <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
            <label for="firstName">First Name:</label>
            <input type="text" ngControl="firstName" required>

            <br>
            <br>

            <label for="lastName">Last Name:</label>
            <input type="text" ngControl="lastName" required>
           

            <br>
            <br>

            <button type="submit">Submit</button>
            <button type="button" (click)="onCancel()">Cancel</button>
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