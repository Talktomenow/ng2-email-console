webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-email-form></app-email-form>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_form_email_form_component__ = __webpack_require__("../../../../../src/app/email-form/email-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_spinner__ = __webpack_require__("../../../../angular2-spinner/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dao_email_service__ = __webpack_require__("../../../../../src/app/dao/email-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 // this is needed!


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__email_form_email_form_component__["a" /* EmailFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_chips__["TagInputModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_spinner__["SpinnerModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__dao_email_service__["a" /* EmailService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dao/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__("../../../../apollo-client/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("../../../../apollo-link-http/lib/httpLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__ = __webpack_require__("../../../../apollo-cache-inmemory/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




var client = new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["a" /* ApolloClient */]({
    link: new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["a" /* HttpLink */]({ uri: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl }),
    cache: new __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__["a" /* InMemoryCache */]()
});


/***/ }),

/***/ "../../../../../src/app/dao/email-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dao_client__ = __webpack_require__("../../../../../src/app/dao/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("../../../../graphql-tag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (email) {
        var from = email.from, to = email.to, title = email.title, body = email.body, bcc = email.bcc, cc = email.cc;
        return __WEBPACK_IMPORTED_MODULE_1__dao_client__["a" /* client */].mutate({
            mutation: (_a = ["\n        mutation  {\n         sendEmail(Email:{\n         from:\"", "\",\n         to:\"", "\",\n         body:\"", "\",\n         title:\"", "\",\n         cc:", ",\n         bcc:", "\n         })\n         {\n         from,\n         status\n         }\n         }\n        "], _a.raw = ["\n        mutation  {\n         sendEmail(Email:{\n         from:\"", "\",\n         to:\"", "\",\n         body:\"", "\",\n         title:\"", "\",\n         cc:", ",\n         bcc:", "\n         })\n         {\n         from,\n         status\n         }\n         }\n        "], __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_a, from, to, body, title, cc.length != 0 ? cc.length : "[]", bcc.length != 0 ? bcc.length : "[]")),
            variables: { from: from, to: to, title: title, body: body, bcc: bcc, cc: cc },
        });
        var _a;
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "../../../../../src/app/email-form/email-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n    font-size: 13px;\n    color: rgb(199, 37, 78);\n    background: rgb(249, 242, 244);\n    border-radius: 3px;\n    padding: 10px;\n    margin: -15px 0px 15px;\n}\n.success {\n    font-size: 13px;\n    color: #FFF;\n    background: #5cb85c;\n    border-radius: 3px;\n    padding: 10px;\n    margin: -15px 0px 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-form/email-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>Send An Email</h3>\n    <div>\n      <div class=\"form-group\">\n        <label for=\"from\">From</label>\n        <input type=\"email\" class=\"form-control\" id=\"from\"\n       required\n       [(ngModel)]=\"model.from\" name=\"from\">\n      </div>\n      <div class=\"error\" *ngIf=\"!validEmailPattern.test(model.from)\">\n             Please provide an email address\n      </div>\n      <div class=\"form-group form-inline\">\n        <label for=\"to\">To</label>\n       <tag-input [(ngModel)]=\"model.to\"\n       [ngModelOptions]=\"{standalone: true}\"\n       [validators]=\"[emailValidate]\"\n       [modelAsStrings]=\"true\"\n       secondaryPlaceholder=\"'Enter' to confirm email\" placeholder=\"'Enter' to confirm email\"\n       theme='bootstrap'\n        name=\"to\"></tag-input>\n      </div>\n      <div class=\"error\" *ngIf=\"model.to.length==0\">\n             Must have at least one email address\n      </div>\n\n     <div class=\"form-group\">\n        <button (click)=\"showCCs = !showCCs\">CCs</button>\n         <tag-input *ngIf=\"showCCs\" [(ngModel)]=\"model.cc\"\n       [ngModelOptions]=\"{standalone: true}\"\n       [validators]=\"[emailValidate]\"\n       [modelAsStrings]=\"true\"\n        secondaryPlaceholder=\"'Enter' to confirm email\" placeholder=\"'Enter' to confirm email\"\n        theme='bootstrap'\n        ></tag-input>\n      </div>\n\n      <div class=\"form-group\">\n        <button (click)=\"showBCCs = !showBCCs\">BCCs</button>\n       <tag-input *ngIf=\"showBCCs\" [(ngModel)]=\"model.bcc\"\n       [ngModelOptions]=\"{standalone: true}\"\n       [validators]=\"[emailValidate]\"\n       [modelAsStrings]=\"true\"\n       secondaryPlaceholder=\"'Enter' to confirm email\" placeholder=\"'Enter' to confirm email\"\n       theme='bootstrap'\n        name=\"bcc\"></tag-input>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" [(ngModel)]=\"model.title\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"title\">Body</label>\n        <textarea type=\"text\" class=\"form-control\" id=\"body\" [(ngModel)]=\"model.body\"\n        rows=\"10\" cols=\"30\">\n          </textarea>\n      </div>\n\n      <div class=\"error\" *ngIf=\"state.failedResult\">\n            {{state.failedResult}}\n      </div>\n      <div class=\"success\" *ngIf=\"state.okResult\">\n            {{state.okResult}}\n      </div>\n    <button type=\"submit\" style=\"width:-webkit-fill-available\"\n      [disabled]=\"!validated() || state.submit=='submitting'\"\n      class=\"btn btn-success\"\n      (click)=\"onSubmit(model)\">\n      {{state.submit=='submitting'?'Submitting...':'Submit'}}<spinner  [size]=\"10\" *ngIf=\"this.state.submit=='submitting'\" [tickness]=\"1\" ></spinner>\n    </button>\n    <button type=\"reset\" style=\"width:-webkit-fill-available\"\n    [disabled]=\"state.submit=='submitting'\"\n    class=\"btn btn-default\"\n    (click)=\"onReset()\">\n    Reset\n    </button>\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-form/email-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_email__ = __webpack_require__("../../../../../src/app/model/email.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dao_email_service__ = __webpack_require__("../../../../../src/app/dao/email-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailFormComponent = (function () {
    function EmailFormComponent() {
        this.validEmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log("init EmailFormComponent");
        this.emailService = new __WEBPACK_IMPORTED_MODULE_2__dao_email_service__["a" /* EmailService */]();
    }
    EmailFormComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__model_email__["a" /* Email */]("", [], "", "", [], []);
        this.state = {
            submit: null,
            failedResult: null,
            okResult: null
        };
    };
    EmailFormComponent.prototype.validated = function () {
        return this.validEmailPattern.test(this.model.from) && this.model.to.length != 0;
    };
    EmailFormComponent.prototype.onReset = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__model_email__["a" /* Email */]("", [], "", "", [], []);
    };
    EmailFormComponent.prototype.onItemAdded = function (item) {
        console.log(item);
    };
    EmailFormComponent.prototype.emailValidate = function (control) {
        var validEmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!validEmailPattern.test(control.value)) {
            return {
                'emailValidate@': true
            };
        }
        return null;
    };
    EmailFormComponent.prototype.onRemove = function ($event) {
        console.log($event);
    };
    EmailFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model);
        this.state.submit = "submitting";
        return this.emailService.sendEmail(this.model)
            .then(function (data) {
            _this.state.submit = "success";
            console.log(data);
            _this.state.okResult = data.data.sendEmail.status == 'queued' ? 'sent succesfully!' : data.data.sendEmail.status;
            setTimeout(function () { return _this.state.okResult = null; }, 5000);
            return new Promise(function (resolve, reject) {
                resolve(); //hacky for unit test
            });
        })
            .catch(function (error) {
            _this.state.submit = "failed";
            console.log(error);
            _this.state.failedResult = error.message;
            setTimeout(function () { return _this.state.failedResult = null; }, 5000);
            return new Promise(function (resolve, reject) {
                resolve(); //hacky for unit test
            });
        });
    };
    EmailFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-form',
            template: __webpack_require__("../../../../../src/app/email-form/email-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-form/email-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailFormComponent);
    return EmailFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/email.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Email; });
var Email = (function () {
    function Email(from, to, body, title, cc, bcc) {
        this.from = from;
        this.to = to;
        this.body = body;
        this.title = title;
        this.cc = cc;
        this.bcc = bcc;
    }
    return Email;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://sesame.hicp.net/graphql'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);