/**
 * @fileoverview added by tsickle
 * Generated from: lib/viewer-modal/viewer-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.options = tslib_1.__assign({}, this.defaultSlideOptions, this.slideOptions);
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
        this.swipeState = tslib_1.__assign({}, this.swipeState, { phase: 'start', direction: 'none', distance: 0, startX: pageX, startY: pageY, startTime: new Date().getTime() });
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
        this.swipeState = tslib_1.__assign({}, this.swipeState, { phase: 'move', direction: direction,
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
        this.swipeState = tslib_1.__assign({}, this.swipeState, { phase: 'end', swipeType: swipeType });
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
        { type: Component, args: [{
                    selector: 'ion-viewer-modal',
                    template: "<ion-header [ngClass]=\"{ 'no-title': title.length <= 0 }\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"downloadClicked()\" *ngIf=\"callbackFunction\">\n        <ion-icon slot=\"icon-only\" name=\"download\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title [size]=\"titleSize\">{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\">\n  <ion-slides [options]=\"options\" #sliderRef>\n    <!-- <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [alt]=\"this.alt\" [src]=\"this.src\" (error)=\"onError($event)\" />\n      </div>\n    </ion-slide> -->\n  </ion-slides>\n</ion-content>\n\n<ion-footer [ngClass]=\"{ 'no-text': text.length <= 0 }\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-text>{{ text }}</ion-text>\n  </ion-toolbar>\n</ion-footer>\n",
                    styles: ["ion-slides{--height:100%;height:100%}ion-toolbar{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header{opacity:1;position:absolute}ion-header.no-title:after{content:none}ion-header.no-title ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer{position:absolute;bottom:0}ion-footer.no-text:before{content:none}ion-footer.no-text ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
                }] }
    ];
    /** @nocollapse */
    ViewerModalComponent.ctorParameters = function () { return [
        { type: ModalController }
    ]; };
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
    return ViewerModalComponent;
}());
export { ViewerModalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pb25pYy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLW1vZGFsL3ZpZXdlci1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQ7SUFnREUsOEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjs7UUF6QzNDLFFBQUcsR0FBWSxFQUFFLENBQUM7UUFDbEIsV0FBTSxHQUFZLE1BQU0sQ0FBQztRQUN6QixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUUzQixnQkFBVyxHQUFZLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQWEsSUFBSSxDQUFDO1FBQzlCLFNBQUksR0FBWSxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVksRUFBRSxDQUFDOztRQUlqQyx3QkFBbUIsR0FBRztZQUNwQixjQUFjLEVBQUUsSUFBSTtZQUNwQixnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0YsQ0FBQztRQUVGLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFYixlQUFVLEdBQUc7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLENBQUM7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USxlQUFlOzs7c0JBU3JCLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLO3NCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7bUNBQ0wsS0FBSzt5QkE2QkwsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBcUsxQywyQkFBQztDQUFBLEFBbk5ELElBbU5DO1NBOU1ZLG9CQUFvQjs7O0lBRS9CLG1DQUEyQjs7SUFDM0Isc0NBQWtDOztJQUNsQyw0Q0FBb0M7O0lBQ3BDLG1DQUFxQjs7SUFDckIsMkNBQW1DOztJQUNuQywwQ0FBa0M7O0lBQ2xDLDRDQUF1Qzs7SUFDdkMsb0NBQTRCOztJQUM1QixxQ0FBNkI7O0lBQzdCLHlDQUFpQzs7SUFDakMsZ0RBQWlEOztJQUdqRCxtREFNRTs7SUFFRix1Q0FBYTs7SUFFYiwwQ0FjRTs7SUFFRixzQ0FBNEQ7Ozs7O0lBRWhELCtDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIsIElvblNsaWRlcyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLXZpZXdlci1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92aWV3ZXItbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8taW5mZXJyYWJsZS10eXBlc1xuICBASW5wdXQoKSBhbHQ/OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc2NoZW1lPzogc3RyaW5nID0gJ2F1dG8nO1xuICBASW5wdXQoKSBzbGlkZU9wdGlvbnM/OiBvYmplY3QgPSB7fTtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNyY0ZhbGxiYWNrPzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHNyY0hpZ2hSZXM/OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc3dpcGVUb0Nsb3NlPzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHRleHQ/OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdGl0bGVTaXplPzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrRnVuY3Rpb24/OiAoYXJncz86IGFueSkgPT4gdm9pZDtcbiAgLy8gdHNsaW50OmVuYWJsZTogbm8taW5mZXJyYWJsZS10eXBlc1xuXG4gIGRlZmF1bHRTbGlkZU9wdGlvbnMgPSB7XG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgcGFzc2l2ZUxpc3RlbmVyczogZmFsc2UsXG4gICAgem9vbToge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICB9LFxuICB9O1xuXG4gIG9wdGlvbnMgPSB7fTtcblxuICBzd2lwZVN0YXRlID0ge1xuICAgIHBoYXNlOiAnaW5pdCcsXG4gICAgZGlyZWN0aW9uOiAnbm9uZScsXG4gICAgc3dpcGVUeXBlOiAnbm9uZScsXG4gICAgc3RhcnRYOiAwLFxuICAgIHN0YXJ0WTogMCxcbiAgICBkaXN0YW5jZTogMCxcbiAgICBkaXN0YW5jZVg6IDAsXG4gICAgZGlzdGFuY2VZOiAwLFxuICAgIHRocmVzaG9sZDogMTUwLCAvLyByZXF1aXJlZCBtaW4gZGlzdGFuY2UgdHJhdmVsZWQgdG8gYmUgY29uc2lkZXJlZCBzd2lwZVxuICAgIHJlc3RyYWludDogMTAwLCAvLyBtYXhpbXVtIGRpc3RhbmNlIGFsbG93ZWQgYXQgdGhlIHNhbWUgdGltZSBpbiBwZXJwZW5kaWN1bGFyIGRpcmVjdGlvblxuICAgIGFsbG93ZWRUaW1lOiA1MDAsIC8vIG1heGltdW0gdGltZSBhbGxvd2VkIHRvIHRyYXZlbCB0aGF0IGRpc3RhbmNlXG4gICAgZWxhcHNlZFRpbWU6IDAsXG4gICAgc3RhcnRUaW1lOiAwLFxuICB9O1xuXG4gIEBWaWV3Q2hpbGQoJ3NsaWRlclJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHNsaWRlczogSW9uU2xpZGVzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIpIHt9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi50aGlzLmRlZmF1bHRTbGlkZU9wdGlvbnMsIC4uLnRoaXMuc2xpZGVPcHRpb25zIH07XG4gICAgdGhpcy5zcmMgPSB0aGlzLnNyY0hpZ2hSZXMgfHwgdGhpcy5zcmM7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgIHRoaXMuc2V0U2NoZW1lKHRoaXMuc2NoZW1lKTtcbiAgICB0aGlzLmluaXRTd2lwZVRvQ2xvc2UodGhpcy5zd2lwZVRvQ2xvc2UpO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBXb3JrYXJvdW5kXG4gICAgICogU2VlIHJlcG9ydGVkIGJ1ZzogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMvaXNzdWVzLzE5NjM4I2lzc3VlY29tbWVudC01ODQ4MjgzMTVcbiAgICAgKiBIaW50OiBDb21tZW50IGluICc8aW9uLXNsaWRlPicgaW4gY29tcG9uZW50XG4gICAgICovXG4gICAgY29uc3Qgc3dpcGVyID0gYXdhaXQgdGhpcy5zbGlkZXMuZ2V0U3dpcGVyKCk7XG4gICAgc3dpcGVyLmFwcGVuZFNsaWRlKGA8aW9uLXNsaWRlPjxpbWcgYWx0PVwiJHt0aGlzLmFsdH1cIiBzcmM9XCIke3RoaXMuc3JjfVwiIG9uZXJyb3I9XCJ0aGlzLnNyYz0nJHt0aGlzLnNyY0ZhbGxiYWNrfSdcIi8+PC9pb24tc2xpZGU+YCk7XG4gIH1cblxuICBzZXRTdHlsZSgpIHtcbiAgICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW9uLWltZy12aWV3ZXInKTtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWlnaHQnLCAnMTAwJScpO1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLXdpZHRoJywgJzEwMCUnKTtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ib3JkZXItcmFkaXVzJywgJzAnKTtcbiAgfVxuXG4gIHNldFNjaGVtZShzY2hlbWU6IHN0cmluZykge1xuICAgIGlmIChzY2hlbWUgPT09ICdhdXRvJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pb24taW1nLXZpZXdlcicpO1xuXG4gICAgaWYgKHRoaXMuc2NoZW1lID09PSAnbGlnaHQnKSB7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tYmFja2dyb3VuZC1jb2xvcicsICcjZmZmZmZmJyk7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2InLCAnMjU1LCAyNTUsIDI1NScpO1xuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0taW9uLXRleHQtY29sb3InLCAnIzAwMCcpO1xuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0taW9uLXRleHQtY29sb3ItcmdiJywgJzAsMCwwJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1lID09PSAnZGFyaycpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lvcycpKSB7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWlvbi1iYWNrZ3JvdW5kLWNvbG9yJywgJyMwMDAwMDAnKTtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiJywgJzAsIDAsIDAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWlvbi1iYWNrZ3JvdW5kLWNvbG9yJywgJyMxMjEyMTInKTtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiJywgJzE4LDE4LDE4Jyk7XG4gICAgICB9XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tdGV4dC1jb2xvcicsICcjZmZmZmZmJyk7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tdGV4dC1jb2xvci1yZ2InLCAnMjU1LDI1NSwyNTUnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBodHRwOi8vd3d3LmphdmFzY3JpcHRraXQuY29tL2phdmF0dXRvcnMvdG91Y2hldmVudHMzLnNodG1sXG4gICAqL1xuICBpbml0U3dpcGVUb0Nsb3NlKGlzQWN0aXZlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1tb2RhbCcpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4gdGhpcy5zd2lwZVN0YXJ0KGV2ZW50KSwgdHJ1ZSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB0aGlzLnN3aXBlTW92ZShldmVudCksIHRydWUpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHRoaXMuc3dpcGVFbmQoZXZlbnQpLCB0cnVlKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB0aGlzLnN3aXBlU3RhcnQoZXZlbnQpLCB0cnVlKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHRoaXMuc3dpcGVNb3ZlKGV2ZW50KSwgdHJ1ZSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHRoaXMuc3dpcGVFbmQoZXZlbnQpLCB0cnVlKTtcblxuICAgIHRoaXMubW9kYWxDb250cm9sbGVyLmdldFRvcCgpLnRoZW4oKG1vZGFsKSA9PiB7XG4gICAgICBtb2RhbC5vbldpbGxEaXNtaXNzKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc3dpcGVTdGFydCwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuc3dpcGVNb3ZlLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3dpcGVNb3ZlLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuc3dpcGVTdGFydCwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuc3dpcGVNb3ZlLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnN3aXBlTW92ZSwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXBlU3RhcnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VYLCBwYWdlWSB9ID0gZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudDtcblxuICAgIHRoaXMuc3dpcGVTdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuc3dpcGVTdGF0ZSxcbiAgICAgIHBoYXNlOiAnc3RhcnQnLFxuICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICBzdGFydFk6IHBhZ2VZLFxuICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICB9O1xuICB9XG5cbiAgc3dpcGVNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc3dpcGVTdGF0ZS5waGFzZSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudC50eXBlID09PSAndG91Y2htb3ZlJyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZXZlbnQ7XG4gICAgLy8gZ2V0IGhvcml6b250YWwgZGlzdCB0cmF2ZWxlZCBieSBmaW5nZXIgd2hpbGUgaW4gY29udGFjdCB3aXRoIHN1cmZhY2VcbiAgICBjb25zdCBkaXN0YW5jZVggPSBwYWdlWCAtIHRoaXMuc3dpcGVTdGF0ZS5zdGFydFg7XG4gICAgLy8gZ2V0IHZlcnRpY2FsIGRpc3QgdHJhdmVsZWQgYnkgZmluZ2VyIHdoaWxlIGluIGNvbnRhY3Qgd2l0aCBzdXJmYWNlXG4gICAgY29uc3QgZGlzdGFuY2VZID0gcGFnZVkgLSB0aGlzLnN3aXBlU3RhdGUuc3RhcnRZO1xuICAgIGxldCBkaXJlY3Rpb247XG4gICAgbGV0IGRpc3RhbmNlO1xuXG4gICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPiBNYXRoLmFicyhkaXN0YW5jZVkpKSB7XG4gICAgICAvLyBpZiBkaXN0YW5jZSB0cmF2ZWxlZCBob3Jpem9udGFsbHkgaXMgZ3JlYXRlciB0aGFuIHZlcnRpY2FsbHksIGNvbnNpZGVyIHRoaXMgYSBob3Jpem9udGFsIHN3aXBlXG4gICAgICBkaXJlY3Rpb24gPSBkaXN0YW5jZVggPCAwID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgIGRpc3RhbmNlID0gZGlzdGFuY2VYO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbHNlIGNvbnNpZGVyIHRoaXMgYSB2ZXJ0aWNhbCBzd2lwZVxuICAgICAgZGlyZWN0aW9uID0gZGlzdGFuY2VZIDwgMCA/ICd1cCcgOiAnZG93bic7XG4gICAgICBkaXN0YW5jZSA9IGRpc3RhbmNlWTtcbiAgICB9XG4gICAgdGhpcy5zd2lwZVN0YXRlID0ge1xuICAgICAgLi4udGhpcy5zd2lwZVN0YXRlLFxuICAgICAgcGhhc2U6ICdtb3ZlJyxcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgZGlzdGFuY2VYLFxuICAgICAgZGlzdGFuY2VZLFxuICAgIH07XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHN3aXBlRW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc3dpcGVTdGF0ZS5waGFzZSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgYWxsb3dlZFRpbWUsIGRpcmVjdGlvbiwgcmVzdHJhaW50LCBzdGFydFRpbWUsIHRocmVzaG9sZCwgZGlzdGFuY2VYLCBkaXN0YW5jZVkgfSA9IHRoaXMuc3dpcGVTdGF0ZTtcbiAgICBsZXQgc3dpcGVUeXBlO1xuXG4gICAgY29uc3QgZWxhcHNlZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZTsgLy8gZ2V0IHRpbWUgZWxhcHNlZFxuICAgIGlmIChlbGFwc2VkVGltZSA8PSBhbGxvd2VkVGltZSkge1xuICAgICAgLy8gZmlyc3QgY29uZGl0aW9uIGZvciBhIHN3aXBlIG1ldFxuICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPj0gdGhyZXNob2xkICYmIE1hdGguYWJzKGRpc3RhbmNlWSkgPD0gcmVzdHJhaW50KSB7XG4gICAgICAgIC8vIDJuZCBjb25kaXRpb24gZm9yIGhvcml6b250YWwgc3dpcGUgbWV0XG4gICAgICAgIHN3aXBlVHlwZSA9IGRpcmVjdGlvbjsgLy8gc2V0IHN3aXBlVHlwZSB0byBlaXRoZXIgXCJsZWZ0XCIgb3IgXCJyaWdodFwiXG4gICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpc3RhbmNlWSkgPj0gdGhyZXNob2xkICYmIE1hdGguYWJzKGRpc3RhbmNlWCkgPD0gcmVzdHJhaW50KSB7XG4gICAgICAgIC8vIDJuZCBjb25kaXRpb24gZm9yIHZlcnRpY2FsIHN3aXBlIG1ldFxuICAgICAgICBzd2lwZVR5cGUgPSBkaXJlY3Rpb247IC8vIHNldCBzd2lwZVR5cGUgdG8gZWl0aGVyIFwidG9wXCIgb3IgXCJkb3duXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnN3aXBlU3RhdGUgPSB7XG4gICAgICAuLi50aGlzLnN3aXBlU3RhdGUsXG4gICAgICBwaGFzZTogJ2VuZCcsXG4gICAgICBzd2lwZVR5cGUsXG4gICAgfTtcblxuICAgIGlmIChzd2lwZVR5cGUgPT09ICdkb3duJykge1xuICAgICAgcmV0dXJuIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbENvbnRyb2xsZXIuZGlzbWlzcygpO1xuICB9XG5cbiAgZG93bmxvYWRDbGlja2VkKCkge1xuICAgIHRoaXMuY2FsbGJhY2tGdW5jdGlvbigpO1xuICB9XG59XG4iXX0=