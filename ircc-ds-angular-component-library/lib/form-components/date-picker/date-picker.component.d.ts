import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ISelectConfig } from '../select/select.component';
import { ILabelConfig, ILabelIconConfig } from '../../shared/label/label.component';
import { IErrorPairs } from '../../../shared/interfaces/component-configs';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { IErrorIDs, StandAloneFunctions } from '../../../shared/functions/stand-alone.functions';
import * as i0 from "@angular/core";
export declare const DATE_PICKER_MONTHS_EN: string[];
export declare const DATE_PICKER_MONTHS_FR: string[];
export declare const DATE_PICKER_DAY_CONTROL_ID_EXTENSION = "_dayControl";
export declare const DATE_PICKER_MONTH_CONTROL_ID_EXTENSION = "_monthControl";
export declare const DATE_PICKER_YEAR_CONTROL_ID_EXTENSION = "_yearControl";
export declare const DATE_PICKER_LABELS_EN: string[];
export declare const DATE_PICKER_LABELS_FR: string[];
export declare const DATE_PICKER_PLACEHOLDER_YEAR_EN = "YYYY";
export declare const DATE_PICKER_PLACEHOLDER_YEAR_FR = "AAAA";
export declare const DATE_PICKER_PLACEHOLDER_MONTH_EN = "Month";
export declare const DATE_PICKER_PLACEHOLDER_MONTH_FR = "Mois";
export declare const DATE_PICKER_PLACEHOLDER_DAY_EN = "DD";
export declare const DATE_PICKER_PLACEHOLDER_DAY_FR = "JJ";
export declare const DATE_PICKER_UNKOWN_EN = "Unknown";
export declare const DATE_PICKER_UNKOWN_FR = "Inconnu";
export interface IDatePickerConfig {
    id: string;
    formGroup: FormGroup;
    size?: keyof typeof DSSizes;
    label?: string;
    required?: boolean;
    hint?: string;
    desc?: string;
    errorMessages?: IDatePickerErrorMessages;
    labelIconConfig?: ILabelIconConfig;
    maxYear?: number;
    minYear?: number;
    unknownDateToggle?: IDatePickerUnknownDateToggleConfig;
    yearSelectShow?: boolean;
    monthSelectShow?: boolean;
    daySelectShow?: boolean;
}
export interface IDatePickerUnknownDateToggleConfig {
    dayUnknown?: boolean;
    monthUnknown?: boolean;
    yearUnknown?: boolean;
}
export interface IDatePickerErrorMessages {
    general?: IErrorPairs[];
    day?: IErrorPairs[];
    month?: IErrorPairs[];
    year?: IErrorPairs[];
}
export interface IDatePickerDropDownConfigs {
    day: ISelectConfig;
    month: ISelectConfig;
    year: ISelectConfig;
}
export declare class DatePickerComponent implements OnInit {
    private translate;
    standAloneFunctions: StandAloneFunctions;
    config: IDatePickerConfig;
    formGroup?: FormGroup;
    id?: string;
    size?: keyof typeof DSSizes;
    label?: string;
    required?: boolean;
    hint?: string;
    desc?: string;
    errorMessages?: IDatePickerErrorMessages;
    maxYear?: number;
    minYear?: number;
    unknownDateToggle?: IDatePickerUnknownDateToggleConfig;
    yearSelectShow?: boolean;
    monthSelectShow?: boolean;
    daySelectShow?: boolean;
    errorIds: IErrorIDs[];
    days: number[];
    months: string[];
    labelConfig: ILabelConfig;
    touched: boolean;
    errorStubText: string;
    dropDownConfigs: IDatePickerDropDownConfigs;
    yearSelect: any;
    monthSelect: any;
    daySelect: any;
    private currentYear;
    constructor(translate: TranslateService, standAloneFunctions: StandAloneFunctions);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    /**
     * Set the language for dropdown options
     * TODO: Set value of each month to be the lov and not the text
     */
    setMonthsLanguage(): void;
    /**
     * Used to set the language of year/day 'unknown' field when langauge changes
     */
    setYearDayLanguage(): void;
    /**
     * Set the language for the labels of each dropdown
     */
    setLabelLanguage(): void;
    /**
     * update the days array with the correct number of days based on the year and the month
     * @param month string of the month (TODO: Change this to be an LOV)
     * @param year year selected
     */
    private updateDaysArray;
    /**
     * Get the number of days in the month based on the month and year
     * @param month string of the month selected
     * @param year number selected
     * @returns number representing the number of days in the month
     */
    private getNumDaysInMonth;
    /**
     * Check if the year is a leap year
     * @param year number representing the year
     * @returns true if a leap year, false otherwise
     */
    private isLeapYear;
    datePickerTouchedOrInvalid(): boolean;
    /**
     * Override the aria labels for each of the select fields in the date picker
     * @param hasError is the field in error?
     */
    getAriaOverride(hasError?: boolean): void;
    /**
     * Generates a core string of the label (date picker label, description, and hint) for aria text
     * @returns label core text translated string
     */
    getLabelCore(): string;
    /**
     * Generates the translated error string for aria text
     * @returns errors text translated string
     */
    getErrorAria(): string;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    private onTouched;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatePickerComponent, "ircc-cl-lib-date-picker", never, { "config": "config"; "formGroup": "formGroup"; "id": "id"; "size": "size"; "label": "label"; "required": "required"; "hint": "hint"; "desc": "desc"; "errorMessages": "errorMessages"; "maxYear": "maxYear"; "minYear": "minYear"; "unknownDateToggle": "unknownDateToggle"; "yearSelectShow": "yearSelectShow"; "monthSelectShow": "monthSelectShow"; "daySelectShow": "daySelectShow"; }, {}, never, never, false>;
}
