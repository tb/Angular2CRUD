import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';

@Component({
    selector: 'create',
    template: `
        <h4>Create Account</h4>

        <form #f="ngForm" (ngSubmit)="onSubmit(email.value, password.value)">
            <input type="email" #email class="" id="email" placeholder="Email" required>
            
            <input type="password" #password class="" placeholder="Password" required>

            <button type="submit">Submit</button>
            <a href="login">Goto Login Page</a>
        </form>
    `
})
export class CreateComponent {

    /**
     * CreateComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router,
                private _apiService: ApiService) {}

    /**
     * Submit click handler.
     */
    onSubmit(email, password) {
        this._apiService.createAccount(email, password, success => {
            if (success) {
                this._router.navigate(['Login']);
            }
        });
    }
}