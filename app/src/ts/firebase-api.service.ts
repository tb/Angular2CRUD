import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Contact} from './contact';

import 'rxjs/add/operator/map'; // Issue: https://github.com/angular/angular/pull/5947
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FirebaseApiService {
    public BASE_URL: string = 'https://angular2crud.firebaseio.com';
    public firebase = new Firebase(this.BASE_URL);

    /**
     * FirebaseApiService Constructor.
     *
     * @param {Http} _http - Private Http service injected into this component.
     * HTTP Info: https://angular.io/docs/ts/latest/api/http/Http-class.html
     */
    constructor(private _http: Http) {}

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
                    // For < 4 items in an Array, Firebase converts your data to an object.
                    if (typeof data === 'object') {
                        data = Object.keys(data).map(key => { return data[key]; }); // Convert object to array.
                    }

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

    /**
     * Create a new user account.
     *
     * @param {string} email - Email of new user.
     * @param {string} password - Password of new user.
     * @param {Function} success - Callback function after create operation completes.
     */
    createAccount(email: string, password: string, success: Function) {
        this.firebase.createUser({
            email    : email,
            password : password
        }, (error, userData) => {
            if (error) {
                console.log("Error creating user:", error);
                success(false);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                success(true);
            }
        });
    }

    /**
     * Login a user account.
     *
     * @param {string} email - Email of user.
     * @param {string} password - Password of user.
     * @param {Function} success - Callback function after login operation completes.
     */
    loginAccount(email: string, password: string, success: Function) {
        this.firebase.authWithPassword({
            email    : email,
            password : password
        }, (error, authData) => {
            if (error) {
                console.log("Login Failed!", error);
                success(false);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                success(true);
            }
        });
    }

    /**
     * Logout a user account.
     *
     * @param {Function} success - Callback function after logout operation completes.
     */
    logoutAccount(success: Function) {
        this.firebase.unauth(); // De-authenticate logged in user.

        var authData = this.firebase.getAuth(); // Check to make sure it worked.

        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
            success(false);
        } else {
            console.log("User is logged out");
            success(true);
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
        this.firebase.removeUser({
            email    : email,
            password : password
        }, error => {
            if (error === null) {
                console.log("User removed successfully");
                success(true);
            } else {
                console.log("Error removing user:", error);
                success(false);
            }
        });
    }

    /**
     * Returns the email of the logged in user.
     */
    getLoggedInAccountEmail() {
        var authData = this.firebase.getAuth(); // Get current auth.

        if (authData) {
            return authData.password.email;
        } else {
            console.log("User is logged out");
        }
    }
}