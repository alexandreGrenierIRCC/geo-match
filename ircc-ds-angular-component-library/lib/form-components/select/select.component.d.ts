import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup } from '@angular/forms';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { IErrorPairs } from '../../../shared/interfaces/component-configs';
import { IErrorIDs, StandAloneFunctions } from '../../../shared/functions/stand-alone.functions';
import { ILabelConfig, ILabelIconConfig } from '../../shared/label/label.component';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface ISelectConfig {
    id: string;
    formGroup: FormGroup;
    label?: string;
    options?: ISelectOptionsConfig[];
    required?: boolean;
    hint?: string;
    desc?: string;
    placeholder?: string;
    size?: keyof typeof DSSizes;
    errorMessages?: IErrorPairs[];
    labelIconConfig?: ILabelIconConfig;
    topLabel?: string;
    disableError?: boolean;
}
export interface ISelectOptionsConfig {
    text: string;
    value?: string;
}
export declare class SelectComponent implements ControlValueAccessor, OnInit {
    standAloneFunctions: StandAloneFunctions;
    private translate;
    touched: boolean;
    errorIds: IErrorIDs[];
    activiatedSelect: boolean;
    rotateChevron: boolean;
    config: ISelectConfig;
    id: string;
    formGroup?: FormGroup;
    size?: keyof typeof DSSizes;
    label?: string;
    desc?: string;
    hint?: string;
    placeholder?: string;
    required?: boolean;
    options?: ISelectOptionsConfig[];
    errorMessages?: IErrorPairs[];
    topLabel?: string;
    disableError?: boolean;
    labelIconConfig?: ILabelIconConfig;
    formControl?: AbstractControl;
    errorAria: string;
    labelConfig: ILabelConfig;
    errorStubText: string;
    constructor(standAloneFunctions: StandAloneFunctions, translate: TranslateService);
    onChange: (formValue: string) => void;
    onTouched: () => void;
    writeValue(formValue: any): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    valueChange($event: any): void;
    onClicked(): void;
    onBlur(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    /**
     * Get the aria error text for the label
     */
    getAriaErrorText(): void;
    /**
     * Set a boolean representing the touched state to true and trigger getAriaErrorText()
     */
    onTouchedLabel(): void;
    setLang(lang: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent, "ircc-cl-lib-select", never, { "config": "config"; "id": "id"; "formGroup": "formGroup"; "size": "size"; "label": "label"; "desc": "desc"; "hint": "hint"; "placeholder": "placeholder"; "required": "required"; "options": "options"; "errorMessages": "errorMessages"; "topLabel": "topLabel"; "disableError": "disableError"; }, {}, never, never, false>;
}
