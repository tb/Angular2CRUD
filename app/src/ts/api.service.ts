import {Injectable} from 'angular2/core';
import {ElasticApiService} from './elastic-api.service';
import {FirebaseApiService} from './firebase-api.service';
import {Contact} from './contact';

@Injectable()
export class ApiService {
    private elastic: boolean = false;
    private firebase: boolean = true;
    public localStorageKey: string;

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

    /**
     * Create a new user account.
     *
     * @param {string} email - Email of new user.
     * @param {string} password - Password of new user.
     * @param {Function} success - Callback function after create operation completes.
     */
    createAccount(email: string, password: string, success: Function) {
        if (this.elastic) {
            console.log('ERROR: createAccount(email, password, success) for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._firebaseApiService.createAccount(email, password, success);
        } 
    }

    /**
     * Login a user account.
     *
     * @param {string} email - Email of user.
     * @param {string} password - Password of user.
     * @param {Function} success - Callback function after login operation completes.
     */
    loginAccount(email: string, password: string, success: Function) {
        if (this.elastic) {
            console.log('ERROR: loginAccount(email, password, success) for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._firebaseApiService.loginAccount(email, password, success);
        } 
    }

    /**
     * Logout a user account.
     *
     * @param {Function} success - Callback function after logout operation completes.
     */
    logoutAccount(success: Function) {
        if (this.elastic) {
            console.log('ERROR: logoutAccount(success) for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._firebaseApiService.logoutAccount(success);
        }
    }

    /**
     * Delete a user account.
     *
     * @param {string} email - Email of user we are deleting.
     * @param {string} password - Password of user we are deleting.
     * @param {Function} success - Callback function after delete operation completes.
     */
    deleteAccount(email: string, password: string, success: Function) {
        if (this.elastic) {
            console.log('ERROR: deleteAccount(email, password, success) for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._firebaseApiService.deleteAccount(email, password, success);
        }
    }

    /**
     * Returns the email of the logged in user.
     */
    getLoggedInAccountEmail() {
        if (this.elastic) {
            console.log('ERROR: getLoggedInAccountEmail() for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._firebaseApiService.getLoggedInAccountEmail();
        }
    }

    /**
     * Return the local storage session value. 
     */
    getLocalStorageSession() {
        if (this.elastic) {
            console.log('ERROR: getLocalStorageSession() for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._firebaseApiService.getLocalStorageSession();
        }
    }
}