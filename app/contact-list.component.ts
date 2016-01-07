import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';
import {ElasticApiService} from './elastic-api.service';
import {ContactDetailComponent} from './contact-detail.component';

@Component({
    selector: 'contact-list',
    directives: [ContactDetailComponent],
    providers: [ElasticApiService],
    template: `
        <table>
            <caption>{{title}}</caption>
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
        table {
            border-collapse: collapse;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        th, td {
            text-align: left;
            padding: 8px;
        }

        tr {
            cursor: pointer;
        }

        tr:hover {
            color: #369;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    `]
})
export class ContactListComponent implements OnInit {
    public title: string = 'Contact List'; // Type not really needed here (inferred based on string value given).
    public contacts: Contact[]; // List of contacts we will display.

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
        this.contacts = [];
        
        this._elasticApiService.getContacts().subscribe(contacts => {
            this.contacts = contacts;
        });
    }

    /**
     * Callback for clicking on a contact.
     */
    onSelect(contact: Contact) {
        this._router.navigate(['ContactDetail', { id: contact.id }]);
    }
}