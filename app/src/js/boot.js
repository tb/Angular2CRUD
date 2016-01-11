// Info about boot.ts: https://angular.io/docs/ts/latest/quickstart.html#!#boot
System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', './api', './crud-app.component'], function(exports_1) {
    var browser_1, router_1, http_1, api_1, crud_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (crud_app_component_1_1) {
                crud_app_component_1 = crud_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(crud_app_component_1.CrudAppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, api_1.API_PROVIDERS]);
        }
    }
});
