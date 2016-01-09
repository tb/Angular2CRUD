import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Contact} from './contact';

import 'rxjs/add/operator/map'; // Issue: https://github.com/angular/angular/pull/5947
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
    public BASE_URL: string = 'http://localhost:9200/angular2crud';

    /**
     * ApiService Constructor.
     *
     * @param {Http} _http - Private Http service injected into this component.
     * HTTP Info: https://angular.io/docs/ts/latest/api/http/Http-class.html
     */
    constructor(private _http: Http) { }

    /**
     * Get a list of all contacts.  
     */
    getContacts() {
        var url = this.BASE_URL + '/contact/_search';

        return this._http.get(url) // HTTP GET request to URL.
        .map(res => { 
            return res.json().hits.hits; // Map response to JSON and get Elastic hits.
        })
        .map((hits: Array<any>) => { // Map Elastic hits to contact list.
            let contacts: Array<Contact> = [];

            if (hits) {
                hits.forEach(hit => contacts.push(hit._source));
            }

            return contacts; // Final contact list returned.
        });
    }

    /**
     * Initialize API.
     */
    init() {
        this._http.put(this.BASE_URL, '').subscribe(res => console.log(res));
    }

    /**
     * CREATE a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    createContact(contact: Contact) {
        var url = this.BASE_URL + '/contact/';

        return this.getContacts().toPromise().then(res => { // GET contact list.
            contact.id = -1;

            res.forEach(c => {
                if (c.id > contact.id) {
                    contact.id = c.id; // Find the max contact ID.
                }
            });

            contact.id++; // Set the new contact ID to one greater than the max.

            url += contact.id + '?refresh=true';

            return this._http.put(url, JSON.stringify(contact)).toPromise(); // PUT new contact.
        });
    }

    /**
     * Get (READ) contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    getContact(id: number | string) {
        var url = this.BASE_URL + '/contact/' + id;
        return this._http.get(url).map(res => res.json()._source);
    }

    /**
     * UPDATE a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    updateContact(contact: Contact) {
        var url = this.BASE_URL + '/contact/' + contact.id + '?refresh=true';
        return this._http.put(url, JSON.stringify(contact)).toPromise();
    }

    /**
     * DELETE contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    deleteContact(id: number | string) {
        var url = this.BASE_URL + '/contact/' + id + '?refresh=true';
        return this._http.delete(url).toPromise();
    }
}