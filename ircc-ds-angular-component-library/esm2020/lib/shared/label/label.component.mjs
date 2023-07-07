import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "../../../shared/functions/stand-alone.functions";
import * as i3 from "./label-button.service";
import * as i4 from "@angular/common";
export const ERROR_TEXT_STUB = {
    en: 'Error',
    fr: 'Erreur'
};
export const HELP_ICON_ALT = {
    en: ', more information',
    fr: ", plus d'information"
};
export class LabelComponent {
    constructor(translate, standAloneFunctions, labelButton) {
        this.translate = translate;
        this.standAloneFunctions = standAloneFunctions;
        this.labelButton = labelButton;
        this.config = {
            formGroup: new FormGroup({}),
            parentID: ''
        };
        this.labelIconText = '';
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.formGroup)
            this.config.formGroup = this.formGroup;
        if (this.errorMessages)
            this.config.errorMessages = this.errorMessages;
        if (this.parentID)
            this.config.parentID = this.parentID;
        if (this.label)
            this.config.label = this.label;
        if (this.desc)
            this.config.desc = this.desc;
        if (this.hint)
            this.config.hint = this.hint;
        if (this.required)
            this.config.required = this.required;
        if (this.iconButton)
            this.config.iconButton = this.iconButton;
        if (this.topLabel)
            this.config.topLabel = this.topLabel;
        if (this.touched)
            this.config.touched = this.touched;
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
    }
    setLang(lang) {
        if (lang === 'en' || lang === 'en-US') {
            // this.errorStubText = ERROR_TEXT_STUB_EN;
            this.labelIconText = HELP_ICON_ALT.en;
        }
        else {
            // this.errorStubText = ERROR_TEXT_STUB_FR;
            this.labelIconText = HELP_ICON_ALT.fr;
        }
    }
    /**
     * Output the button press
     * @param id of the button being pressed (same as component ID)
     */
    iconButtonClick() {
        this.labelButton.buttonPress(this.config.parentID);
    }
    returnLabel() {
        return !this.config.topLabel ? this.config.label : this.config.topLabel;
    }
}
LabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LabelComponent, deps: [{ token: i1.TranslateService }, { token: i2.StandAloneFunctions }, { token: i3.LabelButtonService }], target: i0.ɵɵFactoryTarget.Component });
LabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: LabelComponent, selector: "ircc-cl-lib-label", inputs: { config: "config", formGroup: "formGroup", errorMessages: "errorMessages", parentID: "parentID", label: "label", desc: "desc", hint: "hint", required: "required", iconButton: "iconButton", topLabel: "topLabel", touched: "touched" }, ngImport: i0, template: "<div\n  id=\"{{ config.parentID + '_label' }}\"\n  class=\"label_container\"\n  [ngClass]=\"{ extra_padding: config.label && !config.desc && !config.hint }\"\n>\n  <label\n    *ngIf=\"config.label\"\n    class=\"label\"\n  >\n    <span class=\"label_field_container\">\n      <div\n        class=\"required-field-container\"\n        *ngIf=\"config.required\"\n      >\n        <i class=\"fa-regular fa-asterisk required-star\"></i\n        >{{ config.label || '' | translate }}\n      </div>\n      <div *ngIf=\"!config.required\">\n        {{ config.label || '' | translate }}\n      </div>\n      <div\n        *ngIf=\"config.iconButton\"\n        class=\"icon_container\"\n      >\n        <button\n          class=\"touch_button\"\n          category=\"plain\"\n          (click)=\"iconButtonClick()\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            (config.label | translate) +\n            ' ' +\n            (config.iconButton.ariaText | translate)\n          \"\n        ></button>\n        <i [class]=\"config.iconButton.iconClass\"></i>\n      </div>\n    </span>\n  </label>\n  <p\n    *ngIf=\"config.desc\"\n    class=\"input-desc\"\n  >\n    {{ config.desc || '' | translate }}\n  </p>\n  <p\n    *ngIf=\"config.hint\"\n    class=\"input-hint\"\n  >\n    {{ config.hint | translate }}\n  </p>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-label', template: "<div\n  id=\"{{ config.parentID + '_label' }}\"\n  class=\"label_container\"\n  [ngClass]=\"{ extra_padding: config.label && !config.desc && !config.hint }\"\n>\n  <label\n    *ngIf=\"config.label\"\n    class=\"label\"\n  >\n    <span class=\"label_field_container\">\n      <div\n        class=\"required-field-container\"\n        *ngIf=\"config.required\"\n      >\n        <i class=\"fa-regular fa-asterisk required-star\"></i\n        >{{ config.label || '' | translate }}\n      </div>\n      <div *ngIf=\"!config.required\">\n        {{ config.label || '' | translate }}\n      </div>\n      <div\n        *ngIf=\"config.iconButton\"\n        class=\"icon_container\"\n      >\n        <button\n          class=\"touch_button\"\n          category=\"plain\"\n          (click)=\"iconButtonClick()\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            (config.label | translate) +\n            ' ' +\n            (config.iconButton.ariaText | translate)\n          \"\n        ></button>\n        <i [class]=\"config.iconButton.iconClass\"></i>\n      </div>\n    </span>\n  </label>\n  <p\n    *ngIf=\"config.desc\"\n    class=\"input-desc\"\n  >\n    {{ config.desc || '' | translate }}\n  </p>\n  <p\n    *ngIf=\"config.hint\"\n    class=\"input-hint\"\n  >\n    {{ config.hint | translate }}\n  </p>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: i2.StandAloneFunctions }, { type: i3.LabelButtonService }]; }, propDecorators: { config: [{
                type: Input
            }], formGroup: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], parentID: [{
                type: Input
            }], label: [{
                type: Input
            }], desc: [{
                type: Input
            }], hint: [{
                type: Input
            }], required: [{
                type: Input
            }], iconButton: [{
                type: Input
            }], topLabel: [{
                type: Input
            }], touched: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL3NoYXJlZC9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2xhYmVsL2xhYmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdCLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUF5QjNDLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRztJQUM3QixFQUFFLEVBQUUsT0FBTztJQUNYLEVBQUUsRUFBRSxRQUFRO0NBQ2IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRztJQUMzQixFQUFFLEVBQUUsb0JBQW9CO0lBQ3hCLEVBQUUsRUFBRSxzQkFBc0I7Q0FDM0IsQ0FBQztBQU1GLE1BQU0sT0FBTyxjQUFjO0lBa0J6QixZQUNVLFNBQTJCLEVBQzVCLG1CQUF3QyxFQUN2QyxXQUErQjtRQUYvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUM1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3ZDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQXBCaEMsV0FBTSxHQUFpQjtZQUM5QixTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQzVCLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztRQVlGLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0lBTWhCLENBQUM7SUFFSixRQUFRO1FBQ04sZ0RBQWdEO1FBQ2hELElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZFLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzlELElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBR3JELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNyQywyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDO1NBQ3ZDO2FBQU07WUFDTCwyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDMUUsQ0FBQzs7NEdBaEVVLGNBQWM7Z0dBQWQsY0FBYywyU0N4QzNCLDh6Q0FvREE7NEZEWmEsY0FBYztrQkFKMUIsU0FBUzsrQkFDRSxtQkFBbUI7MEtBSXBCLE1BQU07c0JBQWQsS0FBSztnQkFJRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBTdGFuZEFsb25lRnVuY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2Z1bmN0aW9ucy9zdGFuZC1hbG9uZS5mdW5jdGlvbnMnO1xuaW1wb3J0IHsgSUVycm9yUGFpcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9jb21wb25lbnQtY29uZmlncyc7XG5pbXBvcnQgeyBMYWJlbEJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL2xhYmVsLWJ1dHRvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTGFiZWxJY29uQ29uZmlnIHtcbiAgaWNvbkNsYXNzOiBzdHJpbmc7XG4gIGNvbG91cj86IHN0cmluZzsgLy9EZWZhdWx0IGlzIHRleHQgcHJpbWFyeSB0b2tlblxuICBhcmlhVGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMYWJlbENvbmZpZyB7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBlcnJvck1lc3NhZ2VzPzogSUVycm9yUGFpcnNbXTtcbiAgcGFyZW50SUQ6IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGRlc2M/OiBzdHJpbmc7XG4gIGhpbnQ/OiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgaWNvbkJ1dHRvbj86IElMYWJlbEljb25Db25maWc7XG4gIHRvcExhYmVsPzogc3RyaW5nO1xuICB0b3VjaGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEVSUk9SX1RFWFRfU1RVQiA9IHtcbiAgZW46ICdFcnJvcicsXG4gIGZyOiAnRXJyZXVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IEhFTFBfSUNPTl9BTFQgPSB7XG4gIGVuOiAnLCBtb3JlIGluZm9ybWF0aW9uJyxcbiAgZnI6IFwiLCBwbHVzIGQnaW5mb3JtYXRpb25cIlxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItbGFiZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGFiZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZmlnOiBJTGFiZWxDb25maWcgPSB7XG4gICAgZm9ybUdyb3VwOiBuZXcgRm9ybUdyb3VwKHt9KSxcbiAgICBwYXJlbnRJRDogJydcbiAgfTtcbiAgQElucHV0KCkgZm9ybUdyb3VwPzogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2VzPzogSUVycm9yUGFpcnNbXTtcbiAgQElucHV0KCkgcGFyZW50SUQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSBkZXNjPzogc3RyaW5nO1xuICBASW5wdXQoKSBoaW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGljb25CdXR0b24/OiBJTGFiZWxJY29uQ29uZmlnO1xuICBASW5wdXQoKSB0b3BMYWJlbD86IHN0cmluZztcbiAgQElucHV0KCkgdG91Y2hlZD86IGJvb2xlYW47XG5cbiAgbGFiZWxJY29uVGV4dCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBzdGFuZEFsb25lRnVuY3Rpb25zOiBTdGFuZEFsb25lRnVuY3Rpb25zLFxuICAgIHByaXZhdGUgbGFiZWxCdXR0b246IExhYmVsQnV0dG9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9zZXQgY29uZmlnIGZyb20gaW5kaXZpZHVhbCBvcHRpb25zLCBpZiBwcmVzZW50XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwKSB0aGlzLmNvbmZpZy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cDtcbiAgICBpZiAodGhpcy5lcnJvck1lc3NhZ2VzKSB0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzID0gdGhpcy5lcnJvck1lc3NhZ2VzO1xuICAgIGlmICh0aGlzLnBhcmVudElEKSB0aGlzLmNvbmZpZy5wYXJlbnRJRCA9IHRoaXMucGFyZW50SUQ7XG4gICAgaWYgKHRoaXMubGFiZWwpIHRoaXMuY29uZmlnLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICBpZiAodGhpcy5kZXNjKSB0aGlzLmNvbmZpZy5kZXNjID0gdGhpcy5kZXNjO1xuICAgIGlmICh0aGlzLmhpbnQpIHRoaXMuY29uZmlnLmhpbnQgPSB0aGlzLmhpbnQ7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHRoaXMuY29uZmlnLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICBpZiAodGhpcy5pY29uQnV0dG9uKSB0aGlzLmNvbmZpZy5pY29uQnV0dG9uID0gdGhpcy5pY29uQnV0dG9uO1xuICAgIGlmICh0aGlzLnRvcExhYmVsKSB0aGlzLmNvbmZpZy50b3BMYWJlbCA9IHRoaXMudG9wTGFiZWw7XG4gICAgaWYgKHRoaXMudG91Y2hlZCkgdGhpcy5jb25maWcudG91Y2hlZCA9IHRoaXMudG91Y2hlZDtcblxuXG4gICAgdGhpcy5zZXRMYW5nKHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nKTtcbiAgICB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChjaGFuZ2UpID0+IHtcbiAgICAgIHRoaXMuc2V0TGFuZyhjaGFuZ2UubGFuZyk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRMYW5nKGxhbmc6IHN0cmluZykge1xuICAgIGlmIChsYW5nID09PSAnZW4nIHx8IGxhbmcgPT09ICdlbi1VUycpIHtcbiAgICAgIC8vIHRoaXMuZXJyb3JTdHViVGV4dCA9IEVSUk9SX1RFWFRfU1RVQl9FTjtcbiAgICAgIHRoaXMubGFiZWxJY29uVGV4dCA9IEhFTFBfSUNPTl9BTFQuZW47XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMuZXJyb3JTdHViVGV4dCA9IEVSUk9SX1RFWFRfU1RVQl9GUjtcbiAgICAgIHRoaXMubGFiZWxJY29uVGV4dCA9IEhFTFBfSUNPTl9BTFQuZnI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE91dHB1dCB0aGUgYnV0dG9uIHByZXNzXG4gICAqIEBwYXJhbSBpZCBvZiB0aGUgYnV0dG9uIGJlaW5nIHByZXNzZWQgKHNhbWUgYXMgY29tcG9uZW50IElEKVxuICAgKi9cbiAgaWNvbkJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMubGFiZWxCdXR0b24uYnV0dG9uUHJlc3ModGhpcy5jb25maWcucGFyZW50SUQpO1xuICB9XG5cbiAgcmV0dXJuTGFiZWwoKSB7XG4gICAgcmV0dXJuICF0aGlzLmNvbmZpZy50b3BMYWJlbCA/IHRoaXMuY29uZmlnLmxhYmVsIDogdGhpcy5jb25maWcudG9wTGFiZWw7XG4gIH1cbn1cbiIsIjxkaXZcbiAgaWQ9XCJ7eyBjb25maWcucGFyZW50SUQgKyAnX2xhYmVsJyB9fVwiXG4gIGNsYXNzPVwibGFiZWxfY29udGFpbmVyXCJcbiAgW25nQ2xhc3NdPVwieyBleHRyYV9wYWRkaW5nOiBjb25maWcubGFiZWwgJiYgIWNvbmZpZy5kZXNjICYmICFjb25maWcuaGludCB9XCJcbj5cbiAgPGxhYmVsXG4gICAgKm5nSWY9XCJjb25maWcubGFiZWxcIlxuICAgIGNsYXNzPVwibGFiZWxcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJsYWJlbF9maWVsZF9jb250YWluZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1maWVsZC1jb250YWluZXJcIlxuICAgICAgICAqbmdJZj1cImNvbmZpZy5yZXF1aXJlZFwiXG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1hc3RlcmlzayByZXF1aXJlZC1zdGFyXCI+PC9pXG4gICAgICAgID57eyBjb25maWcubGFiZWwgfHwgJycgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cIiFjb25maWcucmVxdWlyZWRcIj5cbiAgICAgICAge3sgY29uZmlnLmxhYmVsIHx8ICcnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nSWY9XCJjb25maWcuaWNvbkJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwiaWNvbl9jb250YWluZXJcIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJ0b3VjaF9idXR0b25cIlxuICAgICAgICAgIGNhdGVnb3J5PVwicGxhaW5cIlxuICAgICAgICAgIChjbGljayk9XCJpY29uQnV0dG9uQ2xpY2soKVwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICAgIChjb25maWcubGFiZWwgfCB0cmFuc2xhdGUpICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAoY29uZmlnLmljb25CdXR0b24uYXJpYVRleHQgfCB0cmFuc2xhdGUpXG4gICAgICAgICAgXCJcbiAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8aSBbY2xhc3NdPVwiY29uZmlnLmljb25CdXR0b24uaWNvbkNsYXNzXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9zcGFuPlxuICA8L2xhYmVsPlxuICA8cFxuICAgICpuZ0lmPVwiY29uZmlnLmRlc2NcIlxuICAgIGNsYXNzPVwiaW5wdXQtZGVzY1wiXG4gID5cbiAgICB7eyBjb25maWcuZGVzYyB8fCAnJyB8IHRyYW5zbGF0ZSB9fVxuICA8L3A+XG4gIDxwXG4gICAgKm5nSWY9XCJjb25maWcuaGludFwiXG4gICAgY2xhc3M9XCJpbnB1dC1oaW50XCJcbiAgPlxuICAgIHt7IGNvbmZpZy5oaW50IHwgdHJhbnNsYXRlIH19XG4gIDwvcD5cbjwvZGl2PlxuIl19