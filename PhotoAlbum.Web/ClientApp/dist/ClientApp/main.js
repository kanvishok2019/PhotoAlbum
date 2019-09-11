(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./photo-album/photo-album.module": [
		"./src/app/photo-album/photo-album.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _photo_album_photo_album_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-album/photo-album.module */ "./src/app/photo-album/photo-album.module.ts");




var routes = [
    {
        path: '',
        redirectTo: 'albumlist',
        pathMatch: 'full'
    }, {
        path: 'albumlist',
        loadChildren: './photo-album/photo-album.module#PhotoAlbumModule'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _photo_album_photo_album_module__WEBPACK_IMPORTED_MODULE_3__["PhotoAlbumModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<div class=\"layout\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout {\n  margin: 48px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxrYW52aXNob2tcXFBob3RvQWxidW1cXFBob3RvQWxidW0uV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXR7XHJcbiAgbWFyZ2luOjQ4cHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ClientApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/photo-album/album-list/album-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/photo-album/album-list/album-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n  <div fxFlex=\"250px\">\r\n    <mat-card class=\"album-list\">\r\n      <div *ngIf=\"paginatedAlbums\">\r\n        <div>\r\n          <form>\r\n            <mat-form-field #userId fxFlex>\r\n              <input matInput placeholder=\"Enter User Id to list album\" [formControl]=\"userIdControl\"\r\n                     [errorStateMatcher]=\"matcher\"\r\n                     value=\"1\"\r\n                     type=\"number\">\r\n              <mat-error *ngIf=\"userIdControl.hasError('required')\">\r\n                User id cannot be null\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </form>\r\n        </div>\r\n        <div *ngFor=\"let album of paginatedAlbums.albums\">\r\n          <span href=\"#\" (click)=\"setAlbum(album)\" class=\"album-title\">{{album.title}}</span>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"auto\">\r\n    <app-album [album]=\"currentAlbum\"></app-album>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/photo-album/album-list/album-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/photo-album/album-list/album-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".album-title {\n  padding-bottom: 16px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tYWxidW0vYWxidW0tbGlzdC9DOlxcUHJvamVjdHNcXGthbnZpc2hva1xcUGhvdG9BbGJ1bVxcUGhvdG9BbGJ1bS5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxccGhvdG8tYWxidW1cXGFsYnVtLWxpc3RcXGFsYnVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBbUI7RUFDbkIsZ0JBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLWFsYnVtL2FsYnVtLWxpc3QvYWxidW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bS10aXRsZSB7XHJcbiAgcGFkZGluZy1ib3R0b206MTZweDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/photo-album/album-list/album-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/photo-album/album-list/album-list.component.ts ***!
  \****************************************************************/
/*! exports provided: AlbumListComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumListComponent", function() { return AlbumListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photo_album_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo-album.service */ "./src/app/photo-album/photo-album.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AlbumListComponent = /** @class */ (function () {
    function AlbumListComponent(_photoAlbumService) {
        this._photoAlbumService = _photoAlbumService;
        this.userIdControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    AlbumListComponent.prototype.ngOnInit = function () {
        this.getAlbums();
    };
    AlbumListComponent.prototype.getAlbums = function () {
        var _this = this;
        this._photoAlbumService.getAlbums(1, 0, 5).subscribe(function (result) {
            if (result != null) {
                _this.paginatedAlbums = result;
                _this.currentAlbum = _this.paginatedAlbums.albums[0];
            }
        });
    };
    AlbumListComponent.prototype.setAlbum = function (album) {
        this.currentAlbum = album;
    };
    AlbumListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-album-list',
            template: __webpack_require__(/*! ./album-list.component.html */ "./src/app/photo-album/album-list/album-list.component.html"),
            styles: [__webpack_require__(/*! ./album-list.component.scss */ "./src/app/photo-album/album-list/album-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_photo_album_service__WEBPACK_IMPORTED_MODULE_2__["PhotoAlbumService"]])
    ], AlbumListComponent);
    return AlbumListComponent;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/photo-album/album/album.component.html":
/*!********************************************************!*\
  !*** ./src/app/photo-album/album/album.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"album\" class=\"album\">\r\n  <p>\r\n    {{album.title}}\r\n  </p>\r\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n    <div *ngFor=\"let photo of album.photos\">\r\n      <img [src]=\"photo.thumbnailUrl\" class=\"thumbnail\" (click)=\"showPhoto(photo.url)\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/photo-album/album/album.component.scss":
/*!********************************************************!*\
  !*** ./src/app/photo-album/album/album.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".album {\n  padding: 24px;\n  height: calc(100vh - 145px);\n  overflow: auto; }\n  .album .thumbnail {\n    border: solid 1px gray;\n    padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tYWxidW0vYWxidW0vQzpcXFByb2plY3RzXFxrYW52aXNob2tcXFBob3RvQWxidW1cXFBob3RvQWxidW0uV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXHBob3RvLWFsYnVtXFxhbGJ1bVxcYWxidW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsNEJBQTJCO0VBQzNCLGVBQWMsRUFNZjtFQVREO0lBTUksdUJBQXNCO0lBQ3RCLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLWFsYnVtL2FsYnVtL2FsYnVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsYnVtIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE0NXB4KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgLnRodW1ibmFpbCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmF5O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/photo-album/album/album.component.ts":
/*!******************************************************!*\
  !*** ./src/app/photo-album/album/album.component.ts ***!
  \******************************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo/photo.component */ "./src/app/photo-album/photo/photo.component.ts");




var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(dialog) {
        this.dialog = dialog;
    }
    AlbumComponent.prototype.ngOnInit = function () {
    };
    AlbumComponent.prototype.showPhoto = function (photoUrl) {
        this.dialog.open(_photo_photo_component__WEBPACK_IMPORTED_MODULE_3__["PhotoComponent"], {
            data: {
                photoUrl: photoUrl
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlbumComponent.prototype, "album", void 0);
    AlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-album',
            template: __webpack_require__(/*! ./album.component.html */ "./src/app/photo-album/album/album.component.html"),
            styles: [__webpack_require__(/*! ./album.component.scss */ "./src/app/photo-album/album/album.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AlbumComponent);
    return AlbumComponent;
}());



/***/ }),

/***/ "./src/app/photo-album/photo-album-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/photo-album/photo-album-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PhotoAlbumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoAlbumRoutingModule", function() { return PhotoAlbumRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _album_list_album_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album-list/album-list.component */ "./src/app/photo-album/album-list/album-list.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'albumlist',
        pathMatch: 'full'
    },
    {
        path: 'albumlist',
        component: _album_list_album_list_component__WEBPACK_IMPORTED_MODULE_3__["AlbumListComponent"],
        pathMatch: 'full'
    }
    //, {
    //  path: 'albums/details/:id',
    //  component: ProductDetailsComponent,
    //  pathMatch: 'full'
    //}
];
var PhotoAlbumRoutingModule = /** @class */ (function () {
    function PhotoAlbumRoutingModule() {
    }
    PhotoAlbumRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PhotoAlbumRoutingModule);
    return PhotoAlbumRoutingModule;
}());



/***/ }),

/***/ "./src/app/photo-album/photo-album.module.ts":
/*!***************************************************!*\
  !*** ./src/app/photo-album/photo-album.module.ts ***!
  \***************************************************/
/*! exports provided: PhotoAlbumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoAlbumModule", function() { return PhotoAlbumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _album_list_album_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album-list/album-list.component */ "./src/app/photo-album/album-list/album-list.component.ts");
/* harmony import */ var _photo_album_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-album-routing.module */ "./src/app/photo-album/photo-album-routing.module.ts");
/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.services */ "./src/app/services/api.services.ts");
/* harmony import */ var _photo_album_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photo-album.service */ "./src/app/photo-album/photo-album.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./album/album.component */ "./src/app/photo-album/album/album.component.ts");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./photo/photo.component */ "./src/app/photo-album/photo/photo.component.ts");














var PhotoAlbumModule = /** @class */ (function () {
    function PhotoAlbumModule() {
    }
    PhotoAlbumModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_album_list_album_list_component__WEBPACK_IMPORTED_MODULE_3__["AlbumListComponent"], _album_album_component__WEBPACK_IMPORTED_MODULE_12__["AlbumComponent"], _photo_photo_component__WEBPACK_IMPORTED_MODULE_13__["PhotoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _photo_album_routing_module__WEBPACK_IMPORTED_MODULE_4__["PhotoAlbumRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"]
            ],
            providers: [
                _services_api_services__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
                _photo_album_service__WEBPACK_IMPORTED_MODULE_6__["PhotoAlbumService"]
            ],
            entryComponents: [_photo_photo_component__WEBPACK_IMPORTED_MODULE_13__["PhotoComponent"]]
        })
    ], PhotoAlbumModule);
    return PhotoAlbumModule;
}());



/***/ }),

/***/ "./src/app/photo-album/photo-album.service.ts":
/*!****************************************************!*\
  !*** ./src/app/photo-album/photo-album.service.ts ***!
  \****************************************************/
/*! exports provided: PhotoAlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoAlbumService", function() { return PhotoAlbumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.services */ "./src/app/services/api.services.ts");




var PhotoAlbumService = /** @class */ (function () {
    function PhotoAlbumService(_apiService) {
        this._apiService = _apiService;
    }
    PhotoAlbumService.prototype.getAlbums = function (userId, pagenumber, itemsPerPage) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].albumApi.albums + "?" + 'userId=' + userId
            + "&" + 'pagenumber=' + pagenumber
            + "&" + 'itemsPerPage=' + itemsPerPage;
        return this._apiService.get(url);
    };
    PhotoAlbumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PhotoAlbumService);
    return PhotoAlbumService;
}());



/***/ }),

/***/ "./src/app/photo-album/photo/photo.component.html":
/*!********************************************************!*\
  !*** ./src/app/photo-album/photo/photo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"photo.photoUrl\" class=\"photo\"/>\r\n"

/***/ }),

/***/ "./src/app/photo-album/photo/photo.component.scss":
/*!********************************************************!*\
  !*** ./src/app/photo-album/photo/photo.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo {\n  height: 600px;\n  width: 600px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tYWxidW0vcGhvdG8vQzpcXFByb2plY3RzXFxrYW52aXNob2tcXFBob3RvQWxidW1cXFBob3RvQWxidW0uV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXHBob3RvLWFsYnVtXFxwaG90b1xccGhvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFZO0VBQ1osYUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvcGhvdG8tYWxidW0vcGhvdG8vcGhvdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG97XHJcbiAgaGVpZ2h0OjYwMHB4O1xyXG4gIHdpZHRoOjYwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/photo-album/photo/photo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/photo-album/photo/photo.component.ts ***!
  \******************************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var PhotoComponent = /** @class */ (function () {
    function PhotoComponent(photo) {
        this.photo = photo;
    }
    PhotoComponent.prototype.ngOnInit = function () {
        //console.log(this.photo.photoUrl);
    };
    PhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(/*! ./photo.component.html */ "./src/app/photo-album/photo/photo.component.html"),
            styles: [__webpack_require__(/*! ./photo.component.scss */ "./src/app/photo-album/photo/photo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/app/services/api.services.ts":
/*!******************************************!*\
  !*** ./src/app/services/api.services.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ApiService = /** @class */ (function () {
    function ApiService(_httpClient) {
        this._httpClient = _httpClient;
    }
    ApiService.prototype.get = function (url) {
        return this._httpClient.get(url);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
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
    production: false,
    albumApi: {
        albums: 'http://localhost:5000/api/album',
    }
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\kanvishok\PhotoAlbum\PhotoAlbum.Web\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map