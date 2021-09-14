/**
 * @fileoverview added by tsickle
 * Generated from: lib/viewer-modal/viewer-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
export class ViewerModalComponent {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pb25pYy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLW1vZGFsL3ZpZXdlci1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPNUQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQTJDL0IsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCOztRQXpDM0MsUUFBRyxHQUFZLEVBQUUsQ0FBQztRQUNsQixXQUFNLEdBQVksTUFBTSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBRTNCLGdCQUFXLEdBQVksRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBYSxJQUFJLENBQUM7UUFDOUIsU0FBSSxHQUFZLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVksRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBWSxFQUFFLENBQUM7O1FBSWpDLHdCQUFtQixHQUFHO1lBQ3BCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDRixDQUFDO1FBRUYsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLGVBQVUsR0FBRztZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsU0FBUyxFQUFFLE1BQU07WUFDakIsU0FBUyxFQUFFLE1BQU07WUFDakIsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULFFBQVEsRUFBRSxDQUFDO1lBQ1gsU0FBUyxFQUFFLENBQUM7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QU5RLGVBQWU7OztrQkFTckIsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7a0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3FCQTZCTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQXZDeEMsbUNBQTJCOztJQUMzQixzQ0FBa0M7O0lBQ2xDLDRDQUFvQzs7SUFDcEMsbUNBQXFCOztJQUNyQiwyQ0FBbUM7O0lBQ25DLDBDQUFrQzs7SUFDbEMsNENBQXVDOztJQUN2QyxvQ0FBNEI7O0lBQzVCLHFDQUE2Qjs7SUFDN0IseUNBQWlDOztJQUNqQyxnREFBaUQ7O0lBR2pELG1EQU1FOztJQUVGLHVDQUFhOztJQUViLDBDQWNFOztJQUVGLHNDQUE0RDs7Ozs7SUFFaEQsK0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciwgSW9uU2xpZGVzIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb24tdmlld2VyLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdlci1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ZpZXdlci1tb2RhbC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIHRzbGludDpkaXNhYmxlOiBuby1pbmZlcnJhYmxlLXR5cGVzXG4gIEBJbnB1dCgpIGFsdD86IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzY2hlbWU/OiBzdHJpbmcgPSAnYXV0byc7XG4gIEBJbnB1dCgpIHNsaWRlT3B0aW9ucz86IG9iamVjdCA9IHt9O1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgc3JjRmFsbGJhY2s/OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc3JjSGlnaFJlcz86IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzd2lwZVRvQ2xvc2U/OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgdGV4dD86IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0aXRsZVNpemU/OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgY2FsbGJhY2tGdW5jdGlvbj86IChhcmdzPzogYW55KSA9PiB2b2lkO1xuICAvLyB0c2xpbnQ6ZW5hYmxlOiBuby1pbmZlcnJhYmxlLXR5cGVzXG5cbiAgZGVmYXVsdFNsaWRlT3B0aW9ucyA9IHtcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBwYXNzaXZlTGlzdGVuZXJzOiBmYWxzZSxcbiAgICB6b29tOiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgIH0sXG4gIH07XG5cbiAgb3B0aW9ucyA9IHt9O1xuXG4gIHN3aXBlU3RhdGUgPSB7XG4gICAgcGhhc2U6ICdpbml0JyxcbiAgICBkaXJlY3Rpb246ICdub25lJyxcbiAgICBzd2lwZVR5cGU6ICdub25lJyxcbiAgICBzdGFydFg6IDAsXG4gICAgc3RhcnRZOiAwLFxuICAgIGRpc3RhbmNlOiAwLFxuICAgIGRpc3RhbmNlWDogMCxcbiAgICBkaXN0YW5jZVk6IDAsXG4gICAgdGhyZXNob2xkOiAxNTAsIC8vIHJlcXVpcmVkIG1pbiBkaXN0YW5jZSB0cmF2ZWxlZCB0byBiZSBjb25zaWRlcmVkIHN3aXBlXG4gICAgcmVzdHJhaW50OiAxMDAsIC8vIG1heGltdW0gZGlzdGFuY2UgYWxsb3dlZCBhdCB0aGUgc2FtZSB0aW1lIGluIHBlcnBlbmRpY3VsYXIgZGlyZWN0aW9uXG4gICAgYWxsb3dlZFRpbWU6IDUwMCwgLy8gbWF4aW11bSB0aW1lIGFsbG93ZWQgdG8gdHJhdmVsIHRoYXQgZGlzdGFuY2VcbiAgICBlbGFwc2VkVGltZTogMCxcbiAgICBzdGFydFRpbWU6IDAsXG4gIH07XG5cbiAgQFZpZXdDaGlsZCgnc2xpZGVyUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgc2xpZGVzOiBJb25TbGlkZXM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcikge31cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLnRoaXMuZGVmYXVsdFNsaWRlT3B0aW9ucywgLi4udGhpcy5zbGlkZU9wdGlvbnMgfTtcbiAgICB0aGlzLnNyYyA9IHRoaXMuc3JjSGlnaFJlcyB8fCB0aGlzLnNyYztcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgdGhpcy5zZXRTY2hlbWUodGhpcy5zY2hlbWUpO1xuICAgIHRoaXMuaW5pdFN3aXBlVG9DbG9zZSh0aGlzLnN3aXBlVG9DbG9zZSk7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IFdvcmthcm91bmRcbiAgICAgKiBTZWUgcmVwb3J0ZWQgYnVnOiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy9pc3N1ZXMvMTk2MzgjaXNzdWVjb21tZW50LTU4NDgyODMxNVxuICAgICAqIEhpbnQ6IENvbW1lbnQgaW4gJzxpb24tc2xpZGU+JyBpbiBjb21wb25lbnRcbiAgICAgKi9cbiAgICBjb25zdCBzd2lwZXIgPSBhd2FpdCB0aGlzLnNsaWRlcy5nZXRTd2lwZXIoKTtcbiAgICBzd2lwZXIuYXBwZW5kU2xpZGUoYDxpb24tc2xpZGU+PGltZyBhbHQ9XCIke3RoaXMuYWx0fVwiIHNyYz1cIiR7dGhpcy5zcmN9XCIgb25lcnJvcj1cInRoaXMuc3JjPScke3RoaXMuc3JjRmFsbGJhY2t9J1wiLz48L2lvbi1zbGlkZT5gKTtcbiAgfVxuXG4gIHNldFN0eWxlKCkge1xuICAgIGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pb24taW1nLXZpZXdlcicpO1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodCcsICcxMDAlJyk7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0td2lkdGgnLCAnMTAwJScpO1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWJvcmRlci1yYWRpdXMnLCAnMCcpO1xuICB9XG5cbiAgc2V0U2NoZW1lKHNjaGVtZTogc3RyaW5nKSB7XG4gICAgaWYgKHNjaGVtZSA9PT0gJ2F1dG8nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlvbi1pbWctdmlld2VyJyk7XG5cbiAgICBpZiAodGhpcy5zY2hlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWlvbi1iYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmZmZmYnKTtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYicsICcyNTUsIDI1NSwgMjU1Jyk7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tdGV4dC1jb2xvcicsICcjMDAwJyk7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tdGV4dC1jb2xvci1yZ2InLCAnMCwwLDAnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWUgPT09ICdkYXJrJykge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW9zJykpIHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0taW9uLWJhY2tncm91bmQtY29sb3InLCAnIzAwMDAwMCcpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2InLCAnMCwgMCwgMCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0taW9uLWJhY2tncm91bmQtY29sb3InLCAnIzEyMTIxMicpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2InLCAnMTgsMTgsMTgnKTtcbiAgICAgIH1cbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWlvbi10ZXh0LWNvbG9yJywgJyNmZmZmZmYnKTtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWlvbi10ZXh0LWNvbG9yLXJnYicsICcyNTUsMjU1LDI1NScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIGh0dHA6Ly93d3cuamF2YXNjcmlwdGtpdC5jb20vamF2YXR1dG9ycy90b3VjaGV2ZW50czMuc2h0bWxcbiAgICovXG4gIGluaXRTd2lwZVRvQ2xvc2UoaXNBY3RpdmU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLW1vZGFsJyk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB0aGlzLnN3aXBlU3RhcnQoZXZlbnQpLCB0cnVlKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHRoaXMuc3dpcGVNb3ZlKGV2ZW50KSwgdHJ1ZSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4gdGhpcy5zd2lwZUVuZChldmVudCksIHRydWUpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHRoaXMuc3dpcGVTdGFydChldmVudCksIHRydWUpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4gdGhpcy5zd2lwZU1vdmUoZXZlbnQpLCB0cnVlKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4gdGhpcy5zd2lwZUVuZChldmVudCksIHRydWUpO1xuXG4gICAgdGhpcy5tb2RhbENvbnRyb2xsZXIuZ2V0VG9wKCkudGhlbigobW9kYWwpID0+IHtcbiAgICAgIG1vZGFsLm9uV2lsbERpc21pc3MoKS50aGVuKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zd2lwZVN0YXJ0LCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5zd2lwZU1vdmUsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zd2lwZU1vdmUsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5zd2lwZVN0YXJ0LCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5zd2lwZU1vdmUsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuc3dpcGVNb3ZlLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3dpcGVTdGFydChldmVudCkge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudC50eXBlID09PSAndG91Y2hzdGFydCcgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xuXG4gICAgdGhpcy5zd2lwZVN0YXRlID0ge1xuICAgICAgLi4udGhpcy5zd2lwZVN0YXRlLFxuICAgICAgcGhhc2U6ICdzdGFydCcsXG4gICAgICBkaXJlY3Rpb246ICdub25lJyxcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgIHN0YXJ0WTogcGFnZVksXG4gICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgIH07XG4gIH1cblxuICBzd2lwZU1vdmUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zd2lwZVN0YXRlLnBoYXNlID09PSAnbm9uZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IGV2ZW50LnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudDtcbiAgICAvLyBnZXQgaG9yaXpvbnRhbCBkaXN0IHRyYXZlbGVkIGJ5IGZpbmdlciB3aGlsZSBpbiBjb250YWN0IHdpdGggc3VyZmFjZVxuICAgIGNvbnN0IGRpc3RhbmNlWCA9IHBhZ2VYIC0gdGhpcy5zd2lwZVN0YXRlLnN0YXJ0WDtcbiAgICAvLyBnZXQgdmVydGljYWwgZGlzdCB0cmF2ZWxlZCBieSBmaW5nZXIgd2hpbGUgaW4gY29udGFjdCB3aXRoIHN1cmZhY2VcbiAgICBjb25zdCBkaXN0YW5jZVkgPSBwYWdlWSAtIHRoaXMuc3dpcGVTdGF0ZS5zdGFydFk7XG4gICAgbGV0IGRpcmVjdGlvbjtcbiAgICBsZXQgZGlzdGFuY2U7XG5cbiAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VYKSA+IE1hdGguYWJzKGRpc3RhbmNlWSkpIHtcbiAgICAgIC8vIGlmIGRpc3RhbmNlIHRyYXZlbGVkIGhvcml6b250YWxseSBpcyBncmVhdGVyIHRoYW4gdmVydGljYWxseSwgY29uc2lkZXIgdGhpcyBhIGhvcml6b250YWwgc3dpcGVcbiAgICAgIGRpcmVjdGlvbiA9IGRpc3RhbmNlWCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgZGlzdGFuY2UgPSBkaXN0YW5jZVg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsc2UgY29uc2lkZXIgdGhpcyBhIHZlcnRpY2FsIHN3aXBlXG4gICAgICBkaXJlY3Rpb24gPSBkaXN0YW5jZVkgPCAwID8gJ3VwJyA6ICdkb3duJztcbiAgICAgIGRpc3RhbmNlID0gZGlzdGFuY2VZO1xuICAgIH1cbiAgICB0aGlzLnN3aXBlU3RhdGUgPSB7XG4gICAgICAuLi50aGlzLnN3aXBlU3RhdGUsXG4gICAgICBwaGFzZTogJ21vdmUnLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBkaXN0YW5jZVgsXG4gICAgICBkaXN0YW5jZVksXG4gICAgfTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc3dpcGVFbmQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zd2lwZVN0YXRlLnBoYXNlID09PSAnbm9uZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBhbGxvd2VkVGltZSwgZGlyZWN0aW9uLCByZXN0cmFpbnQsIHN0YXJ0VGltZSwgdGhyZXNob2xkLCBkaXN0YW5jZVgsIGRpc3RhbmNlWSB9ID0gdGhpcy5zd2lwZVN0YXRlO1xuICAgIGxldCBzd2lwZVR5cGU7XG5cbiAgICBjb25zdCBlbGFwc2VkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lOyAvLyBnZXQgdGltZSBlbGFwc2VkXG4gICAgaWYgKGVsYXBzZWRUaW1lIDw9IGFsbG93ZWRUaW1lKSB7XG4gICAgICAvLyBmaXJzdCBjb25kaXRpb24gZm9yIGEgc3dpcGUgbWV0XG4gICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VYKSA+PSB0aHJlc2hvbGQgJiYgTWF0aC5hYnMoZGlzdGFuY2VZKSA8PSByZXN0cmFpbnQpIHtcbiAgICAgICAgLy8gMm5kIGNvbmRpdGlvbiBmb3IgaG9yaXpvbnRhbCBzd2lwZSBtZXRcbiAgICAgICAgc3dpcGVUeXBlID0gZGlyZWN0aW9uOyAvLyBzZXQgc3dpcGVUeXBlIHRvIGVpdGhlciBcImxlZnRcIiBvciBcInJpZ2h0XCJcbiAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlzdGFuY2VZKSA+PSB0aHJlc2hvbGQgJiYgTWF0aC5hYnMoZGlzdGFuY2VYKSA8PSByZXN0cmFpbnQpIHtcbiAgICAgICAgLy8gMm5kIGNvbmRpdGlvbiBmb3IgdmVydGljYWwgc3dpcGUgbWV0XG4gICAgICAgIHN3aXBlVHlwZSA9IGRpcmVjdGlvbjsgLy8gc2V0IHN3aXBlVHlwZSB0byBlaXRoZXIgXCJ0b3BcIiBvciBcImRvd25cIlxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3dpcGVTdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuc3dpcGVTdGF0ZSxcbiAgICAgIHBoYXNlOiAnZW5kJyxcbiAgICAgIHN3aXBlVHlwZSxcbiAgICB9O1xuXG4gICAgaWYgKHN3aXBlVHlwZSA9PT0gJ2Rvd24nKSB7XG4gICAgICByZXR1cm4gdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLm1vZGFsQ29udHJvbGxlci5kaXNtaXNzKCk7XG4gIH1cblxuICBkb3dubG9hZENsaWNrZWQoKSB7XG4gICAgdGhpcy5jYWxsYmFja0Z1bmN0aW9uKCk7XG4gIH1cbn1cbiJdfQ==