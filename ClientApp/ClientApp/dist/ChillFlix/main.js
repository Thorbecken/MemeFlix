(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Modules/admin/admin.module": [
		"./src/app/Modules/admin/admin.module.ts",
		"Modules-admin-admin-module"
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
	return __webpack_require__.e(ids[1]).then(function() {
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

/***/ "./src/app/Modules/home/about-page/about-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Modules/home/about-page/about-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\ncolor: mediumvioletred\r\n}\r\n.red {\r\ncolor: red;\r\n}\r\n.italic {\r\n  font-style: italic;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxlcy9ob21lL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esc0JBQXNCO0NBQ3JCO0FBQ0Q7QUFDQSxXQUFXO0NBQ1Y7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvaG9tZS9hYm91dC1wYWdlL2Fib3V0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG5jb2xvcjogbWVkaXVtdmlvbGV0cmVkXHJcbn1cclxuLnJlZCB7XHJcbmNvbG9yOiByZWQ7XHJcbn1cclxuLml0YWxpYyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Modules/home/about-page/about-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Modules/home/about-page/about-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  This is the best body your damn eyes have ever seen!\r\n</p>\r\n<p>{{aboutText}}</p>\r\n<p>The variable red = {{red}}</p>\r\n\r\n<button (click)=\"onClick()\">Change colour</button>\r\n<p [ngClass]=\"red ? dynamicStyles: null\">\r\n  This color and font is dynamicly generated!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/Modules/home/about-page/about-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Modules/home/about-page/about-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
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

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
        this.aboutText = "";
        this.red = true;
        this.italic = true;
        this.dynamicStyles = {
            "red": this.red,
            "italic": this.italic
        };
    }
    AboutPageComponent.prototype.onClick = function () {
        console.log("Hello world");
        this.aboutText = "Hello world";
        if (this.red) {
            this.red = false;
        }
        else {
            this.red = true;
        }
    };
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/Modules/home/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/Modules/home/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/Modules/home/home-page/home-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Modules/home/home-page/home-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvaG9tZS9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Modules/home/home-page/home-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Modules/home/home-page/home-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h2>Here are some memes to help you get started: </h2>\r\n<input [(ngModel)]=\"searchRequest\" type=\"text\">\r\n<app-meme-player [parentData]=\"searchRequest\" [parentMemes]=\"memeReview\"></app-meme-player>-->\r\n<!--\r\n<app-meme-player [parentData]=\"searchRequest\" [parentMemes]=\"memes\"></app-meme-player>\r\n    -->\r\n"

/***/ }),

/***/ "./src/app/Modules/home/home-page/home-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Modules/home/home-page/home-page.component.ts ***!
  \***************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_meme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/meme.service */ "./src/app/services/meme.service.ts");
/* harmony import */ var _services_meme_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/meme-list.service */ "./src/app/services/meme-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(_memeService, _memeListService) {
        this._memeService = _memeService;
        this._memeListService = _memeListService;
        this.title = 'MemeFlix';
        this.searchRequest = "";
        this.memes = [];
        this.memeReview = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._memeService.getMemes()
            .subscribe(function (data) { return _this.memes = data; });
        this._memeListService.getMemePlaylist("MemeReview")
            .subscribe(function (data) { return _this.memeReview = data; });
    };
    HomePageComponent.prototype.ngAfterViewInit = function () {
    };
    HomePageComponent.prototype.ngOnDestroy = function () { };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/Modules/home/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/Modules/home/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_meme_service__WEBPACK_IMPORTED_MODULE_1__["MemeService"], _services_meme_list_service__WEBPACK_IMPORTED_MODULE_2__["MemeListService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/Modules/home/meme-player/meme-player.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Modules/home/meme-player/meme-player.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvaG9tZS9tZW1lLXBsYXllci9tZW1lLXBsYXllci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Modules/home/meme-player/meme-player.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Modules/home/meme-player/meme-player.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Your searchparameter is {{searchParameter}}\r\n</p>\r\n<div *ngFor=\"let meme of memes\">\r\n\r\n  <iframe width=\"560\" height=\"315\" [src]=\"getEmbeddedUrl(meme)\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Modules/home/meme-player/meme-player.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Modules/home/meme-player/meme-player.component.ts ***!
  \*******************************************************************/
/*! exports provided: MemePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemePlayerComponent", function() { return MemePlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemePlayerComponent = /** @class */ (function () {
    function MemePlayerComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MemePlayerComponent.prototype.ngOnInit = function () {
    };
    MemePlayerComponent.prototype.getEmbeddedUrl = function (meme) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + meme.url + "?ecver=2");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('parentData'),
        __metadata("design:type", Object)
    ], MemePlayerComponent.prototype, "searchParameter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('parentMemes'),
        __metadata("design:type", Object)
    ], MemePlayerComponent.prototype, "memes", void 0);
    MemePlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meme-player',
            template: __webpack_require__(/*! ./meme-player.component.html */ "./src/app/Modules/home/meme-player/meme-player.component.html"),
            styles: [__webpack_require__(/*! ./meme-player.component.css */ "./src/app/Modules/home/meme-player/meme-player.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], MemePlayerComponent);
    return MemePlayerComponent;
}());



/***/ }),

/***/ "./src/app/Modules/home/page-not-found/page-not-found.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Modules/home/page-not-found/page-not-found.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvaG9tZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Modules/home/page-not-found/page-not-found.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Modules/home/page-not-found/page-not-found.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Page not found</h3>\r\n<img src=\"https://1upstars.com/wp-content/uploads/2018/04/sorry.jpg\" />\r\n"

/***/ }),

/***/ "./src/app/Modules/home/page-not-found/page-not-found.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Modules/home/page-not-found/page-not-found.component.ts ***!
  \*************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/Modules/home/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/Modules/home/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/Modules/home/subscription-page/subscription-page.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Modules/home/subscription-page/subscription-page.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvaG9tZS9zdWJzY3JpcHRpb24tcGFnZS9zdWJzY3JpcHRpb24tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Modules/home/subscription-page/subscription-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Modules/home/subscription-page/subscription-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"https://i.ytimg.com/vi/f4EPf-UUngg/maxresdefault.jpg\">  <!-- Link to Hi stranger meme -->\r\n<p>\r\n  Hi stranger. I see you're also a fan of the dank memes. Please submit your name down below to subscribe to our services.\r\n</p>\r\n<input #name type=\"text\" [(ngModel)]=\"modelName\">\r\n<button (click)=\"submitName(name.value)\">Submit</button>\r\n<br />\r\n<img *ngIf=\"!nameIsSubmitted; Else oneOfUs\" src=\"https://media.makeameme.org/created/yes-join-us.jpg\">\r\n<ng-template #oneOfUs>\r\n  <h2 >\"Thank you {{modelName}} for submitting your name\"</h2>\r\n  <img *ngIf=\"nameIsSubmitted\" src=\"https://i.pinimg.com/originals/a1/e6/c4/a1e6c453a4061d491ba17a9f7055c343.jpg\" />\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/Modules/home/subscription-page/subscription-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Modules/home/subscription-page/subscription-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SubscriptionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageComponent", function() { return SubscriptionPageComponent; });
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

var SubscriptionPageComponent = /** @class */ (function () {
    function SubscriptionPageComponent() {
        this.submittedName = "";
        this.nameIsSubmitted = false;
        this.welcomeText = "";
    }
    SubscriptionPageComponent.prototype.submitName = function (value) {
        this.submittedName = value;
        this.welcomeText = "Thank you " + this.submittedName + " for submitting your name";
        this.nameIsSubmitted = true;
    };
    SubscriptionPageComponent.prototype.ngOnInit = function () {
    };
    SubscriptionPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscription-page',
            template: __webpack_require__(/*! ./subscription-page.component.html */ "./src/app/Modules/home/subscription-page/subscription-page.component.html"),
            styles: [__webpack_require__(/*! ./subscription-page.component.css */ "./src/app/Modules/home/subscription-page/subscription-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscriptionPageComponent);
    return SubscriptionPageComponent;
}());



/***/ }),

/***/ "./src/app/Modules/home/welcome-page/welcome-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Modules/home/welcome-page/welcome-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvaG9tZS93ZWxjb21lLXBhZ2Uvd2VsY29tZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Modules/home/welcome-page/welcome-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Modules/home/welcome-page/welcome-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\" class=\"jumbotron\">\r\n  <h1>\r\n    Welcome to MemeFlix!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/jpeg;base64,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\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Modules/home/welcome-page/welcome-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Modules/home/welcome-page/welcome-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
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

var WelcomePageComponent = /** @class */ (function () {
    function WelcomePageComponent() {
    }
    WelcomePageComponent.prototype.ngOnInit = function () {
    };
    WelcomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome-page',
            template: __webpack_require__(/*! ./welcome-page.component.html */ "./src/app/Modules/home/welcome-page/welcome-page.component.html"),
            styles: [__webpack_require__(/*! ./welcome-page.component.css */ "./src/app/Modules/home/welcome-page/welcome-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomePageComponent);
    return WelcomePageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponent", function() { return routingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Modules_home_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/home/about-page/about-page.component */ "./src/app/Modules/home/about-page/about-page.component.ts");
/* harmony import */ var _Modules_home_subscription_page_subscription_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/home/subscription-page/subscription-page.component */ "./src/app/Modules/home/subscription-page/subscription-page.component.ts");
/* harmony import */ var _Modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/home/home-page/home-page.component */ "./src/app/Modules/home/home-page/home-page.component.ts");
/* harmony import */ var _Modules_home_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/home/page-not-found/page-not-found.component */ "./src/app/Modules/home/page-not-found/page-not-found.component.ts");
/* harmony import */ var _Modules_home_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/home/welcome-page/welcome-page.component */ "./src/app/Modules/home/welcome-page/welcome-page.component.ts");
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ "./src/app/services/admin-auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ADMIN_ROLE = 'Admin';
var routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: _Modules_home_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]
    },
    {
        path: 'subscription',
        component: _Modules_home_subscription_page_subscription_page_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionPageComponent"]
    },
    {
        path: 'home',
        component: _Modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
    },
    {
        path: 'admin',
        loadChildren: './Modules/admin/admin.module#AdminModule',
        canActivate: [_services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuardService"]],
        data: {
            expectedRole: ADMIN_ROLE
        }
    },
    {
        path: 'welcome',
        component: _Modules_home_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_6__["WelcomePageComponent"]
    },
    {
        path: '**',
        component: _Modules_home_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponent = [_Modules_home_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  color: mediumvioletred;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGNvbG9yOiBtZWRpdW12aW9sZXRyZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<base href=\"/\">\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">MemeFlix</a>\r\n  <div class=\"collapse navbar-collapse\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"nav-item active\">\r\n        <a routerLink=\"/about\" routerLinkActive=\"active\" class=\"nav-link\">About</a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a routerLink=\"/subscription\" routerLinkActive=\"active\" class=\"nav-link\">Subscription</a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-link\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a routerLink=\"/admin\" routerLinkActive=\"active\" class=\"nav-link\">Admin</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Modules_home_subscription_page_subscription_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/home/subscription-page/subscription-page.component */ "./src/app/Modules/home/subscription-page/subscription-page.component.ts");
/* harmony import */ var _Modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/home/home-page/home-page.component */ "./src/app/Modules/home/home-page/home-page.component.ts");
/* harmony import */ var _Modules_home_meme_player_meme_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/home/meme-player/meme-player.component */ "./src/app/Modules/home/meme-player/meme-player.component.ts");
/* harmony import */ var _services_meme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/meme.service */ "./src/app/services/meme.service.ts");
/* harmony import */ var _Modules_home_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modules/home/page-not-found/page-not-found.component */ "./src/app/Modules/home/page-not-found/page-not-found.component.ts");
/* harmony import */ var _Modules_home_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modules/home/welcome-page/welcome-page.component */ "./src/app/Modules/home/welcome-page/welcome-page.component.ts");
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ "./src/app/services/admin-auth-guard.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponent"],
                _Modules_home_subscription_page_subscription_page_component__WEBPACK_IMPORTED_MODULE_6__["SubscriptionPageComponent"],
                _Modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _Modules_home_meme_player_meme_player_component__WEBPACK_IMPORTED_MODULE_8__["MemePlayerComponent"],
                _Modules_home_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _Modules_home_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_11__["WelcomePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [
                _services_meme_service__WEBPACK_IMPORTED_MODULE_9__["MemeService"],
                _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AdminAuthGuardService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/admin-auth-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/admin-auth-guard.service.ts ***!
  \******************************************************/
/*! exports provided: AdminAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function() { return AdminAuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminAuthGuardService = /** @class */ (function () {
    function AdminAuthGuardService() {
    }
    AdminAuthGuardService.prototype.canActivate = function (route) {
        var userRole = 'Admin'; // instert JWT token decryper here!
        if (route.data.excpectedRole === userRole) {
            return true;
        }
        else {
            return false;
        }
    };
    AdminAuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AdminAuthGuardService);
    return AdminAuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/meme-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/meme-list.service.ts ***!
  \***********************************************/
/*! exports provided: MemeListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemeListService", function() { return MemeListService; });
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


var MemeListService = /** @class */ (function () {
    function MemeListService(http) {
        this.http = http;
    }
    MemeListService.prototype.getMemePlaylist = function (playList) {
        return this.http.get('https://localhost:44333/api/EmbeddedVideo/MemePlayList?playList=' + playList);
    };
    MemeListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemeListService);
    return MemeListService;
}());



/***/ }),

/***/ "./src/app/services/meme.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/meme.service.ts ***!
  \******************************************/
/*! exports provided: MemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemeService", function() { return MemeService; });
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


var MemeService = /** @class */ (function () {
    function MemeService(http) {
        this.http = http;
    }
    MemeService.prototype.getMemes = function () {
        return this.http.get('https://localhost:44333/api/EmbeddedVideo/Memes');
    };
    MemeService.prototype.postMeme = function (meme) {
        console.log(meme);
        this.http.post('https://localhost:44333/api/Memes', meme).subscribe(function (x) { return console.log('Observer got a next value: ' + x); }, function (err) { return console.error('Observer got an error: ' + err); }, function () { return console.log('Observer got a complete notification'); });
    };
    MemeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemeService);
    return MemeService;
}());

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};


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

module.exports = __webpack_require__(/*! C:\Users\Alfdaur\Desktop\Yacht\testrun\MemeFlix\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map