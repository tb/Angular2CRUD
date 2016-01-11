import {ApiService} from './api.service';
import {ElasticApiService} from './elastic-api.service';
import {FirebaseApiService} from './firebase-api.service';

/**
 * Provides a basic set of injectables to use the {@link API} service in any application.
 *
 * The `API_PROVIDERS` should be included either in a component's injector,
 * or in the root injector when bootstrapping an application.
 */
export const API_PROVIDERS: any[] = [
    ApiService,
    ElasticApiService,
    FirebaseApiService
];