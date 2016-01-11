System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var ElasticApiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            ElasticApiService = (function () {
                /**
                 * ElasticApiService Constructor.
                 *
                 * @param {Http} _http - Private Http service injected into this component.
                 * HTTP Info: https://angular.io/docs/ts/latest/api/http/Http-class.html
                 */
                function ElasticApiService(_http) {
                    this._http = _http;
                    this.BASE_URL = 'http://localhost:9200/angular2crud';
                }
                /**
                 * Get a list of all contacts.
                 */
                ElasticApiService.prototype.getContacts = function () {
                    var url = this.BASE_URL + '/contact/_search';
                    return this._http.get(url) // HTTP GET request to URL.
                        .map(function (res) {
                        return res.json().hits.hits; // Map response to JSON and get Elastic hits.
                    })
                        .map(function (hits) {
                        var contacts = [];
                        if (hits) {
                            hits.forEach(function (hit) { return contacts.push(hit._source); });
                        }
                        return contacts; // Final contact list returned.
                    });
                };
                /**
                 * Initialize API.
                 */
                ElasticApiService.prototype.init = function () {
                    this._http.put(this.BASE_URL, '').subscribe(function (res) { return console.log(res); });
                };
                /**
                 * CREATE a contact.
                 *
                 * @param {Contact} contact - Contact object.
                 */
                ElasticApiService.prototype.createContact = function (contact) {
                    var _this = this;
                    var url = this.BASE_URL + '/contact/';
                    return this.getContacts().toPromise().then(function (res) {
                        contact.id = -1;
                        res.forEach(function (c) {
                            if (c.id > contact.id) {
                                contact.id = c.id; // Find the max contact ID.
                            }
                        });
                        contact.id++; // Set the new contact ID to one greater than the max.
                        url += contact.id + '?refresh=true';
                        return _this._http.put(url, JSON.stringify(contact)).toPromise(); // PUT new contact.
                    });
                };
                /**
                 * Get (READ) contact by id.
                 *
                 * @param {number | string} id - Contact id.
                 */
                ElasticApiService.prototype.getContact = function (id) {
                    var url = this.BASE_URL + '/contact/' + id;
                    return this._http.get(url).map(function (res) { return res.json()._source; });
                };
                /**
                 * UPDATE a contact.
                 *
                 * @param {Contact} contact - Contact object.
                 */
                ElasticApiService.prototype.updateContact = function (contact) {
                    var url = this.BASE_URL + '/contact/' + contact.id + '?refresh=true';
                    return this._http.put(url, JSON.stringify(contact)).toPromise();
                };
                /**
                 * DELETE contact by id.
                 *
                 * @param {number | string} id - Contact id.
                 */
                ElasticApiService.prototype.deleteContact = function (id) {
                    var url = this.BASE_URL + '/contact/' + id + '?refresh=true';
                    return this._http.delete(url).toPromise();
                };
                ElasticApiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ElasticApiService);
                return ElasticApiService;
            })();
            exports_1("ElasticApiService", ElasticApiService);
        }
    }
});
