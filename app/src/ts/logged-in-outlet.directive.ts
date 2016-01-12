import {Directive, ElementRef, DynamicComponentLoader, Attribute} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';

@Directive({
    selector: 'logged-in-outlet'
})
export class LoggedInOutletDirective extends RouterOutlet {
    public publicRoutes: any;
    private parentRouter: Router;
    
    /**
     * LoggedInOutletDirective Constructor.
     */
    constructor(_elementRef: ElementRef,
                _loader: DynamicComponentLoader,
                _parentRouter: Router,
                @Attribute('name') nameAttr: string) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;

        this.publicRoutes = {
            '/login': true,
            '/create': true
        };
    }

    /**
     * Called by the Router to instantiate a new component during the commit phase of a navigation.
     * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
     *
     * REF: https://github.com/angular/angular/blob/2.0.0-beta.1/modules/angular2/src/router/router_outlet.ts
     */
    activate(instruction: ComponentInstruction) {
        var url = this.parentRouter.lastNavigationAttempt;

        if (!this.publicRoutes[url] && !localStorage.getItem('firebase:session::angular2crud')) {
            this.parentRouter.navigateByUrl('/login');
        }
        return super.activate(instruction);
    }
}