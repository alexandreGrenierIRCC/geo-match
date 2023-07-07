import { Component, Input } from '@angular/core';
import { ButtonCategories } from '../button/button.component';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/common";
import * as i3 from "../icon/icon.component";
import * as i4 from "../flyout/flyout.component";
export const DROPDOWN_ARIA = {
    en: 'Dropdown',
    fr: 'Menu Deroulant'
};
export class DropdownComponent {
    constructor(translate) {
        this.translate = translate;
        this.config = {
            id: ''
        };
        this.id = '';
        this.label = '';
        this.placeholderText = '';
        this.btnAriaLabel = '';
        this.showPlaceholder = false;
        this.selected = false;
        this.flyoutConfig = {
            id: this.config.id + '_flyout',
            options: [
                {
                    value: 'Options empty'
                }
            ]
        };
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.id !== '')
            this.config.id = this.id;
        if (this.size)
            this.config.size = this.size;
        if (this.icon)
            this.config.icon = this.icon;
        if (this.flyout)
            this.config.flyout = this.flyout;
        if (this.label !== '')
            this.config.label = this.label;
        if (this.placeholderText !== '')
            this.config.placeholderText = this.placeholderText;
        if (this.disabled !== undefined)
            this.config.disabled = this.disabled;
        this.category === undefined
            ? undefined
            : (this.config.category = this.category);
        if (!this.config.category)
            this.config.category = ButtonCategories.primary;
        if (!this.config.label || this.config.label.trim().length == 0) {
            if (!this.config.placeholderText) {
                this.config.placeholderText = 'Default';
            }
            this.showPlaceholder = true;
        }
        if (this.config.flyout)
            this.flyoutConfig = this.config.flyout;
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
    }
    /**
     * setLang(lang: string) if a function which accepts a string value.
     * This value currently needs to be 'en' or 'en-US' to trigger English translations otherwise
     * french translations will be triggered.
     */
    setLang(lang) {
        if (lang === 'en' || lang === 'en-US') {
            this.btnAriaLabel = DROPDOWN_ARIA.en;
        }
        else {
            this.btnAriaLabel = DROPDOWN_ARIA.fr;
        }
    }
    selectedOption(e) {
        //if it receives it's event info it selects the index - if not closes flyout
        if (e) {
            this.showPlaceholder = false;
            this.config.label = e.toString();
            this.selected = !this.selected;
            this.clearFlyoutFocus(); //clear the flyout focus if the flyout is closed.
        }
        else {
            this.toggleFlyout(false);
        }
    }
    /**
     * function receives a truthy value which determines wether it closes or opens,
     * but also looks for FocusEvent to check if flyout is being interacted with
     * @param status
     * @param e
     */
    toggleFlyout(status, e) {
        let target = e?.relatedTarget;
        if (!target?.id.includes(this.config.id) || !e) {
            this.selected = status;
            !status && this.clearFlyoutFocus(); //clear the flyout focus if the flyout is closed.
        }
    }
    /**
     * Clear the flyout active state
     */
    clearFlyoutFocus() {
        if (this.config?.flyout?.options) {
            this.config.flyout.options.forEach((i) => {
                i.active = false;
            });
        }
    }
}
DropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DropdownComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
DropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: DropdownComponent, selector: "ircc-cl-lib-dropdown", inputs: { config: "config", id: "id", size: "size", label: "label", placeholderText: "placeholderText", disabled: "disabled", category: "category", icon: "icon", flyout: "flyout" }, ngImport: i0, template: "<div\n  class=\"content-container\"\n  [ngClass]=\"config.size\"\n>\n  <button\n    aria-live=\"polite\"\n    attr.aria-label= \"{{ btnAriaLabel }}\"\n    [id]=\"config.id\"\n    (click)=\"toggleFlyout(!selected)\"\n    [disabled]=\"config.disabled\"\n    class=\"dropdown selected-{{ selected }} {{ config.category }}\"\n    attr.category=\"{{ config.category }}\"\n  >\n    <div class=\"icon-text-container\">\n      <ircc-cl-lib-icon\n        *ngIf=\"config.icon\"\n        class=\"custom-icon\"\n        [style.color]=\"config.icon?.color\"\n        [config]=\"{ FA_keywords: config.icon?.class }\"\n      ></ircc-cl-lib-icon>\n      <p\n        *ngIf=\"showPlaceholder\"\n        class=\"placholder-text\"\n      >\n        {{ config.placeholderText || '' | translate }}\n      </p>\n      <p class=\"label-text\">{{ config.label || '' | translate }}</p>\n    </div>\n    <div\n      *ngIf=\"!selected\"\n      role=\"img\"\n    >\n      <i class=\"fa-light fa-chevron-down custom-chevron\"></i>\n    </div>\n    <div\n      *ngIf=\"selected\"\n      role=\"img\"\n    >\n      <i class=\"fa-light fa-chevron-up custom-chevron\"></i>\n    </div>\n  </button>\n</div>\n<ircc-cl-lib-flyout\n  [id]=\"config.id + '_flyout'\"\n  [size]=\"config.size\"\n  *ngIf=\"selected\"\n  [config]=\"flyoutConfig\"\n  (isSelected)=\"selectedOption($event)\"\n></ircc-cl-lib-flyout>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "component", type: i4.FlyoutComponent, selector: "ircc-cl-lib-flyout", inputs: ["config", "id", "options", "disabled", "selection", "type", "size"], outputs: ["isSelected"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-dropdown', template: "<div\n  class=\"content-container\"\n  [ngClass]=\"config.size\"\n>\n  <button\n    aria-live=\"polite\"\n    attr.aria-label= \"{{ btnAriaLabel }}\"\n    [id]=\"config.id\"\n    (click)=\"toggleFlyout(!selected)\"\n    [disabled]=\"config.disabled\"\n    class=\"dropdown selected-{{ selected }} {{ config.category }}\"\n    attr.category=\"{{ config.category }}\"\n  >\n    <div class=\"icon-text-container\">\n      <ircc-cl-lib-icon\n        *ngIf=\"config.icon\"\n        class=\"custom-icon\"\n        [style.color]=\"config.icon?.color\"\n        [config]=\"{ FA_keywords: config.icon?.class }\"\n      ></ircc-cl-lib-icon>\n      <p\n        *ngIf=\"showPlaceholder\"\n        class=\"placholder-text\"\n      >\n        {{ config.placeholderText || '' | translate }}\n      </p>\n      <p class=\"label-text\">{{ config.label || '' | translate }}</p>\n    </div>\n    <div\n      *ngIf=\"!selected\"\n      role=\"img\"\n    >\n      <i class=\"fa-light fa-chevron-down custom-chevron\"></i>\n    </div>\n    <div\n      *ngIf=\"selected\"\n      role=\"img\"\n    >\n      <i class=\"fa-light fa-chevron-up custom-chevron\"></i>\n    </div>\n  </button>\n</div>\n<ircc-cl-lib-flyout\n  [id]=\"config.id + '_flyout'\"\n  [size]=\"config.size\"\n  *ngIf=\"selected\"\n  [config]=\"flyoutConfig\"\n  (isSelected)=\"selectedOption($event)\"\n></ircc-cl-lib-flyout>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholderText: [{
                type: Input
            }], disabled: [{
                type: Input
            }], category: [{
                type: Input
            }], icon: [{
                type: Input
            }], flyout: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvZHJvcGRvd24vZHJvcC1kb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvZHJvcGRvd24vZHJvcC1kb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7QUFlOUQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBQzNCLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLGdCQUFnQjtDQUNyQixDQUFDO0FBS0YsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUV0QyxXQUFNLEdBQW9CO1lBQ2pDLEVBQUUsRUFBRSxFQUFFO1NBQ1AsQ0FBQztRQUVPLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFFaEIsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUNwQixvQkFBZSxHQUFZLEVBQUUsQ0FBQztRQU92QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGlCQUFZLEdBQWtCO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTO1lBQzlCLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUUsZUFBZTtpQkFDdkI7YUFDRjtTQUNGLENBQUM7SUEzQmdELENBQUM7SUE2Qm5ELFFBQVE7UUFDTixnREFBZ0Q7UUFDaEQsSUFBSSxJ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dGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERTU2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uc3RhbnRzL2psLWNvbXBvbmVudHMuY29uc3RhbnRzJztcbmltcG9ydCB7IEJ1dHRvbkNhdGVnb3JpZXMgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJSWNvbkJ1dHRvbkljb25Db25maWcgfSBmcm9tICcuLi9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUZseW91dENvbmZpZyB9IGZyb20gJy4uL2ZseW91dC9mbHlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmV4cG9ydCBpbnRlcmZhY2UgSURyb3Bkb3duQ29uZmlnIHtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNTaXplcztcbiAgY2F0ZWdvcnk/OiBrZXlvZiB0eXBlb2YgQnV0dG9uQ2F0ZWdvcmllcztcbiAgcGxhY2Vob2xkZXJUZXh0Pzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGljb24/OiBJSWNvbkJ1dHRvbkljb25Db25maWc7XG4gIGZseW91dD86IElGbHlvdXRDb25maWc7XG59XG5cbmV4cG9ydCBjb25zdCBEUk9QRE9XTl9BUklBID0ge1xuICBlbjogJ0Ryb3Bkb3duJyxcbiAgZnI6ICdNZW51IERlcm91bGFudCdcbn07XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpcmNjLWNsLWxpYi1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wLWRvd24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgQElucHV0KCkgY29uZmlnOiBJRHJvcGRvd25Db25maWcgPSB7XG4gICAgaWQ6ICcnXG4gIH07XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyVGV4dD86IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBkaXNhYmxlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNhdGVnb3J5Pzoga2V5b2YgdHlwZW9mIEJ1dHRvbkNhdGVnb3JpZXM7XG4gIEBJbnB1dCgpIGljb24/OiBJSWNvbkJ1dHRvbkljb25Db25maWc7XG4gIEBJbnB1dCgpIGZseW91dD86IElGbHlvdXRDb25maWc7XG5cblxuICBidG5BcmlhTGFiZWwgPSAnJztcbiAgc2hvd1BsYWNlaG9sZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZmx5b3V0Q29uZmlnOiBJRmx5b3V0Q29uZmlnID0ge1xuICAgIGlkOiB0aGlzLmNvbmZpZy5pZCArICdfZmx5b3V0JyxcbiAgICBvcHRpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAnT3B0aW9ucyBlbXB0eSdcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9zZXQgY29uZmlnIGZyb20gaW5kaXZpZHVhbCBvcHRpb25zLCBpZiBwcmVzZW50XG4gICAgaWYgKHRoaXMuaWQgIT09ICcnKSB0aGlzLmNvbmZpZy5pZCA9IHRoaXMuaWQ7XG4gICAgaWYgKHRoaXMuc2l6ZSkgdGhpcy5jb25maWcuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICBpZiAodGhpcy5pY29uKSB0aGlzLmNvbmZpZy5pY29uID0gdGhpcy5pY29uO1xuICAgIGlmICh0aGlzLmZseW91dCkgdGhpcy5jb25maWcuZmx5b3V0ID0gdGhpcy5mbHlvdXQ7XG4gICAgaWYgKHRoaXMubGFiZWwgIT09ICcnKSB0aGlzLmNvbmZpZy5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXJUZXh0ICE9PSAnJylcbiAgICAgIHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyVGV4dCA9IHRoaXMucGxhY2Vob2xkZXJUZXh0O1xuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHRoaXMuY29uZmlnLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICB0aGlzLmNhdGVnb3J5ID09PSB1bmRlZmluZWRcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6ICh0aGlzLmNvbmZpZy5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnkpO1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5jYXRlZ29yeSkgdGhpcy5jb25maWcuY2F0ZWdvcnkgPSBCdXR0b25DYXRlZ29yaWVzLnByaW1hcnk7XG5cbiAgICBpZiAoIXRoaXMuY29uZmlnLmxhYmVsIHx8IHRoaXMuY29uZmlnLmxhYmVsLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5wbGFjZWhvbGRlclRleHQpIHtcbiAgICAgICAgdGhpcy5jb25maWcucGxhY2Vob2xkZXJUZXh0ID0gJ0RlZmF1bHQnO1xuICAgICAgfVxuICAgICAgdGhpcy5zaG93UGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5mbHlvdXQpIHRoaXMuZmx5b3V0Q29uZmlnID0gdGhpcy5jb25maWcuZmx5b3V0O1xuXG4gICAgdGhpcy5zZXRMYW5nKHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nKTtcbiAgICB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChjaGFuZ2UpID0+IHtcbiAgICAgIHRoaXMuc2V0TGFuZyhjaGFuZ2UubGFuZyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogc2V0TGFuZyhsYW5nOiBzdHJpbmcpIGlmIGEgZnVuY3Rpb24gd2hpY2ggYWNjZXB0cyBhIHN0cmluZyB2YWx1ZS5cbiAgICogVGhpcyB2YWx1ZSBjdXJyZW50bHkgbmVlZHMgdG8gYmUgJ2VuJyBvciAnZW4tVVMnIHRvIHRyaWdnZXIgRW5nbGlzaCB0cmFuc2xhdGlvbnMgb3RoZXJ3aXNlXG4gICAqIGZyZW5jaCB0cmFuc2xhdGlvbnMgd2lsbCBiZSB0cmlnZ2VyZWQuXG4gICAqL1xuICBzZXRMYW5nKGxhbmc6IHN0cmluZykge1xuICAgIGlmIChsYW5nID09PSAnZW4nIHx8IGxhbmcgPT09ICdlbi1VUycpIHtcbiAgICAgIHRoaXMuYnRuQXJpYUxhYmVsID0gRFJPUERPV05fQVJJQS5lbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idG5BcmlhTGFiZWwgPSBEUk9QRE9XTl9BUklBLmZyO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdGVkT3B0aW9uKGU6IEV2ZW50KSB7XG4gICAgLy9pZiBpdCByZWNlaXZlcyBpdCdzIGV2ZW50IGluZm8gaXQgc2VsZWN0cyB0aGUgaW5kZXggLSBpZiBub3QgY2xvc2VzIGZseW91dFxuICAgIGlmIChlKSB7XG4gICAgICB0aGlzLnNob3dQbGFjZWhvbGRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5jb25maWcubGFiZWwgPSBlLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLmNsZWFyRmx5b3V0Rm9jdXMoKTsgLy9jbGVhciB0aGUgZmx5b3V0IGZvY3VzIGlmIHRoZSBmbHlvdXQgaXMgY2xvc2VkLlxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUZseW91dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHJlY2VpdmVzIGEgdHJ1dGh5IHZhbHVlIHdoaWNoIGRldGVybWluZXMgd2V0aGVyIGl0IGNsb3NlcyBvciBvcGVucyxcbiAgICogYnV0IGFsc28gbG9va3MgZm9yIEZvY3VzRXZlbnQgdG8gY2hlY2sgaWYgZmx5b3V0IGlzIGJlaW5nIGludGVyYWN0ZWQgd2l0aFxuICAgKiBAcGFyYW0gc3RhdHVzXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICB0b2dnbGVGbHlvdXQoc3RhdHVzOiBib29sZWFuLCBlPzogRm9jdXNFdmVudCkge1xuICAgIGxldCB0YXJnZXQgPSBlPy5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghdGFyZ2V0Py5pZC5pbmNsdWRlcyh0aGlzLmNvbmZpZy5pZCkgfHwgIWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzdGF0dXM7XG4gICAgICAhc3RhdHVzICYmIHRoaXMuY2xlYXJGbHlvdXRGb2N1cygpOyAvL2NsZWFyIHRoZSBmbHlvdXQgZm9jdXMgaWYgdGhlIGZseW91dCBpcyBjbG9zZWQuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBmbHlvdXQgYWN0aXZlIHN0YXRlXG4gICAqL1xuICBjbGVhckZseW91dEZvY3VzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZz8uZmx5b3V0Py5vcHRpb25zKSB7XG4gICAgICB0aGlzLmNvbmZpZy5mbHlvdXQub3B0aW9ucy5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgIGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiXG4gIFtuZ0NsYXNzXT1cImNvbmZpZy5zaXplXCJcbj5cbiAgPGJ1dHRvblxuICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgYXR0ci5hcmlhLWxhYmVsPSBcInt7IGJ0bkFyaWFMYWJlbCB9fVwiXG4gICAgW2lkXT1cImNvbmZpZy5pZFwiXG4gICAgKGNsaWNrKT1cInRvZ2dsZUZseW91dCghc2VsZWN0ZWQpXCJcbiAgICBbZGlzYWJsZWRdPVwiY29uZmlnLmRpc2FibGVkXCJcbiAgICBjbGFzcz1cImRyb3Bkb3duIHNlbGVjdGVkLXt7IHNlbGVjdGVkIH19IHt7IGNvbmZpZy5jYXRlZ29yeSB9fVwiXG4gICAgYXR0ci5jYXRlZ29yeT1cInt7IGNvbmZpZy5jYXRlZ29yeSB9fVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvbi10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgPGlyY2MtY2wtbGliLWljb25cbiAgICAgICAgKm5nSWY9XCJjb25maWcuaWNvblwiXG4gICAgICAgIGNsYXNzPVwiY3VzdG9tLWljb25cIlxuICAgICAgICBbc3R5bGUuY29sb3JdPVwiY29uZmlnLmljb24/LmNvbG9yXCJcbiAgICAgICAgW2NvbmZpZ109XCJ7IEZBX2tleXdvcmRzOiBjb25maWcuaWNvbj8uY2xhc3MgfVwiXG4gICAgICA+PC9pcmNjLWNsLWxpYi1pY29uPlxuICAgICAgPHBcbiAgICAgICAgKm5nSWY9XCJzaG93UGxhY2Vob2xkZXJcIlxuICAgICAgICBjbGFzcz1cInBsYWNob2xkZXItdGV4dFwiXG4gICAgICA+XG4gICAgICAgIHt7IGNvbmZpZy5wbGFjZWhvbGRlclRleHQgfHwgJycgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzPVwibGFiZWwtdGV4dFwiPnt7IGNvbmZpZy5sYWJlbCB8fCAnJyB8IHRyYW5zbGF0ZSB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAqbmdJZj1cIiFzZWxlY3RlZFwiXG4gICAgICByb2xlPVwiaW1nXCJcbiAgICA+XG4gICAgICA8aSBjbGFzcz1cImZhLWxpZ2h0IGZhLWNoZXZyb24tZG93biBjdXN0b20tY2hldnJvblwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAqbmdJZj1cInNlbGVjdGVkXCJcbiAgICAgIHJvbGU9XCJpbWdcIlxuICAgID5cbiAgICAgIDxpIGNsYXNzPVwiZmEtbGlnaHQgZmEtY2hldnJvbi11cCBjdXN0b20tY2hldnJvblwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbjxpcmNjLWNsLWxpYi1mbHlvdXRcbiAgW2lkXT1cImNvbmZpZy5pZCArICdfZmx5b3V0J1wiXG4gIFtzaXplXT1cImNvbmZpZy5zaXplXCJcbiAgKm5nSWY9XCJzZWxlY3RlZFwiXG4gIFtjb25maWddPVwiZmx5b3V0Q29uZmlnXCJcbiAgKGlzU2VsZWN0ZWQpPVwic2VsZWN0ZWRPcHRpb24oJGV2ZW50KVwiXG4+PC9pcmNjLWNsLWxpYi1mbHlvdXQ+XG4iXX0=