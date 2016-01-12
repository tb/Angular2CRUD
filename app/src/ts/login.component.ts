import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';

@Component({
    selector: 'login',
    template: `
        <h4>Login</h4>

        <span *ngIf="loginError" class="error">
            Invalid Email/Password Combination.
            <br>
            <br>
        </span>

        <form #f="ngForm" (ngSubmit)="onSubmit(email.value, password.value)">
            <input type="email" #email id="email" placeholder="Email" required>

            <input type="password" #password placeholder="Password" required>

            <button type="submit">Submit</button>
            <a href="create">Create Account</a>
        </form>
    `,
    styles: [`
        .error {
            color: red;
        }
    `]
})
export class LoginComponent {
    public loginError = false; // True if there is a login error.

    /**
     * LoginComponent Constructor.
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
        this.loginError = false;

        this._apiService.loginAccount(email, password, success => {
            if (success) {
                this._router.navigate(['Dashboard/Contacts']);
            }
            else {
                this.loginError = true;
            }
        });
    }
}