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
export var InputTypes;
(function (InputTypes) {
    InputTypes["text"] = "text";
    InputTypes["password"] = "password";
})(InputTypes || (InputTypes = {}));
export const ARIA_TEXT = {
    en: {
        btnTypePasswordAriaLabel: 'password eye icon',
        btnTypePasswordShowAriaLabel: 'display password text',
        btnTypePasswordHideAriaLabel: 'mark password text'
    },
    fr: {
        btnTypePasswordAriaLabel: "icône d'oeil de mot de passe",
        btnTypePasswordShowAriaLabel: 'afficher le texte du mot de passe',
        btnTypePasswordHideAriaLabel: 'mark password text'
    }
};
export class InputComponent {
    constructor(standAloneFunctions, translate) {
        this.standAloneFunctions = standAloneFunctions;
        this.translate = translate;
        this.formGroupEmpty = new FormGroup({});
        /**
         * Note: DON'T include default values of '' unless it REALLY makes sense to do so - instead, make them optional.
         * The config input is where you declare the inputs desired properties such as labels, hints, descriptions, etc. where only the id and form group are mandatory properties. Refer to IInputComponentConfig interface.
         */
        this.config = {
            id: '',
            formGroup: new FormGroup({})
        };
        /**
         * The input id is used to identify the component uniquely for subscribing to value changes and errors
         */
        this.id = '';
        /**
         * FormGroup aggregates the values of each child FormControl into one object, with each control name as the key. It calculates its status by reducing the status values of its children. For example, if one of the controls in a group is invalid, the entire group becomes invalid.
         */
        this.formGroup = this.formGroupEmpty;
        /**
         * Type refers to the 2 different input options: basic text or password as the password type has additional configuration
         */
        this.type = InputTypes.password;
        this.disabled = false;
        this.focusState = false;
        this.typeControl = InputTypes.text;
        this.btnAriaLabel = '';
        this.btnAriaLabelHide = '';
        this.btnAriaLabelShow = '';
        this.errorIds = [];
        this.errorAria = '';
        this.labelConfig = {
            formGroup: this.config.formGroup,
            parentID: ''
        };
        this.touched = false;
        this.errorStubText = '';
        //set config from individual options, if present
        if (this.formGroup !== this.formGroupEmpty) {
            this.config.formGroup = this.formGroup;
        }
        if (this.id !== '') {
            this.config.id = this.id;
        }
        if (!this.config.type) {
            this.config.type = InputTypes.text;
        }
        else if (this.config.type === InputTypes.password) {
            this.showPassword = false;
            this.typeControl = InputTypes.password;
        }
        if (this.size)
            this.config.size = this.size;
        if (this.label)
            this.config.label = this.label;
        if (this.hint)
            this.config.hint = this.hint;
        if (this.desc)
            this.config.desc = this.desc;
        if (this.required)
            this.config.required = this.required;
        if (this.placeholder)
            this.config.placeholder = this.placeholder;
        if (this.errorMessages)
            this.config.errorMessages = this.errorMessages;
    }
    /**
     * When the page loads, we initialize the form with it's controls, labels, and config, and detect value changes and errors. setLang detects changes to the language toggle to serve the correct text
     */
    ngOnInit() {
        const retControl = this.config.formGroup.get(this.config.id);
        if (retControl) {
            this.formControl = retControl;
        }
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
        this.type === InputTypes.text
            ? (this.showPassword = false)
            : (this.showPassword = true);
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages, this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig);
        //set disable to true when form is disabled
        this.config.formGroup.valueChanges.subscribe((change) => {
            this.disabled = this.config.formGroup.get(this.config.id)
                ?.disabled;
        });
        if (this.config.errorMessages) {
            this.errorIds = this.standAloneFunctions.getErrorIds(this.config.formGroup, this.config.id, this.config.errorMessages);
        }
        //Get the error text when the formControl value changes
        this.config.formGroup.get(this.config.id)?.statusChanges.subscribe(() => {
            this.getAriaErrorText();
        });
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
    /**
     * setLang detects changes to the language toggle to serve the correct aria error text
     */
    setLang(lang) {
        this.getAriaErrorText();
        if (lang === 'en' || lang === 'en-US') {
            this.errorStubText = ERROR_TEXT_STUB.en;
            this.btnAriaLabel = ARIA_TEXT.en.btnTypePasswordAriaLabel;
            this.btnAriaLabelHide = ARIA_TEXT.en.btnTypePasswordHideAriaLabel;
            this.btnAriaLabelShow = ARIA_TEXT.en.btnTypePasswordShowAriaLabel;
        }
        else {
            this.errorStubText = ERROR_TEXT_STUB.fr;
            this.btnAriaLabel = ARIA_TEXT.fr.btnTypePasswordAriaLabel;
            this.btnAriaLabelHide = ARIA_TEXT.fr.btnTypePasswordHideAriaLabel;
            this.btnAriaLabelShow = ARIA_TEXT.fr.btnTypePasswordShowAriaLabel;
        }
    }
    /**
     * A lifecycle hook that is called when any data-bound property of a directive changes.
     */
    ngOnChanges() {
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, this.config.errorMessages, this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig);
    }
    /**
     * Apply focus state
     */
    focusInput(focusValue) {
        this.focusState = !focusValue;
    }
    /**
     * Toggle the password field
     */
    hideShow() {
        this.showPassword = !this.showPassword;
        if (this.showPassword) {
            this.typeControl = InputTypes.text;
        }
        else {
            this.typeControl = InputTypes.password;
        }
    }
    clearvalue() { }
    /**
     * Prevents the info button from being triggered and marks the input as touched.
     * @param event
     */
    enterEvent(event) {
        event.preventDefault();
        this.config.formGroup.get(this.config.id)?.markAsTouched();
    }
    /**
     *
     */
    writeValue(value) { }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * Apply a disabled state
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * Return error state from FormGroup, must be touched & invalid
     */
    get getErrorState() {
        return ((this.config.formGroup.get(this.config.id)?.touched &&
            this.config.formGroup.get(this.config.id)?.invalid) ??
            false);
    }
}
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: InputComponent, deps: [{ token: i1.StandAloneFunctions }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: InputComponent, selector: "ircc-cl-lib-input", inputs: { config: "config", id: "id", formGroup: "formGroup", type: "type", size: "size", label: "label", hint: "hint", desc: "desc", required: "required", placeholder: "placeholder", errorMessages: "errorMessages" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ], usesOnChanges: true, ngImport: i0, template: "<div\n  id=\"{{ config.id + '_container' }}\"\n  class=\"input-wrapper\"\n>\n  <form [formGroup]=\"config.formGroup\">\n    <div\n      class=\"input-container\"\n      [ngClass]=\"config.size\"\n    >\n      <div class=\"input-text\">\n        <ircc-cl-lib-label\n          [config]=\"labelConfig\"\n          [attr.size]=\"config.size\"\n        ></ircc-cl-lib-label>\n        <div\n          class=\"input-content-area\"\n          [ngClass]=\"focusState === true ? 'focus' : ''\"\n        >\n          <!-- ngModel doesn't mind undefined values, apparently\n          TODO: Should probably change the (keyup) to (onblur) -->\n          <input\n            (blur)=\"onTouchedLabel()\"\n            name=\"{{ config.id }}\"\n            class=\"input-field\"\n            placeholder=\"{{ config.placeholder || '' | translate }}\"\n            tabindex=\"0\"\n            [ngClass]=\"\n              config.type === 'password'\n                ? 'input-password-field'\n                : 'input-text-field'\n            \"\n            [type]=\"typeControl\"\n            [id]=\"config.id\"\n            [formControlName]=\"config.id\"\n            (keydown.enter)=\"enterEvent($event)\"\n            [attr.aria-invalid]=\"formControl?.invalid\"\n            [attr.aria-live]=\"'off'\"\n            [attr.aria-label]=\"\n              formControl?.invalid && touched\n                ? (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate) +\n                  ' ' +\n                  (errorStubText + ': ' + errorAria)\n                : (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate)\n            \"\n          />\n\n          <button\n            *ngIf=\"config.type === 'password'\"\n            role=\"button\"\n            category=\"plain\"\n            tabindex=\"0\"\n            class=\"passwordIcon\"\n            (click)=\"hideShow()\"\n            [disabled]=\"disabled\"\n            attr.aria-label={{btnAriaLabel}}\n            aria-live=\"polite\"\n          >\n            <div\n              *ngIf=\"showPassword\"\n              role=\"img\"\n              attr.aria-label=\"{{btnAriaLabelHide}}\"\n            >\n              <i class=\"fa-solid fa-eye-slash\"></i>\n            </div>\n            <div\n              *ngIf=\"!showPassword\"\n              role=\"img\"\n              attr.aria-label=\"{{btnAriaLabelShow}}\"\n            >\n              <i class=\"fa-solid fa-eye\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div aria-live=\"polite\">\n        <div\n          *ngIf=\"formControl?.touched && formControl?.invalid\"\n          class=\"check-error\"\n        >\n          <span class=\"sr-only\">{{\n            errorStubText + ': ' + (config.label || '' | translate) + ': '\n          }}</span>\n          <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n            <div\n              *ngIf=\"formControl?.errors?.[errors.key]\"\n              class=\"radio-errors\"\n            >\n              <ircc-cl-lib-error\n                [id]=\"errors.id\"\n                [errorLOV]=\"errors.errorLOV\"\n              ></ircc-cl-lib-error>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i6.ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => InputComponent),
                            multi: true
                        }
                    ], template: "<div\n  id=\"{{ config.id + '_container' }}\"\n  class=\"input-wrapper\"\n>\n  <form [formGroup]=\"config.formGroup\">\n    <div\n      class=\"input-container\"\n      [ngClass]=\"config.size\"\n    >\n      <div class=\"input-text\">\n        <ircc-cl-lib-label\n          [config]=\"labelConfig\"\n          [attr.size]=\"config.size\"\n        ></ircc-cl-lib-label>\n        <div\n          class=\"input-content-area\"\n          [ngClass]=\"focusState === true ? 'focus' : ''\"\n        >\n          <!-- ngModel doesn't mind undefined values, apparently\n          TODO: Should probably change the (keyup) to (onblur) -->\n          <input\n            (blur)=\"onTouchedLabel()\"\n            name=\"{{ config.id }}\"\n            class=\"input-field\"\n            placeholder=\"{{ config.placeholder || '' | translate }}\"\n            tabindex=\"0\"\n            [ngClass]=\"\n              config.type === 'password'\n                ? 'input-password-field'\n                : 'input-text-field'\n            \"\n            [type]=\"typeControl\"\n            [id]=\"config.id\"\n            [formControlName]=\"config.id\"\n            (keydown.enter)=\"enterEvent($event)\"\n            [attr.aria-invalid]=\"formControl?.invalid\"\n            [attr.aria-live]=\"'off'\"\n            [attr.aria-label]=\"\n              formControl?.invalid && touched\n                ? (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate) +\n                  ' ' +\n                  (errorStubText + ': ' + errorAria)\n                : (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate)\n            \"\n          />\n\n          <button\n            *ngIf=\"config.type === 'password'\"\n            role=\"button\"\n            category=\"plain\"\n            tabindex=\"0\"\n            class=\"passwordIcon\"\n            (click)=\"hideShow()\"\n            [disabled]=\"disabled\"\n            attr.aria-label={{btnAriaLabel}}\n            aria-live=\"polite\"\n          >\n            <div\n              *ngIf=\"showPassword\"\n              role=\"img\"\n              attr.aria-label=\"{{btnAriaLabelHide}}\"\n            >\n              <i class=\"fa-solid fa-eye-slash\"></i>\n            </div>\n            <div\n              *ngIf=\"!showPassword\"\n              role=\"img\"\n              attr.aria-label=\"{{btnAriaLabelShow}}\"\n            >\n              <i class=\"fa-solid fa-eye\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div aria-live=\"polite\">\n        <div\n          *ngIf=\"formControl?.touched && formControl?.invalid\"\n          class=\"check-error\"\n        >\n          <span class=\"sr-only\">{{\n            errorStubText + ': ' + (config.label || '' | translate) + ': '\n          }}</span>\n          <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n            <div\n              *ngIf=\"formControl?.errors?.[errors.key]\"\n              class=\"radio-errors\"\n            >\n              <ircc-cl-lib-error\n                [id]=\"errors.id\"\n                [errorLOV]=\"errors.errorLOV\"\n              ></ircc-cl-lib-error>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.StandAloneFunctions }, { type: i2.TranslateService }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], formGroup: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }], hint: [{
                type: Input
            }], desc: [{
                type: Input
            }], required: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2Zvcm0tY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvZm9ybS1jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUdMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQU94QixPQUFPLEVBQ0wsZUFBZSxFQUdoQixNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7OztBQWlCNUMsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQiwyQkFBYSxDQUFBO0lBQ2IsbUNBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUhXLFVBQVUsS0FBVixVQUFVLFFBR3JCO0FBRUQsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHO0lBQ3ZCLEVBQUUsRUFBRTtRQUNGLHdCQUF3QixFQUFFLG1CQUFtQjtRQUM3Qyw0QkFBNEIsRUFBRSx1QkFBdUI7UUFDckQsNEJBQTRCLEVBQUUsb0JBQW9CO0tBQ25EO0lBQ0QsRUFBRSxFQUFFO1FBQ0Ysd0JBQXdCLEVBQUUsOEJBQThCO1FBQ3hELDRCQUE0QixFQUFFLG1DQUFtQztRQUNqRSw0QkFBNEIsRUFBRSxvQkFBb0I7S0FDbkQ7Q0FDRixDQUFDO0FBYUYsTUFBTSxPQUFPLGNBQWM7SUFrRHpCLFlBQ1MsbUJBQXdDLEVBQ3ZDLFNBQTJCO1FBRDVCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFuRHJDLG1CQUFjLEdBQWMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUM7OztXQUdHO1FBQ00sV0FBTSxHQUEwQjtZQUN2QyxFQUFFLEVBQUUsRUFBRTtZQUNOLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDN0IsQ0FBQztRQUNGOztXQUVHO1FBQ00sT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUVqQjs7V0FFRztRQUNNLGNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRXpDOztXQUVHO1FBQ00sU0FBSSxHQUE0QixVQUFVLENBQUMsUUFBUSxDQUFDO1FBVTdELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixnQkFBVyxHQUE0QixVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3ZELGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFnQixFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGdCQUFXLEdBQWlCO1lBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDaEMsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBQ0YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQU1qQixnREFBZ0Q7UUFDaEQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN4QztRQUNELElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUMxQjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN4QztRQUVELElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2pFLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3pFLENBQUM7SUFNRDs7T0FFRztJQUNILFFBQVE7UUFDTixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1NBQy9CO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSTtZQUM3QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQzVCLENBQUM7UUFFRiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUN2RCxFQUFFLFFBQW1CLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUMxQixDQUFDO1NBQ0g7UUFFRCx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdEUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQzFCLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQzFELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQ25FO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQzFELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQzVCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVLENBQUMsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFdkMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVNLFVBQVUsS0FBSSxDQUFDO0lBRXRCOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxLQUFZO1FBQ3JCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVLENBQUMsS0FBYSxJQUFTLENBQUM7SUFFbEMsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLGFBQWE7UUFDZixPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQztZQUNyRCxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7OzRHQXJQVSxjQUFjO2dHQUFkLGNBQWMsc1FBUmQ7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDN0MsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLCtDQzdESCx3OEdBMEdBOzRGRDNDYSxjQUFjO2tCQVgxQixTQUFTOytCQUNFLG1CQUFtQixhQUVsQjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUM7NEJBQzdDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO3lJQVFRLE1BQU07c0JBQWQsS0FBSztnQkFPRyxFQUFFO3NCQUFWLEtBQUs7Z0JBS0csU0FBUztzQkFBakIsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Hcm91cCxcbiAgTkdfVkFMVUVfQUNDRVNTT1Jcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUVycm9yUGFpcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9jb21wb25lbnQtY29uZmlncyc7XG5pbXBvcnQgeyBEU1NpemVzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9qbC1jb21wb25lbnRzLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICBJRXJyb3JJRHMsXG4gIFN0YW5kQWxvbmVGdW5jdGlvbnNcbn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2Z1bmN0aW9ucy9zdGFuZC1hbG9uZS5mdW5jdGlvbnMnO1xuaW1wb3J0IHtcbiAgRVJST1JfVEVYVF9TVFVCLFxuICBJTGFiZWxDb25maWcsXG4gIElMYWJlbEljb25Db25maWdcbn0gZnJvbSAnLi4vLi4vc2hhcmVkL2xhYmVsL2xhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUlucHV0Q29tcG9uZW50Q29uZmlnIHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGhpbnQ/OiBzdHJpbmc7XG4gIGRlc2M/OiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjsgLy8gVGhpcyBmaWVsZCBvbmx5IGFkZHMgc3R5bGluZyB0byB0aGUgbGFiZWwgYW5kIERPRVMgTk9UIGFkZCBhbnkgdmFsaWRhdGlvbiB0byB0aGUgaW5wdXQgZmllbGQuXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB0eXBlPzoga2V5b2YgdHlwZW9mIElucHV0VHlwZXM7XG4gIGlkOiBzdHJpbmc7XG4gIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNTaXplcztcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIGVycm9yTWVzc2FnZXM/OiBJRXJyb3JQYWlyc1tdO1xuICBsYWJlbEljb25Db25maWc/OiBJTGFiZWxJY29uQ29uZmlnO1xufVxuXG5leHBvcnQgZW51bSBJbnB1dFR5cGVzIHtcbiAgdGV4dCA9ICd0ZXh0JyxcbiAgcGFzc3dvcmQgPSAncGFzc3dvcmQnXG59XG5cbmV4cG9ydCBjb25zdCBBUklBX1RFWFQgPSB7XG4gIGVuOiB7XG4gICAgYnRuVHlwZVBhc3N3b3JkQXJpYUxhYmVsOiAncGFzc3dvcmQgZXllIGljb24nLFxuICAgIGJ0blR5cGVQYXNzd29yZFNob3dBcmlhTGFiZWw6ICdkaXNwbGF5IHBhc3N3b3JkIHRleHQnLFxuICAgIGJ0blR5cGVQYXNzd29yZEhpZGVBcmlhTGFiZWw6ICdtYXJrIHBhc3N3b3JkIHRleHQnXG4gIH0sXG4gIGZyOiB7XG4gICAgYnRuVHlwZVBhc3N3b3JkQXJpYUxhYmVsOiBcImljw7RuZSBkJ29laWwgZGUgbW90IGRlIHBhc3NlXCIsXG4gICAgYnRuVHlwZVBhc3N3b3JkU2hvd0FyaWFMYWJlbDogJ2FmZmljaGVyIGxlIHRleHRlIGR1IG1vdCBkZSBwYXNzZScsXG4gICAgYnRuVHlwZVBhc3N3b3JkSGlkZUFyaWFMYWJlbDogJ21hcmsgcGFzc3dvcmQgdGV4dCdcbiAgfVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgZm9ybUdyb3VwRW1wdHk6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAvKipcbiAgICogTm90ZTogRE9OJ1QgaW5jbHVkZSBkZWZhdWx0IHZhbHVlcyBvZiAnJyB1bmxlc3MgaXQgUkVBTExZIG1ha2VzIHNlbnNlIHRvIGRvIHNvIC0gaW5zdGVhZCwgbWFrZSB0aGVtIG9wdGlvbmFsLlxuICAgKiBUaGUgY29uZmlnIGlucHV0IGlzIHdoZXJlIHlvdSBkZWNsYXJlIHRoZSBpbnB1dHMgZGVzaXJlZCBwcm9wZXJ0aWVzIHN1Y2ggYXMgbGFiZWxzLCBoaW50cywgZGVzY3JpcHRpb25zLCBldGMuIHdoZXJlIG9ubHkgdGhlIGlkIGFuZCBmb3JtIGdyb3VwIGFyZSBtYW5kYXRvcnkgcHJvcGVydGllcy4gUmVmZXIgdG8gSUlucHV0Q29tcG9uZW50Q29uZmlnIGludGVyZmFjZS5cbiAgICovXG4gIEBJbnB1dCgpIGNvbmZpZzogSUlucHV0Q29tcG9uZW50Q29uZmlnID0ge1xuICAgIGlkOiAnJyxcbiAgICBmb3JtR3JvdXA6IG5ldyBGb3JtR3JvdXAoe30pXG4gIH07XG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgaWQgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgY29tcG9uZW50IHVuaXF1ZWx5IGZvciBzdWJzY3JpYmluZyB0byB2YWx1ZSBjaGFuZ2VzIGFuZCBlcnJvcnNcbiAgICovXG4gIEBJbnB1dCgpIGlkID0gJyc7XG5cbiAgLyoqXG4gICAqIEZvcm1Hcm91cCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjaGlsZCBGb3JtQ29udHJvbCBpbnRvIG9uZSBvYmplY3QsIHdpdGggZWFjaCBjb250cm9sIG5hbWUgYXMgdGhlIGtleS4gSXQgY2FsY3VsYXRlcyBpdHMgc3RhdHVzIGJ5IHJlZHVjaW5nIHRoZSBzdGF0dXMgdmFsdWVzIG9mIGl0cyBjaGlsZHJlbi4gRm9yIGV4YW1wbGUsIGlmIG9uZSBvZiB0aGUgY29udHJvbHMgaW4gYSBncm91cCBpcyBpbnZhbGlkLCB0aGUgZW50aXJlIGdyb3VwIGJlY29tZXMgaW52YWxpZC5cbiAgICovXG4gIEBJbnB1dCgpIGZvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwRW1wdHk7XG5cbiAgLyoqXG4gICAqIFR5cGUgcmVmZXJzIHRvIHRoZSAyIGRpZmZlcmVudCBpbnB1dCBvcHRpb25zOiBiYXNpYyB0ZXh0IG9yIHBhc3N3b3JkIGFzIHRoZSBwYXNzd29yZCB0eXBlIGhhcyBhZGRpdGlvbmFsIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6IGtleW9mIHR5cGVvZiBJbnB1dFR5cGVzID0gSW5wdXRUeXBlcy5wYXNzd29yZDtcblxuICBASW5wdXQoKSBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSBoaW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSBkZXNjPzogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZD86IGJvb2xlYW47IC8vIFRoaXMgZmllbGQgb25seSBhZGRzIHN0eWxpbmcgdG8gdGhlIGxhYmVsIGFuZCBET0VTIE5PVCBhZGQgYW55IHZhbGlkYXRpb24gdG8gdGhlIGlucHV0IGZpZWxkLlxuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlcz86IElFcnJvclBhaXJzW107XG5cbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgZm9jdXNTdGF0ZSA9IGZhbHNlO1xuICBzaG93UGFzc3dvcmQ/OiBib29sZWFuO1xuICB0eXBlQ29udHJvbDoga2V5b2YgdHlwZW9mIElucHV0VHlwZXMgPSBJbnB1dFR5cGVzLnRleHQ7XG4gIGJ0bkFyaWFMYWJlbCA9ICcnO1xuICBidG5BcmlhTGFiZWxIaWRlID0gJyc7XG4gIGJ0bkFyaWFMYWJlbFNob3cgPSAnJztcbiAgZXJyb3JJZHM6IElFcnJvcklEc1tdID0gW107XG4gIGVycm9yQXJpYSA9ICcnO1xuICBmb3JtQ29udHJvbD86IEFic3RyYWN0Q29udHJvbDtcbiAgbGFiZWxDb25maWc6IElMYWJlbENvbmZpZyA9IHtcbiAgICBmb3JtR3JvdXA6IHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICBwYXJlbnRJRDogJydcbiAgfTtcbiAgdG91Y2hlZCA9IGZhbHNlO1xuICBlcnJvclN0dWJUZXh0ID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHN0YW5kQWxvbmVGdW5jdGlvbnM6IFN0YW5kQWxvbmVGdW5jdGlvbnMsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgKSB7XG4gICAgLy9zZXQgY29uZmlnIGZyb20gaW5kaXZpZHVhbCBvcHRpb25zLCBpZiBwcmVzZW50XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwICE9PSB0aGlzLmZvcm1Hcm91cEVtcHR5KSB7XG4gICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWQgIT09ICcnKSB7XG4gICAgICB0aGlzLmNvbmZpZy5pZCA9IHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICB0aGlzLmNvbmZpZy50eXBlID0gSW5wdXRUeXBlcy50ZXh0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcudHlwZSA9PT0gSW5wdXRUeXBlcy5wYXNzd29yZCkge1xuICAgICAgdGhpcy5zaG93UGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgIHRoaXMudHlwZUNvbnRyb2wgPSBJbnB1dFR5cGVzLnBhc3N3b3JkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNpemUpIHRoaXMuY29uZmlnLnNpemUgPSB0aGlzLnNpemU7XG4gICAgaWYgKHRoaXMubGFiZWwpIHRoaXMuY29uZmlnLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICBpZiAodGhpcy5oaW50KSB0aGlzLmNvbmZpZy5oaW50ID0gdGhpcy5oaW50O1xuICAgIGlmICh0aGlzLmRlc2MpIHRoaXMuY29uZmlnLmRlc2MgPSB0aGlzLmRlc2M7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHRoaXMuY29uZmlnLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikgdGhpcy5jb25maWcucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIGlmICh0aGlzLmVycm9yTWVzc2FnZXMpIHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXMgPSB0aGlzLmVycm9yTWVzc2FnZXM7XG4gIH1cblxuICAvL1JlbW92ZWQgJyEnIGFuZCBhZGRlZCBudWxsIGNhc2UgaW4gb25DaGFuZ2VcbiAgcHJpdmF0ZSBvblRvdWNoPzogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBvbkNoYW5nZT86ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBwYWdlIGxvYWRzLCB3ZSBpbml0aWFsaXplIHRoZSBmb3JtIHdpdGggaXQncyBjb250cm9scywgbGFiZWxzLCBhbmQgY29uZmlnLCBhbmQgZGV0ZWN0IHZhbHVlIGNoYW5nZXMgYW5kIGVycm9ycy4gc2V0TGFuZyBkZXRlY3RzIGNoYW5nZXMgdG8gdGhlIGxhbmd1YWdlIHRvZ2dsZSB0byBzZXJ2ZSB0aGUgY29ycmVjdCB0ZXh0XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCByZXRDb250cm9sID0gdGhpcy5jb25maWcuZm9ybUdyb3VwLmdldCh0aGlzLmNvbmZpZy5pZCk7XG4gICAgaWYgKHJldENvbnRyb2wpIHtcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wgPSByZXRDb250cm9sO1xuICAgIH1cblxuICAgIHRoaXMuc2V0TGFuZyh0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyk7XG4gICAgdGhpcy50cmFuc2xhdGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoY2hhbmdlKSA9PiB7XG4gICAgICB0aGlzLnNldExhbmcoY2hhbmdlLmxhbmcpO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMudHlwZSA9PT0gSW5wdXRUeXBlcy50ZXh0XG4gICAgPyAodGhpcy5zaG93UGFzc3dvcmQgPSBmYWxzZSlcbiAgICA6ICh0aGlzLnNob3dQYXNzd29yZCA9IHRydWUpO1xuXG4gICAgdGhpcy5sYWJlbENvbmZpZyA9IHRoaXMuc3RhbmRBbG9uZUZ1bmN0aW9ucy5tYWtlTGFiZWxDb25maWcoXG4gICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgICB0aGlzLmNvbmZpZy5pZCxcbiAgICAgIHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXMsXG4gICAgICB0aGlzLmNvbmZpZy5sYWJlbCxcbiAgICAgIHRoaXMuY29uZmlnLmRlc2MsXG4gICAgICB0aGlzLmNvbmZpZy5oaW50LFxuICAgICAgdGhpcy5jb25maWcucmVxdWlyZWQsXG4gICAgICB0aGlzLmNvbmZpZy5sYWJlbEljb25Db25maWdcbiAgICApO1xuXG4gICAgLy9zZXQgZGlzYWJsZSB0byB0cnVlIHdoZW4gZm9ybSBpcyBkaXNhYmxlZFxuICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChjaGFuZ2UpID0+IHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZ2V0KHRoaXMuY29uZmlnLmlkKVxuICAgICAgICA/LmRpc2FibGVkIGFzIGJvb2xlYW47XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXMpIHtcbiAgICAgIHRoaXMuZXJyb3JJZHMgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMuZ2V0RXJyb3JJZHMoXG4gICAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgICAgdGhpcy5jb25maWcuaWQsXG4gICAgICAgIHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy9HZXQgdGhlIGVycm9yIHRleHQgd2hlbiB0aGUgZm9ybUNvbnRyb2wgdmFsdWUgY2hhbmdlc1xuICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cC5nZXQodGhpcy5jb25maWcuaWQpPy5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmdldEFyaWFFcnJvclRleHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFyaWEgZXJyb3IgdGV4dCBmb3IgdGhlIGxhYmVsXG4gICAqL1xuICBnZXRBcmlhRXJyb3JUZXh0KCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sPy5tYXJrQXNEaXJ0eSgpO1xuICAgICAgdGhpcy5lcnJvckFyaWEgPSB0aGlzLnN0YW5kQWxvbmVGdW5jdGlvbnMuZ2V0RXJyb3JBcmlhKFxuICAgICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAsXG4gICAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgICB0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgdG91Y2hlZCBzdGF0ZSB0byB0cnVlIGFuZCB0cmlnZ2VyIGdldEFyaWFFcnJvclRleHQoKVxuICAgKi9cbiAgb25Ub3VjaGVkTGFiZWwoKSB7XG4gICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmdldEFyaWFFcnJvclRleHQoKTtcbiAgfVxuICAvKipcbiAgICogc2V0TGFuZyBkZXRlY3RzIGNoYW5nZXMgdG8gdGhlIGxhbmd1YWdlIHRvZ2dsZSB0byBzZXJ2ZSB0aGUgY29ycmVjdCBhcmlhIGVycm9yIHRleHRcbiAgICovXG4gIHNldExhbmcobGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5nZXRBcmlhRXJyb3JUZXh0KCk7XG4gICAgaWYgKGxhbmcgPT09ICdlbicgfHwgbGFuZyA9PT0gJ2VuLVVTJykge1xuICAgICAgdGhpcy5lcnJvclN0dWJUZXh0ID0gRVJST1JfVEVYVF9TVFVCLmVuO1xuICAgICAgdGhpcy5idG5BcmlhTGFiZWwgPSBBUklBX1RFWFQuZW4uYnRuVHlwZVBhc3N3b3JkQXJpYUxhYmVsO1xuICAgICAgdGhpcy5idG5BcmlhTGFiZWxIaWRlID0gQVJJQV9URVhULmVuLmJ0blR5cGVQYXNzd29yZEhpZGVBcmlhTGFiZWw7XG4gICAgICB0aGlzLmJ0bkFyaWFMYWJlbFNob3cgPSBBUklBX1RFWFQuZW4uYnRuVHlwZVBhc3N3b3JkU2hvd0FyaWFMYWJlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvclN0dWJUZXh0ID0gRVJST1JfVEVYVF9TVFVCLmZyO1xuICAgICAgdGhpcy5idG5BcmlhTGFiZWwgPSBBUklBX1RFWFQuZnIuYnRuVHlwZVBhc3N3b3JkQXJpYUxhYmVsO1xuICAgICAgdGhpcy5idG5BcmlhTGFiZWxIaWRlID0gQVJJQV9URVhULmZyLmJ0blR5cGVQYXNzd29yZEhpZGVBcmlhTGFiZWw7XG4gICAgICB0aGlzLmJ0bkFyaWFMYWJlbFNob3cgPSBBUklBX1RFWFQuZnIuYnRuVHlwZVBhc3N3b3JkU2hvd0FyaWFMYWJlbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBsaWZlY3ljbGUgaG9vayB0aGF0IGlzIGNhbGxlZCB3aGVuIGFueSBkYXRhLWJvdW5kIHByb3BlcnR5IG9mIGEgZGlyZWN0aXZlIGNoYW5nZXMuXG4gICAqL1xuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmxhYmVsQ29uZmlnID0gdGhpcy5zdGFuZEFsb25lRnVuY3Rpb25zLm1ha2VMYWJlbENvbmZpZyhcbiAgICAgIHRoaXMuY29uZmlnLmZvcm1Hcm91cCxcbiAgICAgIHRoaXMuY29uZmlnLmlkLFxuICAgICAgdGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcyxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsLFxuICAgICAgdGhpcy5jb25maWcuZGVzYyxcbiAgICAgIHRoaXMuY29uZmlnLmhpbnQsXG4gICAgICB0aGlzLmNvbmZpZy5yZXF1aXJlZCxcbiAgICAgIHRoaXMuY29uZmlnLmxhYmVsSWNvbkNvbmZpZ1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgZm9jdXMgc3RhdGVcbiAgICovXG4gIHB1YmxpYyBmb2N1c0lucHV0KGZvY3VzVmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUgPSAhZm9jdXNWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIHBhc3N3b3JkIGZpZWxkXG4gICAqL1xuICBoaWRlU2hvdygpIHtcbiAgICB0aGlzLnNob3dQYXNzd29yZCA9ICF0aGlzLnNob3dQYXNzd29yZDtcblxuICAgIGlmICh0aGlzLnNob3dQYXNzd29yZCkge1xuICAgICAgdGhpcy50eXBlQ29udHJvbCA9IElucHV0VHlwZXMudGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlQ29udHJvbCA9IElucHV0VHlwZXMucGFzc3dvcmQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFydmFsdWUoKSB7fVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50cyB0aGUgaW5mbyBidXR0b24gZnJvbSBiZWluZyB0cmlnZ2VyZWQgYW5kIG1hcmtzIHRoZSBpbnB1dCBhcyB0b3VjaGVkLlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIGVudGVyRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZ2V0KHRoaXMuY29uZmlnLmlkKT8ubWFya0FzVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgZGlzYWJsZWQgc3RhdGVcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBlcnJvciBzdGF0ZSBmcm9tIEZvcm1Hcm91cCwgbXVzdCBiZSB0b3VjaGVkICYgaW52YWxpZFxuICAgKi9cbiAgZ2V0IGdldEVycm9yU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZ2V0KHRoaXMuY29uZmlnLmlkKT8udG91Y2hlZCAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5mb3JtR3JvdXAuZ2V0KHRoaXMuY29uZmlnLmlkKT8uaW52YWxpZCkgPz9cbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxufVxuIiwiPGRpdlxuICBpZD1cInt7IGNvbmZpZy5pZCArICdfY29udGFpbmVyJyB9fVwiXG4gIGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiXG4+XG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiY29uZmlnLmZvcm1Hcm91cFwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCJcbiAgICAgIFtuZ0NsYXNzXT1cImNvbmZpZy5zaXplXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtdGV4dFwiPlxuICAgICAgICA8aXJjYy1jbC1saWItbGFiZWxcbiAgICAgICAgICBbY29uZmlnXT1cImxhYmVsQ29uZmlnXCJcbiAgICAgICAgICBbYXR0ci5zaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgPjwvaXJjYy1jbC1saWItbGFiZWw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImlucHV0LWNvbnRlbnQtYXJlYVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZm9jdXNTdGF0ZSA9PT0gdHJ1ZSA/ICdmb2N1cycgOiAnJ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8IS0tIG5nTW9kZWwgZG9lc24ndCBtaW5kIHVuZGVmaW5lZCB2YWx1ZXMsIGFwcGFyZW50bHlcbiAgICAgICAgICBUT0RPOiBTaG91bGQgcHJvYmFibHkgY2hhbmdlIHRoZSAoa2V5dXApIHRvIChvbmJsdXIpIC0tPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkTGFiZWwoKVwiXG4gICAgICAgICAgICBuYW1lPVwie3sgY29uZmlnLmlkIH19XCJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBjb25maWcucGxhY2Vob2xkZXIgfHwgJycgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAgICAgICBjb25maWcudHlwZSA9PT0gJ3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgID8gJ2lucHV0LXBhc3N3b3JkLWZpZWxkJ1xuICAgICAgICAgICAgICAgIDogJ2lucHV0LXRleHQtZmllbGQnXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgW3R5cGVdPVwidHlwZUNvbnRyb2xcIlxuICAgICAgICAgICAgW2lkXT1cImNvbmZpZy5pZFwiXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5pZFwiXG4gICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJlbnRlckV2ZW50KCRldmVudClcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1pbnZhbGlkXT1cImZvcm1Db250cm9sPy5pbnZhbGlkXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGl2ZV09XCInb2ZmJ1wiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIlxuICAgICAgICAgICAgICBmb3JtQ29udHJvbD8uaW52YWxpZCAmJiB0b3VjaGVkXG4gICAgICAgICAgICAgICAgPyAoY29uZmlnLmxhYmVsIHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgICAgKGNvbmZpZy5kZXNjIHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgICAgKGNvbmZpZy5oaW50IHx8ICcnIHwgdHJhbnNsYXRlKSArXG4gICAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgICAgKGVycm9yU3R1YlRleHQgKyAnOiAnICsgZXJyb3JBcmlhKVxuICAgICAgICAgICAgICAgIDogKGNvbmZpZy5sYWJlbCB8fCAnJyB8IHRyYW5zbGF0ZSkgK1xuICAgICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgICAgIChjb25maWcuZGVzYyB8fCAnJyB8IHRyYW5zbGF0ZSkgK1xuICAgICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgICAgIChjb25maWcuaGludCB8fCAnJyB8IHRyYW5zbGF0ZSlcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnLnR5cGUgPT09ICdwYXNzd29yZCdcIlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjYXRlZ29yeT1cInBsYWluXCJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICBjbGFzcz1cInBhc3N3b3JkSWNvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiaGlkZVNob3coKVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgYXR0ci5hcmlhLWxhYmVsPXt7YnRuQXJpYUxhYmVsfX1cbiAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAqbmdJZj1cInNob3dQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICBhdHRyLmFyaWEtbGFiZWw9XCJ7e2J0bkFyaWFMYWJlbEhpZGV9fVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLXNsYXNoXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICpuZ0lmPVwiIXNob3dQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICBhdHRyLmFyaWEtbGFiZWw9XCJ7e2J0bkFyaWFMYWJlbFNob3d9fVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGFyaWEtbGl2ZT1cInBvbGl0ZVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgKm5nSWY9XCJmb3JtQ29udHJvbD8udG91Y2hlZCAmJiBmb3JtQ29udHJvbD8uaW52YWxpZFwiXG4gICAgICAgICAgY2xhc3M9XCJjaGVjay1lcnJvclwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj57e1xuICAgICAgICAgICAgZXJyb3JTdHViVGV4dCArICc6ICcgKyAoY29uZmlnLmxhYmVsIHx8ICcnIHwgdHJhbnNsYXRlKSArICc6ICdcbiAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlcnJvcnMgb2YgZXJyb3JJZHM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgKm5nSWY9XCJmb3JtQ29udHJvbD8uZXJyb3JzPy5bZXJyb3JzLmtleV1cIlxuICAgICAgICAgICAgICBjbGFzcz1cInJhZGlvLWVycm9yc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpcmNjLWNsLWxpYi1lcnJvclxuICAgICAgICAgICAgICAgIFtpZF09XCJlcnJvcnMuaWRcIlxuICAgICAgICAgICAgICAgIFtlcnJvckxPVl09XCJlcnJvcnMuZXJyb3JMT1ZcIlxuICAgICAgICAgICAgICA+PC9pcmNjLWNsLWxpYi1lcnJvcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG48L2Rpdj5cbiJdfQ==