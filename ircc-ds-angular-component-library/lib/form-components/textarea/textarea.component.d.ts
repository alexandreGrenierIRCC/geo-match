import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup } from '@angular/forms';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { IErrorIDs, StandAloneFunctions } from '../../../shared/functions/stand-alone.functions';
import { IErrorPairs } from '../../../shared/interfaces/component-configs';
import { ILabelConfig, ILabelIconConfig } from '../../shared/label/label.component';
import { IErrorIconConfig } from '../error/error.component';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare const MAX_CHAR_LIMIT_EN = "Maximum character limit reached.";
export declare const MAX_CHAR_LIMIT_FR = "Limite maximale de caract\u00E8res atteinte.";
export declare const WARNING_CHAR_LIMIT_EN = "Maximum character limit reached in 15 characters.";
export declare const WARNING_CHAR_LIMIT_FR = "Limite maximale de caract\u00E8res atteinte en 15 caract\u00E8res.";
export interface ITextareaComponentConfig {
    formGroup: FormGroup;
    id: string;
    label?: string;
    desc?: string;
    hint?: string;
    required?: boolean;
    placeholder?: string;
    charLimit?: string;
    resizable?: keyof typeof ResizableTypes;
    size?: keyof typeof DSSizes;
    errorMessages?: IErrorPairs[];
    errorIcon?: IErrorIconConfig;
    labelIconConfig?: ILabelIconConfig;
}
export declare enum ResizableTypes {
    vertical = "vertical",
    horizontal = "password",
    both = "both",
    none = "none"
}
export declare class TextareaComponent implements ControlValueAccessor, OnInit {
    standAloneFunctions: StandAloneFunctions;
    private translate;
    formGroupEmpty: FormGroup;
    config: ITextareaComponentConfig;
    id: string;
    formGroup: FormGroup<any>;
    size?: keyof typeof DSSizes;
    label?: string;
    desc?: string;
    hint?: string;
    placeholder?: string;
    required?: boolean;
    charLimit: string;
    resizable?: keyof typeof ResizableTypes;
    errorMessages?: IErrorPairs[];
    errorIcon?: IErrorIconConfig;
    disabled: boolean;
    focusState: boolean;
    errorIds: IErrorIDs[];
    charLimitStatus: string;
    currentCharacterStatusAria: string;
    announceCharStatusChangeAria: boolean;
    charLength: number;
    labelConfig: ILabelConfig;
    textAreaAriaLabel: string;
    constructor(standAloneFunctions: StandAloneFunctions, translate: TranslateService);
    private onTouch?;
    private onChange?;
    ngOnInit(): void;
    ngOnChanges(): void;
    focusInput(focusValue: boolean): void;
    characterCountStatus(currCharCount: any): void;
    onBlur(): void;
    formatCharacterUsedString(currentLength: number): string;
    clearvalue(): void;
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextareaComponent, "ircc-cl-lib-textarea", never, { "config": "config"; "id": "id"; "formGroup": "formGroup"; "size": "size"; "label": "label"; "desc": "desc"; "hint": "hint"; "placeholder": "placeholder"; "required": "required"; "charLimit": "charLimit"; "resizable": "resizable"; "errorMessages": "errorMessages"; "errorIcon": "errorIcon"; }, {}, never, never, false>;
}
