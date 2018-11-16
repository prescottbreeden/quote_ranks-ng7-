(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author-edit/author-edit.component */ "./src/app/author-edit/author-edit.component.ts");
/* harmony import */ var _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./author-list/author-list.component */ "./src/app/author-list/author-list.component.ts");
/* harmony import */ var _author_submit_author_submit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author-submit/author-submit.component */ "./src/app/author-submit/author-submit.component.ts");
/* harmony import */ var _quote_edit_quote_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-edit/quote-edit.component */ "./src/app/quote-edit/quote-edit.component.ts");
/* harmony import */ var _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-list/quote-list.component */ "./src/app/quote-list/quote-list.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_3__["AuthorListComponent"] },
    { path: 'authors/new', component: _author_submit_author_submit_component__WEBPACK_IMPORTED_MODULE_4__["AuthorSubmitComponent"] },
    { path: 'authors/edit/:id', component: _author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_2__["AuthorEditComponent"] },
    { path: 'authors/quotes/:id', component: _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_6__["QuoteListComponent"] },
    { path: 'authors/edit/:id/:idx', component: _quote_edit_quote_edit_component__WEBPACK_IMPORTED_MODULE_5__["QuoteEditComponent"] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1 class=\"header__title\">Quote Ranks</h1>\n  <nav class=\"header__nav\">\n    <button class=\"btn\" [routerLink]=\"['/']\">Show Authors</button>\n    <button class=\"btn\" [routerLink]=\"['/authors/new']\">Add New Author</button>\n  </nav>\n</header>\n<main class=\"main\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/author']);
    };
    AppComponent.prototype.goSubmitAuthor = function () {
        this._router.navigate(['/author/new']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./author-edit/author-edit.component */ "./src/app/author-edit/author-edit.component.ts");
/* harmony import */ var _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./author-list/author-list.component */ "./src/app/author-list/author-list.component.ts");
/* harmony import */ var _author_submit_author_submit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./author-submit/author-submit.component */ "./src/app/author-submit/author-submit.component.ts");
/* harmony import */ var _quote_edit_quote_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quote-edit/quote-edit.component */ "./src/app/quote-edit/quote-edit.component.ts");
/* harmony import */ var _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quote-list/quote-list.component */ "./src/app/quote-list/quote-list.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_7__["AuthorEditComponent"],
                _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_8__["AuthorListComponent"],
                _author_submit_author_submit_component__WEBPACK_IMPORTED_MODULE_9__["AuthorSubmitComponent"],
                _quote_edit_quote_edit_component__WEBPACK_IMPORTED_MODULE_10__["QuoteEditComponent"],
                _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_11__["QuoteListComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author-edit/author-edit.component.html":
/*!********************************************************!*\
  !*** ./src/app/author-edit/author-edit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"u-container\">\n  <h2 class=\"u-container__title\">Edit Author</h2>\n  <form class=\"author__form\">\n    <label for=\"author\">Author Name:</label>\n    <input \n      required\n      minlength='3'\n      name='author'\n      ngModel\n      #author=\"ngModel\"\n      [(ngModel)]=\"editAuthor.name\"\n      class=\"author__form--input\" \n      type=\"text\">\n\n    <button \n      (click)=\"onEdit()\"\n      class=\"btn-primary\"> Update Author\n    </button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/author-edit/author-edit.component.scss":
/*!********************************************************!*\
  !*** ./src/app/author-edit/author-edit.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvci1lZGl0L2F1dGhvci1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/author-edit/author-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/author-edit/author-edit.component.ts ***!
  \******************************************************/
/*! exports provided: AuthorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorEditComponent", function() { return AuthorEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorEditComponent = /** @class */ (function () {
    function AuthorEditComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.authorId = '';
        this.editAuthor = { name: '' };
        this.errors = '';
    }
    AuthorEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.authorId = params['id'];
            _this.getAuthor();
        });
    };
    AuthorEditComponent.prototype.getAuthor = function () {
        var _this = this;
        this._http.getAuthor(this.authorId).subscribe(function (response) {
            if (response['status'] == 200) {
                _this.editAuthor = response['data'];
            }
            else if (response['status'] == 418) {
                _this.errors = response['errors'];
            }
            else {
                return _this._router.navigate(['/404']);
            }
        });
    };
    AuthorEditComponent.prototype.onEdit = function () {
        var _this = this;
        this._http.editAuthor(this.authorId, this.editAuthor).subscribe(function (response) {
            if (response['status'] == 200) {
                _this._router.navigate(['/']);
            }
            else if (response['status'] == 418) {
                _this.errors = response['errors'];
            }
            else {
                return _this._router.navigate(['/404']);
            }
        });
    };
    AuthorEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-edit',
            template: __webpack_require__(/*! ./author-edit.component.html */ "./src/app/author-edit/author-edit.component.html"),
            styles: [__webpack_require__(/*! ./author-edit.component.scss */ "./src/app/author-edit/author-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthorEditComponent);
    return AuthorEditComponent;
}());



/***/ }),

/***/ "./src/app/author-list/author-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/author-list/author-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"author__row\">\n  <div class=\"author__col\">\n    <p class=\"author__header\">Author Name</p>\n  </div>\n  <div class=\"author__col\">\n    <p class=\"author__header\">Actions Available</p>\n  </div>\n</div>\n<div class=\"author__row\" *ngFor=\"let author of authors\">\n  <div class=\"author__col\">\n    <p class=\"author__header\">{{author.name}}</p>\n  </div>\n  <div class=\"author__col\">\n    <button \n      \n      class=\"author__btn\">View Quotes\n    </button>\n    <button \n      [routerLink]=\"['/authors/edit/', author._id]\"\n      class=\"author__btn\">Edit Author\n    </button>\n    <button \n      (click)=\"onDelete(author._id)\"\n      class=\"author__btn\">Delete Author\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/author-list/author-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/author-list/author-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".author__row {\n  display: flex; }\n\n.author__col {\n  width: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByZXNjb3R0L0RvY3VtZW50cy9jb2RlL2NvZGluZ19kb2pvL3F1b3RlX3JhbmtzL3B1YmxpYy9zcmMvYXBwL2F1dGhvci1saXN0L2F1dGhvci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsV0FBVSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9yLWxpc3QvYXV0aG9yLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yIHtcblxuICAmX19yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAmX19jb2wge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/author-list/author-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/author-list/author-list.component.ts ***!
  \******************************************************/
/*! exports provided: AuthorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListComponent", function() { return AuthorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorListComponent = /** @class */ (function () {
    function AuthorListComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.authors = [];
    }
    AuthorListComponent.prototype.ngOnInit = function () {
        this.loadAuthors();
    };
    AuthorListComponent.prototype.loadAuthors = function () {
        var _this = this;
        this._http.getAllAuthor().subscribe(function (response) {
            _this.authors = response['data'];
        });
    };
    AuthorListComponent.prototype.onDelete = function (id) {
        var _this = this;
        this._http.deleteAuthor(id).subscribe(function (response) {
            if (response['status'] == 200) {
                _this.loadAuthors();
            }
            else if (response['status'] == 418) {
                _this.errors = response['errors'];
            }
            else {
                return _this._router.navigate(['/404']);
            }
        });
    };
    AuthorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-list',
            template: __webpack_require__(/*! ./author-list.component.html */ "./src/app/author-list/author-list.component.html"),
            styles: [__webpack_require__(/*! ./author-list.component.scss */ "./src/app/author-list/author-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthorListComponent);
    return AuthorListComponent;
}());



/***/ }),

/***/ "./src/app/author-submit/author-submit.component.html":
/*!************************************************************!*\
  !*** ./src/app/author-submit/author-submit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"u-container\">\n  <h2 class=\"u-container__title\">Add New Author</h2>\n  <form class=\"author__form\">\n    <label for=\"author\">Author Name:</label>\n    <input \n      required\n      minlength='3'\n      name='author'\n      ngModel\n      #author=\"ngModel\"\n      [(ngModel)]=\"newAuthor.name\"\n      class=\"author__form--input\"\n      type=\"text\">\n\n    <button \n      (click)=\"onCreate()\"\n      class=\"btn-primary\"> Save Author\n    </button>\n  </form>\n  <div class=\"u-error\">\n    <p class=\"u-error__msg\">{{errors}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/author-submit/author-submit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/author-submit/author-submit.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvci1zdWJtaXQvYXV0aG9yLXN1Ym1pdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/author-submit/author-submit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/author-submit/author-submit.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorSubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorSubmitComponent", function() { return AuthorSubmitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorSubmitComponent = /** @class */ (function () {
    function AuthorSubmitComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.newAuthor = {
            name: ''
        };
        this.errors = '';
    }
    AuthorSubmitComponent.prototype.ngOnInit = function () {
    };
    AuthorSubmitComponent.prototype.onCreate = function () {
        var _this = this;
        if (this.newAuthor.name.length < 3) {
            this.errors = 'Author names must be longer than 3 characters';
            return;
        }
        this._http.createAuthor(this.newAuthor).subscribe(function (response) {
            if (response['status'] == 201) {
                return _this._router.navigate(['/']);
            }
            else if (response['status'] == 418) {
                _this.errors = response['errors'];
            }
            else {
                return _this._router.navigate(['/404']);
            }
        });
    };
    AuthorSubmitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-submit',
            template: __webpack_require__(/*! ./author-submit.component.html */ "./src/app/author-submit/author-submit.component.html"),
            styles: [__webpack_require__(/*! ./author-submit.component.scss */ "./src/app/author-submit/author-submit.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthorSubmitComponent);
    return AuthorSubmitComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ERROR 404: something went horribly wrong...\n\nAbandon hope!\n"

/***/ }),

/***/ "./src/app/error/error.component.scss":
/*!********************************************!*\
  !*** ./src/app/error/error.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllAuthor = function () { return this._http.get('/api/authors'); };
    HttpService.prototype.getAuthor = function (id) { return this._http.get('/api/authors/' + id); };
    HttpService.prototype.createAuthor = function (newAuthor) { return this._http.post('/api/authors', newAuthor); };
    HttpService.prototype.deleteAuthor = function (id) { return this._http.delete('/api/authors/' + id); };
    HttpService.prototype.editAuthor = function (id, editedAuthor) {
        return this._http.put('/api/authors/' + id, editedAuthor);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/quote-edit/quote-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-edit/quote-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  quote-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/quote-edit/quote-edit.component.scss":
/*!******************************************************!*\
  !*** ./src/app/quote-edit/quote-edit.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWVkaXQvcXVvdGUtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quote-edit/quote-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-edit/quote-edit.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteEditComponent", function() { return QuoteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteEditComponent = /** @class */ (function () {
    function QuoteEditComponent() {
    }
    QuoteEditComponent.prototype.ngOnInit = function () {
    };
    QuoteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-edit',
            template: __webpack_require__(/*! ./quote-edit.component.html */ "./src/app/quote-edit/quote-edit.component.html"),
            styles: [__webpack_require__(/*! ./quote-edit.component.scss */ "./src/app/quote-edit/quote-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteEditComponent);
    return QuoteEditComponent;
}());



/***/ }),

/***/ "./src/app/quote-list/quote-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-list/quote-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  quote-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/quote-list/quote-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/quote-list/quote-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWxpc3QvcXVvdGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quote-list/quote-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-list/quote-list.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteListComponent", function() { return QuoteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteListComponent = /** @class */ (function () {
    function QuoteListComponent() {
    }
    QuoteListComponent.prototype.ngOnInit = function () {
    };
    QuoteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-list',
            template: __webpack_require__(/*! ./quote-list.component.html */ "./src/app/quote-list/quote-list.component.html"),
            styles: [__webpack_require__(/*! ./quote-list.component.scss */ "./src/app/quote-list/quote-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteListComponent);
    return QuoteListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/prescott/Documents/code/coding_dojo/quote_ranks/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map