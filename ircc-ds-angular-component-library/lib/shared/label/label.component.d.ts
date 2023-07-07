import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { StandAloneFunctions } from '../../../shared/functions/stand-alone.functions';
import { IErrorPairs } from '../../../shared/interfaces/component-configs';
import { LabelButtonService } from './label-button.service';
import * as i0 from "@angular/core";
export interface ILabelIconConfig {
    iconClass: string;
    colour?: string;
    ariaText: string;
}
export interface ILabelConfig {
    formGroup: FormGroup;
    errorMessages?: IErrorPairs[];
    parentID: string;
    label?: string;
    desc?: string;
    hint?: string;
    required?: boolean;
    iconButton?: ILabelIconConfig;
    topLabel?: string;
    touched?: boolean;
}
export declare const ERROR_TEXT_STUB: {
    en: string;
    fr: string;
};
export declare const HELP_ICON_ALT: {
    en: string;
    fr: string;
};
export declare class LabelComponent implements OnInit {
    private translate;
    standAloneFunctions: StandAloneFunctions;
    private labelButton;
    config: ILabelConfig;
    formGroup?: FormGroup;
    errorMessages?: IErrorPairs[];
    parentID?: string;
    label?: string;
    desc?: string;
    hint?: string;
    required?: boolean;
    iconButton?: ILabelIconConfig;
    topLabel?: string;
    touched?: boolean;
    labelIconText: string;
    constructor(translate: TranslateService, standAloneFunctions: StandAloneFunctions, labelButton: LabelButtonService);
    ngOnInit(): void;
    setLang(lang: string): void;
    /**
     * Output the button press
     * @param id of the button being pressed (same as component ID)
     */
    iconButtonClick(): void;
    returnLabel(): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelComponent, "ircc-cl-lib-label", never, { "config": "config"; "formGroup": "formGroup"; "errorMessages": "errorMessages"; "parentID": "parentID"; "label": "label"; "desc": "desc"; "hint": "hint"; "required": "required"; "iconButton": "iconButton"; "topLabel": "topLabel"; "touched": "touched"; }, {}, never, never, false>;
}
