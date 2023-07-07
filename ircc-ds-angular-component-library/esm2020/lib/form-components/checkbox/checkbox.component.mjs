import { Component, forwardRef, Input } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { ERROR_TEXT_STUB } from '../../shared/label/label.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/functions/stand-alone.functions";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/common";
import * as i4 from "../../shared/label/label.component";
import * as i5 from "@angular/forms";
import * as i6 from "../error/error.component";
export class CheckboxComponent {
    constructor(standAloneFunctions, translate) {
        this.standAloneFunctions = standAloneFunctions;
        this.translate = translate;
        this.formGroupEmpty = new FormGroup({});
        //TODO: Add output - consider using a formControl as output rather than anything else. Many different approaches are possible
        this.config = {
            id: '',
            formGroup: this.formGroupEmpty,
            size: DSSizes.large
        };
        this.formGroup = this.formGroupEmpty;
        this.id = '';
        this.label = '';
        this.isDisabled = false;
        this.errorIds = [];
        this.labelConfig = {
            formGroup: this.config.formGroup,
            parentID: ''
        };
        this.touched = false;
        this.errorAria = '';
        this.errorStubText = '';
        this.onTouch = () => { };
        this.onChange = () => { };
    }
    writeValue() { }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * This is used automatically by the parent formControl. It is used in the template to set the label to disabled
     * @param isDisabled
     */
    setDisabledState(isDisabled) {
        // (this.config !== undefined) ? this.config.disabled = isDisabled : this.disabled = isDisabled;
        this.isDisabled = isDisabled;
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
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages, this.config.label, this.config.desc, this.config.helpText, this.config.required, this.config.labelIconConfig);
        //set config from individual options, if present
        if (this.formGroup !== this.formGroupEmpty) {
            this.config.formGroup = this.formGroup;
        }
        if (this.id)
            this.config.id = this.id;
        if (this.label)
            this.config.label = this.label;
        if (this.required)
            this.config.required = this.required;
        if (this.size)
            this.config.size = this.size;
        if (this.mixed)
            this.config.mixed = this.mixed;
        if (this.disableFocus)
            this.config.disableFocus = this.disableFocus;
        if (this.inlineLabel)
            this.config.inlineLabel = this.inlineLabel;
        if (this.inlineLabelBold)
            this.config.inlineLabelBold = this.inlineLabelBold;
        if (this.helpText)
            this.config.helpText = this.helpText;
        if (this.customErrorText)
            this.config.customErrorText = this.customErrorText;
        if (this.desc)
            this.config.desc = this.desc;
        if (this.errorMessages)
            this.config.errorMessages = this.errorMessages;
        if (!this.config?.size)
            this.config.size = DSSizes.large;
        if (this.config.errorMessages) {
            this.errorIds = this.standAloneFunctions.getErrorIds(this.config.formGroup, this.config.id, this.config.errorMessages);
        }
        //Get the error text when the formControl value changes
        this.config.formGroup.get(this.config.id)?.statusChanges.subscribe(() => {
            this.getAriaErrorText();
        });
    }
    ngOnChanges() {
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages, this.config.label, this.config.desc, this.config.helpText, this.config.required, this.config.labelIconConfig);
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
    /**
     * Return error state from FormGroup, must be touched & invalid
     */
    getErrorState() {
        return ((this.config.formGroup.get(this.config.id)?.touched &&
            this.config.formGroup.get(this.config.id)?.invalid) ??
            false);
    }
}
CheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CheckboxComponent, deps: [{ token: i1.StandAloneFunctions }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
CheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: CheckboxComponent, selector: "ircc-cl-lib-checkbox", inputs: { config: "config", formGroup: "formGroup", id: "id", label: "label", required: "required", size: "size", mixed: "mixed", disableFocus: "disableFocus", inlineLabel: "inlineLabel", inlineLabelBold: "inlineLabelBold", helpText: "helpText", customErrorText: "customErrorText", desc: "desc", errorMessages: "errorMessages" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true
        }
    ], usesOnChanges: true, ngImport: i0, template: "<form\n  class=\"checkbox-container\"\n  [formGroup]=\"config.formGroup\"\n>\n  <div\n    class=\"checkbox-container\"\n    [ngClass]=\"config.size\"\n  >\n    <ircc-cl-lib-label\n      [config]=\"labelConfig\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-label>\n    <div\n      class=\"checkbox-layout\"\n      [ngClass]=\"{ error: getErrorState() }\"\n    >\n      <div class=\"checkbox\">\n        <input\n          [attr.aria-live]=\"'off'\"\n          (blur)=\"touched = true\"\n          id=\"{{ config.id }}\"\n          class=\"check\"\n          (click)=\"standAloneFunctions.wasTouched(config.formGroup, config.id)\"\n          [ngClass]=\"{\n            mixed: config.mixed,\n            focus: !config.disableFocus,\n            error: getErrorState()\n          }\"\n          [attr.size]=\"config.size\"\n          type=\"checkbox\"\n          [formControlName]=\"config.id\"\n          [attr.aria-invalid]=\"formControl?.invalid\"\n          [attr.aria-label]=\"\n            formControl?.invalid && touched\n              ? (config.label || '' | translate) +\n                ' ' +\n                (config.desc || '' | translate) +\n                ' ' +\n                (config.helpText || '' | translate) +\n                ' ' +\n                (config.inlineLabel || '' | translate) +\n                ' ' +\n                errorStubText +\n                ' ' +\n                errorAria\n              : (config.label || '' | translate) +\n                ' ' +\n                (config.desc || '' | translate) +\n                ' ' +\n                (config.helpText || '' | translate) +\n                ' ' +\n                (config.inlineLabel || '' | translate)\n          \"\n        />\n        <span class=\"checkmark\"></span>\n      </div>\n      <label\n        [attr.aria-live]=\"'off'\"\n        class=\"checkbox-desc-label\"\n        [for]=\"config.id\"\n        [id]=\"config.id + ' checkbox_label'\"\n        [ngClass]=\"{\n          'disabled-label': isDisabled,\n          small: config.size === 'small',\n          makeBold: config.inlineLabelBold\n        }\"\n        >{{ config.inlineLabel || '' | translate }}\n      </label>\n    </div>\n    <div aria-live=\"polite\">\n      <div\n        *ngIf=\"formControl?.touched && formControl?.invalid\"\n        class=\"check-error\"\n        [ngClass]=\"{ small: config.size === 'small' }\"\n      >\n        <span class=\"sr-only\">{{\n          errorStubText + ': ' + (config.label || '' | translate) + ': '\n        }}</span>\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"formControl?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</form>\n", dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i6.ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-checkbox', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CheckboxComponent),
                            multi: true
                        }
                    ], template: "<form\n  class=\"checkbox-container\"\n  [formGroup]=\"config.formGroup\"\n>\n  <div\n    class=\"checkbox-container\"\n    [ngClass]=\"config.size\"\n  >\n    <ircc-cl-lib-label\n      [config]=\"labelConfig\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-label>\n    <div\n      class=\"checkbox-layout\"\n      [ngClass]=\"{ error: getErrorState() }\"\n    >\n      <div class=\"checkbox\">\n        <input\n          [attr.aria-live]=\"'off'\"\n          (blur)=\"touched = true\"\n          id=\"{{ config.id }}\"\n          class=\"check\"\n          (click)=\"standAloneFunctions.wasTouched(config.formGroup, config.id)\"\n          [ngClass]=\"{\n            mixed: config.mixed,\n            focus: !config.disableFocus,\n            error: getErrorState()\n          }\"\n          [attr.size]=\"config.size\"\n          type=\"checkbox\"\n          [formControlName]=\"config.id\"\n          [attr.aria-invalid]=\"formControl?.invalid\"\n          [attr.aria-label]=\"\n            formControl?.invalid && touched\n              ? (config.label || '' | translate) +\n                ' ' +\n                (config.desc || '' | translate) +\n                ' ' +\n                (config.helpText || '' | translate) +\n                ' ' +\n                (config.inlineLabel || '' | translate) +\n                ' ' +\n                errorStubText +\n                ' ' +\n                errorAria\n              : (config.label || '' | translate) +\n                ' ' +\n                (config.desc || '' | translate) +\n                ' ' +\n                (config.helpText || '' | translate) +\n                ' ' +\n                (config.inlineLabel || '' | translate)\n          \"\n        />\n        <span class=\"checkmark\"></span>\n      </div>\n      <label\n        [attr.aria-live]=\"'off'\"\n        class=\"checkbox-desc-label\"\n        [for]=\"config.id\"\n        [id]=\"config.id + ' checkbox_label'\"\n        [ngClass]=\"{\n          'disabled-label': isDisabled,\n          small: config.size === 'small',\n          makeBold: config.inlineLabelBold\n        }\"\n        >{{ config.inlineLabel || '' | translate }}\n      </label>\n    </div>\n    <div aria-live=\"polite\">\n      <div\n        *ngIf=\"formControl?.touched && formControl?.invalid\"\n        class=\"check-error\"\n        [ngClass]=\"{ small: config.size === 'small' }\"\n      >\n        <span class=\"sr-only\">{{\n          errorStubText + ': ' + (config.label || '' | translate) + ': '\n        }}</span>\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"formControl?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.StandAloneFunctions }, { type: i2.TranslateService }]; }, propDecorators: { config: [{
                type: Input
            }], formGroup: [{
                type: Input
            }], id: [{
                type: Input
            }], label: [{
                type: Input
            }], required: [{
                type: Input
            }], size: [{
                type: Input
            }], mixed: [{
                type: Input
            }], disableFocus: [{
                type: Input
            }], inlineLabel: [{
                type: Input
            }], inlineLabelBold: [{
                type: Input
            }], helpText: [{
                type: Input
            }], customErrorText: [{
                type: Input
            }], desc: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2Zvcm0tY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvZm9ybS1jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBR0wsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUs1RSxPQUFPLEVBQ0wsZUFBZSxFQUdoQixNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7OztBQStCNUMsTUFBTSxPQUFPLGlCQUFpQjtJQW9DNUIsWUFDUyxtQkFBd0MsRUFDdkMsU0FBMkI7UUFENUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN2QyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQXJDckMsbUJBQWMsR0FBYyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU5Qyw2SEFBNkg7UUFDcEgsV0FBTSxHQUE2QjtZQUMxQyxFQUFFLEVBQUUsRUFBRTtZQUNOLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUM5QixJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUs7U0FDcEIsQ0FBQztRQUVPLGNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2hDLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFFUixVQUFLLEdBQVksRUFBRSxDQUFDO1FBWTdCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFnQixF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QUFRO3NCQUFoQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Hcm91cCxcbiAgTkdfVkFMVUVfQUNDRVNTT1Jcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUVycm9yUGFpcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9jb21wb25lbnQtY29uZmlncyc7XG5pbXBvcnQgeyBEU1NpemVzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9qbC1jb21wb25lbnRzLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICBJRXJyb3JJRHMsXG4gIFN0YW5kQWxvbmVGdW5jdGlvbnNcbn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2Z1bmN0aW9ucy9zdGFuZC1hbG9uZS5mdW5jdGlvbnMnO1xuaW1wb3J0IHtcbiAgRVJST1JfVEVYVF9TVFVCLFxuICBJTGFiZWxDb25maWcsXG4gIElMYWJlbEljb25Db25maWdcbn0gZnJvbSAnLi4vLi4vc2hhcmVkL2xhYmVsL2xhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrQm94Q29tcG9uZW50Q29uZmlnIHtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIGxhYmVsPzogc3RyaW5nO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNTaXplcyB8IERTU2l6ZXM7XG4gIG1peGVkPzogdHJ1ZTtcbiAgZGlzYWJsZUZvY3VzPzogYm9vbGVhbjsgLy9EZWZhdWx0IGlzIHRydWVcbiAgaW5saW5lTGFiZWw/OiBzdHJpbmc7XG4gIGlubGluZUxhYmVsQm9sZD86IGJvb2xlYW47XG4gIGlkOiBzdHJpbmc7IC8vdXNlZCBmb3IgaWRlbnRpZnlpbmcgdGhlIGNvbXBvbmVudCBldmVyeXdoZXJlIGFuZCBzaG91bGQgTkVWRVIgYmUgbWlzc2luZ1xuICBoZWxwVGV4dD86IHN0cmluZztcbiAgY3VzdG9tRXJyb3JUZXh0Pzogc3RyaW5nO1xuICBkZXNjPzogc3RyaW5nO1xuICBlcnJvck1lc3NhZ2VzPzogSUVycm9yUGFpcnNbXTtcbiAgbGFiZWxJY29uQ29uZmlnPzogSUxhYmVsSWNvbkNvbmZpZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIGZvcm1Hcm91cEVtcHR5OiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcblxuICAvL1RPRE86IEFkZCBvdXRwdXQgLSBjb25zaWRlciB1c2luZyBhIGZvcm1Db250cm9sIGFzIG91dHB1dCByYXRoZXIgdGhhbiBhbnl0aGluZyBlbHNlLiBNYW55IGRpZmZlcmVudCBhcHByb2FjaGVzIGFyZSBwb3NzaWJsZVxuICBASW5wdXQoKSBjb25maWc6IElDaGVja0JveENvbXBvbmVudENvbmZpZyA9IHtcbiAgICBpZDogJycsXG4gICAgZm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cEVtcHR5LFxuICAgIHNpemU6IERTU2l6ZXMubGFyZ2VcbiAgfTtcblxuICBASW5wdXQoKSBmb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cEVtcHR5O1xuICBASW5wdXQoKSBpZCA9ICcnO1xuXG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzIHwgRFNTaXplcztcbiAgQElucHV0KCkgbWl4ZWQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlRm9jdXM/OiBib29sZWFuOyAvL0RlZmF1bHQgaXMgdHJ1ZVxuICBASW5wdXQoKSBpbmxpbmVMYWJlbD86IHN0cmluZztcbiAgQElucHV0KCkgaW5saW5lTGFiZWxCb2xkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVscFRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbUVycm9yVGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgZGVzYz86IHN0cmluZztcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlcz86IElFcnJvclBhaXJzW107XG5cbiAgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBlcnJvcklkczogSUVycm9ySURzW10gPSBbXTtcbiAgZm9ybUNvbnRyb2w/OiBBYnN0cmFjdENvbnRyb2w7XG4gIGxhYmVsQ29uZmlnOiBJTGFiZWxDb25maWcgPSB7XG4gICAgZm9ybUdyb3VwOiB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgcGFyZW50SUQ6ICcnXG4gIH07XG4gIHRvdWNoZWQgPSBmYWxzZTtcbiAgZXJyb3JBcmlhID0gJyc7XG4gIGVycm9yU3R1YlRleHQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3RhbmRBbG9uZUZ1bmN0aW9uczogU3RhbmRBbG9uZUZ1bmN0aW9ucyxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICApIHt9XG5cbiAgb25Ub3VjaCA9ICgpID0+IHt9O1xuICBvbkNoYW5nZSA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUoKTogdm9pZCB7fVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdXNlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZSBwYXJlbnQgZm9ybUNvbnRyb2wuIEl0IGlzIHVzZWQgaW4gdGhlIHRlbXBsYXRlIHRvIHNldCB0aGUgbGFiZWwgdG8gZGlzYWJsZWRcbiAgICogQHBhcmFtIGlzRGlzYWJsZWRcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAvLyAodGhpcy5jb25maWcgIT09IHVuZGVmaW5lZCkgPyB0aGlzLmNvbmZpZy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQgOiB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgcmV0Q29udHJvbCA9IHRoaXMuY29uZmlnLmZvcm1Hcm91cC5nZXQodGhpcy5jb25maWcuaWQpO1xuICAgIGlmIChyZXRDb250cm9sKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sID0gcmV0Q29udHJvbDtcbiAgICB9XG5cbiAgICB0aGlzLnNldExhbmcodGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcpO1xuICAgIHRoaXMudHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGNoYW5nZSkgPT4ge1xuICAgICAgdGhpcy5zZXRMYW5nKGNoYW5nZS5sYW5nKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGFiZWxDb25maWcgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMubWFrZUxhYmVsQ29uZmlnKFxuICAgICAgdGhpcy5jb25maWcuZm9ybUdyb3VwLFxuICAgICAgdGhpcy5jb25maWcuaWQsXG4gICAgICB0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzLFxuICAgICAgdGhpcy5jb25maWcubGFiZWwsXG4gICAgICB0aGlzLmNvbmZpZy5kZXNjLFxuICAgICAgdGhpcy5jb25maWcuaGVscFRleHQsXG4gICAgICB0aGlzLmNvbmZpZy5yZXF1aXJlZCxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsSWNvbkNvbmZpZ1xuICAgICk7XG5cbiAgICAvL3NldCBjb25maWcgZnJvbSBpbmRpdmlkdWFsIG9wdGlvbnMsIGlmIHByZXNlbnRcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAgIT09IHRoaXMuZm9ybUdyb3VwRW1wdHkpIHtcbiAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwO1xuICAgIH1cbiAgICBpZiAodGhpcy5pZCkgdGhpcy5jb25maWcuaWQgPSB0aGlzLmlkO1xuICAgIGlmICh0aGlzLmxhYmVsKSB0aGlzLmNvbmZpZy5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHRoaXMuY29uZmlnLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICBpZiAodGhpcy5zaXplKSB0aGlzLmNvbmZpZy5zaXplID0gdGhpcy5zaXplO1xuICAgIGlmICh0aGlzLm1peGVkKSB0aGlzLmNvbmZpZy5taXhlZCA9IHRoaXMubWl4ZWQ7XG4gICAgaWYgKHRoaXMuZGlzYWJsZUZvY3VzKSB0aGlzLmNvbmZpZy5kaXNhYmxlRm9jdXMgPSB0aGlzLmRpc2FibGVGb2N1cztcbiAgICBpZiAodGhpcy5pbmxpbmVMYWJlbCkgdGhpcy5jb25maWcuaW5saW5lTGFiZWwgPSB0aGlzLmlubGluZUxhYmVsO1xuICAgIGlmICh0aGlzLmlubGluZUxhYmVsQm9sZCkgdGhpcy5jb25maWcuaW5saW5lTGFiZWxCb2xkID0gdGhpcy5pbmxpbmVMYWJlbEJvbGQ7XG4gICAgaWYgKHRoaXMuaGVscFRleHQpIHRoaXMuY29uZmlnLmhlbHBUZXh0ID0gdGhpcy5oZWxwVGV4dDtcbiAgICBpZiAodGhpcy5jdXN0b21FcnJvclRleHQpIHRoaXMuY29uZmlnLmN1c3RvbUVycm9yVGV4dCA9IHRoaXMuY3VzdG9tRXJyb3JUZXh0O1xuICAgIGlmICh0aGlzLmRlc2MpIHRoaXMuY29uZmlnLmRlc2MgPSB0aGlzLmRlc2M7XG4gICAgaWYgKHRoaXMuZXJyb3JNZXNzYWdlcykgdGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcyA9IHRoaXMuZXJyb3JNZXNzYWdlcztcbiAgICBcbiAgICBcbiAgICBpZiAoIXRoaXMuY29uZmlnPy5zaXplKSB0aGlzLmNvbmZpZy5zaXplID0gRFNTaXplcy5sYXJnZTtcbiAgICBcbiAgICBpZiAodGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcykge1xuICAgICAgdGhpcy5lcnJvcklkcyA9IHRoaXMuc3RhbmRBbG9uZUZ1bmN0aW9ucy5nZXRFcnJvcklkcyhcbiAgICAgICAgdGhpcy5jb25maWcuZm9ybUdyb3VwLFxuICAgICAgICB0aGlzLmNvbmZpZy5pZCxcbiAgICAgICAgdGhpcy5jb25maWcuZXJyb3JNZXNzYWdlc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvL0dldCB0aGUgZXJyb3IgdGV4dCB3aGVuIHRoZSBmb3JtQ29udHJvbCB2YWx1ZSBjaGFuZ2VzXG4gICAgdGhpcy5jb25maWcuZm9ybUdyb3VwLmdldCh0aGlzLmNvbmZpZy5pZCk/LnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0QXJpYUVycm9yVGV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5sYWJlbENvbmZpZyA9IHRoaXMuc3RhbmRBbG9uZUZ1bmN0aW9ucy5tYWtlTGFiZWxDb25maWcoXG4gICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgICB0aGlzLmNvbmZpZy5pZCxcbiAgICAgIHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXMsXG4gICAgICB0aGlzLmNvbmZpZy5sYWJlbCxcbiAgICAgIHRoaXMuY29uZmlnLmRlc2MsXG4gICAgICB0aGlzLmNvbmZpZy5oZWxwVGV4dCxcbiAgICAgIHRoaXMuY29uZmlnLnJlcXVpcmVkLFxuICAgICAgdGhpcy5jb25maWcubGFiZWxJY29uQ29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFyaWEgZXJyb3IgdGV4dCBmb3IgdGhlIGxhYmVsXG4gICAqL1xuICBnZXRBcmlhRXJyb3JUZXh0KCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sPy5tYXJrQXNEaXJ0eSgpO1xuICAgICAgdGhpcy5lcnJvckFyaWEgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMuZ2V0RXJyb3JBcmlhKFxuICAgICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgICB0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgdG91Y2hlZCBzdGF0ZSB0byB0cnVlIGFuZCB0cmlnZ2VyIGdldEFyaWFFcnJvclRleHQoKVxuICAgKi9cbiAgb25Ub3VjaGVkTGFiZWwoKSB7XG4gICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmdldEFyaWFFcnJvclRleHQoKTtcbiAgfVxuXG4gIHNldExhbmcobGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5nZXRBcmlhRXJyb3JUZXh0KCk7XG4gICAgaWYgKGxhbmcgPT09ICdlbicgfHwgbGFuZyA9PT0gJ2VuLVVTJykge1xuICAgICAgdGhpcy5lcnJvclN0dWJUZXh0ID0gRVJST1JfVEVYVF9TVFVCLmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yU3R1YlRleHQgPSBFUlJPUl9URVhUX1NUVUIuZnI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBlcnJvciBzdGF0ZSBmcm9tIEZvcm1Hcm91cCwgbXVzdCBiZSB0b3VjaGVkICYgaW52YWxpZFxuICAgKi9cbiAgZ2V0RXJyb3JTdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuY29uZmlnLmZvcm1Hcm91cC5nZXQodGhpcy5jb25maWcuaWQpPy50b3VjaGVkICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cC5nZXQodGhpcy5jb25maWcuaWQpPy5pbnZhbGlkKSA/P1xuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG59XG4iLCI8Zm9ybVxuICBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiXG4gIFtmb3JtR3JvdXBdPVwiY29uZmlnLmZvcm1Hcm91cFwiXG4+XG4gIDxkaXZcbiAgICBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiXG4gICAgW25nQ2xhc3NdPVwiY29uZmlnLnNpemVcIlxuICA+XG4gICAgPGlyY2MtY2wtbGliLWxhYmVsXG4gICAgICBbY29uZmlnXT1cImxhYmVsQ29uZmlnXCJcbiAgICAgIFthdHRyLnNpemVdPVwiY29uZmlnLnNpemVcIlxuICAgID48L2lyY2MtY2wtbGliLWxhYmVsPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiY2hlY2tib3gtbGF5b3V0XCJcbiAgICAgIFtuZ0NsYXNzXT1cInsgZXJyb3I6IGdldEVycm9yU3RhdGUoKSB9XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgW2F0dHIuYXJpYS1saXZlXT1cIidvZmYnXCJcbiAgICAgICAgICAoYmx1cik9XCJ0b3VjaGVkID0gdHJ1ZVwiXG4gICAgICAgICAgaWQ9XCJ7eyBjb25maWcuaWQgfX1cIlxuICAgICAgICAgIGNsYXNzPVwiY2hlY2tcIlxuICAgICAgICAgIChjbGljayk9XCJzdGFuZEFsb25lRnVuY3Rpb25zLndhc1RvdWNoZWQoY29uZmlnLmZvcm1Hcm91cCwgY29uZmlnLmlkKVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgbWl4ZWQ6IGNvbmZpZy5taXhlZCxcbiAgICAgICAgICAgIGZvY3VzOiAhY29uZmlnLmRpc2FibGVGb2N1cyxcbiAgICAgICAgICAgIGVycm9yOiBnZXRFcnJvclN0YXRlKClcbiAgICAgICAgICB9XCJcbiAgICAgICAgICBbYXR0ci5zaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLmlkXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWludmFsaWRdPVwiZm9ybUNvbnRyb2w/LmludmFsaWRcIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgICAgICBmb3JtQ29udHJvbD8uaW52YWxpZCAmJiB0b3VjaGVkXG4gICAgICAgICAgICAgID8gKGNvbmZpZy5sYWJlbCB8fCAnJyB8IHRyYW5zbGF0ZSkgK1xuICAgICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgICAgKGNvbmZpZy5kZXNjIHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgICAoY29uZmlnLmhlbHBUZXh0IHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgICAoY29uZmlnLmlubGluZUxhYmVsIHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgICBlcnJvclN0dWJUZXh0ICtcbiAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgIGVycm9yQXJpYVxuICAgICAgICAgICAgICA6IChjb25maWcubGFiZWwgfHwgJycgfCB0cmFuc2xhdGUpICtcbiAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgIChjb25maWcuZGVzYyB8fCAnJyB8IHRyYW5zbGF0ZSkgK1xuICAgICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgICAgKGNvbmZpZy5oZWxwVGV4dCB8fCAnJyB8IHRyYW5zbGF0ZSkgK1xuICAgICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgICAgKGNvbmZpZy5pbmxpbmVMYWJlbCB8fCAnJyB8IHRyYW5zbGF0ZSlcbiAgICAgICAgICBcIlxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGxhYmVsXG4gICAgICAgIFthdHRyLmFyaWEtbGl2ZV09XCInb2ZmJ1wiXG4gICAgICAgIGNsYXNzPVwiY2hlY2tib3gtZGVzYy1sYWJlbFwiXG4gICAgICAgIFtmb3JdPVwiY29uZmlnLmlkXCJcbiAgICAgICAgW2lkXT1cImNvbmZpZy5pZCArICcgY2hlY2tib3hfbGFiZWwnXCJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICdkaXNhYmxlZC1sYWJlbCc6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgc21hbGw6IGNvbmZpZy5zaXplID09PSAnc21hbGwnLFxuICAgICAgICAgIG1ha2VCb2xkOiBjb25maWcuaW5saW5lTGFiZWxCb2xkXG4gICAgICAgIH1cIlxuICAgICAgICA+e3sgY29uZmlnLmlubGluZUxhYmVsIHx8ICcnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiZm9ybUNvbnRyb2w/LnRvdWNoZWQgJiYgZm9ybUNvbnRyb2w/LmludmFsaWRcIlxuICAgICAgICBjbGFzcz1cImNoZWNrLWVycm9yXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyBzbWFsbDogY29uZmlnLnNpemUgPT09ICdzbWFsbCcgfVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnt7XG4gICAgICAgICAgZXJyb3JTdHViVGV4dCArICc6ICcgKyAoY29uZmlnLmxhYmVsIHx8ICcnIHwgdHJhbnNsYXRlKSArICc6ICdcbiAgICAgICAgfX08L3NwYW4+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVycm9ycyBvZiBlcnJvcklkczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICpuZ0lmPVwiZm9ybUNvbnRyb2w/LmVycm9ycz8uW2Vycm9ycy5rZXldXCJcbiAgICAgICAgICAgIGNsYXNzPVwicmFkaW8tZXJyb3JzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aXJjYy1jbC1saWItZXJyb3JcbiAgICAgICAgICAgICAgW2lkXT1cImVycm9ycy5pZFwiXG4gICAgICAgICAgICAgIFtlcnJvckxPVl09XCJlcnJvcnMuZXJyb3JMT1ZcIlxuICAgICAgICAgICAgPjwvaXJjYy1jbC1saWItZXJyb3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPlxuIl19