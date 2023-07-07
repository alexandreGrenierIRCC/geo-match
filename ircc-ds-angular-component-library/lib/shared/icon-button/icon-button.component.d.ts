import { EventEmitter, OnInit } from '@angular/core';
import { DSFullSizes } from '../../../shared/constants/jl-components.constants';
import * as i0 from "@angular/core";
export declare enum IconButtonCategories {
    primary = "primary",
    critical = "critical",
    custom = "custom"
}
export interface IIconButtonIconConfig {
    class: string;
    color?: string;
}
export interface IIconButtonComponentConfig {
    id: string;
    category: keyof typeof IconButtonCategories;
    size?: keyof typeof DSFullSizes;
    ariaLabel?: string;
    disabled?: boolean;
    icon?: IIconButtonIconConfig;
}
export declare const CLASS_X_MARK = "fa-thin fa-xmark";
export declare const CLASS_TRASHCAN = "fa-solid fa-trash-can";
export declare class IconButtonComponent implements OnInit {
    config: IIconButtonComponentConfig;
    id: string;
    category?: keyof typeof IconButtonCategories | IconButtonCategories;
    size?: keyof typeof DSFullSizes | DSFullSizes;
    ariaLabel?: string;
    disabled?: boolean;
    icon?: IIconButtonIconConfig;
    clickEvent: EventEmitter<string>;
    iconConfigs: {
        [key: string]: IIconButtonIconConfig;
    };
    ngOnInit(): void;
    buttonClick(id?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconButtonComponent, "ircc-cl-lib-icon-button", never, { "config": "config"; "id": "id"; "category": "category"; "size": "size"; "ariaLabel": "ariaLabel"; "disabled": "disabled"; "icon": "icon"; }, { "clickEvent": "clickEvent"; }, never, never, false>;
}
