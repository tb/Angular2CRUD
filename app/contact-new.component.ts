import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';
import {Contact} from './contact';

@Component({
    selector: 'contact-new',
    providers: [ApiService],
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
    public submitted: boolean = false;

    /**
     * ContactNewComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router,
                private _apiService: ApiService) {}

    /**
     * Submit click handler.
     */
    onSubmit(contact) {
        var self = this; // Capture 'this' (current function invocation context).

        this._apiService.getContactCount().subscribe(function(res) {
            contact.id = ++res.json().count; // Set next contact id.

            self._apiService.createContact(contact).subscribe(function(res) {
                self._router.navigate(['Contacts']);
            });
        });
    }

    /**
     * Cancel click handler.
     */
    onCancel() {
        this._router.navigate(['Contacts']);
    }
}