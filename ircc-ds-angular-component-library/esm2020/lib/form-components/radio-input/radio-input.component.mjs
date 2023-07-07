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
export class RadioInputComponent {
    constructor(standAloneFunctions, translate) {
        this.standAloneFunctions = standAloneFunctions;
        this.translate = translate;
        this.formGroupEmpty = new FormGroup({});
        this.touched = false;
        this.errorIds = [];
        this.config = {
            id: '',
            formGroup: this.formGroupEmpty
        };
        this.id = '';
        this.formGroup = this.formGroupEmpty;
        this.labelConfig = {
            formGroup: this.config.formGroup,
            parentID: ''
        };
        this.errorStubText = '';
        this.errorAria = '';
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
    ngOnInit() {
        const retControl = this.config.formGroup.get(this.config.id);
        if (retControl) {
            this.formControl = retControl;
        }
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages, this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig);
        //set config from individual options, if present
        if (this.id !== '')
            this.config.id = this.id;
        if (this.formGroup !== this.formGroupEmpty)
            this.config.formGroup = this.formGroup;
        if (this.size)
            this.config.size = this.size;
        if (this.label)
            this.config.label = this.label;
        if (this.desc)
            this.config.desc = this.desc;
        if (this.hint)
            this.config.hint = this.hint;
        if (this.required)
            this.config.required = this.required;
        if (this.options)
            this.config.options = this.options;
        if (this.disabled)
            this.config.disabled = this.disabled;
        if (this.error)
            this.config.error = this.error;
        if (this.validators)
            this.config.validators = this.validators;
        if (this.helpText)
            this.config.helpText = this.helpText;
        if (this.errorMessages)
            this.config.errorMessages = this.errorMessages;
        if (this.config.errorMessages) {
            this.errorIds = this.standAloneFunctions.getErrorIds(this.config.formGroup, this.config.id, this.config.errorMessages);
        }
    }
    ngOnChanges() {
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages, this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig);
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
     * used to disable individual fields (from the config under 'options')
     * @param index of the option field to be disabled
     * @returns null if value is undefined, empty string otherwise. This works with [attr.disabled].
     */
    getDisabled(index) {
        if (this.config.options) {
            if (this.config.options[index].disabled === undefined &&
                !this.config.disabled) {
                return null;
            }
        }
        return '';
    }
}
RadioInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RadioInputComponent, deps: [{ token: i1.StandAloneFunctions }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
RadioInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: RadioInputComponent, selector: "ircc-cl-lib-radio-input", inputs: { config: "config", id: "id", formGroup: "formGroup", size: "size", label: "label", desc: "desc", hint: "hint", required: "required", options: "options", disabled: "disabled", error: "error", validators: "validators", helpText: "helpText", errorMessages: "errorMessages" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => RadioInputComponent) //This allows the error state to be turned off and on again
        }
    ], usesOnChanges: true, ngImport: i0, template: "<form\n  [formGroup]=\"config.formGroup\"\n  [ngClass]=\"config.size\"\n>\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <div class=\"radio-buttons\">\n    <div\n      *ngFor=\"let option of config.options; let index = index\"\n      class=\"radio\"\n    >\n      <!-- TODO: See if we can remove the error state from here, since it is controlled by the formControl -->\n      <input\n        (blur)=\"touched = true\"\n        type=\"radio\"\n        value=\"{{ option.value || option.text }}\"\n        id=\"{{ config.id + index }}\"\n        (click)=\"standAloneFunctions.wasTouched(config.formGroup, config.id)\"\n        [formControlName]=\"config.id ? config.id : 'formControl'\"\n        [attr.disabled]=\"getDisabled(index)\"\n        [ngClass]=\"option?.sizeOverride ? option?.sizeOverride : config.size\"\n        [attr.aria-invalid]=\"formControl?.invalid\"\n        [attr.aria-live]=\"'off'\"\n        [attr.aria-label]=\"\n          formControl?.invalid && touched\n            ? (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (config.helpText || '' | translate) +\n              ' ' +\n              (option.text || '' | translate) +\n              ' ' +\n              (errorStubText + ': ' + errorAria)\n            : (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (config.helpText || '' | translate) +\n              ' ' +\n              (option.text || '' | translate)\n        \"\n      />\n      <label\n        for=\"{{ config.id + index }}\"\n        [ngClass]=\"\n          option?.sizeOverride\n            ? option?.sizeOverride + '_label'\n            : config.size + '_label'\n        \"\n        >{{ option.text || '' | translate }}</label\n      >\n    </div>\n  </div>\n  <div aria-live=\"polite\">\n    <ng-container *ngIf=\"formControl?.touched && formControl?.invalid\">\n      <span class=\"sr-only\">{{\n        errorStubText + ': ' + (config.label || '' | translate) + ': '\n      }}</span>\n      <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n        <div\n          *ngIf=\"formControl?.errors?.[errors.key]\"\n          class=\"radio-errors\"\n        >\n          <ircc-cl-lib-error\n            [id]=\"errors.id\"\n            [errorLOV]=\"errors.errorLOV\"\n            [size]=\"config.size\"\n          ></ircc-cl-lib-error>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</form>\n", dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i6.ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RadioInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-radio-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(() => RadioInputComponent) //This allows the error state to be turned off and on again
                        }
                    ], template: "<form\n  [formGroup]=\"config.formGroup\"\n  [ngClass]=\"config.size\"\n>\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <div class=\"radio-buttons\">\n    <div\n      *ngFor=\"let option of config.options; let index = index\"\n      class=\"radio\"\n    >\n      <!-- TODO: See if we can remove the error state from here, since it is controlled by the formControl -->\n      <input\n        (blur)=\"touched = true\"\n        type=\"radio\"\n        value=\"{{ option.value || option.text }}\"\n        id=\"{{ config.id + index }}\"\n        (click)=\"standAloneFunctions.wasTouched(config.formGroup, config.id)\"\n        [formControlName]=\"config.id ? config.id : 'formControl'\"\n        [attr.disabled]=\"getDisabled(index)\"\n        [ngClass]=\"option?.sizeOverride ? option?.sizeOverride : config.size\"\n        [attr.aria-invalid]=\"formControl?.invalid\"\n        [attr.aria-live]=\"'off'\"\n        [attr.aria-label]=\"\n          formControl?.invalid && touched\n            ? (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (config.helpText || '' | translate) +\n              ' ' +\n              (option.text || '' | translate) +\n              ' ' +\n              (errorStubText + ': ' + errorAria)\n            : (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (config.helpText || '' | translate) +\n              ' ' +\n              (option.text || '' | translate)\n        \"\n      />\n      <label\n        for=\"{{ config.id + index }}\"\n        [ngClass]=\"\n          option?.sizeOverride\n            ? option?.sizeOverride + '_label'\n            : config.size + '_label'\n        \"\n        >{{ option.text || '' | translate }}</label\n      >\n    </div>\n  </div>\n  <div aria-live=\"polite\">\n    <ng-container *ngIf=\"formControl?.touched && formControl?.invalid\">\n      <span class=\"sr-only\">{{\n        errorStubText + ': ' + (config.label || '' | translate) + ': '\n      }}</span>\n      <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n        <div\n          *ngIf=\"formControl?.errors?.[errors.key]\"\n          class=\"radio-errors\"\n        >\n          <ircc-cl-lib-error\n            [id]=\"errors.id\"\n            [errorLOV]=\"errors.errorLOV\"\n            [size]=\"config.size\"\n          ></ircc-cl-lib-error>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</form>\n" }]
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
            }], required: [{
                type: Input
            }], options: [{
                type: Input
            }], disabled: [{
                type: Input
            }], error: [{
                type: Input
            }], validators: [{
                type: Input
            }], helpText: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2Zvcm0tY29tcG9uZW50cy9yYWRpby1pbnB1dC9yYWRpby1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvZm9ybS1jb21wb25lbnRzL3JhZGlvLWlucHV0L3JhZGlvLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBR0wsU0FBUyxFQUNULGlCQUFpQixFQUVsQixNQUFNLGdCQUFnQixDQUFDO0FBT3hCLE9BQU8sRUFDTCxlQUFlLEVBR2hCLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7O0FBdUM1QyxNQUFNLE9BQU8sbUJBQW1CO0lBK0I5QixZQUNTLG1CQUF3QyxFQUN2QyxTQUEyQjtRQUQ1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3ZDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBaENyQyxtQkFBYyxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFnQixFQUFFLENBQUM7UUFHbEIsV0FBTSxHQUErQjtZQUM1QyxFQUFFLEVBQUUsRUFBRTtZQUNOLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUMvQixDQUFDO1FBQ08sT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLGNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBYXpDLGdCQUFXLEdBQWlCO1lBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDaEMsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFD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QUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7O2lIQWhLVSxtQkFBbUI7cUdBQW5CLG1CQUFtQiw0VUFSbkI7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsMkRBQTJEO1NBQy9HO0tBQ0YsK0NDdkRILDBzRkFnRkE7NEZEdkJhLG1CQUFtQjtrQkFYL0IsU0FBUzsrQkFDRSx5QkFBeUIsYUFFeEI7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsQ0FBQywyREFBMkQ7eUJBQy9HO3FCQUNGO3lJQVFRLE1BQU07c0JBQWQsS0FBSztnQkFJRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Hcm91cCxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRvckZuXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElFcnJvclBhaXJzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvY29tcG9uZW50LWNvbmZpZ3MnO1xuaW1wb3J0IHsgRFNTaXplcyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb25zdGFudHMvamwtY29tcG9uZW50cy5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgSUVycm9ySURzLFxuICBTdGFuZEFsb25lRnVuY3Rpb25zXG59IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9mdW5jdGlvbnMvc3RhbmQtYWxvbmUuZnVuY3Rpb25zJztcbmltcG9ydCB7XG4gIEVSUk9SX1RFWFRfU1RVQixcbiAgSUxhYmVsQ29uZmlnLFxuICBJTGFiZWxJY29uQ29uZmlnXG59IGZyb20gJy4uLy4uL3NoYXJlZC9sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb0lucHV0Q29tcG9uZW50Q29uZmlnIHtcbiAgaWQ6IHN0cmluZztcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBkZXNjPzogc3RyaW5nO1xuICBoaW50Pzogc3RyaW5nO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIG9wdGlvbnM/OiBJUmFkaW9JbnB1dE9wdGlvbltdO1xuICBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgZXJyb3I/OiB0cnVlO1xuICB2YWxpZGF0b3JzPzogVmFsaWRhdG9yRm5bXTtcbiAgaGVscFRleHQ/OiBzdHJpbmc7XG4gIGVycm9yTWVzc2FnZXM/OiBJRXJyb3JQYWlyc1tdO1xuICBsYWJlbEljb25Db25maWc/OiBJTGFiZWxJY29uQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb0lucHV0T3B0aW9uIHtcbiAgdGV4dDogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZztcbiAgc2l6ZU92ZXJyaWRlPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG4gIGRpc2FibGVkPzogdHJ1ZTtcbiAgZXJyb3I/OiB0cnVlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpcmNjLWNsLWxpYi1yYWRpby1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYWRpb0lucHV0Q29tcG9uZW50KSAvL1RoaXMgYWxsb3dzIHRoZSBlcnJvciBzdGF0ZSB0byBiZSB0dXJuZWQgb2ZmIGFuZCBvbiBhZ2FpblxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIGZvcm1Hcm91cEVtcHR5ID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gIHRvdWNoZWQgPSBmYWxzZTtcbiAgZXJyb3JJZHM6IElFcnJvcklEc1tdID0gW107XG4gIGZvcm1Db250cm9sPzogQWJzdHJhY3RDb250cm9sO1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogSVJhZGlvSW5wdXRDb21wb25lbnRDb25maWcgPSB7XG4gICAgaWQ6ICcnLFxuICAgIGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXBFbXB0eVxuICB9O1xuICBASW5wdXQoKSBpZCA9ICcnO1xuICBASW5wdXQoKSBmb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cEVtcHR5O1xuICBASW5wdXQoKSBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSBkZXNjPzogc3RyaW5nO1xuICBASW5wdXQoKSBoaW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9wdGlvbnM/OiBJUmFkaW9JbnB1dE9wdGlvbltdO1xuICBASW5wdXQoKSBkaXNhYmxlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVycm9yPzogdHJ1ZTtcbiAgQElucHV0KCkgdmFsaWRhdG9ycz86IFZhbGlkYXRvckZuW107XG4gIEBJbnB1dCgpIGhlbHBUZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2VzPzogSUVycm9yUGFpcnNbXTtcblxuICBsYWJlbENvbmZpZzogSUxhYmVsQ29uZmlnID0ge1xuICAgIGZvcm1Hcm91cDogdGhpcy5jb25maWcuZm9ybUdyb3VwLFxuICAgIHBhcmVudElEOiAnJ1xuICB9O1xuICBlcnJvclN0dWJUZXh0ID0gJyc7XG4gIGVycm9yQXJpYSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzdGFuZEFsb25lRnVuY3Rpb25zOiBTdGFuZEFsb25lRnVuY3Rpb25zLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge31cblxuICBvbkNoYW5nZSA9IChmb3JtVmFsdWU6IHN0cmluZykgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuICB3cml0ZVZhbHVlKGZvcm1WYWx1ZTogYW55KSB7XG4gICAgLy8gdGhpcy5mb3JtLmdldCgnZm9ybUNvbnRyb2wnKT8uc2V0VmFsdWUoZm9ybVZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQob25Ub3VjaGVkOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IG9uVG91Y2hlZDtcbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWQoKSB7XG4gICAgaWYgKCF0aGlzLnRvdWNoZWQpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLnRvdWNoZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHJldENvbnRyb2wgPSB0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZ2V0KHRoaXMuY29uZmlnLmlkKTtcbiAgICBpZiAocmV0Q29udHJvbCkge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbCA9IHJldENvbnRyb2w7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRMYW5nKHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nKTtcbiAgICB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChjaGFuZ2UpID0+IHtcbiAgICAgIHRoaXMuc2V0TGFuZyhjaGFuZ2UubGFuZyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxhYmVsQ29uZmlnID0gdGhpcy5zdGFuZEFsb25lRnVuY3Rpb25zLm1ha2VMYWJlbENvbmZpZyhcbiAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgdGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcyxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsLFxuICAgICAgdGhpcy5jb25maWcuZGVzYyxcbiAgICAgIHRoaXMuY29uZmlnLmhpbnQsXG4gICAgICB0aGlzLmNvbmZpZy5yZXF1aXJlZCxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsSWNvbkNvbmZpZ1xuICAgICk7XG5cbiAgICAvL3NldCBjb25maWcgZnJvbSBpbmRpdmlkdWFsIG9wdGlvbnMsIGlmIHByZXNlbnRcbiAgICBpZiAodGhpcy5pZCAhPT0gJycpIHRoaXMuY29uZmlnLmlkID0gdGhpcy5pZDtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAgIT09IHRoaXMuZm9ybUdyb3VwRW1wdHkpIHRoaXMuY29uZmlnLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwO1xuICAgIGlmICh0aGlzLnNpemUpIHRoaXMuY29uZmlnLnNpemUgPSB0aGlzLnNpemU7XG4gICAgaWYgKHRoaXMubGFiZWwpIHRoaXMuY29uZmlnLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICBpZiAodGhpcy5kZXNjKSB0aGlzLmNvbmZpZy5kZXNjID0gdGhpcy5kZXNjO1xuICAgIGlmICh0aGlzLmhpbnQpIHRoaXMuY29uZmlnLmhpbnQgPSB0aGlzLmhpbnQ7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHRoaXMuY29uZmlnLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB0aGlzLmNvbmZpZy5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB0aGlzLmNvbmZpZy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHRoaXMuY29uZmlnLmVycm9yID0gdGhpcy5lcnJvcjtcbiAgICBpZiAodGhpcy52YWxpZGF0b3JzKSB0aGlzLmNvbmZpZy52YWxpZGF0b3JzID0gdGhpcy52YWxpZGF0b3JzO1xuICAgIGlmICh0aGlzLmhlbHBUZXh0KSB0aGlzLmNvbmZpZy5oZWxwVGV4dCA9IHRoaXMuaGVscFRleHQ7XG4gICAgaWYgKHRoaXMuZXJyb3JNZXNzYWdlcykgdGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcyA9IHRoaXMuZXJyb3JNZXNzYWdlcztcblxuICAgIGlmICh0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzKSB7XG4gICAgICB0aGlzLmVycm9ySWRzID0gdGhpcy5zdGFuZEFsb25lRnVuY3Rpb25zLmdldEVycm9ySWRzKFxuICAgICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgICB0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMubGFiZWxDb25maWcgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMubWFrZUxhYmVsQ29uZmlnKFxuICAgICAgdGhpcy5jb25maWcuZm9ybUdyb3VwLFxuICAgICAgdGhpcy5jb25maWcuaWQsXG4gICAgICB0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzLFxuICAgICAgdGhpcy5jb25maWcubGFiZWwsXG4gICAgICB0aGlzLmNvbmZpZy5kZXNjLFxuICAgICAgdGhpcy5jb25maWcuaGludCxcbiAgICAgIHRoaXMuY29uZmlnLnJlcXVpcmVkLFxuICAgICAgdGhpcy5jb25maWcubGFiZWxJY29uQ29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFyaWEgZXJyb3IgdGV4dCBmb3IgdGhlIGxhYmVsXG4gICAqL1xuICBnZXRBcmlhRXJyb3JUZXh0KCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sPy5tYXJrQXNEaXJ0eSgpO1xuICAgICAgdGhpcy5lcnJvckFyaWEgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMuZ2V0RXJyb3JBcmlhKFxuICAgICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgICB0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgdG91Y2hlZCBzdGF0ZSB0byB0cnVlIGFuZCB0cmlnZ2VyIGdldEFyaWFFcnJvclRleHQoKVxuICAgKi9cbiAgb25Ub3VjaGVkTGFiZWwoKSB7XG4gICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmdldEFyaWFFcnJvclRleHQoKTtcbiAgfVxuXG4gIHNldExhbmcobGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5nZXRBcmlhRXJyb3JUZXh0KCk7XG4gICAgaWYgKGxhbmcgPT09ICdlbicgfHwgbGFuZyA9PT0gJ2VuLVVTJykge1xuICAgICAgdGhpcy5lcnJvclN0dWJUZXh0ID0gRVJST1JfVEVYVF9TVFVCLmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yU3R1YlRleHQgPSBFUlJPUl9URVhUX1NUVUIuZnI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHVzZWQgdG8gZGlzYWJsZSBpbmRpdmlkdWFsIGZpZWxkcyAoZnJvbSB0aGUgY29uZmlnIHVuZGVyICdvcHRpb25zJylcbiAgICogQHBhcmFtIGluZGV4IG9mIHRoZSBvcHRpb24gZmllbGQgdG8gYmUgZGlzYWJsZWRcbiAgICogQHJldHVybnMgbnVsbCBpZiB2YWx1ZSBpcyB1bmRlZmluZWQsIGVtcHR5IHN0cmluZyBvdGhlcndpc2UuIFRoaXMgd29ya3Mgd2l0aCBbYXR0ci5kaXNhYmxlZF0uXG4gICAqL1xuICBnZXREaXNhYmxlZChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5jb25maWcub3B0aW9uc1tpbmRleF0uZGlzYWJsZWQgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAhdGhpcy5jb25maWcuZGlzYWJsZWRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iLCI8Zm9ybVxuICBbZm9ybUdyb3VwXT1cImNvbmZpZy5mb3JtR3JvdXBcIlxuICBbbmdDbGFzc109XCJjb25maWcuc2l6ZVwiXG4+XG4gIDxpcmNjLWNsLWxpYi1sYWJlbFxuICAgIFtjb25maWddPVwibGFiZWxDb25maWdcIlxuICAgIFthdHRyLnNpemVdPVwiY29uZmlnLnNpemVcIlxuICA+PC9pcmNjLWNsLWxpYi1sYWJlbD5cbiAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbnNcIj5cbiAgICA8ZGl2XG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5vcHRpb25zOyBsZXQgaW5kZXggPSBpbmRleFwiXG4gICAgICBjbGFzcz1cInJhZGlvXCJcbiAgICA+XG4gICAgICA8IS0tIFRPRE86IFNlZSBpZiB3ZSBjYW4gcmVtb3ZlIHRoZSBlcnJvciBzdGF0ZSBmcm9tIGhlcmUsIHNpbmNlIGl0IGlzIGNvbnRyb2xsZWQgYnkgdGhlIGZvcm1Db250cm9sIC0tPlxuICAgICAgPGlucHV0XG4gICAgICAgIChibHVyKT1cInRvdWNoZWQgPSB0cnVlXCJcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgdmFsdWU9XCJ7eyBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQgfX1cIlxuICAgICAgICBpZD1cInt7IGNvbmZpZy5pZCArIGluZGV4IH19XCJcbiAgICAgICAgKGNsaWNrKT1cInN0YW5kQWxvbmVGdW5jdGlvbnMud2FzVG91Y2hlZChjb25maWcuZm9ybUdyb3VwLCBjb25maWcuaWQpXCJcbiAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcuaWQgPyBjb25maWcuaWQgOiAnZm9ybUNvbnRyb2wnXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZ2V0RGlzYWJsZWQoaW5kZXgpXCJcbiAgICAgICAgW25nQ2xhc3NdPVwib3B0aW9uPy5zaXplT3ZlcnJpZGUgPyBvcHRpb24/LnNpemVPdmVycmlkZSA6IGNvbmZpZy5zaXplXCJcbiAgICAgICAgW2F0dHIuYXJpYS1pbnZhbGlkXT1cImZvcm1Db250cm9sPy5pbnZhbGlkXCJcbiAgICAgICAgW2F0dHIuYXJpYS1saXZlXT1cIidvZmYnXCJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICBmb3JtQ29udHJvbD8uaW52YWxpZCAmJiB0b3VjaGVkXG4gICAgICAgICAgICA/IChjb25maWcubGFiZWwgfHwgJycgfCB0cmFuc2xhdGUpICtcbiAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgKGNvbmZpZy5kZXNjIHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgIChjb25maWcuaGludCB8fCAnJyB8IHRyYW5zbGF0ZSkgK1xuICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAoY29uZmlnLmhlbHBUZXh0IHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgIChvcHRpb24udGV4dCB8fCAnJyB8IHRyYW5zbGF0ZSkgK1xuICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAoZXJyb3JTdHViVGV4dCArICc6ICcgKyBlcnJvckFyaWEpXG4gICAgICAgICAgICA6IChjb25maWcubGFiZWwgfHwgJycgfCB0cmFuc2xhdGUpICtcbiAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgKGNvbmZpZy5kZXNjIHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgIChjb25maWcuaGludCB8fCAnJyB8IHRyYW5zbGF0ZSkgK1xuICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAoY29uZmlnLmhlbHBUZXh0IHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgIChvcHRpb24udGV4dCB8fCAnJyB8IHRyYW5zbGF0ZSlcbiAgICAgICAgXCJcbiAgICAgIC8+XG4gICAgICA8bGFiZWxcbiAgICAgICAgZm9yPVwie3sgY29uZmlnLmlkICsgaW5kZXggfX1cIlxuICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICBvcHRpb24/LnNpemVPdmVycmlkZVxuICAgICAgICAgICAgPyBvcHRpb24/LnNpemVPdmVycmlkZSArICdfbGFiZWwnXG4gICAgICAgICAgICA6IGNvbmZpZy5zaXplICsgJ19sYWJlbCdcbiAgICAgICAgXCJcbiAgICAgICAgPnt7IG9wdGlvbi50ZXh0IHx8ICcnIHwgdHJhbnNsYXRlIH19PC9sYWJlbFxuICAgICAgPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybUNvbnRyb2w/LnRvdWNoZWQgJiYgZm9ybUNvbnRyb2w/LmludmFsaWRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnt7XG4gICAgICAgIGVycm9yU3R1YlRleHQgKyAnOiAnICsgKGNvbmZpZy5sYWJlbCB8fCAnJyB8IHRyYW5zbGF0ZSkgKyAnOiAnXG4gICAgICB9fTwvc3Bhbj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVycm9ycyBvZiBlcnJvcklkczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgKm5nSWY9XCJmb3JtQ29udHJvbD8uZXJyb3JzPy5bZXJyb3JzLmtleV1cIlxuICAgICAgICAgIGNsYXNzPVwicmFkaW8tZXJyb3JzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpcmNjLWNsLWxpYi1lcnJvclxuICAgICAgICAgICAgW2lkXT1cImVycm9ycy5pZFwiXG4gICAgICAgICAgICBbZXJyb3JMT1ZdPVwiZXJyb3JzLmVycm9yTE9WXCJcbiAgICAgICAgICAgIFtzaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgICA+PC9pcmNjLWNsLWxpYi1lcnJvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=