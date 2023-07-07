import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, ValidatorFn } from '@angular/forms';
import { IErrorPairs } from '../../../shared/interfaces/component-configs';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { IErrorIDs, StandAloneFunctions } from '../../../shared/functions/stand-alone.functions';
import { ILabelConfig, ILabelIconConfig } from '../../shared/label/label.component';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface IRadioInputComponentConfig {
    id: string;
    formGroup: FormGroup;
    label?: string;
    desc?: string;
    hint?: string;
    required?: boolean;
    options?: IRadioInputOption[];
    size?: keyof typeof DSSizes;
    disabled?: boolean;
    error?: true;
    validators?: ValidatorFn[];
    helpText?: string;
    errorMessages?: IErrorPairs[];
    labelIconConfig?: ILabelIconConfig;
}
export interface IRadioInputOption {
    text: string;
    value?: string;
    sizeOverride?: keyof typeof DSSizes;
    disabled?: true;
    error?: true;
}
export declare class RadioInputComponent implements OnInit, ControlValueAccessor {
    standAloneFunctions: StandAloneFunctions;
    private translate;
    formGroupEmpty: FormGroup<{}>;
    touched: boolean;
    errorIds: IErrorIDs[];
    formControl?: AbstractControl;
    config: IRadioInputComponentConfig;
    id: string;
    formGroup: FormGroup<{}>;
    size?: keyof typeof DSSizes;
    label?: string;
    desc?: string;
    hint?: string;
    required?: boolean;
    options?: IRadioInputOption[];
    disabled?: boolean;
    error?: true;
    validators?: ValidatorFn[];
    helpText?: string;
    errorMessages?: IErrorPairs[];
    labelConfig: ILabelConfig;
    errorStubText: string;
    errorAria: string;
    constructor(standAloneFunctions: StandAloneFunctions, translate: TranslateService);
    onChange: (formValue: string) => void;
    onTouched: () => void;
    writeValue(formValue: any): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    /**
     * Get the aria error text for the label
     */
    getAriaErrorText(): void;
    /**
     * Set a boolean representing the touched state to true and trigger getAriaErrorText()
     */
    onTouchedLabel(): void;
    setLang(lang: string): void;
    /**
     * used to disable individual fields (from the config under 'options')
     * @param index of the option field to be disabled
     * @returns null if value is undefined, empty string otherwise. This works with [attr.disabled].
     */
    getDisabled(index: number): "" | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioInputComponent, "ircc-cl-lib-radio-input", never, { "config": "config"; "id": "id"; "formGroup": "formGroup"; "size": "size"; "label": "label"; "desc": "desc"; "hint": "hint"; "required": "required"; "options": "options"; "disabled": "disabled"; "error": "error"; "validators": "validators"; "helpText": "helpText"; "errorMessages": "errorMessages"; }, {}, never, never, false>;
}
