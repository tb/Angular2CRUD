import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Contact} from './contact';

import 'rxjs/add/operator/map'; // Issue: https://github.com/angular/angular/pull/5947
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FirebaseApiService {
    public BASE_URL: string = 'https://angular2crud.firebaseio.com';

    /**
     * FirebaseApiService Constructor.
     *
     * @param {Http} _http - Private Http service injected into this component.
     * HTTP Info: https://angular.io/docs/ts/latest/api/http/Http-class.html
     */
    constructor(private _http: Http) { }

    /**
     * Get a list of all contacts.  
     */
    getContacts() {
        var url = this.BASE_URL + '/.json';

        return this._http.get(url) // HTTP GET request to URL.
            .map(res => {
                return res.json(); // Map response to JSON.
            })
            .map((data: Array<any>) => { // Map Firebase data to contact list.
            let contacts: Array<Contact> = [];

            if (data) {
                data.forEach(contact => {
                    if (contact !== null) { // Make sure we are not adding nulls.
                        contacts.push(contact);
                    }
                });
            }

            return contacts; // Final contact list returned.
        });
    }

    /**
     * Initialize API.
     */
    init() {}

    /**
     * CREATE a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    createContact(contact: Contact) {
        var url = this.BASE_URL;

        return this.getContacts().toPromise().then(res => { // GET contact list.
            contact.id = -1;

            res.forEach(c => {
                if (c.id > contact.id) {
                    contact.id = c.id; // Find the max contact ID.
                }
            });

            contact.id++; // Set the new contact ID to one greater than the max.

            url += '/' + contact.id + '.json';

            return this._http.put(url, JSON.stringify(contact)).toPromise(); // PUT new contact.
        });
    }

    /**
     * Get (READ) contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    getContact(id: number | string) {
        var url = this.BASE_URL + '/' + id + '.json';
        return this._http.get(url).map(res => res.json());
    }

    /**
     * UPDATE a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    updateContact(contact: Contact) {
        var url = this.BASE_URL + '/' + contact.id + '.json';
        return this._http.put(url, JSON.stringify(contact)).toPromise();
    }

    /**
     * DELETE contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    deleteContact(id: number | string) {
        var url = this.BASE_URL + '/' + id + '.json';
        return this._http.delete(url).toPromise();
    }
}