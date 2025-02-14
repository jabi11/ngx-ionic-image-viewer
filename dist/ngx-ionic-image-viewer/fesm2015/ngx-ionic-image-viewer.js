import { Injectable, ɵɵdefineInjectable, Component, Input, ViewChild, ViewEncapsulation, Directive, ElementRef, Renderer2, HostListener, NgModule } from '@angular/core';
import { __awaiter } from 'tslib';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-ionic-image-viewer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxIonicImageViewerService {
    constructor() { }
}
NgxIonicImageViewerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxIonicImageViewerService.ctorParameters = () => [];
/** @nocollapse */ NgxIonicImageViewerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxIonicImageViewerService_Factory() { return new NgxIonicImageViewerService(); }, token: NgxIonicImageViewerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/viewer-modal/viewer-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerModalComponent {
    /**
     * @param {?} modalController
     */
    constructor(modalController) {
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
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.options = Object.assign({}, this.defaultSlideOptions, this.slideOptions);
            this.src = this.srcHighRes || this.src;
            this.setStyle();
            this.setScheme(this.scheme);
            this.initSwipeToClose(this.swipeToClose);
            /**
             * Current Workaround
             * See reported bug: https://github.com/ionic-team/ionic/issues/19638#issuecomment-584828315
             * Hint: Comment in '<ion-slide>' in component
             * @type {?}
             */
            const swiper = yield this.slides.getSwiper();
            swiper.appendSlide(`<ion-slide><img alt="${this.alt}" src="${this.src}" onerror="this.src='${this.srcFallback}'"/></ion-slide>`);
        });
    }
    /**
     * @return {?}
     */
    setStyle() {
        /** @type {?} */
        const el = document.querySelector('.ion-img-viewer');
        el.style.setProperty('--height', '100%');
        el.style.setProperty('--width', '100%');
        el.style.setProperty('--border-radius', '0');
    }
    /**
     * @param {?} scheme
     * @return {?}
     */
    setScheme(scheme) {
        if (scheme === 'auto') {
            return;
        }
        /** @type {?} */
        const el = document.querySelector('.ion-img-viewer');
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
    }
    /**
     * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
     * @param {?=} isActive
     * @return {?}
     */
    initSwipeToClose(isActive = true) {
        if (!isActive) {
            return;
        }
        /** @type {?} */
        const el = document.querySelector('ion-modal');
        el.addEventListener('mousedown', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.swipeStart(event)), true);
        el.addEventListener('mousemove', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.swipeMove(event)), true);
        el.addEventListener('mouseup', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.swipeEnd(event)), true);
        el.addEventListener('touchstart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.swipeStart(event)), true);
        el.addEventListener('touchmove', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.swipeMove(event)), true);
        el.addEventListener('touchend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.swipeEnd(event)), true);
        this.modalController.getTop().then((/**
         * @param {?} modal
         * @return {?}
         */
        (modal) => {
            modal.onWillDismiss().then((/**
             * @return {?}
             */
            () => {
                document.removeEventListener('mousedown', this.swipeStart, true);
                document.removeEventListener('mousemove', this.swipeMove, true);
                document.removeEventListener('mouseup', this.swipeMove, true);
                document.removeEventListener('touchstart', this.swipeStart, true);
                document.removeEventListener('touchmove', this.swipeMove, true);
                document.removeEventListener('touchend', this.swipeMove, true);
            }));
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    swipeStart(event) {
        const { pageX, pageY } = event.type === 'touchstart' ? event.changedTouches[0] : event;
        this.swipeState = Object.assign({}, this.swipeState, { phase: 'start', direction: 'none', distance: 0, startX: pageX, startY: pageY, startTime: new Date().getTime() });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    swipeMove(event) {
        if (this.swipeState.phase === 'none') {
            return;
        }
        const { pageX, pageY } = event.type === 'touchmove' ? event.changedTouches[0] : event;
        // get horizontal dist traveled by finger while in contact with surface
        /** @type {?} */
        const distanceX = pageX - this.swipeState.startX;
        // get vertical dist traveled by finger while in contact with surface
        /** @type {?} */
        const distanceY = pageY - this.swipeState.startY;
        /** @type {?} */
        let direction;
        /** @type {?} */
        let distance;
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
        this.swipeState = Object.assign({}, this.swipeState, { phase: 'move', direction,
            distance,
            distanceX,
            distanceY });
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    swipeEnd(event) {
        if (this.swipeState.phase === 'none') {
            return;
        }
        const { allowedTime, direction, restraint, startTime, threshold, distanceX, distanceY } = this.swipeState;
        /** @type {?} */
        let swipeType;
        /** @type {?} */
        const elapsedTime = new Date().getTime() - startTime;
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
        this.swipeState = Object.assign({}, this.swipeState, { phase: 'end', swipeType });
        if (swipeType === 'down') {
            return this.closeModal();
        }
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.modalController.dismiss();
    }
    /**
     * @return {?}
     */
    downloadClicked() {
        this.callbackFunction();
    }
}
ViewerModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-viewer-modal',
                template: "<ion-header [ngClass]=\"{ 'no-title': title.length <= 0 }\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"downloadClicked()\" *ngIf=\"callbackFunction\">\n        <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title [size]=\"titleSize\">{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\">\n  <ion-slides [options]=\"options\" #sliderRef>\n    <!-- <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [alt]=\"this.alt\" [src]=\"this.src\" (error)=\"onError($event)\" />\n      </div>\n    </ion-slide> -->\n  </ion-slides>\n</ion-content>\n\n<ion-footer [ngClass]=\"{ 'no-text': text.length <= 0 }\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-text>{{ text }}</ion-text>\n  </ion-toolbar>\n</ion-footer>\n",
                styles: ["ion-slides{--height:100%;height:100%}ion-toolbar{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header{opacity:1;position:absolute}ion-header.no-title:after{content:none}ion-header.no-title ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer{position:absolute;bottom:0}ion-footer.no-text:before{content:none}ion-footer.no-text ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
            }] }
];
/** @nocollapse */
ViewerModalComponent.ctorParameters = () => [
    { type: ModalController }
];
ViewerModalComponent.propDecorators = {
    alt: [{ type: Input }],
    scheme: [{ type: Input }],
    slideOptions: [{ type: Input }],
    src: [{ type: Input }],
    srcFallback: [{ type: Input }],
    srcHighRes: [{ type: Input }],
    swipeToClose: [{ type: Input }],
    text: [{ type: Input }],
    title: [{ type: Input }],
    titleSize: [{ type: Input }],
    callbackFunction: [{ type: Input }],
    slides: [{ type: ViewChild, args: ['sliderRef', { static: true },] }]
};
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
class NgxIonicImageViewerComponent {
    /**
     * @param {?} modalController
     */
    constructor(modalController) {
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
    viewImage(src, srcFallback = '', srcHighRes = '', title = '', titleSize = '', text = '', scheme = 'auto', slideOptions = {}, swipeToClose = true) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const modal = yield this.modalController.create({
                component: ViewerModalComponent,
                componentProps: {
                    src,
                    srcFallback,
                    srcHighRes,
                    title,
                    titleSize,
                    text,
                    scheme,
                    slideOptions,
                    swipeToClose
                },
                cssClass: this.cssClass instanceof Array ? ['ion-img-viewer', ...this.cssClass] : ['ion-img-viewer', this.cssClass],
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
NgxIonicImageViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-img-viewer',
                template: "<img\n  [alt]=\"alt\"\n  [src]=\"src\"\n  (click)=\"viewImage(src, srcFallback, srcHighRes, title, titleSize, text, scheme, slideOptions, swipeToClose)\"\n  (error)=\"src = srcFallback\"\n/>\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [`
      :host {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NgxIonicImageViewerComponent.ctorParameters = () => [
    { type: ModalController }
];
NgxIonicImageViewerComponent.propDecorators = {
    alt: [{ type: Input }],
    cssClass: [{ type: Input }],
    scheme: [{ type: Input }],
    slideOptions: [{ type: Input }],
    src: [{ type: Input }],
    srcFallback: [{ type: Input }],
    srcHighRes: [{ type: Input }],
    swipeToClose: [{ type: Input }],
    text: [{ type: Input }],
    title: [{ type: Input }],
    titleSize: [{ type: Input }]
};
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
class NgxIonicImageViewerDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} modalController
     */
    constructor(el, renderer, modalController) {
        this.el = el;
        this.renderer = renderer;
        this.modalController = modalController;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.viewImage(this.src, this.srcFallback, this.srcHighRes, this.title, this.titleSize, this.text, this.scheme, this.slideOptions, this.swipeToClose);
    }
    /**
     * @param {?} error
     * @return {?}
     */
    onError(error) {
        if (this.src !== this.el.nativeElement.src) {
            this.src = this.el.nativeElement.src;
        }
        if (this.srcFallback) {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.el.nativeElement.hasAttribute('src')) {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
        }
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
    viewImage(src, srcFallback = '', srcHighRes = '', title = '', titleSize = '', text = '', scheme = 'auto', slideOptions = {}, swipeToClose = true) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const modal = yield this.modalController.create({
                component: ViewerModalComponent,
                componentProps: {
                    src,
                    srcFallback,
                    srcHighRes,
                    title,
                    titleSize,
                    text,
                    scheme,
                    slideOptions,
                    swipeToClose
                },
                cssClass: this.cssClass instanceof Array ? ['ion-img-viewer', ...this.cssClass] : ['ion-img-viewer', this.cssClass],
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
}
NgxIonicImageViewerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionImgViewer]'
            },] }
];
/** @nocollapse */
NgxIonicImageViewerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ModalController }
];
NgxIonicImageViewerDirective.propDecorators = {
    cssClass: [{ type: Input }],
    scheme: [{ type: Input }],
    slideOptions: [{ type: Input }],
    src: [{ type: Input }],
    srcFallback: [{ type: Input }],
    srcHighRes: [{ type: Input }],
    swipeToClose: [{ type: Input }],
    text: [{ type: Input }],
    title: [{ type: Input }],
    titleSize: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onError: [{ type: HostListener, args: ['error', ['$event'],] }]
};
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
class NgxIonicImageViewerModule {
}
NgxIonicImageViewerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent],
                imports: [CommonModule, IonicModule],
                entryComponents: [ViewerModalComponent],
                exports: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-ionic-image-viewer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, NgxIonicImageViewerModule, NgxIonicImageViewerService, ViewerModalComponent };
//# sourceMappingURL=ngx-ionic-image-viewer.js.map
