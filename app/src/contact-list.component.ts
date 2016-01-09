import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';
import {ApiService} from './api.service';

@Component({
    selector: 'contact-list',
    providers: [ApiService],
    template: `
        <table class="mdl-data-table mdl-js-data-table demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            <tr *ngFor="#contact of contacts" (click)="onSelect(contact)">
                <td>{{contact.id}}</td>
                <td>{{contact.firstName}}</td>
                <td>{{contact.lastName}}</td>
            </tr>
        </table>
    `,
    styles: [`
        tr {
            cursor: pointer;
        }

        .mdl-data-table th:first-of-type {
          text-align:left;
          width: 40px;
        }
    `]
})
export class ContactListComponent implements OnInit {
    public contacts: Contact[]; // List of contacts.

    /**
     * ContactListComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router, 
                private _apiService: ApiService) {}

    /**
     * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
     * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    ngOnInit() {
        this._apiService.getContacts().subscribe(contacts => { this.contacts = contacts);
    }

    /**
     * Callback for clicking on a contact.
     */
    onSelect(contact: Contact) {
        this._router.navigate(['ContactDetail', { id: contact.id }]);
    }
}