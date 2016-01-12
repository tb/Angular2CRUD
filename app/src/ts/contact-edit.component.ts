import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ApiService} from './api.service';
import {Contact} from './contact';

@Component({
    selector: 'contact-edit',
    providers: [ApiService],
    template: `
        <div *ngIf="contact">
            <h4>{{contact.firstName}} {{contact.lastName}}</h4>

            <form #f="ngForm" (ngSubmit)="onSubmit()">
                <label for="firstName">First Name</label>
                <input type="text" [(ngModel)]="contact.firstName" required>

                <label for="lastName">Last Name</label>
                <input type="text" [(ngModel)]="contact.lastName" required>

                <button type="submit">Submit</button>
                <button type="button" (click)="onCancel()">Cancel</button>
            </form>
        </div>
    `
})
export class ContactEditComponent implements OnInit {
    public contact: Contact; // Contact we are editing.
    
    /**
     * ContactEditComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router,
                private _routeParams: RouteParams, 
                private _apiService: ApiService) {}

    /**
     * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
     * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    ngOnInit() {
        let id = this._routeParams.get('id'); // 'let' keyword allows block scoping for variables.
        this._apiService.getContact(id).subscribe(contact => this.contact = contact); 
    }

    /**
     * Submit click handler.
     */
    onSubmit() {
        this._apiService.updateContact(this.contact).then(() => this._router.navigate(['Contacts']));
    }

    /**
     * Cancel click callback.
     */
    onCancel() {
        this._router.navigate(['ContactDetail', { id: this.contact.id }]);
    }
}