import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Contact} from './contact';
import 'rxjs/add/operator/toPromise'; // Issue: https://github.com/angular/angular/pull/5947

@Injectable()
export class ElasticApiService {
    public BASE_URL: string = 'http://localhost:9200/angular2crud';

    /**
     * ElasticApiService Constructor.
     *
     * @param {Http} _http - Private Http service injected into this component.
     */
    constructor(private _http: Http) {}

    /**
     * Get a list of all contacts.  
     */
    getContacts() {
        var url = this.BASE_URL + '/contact/_search';
        return this._http.get(url);
    }

    /**
     * Get number of contacts for indexing purposes.
     */
    getContactCount() {
        var url = this.BASE_URL + '/contact/_count';
        return this._http.get(url);
    }

    /**
     * CREATE a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    createContact(contact: Contact) {
        var url = this.BASE_URL + '/contact/';

        return this.getContacts().toPromise().then(res => {
            contact.id = -1;

            res.json().hits.hits.forEach(c => {
                if (c._source.id > contact.id) {
                    contact.id = c._source.id;
                }
            });

            contact.id++;

            url += contact.id + '?refresh=true';

            return this._http.post(url, JSON.stringify(contact)).toPromise();
        });
    }

    /**
     * Get (READ) contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    getContact(id: number | string) {
        var url = this.BASE_URL + '/contact/' + id;
        return this._http.get(url);
    }

    /**
     * UPDATE a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    updateContact(contact: Contact) {
        var url = this.BASE_URL + '/contact/' + contact.id + '?refresh=true';
        return this._http.put(url, JSON.stringify(contact));
    }

    /**
     * DELETE contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    deleteContact(id: number | string) {
        var url = this.BASE_URL + '/contact/' + id + '?refresh=true';
        return this._http.delete(url);
    }
}