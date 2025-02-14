import { ElementRef, Renderer2, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
export declare class NgxIonicImageViewerDirective implements OnInit {
    private el;
    private renderer;
    modalController: ModalController;
    constructor(el: ElementRef, renderer: Renderer2, modalController: ModalController);
    cssClass?: string | string[];
    scheme?: string;
    slideOptions?: object;
    src: string;
    srcFallback?: string;
    srcHighRes?: string;
    swipeToClose?: boolean;
    text?: string;
    title?: string;
    titleSize?: string;
    onClick(): void;
    onError(error: any): void;
    ngOnInit(): void;
    viewImage(src: string, srcFallback?: string, srcHighRes?: string, title?: string, titleSize?: string, text?: string, scheme?: string, slideOptions?: object, swipeToClose?: boolean): Promise<void>;
}
