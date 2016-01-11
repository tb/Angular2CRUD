System.register(['./api.service', './elastic-api.service', './firebase-api.service'], function(exports_1) {
    var api_service_1, elastic_api_service_1, firebase_api_service_1;
    var API_PROVIDERS;
    return {
        setters:[
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (elastic_api_service_1_1) {
                elastic_api_service_1 = elastic_api_service_1_1;
            },
            function (firebase_api_service_1_1) {
                firebase_api_service_1 = firebase_api_service_1_1;
            }],
        execute: function() {
            /**
             * Provides a basic set of injectables to use the {@link API} service in any application.
             *
             * The `API_PROVIDERS` should be included either in a component's injector,
             * or in the root injector when bootstrapping an application.
             */
            exports_1("API_PROVIDERS", API_PROVIDERS = [
                api_service_1.ApiService,
                elastic_api_service_1.ElasticApiService,
                firebase_api_service_1.FirebaseApiService
            ]);
        }
    }
});
