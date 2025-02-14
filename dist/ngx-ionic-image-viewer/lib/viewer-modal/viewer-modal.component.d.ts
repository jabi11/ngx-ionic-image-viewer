import { OnInit } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
export declare class ViewerModalComponent implements OnInit {
    private modalController;
    alt?: string;
    scheme?: string;
    slideOptions?: object;
    src: string;
    srcFallback?: string;
    srcHighRes?: string;
    swipeToClose?: boolean;
    text?: string;
    title?: string;
    titleSize?: string;
    callbackFunction?: (args?: any) => void;
    defaultSlideOptions: {
        centeredSlides: boolean;
        passiveListeners: boolean;
        zoom: {
            enabled: boolean;
        };
    };
    options: {};
    swipeState: {
        phase: string;
        direction: string;
        swipeType: string;
        startX: number;
        startY: number;
        distance: number;
        distanceX: number;
        distanceY: number;
        threshold: number;
        restraint: number;
        allowedTime: number;
        elapsedTime: number;
        startTime: number;
    };
    slides: IonSlides;
    constructor(modalController: ModalController);
    ngOnInit(): Promise<void>;
    setStyle(): void;
    setScheme(scheme: string): void;
    /**
     * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
     */
    initSwipeToClose(isActive?: boolean): void;
    swipeStart(event: any): void;
    swipeMove(event: any): void;
    swipeEnd(event: any): void;
    closeModal(): void;
    downloadClicked(): void;
}
