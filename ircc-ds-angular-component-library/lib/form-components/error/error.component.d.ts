import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import * as i0 from "@angular/core";
export interface IErrorIconConfig {
    class: string;
    color?: string;
}
export interface IErrorComponentConfig {
    id: string;
    errorLOV: string;
    size?: keyof typeof DSSizes;
    icon?: IErrorIconConfig;
}
export declare class ErrorComponent implements OnInit, OnChanges {
    config?: IErrorComponentConfig;
    id?: string;
    errorLOV?: string;
    icon?: IErrorIconConfig;
    size?: keyof typeof DSSizes;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private portInputValues;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorComponent, "ircc-cl-lib-error", never, { "config": "config"; "id": "id"; "errorLOV": "errorLOV"; "icon": "icon"; "size": "size"; }, {}, never, never, false>;
}
