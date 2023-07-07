import { EventEmitter, OnInit } from '@angular/core';
import { IIconButtonComponentConfig } from '../../shared/icon-button/icon-button.component';
import { IButtonConfig } from '../../shared/button/button.component';
import * as i0 from "@angular/core";
export declare enum BannerType {
    '' = "",
    generic = "generic",
    info = "info",
    critical = "critical",
    success = "success",
    warning = "warning"
}
export declare enum BannerSize {
    large = "large",
    small = "small"
}
export declare enum CTAType {
    link = "link",
    button = "button"
}
export interface ICTAConfig {
    text: string;
    type: keyof typeof CTAType;
    linkConfig?: any;
    btnConfig?: IButtonConfig;
    ariaLabel?: string;
}
export interface IBannerConfig {
    id: string;
    title?: string;
    content?: string;
    type?: keyof typeof BannerType;
    rounded?: boolean;
    dismissible?: boolean;
    cta?: ICTAConfig[];
    size?: keyof typeof BannerSize;
    ariaDissmissible?: string;
}
export declare class BannerComponent implements OnInit {
    lineVisible: boolean;
    textId: string;
    config: IBannerConfig;
    id?: string;
    title?: string;
    content?: string;
    type?: keyof typeof BannerType;
    rounded?: boolean;
    dismissible?: boolean;
    cta?: ICTAConfig[];
    size?: keyof typeof BannerSize;
    ariaDissmissible?: string;
    btnEvent: EventEmitter<any>;
    iconConfig: IIconButtonComponentConfig;
    eventHandler(emitValue: string): void;
    toggleLine(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BannerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BannerComponent, "ircc-cl-lib-banner", never, { "config": "config"; "id": "id"; "title": "title"; "content": "content"; "type": "type"; "rounded": "rounded"; "dismissible": "dismissible"; "cta": "cta"; "size": "size"; "ariaDissmissible": "ariaDissmissible"; }, { "btnEvent": "btnEvent"; }, never, never, false>;
}
