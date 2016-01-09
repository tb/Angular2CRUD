import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ApiService} from './api.service';
import {Contact} from './contact';

@Component({
    selector: 'contact-edit',
    providers: [ApiService],
    template: `
        <div *ngIf="contact">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">{{contact.firstName}} {{contact.lastName}}</h2>
                </div>

                <form #f="ngForm" (ngSubmit)="onSubmit()">
                    <div class="mdl-card__supporting-text">
                        <div class="mdl-textfield mdl-js-textfield">
                            <label for="firstName">First Name</label>
                            <input class="mdl-textfield__input" type="text" [(ngModel)]="contact.firstName" required>
                        </div>

                        <div class="mdl-textfield mdl-js-textfield">
                            <label for="lastName">Last Name</label>
                            <input class="mdl-textfield__input" type="text" [(ngModel)]="contact.lastName" required>
                        </div>
                    </div>

                    <div class="mdl-card__actions">
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="submit">Submit</button>
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="button" (click)="onCancel()">Cancel</button>
                    </div>
                </form>
            </div>
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