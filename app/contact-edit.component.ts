import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ElasticApiService} from './elastic-api.service';
import {Contact} from './contact';

@Component({
    selector: 'contact-edit',
    providers: [ElasticApiService],
    template: `
        <div *ngIf="contact">
            <h3>{{contact.firstName}} {{contact.lastName}}</h3>

            <form #f="ngForm" (ngSubmit)="onSubmit()">
                <label for="firstName">First Name:</label>
                <input type="text" [(ngModel)]="contact.firstName" required>

                <br>
                <br>

                <label for="lastName">Last Name:</label>
                <input type="text" [(ngModel)]="contact.lastName" required>
               

                <br>
                <br>

                <button type="submit">Submit</button>
                <button type="button" (click)="onCancel()">Cancel</button>
            </form>
        </div>
    `
})
export class ContactEditComponent {
    public contact: Contact; // Contact we are editing.
    
    /**
     * ContactEditComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ElasticApiService} _apiService - Private ElasticApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router,
                private _routeParams: RouteParams, 
                private _elasticApiService: ElasticApiService) {}

    /**
     * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
     * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    ngOnInit() {
        let id = this._routeParams.get('id'); // 'let' keyword allows block scoping for variables.
        this._elasticApiService.getContact(id).subscribe(contact => this.contact = contact); 
    }

    /**
     * Submit click handler.
     */
    onSubmit() {
        this._elasticApiService.updateContact(this.contact).then(res => this._router.navigate(['Contacts']));
    }

    /**
     * Cancel click callback.
     */
    onCancel() {
        this._router.navigate(['ContactDetail', { id: this.contact.id }]);
    }
}