(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic/angular'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-ionic-image-viewer', ['exports', '@angular/core', '@ionic/angular', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-ionic-image-viewer'] = {}, global.ng.core, global['@ionic/angular'], global.ng.common));
}(this, (function (exports, core, angular, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxIonicImageViewerService = /** @class */ (function () {
        function NgxIonicImageViewerService() {
        }
        NgxIonicImageViewerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxIonicImageViewerService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxIonicImageViewerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxIonicImageViewerService_Factory() { return new NgxIonicImageViewerService(); }, token: NgxIonicImageViewerService, providedIn: "root" });
        return NgxIonicImageViewerService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/viewer-modal/viewer-modal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewerModalComponent = /** @class */ (function () {
        function ViewerModalComponent(modalController) {
            this.modalController = modalController;
            // tslint:disable: no-inferrable-types
            this.alt = '';
            this.scheme = 'auto';
            this.slideOptions = {};
            this.srcFallback = '';
            this.srcHighRes = '';
            this.swipeToClose = true;
            this.text = '';
            this.title = '';
            this.titleSize = '';
            // tslint:enable: no-inferrable-types
            this.defaultSlideOptions = {
                centeredSlides: true,
                passiveListeners: false,
                zoom: {
                    enabled: true,
                },
            };
            this.options = {};
            this.swipeState = {
                phase: 'init',
                direction: 'none',
                swipeType: 'none',
                startX: 0,
                startY: 0,
                distance: 0,
                distanceX: 0,
                distanceY: 0,
                threshold: 150,
                // required min distance traveled to be considered swipe
                restraint: 100,
                // maximum distance allowed at the same time in perpendicular direction
                allowedTime: 500,
                // maximum time allowed to travel that distance
                elapsedTime: 0,
                startTime: 0,
            };
        }
        /**
         * @return {?}
         */
        ViewerModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var swiper;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.options = __assign({}, this.defaultSlideOptions, this.slideOptions);
                            this.src = this.srcHighRes || this.src;
                            this.setStyle();
                            this.setScheme(this.scheme);
                            this.initSwipeToClose(this.swipeToClose);
                            return [4 /*yield*/, this.slides.getSwiper()];
                        case 1:
                            swiper = _a.sent();
                            swiper.appendSlide("<ion-slide><img alt=\"" + this.alt + "\" src=\"" + this.src + "\" onerror=\"this.src='" + this.srcFallback + "'\"/></ion-slide>");
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        ViewerModalComponent.prototype.setStyle = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var el = document.querySelector('.ion-img-viewer');
            el.style.setProperty('--height', '100%');
            el.style.setProperty('--width', '100%');
            el.style.setProperty('--border-radius', '0');
        };
        /**
         * @param {?} scheme
         * @return {?}
         */
        ViewerModalComponent.prototype.setScheme = /**
         * @param {?} scheme
         * @return {?}
         */
        function (scheme) {
            if (scheme === 'auto') {
                return;
            }
            /** @type {?} */
            var el = document.querySelector('.ion-img-viewer');
            if (this.scheme === 'light') {
                el.style.setProperty('--ion-background-color', '#ffffff');
                el.style.setProperty('--ion-background-color-rgb', '255, 255, 255');
                el.style.setProperty('--ion-text-color', '#000');
                el.style.setProperty('--ion-text-color-rgb', '0,0,0');
            }
            if (this.scheme === 'dark') {
                if (el.classList.contains('ios')) {
                    el.style.setProperty('--ion-background-color', '#000000');
                    el.style.setProperty('--ion-background-color-rgb', '0, 0, 0');
                }
                else {
                    el.style.setProperty('--ion-background-color', '#121212');
                    el.style.setProperty('--ion-background-color-rgb', '18,18,18');
                }
                el.style.setProperty('--ion-text-color', '#ffffff');
                el.style.setProperty('--ion-text-color-rgb', '255,255,255');
            }
        };
        /**
         * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
         */
        /**
         * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
         * @param {?=} isActive
         * @return {?}
         */
        ViewerModalComponent.prototype.initSwipeToClose = /**
         * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
         * @param {?=} isActive
         * @return {?}
         */
        function (isActive) {
            var _this = this;
            if (isActive === void 0) { isActive = true; }
            if (!isActive) {
                return;
            }
            /** @type {?} */
            var el = document.querySelector('ion-modal');
            el.addEventListener('mousedown', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.swipeStart(event); }), true);
            el.addEventListener('mousemove', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.swipeMove(event); }), true);
            el.addEventListener('mouseup', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.swipeEnd(event); }), true);
            el.addEventListener('touchstart', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.swipeStart(event); }), true);
            el.addEventListener('touchmove', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.swipeMove(event); }), true);
            el.addEventListener('touchend', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.swipeEnd(event); }), true);
            this.modalController.getTop().then((/**
             * @param {?} modal
             * @return {?}
             */
            function (modal) {
                modal.onWillDismiss().then((/**
                 * @return {?}
                 */
                function () {
                    document.removeEventListener('mousedown', _this.swipeStart, true);
                    document.removeEventListener('mousemove', _this.swipeMove, true);
                    document.removeEventListener('mouseup', _this.swipeMove, true);
                    document.removeEventListener('touchstart', _this.swipeStart, true);
                    document.removeEventListener('touchmove', _this.swipeMove, true);
                    document.removeEventListener('touchend', _this.swipeMove, true);
                }));
            }));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        ViewerModalComponent.prototype.swipeStart = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _a = event.type === 'touchstart' ? event.changedTouches[0] : event, pageX = _a.pageX, pageY = _a.pageY;
            this.swipeState = __assign({}, this.swipeState, { phase: 'start', direction: 'none', distance: 0, startX: pageX, startY: pageY, startTime: new Date().getTime() });
        };
        /**
         * @param {?} event
         * @return {?}
         */
        ViewerModalComponent.prototype.swipeMove = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.swipeState.phase === 'none') {
                return;
            }
            var _a = event.type === 'touchmove' ? event.changedTouches[0] : event, pageX = _a.pageX, pageY = _a.pageY;
            // get horizontal dist traveled by finger while in contact with surface
            /** @type {?} */
            var distanceX = pageX - this.swipeState.startX;
            // get vertical dist traveled by finger while in contact with surface
            /** @type {?} */
            var distanceY = pageY - this.swipeState.startY;
            /** @type {?} */
            var direction;
            /** @type {?} */
            var distance;
            if (Math.abs(distanceX) > Math.abs(distanceY)) {
                // if distance traveled horizontally is greater than vertically, consider this a horizontal swipe
                direction = distanceX < 0 ? 'left' : 'right';
                distance = distanceX;
            }
            else {
                // else consider this a vertical swipe
                direction = distanceY < 0 ? 'up' : 'down';
                distance = distanceY;
            }
            this.swipeState = __assign({}, this.swipeState, { phase: 'move', direction: direction,
                distance: distance,
                distanceX: distanceX,
                distanceY: distanceY });
            event.preventDefault();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        ViewerModalComponent.prototype.swipeEnd = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.swipeState.phase === 'none') {
                return;
            }
            var _a = this.swipeState, allowedTime = _a.allowedTime, direction = _a.direction, restraint = _a.restraint, startTime = _a.startTime, threshold = _a.threshold, distanceX = _a.distanceX, distanceY = _a.distanceY;
            /** @type {?} */
            var swipeType;
            /** @type {?} */
            var elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime <= allowedTime) {
                // first condition for a swipe met
                if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
                    // 2nd condition for horizontal swipe met
                    swipeType = direction; // set swipeType to either "left" or "right"
                }
                else if (Math.abs(distanceY) >= threshold && Math.abs(distanceX) <= restraint) {
                    // 2nd condition for vertical swipe met
                    swipeType = direction; // set swipeType to either "top" or "down"
                }
            }
            this.swipeState = __assign({}, this.swipeState, { phase: 'end', swipeType: swipeType });
            if (swipeType === 'down') {
                return this.closeModal();
            }
        };
        /**
         * @return {?}
         */
        ViewerModalComponent.prototype.closeModal = /**
         * @return {?}
         */
        function () {
            this.modalController.dismiss();
        };
        /**
         * @return {?}
         */
        ViewerModalComponent.prototype.downloadClicked = /**
         * @return {?}
         */
        function () {
            this.callbackFunction();
        };
        ViewerModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ion-viewer-modal',
                        template: "<ion-header [ngClass]=\"{ 'no-title': title.length <= 0 }\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"downloadClicked()\" *ngIf=\"callbackFunction\">\n        <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title [size]=\"titleSize\">{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\">\n  <ion-slides [options]=\"options\" #sliderRef>\n    <!-- <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [alt]=\"this.alt\" [src]=\"this.src\" (error)=\"onError($event)\" />\n      </div>\n    </ion-slide> -->\n  </ion-slides>\n</ion-content>\n\n<ion-footer [ngClass]=\"{ 'no-text': text.length <= 0 }\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-text>{{ text }}</ion-text>\n  </ion-toolbar>\n</ion-footer>\n",
                        styles: ["ion-slides{--height:100%;height:100%}ion-toolbar{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header{opacity:1;position:absolute}ion-header.no-title:after{content:none}ion-header.no-title ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer{position:absolute;bottom:0}ion-footer.no-text:before{content:none}ion-footer.no-text ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
                    }] }
        ];
        /** @nocollapse */
        ViewerModalComponent.ctorParameters = function () { return [
            { type: angular.ModalController }
        ]; };
        ViewerModalComponent.propDecorators = {
            alt: [{ type: core.Input }],
            scheme: [{ type: core.Input }],
            slideOptions: [{ type: core.Input }],
            src: [{ type: core.Input }],
            srcFallback: [{ type: core.Input }],
            srcHighRes: [{ type: core.Input }],
            swipeToClose: [{ type: core.Input }],
            text: [{ type: core.Input }],
            title: [{ type: core.Input }],
            titleSize: [{ type: core.Input }],
            callbackFunction: [{ type: core.Input }],
            slides: [{ type: core.ViewChild, args: ['sliderRef', { static: true },] }]
        };
        return ViewerModalComponent;
    }());
    if (false) {
        /** @type {?} */
        ViewerModalComponent.prototype.alt;
        /** @type {?} */
        ViewerModalComponent.prototype.scheme;
        /** @type {?} */
        ViewerModalComponent.prototype.slideOptions;
        /** @type {?} */
        ViewerModalComponent.prototype.src;
        /** @type {?} */
        ViewerModalComponent.prototype.srcFallback;
        /** @type {?} */
        ViewerModalComponent.prototype.srcHighRes;
        /** @type {?} */
        ViewerModalComponent.prototype.swipeToClose;
        /** @type {?} */
        ViewerModalComponent.prototype.text;
        /** @type {?} */
        ViewerModalComponent.prototype.title;
        /** @type {?} */
        ViewerModalComponent.prototype.titleSize;
        /** @type {?} */
        ViewerModalComponent.prototype.callbackFunction;
        /** @type {?} */
        ViewerModalComponent.prototype.defaultSlideOptions;
        /** @type {?} */
        ViewerModalComponent.prototype.options;
        /** @type {?} */
        ViewerModalComponent.prototype.swipeState;
        /** @type {?} */
        ViewerModalComponent.prototype.slides;
        /**
         * @type {?}
         * @private
         */
        ViewerModalComponent.prototype.modalController;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxIonicImageViewerComponent = /** @class */ (function () {
        function NgxIonicImageViewerComponent(modalController) {
            this.modalController = modalController;
        }
        /**
         * @param {?} src
         * @param {?=} srcFallback
         * @param {?=} srcHighRes
         * @param {?=} title
         * @param {?=} titleSize
         * @param {?=} text
         * @param {?=} scheme
         * @param {?=} slideOptions
         * @param {?=} swipeToClose
         * @return {?}
         */
        NgxIonicImageViewerComponent.prototype.viewImage = /**
         * @param {?} src
         * @param {?=} srcFallback
         * @param {?=} srcHighRes
         * @param {?=} title
         * @param {?=} titleSize
         * @param {?=} text
         * @param {?=} scheme
         * @param {?=} slideOptions
         * @param {?=} swipeToClose
         * @return {?}
         */
        function (src, srcFallback, srcHighRes, title, titleSize, text, scheme, slideOptions, swipeToClose) {
            if (srcFallback === void 0) { srcFallback = ''; }
            if (srcHighRes === void 0) { srcHighRes = ''; }
            if (title === void 0) { title = ''; }
            if (titleSize === void 0) { titleSize = ''; }
            if (text === void 0) { text = ''; }
            if (scheme === void 0) { scheme = 'auto'; }
            if (slideOptions === void 0) { slideOptions = {}; }
            if (swipeToClose === void 0) { swipeToClose = true; }
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalController.create({
                                component: ViewerModalComponent,
                                componentProps: {
                                    src: src,
                                    srcFallback: srcFallback,
                                    srcHighRes: srcHighRes,
                                    title: title,
                                    titleSize: titleSize,
                                    text: text,
                                    scheme: scheme,
                                    slideOptions: slideOptions,
                                    swipeToClose: swipeToClose
                                },
                                cssClass: this.cssClass instanceof Array ? __spread(['ion-img-viewer'], this.cssClass) : ['ion-img-viewer', this.cssClass],
                                keyboardClose: true,
                                showBackdrop: true
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        NgxIonicImageViewerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        NgxIonicImageViewerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ion-img-viewer',
                        template: "<img\n  [alt]=\"alt\"\n  [src]=\"src\"\n  (click)=\"viewImage(src, srcFallback, srcHighRes, title, titleSize, text, scheme, slideOptions, swipeToClose)\"\n  (error)=\"src = srcFallback\"\n/>\n",
                        encapsulation: core.ViewEncapsulation.Emulated,
                        styles: ["\n      :host {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NgxIonicImageViewerComponent.ctorParameters = function () { return [
            { type: angular.ModalController }
        ]; };
        NgxIonicImageViewerComponent.propDecorators = {
            alt: [{ type: core.Input }],
            cssClass: [{ type: core.Input }],
            scheme: [{ type: core.Input }],
            slideOptions: [{ type: core.Input }],
            src: [{ type: core.Input }],
            srcFallback: [{ type: core.Input }],
            srcHighRes: [{ type: core.Input }],
            swipeToClose: [{ type: core.Input }],
            text: [{ type: core.Input }],
            title: [{ type: core.Input }],
            titleSize: [{ type: core.Input }]
        };
        return NgxIonicImageViewerComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.alt;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.cssClass;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.scheme;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.slideOptions;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.src;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.srcFallback;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.srcHighRes;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.swipeToClose;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.text;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.title;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.titleSize;
        /** @type {?} */
        NgxIonicImageViewerComponent.prototype.modalController;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxIonicImageViewerDirective = /** @class */ (function () {
        function NgxIonicImageViewerDirective(el, renderer, modalController) {
            this.el = el;
            this.renderer = renderer;
            this.modalController = modalController;
        }
        /**
         * @return {?}
         */
        NgxIonicImageViewerDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this.viewImage(this.src, this.srcFallback, this.srcHighRes, this.title, this.titleSize, this.text, this.scheme, this.slideOptions, this.swipeToClose);
        };
        /**
         * @param {?} error
         * @return {?}
         */
        NgxIonicImageViewerDirective.prototype.onError = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (this.src !== this.el.nativeElement.src) {
                this.src = this.el.nativeElement.src;
            }
            if (this.srcFallback) {
                this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
            }
        };
        /**
         * @return {?}
         */
        NgxIonicImageViewerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.el.nativeElement.hasAttribute('src')) {
                this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
            }
        };
        /**
         * @param {?} src
         * @param {?=} srcFallback
         * @param {?=} srcHighRes
         * @param {?=} title
         * @param {?=} titleSize
         * @param {?=} text
         * @param {?=} scheme
         * @param {?=} slideOptions
         * @param {?=} swipeToClose
         * @return {?}
         */
        NgxIonicImageViewerDirective.prototype.viewImage = /**
         * @param {?} src
         * @param {?=} srcFallback
         * @param {?=} srcHighRes
         * @param {?=} title
         * @param {?=} titleSize
         * @param {?=} text
         * @param {?=} scheme
         * @param {?=} slideOptions
         * @param {?=} swipeToClose
         * @return {?}
         */
        function (src, srcFallback, srcHighRes, title, titleSize, text, scheme, slideOptions, swipeToClose) {
            if (srcFallback === void 0) { srcFallback = ''; }
            if (srcHighRes === void 0) { srcHighRes = ''; }
            if (title === void 0) { title = ''; }
            if (titleSize === void 0) { titleSize = ''; }
            if (text === void 0) { text = ''; }
            if (scheme === void 0) { scheme = 'auto'; }
            if (slideOptions === void 0) { slideOptions = {}; }
            if (swipeToClose === void 0) { swipeToClose = true; }
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalController.create({
                                component: ViewerModalComponent,
                                componentProps: {
                                    src: src,
                                    srcFallback: srcFallback,
                                    srcHighRes: srcHighRes,
                                    title: title,
                                    titleSize: titleSize,
                                    text: text,
                                    scheme: scheme,
                                    slideOptions: slideOptions,
                                    swipeToClose: swipeToClose
                                },
                                cssClass: this.cssClass instanceof Array ? __spread(['ion-img-viewer'], this.cssClass) : ['ion-img-viewer', this.cssClass],
                                keyboardClose: true,
                                showBackdrop: true
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        NgxIonicImageViewerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ionImgViewer]'
                    },] }
        ];
        /** @nocollapse */
        NgxIonicImageViewerDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: angular.ModalController }
        ]; };
        NgxIonicImageViewerDirective.propDecorators = {
            cssClass: [{ type: core.Input }],
            scheme: [{ type: core.Input }],
            slideOptions: [{ type: core.Input }],
            src: [{ type: core.Input }],
            srcFallback: [{ type: core.Input }],
            srcHighRes: [{ type: core.Input }],
            swipeToClose: [{ type: core.Input }],
            text: [{ type: core.Input }],
            title: [{ type: core.Input }],
            titleSize: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click',] }],
            onError: [{ type: core.HostListener, args: ['error', ['$event'],] }]
        };
        return NgxIonicImageViewerDirective;
    }());
    if (false) {
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.cssClass;
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.scheme;
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.slideOptions;
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.src;
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.srcFallback;
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.srcHighRes;
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.swipeToClose;
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.text;
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.title;
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.titleSize;
        /**
         * @type {?}
         * @private
         */
        NgxIonicImageViewerDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NgxIonicImageViewerDirective.prototype.renderer;
        /** @type {?} */
        NgxIonicImageViewerDirective.prototype.modalController;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxIonicImageViewerModule = /** @class */ (function () {
        function NgxIonicImageViewerModule() {
        }
        NgxIonicImageViewerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent],
                        imports: [common.CommonModule, angular.IonicModule],
                        entryComponents: [ViewerModalComponent],
                        exports: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent]
                    },] }
        ];
        return NgxIonicImageViewerModule;
    }());

    exports.NgxIonicImageViewerComponent = NgxIonicImageViewerComponent;
    exports.NgxIonicImageViewerDirective = NgxIonicImageViewerDirective;
    exports.NgxIonicImageViewerModule = NgxIonicImageViewerModule;
    exports.NgxIonicImageViewerService = NgxIonicImageViewerService;
    exports.ViewerModalComponent = ViewerModalComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-ionic-image-viewer.umd.js.map
