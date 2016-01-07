import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {URL} from './constants';
import {Contact} from './contact';

@Injectable()
export class ApiService {
    public BASE_URL: string = URL.ELASTIC;

    /**
     * ApiService Constructor.
     *
     * @param {Http} _http - Private Http service injected into this component.
     */
    constructor(private _http: Http) {}

    /**
     * Get a list of all contacts.  
     */
    getContacts() {
        var url = this.BASE_URL + '_search';
        return this._http.get(url);
    }

    /**
     * Get contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    getContact(id: number | string) {
        var url = this.BASE_URL + id;
        return this._http.get(url);
    }

    /**
     * Delete contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    deleteContact(id: number | string) {
        var url = this.BASE_URL + id + '?refresh=true';
        return this._http.delete(url);
    }

    /**
     * Create a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    createContact(contact: Contact) {
        var url = this.BASE_URL + contact.id + '?refresh=true';
        return this._http.put(url, JSON.stringify(contact));
    }

    /**
     *Get number of contacts for indexing purposes.
     */
    getContactCount() {
        var url = this.BASE_URL + '_count';
        return this._http.get(url);
    }
}