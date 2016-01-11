import {Injectable} from 'angular2/core';
import {ElasticApiService} from './elastic-api.service';
import {FirebaseApiService} from './firebase-api.service';
import {Contact} from './contact';

@Injectable()
export class ApiService {
    private elastic: boolean = false;
    private firebase: boolean = true;

    /**
     * ApiService Constructor.
     *
     * @param {ElasticApiService} _elasticApiService - Private Elastic service.
     * @param {FirebaseApiService} _firebaseApiService - Private Firebase service.
     */
    constructor(private _elasticApiService: ElasticApiService,
                private _firebaseApiService: FirebaseApiService) {}

    /**
     * Get a list of all contacts.  
     */
    getContacts() {
        if (this.elastic) {
            return this._elasticApiService.getContacts();
        }
        else if (this.firebase) {
            return this._firebaseApiService.getContacts();
        }
    }

    /**
     * Initialize API.
     */
    init() {
        if (this.elastic) {
            return this._elasticApiService.init();
        }
        else if (this.firebase) {
            return this._firebaseApiService.init();
        }
    }

    /**
     * CREATE a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    createContact(contact: Contact) {
        if (this.elastic) {
            return this._elasticApiService.createContact(contact);
        }
        else if (this.firebase) {
            return this._firebaseApiService.createContact(contact);
        }
    }

    /**
     * Get (READ) contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    getContact(id: number | string) {
        if (this.elastic) {
            return this._elasticApiService.getContact(id);
        }
        else if (this.firebase) {
            return this._firebaseApiService.getContact(id);
        }
    }

    /**
     * UPDATE a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    updateContact(contact: Contact) {
        if (this.elastic) {
            return this._elasticApiService.updateContact(contact);
        }
        else if (this.firebase) {
            return this._firebaseApiService.updateContact(contact);
        }
    }

    /**
     * DELETE contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    deleteContact(id: number | string) {
        if (this.elastic) {
            return this._elasticApiService.deleteContact(id);
        }
        else if (this.firebase) {
            return this._firebaseApiService.deleteContact(id);
        }  
    }
}