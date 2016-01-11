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
    var FirebaseApiService;
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
            FirebaseApiService = (function () {
                /**
                 * FirebaseApiService Constructor.
                 *
                 * @param {Http} _http - Private Http service injected into this component.
                 * HTTP Info: https://angular.io/docs/ts/latest/api/http/Http-class.html
                 */
                function FirebaseApiService(_http) {
                    this._http = _http;
                    this.BASE_URL = 'https://angular2crud.firebaseio.com';
                }
                /**
                 * Get a list of all contacts.
                 */
                FirebaseApiService.prototype.getContacts = function () {
                    var url = this.BASE_URL + '/.json';
                    return this._http.get(url) // HTTP GET request to URL.
                        .map(function (res) {
                        return res.json(); // Map response to JSON.
                    })
                        .map(function (data) {
                        var contacts = [];
                        if (data) {
                            // For < 4 items in an Array, Firebase converts your data to an object.
                            if (typeof data === 'object') {
                                data = Object.keys(data).map(function (key) { return data[key]; }); // Convert object to array.
                            }
                            data.forEach(function (contact) {
                                if (contact !== null) {
                                    contacts.push(contact);
                                }
                            });
                        }
                        return contacts; // Final contact list returned.
                    });
                };
                /**
                 * Initialize API.
                 */
                FirebaseApiService.prototype.init = function () { };
                /**
                 * CREATE a contact.
                 *
                 * @param {Contact} contact - Contact object.
                 */
                FirebaseApiService.prototype.createContact = function (contact) {
                    var _this = this;
                    var url = this.BASE_URL;
                    return this.getContacts().toPromise().then(function (res) {
                        contact.id = -1;
                        res.forEach(function (c) {
                            if (c.id > contact.id) {
                                contact.id = c.id; // Find the max contact ID.
                            }
                        });
                        contact.id++; // Set the new contact ID to one greater than the max.
                        url += '/' + contact.id + '.json';
                        return _this._http.put(url, JSON.stringify(contact)).toPromise(); // PUT new contact.
                    });
                };
                /**
                 * Get (READ) contact by id.
                 *
                 * @param {number | string} id - Contact id.
                 */
                FirebaseApiService.prototype.getContact = function (id) {
                    var url = this.BASE_URL + '/' + id + '.json';
                    return this._http.get(url).map(function (res) { return res.json(); });
                };
                /**
                 * UPDATE a contact.
                 *
                 * @param {Contact} contact - Contact object.
                 */
                FirebaseApiService.prototype.updateContact = function (contact) {
                    var url = this.BASE_URL + '/' + contact.id + '.json';
                    return this._http.put(url, JSON.stringify(contact)).toPromise();
                };
                /**
                 * DELETE contact by id.
                 *
                 * @param {number | string} id - Contact id.
                 */
                FirebaseApiService.prototype.deleteContact = function (id) {
                    var url = this.BASE_URL + '/' + id + '.json';
                    return this._http.delete(url).toPromise();
                };
                FirebaseApiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FirebaseApiService);
                return FirebaseApiService;
            })();
            exports_1("FirebaseApiService", FirebaseApiService);
        }
    }
});
