import { OnInit, EventEmitter, ElementRef, QueryList } from '@angular/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { IFlyoutOptionConfig } from '../flyout-option/flyout-option.component';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare enum IFlyoutSelectTypes {
    single = "single",
    multi = "multi"
}
export interface IFlyoutConfig {
    id: string;
    options?: IFlyoutOptionConfig[];
    disabled?: boolean;
    selection?: [] | number;
    type?: keyof typeof IFlyoutSelectTypes;
    size?: keyof typeof DSSizes;
}
export declare const FLYOUT_CURRENT_SELECTED: {
    en: string;
    fr: string;
};
export declare class FlyoutComponent implements OnInit {
    private translate;
    constructor(translate: TranslateService);
    optionContainers: QueryList<ElementRef>;
    config: IFlyoutConfig;
    id?: string;
    options?: IFlyoutOptionConfig[];
    disabled?: boolean;
    selection?: [] | number;
    type?: keyof typeof IFlyoutSelectTypes;
    size?: keyof typeof DSSizes;
    isSelected: EventEmitter<any>;
    selectedIndex: number;
    a11yText: string;
    currentSelected: string;
    ngOnInit(): void;
    onClick(event: Event): void;
    onArrowDown(event: KeyboardEvent): void;
    onArrowUp(event: KeyboardEvent): void;
    onEnter(event: KeyboardEvent): void;
    highlightIndex(el_id: any): void;
    /**
     * setLang detects changes to the language toggle to serve the correct aria error text
     */
    setLang(lang: string): void;
    clearOptions(): void;
    optionSelected(i: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlyoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlyoutComponent, "ircc-cl-lib-flyout", never, { "config": "config"; "id": "id"; "options": "options"; "disabled": "disabled"; "selection": "selection"; "type": "type"; "size": "size"; }, { "isSelected": "isSelected"; }, never, never, false>;
}
