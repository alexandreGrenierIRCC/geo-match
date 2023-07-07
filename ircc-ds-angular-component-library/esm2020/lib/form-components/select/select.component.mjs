import { Component, forwardRef, Input } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ERROR_TEXT_STUB } from '../../shared/label/label.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/functions/stand-alone.functions";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/common";
import * as i4 from "../../shared/label/label.component";
import * as i5 from "@angular/forms";
import * as i6 from "../error/error.component";
export class SelectComponent {
    constructor(standAloneFunctions, translate) {
        this.standAloneFunctions = standAloneFunctions;
        this.translate = translate;
        this.touched = false;
        this.errorIds = [];
        this.activiatedSelect = false;
        this.rotateChevron = false;
        this.config = {
            id: '',
            formGroup: new FormGroup({})
        };
        this.id = '';
        this.errorAria = '';
        this.labelConfig = {
            formGroup: this.config.formGroup,
            parentID: ''
        };
        this.errorStubText = '';
        this.onChange = (formValue) => { };
        this.onTouched = () => { };
    }
    writeValue(formValue) {
        // this.form.get('formControl')?.setValue(formValue);
    }
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    registerOnTouched(onTouched) {
        this.onTouched = onTouched;
    }
    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }
    valueChange($event) {
        this.activiatedSelect = true;
    }
    onClicked() {
        this.rotateChevron = !this.rotateChevron;
    }
    onBlur() {
        this.touched = true;
        this.rotateChevron = false;
    }
    ngOnInit() {
        const retControl = this.config.formGroup.get(this.config.id);
        if (retControl) {
            this.formControl = retControl;
        }
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages, this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig, this.config.topLabel);
        //set config from individual options, if present
        if (this.formGroup)
            this.config.formGroup = this.formGroup;
        if (this.id !== '')
            this.config.id = this.id;
        if (this.size)
            this.config.size = this.size;
        if (this.label)
            this.config.label = this.label;
        if (this.desc)
            this.config.desc = this.desc;
        if (this.hint)
            this.config.hint = this.hint;
        if (this.placeholder)
            this.config.placeholder = this.placeholder;
        if (this.required)
            this.config.required = this.required;
        if (this.options)
            this.config.options = this.options;
        if (this.errorMessages)
            this.config.errorMessages = this.errorMessages;
        if (this.topLabel)
            this.config.topLabel = this.topLabel;
        if (this.disableError)
            this.config.disableError = this.disableError;
        if (this.config.errorMessages) {
            this.errorIds = this.standAloneFunctions.getErrorIds(this.config.formGroup, this.config.id, this.config.errorMessages);
        }
    }
    //This is used instead of ngOnChange here because it allows the config to be updated in date-picker.
    //TODO: Replace this with something less blunt
    ngDoCheck() {
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages, this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig, this.config.topLabel);
    }
    /**
     * Get the aria error text for the label
     */
    getAriaErrorText() {
        if (this.config.errorMessages) {
            this.formControl?.markAsDirty();
            this.errorAria = this.standAloneFunctions.getErrorAria(this.config.formGroup, this.config.id, this.config.errorMessages);
        }
    }
    /**
     * Set a boolean representing the touched state to true and trigger getAriaErrorText()
     */
    onTouchedLabel() {
        this.touched = true;
        this.getAriaErrorText();
    }
    setLang(lang) {
        this.getAriaErrorText();
        if (lang === 'en' || lang === 'en-US') {
            this.errorStubText = ERROR_TEXT_STUB.en;
        }
        else {
            this.errorStubText = ERROR_TEXT_STUB.fr;
        }
    }
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SelectComponent, deps: [{ token: i1.StandAloneFunctions }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: SelectComponent, selector: "ircc-cl-lib-select", inputs: { config: "config", id: "id", formGroup: "formGroup", size: "size", label: "label", desc: "desc", hint: "hint", placeholder: "placeholder", required: "required", options: "options", errorMessages: "errorMessages", topLabel: "topLabel", disableError: "disableError" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => SelectComponent) //This allows the error state to be turned off and on again
        }
    ], ngImport: i0, template: "<div class=\"{{ config.size }} select-wrapper\">\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <form [formGroup]=\"config.formGroup\">\n    <div class=\"ircc-cl-lib-select\">\n      <select\n        (blur)=\"onBlur()\"\n        (click)=\"onClicked()\"\n        class=\"custom-select h6 select-placeholder\"\n        [name]=\"config.id\"\n        [id]=\"config.id\"\n        [formControlName]=\"config.id\"\n        (change)=\"valueChange($event)\"\n        [class.activited-select]=\"activiatedSelect\"\n        [attr.aria-invalid]=\"formControl?.invalid\"\n        [attr.aria-live]=\"'off'\"\n        [attr.aria-label]=\"\n          formControl?.invalid && touched\n            ? (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (errorStubText + ': ' + errorAria)\n            : (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate)\n        \"\n      >\n        <option\n          [value]=\"''\"\n          [disabled]=\"true\"\n          [selected]=\"true\"\n          [hidden]=\"true\"\n        >\n          {{ config.placeholder || '' | translate }}\n        </option>\n        <option\n          *ngFor=\"let option of config.options\"\n          [value]=\"option.value || option.text\"\n          class=\"select-option\"\n        >\n          {{ option.text | translate }}\n        </option>\n      </select>\n      <div\n        class=\"icon-container\"\n        [class.select-clicked]=\"rotateChevron\"\n      >\n        <i class=\"fa-thin fa-chevron-down custom-chevron\"></i>\n      </div>\n    </div>\n    <div\n      aria-live=\"polite\"\n      *ngIf=\"!config.disableError\"\n    >\n      <div *ngIf=\"formControl?.touched && formControl?.invalid\">\n        <span class=\"sr-only\">{{\n          errorStubText + ': ' + (config.label || '' | translate) + ': '\n        }}</span>\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"formControl?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [size]=\"config.size\"\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </form>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i6.ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-select', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(() => SelectComponent) //This allows the error state to be turned off and on again
                        }
                    ], template: "<div class=\"{{ config.size }} select-wrapper\">\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <form [formGroup]=\"config.formGroup\">\n    <div class=\"ircc-cl-lib-select\">\n      <select\n        (blur)=\"onBlur()\"\n        (click)=\"onClicked()\"\n        class=\"custom-select h6 select-placeholder\"\n        [name]=\"config.id\"\n        [id]=\"config.id\"\n        [formControlName]=\"config.id\"\n        (change)=\"valueChange($event)\"\n        [class.activited-select]=\"activiatedSelect\"\n        [attr.aria-invalid]=\"formControl?.invalid\"\n        [attr.aria-live]=\"'off'\"\n        [attr.aria-label]=\"\n          formControl?.invalid && touched\n            ? (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (errorStubText + ': ' + errorAria)\n            : (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate)\n        \"\n      >\n        <option\n          [value]=\"''\"\n          [disabled]=\"true\"\n          [selected]=\"true\"\n          [hidden]=\"true\"\n        >\n          {{ config.placeholder || '' | translate }}\n        </option>\n        <option\n          *ngFor=\"let option of config.options\"\n          [value]=\"option.value || option.text\"\n          class=\"select-option\"\n        >\n          {{ option.text | translate }}\n        </option>\n      </select>\n      <div\n        class=\"icon-container\"\n        [class.select-clicked]=\"rotateChevron\"\n      >\n        <i class=\"fa-thin fa-chevron-down custom-chevron\"></i>\n      </div>\n    </div>\n    <div\n      aria-live=\"polite\"\n      *ngIf=\"!config.disableError\"\n    >\n      <div *ngIf=\"formControl?.touched && formControl?.invalid\">\n        <span class=\"sr-only\">{{\n          errorStubText + ': ' + (config.label || '' | translate) + ': '\n        }}</span>\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"formControl?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [size]=\"config.size\"\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </form>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.StandAloneFunctions }, { type: i2.TranslateService }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], formGroup: [{
                type: Input
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }], desc: [{
                type: Input
            }], hint: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], required: [{
                type: Input
            }], options: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], topLabel: [{
                type: Input
            }], disableError: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9mb3JtLWNvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvZm9ybS1jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFHTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFPeEIsT0FBTyxFQUNMLGVBQWUsRUFHaEIsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7QUFrQzVDLE1BQU0sT0FBTyxlQUFlO0lBaUMxQixZQUNTLG1CQUF3QyxFQUN2QyxTQUEyQjtRQUQ1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3ZDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBbENyQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBQzNCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUV0QixXQUFNLEdBQWtCO1lBQy9CLEVBQUUsRUFBRSxFQUFFO1lBQ04sU0FBUyxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztTQUM3QixDQUFDO1FBQ08sT0FBRSxHQUFHLEVBQUUsQ0FBQztRQWVqQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsZ0JBQVcsR0FBaUI7WUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztZQUNoQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFDRixrQkFBYSxHQUFHLEVB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aUJBQWlCO1lBQzFCLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQywyREFBMkQ7U0FDM0c7S0FDRiwwQkNqREgsbWpGQWlGQTs0RkQ5QmEsZUFBZTtrQkFYM0IsU0FBUzsrQkFDRSxvQkFBb0IsYUFFbkI7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQywyREFBMkQ7eUJBQzNHO3FCQUNGO3lJQVFRLE1BQU07c0JBQWQsS0FBSztnQkFJRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUdyb3VwLFxuICBOR19WQUxVRV9BQ0NFU1NPUlxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEU1NpemVzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9qbC1jb21wb25lbnRzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJRXJyb3JQYWlycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2NvbXBvbmVudC1jb25maWdzJztcbmltcG9ydCB7XG4gIElFcnJvcklEcyxcbiAgU3RhbmRBbG9uZUZ1bmN0aW9uc1xufSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvZnVuY3Rpb25zL3N0YW5kLWFsb25lLmZ1bmN0aW9ucyc7XG5pbXBvcnQge1xuICBFUlJPUl9URVhUX1NUVUIsXG4gIElMYWJlbENvbmZpZyxcbiAgSUxhYmVsSWNvbkNvbmZpZ1xufSBmcm9tICcuLi8uLi9zaGFyZWQvbGFiZWwvbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0Q29uZmlnIHtcbiAgaWQ6IHN0cmluZztcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBvcHRpb25zPzogSVNlbGVjdE9wdGlvbnNDb25maWdbXTtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBoaW50Pzogc3RyaW5nO1xuICBkZXNjPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzO1xuICBlcnJvck1lc3NhZ2VzPzogSUVycm9yUGFpcnNbXTtcbiAgbGFiZWxJY29uQ29uZmlnPzogSUxhYmVsSWNvbkNvbmZpZztcbiAgdG9wTGFiZWw/OiBzdHJpbmc7XG4gIGRpc2FibGVFcnJvcj86IGJvb2xlYW47IC8vdXNlZCB0byBkaXNhYmxlIHRoZSBlcnJvciBhcmlhLWxpdmUgKG1vc3RseSBmb3IgdXNlIHdoZW4gbmVzdGVkLCBhcyBpbiBkYXRlIHBpY2tlcilcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdE9wdGlvbnNDb25maWcge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpcmNjLWNsLWxpYi1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlbGVjdENvbXBvbmVudCkgLy9UaGlzIGFsbG93cyB0aGUgZXJyb3Igc3RhdGUgdG8gYmUgdHVybmVkIG9mZiBhbmQgb24gYWdhaW5cbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIHRvdWNoZWQgPSBmYWxzZTtcbiAgZXJyb3JJZHM6IElFcnJvcklEc1tdID0gW107XG4gIGFjdGl2aWF0ZWRTZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcm90YXRlQ2hldnJvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogSVNlbGVjdENvbmZpZyA9IHtcbiAgICBpZDogJycsXG4gICAgZm9ybUdyb3VwOiBuZXcgRm9ybUdyb3VwKHt9KVxuICB9O1xuICBASW5wdXQoKSBpZCA9ICcnO1xuICBASW5wdXQoKSBmb3JtR3JvdXA/OiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNTaXplcztcbiAgQElucHV0KCkgbGFiZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlc2M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9wdGlvbnM/OiBJU2VsZWN0T3B0aW9uc0NvbmZpZ1tdO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2VzPzogSUVycm9yUGFpcnNbXTtcbiAgQElucHV0KCkgdG9wTGFiZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVFcnJvcj86IGJvb2xlYW47IC8vdXNlZCB0byBkaXNhYmxlIHRoZSBlcnJvciBhcmlhLWxpdmUgKG1vc3RseSBmb3IgdXNlIHdoZW4gbmVzdGVkLCBhcyBpbiBkYXRlIHBpY2tlcilcbiAgbGFiZWxJY29uQ29uZmlnPzogSUxhYmVsSWNvbkNvbmZpZztcblxuICBmb3JtQ29udHJvbD86IEFic3RyYWN0Q29udHJvbDtcbiAgZXJyb3JBcmlhID0gJyc7XG5cbiAgbGFiZWxDb25maWc6IElMYWJlbENvbmZpZyA9IHtcbiAgICBmb3JtR3JvdXA6IHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICBwYXJlbnRJRDogJydcbiAgfTtcbiAgZXJyb3JTdHViVGV4dCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzdGFuZEFsb25lRnVuY3Rpb25zOiBTdGFuZEFsb25lRnVuY3Rpb25zLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge31cblxuICBvbkNoYW5nZSA9IChmb3JtVmFsdWU6IHN0cmluZykgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuICB3cml0ZVZhbHVlKGZvcm1WYWx1ZTogYW55KSB7XG4gICAgLy8gdGhpcy5mb3JtLmdldCgnZm9ybUNvbnRyb2wnKT8uc2V0VmFsdWUoZm9ybVZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQob25Ub3VjaGVkOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IG9uVG91Y2hlZDtcbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWQoKSB7XG4gICAgaWYgKCF0aGlzLnRvdWNoZWQpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLnRvdWNoZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHZhbHVlQ2hhbmdlKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5hY3RpdmlhdGVkU2VsZWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIG9uQ2xpY2tlZCgpIHtcbiAgICB0aGlzLnJvdGF0ZUNoZXZyb24gPSAhdGhpcy5yb3RhdGVDaGV2cm9uO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHRoaXMudG91Y2hlZCA9IHRydWU7XG4gICAgdGhpcy5yb3RhdGVDaGV2cm9uID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCByZXRDb250cm9sID0gdGhpcy5jb25maWcuZm9ybUdyb3VwLmdldCh0aGlzLmNvbmZpZy5pZCk7XG4gICAgaWYgKHJldENvbnRyb2wpIHtcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wgPSByZXRDb250cm9sO1xuICAgIH1cblxuICAgIHRoaXMuc2V0TGFuZyh0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyk7XG4gICAgdGhpcy50cmFuc2xhdGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoY2hhbmdlKSA9PiB7XG4gICAgICB0aGlzLnNldExhbmcoY2hhbmdlLmxhbmcpO1xuICAgIH0pO1xuICAgIHRoaXMubGFiZWxDb25maWcgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMubWFrZUxhYmVsQ29uZmlnKFxuICAgICAgdGhpcy5jb25maWcuZm9ybUdyb3VwLFxuICAgICAgdGhpcy5jb25maWcuaWQsXG4gICAgICB0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzLFxuICAgICAgdGhpcy5jb25maWcubGFiZWwsXG4gICAgICB0aGlzLmNvbmZpZy5kZXNjLFxuICAgICAgdGhpcy5jb25maWcuaGludCxcbiAgICAgIHRoaXMuY29uZmlnLnJlcXVpcmVkLFxuICAgICAgdGhpcy5jb25maWcubGFiZWxJY29uQ29uZmlnLFxuICAgICAgdGhpcy5jb25maWcudG9wTGFiZWxcbiAgICApO1xuXG4gICAgLy9zZXQgY29uZmlnIGZyb20gaW5kaXZpZHVhbCBvcHRpb25zLCBpZiBwcmVzZW50XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwKSB0aGlzLmNvbmZpZy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cDtcbiAgICBpZiAodGhpcy5pZCAhPT0gJycpIHRoaXMuY29uZmlnLmlkID0gdGhpcy5pZDtcbiAgICBpZiAodGhpcy5zaXplKSB0aGlzLmNvbmZpZy5zaXplID0gdGhpcy5zaXplO1xuICAgIGlmICh0aGlzLmxhYmVsKSB0aGlzLmNvbmZpZy5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgaWYgKHRoaXMuZGVzYykgdGhpcy5jb25maWcuZGVzYyA9IHRoaXMuZGVzYztcbiAgICBpZiAodGhpcy5oaW50KSB0aGlzLmNvbmZpZy5oaW50ID0gdGhpcy5oaW50O1xuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHRoaXMuY29uZmlnLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB0aGlzLmNvbmZpZy5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh0aGlzLmVycm9yTWVzc2FnZXMpIHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXMgPSB0aGlzLmVycm9yTWVzc2FnZXM7XG4gICAgaWYgKHRoaXMudG9wTGFiZWwpIHRoaXMuY29uZmlnLnRvcExhYmVsID0gdGhpcy50b3BMYWJlbDtcbiAgICBpZiAodGhpcy5kaXNhYmxlRXJyb3IpIHRoaXMuY29uZmlnLmRpc2FibGVFcnJvciA9IHRoaXMuZGlzYWJsZUVycm9yO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXMpIHtcbiAgICAgIHRoaXMuZXJyb3JJZHMgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMuZ2V0RXJyb3JJZHMoXG4gICAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgICAgdGhpcy5jb25maWcuaWQsXG4gICAgICAgIHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXNcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy9UaGlzIGlzIHVzZWQgaW5zdGVhZCBvZiBuZ09uQ2hhbmdlIGhlcmUgYmVjYXVzZSBpdCBhbGxvd3MgdGhlIGNvbmZpZyB0byBiZSB1cGRhdGVkIGluIGRhdGUtcGlja2VyLlxuICAvL1RPRE86IFJlcGxhY2UgdGhpcyB3aXRoIHNvbWV0aGluZyBsZXNzIGJsdW50XG4gIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLmxhYmVsQ29uZmlnID0gdGhpcy5zdGFuZEFsb25lRnVuY3Rpb25zLm1ha2VMYWJlbENvbmZpZyhcbiAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgdGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcyxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsLFxuICAgICAgdGhpcy5jb25maWcuZGVzYyxcbiAgICAgIHRoaXMuY29uZmlnLmhpbnQsXG4gICAgICB0aGlzLmNvbmZpZy5yZXF1aXJlZCxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsSWNvbkNvbmZpZyxcbiAgICAgIHRoaXMuY29uZmlnLnRvcExhYmVsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFyaWEgZXJyb3IgdGV4dCBmb3IgdGhlIGxhYmVsXG4gICAqL1xuICBnZXRBcmlhRXJyb3JUZXh0KCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sPy5tYXJrQXNEaXJ0eSgpO1xuICAgICAgdGhpcy5lcnJvckFyaWEgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMuZ2V0RXJyb3JBcmlhKFxuICAgICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgICB0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgdG91Y2hlZCBzdGF0ZSB0byB0cnVlIGFuZCB0cmlnZ2VyIGdldEFyaWFFcnJvclRleHQoKVxuICAgKi9cbiAgb25Ub3VjaGVkTGFiZWwoKSB7XG4gICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmdldEFyaWFFcnJvclRleHQoKTtcbiAgfVxuXG4gIHNldExhbmcobGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5nZXRBcmlhRXJyb3JUZXh0KCk7XG4gICAgaWYgKGxhbmcgPT09ICdlbicgfHwgbGFuZyA9PT0gJ2VuLVVTJykge1xuICAgICAgdGhpcy5lcnJvclN0dWJUZXh0ID0gRVJST1JfVEVYVF9TVFVCLmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yU3R1YlRleHQgPSBFUlJPUl9URVhUX1NUVUIuZnI7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwie3sgY29uZmlnLnNpemUgfX0gc2VsZWN0LXdyYXBwZXJcIj5cbiAgPGlyY2MtY2wtbGliLWxhYmVsXG4gICAgW2NvbmZpZ109XCJsYWJlbENvbmZpZ1wiXG4gICAgW2F0dHIuc2l6ZV09XCJjb25maWcuc2l6ZVwiXG4gID48L2lyY2MtY2wtbGliLWxhYmVsPlxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImNvbmZpZy5mb3JtR3JvdXBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaXJjYy1jbC1saWItc2VsZWN0XCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tlZCgpXCJcbiAgICAgICAgY2xhc3M9XCJjdXN0b20tc2VsZWN0IGg2IHNlbGVjdC1wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuYW1lXT1cImNvbmZpZy5pZFwiXG4gICAgICAgIFtpZF09XCJjb25maWcuaWRcIlxuICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5pZFwiXG4gICAgICAgIChjaGFuZ2UpPVwidmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtjbGFzcy5hY3Rpdml0ZWQtc2VsZWN0XT1cImFjdGl2aWF0ZWRTZWxlY3RcIlxuICAgICAgICBbYXR0ci5hcmlhLWludmFsaWRdPVwiZm9ybUNvbnRyb2w/LmludmFsaWRcIlxuICAgICAgICBbYXR0ci5hcmlhLWxpdmVdPVwiJ29mZidcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIlxuICAgICAgICAgIGZvcm1Db250cm9sPy5pbnZhbGlkICYmIHRvdWNoZWRcbiAgICAgICAgICAgID8gKGNvbmZpZy5sYWJlbCB8fCAnJyB8IHRyYW5zbGF0ZSkgK1xuICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAoY29uZmlnLmRlc2MgfHwgJycgfCB0cmFuc2xhdGUpICtcbiAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgKGNvbmZpZy5oaW50IHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgIChlcnJvclN0dWJUZXh0ICsgJzogJyArIGVycm9yQXJpYSlcbiAgICAgICAgICAgIDogKGNvbmZpZy5sYWJlbCB8fCAnJyB8IHRyYW5zbGF0ZSkgK1xuICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAoY29uZmlnLmRlc2MgfHwgJycgfCB0cmFuc2xhdGUpICtcbiAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgKGNvbmZpZy5oaW50IHx8ICcnIHwgdHJhbnNsYXRlKVxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgW3ZhbHVlXT1cIicnXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgW3NlbGVjdGVkXT1cInRydWVcIlxuICAgICAgICAgIFtoaWRkZW5dPVwidHJ1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBjb25maWcucGxhY2Vob2xkZXIgfHwgJycgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5vcHRpb25zXCJcbiAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLnZhbHVlIHx8IG9wdGlvbi50ZXh0XCJcbiAgICAgICAgICBjbGFzcz1cInNlbGVjdC1vcHRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAge3sgb3B0aW9uLnRleHQgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiXG4gICAgICAgIFtjbGFzcy5zZWxlY3QtY2xpY2tlZF09XCJyb3RhdGVDaGV2cm9uXCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS10aGluIGZhLWNoZXZyb24tZG93biBjdXN0b20tY2hldnJvblwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgICAqbmdJZj1cIiFjb25maWcuZGlzYWJsZUVycm9yXCJcbiAgICA+XG4gICAgICA8ZGl2ICpuZ0lmPVwiZm9ybUNvbnRyb2w/LnRvdWNoZWQgJiYgZm9ybUNvbnRyb2w/LmludmFsaWRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+e3tcbiAgICAgICAgICBlcnJvclN0dWJUZXh0ICsgJzogJyArIChjb25maWcubGFiZWwgfHwgJycgfCB0cmFuc2xhdGUpICsgJzogJ1xuICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZXJyb3JzIG9mIGVycm9ySWRzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nSWY9XCJmb3JtQ29udHJvbD8uZXJyb3JzPy5bZXJyb3JzLmtleV1cIlxuICAgICAgICAgICAgY2xhc3M9XCJyYWRpby1lcnJvcnNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpcmNjLWNsLWxpYi1lcnJvclxuICAgICAgICAgICAgICBbc2l6ZV09XCJjb25maWcuc2l6ZVwiXG4gICAgICAgICAgICAgIFtpZF09XCJlcnJvcnMuaWRcIlxuICAgICAgICAgICAgICBbZXJyb3JMT1ZdPVwiZXJyb3JzLmVycm9yTE9WXCJcbiAgICAgICAgICAgID48L2lyY2MtY2wtbGliLWVycm9yPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG48L2Rpdj5cbiJdfQ==