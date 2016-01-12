import {Component} from 'angular2/core';
import {ApiService} from './api.service';

@Component({
    selector: 'create',
    template: `
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--6-col">
                <div class="mdl-card mdl-shadow--2dp">
                    <form #f="ngForm" (ngSubmit)="onSubmit(email.value, password.value)">
                        <div class="mdl-card__title mdl-card--expand mdl-color--blue-300">
                            Create Account
                        </div>
                        <br>
                        <div class="mdl-card__supporting-text">
                            <input type="email" #email class="mdl-textfield__input" id="email" placeholder="Email" required>
                            
                            <br>
                            <br>

                            <input type="password" #password class="mdl-textfield__input" id="password" placeholder="Password" required>
                        </div>
                        <br>
                        <div class="mdl-card__actions">
                            <button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Submit</button>
                            <a href="login" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
})
export class CreateComponent {

    /**
     * CreateComponent Constructor.
     *
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _apiService: ApiService) {}

    /**
     * Submit click handler.
     */
    onSubmit(email, password) {
        console.log(email);
        console.log(password);
    }
}