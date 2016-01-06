import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ApiService} from './api.service';
import {Contact} from './contact';

@Component({
    selector: 'contact-detail',
    providers: [ApiService],
    template: `
        <div *ngIf="contact">
            <h3>{{contact.firstName}} {{contact.lastName}}</h3>

            <button type="button" (click)="onEdit()">Edit</button>
            <button type="button" (click)="onDelete()">Delete</button>
        </div>
    `
})
export class ContactDetailComponent implements OnInit {
    public contact: Contact; // Current contact we are viewing.

    /**
     * ContactDetailComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {RouteParams} _routeParams - Private RouteParams injected into this component.
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
        this._apiService.getContact(id).subscribe(contact => this.contact = contact.json()._source); 
    }

    /**
     * Edit contact click callback.
     */
    onEdit() {
        // TODO.
    }

    /**
     * Delete contact click callback.
     */
    onDelete() {
        this._apiService.deleteContact(this.contact.id).subscribe(res => this._router.navigate(['Contacts']));
    }
}