import { OnChanges, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup } from '@angular/forms';
import { IErrorPairs } from '../../../shared/interfaces/component-configs';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { IErrorIDs, StandAloneFunctions } from '../../../shared/functions/stand-alone.functions';
import { ILabelConfig, ILabelIconConfig } from '../../shared/label/label.component';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface IInputComponentConfig {
    label?: string;
    hint?: string;
    desc?: string;
    required?: boolean;
    placeholder?: string;
    type?: keyof typeof InputTypes;
    id: string;
    size?: keyof typeof DSSizes;
    formGroup: FormGroup;
    errorMessages?: IErrorPairs[];
    labelIconConfig?: ILabelIconConfig;
}
export declare enum InputTypes {
    text = "text",
    password = "password"
}
export declare const ARIA_TEXT: {
    en: {
        btnTypePasswordAriaLabel: string;
        btnTypePasswordShowAriaLabel: string;
        btnTypePasswordHideAriaLabel: string;
    };
    fr: {
        btnTypePasswordAriaLabel: string;
        btnTypePasswordShowAriaLabel: string;
        btnTypePasswordHideAriaLabel: string;
    };
};
export declare class InputComponent implements ControlValueAccessor, OnInit, OnChanges {
    standAloneFunctions: StandAloneFunctions;
    private translate;
    formGroupEmpty: FormGroup;
    /**
     * Note: DON'T include default values of '' unless it REALLY makes sense to do so - instead, make them optional.
     * The config input is where you declare the inputs desired properties such as labels, hints, descriptions, etc. where only the id and form group are mandatory properties. Refer to IInputComponentConfig interface.
     */
    config: IInputComponentConfig;
    /**
     * The input id is used to identify the component uniquely for subscribing to value changes and errors
     */
    id: string;
    /**
     * FormGroup aggregates the values of each child FormControl into one object, with each control name as the key. It calculates its status by reducing the status values of its children. For example, if one of the controls in a group is invalid, the entire group becomes invalid.
     */
    formGroup: FormGroup<any>;
    /**
     * Type refers to the 2 different input options: basic text or password as the password type has additional configuration
     */
    type: keyof typeof InputTypes;
    size?: keyof typeof DSSizes;
    label?: string;
    hint?: string;
    desc?: string;
    required?: boolean;
    placeholder?: string;
    errorMessages?: IErrorPairs[];
    disabled: boolean;
    focusState: boolean;
    showPassword?: boolean;
    typeControl: keyof typeof InputTypes;
    btnAriaLabel: string;
    btnAriaLabelHide: string;
    btnAriaLabelShow: string;
    errorIds: IErrorIDs[];
    errorAria: string;
    formControl?: AbstractControl;
    labelConfig: ILabelConfig;
    touched: boolean;
    errorStubText: string;
    constructor(standAloneFunctions: StandAloneFunctions, translate: TranslateService);
    private onTouch?;
    private onChange?;
    /**
     * When the page loads, we initialize the form with it's controls, labels, and config, and detect value changes and errors. setLang detects changes to the language toggle to serve the correct text
     */
    ngOnInit(): void;
    /**
     * Get the aria error text for the label
     */
    getAriaErrorText(): void;
    /**
     * Set a boolean representing the touched state to true and trigger getAriaErrorText()
     */
    onTouchedLabel(): void;
    /**
     * setLang detects changes to the language toggle to serve the correct aria error text
     */
    setLang(lang: string): void;
    /**
     * A lifecycle hook that is called when any data-bound property of a directive changes.
     */
    ngOnChanges(): void;
    /**
     * Apply focus state
     */
    focusInput(focusValue: boolean): void;
    /**
     * Toggle the password field
     */
    hideShow(): void;
    clearvalue(): void;
    /**
     * Prevents the info button from being triggered and marks the input as touched.
     * @param event
     */
    enterEvent(event: Event): void;
    /**
     *
     */
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    /**
     * Apply a disabled state
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * Return error state from FormGroup, must be touched & invalid
     */
    get getErrorState(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "ircc-cl-lib-input", never, { "config": "config"; "id": "id"; "formGroup": "formGroup"; "type": "type"; "size": "size"; "label": "label"; "hint": "hint"; "desc": "desc"; "required": "required"; "placeholder": "placeholder"; "errorMessages": "errorMessages"; }, {}, never, never, false>;
}
