System.register(['angular2/core', './elastic-api.service', './firebase-api.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, elastic_api_service_1, firebase_api_service_1;
    var ApiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (elastic_api_service_1_1) {
                elastic_api_service_1 = elastic_api_service_1_1;
            },
            function (firebase_api_service_1_1) {
                firebase_api_service_1 = firebase_api_service_1_1;
            }],
        execute: function() {
            ApiService = (function () {
                /**
                 * ApiService Constructor.
                 *
                 * @param {ElasticApiService} _elasticApiService - Private Elastic service.
                 * @param {FirebaseApiService} _firebaseApiService - Private Firebase service.
                 */
                function ApiService(_elasticApiService, _firebaseApiService) {
                    this._elasticApiService = _elasticApiService;
                    this._firebaseApiService = _firebaseApiService;
                    this.elastic = false;
                    this.firebase = true;
                }
                /**
                 * Get a list of all contacts.
                 */
                ApiService.prototype.getContacts = function () {
                    if (this.elastic) {
                        return this._elasticApiService.getContacts();
                    }
                    else if (this.firebase) {
                        return this._firebaseApiService.getContacts();
                    }
                };
                /**
                 * Initialize API.
                 */
                ApiService.prototype.init = function () {
                    if (this.elastic) {
                        return this._elasticApiService.init();
                    }
                    else if (this.firebase) {
                        return this._firebaseApiService.init();
                    }
                };
                /**
                 * CREATE a contact.
                 *
                 * @param {Contact} contact - Contact object.
                 */
                ApiService.prototype.createContact = function (contact) {
                    if (this.elastic) {
                        return this._elasticApiService.createContact(contact);
                    }
                    else if (this.firebase) {
                        return this._firebaseApiService.createContact(contact);
                    }
                };
                /**
                 * Get (READ) contact by id.
                 *
                 * @param {number | string} id - Contact id.
                 */
                ApiService.prototype.getContact = function (id) {
                    if (this.elastic) {
                        return this._elasticApiService.getContact(id);
                    }
                    else if (this.firebase) {
                        return this._firebaseApiService.getContact(id);
                    }
                };
                /**
                 * UPDATE a contact.
                 *
                 * @param {Contact} contact - Contact object.
                 */
                ApiService.prototype.updateContact = function (contact) {
                    if (this.elastic) {
                        return this._elasticApiService.updateContact(contact);
                    }
                    else if (this.firebase) {
                        return this._firebaseApiService.updateContact(contact);
                    }
                };
                /**
                 * DELETE contact by id.
                 *
                 * @param {number | string} id - Contact id.
                 */
                ApiService.prototype.deleteContact = function (id) {
                    if (this.elastic) {
                        return this._elasticApiService.deleteContact(id);
                    }
                    else if (this.firebase) {
                        return this._firebaseApiService.deleteContact(id);
                    }
                };
                ApiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [elastic_api_service_1.ElasticApiService, firebase_api_service_1.FirebaseApiService])
                ], ApiService);
                return ApiService;
            })();
            exports_1("ApiService", ApiService);
        }
    }
});
