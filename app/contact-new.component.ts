import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ApiService} from './api.service';
import {Contact} from './contact';

@Component({
    selector: 'contact-new',
    providers: [ApiService],
    template: `
        First name: <input type="text" name="firstName">
        <br>
        <br>
        Last name: <input type="text" name="lastName">
        <br>
        <br>
        <button type="button" (click)="onSave()">Save</button>
        <button type="button" (click)="onCancel()">Cancel</button>
    `
})
export class ContactNewComponent implements OnInit {
    public contact: Contact; // Contact we will add.

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
     * Save click handler.
     */
    onSave() {
        
    }

    /**
     * Cancel click handler.
     */
    onCancel() {
        this._router.navigate(['Contacts']);
    }
}