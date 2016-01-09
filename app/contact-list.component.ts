import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';
import {ElasticApiService} from './elastic-api.service';

@Component({
    selector: 'contact-list',
    providers: [ElasticApiService],
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
    `]
})
export class ContactListComponent implements OnInit {
    public contacts: Contact[]; // List of contacts.

    /**
     * ContactListComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ElasticApiService} _apiService - Private ElasticApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router, 
                private _elasticApiService: ElasticApiService) {}

    /**
     * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
     * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    ngOnInit() {
        this._elasticApiService.getContacts().subscribe(contacts => this.contacts = contacts);
    }

    /**
     * Callback for clicking on a contact.
     */
    onSelect(contact: Contact) {
        this._router.navigate(['ContactDetail', { id: contact.id }]);
    }
}