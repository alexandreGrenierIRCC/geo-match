import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup } from '@angular/forms';
import { IErrorPairs } from '../../../shared/interfaces/component-configs';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { IErrorIDs, StandAloneFunctions } from '../../../shared/functions/stand-alone.functions';
import { ILabelConfig, ILabelIconConfig } from '../../shared/label/label.component';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface ICheckBoxComponentConfig {
    formGroup: FormGroup;
    label?: string;
    required?: boolean;
    size?: keyof typeof DSSizes | DSSizes;
    mixed?: true;
    disableFocus?: boolean;
    inlineLabel?: string;
    inlineLabelBold?: boolean;
    id: string;
    helpText?: string;
    customErrorText?: string;
    desc?: string;
    errorMessages?: IErrorPairs[];
    labelIconConfig?: ILabelIconConfig;
}
export declare class CheckboxComponent implements ControlValueAccessor, OnInit {
    standAloneFunctions: StandAloneFunctions;
    private translate;
    formGroupEmpty: FormGroup;
    config: ICheckBoxComponentConfig;
    formGroup: FormGroup<any>;
    id: string;
    label?: string;
    required?: boolean;
    size?: keyof typeof DSSizes | DSSizes;
    mixed?: boolean;
    disableFocus?: boolean;
    inlineLabel?: string;
    inlineLabelBold?: boolean;
    helpText?: string;
    customErrorText?: string;
    desc?: string;
    errorMessages?: IErrorPairs[];
    isDisabled: boolean;
    errorIds: IErrorIDs[];
    formControl?: AbstractControl;
    labelConfig: ILabelConfig;
    touched: boolean;
    errorAria: string;
    errorStubText: string;
    constructor(standAloneFunctions: StandAloneFunctions, translate: TranslateService);
    onTouch: () => void;
    onChange: () => void;
    writeValue(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    /**
     * This is used automatically by the parent formControl. It is used in the template to set the label to disabled
     * @param isDisabled
     */
    setDisabledState?(isDisabled: boolean): void;
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
     * Return error state from FormGroup, must be touched & invalid
     */
    getErrorState(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "ircc-cl-lib-checkbox", never, { "config": "config"; "formGroup": "formGroup"; "id": "id"; "label": "label"; "required": "required"; "size": "size"; "mixed": "mixed"; "disableFocus": "disableFocus"; "inlineLabel": "inlineLabel"; "inlineLabelBold": "inlineLabelBold"; "helpText": "helpText"; "customErrorText": "customErrorText"; "desc": "desc"; "errorMessages": "errorMessages"; }, {}, never, never, false>;
}
