import { Component, forwardRef, Input } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ERROR_TEXT_STUB } from '../../shared/label/label.component';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "../../../shared/functions/stand-alone.functions";
import * as i3 from "@angular/common";
import * as i4 from "../../shared/label/label.component";
import * as i5 from "../error/error.component";
import * as i6 from "../select/select.component";
export const DATE_PICKER_MONTHS_EN = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
export const DATE_PICKER_MONTHS_FR = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre'
];
export const DATE_PICKER_DAY_CONTROL_ID_EXTENSION = '_dayControl';
export const DATE_PICKER_MONTH_CONTROL_ID_EXTENSION = '_monthControl';
export const DATE_PICKER_YEAR_CONTROL_ID_EXTENSION = '_yearControl';
export const DATE_PICKER_LABELS_EN = ['Day', 'Month', 'Year'];
export const DATE_PICKER_LABELS_FR = ['Jour', 'Mois', 'Année'];
export const DATE_PICKER_PLACEHOLDER_YEAR_EN = 'YYYY';
export const DATE_PICKER_PLACEHOLDER_YEAR_FR = 'AAAA';
export const DATE_PICKER_PLACEHOLDER_MONTH_EN = 'Month';
export const DATE_PICKER_PLACEHOLDER_MONTH_FR = 'Mois';
export const DATE_PICKER_PLACEHOLDER_DAY_EN = 'DD';
export const DATE_PICKER_PLACEHOLDER_DAY_FR = 'JJ';
export const DATE_PICKER_UNKOWN_EN = 'Unknown';
export const DATE_PICKER_UNKOWN_FR = 'Inconnu';
export class DatePickerComponent {
    constructor(translate, standAloneFunctions) {
        this.translate = translate;
        this.standAloneFunctions = standAloneFunctions;
        this.config = {
            id: '',
            formGroup: new FormGroup({})
        };
        this.yearSelectShow = true;
        this.monthSelectShow = true;
        this.daySelectShow = true;
        this.errorIds = [];
        this.days = [];
        this.months = [];
        this.labelConfig = {
            formGroup: this.config.formGroup,
            parentID: ''
        };
        this.touched = false;
        this.errorStubText = '';
        this.dropDownConfigs = {
            day: {
                id: '',
                formGroup: this.config.formGroup,
                label: '',
                options: [],
                size: 'large',
                disableError: true
            },
            month: {
                id: '',
                formGroup: this.config.formGroup,
                label: '',
                options: [],
                size: 'large',
                disableError: true
            },
            year: {
                id: '',
                formGroup: this.config.formGroup,
                label: '',
                options: [],
                size: 'large',
                disableError: true
            }
        };
        this.yearSelect = '';
        this.monthSelect = '';
        this.daySelect = '';
        //Get the current year for use in the year dropdown
        this.currentYear = new Date().getFullYear();
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages?.general, this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig);
        //set config from individual options, if present
        if (this.formGroup)
            this.config.formGroup = this.formGroup;
        if (this.id)
            this.config.id = this.id;
        if (this.size)
            this.config.size = this.size;
        if (this.label)
            this.config.label = this.label;
        if (this.required)
            this.config.required = this.required;
        if (this.hint)
            this.config.hint = this.hint;
        if (this.desc)
            this.config.desc = this.desc;
        if (this.errorMessages)
            this.config.errorMessages = this.errorMessages;
        if (this.maxYear)
            this.config.maxYear = this.maxYear;
        if (this.minYear)
            this.config.minYear = this.minYear;
        if (this.unknownDateToggle)
            this.config.unknownDateToggle = this.unknownDateToggle;
        if (this.yearSelectShow)
            this.config.yearSelectShow = this.yearSelectShow;
        if (this.monthSelectShow)
            this.config.monthSelectShow = this.monthSelectShow;
        if (this.daySelectShow)
            this.config.daySelectShow = this.daySelectShow;
        //Set the ids for the dropdowns
        this.dropDownConfigs.day.id =
            this.config.id + DATE_PICKER_DAY_CONTROL_ID_EXTENSION;
        this.dropDownConfigs.month.id =
            this.config.id + DATE_PICKER_MONTH_CONTROL_ID_EXTENSION;
        this.dropDownConfigs.year.id =
            this.config.id + DATE_PICKER_YEAR_CONTROL_ID_EXTENSION;
        this.dropDownConfigs.day.formGroup = this.config.formGroup;
        this.dropDownConfigs.month.formGroup = this.config.formGroup;
        this.dropDownConfigs.year.formGroup = this.config.formGroup;
        this.dropDownConfigs.day.size = this.config.size;
        this.dropDownConfigs.month.size = this.config.size;
        this.dropDownConfigs.year.size = this.config.size;
        this.dropDownConfigs.day.topLabel = this.config.label;
        this.dropDownConfigs.month.topLabel = this.config.label;
        this.dropDownConfigs.year.topLabel = this.config.label;
        if (this.config.errorMessages?.general) {
            this.errorIds = this.standAloneFunctions.getErrorIds(this.config.formGroup, this.config.id + DATE_PICKER_YEAR_CONTROL_ID_EXTENSION, this.config.errorMessages.general);
        }
        // Populate the months and years arrays
        this.setMonthsLanguage();
        this.setLabelLanguage();
        this.translate.onLangChange.subscribe(() => {
            this.setMonthsLanguage();
            this.setYearDayLanguage();
            this.setLabelLanguage();
            this.getAriaOverride();
        });
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            if (this.config.unknownDateToggle?.yearUnknown)
                this.dropDownConfigs.year.options?.push({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
        }
        else {
            if (this.config.unknownDateToggle?.yearUnknown)
                this.dropDownConfigs.year.options?.push({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
        }
        if (this.config.minYear || this.config.maxYear) {
            if (this.config.minYear && this.config.maxYear) {
                for (let i = this.config.minYear; i <= this.config.maxYear; i++) {
                    this.dropDownConfigs.year.options?.push({ text: i.toString() });
                }
            }
            else if (this.config.minYear && !this.config.maxYear) {
                for (let i = this.config.minYear; i <= this.currentYear; i++) {
                    this.dropDownConfigs.year.options?.push({ text: i.toString() });
                }
            }
            else if (this.config.maxYear && !this.config.minYear) {
                for (let i = 1900; i <= this.config.maxYear; i++) {
                    this.dropDownConfigs.year.options?.push({ text: i.toString() });
                }
            }
        }
        else {
            for (let i = 1900; i <= this.currentYear; i++) {
                this.dropDownConfigs.year.options?.push({ text: i.toString() });
            }
        }
        // Populate the days array based on the selected month and year
        this.config.formGroup
            .get(this.config.id + DATE_PICKER_MONTH_CONTROL_ID_EXTENSION)
            ?.valueChanges.subscribe((month) => {
            //add if statement here - the value of year can be empty, since it may not have been selected yet.
            const numDays = this.updateDaysArray(month, this.config.formGroup.get(this.config.id + '_yearControl')?.value);
        });
        this.config.formGroup
            .get(this.config.id + DATE_PICKER_YEAR_CONTROL_ID_EXTENSION)
            ?.valueChanges.subscribe((year) => {
            const numDays = this.updateDaysArray(this.config.formGroup.get(this.config.id + DATE_PICKER_MONTH_CONTROL_ID_EXTENSION)?.value, year);
        });
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            if (this.config.unknownDateToggle?.dayUnknown)
                this.dropDownConfigs.day.options?.push({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
        }
        else {
            if (this.config.unknownDateToggle?.dayUnknown)
                this.dropDownConfigs.day.options?.push({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
        }
        if ((this.config.unknownDateToggle?.dayUnknown &&
            this.dropDownConfigs.day.options?.length === 1) ||
            (!this.config.unknownDateToggle?.dayUnknown &&
                this.dropDownConfigs.day.options?.length === 0)) {
            for (let i = 1; i <= 31; i++) {
                this.dropDownConfigs.day.options?.push({ text: i.toString() });
            }
        }
    }
    ngOnChanges() {
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, [], this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig);
    }
    ngAfterViewInit() {
        this.yearSelect = document.getElementById(this.dropDownConfigs.year.id);
        this.monthSelect = document.getElementById(this.dropDownConfigs.month.id);
        this.daySelect = document.getElementById(this.dropDownConfigs.day.id);
        this.getAriaOverride();
    }
    /**
     * Set the language for dropdown options
     * TODO: Set value of each month to be the lov and not the text
     */
    setMonthsLanguage() {
        this.dropDownConfigs.month.options = [];
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            this.months = DATE_PICKER_MONTHS_EN;
            if (this.config.unknownDateToggle?.monthUnknown)
                this.dropDownConfigs.month.options?.push({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
        }
        else {
            this.months = DATE_PICKER_MONTHS_FR;
            if (this.config.unknownDateToggle?.monthUnknown)
                this.dropDownConfigs.month.options?.push({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
        }
        this.months.forEach((month, index) => {
            this.dropDownConfigs.month.options?.push({
                text: month,
                value: (index + 1).toString().padStart(2, '0')
            });
        });
    }
    /**
     * Used to set the language of year/day 'unknown' field when langauge changes
     */
    setYearDayLanguage() {
        this.dropDownConfigs.day.options?.shift();
        this.dropDownConfigs.year.options?.shift();
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            this.months = DATE_PICKER_MONTHS_EN;
            if (this.config.unknownDateToggle?.dayUnknown)
                this.dropDownConfigs.day.options?.unshift({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
            if (this.config.unknownDateToggle?.yearUnknown)
                this.dropDownConfigs.year.options?.unshift({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
        }
        else {
            this.months = DATE_PICKER_MONTHS_FR;
            if (this.config.unknownDateToggle?.dayUnknown)
                this.dropDownConfigs.day.options?.unshift({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
            if (this.config.unknownDateToggle?.yearUnknown)
                this.dropDownConfigs.year.options?.unshift({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
        }
    }
    /**
     * Set the language for the labels of each dropdown
     */
    setLabelLanguage() {
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            this.dropDownConfigs.day.label = DATE_PICKER_LABELS_EN[0];
            this.dropDownConfigs.month.label = DATE_PICKER_LABELS_EN[1];
            this.dropDownConfigs.year.label = DATE_PICKER_LABELS_EN[2];
            this.dropDownConfigs.day.placeholder = DATE_PICKER_PLACEHOLDER_DAY_EN;
            this.dropDownConfigs.month.placeholder = DATE_PICKER_PLACEHOLDER_MONTH_EN;
            this.dropDownConfigs.year.placeholder = DATE_PICKER_PLACEHOLDER_YEAR_EN;
            this.errorStubText = ERROR_TEXT_STUB.en;
        }
        else {
            this.dropDownConfigs.day.label = DATE_PICKER_LABELS_FR[0];
            this.dropDownConfigs.month.label = DATE_PICKER_LABELS_FR[1];
            this.dropDownConfigs.year.label = DATE_PICKER_LABELS_FR[2];
            this.dropDownConfigs.day.placeholder = DATE_PICKER_PLACEHOLDER_DAY_FR;
            this.dropDownConfigs.month.placeholder = DATE_PICKER_PLACEHOLDER_MONTH_FR;
            this.dropDownConfigs.year.placeholder = DATE_PICKER_PLACEHOLDER_YEAR_FR;
            this.errorStubText = ERROR_TEXT_STUB.fr;
        }
    }
    /**
     * update the days array with the correct number of days based on the year and the month
     * @param month string of the month (TODO: Change this to be an LOV)
     * @param year year selected
     */
    updateDaysArray(month, year) {
        this.days = [];
        this.dropDownConfigs.day.options = [];
        const numDays = this.getNumDaysInMonth(month, year);
        for (let i = 1; i <= numDays; i++) {
            this.days.push(i);
        }
        this.config.formGroup
            .get(this.config.id + DATE_PICKER_DAY_CONTROL_ID_EXTENSION)
            ?.setValue('');
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            if (this.config.unknownDateToggle?.dayUnknown)
                this.dropDownConfigs.day.options?.push({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
        }
        else {
            if (this.config.unknownDateToggle?.dayUnknown)
                this.dropDownConfigs.day.options?.push({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
        }
        this.days.forEach((day) => {
            this.dropDownConfigs.day.options?.push({ text: day.toString() });
        });
    }
    /**
     * Get the number of days in the month based on the month and year
     * @param month string of the month selected
     * @param year number selected
     * @returns number representing the number of days in the month
     */
    getNumDaysInMonth(month, year) {
        const monthNum = +month;
        if (monthNum === 2) {
            if (String(year) === '**') {
                //if year is unknown and month is feb return 29
                return 29;
            }
            return this.isLeapYear(year) ? 29 : 28;
        }
        else if ([4, 6, 9, 11].includes(monthNum)) {
            return 30;
        }
        else {
            return 31;
        }
    }
    /**
     * Check if the year is a leap year
     * @param year number representing the year
     * @returns true if a leap year, false otherwise
     */
    isLeapYear(year) {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                return year % 400 === 0;
            }
            return true;
        }
        return false;
    }
    datePickerTouchedOrInvalid() {
        let datePickerState = false;
        datePickerState =
            (this.config.formGroup.get(this.dropDownConfigs.year.id)?.touched &&
                this.config.formGroup.get(this.dropDownConfigs.year.id)?.invalid) ||
                (this.config.formGroup.get(this.dropDownConfigs.month.id)?.touched &&
                    this.config.formGroup.get(this.dropDownConfigs.month.id)?.invalid) ||
                (this.config.formGroup.get(this.dropDownConfigs.day.id)?.touched &&
                    this.config.formGroup.get(this.dropDownConfigs.day.id)?.invalid);
        this.touched = datePickerState || false;
        this.getAriaOverride(datePickerState);
        return datePickerState ?? false;
        //  return this.config.formGroup?.touched && this.config.formGroup?.invalid;
    }
    /**
     * Override the aria labels for each of the select fields in the date picker
     * @param hasError is the field in error?
     */
    getAriaOverride(hasError) {
        if (this.yearSelect !== '') {
            if (hasError &&
                this.config.formGroup.get(this.dropDownConfigs.year.id)?.touched &&
                this.config.formGroup.get(this.dropDownConfigs.year.id)?.invalid) {
                this.yearSelect?.setAttribute('aria-label', this.getLabelCore() +
                    this.dropDownConfigs.year.label +
                    ' ' +
                    this.getErrorAria());
            }
            else {
                this.yearSelect?.setAttribute('aria-label', this.getLabelCore() + this.dropDownConfigs.year.label);
            }
        }
        if (this.monthSelect !== '') {
            if (hasError &&
                this.config.formGroup.get(this.dropDownConfigs.month.id)?.touched &&
                this.config.formGroup.get(this.dropDownConfigs.month.id)?.invalid) {
                this.monthSelect?.setAttribute('aria-label', this.getLabelCore() +
                    this.dropDownConfigs.month.label +
                    ' ' +
                    this.getErrorAria());
            }
            else {
                this.monthSelect?.setAttribute('aria-label', this.getLabelCore() + this.dropDownConfigs.month.label);
            }
        }
        if (this.daySelect !== '') {
            if (hasError &&
                this.config.formGroup.get(this.dropDownConfigs.day.id)?.touched &&
                this.config.formGroup.get(this.dropDownConfigs.day.id)?.invalid) {
                this.daySelect?.setAttribute('aria-label', this.getLabelCore() +
                    this.dropDownConfigs.day.label +
                    ' ' +
                    this.getErrorAria());
            }
            else {
                this.daySelect?.setAttribute('aria-label', this.getLabelCore() + this.dropDownConfigs.day.label);
            }
        }
    }
    /**
     * Generates a core string of the label (date picker label, description, and hint) for aria text
     * @returns label core text translated string
     */
    getLabelCore() {
        let labelCore = '';
        if (this.config.label)
            labelCore += this.translate.instant(this.config.label) + ' ';
        if (this.config.desc)
            labelCore += this.translate.instant(this.config.desc) + ' ';
        if (this.config.hint)
            labelCore += this.translate.instant(this.config.hint) + ' ';
        return labelCore;
    }
    /**
     * Generates the translated error string for aria text
     * @returns errors text translated string
     */
    getErrorAria() {
        let errors = '';
        this.errorIds.forEach((error) => {
            errors += this.translate.instant(error.errorLOV) + ' ';
        });
        return errors;
    }
    writeValue(obj) {
        if (obj) {
            this.config.formGroup.setValue(obj, { emitEvent: false });
        }
    }
    registerOnChange(fn) {
        this.config.formGroup.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        isDisabled
            ? this.config.formGroup.disable()
            : this.config.formGroup.enable();
    }
}
DatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DatePickerComponent, deps: [{ token: i1.TranslateService }, { token: i2.StandAloneFunctions }], target: i0.ɵɵFactoryTarget.Component });
DatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: DatePickerComponent, selector: "ircc-cl-lib-date-picker", inputs: { config: "config", formGroup: "formGroup", id: "id", size: "size", label: "label", required: "required", hint: "hint", desc: "desc", errorMessages: "errorMessages", maxYear: "maxYear", minYear: "minYear", unknownDateToggle: "unknownDateToggle", yearSelectShow: "yearSelectShow", monthSelectShow: "monthSelectShow", daySelectShow: "daySelectShow" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatePickerComponent),
            multi: true
        }
    ], usesOnChanges: true, ngImport: i0, template: "<div class=\"{{ config.size }}\">\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <fieldset class=\"all-select-container\">\n    <ircc-cl-lib-select\n      class=\"select-year\"\n      [attr.aria-live]=\"'off'\"\n      [config]=\"dropDownConfigs.year\"\n      *ngIf=\"config.yearSelectShow\"\n    ></ircc-cl-lib-select>\n    <ircc-cl-lib-select\n      class=\"select-month\"\n      [config]=\"dropDownConfigs.month\"\n      *ngIf=\"config.monthSelectShow\"\n    ></ircc-cl-lib-select>\n    <ircc-cl-lib-select\n      class=\"select-day\"\n      [config]=\"dropDownConfigs.day\"\n      *ngIf=\"config.daySelectShow\"\n    ></ircc-cl-lib-select>\n  </fieldset>\n  <div aria-live=\"polite\">\n    <ng-container *ngIf=\"datePickerTouchedOrInvalid()\">\n      <span class=\"sr-only\">{{\n        errorStubText + ': ' + (config.label || '' | translate) + ': '\n      }}</span>\n      <!-- TODO: Do something clever here to add which of the dropdowns are in error and put them in the above p tag -->\n      <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n        <div\n          *ngIf=\"config.formGroup.get(dropDownConfigs.year.id)?.errors?.[errors.key] || config.formGroup.get(dropDownConfigs.month.id)?.errors?.[errors.key] || config.formGroup.get(dropDownConfigs.day.id)?.errors?.[errors.key]\"\n          class=\"radio-errors\"\n        >\n          <ircc-cl-lib-error\n            [id]=\"errors.id\"\n            [errorLOV]=\"errors.errorLOV\"\n            [size]=\"config.size\"\n          ></ircc-cl-lib-error>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "component", type: i5.ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "component", type: i6.SelectComponent, selector: "ircc-cl-lib-select", inputs: ["config", "id", "formGroup", "size", "label", "desc", "hint", "placeholder", "required", "options", "errorMessages", "topLabel", "disableError"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-date-picker', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DatePickerComponent),
                            multi: true
                        }
                    ], template: "<div class=\"{{ config.size }}\">\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <fieldset class=\"all-select-container\">\n    <ircc-cl-lib-select\n      class=\"select-year\"\n      [attr.aria-live]=\"'off'\"\n      [config]=\"dropDownConfigs.year\"\n      *ngIf=\"config.yearSelectShow\"\n    ></ircc-cl-lib-select>\n    <ircc-cl-lib-select\n      class=\"select-month\"\n      [config]=\"dropDownConfigs.month\"\n      *ngIf=\"config.monthSelectShow\"\n    ></ircc-cl-lib-select>\n    <ircc-cl-lib-select\n      class=\"select-day\"\n      [config]=\"dropDownConfigs.day\"\n      *ngIf=\"config.daySelectShow\"\n    ></ircc-cl-lib-select>\n  </fieldset>\n  <div aria-live=\"polite\">\n    <ng-container *ngIf=\"datePickerTouchedOrInvalid()\">\n      <span class=\"sr-only\">{{\n        errorStubText + ': ' + (config.label || '' | translate) + ': '\n      }}</span>\n      <!-- TODO: Do something clever here to add which of the dropdowns are in error and put them in the above p tag -->\n      <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n        <div\n          *ngIf=\"config.formGroup.get(dropDownConfigs.year.id)?.errors?.[errors.key] || config.formGroup.get(dropDownConfigs.month.id)?.errors?.[errors.key] || config.formGroup.get(dropDownConfigs.day.id)?.errors?.[errors.key]\"\n          class=\"radio-errors\"\n        >\n          <ircc-cl-lib-error\n            [id]=\"errors.id\"\n            [errorLOV]=\"errors.errorLOV\"\n            [size]=\"config.size\"\n          ></ircc-cl-lib-error>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: i2.StandAloneFunctions }]; }, propDecorators: { config: [{
                type: Input
            }], formGroup: [{
                type: Input
            }], id: [{
                type: Input
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }], required: [{
                type: Input
            }], hint: [{
                type: Input
            }], desc: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], maxYear: [{
                type: Input
            }], minYear: [{
                type: Input
            }], unknownDateToggle: [{
                type: Input
            }], yearSelectShow: [{
                type: Input
            }], monthSelectShow: [{
                type: Input
            }], daySelectShow: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2Zvcm0tY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvZm9ybS1jb21wb25lbnRzL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUQsT0FBTyxFQUNMLGVBQWUsRUFHaEIsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7QUFRNUMsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUc7SUFDbkMsU0FBUztJQUNULFVBQVU7SUFDVixPQUFPO0lBQ1AsT0FBTztJQUNQLEtBQUs7SUFDTCxNQUFNO0lBQ04sTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0NBQ1gsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHO0lBQ25DLFNBQVM7SUFDVCxTQUFTO0lBQ1QsTUFBTTtJQUNOLE9BQU87SUFDUCxLQUFLO0lBQ0wsTUFBTTtJQUNOLFNBQVM7SUFDVCxNQUFNO0lBQ04sV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtDQUNYLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxvQ0FBb0MsR0FBRyxhQUFhLENBQUM7QUFDbEUsTUFBTSxDQUFDLE1BQU0sc0NBQXNDLEdBQUcsZUFBZSxDQUFDO0FBQ3RFLE1BQU0sQ0FBQyxNQUFNLHFDQUFxQyxHQUFH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NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO3lJQUdRLE1BQU07c0JBQWQsS0FBSztnQkFLRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgSVNlbGVjdENvbmZpZyB9IGZyb20gJy4uL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIEVSUk9SX1RFWFRfU1RVQixcbiAgSUxhYmVsQ29uZmlnLFxuICBJTGFiZWxJY29uQ29uZmlnXG59IGZyb20gJy4uLy4uL3NoYXJlZC9sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUVycm9yUGFpcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9jb21wb25lbnQtY29uZmlncyc7XG5pbXBvcnQgeyBEU1NpemVzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9qbC1jb21wb25lbnRzLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICBJRXJyb3JJRHMsXG4gIFN0YW5kQWxvbmVGdW5jdGlvbnNcbn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2Z1bmN0aW9ucy9zdGFuZC1hbG9uZS5mdW5jdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgREFURV9QSUNLRVJfTU9OVEhTX0VOID0gW1xuICAnSmFudWFyeScsXG4gICdGZWJydWFyeScsXG4gICdNYXJjaCcsXG4gICdBcHJpbCcsXG4gICdNYXknLFxuICAnSnVuZScsXG4gICdKdWx5JyxcbiAgJ0F1Z3VzdCcsXG4gICdTZXB0ZW1iZXInLFxuICAnT2N0b2JlcicsXG4gICdOb3ZlbWJlcicsXG4gICdEZWNlbWJlcidcbl07XG5cbmV4cG9ydCBjb25zdCBEQVRFX1BJQ0tFUl9NT05USFNfRlIgPSBbXG4gICdqYW52aWVyJyxcbiAgJ2bDqXZyaWVyJyxcbiAgJ21hcnMnLFxuICAnYXZyaWwnLFxuICAnbWFpJyxcbiAgJ2p1aW4nLFxuICAnanVpbGxldCcsXG4gICdhb8O7dCcsXG4gICdzZXB0ZW1icmUnLFxuICAnb2N0b2JyZScsXG4gICdub3ZlbWJyZScsXG4gICdkw6ljZW1icmUnXG5dO1xuXG5leHBvcnQgY29uc3QgREFURV9QSUNLRVJfREFZX0NPTlRST0xfSURfRVhURU5TSU9OID0gJ19kYXlDb250cm9sJztcbmV4cG9ydCBjb25zdCBEQVRFX1BJQ0tFUl9NT05USF9DT05UUk9MX0lEX0VYVEVOU0lPTiA9ICdfbW9udGhDb250cm9sJztcbmV4cG9ydCBjb25zdCBEQVRFX1BJQ0tFUl9ZRUFSX0NPTlRST0xfSURfRVhURU5TSU9OID0gJ195ZWFyQ29udHJvbCc7XG5cbmV4cG9ydCBjb25zdCBEQVRFX1BJQ0tFUl9MQUJFTFNfRU4gPSBbJ0RheScsICdNb250aCcsICdZZWFyJ107XG5leHBvcnQgY29uc3QgREFURV9QSUNLRVJfTEFCRUxTX0ZSID0gWydKb3VyJywgJ01vaXMnLCAnQW5uw6llJ107XG5cbmV4cG9ydCBjb25zdCBEQVRFX1BJQ0tFUl9QTEFDRUhPTERFUl9ZRUFSX0VOID0gJ1lZWVknO1xuZXhwb3J0IGNvbnN0IERBVEVfUElDS0VSX1BMQUNFSE9MREVSX1lFQVJfRlIgPSAnQUFBQSc7XG5cbmV4cG9ydCBjb25zdCBEQVRFX1BJQ0tFUl9QTEFDRUhPTERFUl9NT05USF9FTiA9ICdNb250aCc7XG5leHBvcnQgY29uc3QgREFURV9QSUNLRVJfUExBQ0VIT0xERVJfTU9OVEhfRlIgPSAnTW9pcyc7XG5cbmV4cG9ydCBjb25zdCBEQVRFX1BJQ0tFUl9QTEFDRUhPTERFUl9EQVlfRU4gPSAnREQnO1xuZXhwb3J0IGNvbnN0IERBVEVfUElDS0VSX1BMQUNFSE9MREVSX0RBWV9GUiA9ICdKSic7XG5cbmV4cG9ydCBjb25zdCBEQVRFX1BJQ0tFUl9VTktPV05fRU4gPSAnVW5rbm93bic7XG5leHBvcnQgY29uc3QgREFURV9QSUNLRVJfVU5LT1dOX0ZSID0gJ0luY29ubnUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyQ29uZmlnIHtcbiAgaWQ6IHN0cmluZztcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNTaXplcztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgaGludD86IHN0cmluZztcbiAgZGVzYz86IHN0cmluZztcbiAgZXJyb3JNZXNzYWdlcz86IElEYXRlUGlja2VyRXJyb3JNZXNzYWdlcztcbiAgbGFiZWxJY29uQ29uZmlnPzogSUxhYmVsSWNvbkNvbmZpZztcbiAgbWF4WWVhcj86IG51bWJlcjtcbiAgbWluWWVhcj86IG51bWJlcjtcbiAgdW5rbm93bkRhdGVUb2dnbGU/OiBJRGF0ZVBpY2tlclVua25vd25EYXRlVG9nZ2xlQ29uZmlnO1xuICB5ZWFyU2VsZWN0U2hvdz86IGJvb2xlYW47XG4gIG1vbnRoU2VsZWN0U2hvdz86IGJvb2xlYW47XG4gIGRheVNlbGVjdFNob3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyVW5rbm93bkRhdGVUb2dnbGVDb25maWcge1xuICBkYXlVbmtub3duPzogYm9vbGVhbjtcbiAgbW9udGhVbmtub3duPzogYm9vbGVhbjtcbiAgeWVhclVua25vd24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyRXJyb3JNZXNzYWdlcyB7XG4gIGdlbmVyYWw/OiBJRXJyb3JQYWlyc1tdO1xuICBkYXk/OiBJRXJyb3JQYWlyc1tdO1xuICBtb250aD86IElFcnJvclBhaXJzW107XG4gIHllYXI/OiBJRXJyb3JQYWlyc1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyRHJvcERvd25Db25maWdzIHtcbiAgZGF5OiBJU2VsZWN0Q29uZmlnO1xuICBtb250aDogSVNlbGVjdENvbmZpZztcbiAgeWVhcjogSVNlbGVjdENvbmZpZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItZGF0ZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZzogSURhdGVQaWNrZXJDb25maWcgPSB7XG4gICAgaWQ6ICcnLFxuICAgIGZvcm1Hcm91cDogbmV3IEZvcm1Hcm91cCh7fSlcbiAgfTtcblxuICBASW5wdXQoKSBmb3JtR3JvdXA/OiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGlkPzogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhpbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlc2M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZXM/OiBJRGF0ZVBpY2tlckVycm9yTWVzc2FnZXM7XG4gIEBJbnB1dCgpIG1heFllYXI/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1pblllYXI/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHVua25vd25EYXRlVG9nZ2xlPzogSURhdGVQaWNrZXJVbmtub3duRGF0ZVRvZ2dsZUNvbmZpZztcbiAgQElucHV0KCkgeWVhclNlbGVjdFNob3c/OiBib29sZWFuPSB0cnVlXG4gIEBJbnB1dCgpIG1vbnRoU2VsZWN0U2hvdz86IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBkYXlTZWxlY3RTaG93PzogYm9vbGVhbj0gdHJ1ZTtcblxuICBlcnJvcklkczogSUVycm9ySURzW10gPSBbXTtcbiAgZGF5czogbnVtYmVyW10gPSBbXTtcbiAgbW9udGhzOiBzdHJpbmdbXSA9IFtdO1xuICBsYWJlbENvbmZpZzogSUxhYmVsQ29uZmlnID0ge1xuICAgIGZvcm1Hcm91cDogdGhpcy5jb25maWcuZm9ybUdyb3VwLFxuICAgIHBhcmVudElEOiAnJ1xuICB9O1xuICB0b3VjaGVkID0gZmFsc2U7XG4gIGVycm9yU3R1YlRleHQgPSAnJztcblxuICBkcm9wRG93bkNvbmZpZ3M6IElEYXRlUGlja2VyRHJvcERvd25Db25maWdzID0ge1xuICAgIGRheToge1xuICAgICAgaWQ6ICcnLFxuICAgICAgZm9ybUdyb3VwOiB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgICBsYWJlbDogJycsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICAgIHNpemU6ICdsYXJnZScsXG4gICAgICBkaXNhYmxlRXJyb3I6IHRydWVcbiAgICB9LFxuICAgIG1vbnRoOiB7XG4gICAgICBpZDogJycsXG4gICAgICBmb3JtR3JvdXA6IHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgc2l6ZTogJ2xhcmdlJyxcbiAgICAgIGRpc2FibGVFcnJvcjogdHJ1ZVxuICAgIH0sXG4gICAgeWVhcjoge1xuICAgICAgaWQ6ICcnLFxuICAgICAgZm9ybUdyb3VwOiB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgICBsYWJlbDogJycsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICAgIHNpemU6ICdsYXJnZScsXG4gICAgICBkaXNhYmxlRXJyb3I6IHRydWVcbiAgICB9XG4gIH07XG5cbiAgeWVhclNlbGVjdDogYW55ID0gJyc7XG4gIG1vbnRoU2VsZWN0OiBhbnkgPSAnJztcbiAgZGF5U2VsZWN0OiBhbnkgPSAnJztcblxuICAvL0dldCB0aGUgY3VycmVudCB5ZWFyIGZvciB1c2UgaW4gdGhlIHllYXIgZHJvcGRvd25cbiAgcHJpdmF0ZSBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwdWJsaWMgc3RhbmRBbG9uZUZ1bmN0aW9uczogU3RhbmRBbG9uZUZ1bmN0aW9uc1xuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYWJlbENvbmZpZyA9IHRoaXMuc3RhbmRBbG9uZUZ1bmN0aW9ucy5tYWtlTGFiZWxDb25maWcoXG4gICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgICB0aGlzLmNvbmZpZy5pZCxcbiAgICAgIHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXM/LmdlbmVyYWwsXG4gICAgICB0aGlzLmNvbmZpZy5sYWJlbCxcbiAgICAgIHRoaXMuY29uZmlnLmRlc2MsXG4gICAgICB0aGlzLmNvbmZpZy5oaW50LFxuICAgICAgdGhpcy5jb25maWcucmVxdWlyZWQsXG4gICAgICB0aGlzLmNvbmZpZy5sYWJlbEljb25Db25maWcsXG4gICAgKTtcblxuICAgIC8vc2V0IGNvbmZpZyBmcm9tIGluZGl2aWR1YWwgb3B0aW9ucywgaWYgcHJlc2VudFxuICAgIGlmICh0aGlzLmZvcm1Hcm91cCkgdGhpcy5jb25maWcuZm9ybUdyb3VwID0gdGhpcy5mb3JtR3JvdXA7XG4gICAgaWYgKHRoaXMuaWQpIHRoaXMuY29uZmlnLmlkID0gdGhpcy5pZDtcbiAgICBpZiAodGhpcy5zaXplKSB0aGlzLmNvbmZpZy5zaXplID0gdGhpcy5zaXplO1xuICAgIGlmICh0aGlzLmxhYmVsKSB0aGlzLmNvbmZpZy5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHRoaXMuY29uZmlnLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICBpZiAodGhpcy5oaW50KSB0aGlzLmNvbmZpZy5oaW50ID0gdGhpcy5oaW50O1xuICAgIGlmICh0aGlzLmRlc2MpIHRoaXMuY29uZmlnLmRlc2MgPSB0aGlzLmRlc2M7XG4gICAgaWYgKHRoaXMuZXJyb3JNZXNzYWdlcykgdGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcyA9IHRoaXMuZXJyb3JNZXNzYWdlcztcbiAgICBpZiAodGhpcy5tYXhZZWFyKSB0aGlzLmNvbmZpZy5tYXhZZWFyID0gdGhpcy5tYXhZZWFyO1xuICAgIGlmICh0aGlzLm1pblllYXIpIHRoaXMuY29uZmlnLm1pblllYXIgPSB0aGlzLm1pblllYXI7XG4gICAgaWYgKHRoaXMudW5rbm93bkRhdGVUb2dnbGUpXG4gICAgICB0aGlzLmNvbmZpZy51bmtub3duRGF0ZVRvZ2dsZSA9IHRoaXMudW5rbm93bkRhdGVUb2dnbGU7XG4gICAgaWYgKHRoaXMueWVhclNlbGVjdFNob3cpIHRoaXMuY29uZmlnLnllYXJTZWxlY3RTaG93ID0gdGhpcy55ZWFyU2VsZWN0U2hvdztcbiAgICBpZiAodGhpcy5tb250aFNlbGVjdFNob3cpIHRoaXMuY29uZmlnLm1vbnRoU2VsZWN0U2hvdyA9IHRoaXMubW9udGhTZWxlY3RTaG93O1xuICAgIGlmICh0aGlzLmRheVNlbGVjdFNob3cpIHRoaXMuY29uZmlnLmRheVNlbGVjdFNob3cgPSB0aGlzLmRheVNlbGVjdFNob3c7XG4gICAgLy9TZXQgdGhlIGlkcyBmb3IgdGhlIGRyb3Bkb3duc1xuICAgIHRoaXMuZHJvcERvd25Db25maWdzLmRheS5pZCA9XG4gICAgICB0aGlzLmNvbmZpZy5pZCArIERBVEVfUElDS0VSX0RBWV9DT05UUk9MX0lEX0VYVEVOU0lPTjtcbiAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5tb250aC5pZCA9XG4gICAgICB0aGlzLmNvbmZpZy5pZCArIERBVEVfUElDS0VSX01PTlRIX0NPTlRST0xfSURfRVhURU5TSU9OO1xuICAgIHRoaXMuZHJvcERvd25Db25maWdzLnllYXIuaWQgPVxuICAgICAgdGhpcy5jb25maWcuaWQgKyBEQVRFX1BJQ0tFUl9ZRUFSX0NPTlRST0xfSURfRVhURU5TSU9OO1xuXG4gICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MuZGF5LmZvcm1Hcm91cCA9IHRoaXMuY29uZmlnLmZvcm1Hcm91cDtcbiAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5tb250aC5mb3JtR3JvdXAgPSB0aGlzLmNvbmZpZy5mb3JtR3JvdXA7XG4gICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MueWVhci5mb3JtR3JvdXAgPSB0aGlzLmNvbmZpZy5mb3JtR3JvdXA7XG5cbiAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkuc2l6ZSA9IHRoaXMuY29uZmlnLnNpemU7XG4gICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MubW9udGguc2l6ZSA9IHRoaXMuY29uZmlnLnNpemU7XG4gICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MueWVhci5zaXplID0gdGhpcy5jb25maWcuc2l6ZTtcblxuICAgIHRoaXMuZHJvcERvd25Db25maWdzLmRheS50b3BMYWJlbCA9IHRoaXMuY29uZmlnLmxhYmVsO1xuICAgIHRoaXMuZHJvcERvd25Db25maWdzLm1vbnRoLnRvcExhYmVsID0gdGhpcy5jb25maWcubGFiZWw7XG4gICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MueWVhci50b3BMYWJlbCA9IHRoaXMuY29uZmlnLmxhYmVsO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXM/LmdlbmVyYWwpIHtcbiAgICAgIHRoaXMuZXJyb3JJZHMgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMuZ2V0RXJyb3JJZHMoXG4gICAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgICAgdGhpcy5jb25maWcuaWQgKyBEQVRFX1BJQ0tFUl9ZRUFSX0NPTlRST0xfSURfRVhURU5TSU9OLFxuICAgICAgICB0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzLmdlbmVyYWxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUG9wdWxhdGUgdGhlIG1vbnRocyBhbmQgeWVhcnMgYXJyYXlzXG4gICAgdGhpcy5zZXRNb250aHNMYW5ndWFnZSgpO1xuICAgIHRoaXMuc2V0TGFiZWxMYW5ndWFnZSgpO1xuICAgIHRoaXMudHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRNb250aHNMYW5ndWFnZSgpO1xuICAgICAgdGhpcy5zZXRZZWFyRGF5TGFuZ3VhZ2UoKTtcbiAgICAgIHRoaXMuc2V0TGFiZWxMYW5ndWFnZSgpO1xuICAgICAgdGhpcy5nZXRBcmlhT3ZlcnJpZGUoKTtcbiAgICB9KTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyA9PT0gJ2VuJyB8fFxuICAgICAgdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgPT09ICdlbi1VUydcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy51bmtub3duRGF0ZVRvZ2dsZT8ueWVhclVua25vd24pXG4gICAgICAgIHRoaXMuZHJvcERvd25Db25maWdzLnllYXIub3B0aW9ucz8ucHVzaCh7XG4gICAgICAgICAgdGV4dDogREFURV9QSUNLRVJfVU5LT1dOX0VOLFxuICAgICAgICAgIHZhbHVlOiAnKionXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jb25maWcudW5rbm93bkRhdGVUb2dnbGU/LnllYXJVbmtub3duKVxuICAgICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy55ZWFyLm9wdGlvbnM/LnB1c2goe1xuICAgICAgICAgIHRleHQ6IERBVEVfUElDS0VSX1VOS09XTl9GUixcbiAgICAgICAgICB2YWx1ZTogJyoqJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcubWluWWVhciB8fCB0aGlzLmNvbmZpZy5tYXhZZWFyKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcubWluWWVhciAmJiB0aGlzLmNvbmZpZy5tYXhZZWFyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmNvbmZpZy5taW5ZZWFyOyBpIDw9IHRoaXMuY29uZmlnLm1heFllYXI7IGkrKykge1xuICAgICAgICAgIHRoaXMuZHJvcERvd25Db25maWdzLnllYXIub3B0aW9ucz8ucHVzaCh7IHRleHQ6IGkudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5taW5ZZWFyICYmICF0aGlzLmNvbmZpZy5tYXhZZWFyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmNvbmZpZy5taW5ZZWFyOyBpIDw9IHRoaXMuY3VycmVudFllYXI7IGkrKykge1xuICAgICAgICAgIHRoaXMuZHJvcERvd25Db25maWdzLnllYXIub3B0aW9ucz8ucHVzaCh7IHRleHQ6IGkudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5tYXhZZWFyICYmICF0aGlzLmNvbmZpZy5taW5ZZWFyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOTAwOyBpIDw9IHRoaXMuY29uZmlnLm1heFllYXI7IGkrKykge1xuICAgICAgICAgIHRoaXMuZHJvcERvd25Db25maWdzLnllYXIub3B0aW9ucz8ucHVzaCh7IHRleHQ6IGkudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMTkwMDsgaSA8PSB0aGlzLmN1cnJlbnRZZWFyOyBpKyspIHtcbiAgICAgICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MueWVhci5vcHRpb25zPy5wdXNoKHsgdGV4dDogaS50b1N0cmluZygpIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBvcHVsYXRlIHRoZSBkYXlzIGFycmF5IGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBtb250aCBhbmQgeWVhclxuICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cFxuICAgICAgLmdldCh0aGlzLmNvbmZpZy5pZCArIERBVEVfUElDS0VSX01PTlRIX0NPTlRST0xfSURfRVhURU5TSU9OKVxuICAgICAgPy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChtb250aCkgPT4ge1xuICAgICAgICAvL2FkZCBpZiBzdGF0ZW1lbnQgaGVyZSAtIHRoZSB2YWx1ZSBvZiB5ZWFyIGNhbiBiZSBlbXB0eSwgc2luY2UgaXQgbWF5IG5vdCBoYXZlIGJlZW4gc2VsZWN0ZWQgeWV0LlxuICAgICAgICBjb25zdCBudW1EYXlzID0gdGhpcy51cGRhdGVEYXlzQXJyYXkoXG4gICAgICAgICAgbW9udGgsXG4gICAgICAgICAgdGhpcy5jb25maWcuZm9ybUdyb3VwLmdldCh0aGlzLmNvbmZpZy5pZCArICdfeWVhckNvbnRyb2wnKT8udmFsdWVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cFxuICAgICAgLmdldCh0aGlzLmNvbmZpZy5pZCArIERBVEVfUElDS0VSX1lFQVJfQ09OVFJPTF9JRF9FWFRFTlNJT04pXG4gICAgICA/LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHllYXIpID0+IHtcbiAgICAgICAgY29uc3QgbnVtRGF5cyA9IHRoaXMudXBkYXRlRGF5c0FycmF5KFxuICAgICAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cC5nZXQoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5pZCArIERBVEVfUElDS0VSX01PTlRIX0NPTlRST0xfSURfRVhURU5TSU9OXG4gICAgICAgICAgKT8udmFsdWUsXG4gICAgICAgICAgeWVhclxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyA9PT0gJ2VuJyB8fFxuICAgICAgdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgPT09ICdlbi1VUydcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy51bmtub3duRGF0ZVRvZ2dsZT8uZGF5VW5rbm93bilcbiAgICAgICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MuZGF5Lm9wdGlvbnM/LnB1c2goe1xuICAgICAgICAgIHRleHQ6IERBVEVfUElDS0VSX1VOS09XTl9FTixcbiAgICAgICAgICB2YWx1ZTogJyoqJ1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnVua25vd25EYXRlVG9nZ2xlPy5kYXlVbmtub3duKVxuICAgICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkub3B0aW9ucz8ucHVzaCh7XG4gICAgICAgICAgdGV4dDogREFURV9QSUNLRVJfVU5LT1dOX0ZSLFxuICAgICAgICAgIHZhbHVlOiAnKionXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICh0aGlzLmNvbmZpZy51bmtub3duRGF0ZVRvZ2dsZT8uZGF5VW5rbm93biAmJlxuICAgICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkub3B0aW9ucz8ubGVuZ3RoID09PSAxKSB8fFxuICAgICAgKCF0aGlzLmNvbmZpZy51bmtub3duRGF0ZVRvZ2dsZT8uZGF5VW5rbm93biAmJlxuICAgICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkub3B0aW9ucz8ubGVuZ3RoID09PSAwKVxuICAgICkge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzE7IGkrKykge1xuICAgICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkub3B0aW9ucz8ucHVzaCh7IHRleHQ6IGkudG9TdHJpbmcoKSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmxhYmVsQ29uZmlnID0gdGhpcy5zdGFuZEFsb25lRnVuY3Rpb25zLm1ha2VMYWJlbENvbmZpZyhcbiAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgW10sXG4gICAgICB0aGlzLmNvbmZpZy5sYWJlbCxcbiAgICAgIHRoaXMuY29uZmlnLmRlc2MsXG4gICAgICB0aGlzLmNvbmZpZy5oaW50LFxuICAgICAgdGhpcy5jb25maWcucmVxdWlyZWQsXG4gICAgICB0aGlzLmNvbmZpZy5sYWJlbEljb25Db25maWdcbiAgICApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMueWVhclNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZHJvcERvd25Db25maWdzLnllYXIuaWQpO1xuICAgIHRoaXMubW9udGhTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRyb3BEb3duQ29uZmlncy5tb250aC5pZCk7XG4gICAgdGhpcy5kYXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkuaWQpO1xuICAgIHRoaXMuZ2V0QXJpYU92ZXJyaWRlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBsYW5ndWFnZSBmb3IgZHJvcGRvd24gb3B0aW9uc1xuICAgKiBUT0RPOiBTZXQgdmFsdWUgb2YgZWFjaCBtb250aCB0byBiZSB0aGUgbG92IGFuZCBub3QgdGhlIHRleHRcbiAgICovXG4gIHNldE1vbnRoc0xhbmd1YWdlKCkge1xuICAgIHRoaXMuZHJvcERvd25Db25maWdzLm1vbnRoLm9wdGlvbnMgPSBbXTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyA9PT0gJ2VuJyB8fFxuICAgICAgdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgPT09ICdlbi1VUydcbiAgICApIHtcbiAgICAgIHRoaXMubW9udGhzID0gREFURV9QSUNLRVJfTU9OVEhTX0VOO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnVua25vd25EYXRlVG9nZ2xlPy5tb250aFVua25vd24pXG4gICAgICAgIHRoaXMuZHJvcERvd25Db25maWdzLm1vbnRoLm9wdGlvbnM/LnB1c2goe1xuICAgICAgICAgIHRleHQ6IERBVEVfUElDS0VSX1VOS09XTl9FTixcbiAgICAgICAgICB2YWx1ZTogJyoqJ1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb250aHMgPSBEQVRFX1BJQ0tFUl9NT05USFNfRlI7XG4gICAgICBpZiAodGhpcy5jb25maWcudW5rbm93bkRhdGVUb2dnbGU/Lm1vbnRoVW5rbm93bilcbiAgICAgICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MubW9udGgub3B0aW9ucz8ucHVzaCh7XG4gICAgICAgICAgdGV4dDogREFURV9QSUNLRVJfVU5LT1dOX0ZSLFxuICAgICAgICAgIHZhbHVlOiAnKionXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm1vbnRocy5mb3JFYWNoKChtb250aDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5tb250aC5vcHRpb25zPy5wdXNoKHtcbiAgICAgICAgdGV4dDogbW9udGgsXG4gICAgICAgIHZhbHVlOiAoaW5kZXggKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJylcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gc2V0IHRoZSBsYW5ndWFnZSBvZiB5ZWFyL2RheSAndW5rbm93bicgZmllbGQgd2hlbiBsYW5nYXVnZSBjaGFuZ2VzXG4gICAqL1xuICBzZXRZZWFyRGF5TGFuZ3VhZ2UoKSB7XG4gICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MuZGF5Lm9wdGlvbnM/LnNoaWZ0KCk7XG4gICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MueWVhci5vcHRpb25zPy5zaGlmdCgpO1xuICAgIGlmIChcbiAgICAgIHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nID09PSAnZW4nIHx8XG4gICAgICB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyA9PT0gJ2VuLVVTJ1xuICAgICkge1xuICAgICAgdGhpcy5tb250aHMgPSBEQVRFX1BJQ0tFUl9NT05USFNfRU47XG4gICAgICBpZiAodGhpcy5jb25maWcudW5rbm93bkRhdGVUb2dnbGU/LmRheVVua25vd24pXG4gICAgICAgIHRoaXMuZHJvcERvd25Db25maWdzLmRheS5vcHRpb25zPy51bnNoaWZ0KHtcbiAgICAgICAgICB0ZXh0OiBEQVRFX1BJQ0tFUl9VTktPV05fRU4sXG4gICAgICAgICAgdmFsdWU6ICcqKidcbiAgICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5jb25maWcudW5rbm93bkRhdGVUb2dnbGU/LnllYXJVbmtub3duKVxuICAgICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy55ZWFyLm9wdGlvbnM/LnVuc2hpZnQoe1xuICAgICAgICAgIHRleHQ6IERBVEVfUElDS0VSX1VOS09XTl9FTixcbiAgICAgICAgICB2YWx1ZTogJyoqJ1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb250aHMgPSBEQVRFX1BJQ0tFUl9NT05USFNfRlI7XG4gICAgICBpZiAodGhpcy5jb25maWcudW5rbm93bkRhdGVUb2dnbGU/LmRheVVua25vd24pXG4gICAgICAgIHRoaXMuZHJvcERvd25Db25maWdzLmRheS5vcHRpb25zPy51bnNoaWZ0KHtcbiAgICAgICAgICB0ZXh0OiBEQVRFX1BJQ0tFUl9VTktPV05fRlIsXG4gICAgICAgICAgdmFsdWU6ICcqKidcbiAgICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5jb25maWcudW5rbm93bkRhdGVUb2dnbGU/LnllYXJVbmtub3duKVxuICAgICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy55ZWFyLm9wdGlvbnM/LnVuc2hpZnQoe1xuICAgICAgICAgIHRleHQ6IERBVEVfUElDS0VSX1VOS09XTl9GUixcbiAgICAgICAgICB2YWx1ZTogJyoqJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBsYW5ndWFnZSBmb3IgdGhlIGxhYmVscyBvZiBlYWNoIGRyb3Bkb3duXG4gICAqL1xuICBzZXRMYWJlbExhbmd1YWdlKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nID09PSAnZW4nIHx8XG4gICAgICB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyA9PT0gJ2VuLVVTJ1xuICAgICkge1xuICAgICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MuZGF5LmxhYmVsID0gREFURV9QSUNLRVJfTEFCRUxTX0VOWzBdO1xuICAgICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MubW9udGgubGFiZWwgPSBEQVRFX1BJQ0tFUl9MQUJFTFNfRU5bMV07XG4gICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy55ZWFyLmxhYmVsID0gREFURV9QSUNLRVJfTEFCRUxTX0VOWzJdO1xuXG4gICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkucGxhY2Vob2xkZXIgPSBEQVRFX1BJQ0tFUl9QTEFDRUhPTERFUl9EQVlfRU47XG4gICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5tb250aC5wbGFjZWhvbGRlciA9IERBVEVfUElDS0VSX1BMQUNFSE9MREVSX01PTlRIX0VOO1xuICAgICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MueWVhci5wbGFjZWhvbGRlciA9IERBVEVfUElDS0VSX1BMQUNFSE9MREVSX1lFQVJfRU47XG5cbiAgICAgIHRoaXMuZXJyb3JTdHViVGV4dCA9IEVSUk9SX1RFWFRfU1RVQi5lbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MuZGF5LmxhYmVsID0gREFURV9QSUNLRVJfTEFCRUxTX0ZSWzBdO1xuICAgICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MubW9udGgubGFiZWwgPSBEQVRFX1BJQ0tFUl9MQUJFTFNfRlJbMV07XG4gICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy55ZWFyLmxhYmVsID0gREFURV9QSUNLRVJfTEFCRUxTX0ZSWzJdO1xuXG4gICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkucGxhY2Vob2xkZXIgPSBEQVRFX1BJQ0tFUl9QTEFDRUhPTERFUl9EQVlfRlI7XG4gICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5tb250aC5wbGFjZWhvbGRlciA9IERBVEVfUElDS0VSX1BMQUNFSE9MREVSX01PTlRIX0ZSO1xuICAgICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MueWVhci5wbGFjZWhvbGRlciA9IERBVEVfUElDS0VSX1BMQUNFSE9MREVSX1lFQVJfRlI7XG5cbiAgICAgIHRoaXMuZXJyb3JTdHViVGV4dCA9IEVSUk9SX1RFWFRfU1RVQi5mcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlIHRoZSBkYXlzIGFycmF5IHdpdGggdGhlIGNvcnJlY3QgbnVtYmVyIG9mIGRheXMgYmFzZWQgb24gdGhlIHllYXIgYW5kIHRoZSBtb250aFxuICAgKiBAcGFyYW0gbW9udGggc3RyaW5nIG9mIHRoZSBtb250aCAoVE9ETzogQ2hhbmdlIHRoaXMgdG8gYmUgYW4gTE9WKVxuICAgKiBAcGFyYW0geWVhciB5ZWFyIHNlbGVjdGVkXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZURheXNBcnJheShtb250aDogc3RyaW5nLCB5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmRheXMgPSBbXTtcbiAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkub3B0aW9ucyA9IFtdO1xuICAgIGNvbnN0IG51bURheXMgPSB0aGlzLmdldE51bURheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1EYXlzOyBpKyspIHtcbiAgICAgIHRoaXMuZGF5cy5wdXNoKGkpO1xuICAgIH1cbiAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXBcbiAgICAgIC5nZXQodGhpcy5jb25maWcuaWQgKyBEQVRFX1BJQ0tFUl9EQVlfQ09OVFJPTF9JRF9FWFRFTlNJT04pXG4gICAgICA/LnNldFZhbHVlKCcnKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyA9PT0gJ2VuJyB8fFxuICAgICAgdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgPT09ICdlbi1VUydcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy51bmtub3duRGF0ZVRvZ2dsZT8uZGF5VW5rbm93bilcbiAgICAgICAgdGhpcy5kcm9wRG93bkNvbmZpZ3MuZGF5Lm9wdGlvbnM/LnB1c2goe1xuICAgICAgICAgIHRleHQ6IERBVEVfUElDS0VSX1VOS09XTl9FTixcbiAgICAgICAgICB2YWx1ZTogJyoqJ1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnVua25vd25EYXRlVG9nZ2xlPy5kYXlVbmtub3duKVxuICAgICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkub3B0aW9ucz8ucHVzaCh7XG4gICAgICAgICAgdGV4dDogREFURV9QSUNLRVJfVU5LT1dOX0ZSLFxuICAgICAgICAgIHZhbHVlOiAnKionXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkub3B0aW9ucz8ucHVzaCh7IHRleHQ6IGRheS50b1N0cmluZygpIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhlIG1vbnRoIGJhc2VkIG9uIHRoZSBtb250aCBhbmQgeWVhclxuICAgKiBAcGFyYW0gbW9udGggc3RyaW5nIG9mIHRoZSBtb250aCBzZWxlY3RlZFxuICAgKiBAcGFyYW0geWVhciBudW1iZXIgc2VsZWN0ZWRcbiAgICogQHJldHVybnMgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhlIG1vbnRoXG4gICAqL1xuICBwcml2YXRlIGdldE51bURheXNJbk1vbnRoKG1vbnRoOiBzdHJpbmcsIHllYXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgbW9udGhOdW06IG51bWJlciA9ICttb250aDtcbiAgICBpZiAobW9udGhOdW0gPT09IDIpIHtcbiAgICAgIGlmIChTdHJpbmcoeWVhcikgPT09ICcqKicpIHtcbiAgICAgICAgLy9pZiB5ZWFyIGlzIHVua25vd24gYW5kIG1vbnRoIGlzIGZlYiByZXR1cm4gMjlcbiAgICAgICAgcmV0dXJuIDI5O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaXNMZWFwWWVhcih5ZWFyKSA/IDI5IDogMjg7XG4gICAgfSBlbHNlIGlmIChbNCwgNiwgOSwgMTFdLmluY2x1ZGVzKG1vbnRoTnVtKSkge1xuICAgICAgcmV0dXJuIDMwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMzE7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSB5ZWFyIGlzIGEgbGVhcCB5ZWFyXG4gICAqIEBwYXJhbSB5ZWFyIG51bWJlciByZXByZXNlbnRpbmcgdGhlIHllYXJcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGxlYXAgeWVhciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBwcml2YXRlIGlzTGVhcFllYXIoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHllYXIgJSA0ID09PSAwKSB7XG4gICAgICBpZiAoeWVhciAlIDEwMCA9PT0gMCkge1xuICAgICAgICByZXR1cm4geWVhciAlIDQwMCA9PT0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkYXRlUGlja2VyVG91Y2hlZE9ySW52YWxpZCgpOiBib29sZWFuIHtcbiAgICBsZXQgZGF0ZVBpY2tlclN0YXRlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gZmFsc2U7XG5cbiAgICBkYXRlUGlja2VyU3RhdGUgPVxuICAgICAgKHRoaXMuY29uZmlnLmZvcm1Hcm91cC5nZXQodGhpcy5kcm9wRG93bkNvbmZpZ3MueWVhci5pZCk/LnRvdWNoZWQgJiZcbiAgICAgICAgdGhpcy5jb25maWcuZm9ybUdyb3VwLmdldCh0aGlzLmRyb3BEb3duQ29uZmlncy55ZWFyLmlkKT8uaW52YWxpZCkgfHxcbiAgICAgICh0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZ2V0KHRoaXMuZHJvcERvd25Db25maWdzLm1vbnRoLmlkKT8udG91Y2hlZCAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZ2V0KHRoaXMuZHJvcERvd25Db25maWdzLm1vbnRoLmlkKT8uaW52YWxpZCkgfHxcbiAgICAgICh0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZ2V0KHRoaXMuZHJvcERvd25Db25maWdzLmRheS5pZCk/LnRvdWNoZWQgJiZcbiAgICAgICAgdGhpcy5jb25maWcuZm9ybUdyb3VwLmdldCh0aGlzLmRyb3BEb3duQ29uZmlncy5kYXkuaWQpPy5pbnZhbGlkKTtcblxuICAgIHRoaXMudG91Y2hlZCA9IGRhdGVQaWNrZXJTdGF0ZSB8fCBmYWxzZTtcbiAgICB0aGlzLmdldEFyaWFPdmVycmlkZShkYXRlUGlja2VyU3RhdGUpO1xuICAgIHJldHVybiBkYXRlUGlja2VyU3RhdGUgPz8gZmFsc2U7XG4gICAgLy8gIHJldHVybiB0aGlzLmNvbmZpZy5mb3JtR3JvdXA/LnRvdWNoZWQgJiYgdGhpcy5jb25maWcuZm9ybUdyb3VwPy5pbnZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBhcmlhIGxhYmVscyBmb3IgZWFjaCBvZiB0aGUgc2VsZWN0IGZpZWxkcyBpbiB0aGUgZGF0ZSBwaWNrZXJcbiAgICogQHBhcmFtIGhhc0Vycm9yIGlzIHRoZSBmaWVsZCBpbiBlcnJvcj9cbiAgICovXG4gIGdldEFyaWFPdmVycmlkZShoYXNFcnJvcj86IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy55ZWFyU2VsZWN0ICE9PSAnJykge1xuICAgICAgaWYgKFxuICAgICAgICBoYXNFcnJvciAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZ2V0KHRoaXMuZHJvcERvd25Db25maWdzLnllYXIuaWQpPy50b3VjaGVkICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cC5nZXQodGhpcy5kcm9wRG93bkNvbmZpZ3MueWVhci5pZCk/LmludmFsaWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLnllYXJTZWxlY3Q/LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnYXJpYS1sYWJlbCcsXG4gICAgICAgICAgdGhpcy5nZXRMYWJlbENvcmUoKSArXG4gICAgICAgICAgICB0aGlzLmRyb3BEb3duQ29uZmlncy55ZWFyLmxhYmVsICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICB0aGlzLmdldEVycm9yQXJpYSgpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnllYXJTZWxlY3Q/LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnYXJpYS1sYWJlbCcsXG4gICAgICAgICAgdGhpcy5nZXRMYWJlbENvcmUoKSArIHRoaXMuZHJvcERvd25Db25maWdzLnllYXIubGFiZWxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubW9udGhTZWxlY3QgIT09ICcnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGhhc0Vycm9yICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cC5nZXQodGhpcy5kcm9wRG93bkNvbmZpZ3MubW9udGguaWQpPy50b3VjaGVkICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cC5nZXQodGhpcy5kcm9wRG93bkNvbmZpZ3MubW9udGguaWQpPy5pbnZhbGlkXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5tb250aFNlbGVjdD8uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgICAgICB0aGlzLmdldExhYmVsQ29yZSgpICtcbiAgICAgICAgICAgIHRoaXMuZHJvcERvd25Db25maWdzLm1vbnRoLmxhYmVsICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICB0aGlzLmdldEVycm9yQXJpYSgpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vbnRoU2VsZWN0Py5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgICAgIHRoaXMuZ2V0TGFiZWxDb3JlKCkgKyB0aGlzLmRyb3BEb3duQ29uZmlncy5tb250aC5sYWJlbFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kYXlTZWxlY3QgIT09ICcnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGhhc0Vycm9yICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cC5nZXQodGhpcy5kcm9wRG93bkNvbmZpZ3MuZGF5LmlkKT8udG91Y2hlZCAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZ2V0KHRoaXMuZHJvcERvd25Db25maWdzLmRheS5pZCk/LmludmFsaWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLmRheVNlbGVjdD8uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgICAgICB0aGlzLmdldExhYmVsQ29yZSgpICtcbiAgICAgICAgICAgIHRoaXMuZHJvcERvd25Db25maWdzLmRheS5sYWJlbCArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgdGhpcy5nZXRFcnJvckFyaWEoKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXlTZWxlY3Q/LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnYXJpYS1sYWJlbCcsXG4gICAgICAgICAgdGhpcy5nZXRMYWJlbENvcmUoKSArIHRoaXMuZHJvcERvd25Db25maWdzLmRheS5sYWJlbFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBjb3JlIHN0cmluZyBvZiB0aGUgbGFiZWwgKGRhdGUgcGlja2VyIGxhYmVsLCBkZXNjcmlwdGlvbiwgYW5kIGhpbnQpIGZvciBhcmlhIHRleHRcbiAgICogQHJldHVybnMgbGFiZWwgY29yZSB0ZXh0IHRyYW5zbGF0ZWQgc3RyaW5nXG4gICAqL1xuICBnZXRMYWJlbENvcmUoKSB7XG4gICAgbGV0IGxhYmVsQ29yZSA9ICcnO1xuICAgIGlmICh0aGlzLmNvbmZpZy5sYWJlbClcbiAgICAgIGxhYmVsQ29yZSArPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KHRoaXMuY29uZmlnLmxhYmVsKSArICcgJztcbiAgICBpZiAodGhpcy5jb25maWcuZGVzYylcbiAgICAgIGxhYmVsQ29yZSArPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KHRoaXMuY29uZmlnLmRlc2MpICsgJyAnO1xuICAgIGlmICh0aGlzLmNvbmZpZy5oaW50KVxuICAgICAgbGFiZWxDb3JlICs9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQodGhpcy5jb25maWcuaGludCkgKyAnICc7XG4gICAgcmV0dXJuIGxhYmVsQ29yZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHRyYW5zbGF0ZWQgZXJyb3Igc3RyaW5nIGZvciBhcmlhIHRleHRcbiAgICogQHJldHVybnMgZXJyb3JzIHRleHQgdHJhbnNsYXRlZCBzdHJpbmdcbiAgICovXG4gIGdldEVycm9yQXJpYSgpIHtcbiAgICBsZXQgZXJyb3JzID0gJyc7XG4gICAgdGhpcy5lcnJvcklkcy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgZXJyb3JzICs9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoZXJyb3IuZXJyb3JMT1YpICsgJyAnO1xuICAgIH0pO1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKG9iaikge1xuICAgICAgdGhpcy5jb25maWcuZm9ybUdyb3VwLnNldFZhbHVlKG9iaiwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShmbik7XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlzRGlzYWJsZWRcbiAgICAgID8gdGhpcy5jb25maWcuZm9ybUdyb3VwLmRpc2FibGUoKVxuICAgICAgOiB0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZW5hYmxlKCk7XG4gIH1cbiAgcHJpdmF0ZSBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJ7eyBjb25maWcuc2l6ZSB9fVwiPlxuICA8aXJjYy1jbC1saWItbGFiZWxcbiAgICBbY29uZmlnXT1cImxhYmVsQ29uZmlnXCJcbiAgICBbYXR0ci5zaXplXT1cImNvbmZpZy5zaXplXCJcbiAgPjwvaXJjYy1jbC1saWItbGFiZWw+XG4gIDxmaWVsZHNldCBjbGFzcz1cImFsbC1zZWxlY3QtY29udGFpbmVyXCI+XG4gICAgPGlyY2MtY2wtbGliLXNlbGVjdFxuICAgICAgY2xhc3M9XCJzZWxlY3QteWVhclwiXG4gICAgICBbYXR0ci5hcmlhLWxpdmVdPVwiJ29mZidcIlxuICAgICAgW2NvbmZpZ109XCJkcm9wRG93bkNvbmZpZ3MueWVhclwiXG4gICAgICAqbmdJZj1cImNvbmZpZy55ZWFyU2VsZWN0U2hvd1wiXG4gICAgPjwvaXJjYy1jbC1saWItc2VsZWN0PlxuICAgIDxpcmNjLWNsLWxpYi1zZWxlY3RcbiAgICAgIGNsYXNzPVwic2VsZWN0LW1vbnRoXCJcbiAgICAgIFtjb25maWddPVwiZHJvcERvd25Db25maWdzLm1vbnRoXCJcbiAgICAgICpuZ0lmPVwiY29uZmlnLm1vbnRoU2VsZWN0U2hvd1wiXG4gICAgPjwvaXJjYy1jbC1saWItc2VsZWN0PlxuICAgIDxpcmNjLWNsLWxpYi1zZWxlY3RcbiAgICAgIGNsYXNzPVwic2VsZWN0LWRheVwiXG4gICAgICBbY29uZmlnXT1cImRyb3BEb3duQ29uZmlncy5kYXlcIlxuICAgICAgKm5nSWY9XCJjb25maWcuZGF5U2VsZWN0U2hvd1wiXG4gICAgPjwvaXJjYy1jbC1saWItc2VsZWN0PlxuICA8L2ZpZWxkc2V0PlxuICA8ZGl2IGFyaWEtbGl2ZT1cInBvbGl0ZVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRlUGlja2VyVG91Y2hlZE9ySW52YWxpZCgpXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj57e1xuICAgICAgICBlcnJvclN0dWJUZXh0ICsgJzogJyArIChjb25maWcubGFiZWwgfHwgJycgfCB0cmFuc2xhdGUpICsgJzogJ1xuICAgICAgfX08L3NwYW4+XG4gICAgICA8IS0tIFRPRE86IERvIHNvbWV0aGluZyBjbGV2ZXIgaGVyZSB0byBhZGQgd2hpY2ggb2YgdGhlIGRyb3Bkb3ducyBhcmUgaW4gZXJyb3IgYW5kIHB1dCB0aGVtIGluIHRoZSBhYm92ZSBwIHRhZyAtLT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVycm9ycyBvZiBlcnJvcklkczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgKm5nSWY9XCJjb25maWcuZm9ybUdyb3VwLmdldChkcm9wRG93bkNvbmZpZ3MueWVhci5pZCk/LmVycm9ycz8uW2Vycm9ycy5rZXldIHx8IGNvbmZpZy5mb3JtR3JvdXAuZ2V0KGRyb3BEb3duQ29uZmlncy5tb250aC5pZCk/LmVycm9ycz8uW2Vycm9ycy5rZXldIHx8IGNvbmZpZy5mb3JtR3JvdXAuZ2V0KGRyb3BEb3duQ29uZmlncy5kYXkuaWQpPy5lcnJvcnM/LltlcnJvcnMua2V5XVwiXG4gICAgICAgICAgY2xhc3M9XCJyYWRpby1lcnJvcnNcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlyY2MtY2wtbGliLWVycm9yXG4gICAgICAgICAgICBbaWRdPVwiZXJyb3JzLmlkXCJcbiAgICAgICAgICAgIFtlcnJvckxPVl09XCJlcnJvcnMuZXJyb3JMT1ZcIlxuICAgICAgICAgICAgW3NpemVdPVwiY29uZmlnLnNpemVcIlxuICAgICAgICAgID48L2lyY2MtY2wtbGliLWVycm9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19