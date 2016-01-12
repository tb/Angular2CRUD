import {Component} from 'angular2/core';

@Component({
    selector: 'login',
    template: `
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--6-col">
                <div class="mdl-card mdl-shadow--2dp">
                    <form #f="ngForm" (ngSubmit)="onSubmit($event, username.value, password.value)">
                        <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                            Login
                        </div>
                        <br>
                        <div class="mdl-card__supporting-text">
                            <input type="text" #username class="mdl-textfield__input" id="username" placeholder="Username">
                            
                            <br>
                            <br>

                            <input type="password" #password class="mdl-textfield__input" id="password" placeholder="Password">
                        </div>
                        <br>
                        <div class="mdl-card__actions">
                            <button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Submit</button>
                            <a href="create" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Create Account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
})
export class LoginComponent {}