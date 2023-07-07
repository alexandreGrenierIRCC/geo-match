import { Component, forwardRef, Input } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/functions/stand-alone.functions";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/common";
import * as i4 from "../../shared/label/label.component";
import * as i5 from "@angular/forms";
import * as i6 from "../error/error.component";
export const MAX_CHAR_LIMIT_EN = 'Maximum character limit reached.';
export const MAX_CHAR_LIMIT_FR = 'Limite maximale de caractères atteinte.';
export const WARNING_CHAR_LIMIT_EN = 'Maximum character limit reached in 15 characters.';
export const WARNING_CHAR_LIMIT_FR = 'Limite maximale de caractères atteinte en 15 caractères.';
export var ResizableTypes;
(function (ResizableTypes) {
    ResizableTypes["vertical"] = "vertical";
    ResizableTypes["horizontal"] = "password";
    ResizableTypes["both"] = "both";
    ResizableTypes["none"] = "none";
})(ResizableTypes || (ResizableTypes = {}));
export class TextareaComponent {
    constructor(standAloneFunctions, translate) {
        this.standAloneFunctions = standAloneFunctions;
        this.translate = translate;
        this.formGroupEmpty = new FormGroup({});
        //DON'T include default values of '' unless it REALLY makes sense to do so. Instead, make them optional
        this.config = {
            id: '',
            formGroup: new FormGroup({})
        };
        this.id = '';
        this.formGroup = this.formGroupEmpty;
        this.charLimit = '';
        this.disabled = false;
        this.focusState = false;
        this.errorIds = [];
        this.charLimitStatus = '';
        this.currentCharacterStatusAria = '';
        this.announceCharStatusChangeAria = false;
        this.charLength = -1;
        this.labelConfig = {
            formGroup: this.config.formGroup,
            parentID: ''
        };
        this.textAreaAriaLabel = '';
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.id !== '')
            this.config.id = this.id;
        if (this.formGroup !== this.formGroupEmpty)
            this.config.formGroup = this.formGroup;
        if (this.charLimit !== '')
            this.config.charLimit = this.charLimit;
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
        if (this.resizable)
            this.config.resizable = this.resizable;
        if (this.errorMessages)
            this.config.errorMessages = this.errorMessages;
        if (this.errorIcon)
            this.config.errorIcon = this.errorIcon;
        if (this.config.charLimit != '' && this.config.charLimit) {
            this.charLength = 0;
        }
        if (this.config.errorMessages) {
            this.errorIds = this.standAloneFunctions.getErrorIds(this.config.formGroup, this.config.id, this.config.errorMessages);
        }
        if (this.config.formGroup.controls[this.config.id].value) {
            this.charLength = this.config.formGroup.controls[this.config.id].value.length;
            this.characterCountStatus(this.config.formGroup.controls[this.config.id].value.length);
        }
        this.config.formGroup.valueChanges.subscribe((change) => {
            this.characterCountStatus(change[this.config.id]?.length);
        });
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages, this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig);
    }
    ngOnChanges() {
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages, this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig);
    }
    focusInput(focusValue) {
        this.focusState = !focusValue;
    }
    characterCountStatus(currCharCount) {
        let currLang = this.translate.currentLang;
        if (this.config?.charLimit) {
            if (this.config?.charLimit == currCharCount) {
                this.charLimitStatus = 'maxLimit';
                (currLang === 'en' || currLang === 'en-US')
                    ? (this.currentCharacterStatusAria = MAX_CHAR_LIMIT_EN)
                    : (this.currentCharacterStatusAria = MAX_CHAR_LIMIT_FR);
                this.announceCharStatusChangeAria = true;
            }
            else if (Number(this.config?.charLimit) - currCharCount == 15) {
                this.charLimitStatus = 'warningLimit';
                (currLang === 'en' || currLang === 'en-US')
                    ? (this.currentCharacterStatusAria = WARNING_CHAR_LIMIT_EN)
                    : (this.currentCharacterStatusAria = WARNING_CHAR_LIMIT_FR);
                this.announceCharStatusChangeAria = true;
            }
            else if (Number(this.config?.charLimit) - currCharCount < 15) {
                this.charLimitStatus = 'warningLimit';
                this.currentCharacterStatusAria = '';
            }
            else {
                this.charLimitStatus = '';
                this.currentCharacterStatusAria = '';
            }
        }
    }
    onBlur() {
        this.announceCharStatusChangeAria = false;
        if (this.config.formGroup.controls[this.config.id].value) {
            this.charLength = this.config.formGroup.controls[this.config.id].value.length;
        }
    }
    formatCharacterUsedString(currentLength) {
        var formatedString = '';
        var currentLengthString = currentLength.toString();
        if (currentLengthString === '-1' || this.config.charLimit === '' || !this.config.charLimit) {
            return formatedString;
        }
        formatedString = currentLengthString + "/" + this.config.charLimit;
        return formatedString;
    }
    clearvalue() { }
    writeValue(value) { }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
TextareaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TextareaComponent, deps: [{ token: i1.StandAloneFunctions }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
TextareaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: TextareaComponent, selector: "ircc-cl-lib-textarea", inputs: { config: "config", id: "id", formGroup: "formGroup", size: "size", label: "label", desc: "desc", hint: "hint", placeholder: "placeholder", required: "required", charLimit: "charLimit", resizable: "resizable", errorMessages: "errorMessages", errorIcon: "errorIcon" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextareaComponent),
            multi: true
        }
    ], usesOnChanges: true, ngImport: i0, template: "<div>\n  <form [formGroup]=\"config.formGroup\">\n    <div\n      class=\"textarea-container\"\n      ngClass=\"{{ config.size }} resize-{{ config.resizable }}\"\n    >\n      <div>\n        <ircc-cl-lib-label\n          [config]=\"labelConfig\"\n          [attr.size]=\"config.size\"\n        ></ircc-cl-lib-label>\n        <div\n          class=\"content-area\"\n          [ngClass]=\"focusState === true ? 'focus' : ''\"\n        >\n          <textarea\n            class=\"textarea-field\"\n            maxlength=\"{{ config.charLimit }}\"\n            placeholder=\"{{\n              announceCharStatusChangeAria\n                ? ''\n                : (config.placeholder || '' | translate)\n            }}\"\n            [id]=\"config.id\"\n            tabindex=\"0\"\n            (blur)=\"onBlur()\"\n            [formControlName]=\"config.id\"\n            [attr.aria-label]=\"\n              announceCharStatusChangeAria\n                ? currentCharacterStatusAria\n                : (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate) +\n                  ' ' +\n                  (config.placeholder || '' | translate) +\n                  ' ' +\n                  formatCharacterUsedString(charLength)\n            \"\n            #textareaInput\n          >\n          </textarea>\n          <p\n            *ngIf=\"config.charLimit\"\n            class=\"character-count\"\n            [ngClass]=\"charLimitStatus\"\n          >\n            {{ textareaInput.value.length }}/{{ config.charLimit }}\n          </p>\n        </div>\n      </div>\n\n      <div\n        *ngIf=\"\n          config.formGroup.get(config.id)?.touched &&\n          config.formGroup.get(config.id)?.invalid\n        \"\n        class=\"check-error\"\n      >\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"config.formGroup.get(config.id)?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [size]=\"config.size\"\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </form>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i6.ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-textarea', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => TextareaComponent),
                            multi: true
                        }
                    ], template: "<div>\n  <form [formGroup]=\"config.formGroup\">\n    <div\n      class=\"textarea-container\"\n      ngClass=\"{{ config.size }} resize-{{ config.resizable }}\"\n    >\n      <div>\n        <ircc-cl-lib-label\n          [config]=\"labelConfig\"\n          [attr.size]=\"config.size\"\n        ></ircc-cl-lib-label>\n        <div\n          class=\"content-area\"\n          [ngClass]=\"focusState === true ? 'focus' : ''\"\n        >\n          <textarea\n            class=\"textarea-field\"\n            maxlength=\"{{ config.charLimit }}\"\n            placeholder=\"{{\n              announceCharStatusChangeAria\n                ? ''\n                : (config.placeholder || '' | translate)\n            }}\"\n            [id]=\"config.id\"\n            tabindex=\"0\"\n            (blur)=\"onBlur()\"\n            [formControlName]=\"config.id\"\n            [attr.aria-label]=\"\n              announceCharStatusChangeAria\n                ? currentCharacterStatusAria\n                : (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate) +\n                  ' ' +\n                  (config.placeholder || '' | translate) +\n                  ' ' +\n                  formatCharacterUsedString(charLength)\n            \"\n            #textareaInput\n          >\n          </textarea>\n          <p\n            *ngIf=\"config.charLimit\"\n            class=\"character-count\"\n            [ngClass]=\"charLimitStatus\"\n          >\n            {{ textareaInput.value.length }}/{{ config.charLimit }}\n          </p>\n        </div>\n      </div>\n\n      <div\n        *ngIf=\"\n          config.formGroup.get(config.id)?.touched &&\n          config.formGroup.get(config.id)?.invalid\n        \"\n        class=\"check-error\"\n      >\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"config.formGroup.get(config.id)?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [size]=\"config.size\"\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </form>\n</div>\n" }]
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
            }], charLimit: [{
                type: Input
            }], resizable: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], errorIcon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2Zvcm0tY29tcG9uZW50cy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvZm9ybS1jb21wb25lbnRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBRUwsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQWN4QixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxrQ0FBa0MsQ0FBQztBQUNwRSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyx5Q0FBeUMsQ0FBQztBQUUzRSxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxtREFBbUQsQ0FBQztBQUN6RixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRywwREFBMEQsQ0FBQztBQWtCaEcsTUFBTSxDQUFOLElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN4Qix1Q0FBcUIsQ0FBQTtJQUNyQix5Q0FBdUIsQ0FBQTtJQUN2QiwrQkFBYSxDQUFBO0lBQ2IsK0JBQWEsQ0FBQTtBQUNmLENBQUMsRUFMVyxjQUFjLEtBQWQsY0FBYyxRQUt6QjtBQVlELE1BQU0sT0FBTyxpQkFBaUI7SUFrQzVCLFlBQ1MsbUJBQXdDLEVBQ3ZDLFNBQTJCO1FBRDVCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFuQ3JDLG1CQUFjLEdBQWMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMsdUdBQXVHO1FB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Q0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtR3JvdXAsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERTU2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uc3RhbnRzL2psLWNvbXBvbmVudHMuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIElFcnJvcklEcyxcbiAgU3RhbmRBbG9uZUZ1bmN0aW9uc1xufSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvZnVuY3Rpb25zL3N0YW5kLWFsb25lLmZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBJRXJyb3JQYWlycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2NvbXBvbmVudC1jb25maWdzJztcbmltcG9ydCB7XG4gIElMYWJlbENvbmZpZyxcbiAgSUxhYmVsSWNvbkNvbmZpZ1xufSBmcm9tICcuLi8uLi9zaGFyZWQvbGFiZWwvbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IElFcnJvckljb25Db25maWcgfSBmcm9tICcuLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTUFYX0NIQVJfTElNSVRfRU4gPSAnTWF4aW11bSBjaGFyYWN0ZXIgbGltaXQgcmVhY2hlZC4nO1xuZXhwb3J0IGNvbnN0IE1BWF9DSEFSX0xJTUlUX0ZSID0gJ0xpbWl0ZSBtYXhpbWFsZSBkZSBjYXJhY3TDqHJlcyBhdHRlaW50ZS4nO1xuXG5leHBvcnQgY29uc3QgV0FSTklOR19DSEFSX0xJTUlUX0VOID0gJ01heGltdW0gY2hhcmFjdGVyIGxpbWl0IHJlYWNoZWQgaW4gMTUgY2hhcmFjdGVycy4nO1xuZXhwb3J0IGNvbnN0IFdBUk5JTkdfQ0hBUl9MSU1JVF9GUiA9ICdMaW1pdGUgbWF4aW1hbGUgZGUgY2FyYWN0w6hyZXMgYXR0ZWludGUgZW4gMTUgY2FyYWN0w6hyZXMuJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGV4dGFyZWFDb21wb25lbnRDb25maWcge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGRlc2M/OiBzdHJpbmc7XG4gIGhpbnQ/OiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjsgLy8gVGhpcyBmaWVsZCBvbmx5IGFkZHMgc3R5bGluZyB0byB0aGUgbGFiZWwgYW5kIERPRVMgTk9UIGFkZCBhbnkgdmFsaWRhdGlvbiB0byB0aGUgaW5wdXQgZmllbGQuXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBjaGFyTGltaXQ/OiBzdHJpbmc7XG4gIHJlc2l6YWJsZT86IGtleW9mIHR5cGVvZiBSZXNpemFibGVUeXBlcztcbiAgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzO1xuICBlcnJvck1lc3NhZ2VzPzogSUVycm9yUGFpcnNbXTtcbiAgZXJyb3JJY29uPzogSUVycm9ySWNvbkNvbmZpZztcbiAgbGFiZWxJY29uQ29uZmlnPzogSUxhYmVsSWNvbkNvbmZpZztcbn1cblxuZXhwb3J0IGVudW0gUmVzaXphYmxlVHlwZXMge1xuICB2ZXJ0aWNhbCA9ICd2ZXJ0aWNhbCcsXG4gIGhvcml6b250YWwgPSAncGFzc3dvcmQnLFxuICBib3RoID0gJ2JvdGgnLFxuICBub25lID0gJ25vbmUnXG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpcmNjLWNsLWxpYi10ZXh0YXJlYScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGV4dGFyZWFDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgZm9ybUdyb3VwRW1wdHk6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAvL0RPTidUIGluY2x1ZGUgZGVmYXVsdCB2YWx1ZXMgb2YgJycgdW5sZXNzIGl0IFJFQUxMWSBtYWtlcyBzZW5zZSB0byBkbyBzby4gSW5zdGVhZCwgbWFrZSB0aGVtIG9wdGlvbmFsXG4gIEBJbnB1dCgpIGNvbmZpZzogSVRleHRhcmVhQ29tcG9uZW50Q29uZmlnID0ge1xuICAgIGlkOiAnJyxcbiAgICBmb3JtR3JvdXA6IG5ldyBGb3JtR3JvdXAoe30pXG4gIH07XG5cbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgZm9ybUdyb3VwID0gdGhpcy5mb3JtR3JvdXBFbXB0eTtcbiAgQElucHV0KCkgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzO1xuICBASW5wdXQoKSBsYWJlbD86IHN0cmluZztcbiAgQElucHV0KCkgZGVzYz86IHN0cmluZztcbiAgQElucHV0KCkgaGludD86IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkPzogYm9vbGVhbjsgLy8gVGhpcyBmaWVsZCBvbmx5IGFkZHMgc3R5bGluZyB0byB0aGUgbGFiZWwgYW5kIERPRVMgTk9UIGFkZCBhbnkgdmFsaWRhdGlvbiB0byB0aGUgaW5wdXQgZmllbGQuXG4gIEBJbnB1dCgpIGNoYXJMaW1pdCA9ICcnO1xuICBASW5wdXQoKSByZXNpemFibGU/OiBrZXlvZiB0eXBlb2YgUmVzaXphYmxlVHlwZXM7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZXM/OiBJRXJyb3JQYWlyc1tdO1xuICBASW5wdXQoKSBlcnJvckljb24/OiBJRXJyb3JJY29uQ29uZmlnO1xuXG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGZvY3VzU3RhdGUgPSBmYWxzZTtcbiAgZXJyb3JJZHM6IElFcnJvcklEc1tdID0gW107XG4gIGNoYXJMaW1pdFN0YXR1cyA9ICcnO1xuICBjdXJyZW50Q2hhcmFjdGVyU3RhdHVzQXJpYSA9ICcnO1xuICBhbm5vdW5jZUNoYXJTdGF0dXNDaGFuZ2VBcmlhIDogYm9vbGVhbiA9IGZhbHNlO1xuICBjaGFyTGVuZ3RoIDogbnVtYmVyID0gLTE7XG4gIGxhYmVsQ29uZmlnOiBJTGFiZWxDb25maWcgPSB7XG4gICAgZm9ybUdyb3VwOiB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgcGFyZW50SUQ6ICcnXG4gIH07XG4gIHRleHRBcmVhQXJpYUxhYmVsID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHN0YW5kQWxvbmVGdW5jdGlvbnM6IFN0YW5kQWxvbmVGdW5jdGlvbnMsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgICApIHt9XG5cbiAgLy9SZW1vdmVkICchJyBhbmQgYWRkZWQgbnVsbCBjYXNlIGluIG9uQ2hhbmdlXG4gIHByaXZhdGUgb25Ub3VjaD86ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgb25DaGFuZ2U/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICAvL3NldCBjb25maWcgZnJvbSBpbmRpdmlkdWFsIG9wdGlvbnMsIGlmIHByZXNlbnRcbiAgICBpZiAodGhpcy5pZCAhPT0gJycpIHRoaXMuY29uZmlnLmlkID0gdGhpcy5pZDtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAgIT09IHRoaXMuZm9ybUdyb3VwRW1wdHkpIHRoaXMuY29uZmlnLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwO1xuICAgIGlmICh0aGlzLmNoYXJMaW1pdCAhPT0gJycpIHRoaXMuY29uZmlnLmNoYXJMaW1pdCA9IHRoaXMuY2hhckxpbWl0O1xuICAgIGlmICh0aGlzLnNpemUpIHRoaXMuY29uZmlnLnNpemUgPSB0aGlzLnNpemU7XG4gICAgaWYgKHRoaXMubGFiZWwpIHRoaXMuY29uZmlnLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICBpZiAodGhpcy5kZXNjKSB0aGlzLmNvbmZpZy5kZXNjID0gdGhpcy5kZXNjO1xuICAgIGlmICh0aGlzLmhpbnQpIHRoaXMuY29uZmlnLmhpbnQgPSB0aGlzLmhpbnQ7XG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCkgdGhpcy5jb25maWcucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkO1xuICAgIGlmICh0aGlzLnJlc2l6YWJsZSkgdGhpcy5jb25maWcucmVzaXphYmxlID0gdGhpcy5yZXNpemFibGU7XG4gICAgaWYgKHRoaXMuZXJyb3JNZXNzYWdlcykgdGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcyA9IHRoaXMuZXJyb3JNZXNzYWdlcztcbiAgICBpZiAodGhpcy5lcnJvckljb24pIHRoaXMuY29uZmlnLmVycm9ySWNvbiA9IHRoaXMuZXJyb3JJY29uO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmNoYXJMaW1pdCAhPSAnJyAmJiB0aGlzLmNvbmZpZy5jaGFyTGltaXQpIHtcbiAgICAgIHRoaXMuY2hhckxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXMpIHtcbiAgICAgIHRoaXMuZXJyb3JJZHMgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMuZ2V0RXJyb3JJZHMoXG4gICAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgICAgdGhpcy5jb25maWcuaWQsXG4gICAgICAgIHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmNvbmZpZy5pZF0udmFsdWUpIHtcbiAgICAgIHRoaXMuY2hhckxlbmd0aCA9IHRoaXMuY29uZmlnLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmNvbmZpZy5pZF0udmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudFN0YXR1cyh0aGlzLmNvbmZpZy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5jb25maWcuaWRdLnZhbHVlLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWcuZm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGNoYW5nZSkgPT4ge1xuICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudFN0YXR1cyhjaGFuZ2VbdGhpcy5jb25maWcuaWRdPy5sZW5ndGgpO1xuICAgICAgXG4gICAgfSk7XG5cbiAgICB0aGlzLmxhYmVsQ29uZmlnID0gdGhpcy5zdGFuZEFsb25lRnVuY3Rpb25zLm1ha2VMYWJlbENvbmZpZyhcbiAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgdGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcyxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsLFxuICAgICAgdGhpcy5jb25maWcuZGVzYyxcbiAgICAgIHRoaXMuY29uZmlnLmhpbnQsXG4gICAgICB0aGlzLmNvbmZpZy5yZXF1aXJlZCxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsSWNvbkNvbmZpZ1xuICAgICk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmxhYmVsQ29uZmlnID0gdGhpcy5zdGFuZEFsb25lRnVuY3Rpb25zLm1ha2VMYWJlbENvbmZpZyhcbiAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgdGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcyxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsLFxuICAgICAgdGhpcy5jb25maWcuZGVzYyxcbiAgICAgIHRoaXMuY29uZmlnLmhpbnQsXG4gICAgICB0aGlzLmNvbmZpZy5yZXF1aXJlZCxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsSWNvbkNvbmZpZ1xuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZm9jdXNJbnB1dChmb2N1c1ZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c1N0YXRlID0gIWZvY3VzVmFsdWU7XG4gIH1cblxuICBjaGFyYWN0ZXJDb3VudFN0YXR1cyhjdXJyQ2hhckNvdW50OiBhbnkpIHtcbiAgICBsZXQgY3VyckxhbmcgPSB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZztcbiAgICBpZiAodGhpcy5jb25maWc/LmNoYXJMaW1pdCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnPy5jaGFyTGltaXQgPT0gY3VyckNoYXJDb3VudCkge1xuICAgICAgICB0aGlzLmNoYXJMaW1pdFN0YXR1cyA9ICdtYXhMaW1pdCc7XG4gICAgICAgIChjdXJyTGFuZyA9PT0gJ2VuJyB8fCBjdXJyTGFuZyA9PT0gJ2VuLVVTJykgXG4gICAgICAgID8gKHRoaXMuY3VycmVudENoYXJhY3RlclN0YXR1c0FyaWEgPSBNQVhfQ0hBUl9MSU1JVF9FTikgXG4gICAgICAgIDogKHRoaXMuY3VycmVudENoYXJhY3RlclN0YXR1c0FyaWEgPSBNQVhfQ0hBUl9MSU1JVF9GUik7XG4gICAgICAgIHRoaXMuYW5ub3VuY2VDaGFyU3RhdHVzQ2hhbmdlQXJpYSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKE51bWJlcih0aGlzLmNvbmZpZz8uY2hhckxpbWl0KSAtIGN1cnJDaGFyQ291bnQgPT0gMTUpIHtcbiAgICAgICAgdGhpcy5jaGFyTGltaXRTdGF0dXMgPSAnd2FybmluZ0xpbWl0JztcbiAgICAgICAgKGN1cnJMYW5nID09PSAnZW4nIHx8IGN1cnJMYW5nID09PSAnZW4tVVMnKSBcbiAgICAgICAgPyAodGhpcy5jdXJyZW50Q2hhcmFjdGVyU3RhdHVzQXJpYSA9IFdBUk5JTkdfQ0hBUl9MSU1JVF9FTikgXG4gICAgICAgIDogKHRoaXMuY3VycmVudENoYXJhY3RlclN0YXR1c0FyaWEgPSBXQVJOSU5HX0NIQVJfTElNSVRfRlIpO1xuICAgICAgICB0aGlzLmFubm91bmNlQ2hhclN0YXR1c0NoYW5nZUFyaWEgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChOdW1iZXIodGhpcy5jb25maWc/LmNoYXJMaW1pdCkgLSBjdXJyQ2hhckNvdW50IDwgMTUpIHtcbiAgICAgICAgdGhpcy5jaGFyTGltaXRTdGF0dXMgPSAnd2FybmluZ0xpbWl0JztcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hhcmFjdGVyU3RhdHVzQXJpYSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGFyTGltaXRTdGF0dXMgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hhcmFjdGVyU3RhdHVzQXJpYSA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmFubm91bmNlQ2hhclN0YXR1c0NoYW5nZUFyaWEgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5jb25maWcuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuY29uZmlnLmlkXS52YWx1ZSkge1xuICAgICAgdGhpcy5jaGFyTGVuZ3RoID0gdGhpcy5jb25maWcuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuY29uZmlnLmlkXS52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0Q2hhcmFjdGVyVXNlZFN0cmluZyhjdXJyZW50TGVuZ3RoIDogIG51bWJlcikgOiBzdHJpbmcge1xuICAgIHZhciBmb3JtYXRlZFN0cmluZyA9ICcnXG4gICAgdmFyIGN1cnJlbnRMZW5ndGhTdHJpbmcgPSBjdXJyZW50TGVuZ3RoLnRvU3RyaW5nKClcbiAgICBpZiAoY3VycmVudExlbmd0aFN0cmluZyA9PT0gJy0xJyB8fCB0aGlzLmNvbmZpZy5jaGFyTGltaXQgPT09ICcnIHx8ICF0aGlzLmNvbmZpZy5jaGFyTGltaXQpIHtcbiAgICAgIHJldHVybiBmb3JtYXRlZFN0cmluZztcbiAgICB9XG4gICAgZm9ybWF0ZWRTdHJpbmcgPSBjdXJyZW50TGVuZ3RoU3RyaW5nICsgXCIvXCIgKyB0aGlzLmNvbmZpZy5jaGFyTGltaXRcbiAgICByZXR1cm4gZm9ybWF0ZWRTdHJpbmc7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJ2YWx1ZSgpIHt9XG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge31cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIiwiPGRpdj5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJjb25maWcuZm9ybUdyb3VwXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ0ZXh0YXJlYS1jb250YWluZXJcIlxuICAgICAgbmdDbGFzcz1cInt7IGNvbmZpZy5zaXplIH19IHJlc2l6ZS17eyBjb25maWcucmVzaXphYmxlIH19XCJcbiAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aXJjYy1jbC1saWItbGFiZWxcbiAgICAgICAgICBbY29uZmlnXT1cImxhYmVsQ29uZmlnXCJcbiAgICAgICAgICBbYXR0ci5zaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgPjwvaXJjYy1jbC1saWItbGFiZWw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNvbnRlbnQtYXJlYVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZm9jdXNTdGF0ZSA9PT0gdHJ1ZSA/ICdmb2N1cycgOiAnJ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzPVwidGV4dGFyZWEtZmllbGRcIlxuICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3sgY29uZmlnLmNoYXJMaW1pdCB9fVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7XG4gICAgICAgICAgICAgIGFubm91bmNlQ2hhclN0YXR1c0NoYW5nZUFyaWFcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiAoY29uZmlnLnBsYWNlaG9sZGVyIHx8ICcnIHwgdHJhbnNsYXRlKVxuICAgICAgICAgICAgfX1cIlxuICAgICAgICAgICAgW2lkXT1cImNvbmZpZy5pZFwiXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcuaWRcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICAgICAgYW5ub3VuY2VDaGFyU3RhdHVzQ2hhbmdlQXJpYVxuICAgICAgICAgICAgICAgID8gY3VycmVudENoYXJhY3RlclN0YXR1c0FyaWFcbiAgICAgICAgICAgICAgICA6IChjb25maWcubGFiZWwgfHwgJycgfCB0cmFuc2xhdGUpICtcbiAgICAgICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgICAgICAoY29uZmlnLmRlc2MgfHwgJycgfCB0cmFuc2xhdGUpICtcbiAgICAgICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgICAgICAoY29uZmlnLmhpbnQgfHwgJycgfCB0cmFuc2xhdGUpICtcbiAgICAgICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgICAgICAoY29uZmlnLnBsYWNlaG9sZGVyIHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgICAgZm9ybWF0Q2hhcmFjdGVyVXNlZFN0cmluZyhjaGFyTGVuZ3RoKVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICN0ZXh0YXJlYUlucHV0XG4gICAgICAgICAgPlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnLmNoYXJMaW1pdFwiXG4gICAgICAgICAgICBjbGFzcz1cImNoYXJhY3Rlci1jb3VudFwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJjaGFyTGltaXRTdGF0dXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IHRleHRhcmVhSW5wdXQudmFsdWUubGVuZ3RoIH19L3t7IGNvbmZpZy5jaGFyTGltaXQgfX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICBjb25maWcuZm9ybUdyb3VwLmdldChjb25maWcuaWQpPy50b3VjaGVkICYmXG4gICAgICAgICAgY29uZmlnLmZvcm1Hcm91cC5nZXQoY29uZmlnLmlkKT8uaW52YWxpZFxuICAgICAgICBcIlxuICAgICAgICBjbGFzcz1cImNoZWNrLWVycm9yXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZXJyb3JzIG9mIGVycm9ySWRzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nSWY9XCJjb25maWcuZm9ybUdyb3VwLmdldChjb25maWcuaWQpPy5lcnJvcnM/LltlcnJvcnMua2V5XVwiXG4gICAgICAgICAgICBjbGFzcz1cInJhZGlvLWVycm9yc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlyY2MtY2wtbGliLWVycm9yXG4gICAgICAgICAgICAgIFtzaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgICAgICAgW2lkXT1cImVycm9ycy5pZFwiXG4gICAgICAgICAgICAgIFtlcnJvckxPVl09XCJlcnJvcnMuZXJyb3JMT1ZcIlxuICAgICAgICAgICAgPjwvaXJjYy1jbC1saWItZXJyb3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbjwvZGl2PlxuIl19