import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Contact} from './contact';

import 'rxjs/add/operator/map'; // Issue: https://github.com/angular/angular/pull/5947
import 'rxjs/add/operator/toPromise';

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

        return this._http.get(url)
        .map(res => { 
            return res.json().hits.hits; 
        })
        .map((hits: Array<any>) => {
            let contacts: Array<Contact> = [];

            if (hits) {
                hits.forEach(hit => contacts.push(hit._source));
            }

            return contacts;
        });
    }

    /**
     * Initialize Elastic Index.
     */
    initElasticIndex() {
        this._http.put(this.BASE_URL, '').subscribe(res => console.log(res));
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

            res.forEach(c => {
                if (c.id > contact.id) {
                    contact.id = c.id;
                }
            });

            contact.id++;

            url += contact.id + '?refresh=true';

            return this._http.put(url, JSON.stringify(contact)).toPromise();
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