import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum ButtonCategories {
    primary = "primary",
    secondary = "secondary",
    plain = "plain"
}
export declare enum ButtonSize {
    small = "small",
    large = "large"
}
export declare enum ButtonColor {
    critical = "critical",
    CTA = "CTA"
}
export declare enum ButtonIconDirection {
    left = "left",
    right = "right"
}
export interface IButtonConfig {
    id: string;
    category?: keyof typeof ButtonCategories;
    size?: keyof typeof ButtonSize;
    color?: keyof typeof ButtonColor;
    ariaLabel?: string;
    disabled?: boolean;
    icon?: string;
    iconDirection?: keyof typeof ButtonIconDirection;
    tabIndex?: number;
}
export declare class ButtonComponent {
    config: IButtonConfig;
    id: string;
    category?: keyof typeof ButtonCategories;
    size?: keyof typeof ButtonSize;
    color?: keyof typeof ButtonColor;
    ariaLabel?: string;
    disabled?: boolean;
    icon?: string;
    iconDirection?: keyof typeof ButtonIconDirection;
    tabIndex?: number;
    btnAction: EventEmitter<any>;
    ngOnInit(): void;
    clickEvent(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "ircc-cl-lib-button", never, { "config": "config"; "id": "id"; "category": "category"; "size": "size"; "color": "color"; "ariaLabel": "ariaLabel"; "disabled": "disabled"; "icon": "icon"; "iconDirection": "iconDirection"; "tabIndex": "tabIndex"; }, { "btnAction": "btnAction"; }, never, ["*"], false>;
}
