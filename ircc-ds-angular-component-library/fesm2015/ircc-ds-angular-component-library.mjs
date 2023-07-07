import * as i0 from '@angular/core';
import { Injectable, Component, ViewChild, Input, EventEmitter, Output, QueryList, ViewChildren, HostListener, Directive, NgModule, forwardRef, PLATFORM_ID, Inject } from '@angular/core';
import * as i1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import * as i2 from '@angular/common';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as i3 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i5 from '@angular/forms';
import { FormGroup, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BehaviorSubject, Subject, Subscription, filter } from 'rxjs';

class StandAloneFunctions {
    constructor(translate) {
        this.translate = translate;
    }
    getErrorAria(formGroup, id, errorMessages) {
        var _a, _b;
        let returnError = '';
        if (((_a = formGroup.get(id)) === null || _a === void 0 ? void 0 : _a.dirty) && ((_b = formGroup.get(id)) === null || _b === void 0 ? void 0 : _b.invalid)) {
            errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.forEach((error) => {
                var _a, _b;
                if ((_b = (_a = formGroup.get(id)) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b[error.key]) {
                    returnError === ''
                        ? (returnError += this.translate.instant(error.errorLOV))
                        : (returnError += ', ' + this.translate.instant(error.errorLOV));
                }
            });
            returnError += '.';
        }
        return returnError;
    }
    /**
     * When run, returns an IErrorIds object. It generates IDs based on the errorMessages object
     * and which errors are currently in effect, thereby ensuring that the first element is given
     * an id ending in _error0
     * @param formGroup
     * @param id of the parent (input) component
     * @param errorMessages: IErrorPairs[]
     * @returns errorIds: IErrorIDs[]
     */
    getErrorIds(formGroup, id, errorMessages) {
        var _a;
        let errorIds = [];
        errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.forEach((message) => {
            errorIds.push({ key: message.key, errorLOV: message.errorLOV });
        });
        //Code block to get errors that have occurred before the statusChange obs is activated
        let i = 0;
        errorIds.forEach((error) => {
            var _a, _b;
            if ((_b = (_a = formGroup.get(id)) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b[error.key]) {
                error.id = id + '_error' + i;
                i++;
            }
        });
        (_a = formGroup.get(id)) === null || _a === void 0 ? void 0 : _a.statusChanges.subscribe((change) => {
            let i = 0;
            errorIds.forEach((error) => {
                var _a, _b;
                if ((_b = (_a = formGroup.get(id)) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b[error.key]) {
                    error.id = id + '_error' + i;
                    i++;
                }
            });
        });
        return errorIds;
    }
    /**
     * Create a label config - for use inside form input components
     * @param formGroup
     * @param id
     * @param parentID
     * @param errorMessages
     * @param label
     * @param desc
     * @param hint
     * @param required
     */
    makeLabelConfig(formGroup, parentID, errorMessages, label, desc, hint, required, iconButton, topLabel) {
        const config = {
            formGroup: formGroup,
            parentID: parentID,
            errorMessages: errorMessages,
            label: label,
            desc: desc,
            hint: hint,
            required: required,
            iconButton: iconButton,
            topLabel: topLabel
        };
        return config;
    }
    /**
     * A function designed to deal with how AWFUL Safari is. Safari does not consider touched to be a valid state in <body>,
     * therefore this is needed to force it to acknowledge the state.
     * @param formGroup
     * @param id of the parent (input) component
     */
    wasTouched(formGroup, id) {
        var _a;
        (_a = formGroup.get(id)) === null || _a === void 0 ? void 0 : _a.markAsTouched();
    }
    /**
     * Get the current base url.
     * @param baseUrl
     * @param baseUrlKey Translation key of base url
     */
    getBaseUrl(baseUrl = '', baseUrlKey) {
        const curLang = this.translate.currentLang;
        const langKey = curLang === 'en-US' || curLang === 'en' ? 'en' : 'fr';
        let i = window.location.href.slice(window.location.href.indexOf(langKey), window.location.href.length);
        i = i.split('/');
        let index = 0;
        for (const j of i) {
            if (j === this.translate.instant(baseUrlKey !== null && baseUrlKey !== void 0 ? baseUrlKey : '')) {
                baseUrl += '/' + j;
                // Should halt when find the base url segment
                break;
            }
            else if (index !== i.length - 1) {
                baseUrl += '/' + j;
                index += 1;
            }
        }
        if (baseUrl[baseUrl.length] !== '/')
            baseUrl += '/';
        return baseUrl;
    }
}
StandAloneFunctions.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StandAloneFunctions, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable });
StandAloneFunctions.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StandAloneFunctions, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StandAloneFunctions, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; } });

var DropdownTypes;
(function (DropdownTypes) {
    DropdownTypes["input"] = "input";
    DropdownTypes["cta"] = "cta";
})(DropdownTypes || (DropdownTypes = {}));
var DropDownActions;
(function (DropDownActions) {
    DropDownActions["addApplications"] = "add-applications";
    DropDownActions["filterApplications"] = "filter-applications";
})(DropDownActions || (DropDownActions = {}));
var DSSizes;
(function (DSSizes) {
    DSSizes["large"] = "large";
    DSSizes["small"] = "small";
})(DSSizes || (DSSizes = {}));
var DSFullSizes;
(function (DSFullSizes) {
    DSFullSizes["large"] = "large";
    DSFullSizes["small"] = "small";
    DSFullSizes["extraSmall"] = "extraSmall";
})(DSFullSizes || (DSFullSizes = {}));
var DSOrientations;
(function (DSOrientations) {
    DSOrientations["horizontal"] = "horizontal";
    DSOrientations["vertical"] = "vertical";
})(DSOrientations || (DSOrientations = {}));

class IconComponent {
    constructor() {
        this.config = {};
    }
    ngOnChanges(changes) {
        if (changes['config'] && !changes['config'].firstChange) {
            const change = changes['config'].currentValue;
            const keys = Object.keys(change);
            let spanContent = `<i class='font-icon `;
            keys.includes('FA_keywords')
                ? (spanContent += `${change['FA_keywords']}'`)
                : null;
            spanContent += `></i>`;
            this.iconSpan.nativeElement.innerHTML = spanContent;
        }
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.ariaLabel)
            this.config.ariaLabel = this.ariaLabel;
        if (this.FA_keywords)
            this.config.FA_keywords = this.FA_keywords;
        if (this.size)
            this.config.size = this.size;
        if (this.config.ariaLabel === '') {
            delete this.config.ariaLabel;
        }
    }
}
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: { config: "config", ariaLabel: "ariaLabel", FA_keywords: "FA_keywords", size: "size" }, viewQueries: [{ propertyName: "iconSpan", first: true, predicate: ["iconSpan"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<span\n  class=\"ds-icon-container\"\n  [ngClass]=\"config.size\"\n>\n  <span\n    #iconSpan\n    [attr.aria-hidden]=\"config.ariaLabel ? false : true\"\n    [attr.aria-label]=\"config.ariaLabel ? config.ariaLabel : null\"\n    [attr.role]=\"config.ariaLabel ? 'img' : null\"\n  >\n    <i\n      class=\"font-icon\"\n      [ngClass]=\"config.FA_keywords\"\n    ></i>\n  </span>\n</span>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-icon', template: "<span\n  class=\"ds-icon-container\"\n  [ngClass]=\"config.size\"\n>\n  <span\n    #iconSpan\n    [attr.aria-hidden]=\"config.ariaLabel ? false : true\"\n    [attr.aria-label]=\"config.ariaLabel ? config.ariaLabel : null\"\n    [attr.role]=\"config.ariaLabel ? 'img' : null\"\n  >\n    <i\n      class=\"font-icon\"\n      [ngClass]=\"config.FA_keywords\"\n    ></i>\n  </span>\n</span>\n" }]
        }], propDecorators: { iconSpan: [{
                type: ViewChild,
                args: ['iconSpan']
            }], config: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], FA_keywords: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

var ButtonCategories;
(function (ButtonCategories) {
    ButtonCategories["primary"] = "primary";
    ButtonCategories["secondary"] = "secondary";
    ButtonCategories["plain"] = "plain";
})(ButtonCategories || (ButtonCategories = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["small"] = "small";
    ButtonSize["large"] = "large";
})(ButtonSize || (ButtonSize = {}));
var ButtonColor;
(function (ButtonColor) {
    ButtonColor["critical"] = "critical";
    ButtonColor["CTA"] = "CTA";
})(ButtonColor || (ButtonColor = {}));
// export enum ButtonType {
//     button = 'button',
//     submit = 'submit',
//     reset = 'reset'
// }
var ButtonIconDirection;
(function (ButtonIconDirection) {
    ButtonIconDirection["left"] = "left";
    ButtonIconDirection["right"] = "right";
})(ButtonIconDirection || (ButtonIconDirection = {}));
class ButtonComponent {
    constructor() {
        this.config = {
            id: ''
        };
        this.id = '';
        this.btnAction = new EventEmitter();
    }
    ngOnInit() {
        this.id !== '' ? (this.config.id = this.id) : undefined;
        this.category === undefined
            ? undefined
            : (this.config.category = this.category);
        this.size === undefined ? undefined : (this.config.size = this.size);
        this.color === undefined ? undefined : (this.config.color = this.color);
        this.ariaLabel !== undefined
            ? (this.config.ariaLabel = this.ariaLabel)
            : undefined;
        this.disabled !== undefined
            ? (this.config.disabled = this.disabled)
            : undefined;
        this.tabIndex !== undefined
            ? (this.config.tabIndex = this.tabIndex)
            : undefined;
        if (this.icon || this.config.icon) {
            this.config.icon = this.icon ? this.icon : this.config.icon;
            this.config.iconDirection = this.iconDirection
                ? this.iconDirection
                : this.config.iconDirection;
            this.config.iconDirection = this.config.iconDirection
                ? this.config.iconDirection
                : 'left';
        }
        else {
            this.config.icon = undefined;
            this.config.iconDirection = undefined;
        }
    }
    clickEvent(id) {
        this.btnAction.emit(id);
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ButtonComponent, selector: "ircc-cl-lib-button", inputs: { config: "config", id: "id", category: "category", size: "size", color: "color", ariaLabel: "ariaLabel", disabled: "disabled", icon: "icon", iconDirection: "iconDirection", tabIndex: "tabIndex" }, outputs: { btnAction: "btnAction" }, ngImport: i0, template: "<button\n  [attr.aria-label]=\"config.ariaLabel\"\n  [attr.color]=\"config.color\"\n  [attr.category]=\"config.category\"\n  [attr.size]=\"config.size\"\n  [attr.tabIndex]=\"config.tabIndex\"\n  [disabled]=\"config.disabled\"\n  [ngClass]=\"config.iconDirection\"\n  (click)=\"clickEvent(config.id)\"\n  class=\"lib-button\"\n  [id]=\"config.id\"\n>\n  <div class=\"button-content-container\">\n    <span\n      class=\"icon\"\n      *ngIf=\"config.icon\"\n    >\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: config.icon }\"\n      ></ircc-cl-lib-icon>\n    </span>\n    <span class=\"text\"><ng-content></ng-content></span>\n  </div>\n</button>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-button', template: "<button\n  [attr.aria-label]=\"config.ariaLabel\"\n  [attr.color]=\"config.color\"\n  [attr.category]=\"config.category\"\n  [attr.size]=\"config.size\"\n  [attr.tabIndex]=\"config.tabIndex\"\n  [disabled]=\"config.disabled\"\n  [ngClass]=\"config.iconDirection\"\n  (click)=\"clickEvent(config.id)\"\n  class=\"lib-button\"\n  [id]=\"config.id\"\n>\n  <div class=\"button-content-container\">\n    <span\n      class=\"icon\"\n      *ngIf=\"config.icon\"\n    >\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: config.icon }\"\n      ></ircc-cl-lib-icon>\n    </span>\n    <span class=\"text\"><ng-content></ng-content></span>\n  </div>\n</button>\n" }]
        }], propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], category: [{
                type: Input
            }], size: [{
                type: Input
            }], color: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconDirection: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], btnAction: [{
                type: Output
            }] } });

var IconButtonCategories;
(function (IconButtonCategories) {
    IconButtonCategories["primary"] = "primary";
    IconButtonCategories["critical"] = "critical";
    IconButtonCategories["custom"] = "custom";
})(IconButtonCategories || (IconButtonCategories = {}));
const CLASS_X_MARK = 'fa-thin fa-xmark';
const CLASS_TRASHCAN = 'fa-solid fa-trash-can';
class IconButtonComponent {
    constructor() {
        this.config = {
            id: '',
            category: IconButtonCategories.primary,
            ariaLabel: ''
        };
        this.id = '';
        this.clickEvent = new EventEmitter();
        // Mapping of icons to category
        this.iconConfigs = {
            primary: {
                class: CLASS_X_MARK,
                color: 'var(--primary-text)'
            },
            critical: {
                class: CLASS_TRASHCAN,
                color: 'var(--critical-text)'
            }
        };
    }
    ngOnInit() {
        if (this.id)
            this.config.id = this.id;
        if (this.category)
            this.config.category = this.category;
        if (this.size)
            this.config.size = this.size;
        if (this.ariaLabel)
            this.config.ariaLabel = this.ariaLabel;
        if (this.disabled)
            this.config.disabled = this.disabled;
        if (this.icon)
            this.config.icon =
                this.config.category === IconButtonCategories.custom
                    ? this.icon
                    : this.iconConfigs[this.config.category];
        else if (!this.icon && this.config.icon)
            this.config.icon =
                this.config.category === IconButtonCategories.custom
                    ? this.config.icon
                    : this.iconConfigs[this.config.category];
        else
            this.config.icon = this.iconConfigs[this.config.category];
    }
    buttonClick(id = this.config.id) {
        this.clickEvent.emit(id);
    }
}
IconButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IconButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IconButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: IconButtonComponent, selector: "ircc-cl-lib-icon-button", inputs: { config: "config", id: "id", category: "category", size: "size", ariaLabel: "ariaLabel", disabled: "disabled", icon: "icon" }, outputs: { clickEvent: "clickEvent" }, ngImport: i0, template: "<button\n  category=\"plain\"\n  [id]=\"config.id\"\n  [attr.aria-label]=\"config.ariaLabel\"\n  [disabled]=\"config.disabled\"\n  (click)=\"buttonClick()\"\n  [class]=\"config.category + ' ' + config.size\"\n  class=\"icon-btn\"\n>\n  <span>\n    <ircc-cl-lib-icon\n      [config]=\"{ FA_keywords: config.icon?.class }\"\n      [style.color]=\"config.icon?.color\"\n    ></ircc-cl-lib-icon>\n  </span>\n</button>\n", dependencies: [{ kind: "component", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IconButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-icon-button', template: "<button\n  category=\"plain\"\n  [id]=\"config.id\"\n  [attr.aria-label]=\"config.ariaLabel\"\n  [disabled]=\"config.disabled\"\n  (click)=\"buttonClick()\"\n  [class]=\"config.category + ' ' + config.size\"\n  class=\"icon-btn\"\n>\n  <span>\n    <ircc-cl-lib-icon\n      [config]=\"{ FA_keywords: config.icon?.class }\"\n      [style.color]=\"config.icon?.color\"\n    ></ircc-cl-lib-icon>\n  </span>\n</button>\n" }]
        }], propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], category: [{
                type: Input
            }], size: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }], clickEvent: [{
                type: Output
            }] } });

var BannerType;
(function (BannerType) {
    BannerType[""] = "";
    BannerType["generic"] = "generic";
    BannerType["info"] = "info";
    BannerType["critical"] = "critical";
    BannerType["success"] = "success";
    BannerType["warning"] = "warning";
})(BannerType || (BannerType = {}));
var BannerSize;
(function (BannerSize) {
    BannerSize["large"] = "large";
    BannerSize["small"] = "small";
})(BannerSize || (BannerSize = {}));
var CTAType;
(function (CTAType) {
    CTAType["link"] = "link";
    CTAType["button"] = "button";
})(CTAType || (CTAType = {}));
class BannerComponent {
    constructor() {
        this.lineVisible = true;
        this.textId = '';
        this.config = {
            id: ''
        };
        this.btnEvent = new EventEmitter();
        this.iconConfig = {
            id: '',
            category: 'custom',
            icon: {
                class: 'fa-solid fa-xmark',
                color: 'var(--text-primary)'
            }
        };
    }
    eventHandler(emitValue) {
        var _a, _b, _c;
        console.log(emitValue);
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.id) {
            let banner = document.getElementById((_b = this.config) === null || _b === void 0 ? void 0 : _b.id);
            banner === null || banner === void 0 ? void 0 : banner.classList.add('bannerDismissed');
            setTimeout(function () {
                banner === null || banner === void 0 ? void 0 : banner.classList.add('noDisplay');
                banner === null || banner === void 0 ? void 0 : banner.classList.remove('bannerDismissed');
            }, 700);
            (_c = this.btnEvent) === null || _c === void 0 ? void 0 : _c.emit(this.config.id);
            banner === null || banner === void 0 ? void 0 : banner.classList.remove('noDisplay');
        }
    }
    toggleLine() {
        var _a, _b, _c;
        let containerHeight = (_a = document.getElementById(this.textId)) === null || _a === void 0 ? void 0 : _a.offsetHeight;
        let el = document.querySelector(`#${(_b = this.config) === null || _b === void 0 ? void 0 : _b.id} .banner-line`);
        let ctas = document.querySelector(`#${(_c = this.config) === null || _c === void 0 ? void 0 : _c.id} .banner-ctas`);
        if ((containerHeight && el && containerHeight > 35) ||
            (el && containerHeight && containerHeight > 23 && ctas)) {
            el.style.display = 'block';
        }
        else if (el) {
            el.style.display = 'none';
        }
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        //set config from individual options, if present
        if (this.id)
            this.config.id = this.id;
        if (this.title)
            this.config.title = this.title;
        if (this.content)
            this.config.content = this.content;
        if (this.type)
            this.config.type = this.type;
        if (this.rounded)
            this.config.rounded = this.rounded;
        if (this.dismissible)
            this.config.dismissible = this.dismissible;
        if (this.cta)
            this.config.cta = this.cta;
        if (this.size)
            this.config.size = this.size;
        if (this.ariaDissmissible)
            this.config.ariaDissmissible = this.ariaDissmissible;
        this.iconConfig.id = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.id) + '_closeBtn';
        this.textId = ((_b = this.config) === null || _b === void 0 ? void 0 : _b.id) + '_text';
        if ((_c = this.config) === null || _c === void 0 ? void 0 : _c.cta) {
            (_d = this.config) === null || _d === void 0 ? void 0 : _d.cta.forEach((item) => {
                if (item.ariaLabel && item.btnConfig)
                    item.btnConfig.ariaLabel = item.ariaLabel;
            });
        }
        if (!this.config.ariaDissmissible || this.config.ariaDissmissible === '') {
            if (this.config.dismissible) {
                this.config.ariaDissmissible = 'close';
            }
        }
    }
    ngAfterViewInit() {
        this.toggleLine();
    }
    ngAfterViewChecked() {
        this.toggleLine();
    }
}
BannerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BannerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BannerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: BannerComponent, selector: "ircc-cl-lib-banner", inputs: { config: "config", id: "id", title: "title", content: "content", type: "type", rounded: "rounded", dismissible: "dismissible", cta: "cta", size: "size", ariaDissmissible: "ariaDissmissible" }, outputs: { btnEvent: "btnEvent" }, ngImport: i0, template: "<div\n  (window:resize)=\"toggleLine()\"\n  class=\"banner-component\"\n  class=\"{{ config?.size }}\"\n  id=\"{{ config?.id }}\"\n  [ngClass]=\"{\n    rounded: config?.rounded,\n    information: config?.type === 'info',\n    success: config?.type === 'success',\n    warning: config?.type === 'warning',\n    critical: config?.type === 'critical'\n  }\"\n>\n  <div class=\"banner-container\">\n    <div\n      class=\"banner-left\"\n      *ngIf=\"config?.type !== 'generic' && config?.type\"\n    >\n      <ng-container [ngSwitch]=\"config?.type\">\n        <div *ngSwitchCase=\"'critical'\">\n          <i class=\"fa-circle-exclamation fa-light banner-icon\"></i>\n        </div>\n        <div *ngSwitchCase=\"'success'\">\n          <i class=\"fa-circle-check fa-light banner-icon\"></i>\n        </div>\n        <div *ngSwitchCase=\"'info'\">\n          <i class=\"fa-circle-info fa-light banner-icon\"></i>\n        </div>\n        <div *ngSwitchCase=\"'warning'\">\n          <i class=\"fa-triangle-exclamation fa-light banner-icon\"></i>\n        </div>\n      </ng-container>\n      <div\n        class=\"banner-line\"\n        [ngClass]=\"{ hidden: !lineVisible }\"\n      ></div>\n    </div>\n    <div class=\"banner-right\">\n      <div class=\"banner-body\">\n        <div\n          class=\"banner-text\"\n          id=\"{{ textId }}\"\n        >\n          <div\n            class=\"banner-title h6 emphasis\"\n            *ngIf=\"config?.title\"\n          >\n            {{ config?.title || '' | translate }}\n          </div>\n          <div\n            class=\"banner-content\"\n            [innerHTML]=\"config?.content || '' | translate\"\n            *ngIf=\"config?.content\"\n          ></div>\n        </div>\n      </div>\n      <div\n        class=\"banner-ctas\"\n        *ngIf=\"config?.cta\"\n      >\n        <ng-container *ngFor=\"let cta of config?.cta; let index = index\">\n          <ircc-cl-lib-button\n            *ngIf=\"cta?.type === 'button'\"\n            [id]=\"'cta_' + index\"\n            [category]=\"cta?.btnConfig?.category\"\n            [color]=\"cta?.btnConfig?.color\"\n            [ariaLabel]=\"cta?.btnConfig?.ariaLabel\"\n            [disabled]=\"cta?.btnConfig?.disabled\"\n            [icon]=\"cta?.btnConfig?.icon\"\n            [iconDirection]=\"cta?.btnConfig?.iconDirection\"\n            >{{ cta.text | translate }}</ircc-cl-lib-button\n          >\n          <a\n            class=\"cta-link\"\n            *ngIf=\"cta?.type === 'link'\"\n            [routerLink]=\"cta?.linkConfig | translate\"\n            [attr.aria-label]=\"cta?.ariaLabel\"\n            >{{ cta.text | translate }}</a\n          >\n        </ng-container>\n      </div>\n    </div>\n  </div>\n  <div class=\"banner-btn\">\n    <ircc-cl-lib-icon-button\n      [ariaLabel]=\"config?.ariaDissmissible || '' | translate\"\n      size=\"extraSmall\"\n      class=\"banner-close\"\n      *ngIf=\"config?.dismissible\"\n      [config]=\"iconConfig\"\n      (clickEvent)=\"eventHandler($event)\"\n    ></ircc-cl-lib-icon-button>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: ButtonComponent, selector: "ircc-cl-lib-button", inputs: ["config", "id", "category", "size", "color", "ariaLabel", "disabled", "icon", "iconDirection", "tabIndex"], outputs: ["btnAction"] }, { kind: "component", type: IconButtonComponent, selector: "ircc-cl-lib-icon-button", inputs: ["config", "id", "category", "size", "ariaLabel", "disabled", "icon"], outputs: ["clickEvent"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BannerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-banner', template: "<div\n  (window:resize)=\"toggleLine()\"\n  class=\"banner-component\"\n  class=\"{{ config?.size }}\"\n  id=\"{{ config?.id }}\"\n  [ngClass]=\"{\n    rounded: config?.rounded,\n    information: config?.type === 'info',\n    success: config?.type === 'success',\n    warning: config?.type === 'warning',\n    critical: config?.type === 'critical'\n  }\"\n>\n  <div class=\"banner-container\">\n    <div\n      class=\"banner-left\"\n      *ngIf=\"config?.type !== 'generic' && config?.type\"\n    >\n      <ng-container [ngSwitch]=\"config?.type\">\n        <div *ngSwitchCase=\"'critical'\">\n          <i class=\"fa-circle-exclamation fa-light banner-icon\"></i>\n        </div>\n        <div *ngSwitchCase=\"'success'\">\n          <i class=\"fa-circle-check fa-light banner-icon\"></i>\n        </div>\n        <div *ngSwitchCase=\"'info'\">\n          <i class=\"fa-circle-info fa-light banner-icon\"></i>\n        </div>\n        <div *ngSwitchCase=\"'warning'\">\n          <i class=\"fa-triangle-exclamation fa-light banner-icon\"></i>\n        </div>\n      </ng-container>\n      <div\n        class=\"banner-line\"\n        [ngClass]=\"{ hidden: !lineVisible }\"\n      ></div>\n    </div>\n    <div class=\"banner-right\">\n      <div class=\"banner-body\">\n        <div\n          class=\"banner-text\"\n          id=\"{{ textId }}\"\n        >\n          <div\n            class=\"banner-title h6 emphasis\"\n            *ngIf=\"config?.title\"\n          >\n            {{ config?.title || '' | translate }}\n          </div>\n          <div\n            class=\"banner-content\"\n            [innerHTML]=\"config?.content || '' | translate\"\n            *ngIf=\"config?.content\"\n          ></div>\n        </div>\n      </div>\n      <div\n        class=\"banner-ctas\"\n        *ngIf=\"config?.cta\"\n      >\n        <ng-container *ngFor=\"let cta of config?.cta; let index = index\">\n          <ircc-cl-lib-button\n            *ngIf=\"cta?.type === 'button'\"\n            [id]=\"'cta_' + index\"\n            [category]=\"cta?.btnConfig?.category\"\n            [color]=\"cta?.btnConfig?.color\"\n            [ariaLabel]=\"cta?.btnConfig?.ariaLabel\"\n            [disabled]=\"cta?.btnConfig?.disabled\"\n            [icon]=\"cta?.btnConfig?.icon\"\n            [iconDirection]=\"cta?.btnConfig?.iconDirection\"\n            >{{ cta.text | translate }}</ircc-cl-lib-button\n          >\n          <a\n            class=\"cta-link\"\n            *ngIf=\"cta?.type === 'link'\"\n            [routerLink]=\"cta?.linkConfig | translate\"\n            [attr.aria-label]=\"cta?.ariaLabel\"\n            >{{ cta.text | translate }}</a\n          >\n        </ng-container>\n      </div>\n    </div>\n  </div>\n  <div class=\"banner-btn\">\n    <ircc-cl-lib-icon-button\n      [ariaLabel]=\"config?.ariaDissmissible || '' | translate\"\n      size=\"extraSmall\"\n      class=\"banner-close\"\n      *ngIf=\"config?.dismissible\"\n      [config]=\"iconConfig\"\n      (clickEvent)=\"eventHandler($event)\"\n    ></ircc-cl-lib-icon-button>\n  </div>\n</div>\n" }]
        }], propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], title: [{
                type: Input
            }], content: [{
                type: Input
            }], type: [{
                type: Input
            }], rounded: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], cta: [{
                type: Input
            }], size: [{
                type: Input
            }], ariaDissmissible: [{
                type: Input
            }], btnEvent: [{
                type: Output
            }] } });

class TabsComponent {
    constructor(translate) {
        this.translate = translate;
        this.config = {
            id: '',
            showContent: true
        };
        this.valueChange = new EventEmitter();
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.id)
            this.config.id = this.id;
        if (this.tab)
            this.config.tab = this.tab;
        if (this.size)
            this.config.size = this.size;
        if (this.selected)
            this.config.selected = this.selected;
        if (this.showContent)
            this.config.showContent = this.showContent;
        if (this.config.selected === undefined && this.config.tab) {
            this.config.selected = this.config.tab[0].id;
            this.valueChange.emit(this.config.selected);
        }
    }
    setSelected(selectedID) {
        var _a, _b;
        if (selectedID)
            this.config.selected = selectedID; //set the selected tab
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.selected) {
            let tab = document.getElementById((_b = this.config) === null || _b === void 0 ? void 0 : _b.selected);
            let x = tab === null || tab === void 0 ? void 0 : tab.getBoundingClientRect().left;
            if (document.querySelector('.page-nav')) {
                let nav = document.querySelector('.page-nav');
                nav && x ? (nav.scrollLeft = x) : null;
            }
            this.valueChange.emit(selectedID);
        }
    }
}
TabsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TabsComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
TabsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: TabsComponent, selector: "ircc-cl-lib-tabs", inputs: { config: "config", id: "id", tab: "tab", size: "size", selected: "selected", showContent: "showContent" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<div class=\"{{ config.size }}\">\n  <nav class=\"page-nav\">\n    <div *ngFor=\"let val of config.tab\">\n      <button\n        *ngIf=\"val.id === config.selected\"\n        selected\n        class=\"tabs-btn\"\n        [id]=\"val.id\"\n        (click)=\"setSelected(val.id)\"\n        [attr.aria-label]=\"val.title + ' selected'\"\n      >\n        {{ val.title || '' | translate }}\n      </button>\n      <button\n        *ngIf=\"val.id !== config.selected\"\n        class=\"tabs-btn\"\n        [id]=\"val.id\"\n        (click)=\"setSelected(val.id)\"\n      >\n        {{ val.title || '' | translate }}\n      </button>\n    </div>\n  </nav>\n  <ng-container *ngIf=\"config.showContent === true\">\n    <br />\n    <div class=\"col-lg-10\">\n      <div class=\"side-menu-content\">\n        <div *ngFor=\"let cont of config.tab\">\n          <div\n            *ngIf=\"cont.id === config.selected\"\n            class=\"content\"\n          >\n            {{ cont.value || '' | translate }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TabsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-tabs', template: "<div class=\"{{ config.size }}\">\n  <nav class=\"page-nav\">\n    <div *ngFor=\"let val of config.tab\">\n      <button\n        *ngIf=\"val.id === config.selected\"\n        selected\n        class=\"tabs-btn\"\n        [id]=\"val.id\"\n        (click)=\"setSelected(val.id)\"\n        [attr.aria-label]=\"val.title + ' selected'\"\n      >\n        {{ val.title || '' | translate }}\n      </button>\n      <button\n        *ngIf=\"val.id !== config.selected\"\n        class=\"tabs-btn\"\n        [id]=\"val.id\"\n        (click)=\"setSelected(val.id)\"\n      >\n        {{ val.title || '' | translate }}\n      </button>\n    </div>\n  </nav>\n  <ng-container *ngIf=\"config.showContent === true\">\n    <br />\n    <div class=\"col-lg-10\">\n      <div class=\"side-menu-content\">\n        <div *ngFor=\"let cont of config.tab\">\n          <div\n            *ngIf=\"cont.id === config.selected\"\n            class=\"content\"\n          >\n            {{ cont.value || '' | translate }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], tab: [{
                type: Input
            }], size: [{
                type: Input
            }], selected: [{
                type: Input
            }], showContent: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

const TAG_LABELS_EN = [
    'In Progress',
    'Completed',
    'Error',
    'Locked',
    'Not started'
];
const TAG_LABELS_FR = [
    'En cours',
    'Complété',
    'Erreur',
    'Verrouillé',
    'Pas commencé'
];
var TagType;
(function (TagType) {
    TagType["primary"] = "primary";
    TagType["success"] = "success";
    TagType["critical"] = "critical";
    TagType["locked"] = "locked";
    TagType["notStarted"] = "notStarted";
})(TagType || (TagType = {}));
class ProgressTagsComponent {
    constructor(translate) {
        this.translate = translate;
        this.text = [];
        this.config = {
            id: ''
        };
        this.id = '';
    }
    ngOnInit() {
        if (this.id)
            this.config.id = this.id;
        if (this.type)
            this.config.type = this.type;
        if (this.size)
            this.config.size = this.size;
        this.setTypeTitle();
        this.translate.onLangChange.subscribe(() => {
            this.setTypeTitle();
        });
    }
    ngOnChanges() {
        this.setTypeTitle();
    }
    setTypeTitle() {
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            this.text = TAG_LABELS_EN;
        }
        else {
            this.text = TAG_LABELS_FR;
        }
    }
}
ProgressTagsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ProgressTagsComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
ProgressTagsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ProgressTagsComponent, selector: "ircc-cl-lib-progress-tags", inputs: { config: "config", id: "id", type: "type", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"{{ config.size }}\"\n  id=\"{{ config.id }}\"\n  class=\"tag-component\"\n  [ngClass]=\"{\n    success: config.type === 'success',\n    critical: config.type === 'critical',\n    neutral: config.type === 'locked' || config.type === 'notStarted'\n  }\"\n>\n  <div class=\"tag-container\">\n    <div class=\"tag-left\">\n      <ng-container [ngSwitch]=\"config.type\">\n        <div *ngSwitchCase=\"'success'\">\n          <i class=\"fa-circle-check fa-regular tag-icon\"></i>\n          <span class=\"content\">{{ text[1] }}</span>\n        </div>\n        <div *ngSwitchCase=\"'critical'\">\n          <i class=\"fa-circle-exclamation fa-regular tag-icon\"></i>\n          <span class=\"content\">{{ text[2] }}</span>\n        </div>\n        <div *ngSwitchCase=\"'locked'\">\n          <i class=\"fa-light fa-lock tag-icon\"></i>\n          <span class=\"content\">{{ text[3] }}</span>\n        </div>\n        <div *ngSwitchCase=\"'notStarted'\">\n          <i class=\"fa-light fa-circle tag-icon\"></i>\n          <span class=\"content\">{{ text[4] }}</span>\n        </div>\n        <div *ngSwitchDefault>\n          <i class=\"fa-regular fa-circle-half-stroke tag-icon\"></i>\n          <span class=\"content\">{{ text[0] }}</span>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2.NgSwitchDefault, selector: "[ngSwitchDefault]" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ProgressTagsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-progress-tags', template: "<div\n  class=\"{{ config.size }}\"\n  id=\"{{ config.id }}\"\n  class=\"tag-component\"\n  [ngClass]=\"{\n    success: config.type === 'success',\n    critical: config.type === 'critical',\n    neutral: config.type === 'locked' || config.type === 'notStarted'\n  }\"\n>\n  <div class=\"tag-container\">\n    <div class=\"tag-left\">\n      <ng-container [ngSwitch]=\"config.type\">\n        <div *ngSwitchCase=\"'success'\">\n          <i class=\"fa-circle-check fa-regular tag-icon\"></i>\n          <span class=\"content\">{{ text[1] }}</span>\n        </div>\n        <div *ngSwitchCase=\"'critical'\">\n          <i class=\"fa-circle-exclamation fa-regular tag-icon\"></i>\n          <span class=\"content\">{{ text[2] }}</span>\n        </div>\n        <div *ngSwitchCase=\"'locked'\">\n          <i class=\"fa-light fa-lock tag-icon\"></i>\n          <span class=\"content\">{{ text[3] }}</span>\n        </div>\n        <div *ngSwitchCase=\"'notStarted'\">\n          <i class=\"fa-light fa-circle tag-icon\"></i>\n          <span class=\"content\">{{ text[4] }}</span>\n        </div>\n        <div *ngSwitchDefault>\n          <i class=\"fa-regular fa-circle-half-stroke tag-icon\"></i>\n          <span class=\"content\">{{ text[0] }}</span>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

var IFlyoutOptionType;
(function (IFlyoutOptionType) {
    IFlyoutOptionType["text"] = "text";
    IFlyoutOptionType["checkbox"] = "checkbox";
    IFlyoutOptionType["dropdown"] = "dropdown";
    IFlyoutOptionType["line"] = "line";
    IFlyoutOptionType["heading"] = "heading";
})(IFlyoutOptionType || (IFlyoutOptionType = {}));
;
class FlyoutOptionComponent {
    constructor() {
        this.config = {
            id: '',
            value: 'Blank label'
        };
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.id)
            this.config.id = this.id;
        if (this.size)
            this.config.size = this.size;
        if (this.value)
            this.config.value = this.value;
        if (this.selected)
            this.config.selected = this.selected;
        if (this.active)
            this.config.active = this.active;
        if (this.disabled)
            this.config.disabled = this.disabled;
        if (this.type)
            this.config.type = this.type;
        if (this.clickable)
            this.config.clickable = this.clickable;
        if (this.config.type === undefined)
            this.config.type = 'text';
        if ((this.config.type === 'text' || 'checkbox' || 'dropdown') && this.config.clickable !== false && this.config.disabled !== true) {
            this.config.clickable = true;
        }
        else {
            this.config.clickable = false;
        }
    }
    ;
}
FlyoutOptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FlyoutOptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FlyoutOptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: FlyoutOptionComponent, selector: "ircc-cl-lib-flyout-option", inputs: { config: "config", id: "id", size: "size", value: "value", selected: "selected", active: "active", disabled: "disabled", type: "type", clickable: "clickable" }, ngImport: i0, template: "<div\n  class=\"option-container\"\n  [ngClass]=\"config.size\"\n>\n  <ircc-cl-lib-button\n    [category]=\"'plain'\"\n    [id]=\"config.id ? config.id : ''\"\n    role=\"option\"\n    [tabIndex]=\"-1\"\n  >\n    <div class=\"option-contents\">\n      <p class=\"option-text\">{{ config.value || '' | translate }}</p>\n      <div *ngIf=\"config.selected\">\n        <span class=\"fa-solid fa-check option-check\"></span>\n      </div>\n    </div>\n  </ircc-cl-lib-button>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ButtonComponent, selector: "ircc-cl-lib-button", inputs: ["config", "id", "category", "size", "color", "ariaLabel", "disabled", "icon", "iconDirection", "tabIndex"], outputs: ["btnAction"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FlyoutOptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-flyout-option', template: "<div\n  class=\"option-container\"\n  [ngClass]=\"config.size\"\n>\n  <ircc-cl-lib-button\n    [category]=\"'plain'\"\n    [id]=\"config.id ? config.id : ''\"\n    role=\"option\"\n    [tabIndex]=\"-1\"\n  >\n    <div class=\"option-contents\">\n      <p class=\"option-text\">{{ config.value || '' | translate }}</p>\n      <div *ngIf=\"config.selected\">\n        <span class=\"fa-solid fa-check option-check\"></span>\n      </div>\n    </div>\n  </ircc-cl-lib-button>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], size: [{
                type: Input
            }], value: [{
                type: Input
            }], selected: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], type: [{
                type: Input
            }], clickable: [{
                type: Input
            }] } });
;

var IFlyoutSelectTypes;
(function (IFlyoutSelectTypes) {
    IFlyoutSelectTypes["single"] = "single";
    IFlyoutSelectTypes["multi"] = "multi";
})(IFlyoutSelectTypes || (IFlyoutSelectTypes = {}));
const FLYOUT_CURRENT_SELECTED = {
    en: ' currently selected',
    fr: ' actuellement selectionne'
};
class FlyoutComponent {
    constructor(translate) {
        this.translate = translate;
        this.optionContainers = new QueryList();
        this.config = {
            id: ''
        };
        //TODO: Must add the other config parameters
        this.isSelected = new EventEmitter();
        this.selectedIndex = -1;
        this.a11yText = '';
        this.currentSelected = '';
    }
    ngOnInit() {
        if (this.config.type === undefined)
            this.config.type = 'single';
        if (this.id)
            this.config.id = this.id;
        if (this.options)
            this.config.options = this.options;
        if (this.disabled)
            this.config.disabled = this.disabled;
        if (this.selection)
            this.config.selection = this.selection;
        if (this.type)
            this.config.type = this.type;
        if (this.size)
            this.config.size = this.size;
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
    }
    onClick(event) {
        let target = event.target;
        if (!target.classList.contains('option-contents') &&
            !target.classList.contains('dropdown')) {
            this.isSelected.emit(null);
        }
    }
    onArrowDown(event) {
        event.preventDefault();
        if (this.config.options) {
            let foundClickable = false;
            this.config.options
                .slice(this.selectedIndex + 1)
                .forEach((option, index) => {
                if (!foundClickable && option.clickable !== false) {
                    this.selectedIndex += index + 1;
                    this.highlightIndex(option.id);
                    foundClickable = true;
                }
            });
        }
    }
    onArrowUp(event) {
        event.preventDefault();
        if (this.config.options) {
            let foundClickable = false;
            this.config.options
                .slice(0, this.selectedIndex)
                .reverse()
                .forEach((option, index) => {
                if (!foundClickable && option.clickable !== false) {
                    this.selectedIndex -= index + 1;
                    this.highlightIndex(option.id);
                    foundClickable = true;
                }
            });
            // Ensure selectedIndex does not fall below 0
            this.selectedIndex = Math.max(this.selectedIndex, 0);
        }
    }
    onEnter(event) {
        event.preventDefault();
        //if the index hasn't changes through arrow navigation, emits our event but lets the parent know nothing was selected
        this.selectedIndex != -1
            ? this.optionSelected(this.selectedIndex)
            : this.isSelected.emit(null);
    }
    //takes in the active index from HostListeners and sets the config option to active state which triggers styling
    highlightIndex(el_id) {
        var _a;
        if (el_id) {
            (_a = this.config.options) === null || _a === void 0 ? void 0 : _a.forEach((option) => {
                var _a, _b;
                if (option.id === el_id) {
                    option.active = true;
                    (_b = (_a = this.optionContainers
                        .toArray()[this.selectedIndex]) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
                    console.log('HERE', option.value);
                    this.a11yText = option.value;
                    //updates a11yText to indicate currently selected item if scrolling through flyout again
                    if (option.selected)
                        this.a11yText += this.currentSelected;
                }
                else {
                    option.active = false;
                }
            });
        }
    }
    /**
     * setLang detects changes to the language toggle to serve the correct aria error text
     */
    setLang(lang) {
        lang === 'en' || lang === 'en-US'
            ? (this.currentSelected = FLYOUT_CURRENT_SELECTED.en)
            : (this.currentSelected = FLYOUT_CURRENT_SELECTED.fr);
    }
    //clears all selections by setting the option.selected to false
    clearOptions() {
        var _a, _b;
        (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.forEach((option) => {
            option.selected = false;
        });
    }
    //function takes in index value of current active option and selects it
    optionSelected(i) {
        if (this.config.options &&
            !this.config.options[i].selected &&
            this.config.options[i].clickable) {
            //setup for future multi select feature
            this.config.type !== 'multi'
                ? this.clearOptions()
                : /*this.config.selection = [].push(this.config.options[i]);*/ console.log('MULTI');
            this.config.options[i].selected = true;
            //emits the value of the selected index so it's visible to the parent
            this.isSelected.emit(this.config.options[i].value);
        }
    }
}
FlyoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FlyoutComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
FlyoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: FlyoutComponent, selector: "ircc-cl-lib-flyout", inputs: { config: "config", id: "id", options: "options", disabled: "disabled", selection: "selection", type: "type", size: "size" }, outputs: { isSelected: "isSelected" }, host: { listeners: { "document:click": "onClick($event)", "document:keydown.arrowdown": "onArrowDown($event)", "document:keydown.arrowup": "onArrowUp($event)", "document:keydown.enter": "onEnter($event)" } }, viewQueries: [{ propertyName: "optionContainers", predicate: ["option"], descendants: true }], ngImport: i0, template: "<div class=\"{{ config?.size }} flyout-container\">\n  <div\n    #option\n    *ngFor=\"let option of config?.options; let index = index\"\n    [ngClass]=\"{\n      'flyout-option-container': option.clickable !== false,\n      'disabled-option': option.disabled === true,\n      selected: option.active\n    }\"\n  >\n    <ircc-cl-lib-flyout-option\n      [config]=\"option\"\n      [size]=\"config.size\"\n      (click)=\"optionSelected(index)\"\n      [id]=\"config.id + '_option_' + (index + 1)\"\n    ></ircc-cl-lib-flyout-option>\n  </div>\n</div>\n<span\n  id=\"sr\"\n  class=\"sr-only\"\n  aria-live=\"polite\"\n  >{{ a11yText }}{{currentSelected}}</span\n>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: FlyoutOptionComponent, selector: "ircc-cl-lib-flyout-option", inputs: ["config", "id", "size", "value", "selected", "active", "disabled", "type", "clickable"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FlyoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-flyout', template: "<div class=\"{{ config?.size }} flyout-container\">\n  <div\n    #option\n    *ngFor=\"let option of config?.options; let index = index\"\n    [ngClass]=\"{\n      'flyout-option-container': option.clickable !== false,\n      'disabled-option': option.disabled === true,\n      selected: option.active\n    }\"\n  >\n    <ircc-cl-lib-flyout-option\n      [config]=\"option\"\n      [size]=\"config.size\"\n      (click)=\"optionSelected(index)\"\n      [id]=\"config.id + '_option_' + (index + 1)\"\n    ></ircc-cl-lib-flyout-option>\n  </div>\n</div>\n<span\n  id=\"sr\"\n  class=\"sr-only\"\n  aria-live=\"polite\"\n  >{{ a11yText }}{{currentSelected}}</span\n>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { optionContainers: [{
                type: ViewChildren,
                args: ['option']
            }], config: [{
                type: Input
            }], id: [{
                type: Input
            }], options: [{
                type: Input
            }], disabled: [{
                type: Input
            }], selection: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], isSelected: [{
                type: Output
            }], onClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }], onArrowDown: [{
                type: HostListener,
                args: ['document:keydown.arrowdown', ['$event']]
            }], onArrowUp: [{
                type: HostListener,
                args: ['document:keydown.arrowup', ['$event']]
            }], onEnter: [{
                type: HostListener,
                args: ['document:keydown.enter', ['$event']]
            }] } });

const DROPDOWN_ARIA = {
    en: 'Dropdown',
    fr: 'Menu Deroulant'
};
class DropdownComponent {
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
        let target = e === null || e === void 0 ? void 0 : e.relatedTarget;
        if (!(target === null || target === void 0 ? void 0 : target.id.includes(this.config.id)) || !e) {
            this.selected = status;
            !status && this.clearFlyoutFocus(); //clear the flyout focus if the flyout is closed.
        }
    }
    /**
     * Clear the flyout active state
     */
    clearFlyoutFocus() {
        var _a, _b;
        if ((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.flyout) === null || _b === void 0 ? void 0 : _b.options) {
            this.config.flyout.options.forEach((i) => {
                i.active = false;
            });
        }
    }
}
DropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DropdownComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
DropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: DropdownComponent, selector: "ircc-cl-lib-dropdown", inputs: { config: "config", id: "id", size: "size", label: "label", placeholderText: "placeholderText", disabled: "disabled", category: "category", icon: "icon", flyout: "flyout" }, ngImport: i0, template: "<div\n  class=\"content-container\"\n  [ngClass]=\"config.size\"\n>\n  <button\n    aria-live=\"polite\"\n    attr.aria-label= \"{{ btnAriaLabel }}\"\n    [id]=\"config.id\"\n    (click)=\"toggleFlyout(!selected)\"\n    [disabled]=\"config.disabled\"\n    class=\"dropdown selected-{{ selected }} {{ config.category }}\"\n    attr.category=\"{{ config.category }}\"\n  >\n    <div class=\"icon-text-container\">\n      <ircc-cl-lib-icon\n        *ngIf=\"config.icon\"\n        class=\"custom-icon\"\n        [style.color]=\"config.icon?.color\"\n        [config]=\"{ FA_keywords: config.icon?.class }\"\n      ></ircc-cl-lib-icon>\n      <p\n        *ngIf=\"showPlaceholder\"\n        class=\"placholder-text\"\n      >\n        {{ config.placeholderText || '' | translate }}\n      </p>\n      <p class=\"label-text\">{{ config.label || '' | translate }}</p>\n    </div>\n    <div\n      *ngIf=\"!selected\"\n      role=\"img\"\n    >\n      <i class=\"fa-light fa-chevron-down custom-chevron\"></i>\n    </div>\n    <div\n      *ngIf=\"selected\"\n      role=\"img\"\n    >\n      <i class=\"fa-light fa-chevron-up custom-chevron\"></i>\n    </div>\n  </button>\n</div>\n<ircc-cl-lib-flyout\n  [id]=\"config.id + '_flyout'\"\n  [size]=\"config.size\"\n  *ngIf=\"selected\"\n  [config]=\"flyoutConfig\"\n  (isSelected)=\"selectedOption($event)\"\n></ircc-cl-lib-flyout>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "component", type: FlyoutComponent, selector: "ircc-cl-lib-flyout", inputs: ["config", "id", "options", "disabled", "selection", "type", "size"], outputs: ["isSelected"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
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

class LabelButtonService {
    constructor() {
        this.labelButtonClickSubj = new BehaviorSubject('');
        this.labelButtonClickObs$ = this.labelButtonClickSubj.asObservable();
    }
    buttonPress(id) {
        this.labelButtonClickSubj.next(id);
    }
}
LabelButtonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LabelButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LabelButtonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LabelButtonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LabelButtonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

const ERROR_TEXT_STUB = {
    en: 'Error',
    fr: 'Erreur'
};
const HELP_ICON_ALT = {
    en: ', more information',
    fr: ", plus d'information"
};
class LabelComponent {
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
LabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LabelComponent, deps: [{ token: i1.TranslateService }, { token: StandAloneFunctions }, { token: LabelButtonService }], target: i0.ɵɵFactoryTarget.Component });
LabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: LabelComponent, selector: "ircc-cl-lib-label", inputs: { config: "config", formGroup: "formGroup", errorMessages: "errorMessages", parentID: "parentID", label: "label", desc: "desc", hint: "hint", required: "required", iconButton: "iconButton", topLabel: "topLabel", touched: "touched" }, ngImport: i0, template: "<div\n  id=\"{{ config.parentID + '_label' }}\"\n  class=\"label_container\"\n  [ngClass]=\"{ extra_padding: config.label && !config.desc && !config.hint }\"\n>\n  <label\n    *ngIf=\"config.label\"\n    class=\"label\"\n  >\n    <span class=\"label_field_container\">\n      <div\n        class=\"required-field-container\"\n        *ngIf=\"config.required\"\n      >\n        <i class=\"fa-regular fa-asterisk required-star\"></i\n        >{{ config.label || '' | translate }}\n      </div>\n      <div *ngIf=\"!config.required\">\n        {{ config.label || '' | translate }}\n      </div>\n      <div\n        *ngIf=\"config.iconButton\"\n        class=\"icon_container\"\n      >\n        <button\n          class=\"touch_button\"\n          category=\"plain\"\n          (click)=\"iconButtonClick()\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            (config.label | translate) +\n            ' ' +\n            (config.iconButton.ariaText | translate)\n          \"\n        ></button>\n        <i [class]=\"config.iconButton.iconClass\"></i>\n      </div>\n    </span>\n  </label>\n  <p\n    *ngIf=\"config.desc\"\n    class=\"input-desc\"\n  >\n    {{ config.desc || '' | translate }}\n  </p>\n  <p\n    *ngIf=\"config.hint\"\n    class=\"input-hint\"\n  >\n    {{ config.hint | translate }}\n  </p>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-label', template: "<div\n  id=\"{{ config.parentID + '_label' }}\"\n  class=\"label_container\"\n  [ngClass]=\"{ extra_padding: config.label && !config.desc && !config.hint }\"\n>\n  <label\n    *ngIf=\"config.label\"\n    class=\"label\"\n  >\n    <span class=\"label_field_container\">\n      <div\n        class=\"required-field-container\"\n        *ngIf=\"config.required\"\n      >\n        <i class=\"fa-regular fa-asterisk required-star\"></i\n        >{{ config.label || '' | translate }}\n      </div>\n      <div *ngIf=\"!config.required\">\n        {{ config.label || '' | translate }}\n      </div>\n      <div\n        *ngIf=\"config.iconButton\"\n        class=\"icon_container\"\n      >\n        <button\n          class=\"touch_button\"\n          category=\"plain\"\n          (click)=\"iconButtonClick()\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            (config.label | translate) +\n            ' ' +\n            (config.iconButton.ariaText | translate)\n          \"\n        ></button>\n        <i [class]=\"config.iconButton.iconClass\"></i>\n      </div>\n    </span>\n  </label>\n  <p\n    *ngIf=\"config.desc\"\n    class=\"input-desc\"\n  >\n    {{ config.desc || '' | translate }}\n  </p>\n  <p\n    *ngIf=\"config.hint\"\n    class=\"input-hint\"\n  >\n    {{ config.hint | translate }}\n  </p>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: StandAloneFunctions }, { type: LabelButtonService }]; }, propDecorators: { config: [{
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

const PROGRESS_INDICATOR_STEP_EN = 'Step';
const PROGRESS_INDICATOR_STEP_FR = 'Étap';
var Orientations;
(function (Orientations) {
    Orientations["horizontal"] = "horizontal";
    Orientations["vertical"] = "vertical";
})(Orientations || (Orientations = {}));
class ProgressIndicatorComponent {
    constructor(translate) {
        this.translate = translate;
        this.config = {
            id: '',
            steps: [{ tagConfig: { id: '' } }],
            orientation: 'horizontal'
        };
        this.tabClick = new EventEmitter();
        this.tabConfig = {
            id: '',
            title: ''
        };
        this.tabNavConfig = {
            id: '',
            tab: [{ id: '', title: '' }]
        };
        this.stepText = '';
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.id)
            this.config.id = this.id;
        if (this.size)
            this.config.size = this.size;
        if (this.orientation)
            this.config.orientation = this.orientation;
        if (this.steps)
            this.config.steps = this.steps;
        if (this.selected)
            this.config.selected = this.selected;
        if (!this.config.orientation)
            this.config.orientation = 'horizontal';
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
        if (this.config.selected === undefined) {
            this.config.selected = 0;
        }
    }
    tabClickFn(selected) {
        this.tabClick.emit(selected);
    }
    setLang(lang) {
        if (lang === 'en' || lang === 'en-US') {
            this.stepText = PROGRESS_INDICATOR_STEP_EN;
        }
        else {
            this.stepText = PROGRESS_INDICATOR_STEP_FR;
        }
    }
}
ProgressIndicatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ProgressIndicatorComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
ProgressIndicatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ProgressIndicatorComponent, selector: "ircc-cl-lib-progress-indicator", inputs: { config: "config", id: "id", size: "size", orientation: "orientation", steps: "steps", selected: "selected" }, outputs: { tabClick: "tabClick" }, ngImport: i0, template: "<div\n  [class]=\"config.orientation\"\n  class=\"main-container\"\n>\n  <div\n    class=\"container-plus-line\"\n    *ngFor=\"let step of config.steps; let i = index\"\n  >\n    <nav\n      class=\"progress-nav\"\n      role=\"navigation\"\n    >\n      <button\n        role=\"tab\"\n        class=\"container\"\n        [ngClass]=\"config.size\"\n        category=\"plain\"\n        [attr.disabled]=\"step.tagConfig.type === 'locked' ? 'disabled' : null\"\n        (click)=\"tabClickFn(i)\"\n      >\n        <div class=\"except-line\">\n          <button\n            tabindex=\"-1\"\n            *ngIf=\"i === config.selected\"\n            selected\n            class=\"tags-btn\"\n            [id]=\"config.id + '_step_' + i\"\n            [attr.aria-label]=\"stepText + ' ' + (i + 1) + ' selected'\"\n          >\n            {{ stepText + ' ' + (i + 1) }}\n          </button>\n          <button\n            tabindex=\"-1\"\n            *ngIf=\"i !== config.selected\"\n            class=\"tags-btn-plus\"\n            [id]=\"config.id + '_step_' + i\"\n            [attr.aria-label]=\"stepText + ' ' + (i + 1)\"\n          >\n            {{ stepText + ' ' + (i + 1) }}\n          </button>\n          <span\n            class=\"stepTitle\"\n            [innerHTML]=\"step.title || '' | translate\"\n          ></span>\n          <div [ngClass]=\"{ small: config.size === 'small' }\">\n            <ircc-cl-lib-progress-tags\n              [config]=\"step.tagConfig\"\n            ></ircc-cl-lib-progress-tags>\n          </div>\n        </div>\n      </button>\n    </nav>\n    <div\n      [ngClass]=\"{ 'green-line': step.tagConfig.type === 'success' }\"\n      class=\"line\"\n    ></div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ProgressTagsComponent, selector: "ircc-cl-lib-progress-tags", inputs: ["config", "id", "type", "size"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ProgressIndicatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-progress-indicator', template: "<div\n  [class]=\"config.orientation\"\n  class=\"main-container\"\n>\n  <div\n    class=\"container-plus-line\"\n    *ngFor=\"let step of config.steps; let i = index\"\n  >\n    <nav\n      class=\"progress-nav\"\n      role=\"navigation\"\n    >\n      <button\n        role=\"tab\"\n        class=\"container\"\n        [ngClass]=\"config.size\"\n        category=\"plain\"\n        [attr.disabled]=\"step.tagConfig.type === 'locked' ? 'disabled' : null\"\n        (click)=\"tabClickFn(i)\"\n      >\n        <div class=\"except-line\">\n          <button\n            tabindex=\"-1\"\n            *ngIf=\"i === config.selected\"\n            selected\n            class=\"tags-btn\"\n            [id]=\"config.id + '_step_' + i\"\n            [attr.aria-label]=\"stepText + ' ' + (i + 1) + ' selected'\"\n          >\n            {{ stepText + ' ' + (i + 1) }}\n          </button>\n          <button\n            tabindex=\"-1\"\n            *ngIf=\"i !== config.selected\"\n            class=\"tags-btn-plus\"\n            [id]=\"config.id + '_step_' + i\"\n            [attr.aria-label]=\"stepText + ' ' + (i + 1)\"\n          >\n            {{ stepText + ' ' + (i + 1) }}\n          </button>\n          <span\n            class=\"stepTitle\"\n            [innerHTML]=\"step.title || '' | translate\"\n          ></span>\n          <div [ngClass]=\"{ small: config.size === 'small' }\">\n            <ircc-cl-lib-progress-tags\n              [config]=\"step.tagConfig\"\n            ></ircc-cl-lib-progress-tags>\n          </div>\n        </div>\n      </button>\n    </nav>\n    <div\n      [ngClass]=\"{ 'green-line': step.tagConfig.type === 'success' }\"\n      class=\"line\"\n    ></div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], size: [{
                type: Input
            }], orientation: [{
                type: Input
            }], steps: [{
                type: Input
            }], selected: [{
                type: Input
            }], tabClick: [{
                type: Output
            }] } });

class BreadcrumbLinkComponent {
    constructor() {
        this.config = {
            text: '',
            overflow: false
        };
    }
}
BreadcrumbLinkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbLinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbLinkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: BreadcrumbLinkComponent, selector: "ircc-cl-lib-breadcrumb-link", inputs: { config: "config" }, ngImport: i0, template: "<ng-container *ngIf=\"config.href\">\n  <a\n    [href]=\"config.href\"\n    tabindex=\"-1\"\n    >{{ config.text | translate }}\n  </a>\n</ng-container>\n<ng-container *ngIf=\"config.routerLink\">\n  <a\n    type=\"button\"\n    tabindex=\"-1\"\n    [routerLink]=\"config.routerLink\"\n    >{{ config.text | translate }}\n  </a>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-breadcrumb-link', template: "<ng-container *ngIf=\"config.href\">\n  <a\n    [href]=\"config.href\"\n    tabindex=\"-1\"\n    >{{ config.text | translate }}\n  </a>\n</ng-container>\n<ng-container *ngIf=\"config.routerLink\">\n  <a\n    type=\"button\"\n    tabindex=\"-1\"\n    [routerLink]=\"config.routerLink\"\n    >{{ config.text | translate }}\n  </a>\n</ng-container>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }] } });

/**
 * @see https://stackblitz.com/edit/angular-mutationobserver-example?file=app%2Fapp.module.ts,app%2Fdom-change.directive.ts,app%2Fapp.component.ts
 */
class DomChangeDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.domChange = new EventEmitter();
        const element = this.elementRef.nativeElement;
        this.changes = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => this.domChange.emit(mutation));
        });
        this.changes.observe(element, {
            attributes: true,
            childList: true,
            characterData: true
        });
    }
    ngOnDestroy() {
        this.changes.disconnect();
    }
}
DomChangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DomChangeDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
DomChangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: DomChangeDirective, selector: "[domChange]", outputs: { domChange: "domChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DomChangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domChange]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { domChange: [{
                type: Output
            }] } });

var LinkType;
(function (LinkType) {
    LinkType["href"] = "href";
    LinkType["routerLink"] = "routerLink";
})(LinkType || (LinkType = {}));
class BreadcrumbComponent {
    constructor(translate, standalone, renderer, changeRef) {
        var _a;
        this.translate = translate;
        this.standalone = standalone;
        this.renderer = renderer;
        this.changeRef = changeRef;
        this.config = {
            id: '',
            baseUrlKey: '',
            type: 'href'
        };
        this.id = '';
        this.baseUrl = '';
        this.separatorIcon = {
            id: 'breadcrumb_separator',
            category: 'custom',
            size: (_a = this.config) === null || _a === void 0 ? void 0 : _a.size,
            icon: {
                class: 'fa-light fa-ellipsis',
                color: 'var(--text-primary)'
            },
            ariaLabel: ''
        };
        this.displayOverflow = false;
        this.maxHeight = 0; // Max height of element in px
        this.isChildOverflow = false;
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.id && this.id !== '')
            this.config.id = this.id;
        if (this.size)
            this.config.size = this.size;
        if (this.type)
            this.config.type = this.type;
        if (this.baseUrlKey)
            this.config.baseUrlKey = this.baseUrlKey;
        this.createLinks();
        this.separatorIcon.size = this.config.size;
        this.maxHeight = this.getMaxHeight();
        this.separatorIcon.ariaLabel = this.translate.instant('ACC_DEMO.BREADCRUMB_COMPONENT.ADDITIONAL_LINKS');
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.createOverflows();
            this.isChildOverflow = this.getChildOverflow();
            this.changeRef.detectChanges();
        }, 500);
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        // If changing size, update max height
        if (!changes['config'].firstChange &&
            changes['config'].currentValue.size !==
                changes['config'].previousValue.size) {
            this.maxHeight = this.getMaxHeight();
        }
        // If changing link type, recreate all links
        if (!changes['config'].firstChange &&
            changes['config'].currentValue.type !==
                changes['config'].previousValue.type) {
            this.createLinks();
        }
        if (((_a = this.config) === null || _a === void 0 ? void 0 : _a.links) && ((_b = this.config) === null || _b === void 0 ? void 0 : _b.links.length) > 0) {
            if (this.config.type == 'routerLink') {
                (_c = this.config) === null || _c === void 0 ? void 0 : _c.links.forEach((link) => {
                    delete link.href;
                });
            }
            else {
                (_d = this.config) === null || _d === void 0 ? void 0 : _d.links.forEach((link) => {
                    delete link.routerLink;
                });
            }
        }
        this.separatorIcon.size = this.config.size;
    }
    /**
     * Create href or routerLinks
     */
    createLinks() {
        var _a, _b, _c;
        this.baseUrl = this.standalone.getBaseUrl('', this.config.baseUrlKey);
        if (this.config.links && this.config.links.length > 1) {
            let prev;
            (_a = this.config) === null || _a === void 0 ? void 0 : _a.links.forEach((link, i) => {
                if (i === 0) {
                    link[this.config.type] = this.baseUrl;
                    prev = link[this.config.type];
                }
                else if (link.linkKey) {
                    link[this.config.type] =
                        prev + this.translate.instant(link.linkKey) + '/';
                    prev = link[this.config.type];
                }
                link.overflow = false;
            });
            this.overflowLinks = (_b = this.config) === null || _b === void 0 ? void 0 : _b.links.filter((link) => link.overflow);
            this.normalLinks = (_c = this.config) === null || _c === void 0 ? void 0 : _c.links.filter((link) => !link.overflow);
        }
    }
    getMaxHeight() {
        const containerElement = this.divRef && this.divRef.nativeElement;
        if (containerElement == undefined)
            return 0;
        const tempElement = this.renderer.createElement('p');
        const text = this.renderer.createText('Test');
        this.renderer.appendChild(tempElement, text);
        this.renderer.addClass(tempElement, 'breadcrumb-child');
        this.renderer.appendChild(containerElement, tempElement);
        const maxHeight = tempElement.offsetHeight;
        this.renderer.removeChild(containerElement, tempElement);
        // Calculate based on elipsis icon size to p tag ratio
        return maxHeight * 1.375;
    }
    createOverflows() {
        var _a, _b, _c, _d;
        if (this.divRef &&
            ((_a = this.divRef) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight) <= this.maxHeight)
            return;
        if (this.config.links && this.config.links.length > 1) {
            const linksLength = this.config.links.length;
            const overflow = (_b = this.config) === null || _b === void 0 ? void 0 : _b.links.find((link, i) => i > 0 && i < linksLength - 1 && !link.overflow);
            if (overflow)
                overflow.overflow = true;
            this.overflowLinks = (_c = this.config) === null || _c === void 0 ? void 0 : _c.links.filter((link) => link.overflow);
            this.normalLinks = (_d = this.config) === null || _d === void 0 ? void 0 : _d.links.filter((link) => !link.overflow);
        }
    }
    onResize(event) {
        this.overflowLinks = [];
        this.normalLinks = [];
        this.createLinks();
        this.createOverflows();
        this.isChildOverflow = this.getChildOverflow();
    }
    flipOverflow(buttonId) {
        this.displayOverflow = !this.displayOverflow;
    }
    // Check if child page title overflows to 2nd line
    getChildOverflow() {
        if (this.childRef) {
            return (this.childRef.nativeElement.offsetWidth <
                this.childRef.nativeElement.scrollWidth);
        }
        else {
            return false;
        }
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbComponent, deps: [{ token: i1.TranslateService }, { token: StandAloneFunctions }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: BreadcrumbComponent, selector: "ircc-cl-lib-breadcrumb", inputs: { config: "config", id: "id", size: "size", type: "type", baseUrlKey: "baseUrlKey" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "divRef", first: true, predicate: ["breadcrumb_div"], descendants: true }, { propertyName: "childRef", first: true, predicate: ["breadcrumb_child"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"{{ config.size }}\"\n  (domChange)=\"createOverflows()\"\n  #breadcrumb_div\n>\n  <ng-container\n    *ngFor=\"let link of normalLinks; first as first; last as last; index as i\"\n  >\n    <ng-container *ngIf=\"first\">\n      <ircc-cl-lib-breadcrumb-link\n        tabindex=\"0\"\n        class=\"breadcrumb-root\"\n        [config]=\"link\"\n      ></ircc-cl-lib-breadcrumb-link>\n      <div\n        *ngIf=\"overflowLinks && overflowLinks.length > 0\"\n        class=\"overflow-container\"\n      >\n        <ircc-cl-lib-icon\n          [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n          id=\"overflow\"\n        ></ircc-cl-lib-icon>\n        <ircc-cl-lib-icon-button\n          (clickEvent)=\"flipOverflow($event)\"\n          class=\"elipsis-icon\"\n          [config]=\"separatorIcon\"\n        ></ircc-cl-lib-icon-button>\n        <div\n          class=\"overflow-menu\"\n          *ngIf=\"displayOverflow && overflowLinks && overflowLinks.length > 0\"\n        >\n          <ng-container *ngFor=\"let link of overflowLinks\">\n            <ircc-cl-lib-breadcrumb-link\n              tabindex=\"0\"\n              class=\"breadcrumb-overflow\"\n              [config]=\"link\"\n            ></ircc-cl-lib-breadcrumb-link>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"!first && !last\">\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n      ></ircc-cl-lib-icon>\n      <ircc-cl-lib-breadcrumb-link\n        tabindex=\"0\"\n        class=\"breadcrumb-item\"\n        [config]=\"link\"\n      ></ircc-cl-lib-breadcrumb-link>\n    </ng-container>\n    <ng-container *ngIf=\"last\">\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n        class=\"\"\n      ></ircc-cl-lib-icon>\n      <p\n        class=\"breadcrumb-child\"\n        #breadcrumb_child\n      >\n        <span *ngIf=\"!isChildOverflow\">{{ link.text }}</span>\n        <abbr\n          *ngIf=\"isChildOverflow\"\n          [title]=\"link.text\"\n          >{{ link.text }}</abbr\n        >\n      </p>\n    </ng-container>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: BreadcrumbLinkComponent, selector: "ircc-cl-lib-breadcrumb-link", inputs: ["config"] }, { kind: "component", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "component", type: IconButtonComponent, selector: "ircc-cl-lib-icon-button", inputs: ["config", "id", "category", "size", "ariaLabel", "disabled", "icon"], outputs: ["clickEvent"] }, { kind: "directive", type: DomChangeDirective, selector: "[domChange]", outputs: ["domChange"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-breadcrumb', template: "<div\n  class=\"{{ config.size }}\"\n  (domChange)=\"createOverflows()\"\n  #breadcrumb_div\n>\n  <ng-container\n    *ngFor=\"let link of normalLinks; first as first; last as last; index as i\"\n  >\n    <ng-container *ngIf=\"first\">\n      <ircc-cl-lib-breadcrumb-link\n        tabindex=\"0\"\n        class=\"breadcrumb-root\"\n        [config]=\"link\"\n      ></ircc-cl-lib-breadcrumb-link>\n      <div\n        *ngIf=\"overflowLinks && overflowLinks.length > 0\"\n        class=\"overflow-container\"\n      >\n        <ircc-cl-lib-icon\n          [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n          id=\"overflow\"\n        ></ircc-cl-lib-icon>\n        <ircc-cl-lib-icon-button\n          (clickEvent)=\"flipOverflow($event)\"\n          class=\"elipsis-icon\"\n          [config]=\"separatorIcon\"\n        ></ircc-cl-lib-icon-button>\n        <div\n          class=\"overflow-menu\"\n          *ngIf=\"displayOverflow && overflowLinks && overflowLinks.length > 0\"\n        >\n          <ng-container *ngFor=\"let link of overflowLinks\">\n            <ircc-cl-lib-breadcrumb-link\n              tabindex=\"0\"\n              class=\"breadcrumb-overflow\"\n              [config]=\"link\"\n            ></ircc-cl-lib-breadcrumb-link>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"!first && !last\">\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n      ></ircc-cl-lib-icon>\n      <ircc-cl-lib-breadcrumb-link\n        tabindex=\"0\"\n        class=\"breadcrumb-item\"\n        [config]=\"link\"\n      ></ircc-cl-lib-breadcrumb-link>\n    </ng-container>\n    <ng-container *ngIf=\"last\">\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n        class=\"\"\n      ></ircc-cl-lib-icon>\n      <p\n        class=\"breadcrumb-child\"\n        #breadcrumb_child\n      >\n        <span *ngIf=\"!isChildOverflow\">{{ link.text }}</span>\n        <abbr\n          *ngIf=\"isChildOverflow\"\n          [title]=\"link.text\"\n          >{{ link.text }}</abbr\n        >\n      </p>\n    </ng-container>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: StandAloneFunctions }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], baseUrlKey: [{
                type: Input
            }], divRef: [{
                type: ViewChild,
                args: ['breadcrumb_div', { static: false }]
            }], childRef: [{
                type: ViewChild,
                args: ['breadcrumb_child', { static: false }]
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

var IndicatorType;
(function (IndicatorType) {
    IndicatorType[IndicatorType["dot"] = 0] = "dot";
    IndicatorType[IndicatorType["text"] = 1] = "text";
    IndicatorType[IndicatorType["number"] = 2] = "number";
})(IndicatorType || (IndicatorType = {}));
var IndicatorTreatment;
(function (IndicatorTreatment) {
    IndicatorTreatment["strong"] = "strong";
    IndicatorTreatment["weak"] = "weak";
})(IndicatorTreatment || (IndicatorTreatment = {}));
var IndicatorPurpose;
(function (IndicatorPurpose) {
    IndicatorPurpose["status"] = "status";
    IndicatorPurpose["palette"] = "palette";
})(IndicatorPurpose || (IndicatorPurpose = {}));
var IndicatorStatus;
(function (IndicatorStatus) {
    IndicatorStatus["information"] = "information";
    IndicatorStatus["warning"] = "warning";
    IndicatorStatus["critical"] = "critical";
    IndicatorStatus["neutral"] = "neutral";
    IndicatorStatus["primary"] = "primary";
    IndicatorStatus["success"] = "success";
})(IndicatorStatus || (IndicatorStatus = {}));
var IndicatorPalette;
(function (IndicatorPalette) {
    IndicatorPalette[IndicatorPalette["teal"] = 0] = "teal";
    IndicatorPalette[IndicatorPalette["orange"] = 1] = "orange";
    IndicatorPalette[IndicatorPalette["red"] = 2] = "red";
    IndicatorPalette[IndicatorPalette["grey"] = 3] = "grey";
    IndicatorPalette[IndicatorPalette["blue"] = 4] = "blue";
    IndicatorPalette[IndicatorPalette["green"] = 5] = "green";
    IndicatorPalette[IndicatorPalette["purple"] = 6] = "purple";
    IndicatorPalette[IndicatorPalette["navy"] = 7] = "navy";
})(IndicatorPalette || (IndicatorPalette = {}));
class IndicatorComponent {
    constructor() {
        this.config = {
            type: 'text',
            category: IndicatorTreatment.weak,
            purpose: IndicatorPurpose.status,
            tabIndex: 0
        };
        this.tabIndex = undefined;
        this.EIndicatorStatus = IndicatorStatus;
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.size)
            this.config.size = this.size;
        if (this.type)
            this.config.type = this.type;
        if (this.icon)
            this.config.icon = this.icon;
        if (this.category)
            this.config.category = this.category;
        if (this.purpose)
            this.config.purpose = this.purpose;
        if (this.status)
            this.config.status = this.status;
        if (this.palette)
            this.config.palette = this.palette;
        if (this.ariaLabel)
            this.config.ariaLabel = this.ariaLabel;
        this.checkLabelRounded();
        this.checkNumber();
        this.tabIndex !== undefined
            ? (this.config.tabIndex = this.tabIndex)
            : undefined;
    }
    ngAfterViewInit() {
        setTimeout(() => this.checkLabelLength());
    }
    ngOnChanges(changes) {
        this.checkNumber();
        this.checkLabelRounded();
        this.checkLabelLength();
        setTimeout(() => this.checkLabelLength());
    }
    // Check if number exceeds 99
    checkNumber() {
        var _a;
        if (this.config.type === 'number' &&
            ((_a = this.config) === null || _a === void 0 ? void 0 : _a.label) &&
            this.config.label > 99) {
            this.config.label = '99+';
        }
    }
    // If label only have 1 character, it should be rounded
    checkLabelRounded() {
        var _a;
        if (typeof ((_a = this.config) === null || _a === void 0 ? void 0 : _a.label) === 'string') {
            this.rounded = this.config.label.length == 1 && !this.config.icon;
        }
    }
    // Check if div exceeds 200px
    checkLabelLength() {
        var _a, _b, _c, _d;
        if (this.config.type !== 'text')
            return;
        // Max 200px - padding 8px x2
        this.abbr = ((((_b = (_a = this.label) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.offsetWidth) &&
            ((_d = (_c = this.label) === null || _c === void 0 ? void 0 : _c.nativeElement) === null || _d === void 0 ? void 0 : _d.offsetWidth) > 184));
    }
}
IndicatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IndicatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IndicatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: IndicatorComponent, selector: "ircc-cl-lib-indicator", inputs: { config: "config", size: "size", type: "type", icon: "icon", category: "category", purpose: "purpose", status: "status", palette: "palette", ariaLabel: "ariaLabel", tabIndex: "tabIndex" }, viewQueries: [{ propertyName: "label", first: true, predicate: ["label"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div\n  [ngClass]=\"['indicator-container', config.size ?? '']\"\n  [attr.aria-label]=\"\n    (config.ariaLabel ?? 'Indicator.Heading' | translate) +\n    ' ' +\n    (config.label ?? '')\n  \"\n  [tabindex]=\"config.tabIndex\"\n>\n  <div\n    *ngIf=\"config.type === 'text' || config.type === 'number'\"\n    #label\n    [ngClass]=\"[\n      config.type,\n      config.category,\n      config.purpose === 'status'\n        ? EIndicatorStatus[config.status ?? 'information']\n        : '',\n      config.purpose === 'palette' ? config.palette : '',\n      rounded ? 'rounded' : '',\n      config.label === '99+' ? 'num-lg' : '',\n      abbr ? 'abbr' : ''\n    ]\"\n  >\n    <ircc-cl-lib-icon\n      *ngIf=\"config.type === 'text' && config?.icon\"\n      [config]=\"{ FA_keywords: config.icon }\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n    <ng-container *ngIf=\"abbr; else nonAbbr\">\n      <span class=\"abbr\"\n        ><abbr [title]=\"config.label\">{{ config.label }}</abbr></span\n      >\n    </ng-container>\n    <ng-template #nonAbbr>\n      <span>{{ config.label }}</span>\n    </ng-template>\n  </div>\n  <span\n    *ngIf=\"config.type === 'dot'\"\n    [ngClass]=\"[\n      config.icon ? 'dot-icon' : '',\n      config.type,\n      config.category,\n      config.purpose === 'status'\n        ? EIndicatorStatus[config.status ?? 'information']\n        : '',\n      config.purpose === 'palette' ? config.palette : ''\n    ]\"\n  >\n    <ircc-cl-lib-icon\n      *ngIf=\"config?.icon\"\n      [config]=\"{ FA_keywords: config.icon }\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n  </span>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IndicatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-indicator', template: "<div\n  [ngClass]=\"['indicator-container', config.size ?? '']\"\n  [attr.aria-label]=\"\n    (config.ariaLabel ?? 'Indicator.Heading' | translate) +\n    ' ' +\n    (config.label ?? '')\n  \"\n  [tabindex]=\"config.tabIndex\"\n>\n  <div\n    *ngIf=\"config.type === 'text' || config.type === 'number'\"\n    #label\n    [ngClass]=\"[\n      config.type,\n      config.category,\n      config.purpose === 'status'\n        ? EIndicatorStatus[config.status ?? 'information']\n        : '',\n      config.purpose === 'palette' ? config.palette : '',\n      rounded ? 'rounded' : '',\n      config.label === '99+' ? 'num-lg' : '',\n      abbr ? 'abbr' : ''\n    ]\"\n  >\n    <ircc-cl-lib-icon\n      *ngIf=\"config.type === 'text' && config?.icon\"\n      [config]=\"{ FA_keywords: config.icon }\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n    <ng-container *ngIf=\"abbr; else nonAbbr\">\n      <span class=\"abbr\"\n        ><abbr [title]=\"config.label\">{{ config.label }}</abbr></span\n      >\n    </ng-container>\n    <ng-template #nonAbbr>\n      <span>{{ config.label }}</span>\n    </ng-template>\n  </div>\n  <span\n    *ngIf=\"config.type === 'dot'\"\n    [ngClass]=\"[\n      config.icon ? 'dot-icon' : '',\n      config.type,\n      config.category,\n      config.purpose === 'status'\n        ? EIndicatorStatus[config.status ?? 'information']\n        : '',\n      config.purpose === 'palette' ? config.palette : ''\n    ]\"\n  >\n    <ircc-cl-lib-icon\n      *ngIf=\"config?.icon\"\n      [config]=\"{ FA_keywords: config.icon }\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n  </span>\n</div>\n" }]
        }], propDecorators: { config: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], icon: [{
                type: Input
            }], category: [{
                type: Input
            }], purpose: [{
                type: Input
            }], status: [{
                type: Input
            }], palette: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], label: [{
                type: ViewChild,
                args: ['label', { static: false }]
            }] } });

const SPINNER_LABELS_EN = ['Loading', 'Success', 'Error'];
const SPINNER_LABELS_FR = ['Chargement', 'Succès', 'Erreur'];
var SpinnerType;
(function (SpinnerType) {
    SpinnerType["active"] = "active";
    SpinnerType["success"] = "success";
    SpinnerType["critical"] = "critical";
})(SpinnerType || (SpinnerType = {}));
class SpinnerComponent {
    constructor(translate) {
        this.translate = translate;
        this.text = [];
        this.config = {
            id: ''
        };
        this.id = '';
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.id !== '')
            this.config.id = this.id;
        if (this.type)
            this.config.type = this.type;
        if (this.size)
            this.config.size = this.size;
        if (this.orientation)
            this.config.orientation = this.orientation;
        if (this.label !== '')
            this.config.label = this.label;
        if (this.description !== '')
            this.config.description = this.description;
        if (!this.config.orientation)
            this.config.orientation = 'horizontal';
        if (!this.config.size)
            this.config.size = 'large';
        this.removeVertical();
        this.setTypeTitle();
        this.translate.onLangChange.subscribe(() => {
            this.setTypeTitle();
        });
    }
    ngOnChanges() {
        this.setTypeTitle();
    }
    setTypeTitle() {
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            this.text = SPINNER_LABELS_EN;
        }
        else {
            this.text = SPINNER_LABELS_FR;
        }
    }
    removeVertical() {
        if (this.config.size !== 'large' &&
            this.config.orientation === 'vertical') {
            this.config.orientation = 'horizontal';
        }
    }
    getSuccessTitle() {
        return (this.config.label || this.config.description) ? '' : this.text[1];
    }
    getErrorTitle() {
        return (this.config.label || this.config.description) ? '' : this.text[2];
    }
}
SpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SpinnerComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
SpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: SpinnerComponent, selector: "ircc-cl-lib-spinner", inputs: { config: "config", id: "id", type: "type", size: "size", orientation: "orientation", label: "label", description: "description" }, usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"{{ config.size }} {{ config.orientation }}\"\n  id=\"{{ config.id }}\"\n  aria-live=\"polite\"\n>\n  <div\n    class=\"spinner-container\"\n    [ngClass]=\"{\n      active: config.type === 'active',\n      success: config.type === 'success',\n      critical: config.type === 'critical'\n    }\"\n  >\n    <ng-container [ngSwitch]=\"config.type\">\n      <div\n        *ngSwitchCase=\"'success'\"\n        class=\"container\"\n      >\n        <div class=\"icon-div\">\n          <ircc-cl-lib-icon\n            [config]=\"{\n              FA_keywords: 'fa-check fa-regular',\n              ariaLabel: getSuccessTitle()\n            }\"\n            class=\"spinner-icon\"\n          ></ircc-cl-lib-icon>\n        </div>\n        <div class=\"text\">\n          <div\n            class=\"label\"\n            [innerHTML]=\"config.label\"\n          ></div>\n          <div\n            *ngIf=\"config.size === 'large'\"\n            class=\"desc\"\n            [innerHTML]=\"config.description\"\n          ></div>\n        </div>\n      </div>\n      <div\n        *ngSwitchCase=\"'critical'\"\n        class=\"container\"\n      >\n        <div class=\"icon-div\">\n          <ircc-cl-lib-icon\n            [config]=\"{\n              FA_keywords: 'fa-exclamation fa-regular',\n              ariaLabel: getErrorTitle()\n            }\"\n            class=\"spinner-icon\"\n          ></ircc-cl-lib-icon>\n        </div>\n        <div class=\"text\">\n          <div\n            class=\"label\"\n            [innerHTML]=\"config.label\"\n          ></div>\n          <div\n            *ngIf=\"config.size === 'large'\"\n            class=\"desc\"\n            [innerHTML]=\"config.description\"\n          ></div>\n        </div>\n      </div>\n      <div\n        *ngSwitchDefault\n        class=\"container\"\n      >\n        <div class=\"icon-div\">\n          <img\n            src=\"./src/assets/icons/spinner-states.svg\"\n            [attr.alt]=\"config.label || config.description ? '' : text[0]\"\n            class=\"animated-icon loading-icon\"\n          />\n        </div>\n        <div class=\"text\">\n          <div\n            class=\"label\"\n            [innerHTML]=\"config.label\"\n          ></div>\n          <div\n            *ngIf=\"config.size === 'large'\"\n            class=\"desc\"\n            [innerHTML]=\"config.description\"\n          ></div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-spinner', template: "<div\n  class=\"{{ config.size }} {{ config.orientation }}\"\n  id=\"{{ config.id }}\"\n  aria-live=\"polite\"\n>\n  <div\n    class=\"spinner-container\"\n    [ngClass]=\"{\n      active: config.type === 'active',\n      success: config.type === 'success',\n      critical: config.type === 'critical'\n    }\"\n  >\n    <ng-container [ngSwitch]=\"config.type\">\n      <div\n        *ngSwitchCase=\"'success'\"\n        class=\"container\"\n      >\n        <div class=\"icon-div\">\n          <ircc-cl-lib-icon\n            [config]=\"{\n              FA_keywords: 'fa-check fa-regular',\n              ariaLabel: getSuccessTitle()\n            }\"\n            class=\"spinner-icon\"\n          ></ircc-cl-lib-icon>\n        </div>\n        <div class=\"text\">\n          <div\n            class=\"label\"\n            [innerHTML]=\"config.label\"\n          ></div>\n          <div\n            *ngIf=\"config.size === 'large'\"\n            class=\"desc\"\n            [innerHTML]=\"config.description\"\n          ></div>\n        </div>\n      </div>\n      <div\n        *ngSwitchCase=\"'critical'\"\n        class=\"container\"\n      >\n        <div class=\"icon-div\">\n          <ircc-cl-lib-icon\n            [config]=\"{\n              FA_keywords: 'fa-exclamation fa-regular',\n              ariaLabel: getErrorTitle()\n            }\"\n            class=\"spinner-icon\"\n          ></ircc-cl-lib-icon>\n        </div>\n        <div class=\"text\">\n          <div\n            class=\"label\"\n            [innerHTML]=\"config.label\"\n          ></div>\n          <div\n            *ngIf=\"config.size === 'large'\"\n            class=\"desc\"\n            [innerHTML]=\"config.description\"\n          ></div>\n        </div>\n      </div>\n      <div\n        *ngSwitchDefault\n        class=\"container\"\n      >\n        <div class=\"icon-div\">\n          <img\n            src=\"./src/assets/icons/spinner-states.svg\"\n            [attr.alt]=\"config.label || config.description ? '' : text[0]\"\n            class=\"animated-icon loading-icon\"\n          />\n        </div>\n        <div class=\"text\">\n          <div\n            class=\"label\"\n            [innerHTML]=\"config.label\"\n          ></div>\n          <div\n            *ngIf=\"config.size === 'large'\"\n            class=\"desc\"\n            [innerHTML]=\"config.description\"\n          ></div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], orientation: [{
                type: Input
            }], label: [{
                type: Input
            }], description: [{
                type: Input
            }] } });

const IrccDsSharedComponents = [
    ButtonComponent,
    BreadcrumbComponent,
    BreadcrumbLinkComponent,
    IconComponent,
    IconButtonComponent,
    IndicatorComponent,
    TabsComponent,
    ProgressTagsComponent,
    DropdownComponent,
    LabelComponent,
    ProgressTagsComponent,
    ProgressIndicatorComponent,
    SpinnerComponent,
    FlyoutComponent,
    FlyoutOptionComponent,
];
class IrccDsAngularComponentsSharedModule {
}
IrccDsAngularComponentsSharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularComponentsSharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularComponentsSharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularComponentsSharedModule, declarations: [ButtonComponent,
        BreadcrumbComponent,
        BreadcrumbLinkComponent,
        IconComponent,
        IconButtonComponent,
        IndicatorComponent,
        TabsComponent,
        ProgressTagsComponent,
        DropdownComponent,
        LabelComponent,
        ProgressTagsComponent,
        ProgressIndicatorComponent,
        SpinnerComponent,
        FlyoutComponent,
        FlyoutOptionComponent, DomChangeDirective], imports: [CommonModule, TranslateModule, RouterModule], exports: [CommonModule,
        TranslateModule,
        RouterModule, ButtonComponent,
        BreadcrumbComponent,
        BreadcrumbLinkComponent,
        IconComponent,
        IconButtonComponent,
        IndicatorComponent,
        TabsComponent,
        ProgressTagsComponent,
        DropdownComponent,
        LabelComponent,
        ProgressTagsComponent,
        ProgressIndicatorComponent,
        SpinnerComponent,
        FlyoutComponent,
        FlyoutOptionComponent] });
IrccDsAngularComponentsSharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularComponentsSharedModule, imports: [CommonModule, TranslateModule, RouterModule, CommonModule,
        TranslateModule,
        RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularComponentsSharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...IrccDsSharedComponents, DomChangeDirective],
                    imports: [CommonModule, TranslateModule, RouterModule],
                    exports: [
                        CommonModule,
                        TranslateModule,
                        RouterModule,
                        ...IrccDsSharedComponents
                    ]
                }]
        }] });

class IrccDsAngularBannerModule {
}
IrccDsAngularBannerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularBannerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularBannerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularBannerModule, declarations: [BannerComponent], imports: [IrccDsAngularComponentsSharedModule, CommonModule, TranslateModule], exports: [BannerComponent] });
IrccDsAngularBannerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularBannerModule, imports: [IrccDsAngularComponentsSharedModule, CommonModule, TranslateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularBannerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BannerComponent],
                    imports: [IrccDsAngularComponentsSharedModule, CommonModule, TranslateModule],
                    exports: [BannerComponent]
                }]
        }] });

class ErrorComponent {
    constructor() { }
    ngOnInit() {
        //Initial null and override check:
        if (!this.config)
            this.config = {
                id: '',
                errorLOV: ''
            };
        this.portInputValues();
    }
    ngOnChanges(changes) {
        this.portInputValues();
    }
    portInputValues() {
        if (this.config) {
            if (this.id)
                this.config.id = this.id;
            if (this.errorLOV)
                this.config.errorLOV = this.errorLOV;
            if (this.icon)
                this.config.icon = this.icon;
            if (this.size)
                this.config.size = this.size;
        }
    }
}
ErrorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ErrorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ErrorComponent, selector: "ircc-cl-lib-error", inputs: { config: "config", id: "id", errorLOV: "errorLOV", icon: "icon", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<div\n  id=\"{{ config?.id }}\"\n  [ngClass]=\"['errorContainer', config?.size ?? '']\"\n>\n  <i\n    *ngIf=\"config?.id?.endsWith('error0')\"\n    [ngClass]=\"\n      config?.icon !== undefined\n        ? config?.icon?.class\n        : 'fa-light fa-circle-exclamation'\n    \"\n    class=\"errorIcon\"\n  ></i>\n  <p\n    [ngClass]=\"{ additionalError: !config?.id?.endsWith('error0') }\"\n    class=\"errorText\"\n  >\n    {{ config?.errorLOV || '' | translate }}\n  </p>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-error', template: "<div\n  id=\"{{ config?.id }}\"\n  [ngClass]=\"['errorContainer', config?.size ?? '']\"\n>\n  <i\n    *ngIf=\"config?.id?.endsWith('error0')\"\n    [ngClass]=\"\n      config?.icon !== undefined\n        ? config?.icon?.class\n        : 'fa-light fa-circle-exclamation'\n    \"\n    class=\"errorIcon\"\n  ></i>\n  <p\n    [ngClass]=\"{ additionalError: !config?.id?.endsWith('error0') }\"\n    class=\"errorText\"\n  >\n    {{ config?.errorLOV || '' | translate }}\n  </p>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], errorLOV: [{
                type: Input
            }], icon: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

var InputTypes;
(function (InputTypes) {
    InputTypes["text"] = "text";
    InputTypes["password"] = "password";
})(InputTypes || (InputTypes = {}));
const ARIA_TEXT = {
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
class InputComponent {
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
        var _a;
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
            var _a;
            this.disabled = (_a = this.config.formGroup.get(this.config.id)) === null || _a === void 0 ? void 0 : _a.disabled;
        });
        if (this.config.errorMessages) {
            this.errorIds = this.standAloneFunctions.getErrorIds(this.config.formGroup, this.config.id, this.config.errorMessages);
        }
        //Get the error text when the formControl value changes
        (_a = this.config.formGroup.get(this.config.id)) === null || _a === void 0 ? void 0 : _a.statusChanges.subscribe(() => {
            this.getAriaErrorText();
        });
    }
    /**
     * Get the aria error text for the label
     */
    getAriaErrorText() {
        var _a;
        if (this.config.errorMessages) {
            (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.markAsDirty();
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
        var _a;
        event.preventDefault();
        (_a = this.config.formGroup.get(this.config.id)) === null || _a === void 0 ? void 0 : _a.markAsTouched();
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
        var _a, _b, _c;
        return ((_c = (((_a = this.config.formGroup.get(this.config.id)) === null || _a === void 0 ? void 0 : _a.touched) &&
            ((_b = this.config.formGroup.get(this.config.id)) === null || _b === void 0 ? void 0 : _b.invalid))) !== null && _c !== void 0 ? _c : false);
    }
}
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: InputComponent, deps: [{ token: StandAloneFunctions }, { token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: InputComponent, selector: "ircc-cl-lib-input", inputs: { config: "config", id: "id", formGroup: "formGroup", type: "type", size: "size", label: "label", hint: "hint", desc: "desc", required: "required", placeholder: "placeholder", errorMessages: "errorMessages" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ], usesOnChanges: true, ngImport: i0, template: "<div\n  id=\"{{ config.id + '_container' }}\"\n  class=\"input-wrapper\"\n>\n  <form [formGroup]=\"config.formGroup\">\n    <div\n      class=\"input-container\"\n      [ngClass]=\"config.size\"\n    >\n      <div class=\"input-text\">\n        <ircc-cl-lib-label\n          [config]=\"labelConfig\"\n          [attr.size]=\"config.size\"\n        ></ircc-cl-lib-label>\n        <div\n          class=\"input-content-area\"\n          [ngClass]=\"focusState === true ? 'focus' : ''\"\n        >\n          <!-- ngModel doesn't mind undefined values, apparently\n          TODO: Should probably change the (keyup) to (onblur) -->\n          <input\n            (blur)=\"onTouchedLabel()\"\n            name=\"{{ config.id }}\"\n            class=\"input-field\"\n            placeholder=\"{{ config.placeholder || '' | translate }}\"\n            tabindex=\"0\"\n            [ngClass]=\"\n              config.type === 'password'\n                ? 'input-password-field'\n                : 'input-text-field'\n            \"\n            [type]=\"typeControl\"\n            [id]=\"config.id\"\n            [formControlName]=\"config.id\"\n            (keydown.enter)=\"enterEvent($event)\"\n            [attr.aria-invalid]=\"formControl?.invalid\"\n            [attr.aria-live]=\"'off'\"\n            [attr.aria-label]=\"\n              formControl?.invalid && touched\n                ? (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate) +\n                  ' ' +\n                  (errorStubText + ': ' + errorAria)\n                : (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate)\n            \"\n          />\n\n          <button\n            *ngIf=\"config.type === 'password'\"\n            role=\"button\"\n            category=\"plain\"\n            tabindex=\"0\"\n            class=\"passwordIcon\"\n            (click)=\"hideShow()\"\n            [disabled]=\"disabled\"\n            attr.aria-label={{btnAriaLabel}}\n            aria-live=\"polite\"\n          >\n            <div\n              *ngIf=\"showPassword\"\n              role=\"img\"\n              attr.aria-label=\"{{btnAriaLabelHide}}\"\n            >\n              <i class=\"fa-solid fa-eye-slash\"></i>\n            </div>\n            <div\n              *ngIf=\"!showPassword\"\n              role=\"img\"\n              attr.aria-label=\"{{btnAriaLabelShow}}\"\n            >\n              <i class=\"fa-solid fa-eye\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div aria-live=\"polite\">\n        <div\n          *ngIf=\"formControl?.touched && formControl?.invalid\"\n          class=\"check-error\"\n        >\n          <span class=\"sr-only\">{{\n            errorStubText + ': ' + (config.label || '' | translate) + ': '\n          }}</span>\n          <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n            <div\n              *ngIf=\"formControl?.errors?.[errors.key]\"\n              class=\"radio-errors\"\n            >\n              <ircc-cl-lib-error\n                [id]=\"errors.id\"\n                [errorLOV]=\"errors.errorLOV\"\n              ></ircc-cl-lib-error>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => InputComponent),
                            multi: true
                        }
                    ], template: "<div\n  id=\"{{ config.id + '_container' }}\"\n  class=\"input-wrapper\"\n>\n  <form [formGroup]=\"config.formGroup\">\n    <div\n      class=\"input-container\"\n      [ngClass]=\"config.size\"\n    >\n      <div class=\"input-text\">\n        <ircc-cl-lib-label\n          [config]=\"labelConfig\"\n          [attr.size]=\"config.size\"\n        ></ircc-cl-lib-label>\n        <div\n          class=\"input-content-area\"\n          [ngClass]=\"focusState === true ? 'focus' : ''\"\n        >\n          <!-- ngModel doesn't mind undefined values, apparently\n          TODO: Should probably change the (keyup) to (onblur) -->\n          <input\n            (blur)=\"onTouchedLabel()\"\n            name=\"{{ config.id }}\"\n            class=\"input-field\"\n            placeholder=\"{{ config.placeholder || '' | translate }}\"\n            tabindex=\"0\"\n            [ngClass]=\"\n              config.type === 'password'\n                ? 'input-password-field'\n                : 'input-text-field'\n            \"\n            [type]=\"typeControl\"\n            [id]=\"config.id\"\n            [formControlName]=\"config.id\"\n            (keydown.enter)=\"enterEvent($event)\"\n            [attr.aria-invalid]=\"formControl?.invalid\"\n            [attr.aria-live]=\"'off'\"\n            [attr.aria-label]=\"\n              formControl?.invalid && touched\n                ? (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate) +\n                  ' ' +\n                  (errorStubText + ': ' + errorAria)\n                : (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate)\n            \"\n          />\n\n          <button\n            *ngIf=\"config.type === 'password'\"\n            role=\"button\"\n            category=\"plain\"\n            tabindex=\"0\"\n            class=\"passwordIcon\"\n            (click)=\"hideShow()\"\n            [disabled]=\"disabled\"\n            attr.aria-label={{btnAriaLabel}}\n            aria-live=\"polite\"\n          >\n            <div\n              *ngIf=\"showPassword\"\n              role=\"img\"\n              attr.aria-label=\"{{btnAriaLabelHide}}\"\n            >\n              <i class=\"fa-solid fa-eye-slash\"></i>\n            </div>\n            <div\n              *ngIf=\"!showPassword\"\n              role=\"img\"\n              attr.aria-label=\"{{btnAriaLabelShow}}\"\n            >\n              <i class=\"fa-solid fa-eye\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div aria-live=\"polite\">\n        <div\n          *ngIf=\"formControl?.touched && formControl?.invalid\"\n          class=\"check-error\"\n        >\n          <span class=\"sr-only\">{{\n            errorStubText + ': ' + (config.label || '' | translate) + ': '\n          }}</span>\n          <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n            <div\n              *ngIf=\"formControl?.errors?.[errors.key]\"\n              class=\"radio-errors\"\n            >\n              <ircc-cl-lib-error\n                [id]=\"errors.id\"\n                [errorLOV]=\"errors.errorLOV\"\n              ></ircc-cl-lib-error>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: StandAloneFunctions }, { type: i1.TranslateService }]; }, propDecorators: { config: [{
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

class RadioInputComponent {
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
        var _a;
        if (this.config.errorMessages) {
            (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.markAsDirty();
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
RadioInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RadioInputComponent, deps: [{ token: StandAloneFunctions }, { token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
RadioInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: RadioInputComponent, selector: "ircc-cl-lib-radio-input", inputs: { config: "config", id: "id", formGroup: "formGroup", size: "size", label: "label", desc: "desc", hint: "hint", required: "required", options: "options", disabled: "disabled", error: "error", validators: "validators", helpText: "helpText", errorMessages: "errorMessages" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => RadioInputComponent) //This allows the error state to be turned off and on again
        }
    ], usesOnChanges: true, ngImport: i0, template: "<form\n  [formGroup]=\"config.formGroup\"\n  [ngClass]=\"config.size\"\n>\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <div class=\"radio-buttons\">\n    <div\n      *ngFor=\"let option of config.options; let index = index\"\n      class=\"radio\"\n    >\n      <!-- TODO: See if we can remove the error state from here, since it is controlled by the formControl -->\n      <input\n        (blur)=\"touched = true\"\n        type=\"radio\"\n        value=\"{{ option.value || option.text }}\"\n        id=\"{{ config.id + index }}\"\n        (click)=\"standAloneFunctions.wasTouched(config.formGroup, config.id)\"\n        [formControlName]=\"config.id ? config.id : 'formControl'\"\n        [attr.disabled]=\"getDisabled(index)\"\n        [ngClass]=\"option?.sizeOverride ? option?.sizeOverride : config.size\"\n        [attr.aria-invalid]=\"formControl?.invalid\"\n        [attr.aria-live]=\"'off'\"\n        [attr.aria-label]=\"\n          formControl?.invalid && touched\n            ? (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (config.helpText || '' | translate) +\n              ' ' +\n              (option.text || '' | translate) +\n              ' ' +\n              (errorStubText + ': ' + errorAria)\n            : (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (config.helpText || '' | translate) +\n              ' ' +\n              (option.text || '' | translate)\n        \"\n      />\n      <label\n        for=\"{{ config.id + index }}\"\n        [ngClass]=\"\n          option?.sizeOverride\n            ? option?.sizeOverride + '_label'\n            : config.size + '_label'\n        \"\n        >{{ option.text || '' | translate }}</label\n      >\n    </div>\n  </div>\n  <div aria-live=\"polite\">\n    <ng-container *ngIf=\"formControl?.touched && formControl?.invalid\">\n      <span class=\"sr-only\">{{\n        errorStubText + ': ' + (config.label || '' | translate) + ': '\n      }}</span>\n      <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n        <div\n          *ngIf=\"formControl?.errors?.[errors.key]\"\n          class=\"radio-errors\"\n        >\n          <ircc-cl-lib-error\n            [id]=\"errors.id\"\n            [errorLOV]=\"errors.errorLOV\"\n            [size]=\"config.size\"\n          ></ircc-cl-lib-error>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</form>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RadioInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-radio-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(() => RadioInputComponent) //This allows the error state to be turned off and on again
                        }
                    ], template: "<form\n  [formGroup]=\"config.formGroup\"\n  [ngClass]=\"config.size\"\n>\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <div class=\"radio-buttons\">\n    <div\n      *ngFor=\"let option of config.options; let index = index\"\n      class=\"radio\"\n    >\n      <!-- TODO: See if we can remove the error state from here, since it is controlled by the formControl -->\n      <input\n        (blur)=\"touched = true\"\n        type=\"radio\"\n        value=\"{{ option.value || option.text }}\"\n        id=\"{{ config.id + index }}\"\n        (click)=\"standAloneFunctions.wasTouched(config.formGroup, config.id)\"\n        [formControlName]=\"config.id ? config.id : 'formControl'\"\n        [attr.disabled]=\"getDisabled(index)\"\n        [ngClass]=\"option?.sizeOverride ? option?.sizeOverride : config.size\"\n        [attr.aria-invalid]=\"formControl?.invalid\"\n        [attr.aria-live]=\"'off'\"\n        [attr.aria-label]=\"\n          formControl?.invalid && touched\n            ? (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (config.helpText || '' | translate) +\n              ' ' +\n              (option.text || '' | translate) +\n              ' ' +\n              (errorStubText + ': ' + errorAria)\n            : (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (config.helpText || '' | translate) +\n              ' ' +\n              (option.text || '' | translate)\n        \"\n      />\n      <label\n        for=\"{{ config.id + index }}\"\n        [ngClass]=\"\n          option?.sizeOverride\n            ? option?.sizeOverride + '_label'\n            : config.size + '_label'\n        \"\n        >{{ option.text || '' | translate }}</label\n      >\n    </div>\n  </div>\n  <div aria-live=\"polite\">\n    <ng-container *ngIf=\"formControl?.touched && formControl?.invalid\">\n      <span class=\"sr-only\">{{\n        errorStubText + ': ' + (config.label || '' | translate) + ': '\n      }}</span>\n      <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n        <div\n          *ngIf=\"formControl?.errors?.[errors.key]\"\n          class=\"radio-errors\"\n        >\n          <ircc-cl-lib-error\n            [id]=\"errors.id\"\n            [errorLOV]=\"errors.errorLOV\"\n            [size]=\"config.size\"\n          ></ircc-cl-lib-error>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: StandAloneFunctions }, { type: i1.TranslateService }]; }, propDecorators: { config: [{
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

class CheckboxComponent {
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
        var _a, _b;
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
        if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.size))
            this.config.size = DSSizes.large;
        if (this.config.errorMessages) {
            this.errorIds = this.standAloneFunctions.getErrorIds(this.config.formGroup, this.config.id, this.config.errorMessages);
        }
        //Get the error text when the formControl value changes
        (_b = this.config.formGroup.get(this.config.id)) === null || _b === void 0 ? void 0 : _b.statusChanges.subscribe(() => {
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
        var _a;
        if (this.config.errorMessages) {
            (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.markAsDirty();
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
        var _a, _b, _c;
        return ((_c = (((_a = this.config.formGroup.get(this.config.id)) === null || _a === void 0 ? void 0 : _a.touched) &&
            ((_b = this.config.formGroup.get(this.config.id)) === null || _b === void 0 ? void 0 : _b.invalid))) !== null && _c !== void 0 ? _c : false);
    }
}
CheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CheckboxComponent, deps: [{ token: StandAloneFunctions }, { token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
CheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: CheckboxComponent, selector: "ircc-cl-lib-checkbox", inputs: { config: "config", formGroup: "formGroup", id: "id", label: "label", required: "required", size: "size", mixed: "mixed", disableFocus: "disableFocus", inlineLabel: "inlineLabel", inlineLabelBold: "inlineLabelBold", helpText: "helpText", customErrorText: "customErrorText", desc: "desc", errorMessages: "errorMessages" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true
        }
    ], usesOnChanges: true, ngImport: i0, template: "<form\n  class=\"checkbox-container\"\n  [formGroup]=\"config.formGroup\"\n>\n  <div\n    class=\"checkbox-container\"\n    [ngClass]=\"config.size\"\n  >\n    <ircc-cl-lib-label\n      [config]=\"labelConfig\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-label>\n    <div\n      class=\"checkbox-layout\"\n      [ngClass]=\"{ error: getErrorState() }\"\n    >\n      <div class=\"checkbox\">\n        <input\n          [attr.aria-live]=\"'off'\"\n          (blur)=\"touched = true\"\n          id=\"{{ config.id }}\"\n          class=\"check\"\n          (click)=\"standAloneFunctions.wasTouched(config.formGroup, config.id)\"\n          [ngClass]=\"{\n            mixed: config.mixed,\n            focus: !config.disableFocus,\n            error: getErrorState()\n          }\"\n          [attr.size]=\"config.size\"\n          type=\"checkbox\"\n          [formControlName]=\"config.id\"\n          [attr.aria-invalid]=\"formControl?.invalid\"\n          [attr.aria-label]=\"\n            formControl?.invalid && touched\n              ? (config.label || '' | translate) +\n                ' ' +\n                (config.desc || '' | translate) +\n                ' ' +\n                (config.helpText || '' | translate) +\n                ' ' +\n                (config.inlineLabel || '' | translate) +\n                ' ' +\n                errorStubText +\n                ' ' +\n                errorAria\n              : (config.label || '' | translate) +\n                ' ' +\n                (config.desc || '' | translate) +\n                ' ' +\n                (config.helpText || '' | translate) +\n                ' ' +\n                (config.inlineLabel || '' | translate)\n          \"\n        />\n        <span class=\"checkmark\"></span>\n      </div>\n      <label\n        [attr.aria-live]=\"'off'\"\n        class=\"checkbox-desc-label\"\n        [for]=\"config.id\"\n        [id]=\"config.id + ' checkbox_label'\"\n        [ngClass]=\"{\n          'disabled-label': isDisabled,\n          small: config.size === 'small',\n          makeBold: config.inlineLabelBold\n        }\"\n        >{{ config.inlineLabel || '' | translate }}\n      </label>\n    </div>\n    <div aria-live=\"polite\">\n      <div\n        *ngIf=\"formControl?.touched && formControl?.invalid\"\n        class=\"check-error\"\n        [ngClass]=\"{ small: config.size === 'small' }\"\n      >\n        <span class=\"sr-only\">{{\n          errorStubText + ': ' + (config.label || '' | translate) + ': '\n        }}</span>\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"formControl?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</form>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-checkbox', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CheckboxComponent),
                            multi: true
                        }
                    ], template: "<form\n  class=\"checkbox-container\"\n  [formGroup]=\"config.formGroup\"\n>\n  <div\n    class=\"checkbox-container\"\n    [ngClass]=\"config.size\"\n  >\n    <ircc-cl-lib-label\n      [config]=\"labelConfig\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-label>\n    <div\n      class=\"checkbox-layout\"\n      [ngClass]=\"{ error: getErrorState() }\"\n    >\n      <div class=\"checkbox\">\n        <input\n          [attr.aria-live]=\"'off'\"\n          (blur)=\"touched = true\"\n          id=\"{{ config.id }}\"\n          class=\"check\"\n          (click)=\"standAloneFunctions.wasTouched(config.formGroup, config.id)\"\n          [ngClass]=\"{\n            mixed: config.mixed,\n            focus: !config.disableFocus,\n            error: getErrorState()\n          }\"\n          [attr.size]=\"config.size\"\n          type=\"checkbox\"\n          [formControlName]=\"config.id\"\n          [attr.aria-invalid]=\"formControl?.invalid\"\n          [attr.aria-label]=\"\n            formControl?.invalid && touched\n              ? (config.label || '' | translate) +\n                ' ' +\n                (config.desc || '' | translate) +\n                ' ' +\n                (config.helpText || '' | translate) +\n                ' ' +\n                (config.inlineLabel || '' | translate) +\n                ' ' +\n                errorStubText +\n                ' ' +\n                errorAria\n              : (config.label || '' | translate) +\n                ' ' +\n                (config.desc || '' | translate) +\n                ' ' +\n                (config.helpText || '' | translate) +\n                ' ' +\n                (config.inlineLabel || '' | translate)\n          \"\n        />\n        <span class=\"checkmark\"></span>\n      </div>\n      <label\n        [attr.aria-live]=\"'off'\"\n        class=\"checkbox-desc-label\"\n        [for]=\"config.id\"\n        [id]=\"config.id + ' checkbox_label'\"\n        [ngClass]=\"{\n          'disabled-label': isDisabled,\n          small: config.size === 'small',\n          makeBold: config.inlineLabelBold\n        }\"\n        >{{ config.inlineLabel || '' | translate }}\n      </label>\n    </div>\n    <div aria-live=\"polite\">\n      <div\n        *ngIf=\"formControl?.touched && formControl?.invalid\"\n        class=\"check-error\"\n        [ngClass]=\"{ small: config.size === 'small' }\"\n      >\n        <span class=\"sr-only\">{{\n          errorStubText + ': ' + (config.label || '' | translate) + ': '\n        }}</span>\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"formControl?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: StandAloneFunctions }, { type: i1.TranslateService }]; }, propDecorators: { config: [{
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

class SelectComponent {
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
        var _a;
        if (this.config.errorMessages) {
            (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.markAsDirty();
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
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SelectComponent, deps: [{ token: StandAloneFunctions }, { token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: SelectComponent, selector: "ircc-cl-lib-select", inputs: { config: "config", id: "id", formGroup: "formGroup", size: "size", label: "label", desc: "desc", hint: "hint", placeholder: "placeholder", required: "required", options: "options", errorMessages: "errorMessages", topLabel: "topLabel", disableError: "disableError" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => SelectComponent) //This allows the error state to be turned off and on again
        }
    ], ngImport: i0, template: "<div class=\"{{ config.size }} select-wrapper\">\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <form [formGroup]=\"config.formGroup\">\n    <div class=\"ircc-cl-lib-select\">\n      <select\n        (blur)=\"onBlur()\"\n        (click)=\"onClicked()\"\n        class=\"custom-select h6 select-placeholder\"\n        [name]=\"config.id\"\n        [id]=\"config.id\"\n        [formControlName]=\"config.id\"\n        (change)=\"valueChange($event)\"\n        [class.activited-select]=\"activiatedSelect\"\n        [attr.aria-invalid]=\"formControl?.invalid\"\n        [attr.aria-live]=\"'off'\"\n        [attr.aria-label]=\"\n          formControl?.invalid && touched\n            ? (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (errorStubText + ': ' + errorAria)\n            : (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate)\n        \"\n      >\n        <option\n          [value]=\"''\"\n          [disabled]=\"true\"\n          [selected]=\"true\"\n          [hidden]=\"true\"\n        >\n          {{ config.placeholder || '' | translate }}\n        </option>\n        <option\n          *ngFor=\"let option of config.options\"\n          [value]=\"option.value || option.text\"\n          class=\"select-option\"\n        >\n          {{ option.text | translate }}\n        </option>\n      </select>\n      <div\n        class=\"icon-container\"\n        [class.select-clicked]=\"rotateChevron\"\n      >\n        <i class=\"fa-thin fa-chevron-down custom-chevron\"></i>\n      </div>\n    </div>\n    <div\n      aria-live=\"polite\"\n      *ngIf=\"!config.disableError\"\n    >\n      <div *ngIf=\"formControl?.touched && formControl?.invalid\">\n        <span class=\"sr-only\">{{\n          errorStubText + ': ' + (config.label || '' | translate) + ': '\n        }}</span>\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"formControl?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [size]=\"config.size\"\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </form>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-select', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(() => SelectComponent) //This allows the error state to be turned off and on again
                        }
                    ], template: "<div class=\"{{ config.size }} select-wrapper\">\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <form [formGroup]=\"config.formGroup\">\n    <div class=\"ircc-cl-lib-select\">\n      <select\n        (blur)=\"onBlur()\"\n        (click)=\"onClicked()\"\n        class=\"custom-select h6 select-placeholder\"\n        [name]=\"config.id\"\n        [id]=\"config.id\"\n        [formControlName]=\"config.id\"\n        (change)=\"valueChange($event)\"\n        [class.activited-select]=\"activiatedSelect\"\n        [attr.aria-invalid]=\"formControl?.invalid\"\n        [attr.aria-live]=\"'off'\"\n        [attr.aria-label]=\"\n          formControl?.invalid && touched\n            ? (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate) +\n              ' ' +\n              (errorStubText + ': ' + errorAria)\n            : (config.label || '' | translate) +\n              ' ' +\n              (config.desc || '' | translate) +\n              ' ' +\n              (config.hint || '' | translate)\n        \"\n      >\n        <option\n          [value]=\"''\"\n          [disabled]=\"true\"\n          [selected]=\"true\"\n          [hidden]=\"true\"\n        >\n          {{ config.placeholder || '' | translate }}\n        </option>\n        <option\n          *ngFor=\"let option of config.options\"\n          [value]=\"option.value || option.text\"\n          class=\"select-option\"\n        >\n          {{ option.text | translate }}\n        </option>\n      </select>\n      <div\n        class=\"icon-container\"\n        [class.select-clicked]=\"rotateChevron\"\n      >\n        <i class=\"fa-thin fa-chevron-down custom-chevron\"></i>\n      </div>\n    </div>\n    <div\n      aria-live=\"polite\"\n      *ngIf=\"!config.disableError\"\n    >\n      <div *ngIf=\"formControl?.touched && formControl?.invalid\">\n        <span class=\"sr-only\">{{\n          errorStubText + ': ' + (config.label || '' | translate) + ': '\n        }}</span>\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"formControl?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [size]=\"config.size\"\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </form>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: StandAloneFunctions }, { type: i1.TranslateService }]; }, propDecorators: { config: [{
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

const DATE_PICKER_MONTHS_EN = [
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
const DATE_PICKER_MONTHS_FR = [
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
const DATE_PICKER_DAY_CONTROL_ID_EXTENSION = '_dayControl';
const DATE_PICKER_MONTH_CONTROL_ID_EXTENSION = '_monthControl';
const DATE_PICKER_YEAR_CONTROL_ID_EXTENSION = '_yearControl';
const DATE_PICKER_LABELS_EN = ['Day', 'Month', 'Year'];
const DATE_PICKER_LABELS_FR = ['Jour', 'Mois', 'Année'];
const DATE_PICKER_PLACEHOLDER_YEAR_EN = 'YYYY';
const DATE_PICKER_PLACEHOLDER_YEAR_FR = 'AAAA';
const DATE_PICKER_PLACEHOLDER_MONTH_EN = 'Month';
const DATE_PICKER_PLACEHOLDER_MONTH_FR = 'Mois';
const DATE_PICKER_PLACEHOLDER_DAY_EN = 'DD';
const DATE_PICKER_PLACEHOLDER_DAY_FR = 'JJ';
const DATE_PICKER_UNKOWN_EN = 'Unknown';
const DATE_PICKER_UNKOWN_FR = 'Inconnu';
class DatePickerComponent {
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        this.labelConfig = this.standAloneFunctions.makeLabelConfig(this.config.formGroup, this.config.id, (_a = this.config.errorMessages) === null || _a === void 0 ? void 0 : _a.general, this.config.label, this.config.desc, this.config.hint, this.config.required, this.config.labelIconConfig);
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
        if ((_b = this.config.errorMessages) === null || _b === void 0 ? void 0 : _b.general) {
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
            if ((_c = this.config.unknownDateToggle) === null || _c === void 0 ? void 0 : _c.yearUnknown)
                (_d = this.dropDownConfigs.year.options) === null || _d === void 0 ? void 0 : _d.push({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
        }
        else {
            if ((_e = this.config.unknownDateToggle) === null || _e === void 0 ? void 0 : _e.yearUnknown)
                (_f = this.dropDownConfigs.year.options) === null || _f === void 0 ? void 0 : _f.push({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
        }
        if (this.config.minYear || this.config.maxYear) {
            if (this.config.minYear && this.config.maxYear) {
                for (let i = this.config.minYear; i <= this.config.maxYear; i++) {
                    (_g = this.dropDownConfigs.year.options) === null || _g === void 0 ? void 0 : _g.push({ text: i.toString() });
                }
            }
            else if (this.config.minYear && !this.config.maxYear) {
                for (let i = this.config.minYear; i <= this.currentYear; i++) {
                    (_h = this.dropDownConfigs.year.options) === null || _h === void 0 ? void 0 : _h.push({ text: i.toString() });
                }
            }
            else if (this.config.maxYear && !this.config.minYear) {
                for (let i = 1900; i <= this.config.maxYear; i++) {
                    (_j = this.dropDownConfigs.year.options) === null || _j === void 0 ? void 0 : _j.push({ text: i.toString() });
                }
            }
        }
        else {
            for (let i = 1900; i <= this.currentYear; i++) {
                (_k = this.dropDownConfigs.year.options) === null || _k === void 0 ? void 0 : _k.push({ text: i.toString() });
            }
        }
        // Populate the days array based on the selected month and year
        (_l = this.config.formGroup
            .get(this.config.id + DATE_PICKER_MONTH_CONTROL_ID_EXTENSION)) === null || _l === void 0 ? void 0 : _l.valueChanges.subscribe((month) => {
            var _a;
            //add if statement here - the value of year can be empty, since it may not have been selected yet.
            const numDays = this.updateDaysArray(month, (_a = this.config.formGroup.get(this.config.id + '_yearControl')) === null || _a === void 0 ? void 0 : _a.value);
        });
        (_m = this.config.formGroup
            .get(this.config.id + DATE_PICKER_YEAR_CONTROL_ID_EXTENSION)) === null || _m === void 0 ? void 0 : _m.valueChanges.subscribe((year) => {
            var _a;
            const numDays = this.updateDaysArray((_a = this.config.formGroup.get(this.config.id + DATE_PICKER_MONTH_CONTROL_ID_EXTENSION)) === null || _a === void 0 ? void 0 : _a.value, year);
        });
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            if ((_o = this.config.unknownDateToggle) === null || _o === void 0 ? void 0 : _o.dayUnknown)
                (_p = this.dropDownConfigs.day.options) === null || _p === void 0 ? void 0 : _p.push({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
        }
        else {
            if ((_q = this.config.unknownDateToggle) === null || _q === void 0 ? void 0 : _q.dayUnknown)
                (_r = this.dropDownConfigs.day.options) === null || _r === void 0 ? void 0 : _r.push({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
        }
        if ((((_s = this.config.unknownDateToggle) === null || _s === void 0 ? void 0 : _s.dayUnknown) &&
            ((_t = this.dropDownConfigs.day.options) === null || _t === void 0 ? void 0 : _t.length) === 1) ||
            (!((_u = this.config.unknownDateToggle) === null || _u === void 0 ? void 0 : _u.dayUnknown) &&
                ((_v = this.dropDownConfigs.day.options) === null || _v === void 0 ? void 0 : _v.length) === 0)) {
            for (let i = 1; i <= 31; i++) {
                (_w = this.dropDownConfigs.day.options) === null || _w === void 0 ? void 0 : _w.push({ text: i.toString() });
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
        var _a, _b, _c, _d;
        this.dropDownConfigs.month.options = [];
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            this.months = DATE_PICKER_MONTHS_EN;
            if ((_a = this.config.unknownDateToggle) === null || _a === void 0 ? void 0 : _a.monthUnknown)
                (_b = this.dropDownConfigs.month.options) === null || _b === void 0 ? void 0 : _b.push({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
        }
        else {
            this.months = DATE_PICKER_MONTHS_FR;
            if ((_c = this.config.unknownDateToggle) === null || _c === void 0 ? void 0 : _c.monthUnknown)
                (_d = this.dropDownConfigs.month.options) === null || _d === void 0 ? void 0 : _d.push({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
        }
        this.months.forEach((month, index) => {
            var _a;
            (_a = this.dropDownConfigs.month.options) === null || _a === void 0 ? void 0 : _a.push({
                text: month,
                value: (index + 1).toString().padStart(2, '0')
            });
        });
    }
    /**
     * Used to set the language of year/day 'unknown' field when langauge changes
     */
    setYearDayLanguage() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        (_a = this.dropDownConfigs.day.options) === null || _a === void 0 ? void 0 : _a.shift();
        (_b = this.dropDownConfigs.year.options) === null || _b === void 0 ? void 0 : _b.shift();
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            this.months = DATE_PICKER_MONTHS_EN;
            if ((_c = this.config.unknownDateToggle) === null || _c === void 0 ? void 0 : _c.dayUnknown)
                (_d = this.dropDownConfigs.day.options) === null || _d === void 0 ? void 0 : _d.unshift({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
            if ((_e = this.config.unknownDateToggle) === null || _e === void 0 ? void 0 : _e.yearUnknown)
                (_f = this.dropDownConfigs.year.options) === null || _f === void 0 ? void 0 : _f.unshift({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
        }
        else {
            this.months = DATE_PICKER_MONTHS_FR;
            if ((_g = this.config.unknownDateToggle) === null || _g === void 0 ? void 0 : _g.dayUnknown)
                (_h = this.dropDownConfigs.day.options) === null || _h === void 0 ? void 0 : _h.unshift({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
            if ((_j = this.config.unknownDateToggle) === null || _j === void 0 ? void 0 : _j.yearUnknown)
                (_k = this.dropDownConfigs.year.options) === null || _k === void 0 ? void 0 : _k.unshift({
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
        var _a, _b, _c, _d, _e;
        this.days = [];
        this.dropDownConfigs.day.options = [];
        const numDays = this.getNumDaysInMonth(month, year);
        for (let i = 1; i <= numDays; i++) {
            this.days.push(i);
        }
        (_a = this.config.formGroup
            .get(this.config.id + DATE_PICKER_DAY_CONTROL_ID_EXTENSION)) === null || _a === void 0 ? void 0 : _a.setValue('');
        if (this.translate.currentLang === 'en' ||
            this.translate.currentLang === 'en-US') {
            if ((_b = this.config.unknownDateToggle) === null || _b === void 0 ? void 0 : _b.dayUnknown)
                (_c = this.dropDownConfigs.day.options) === null || _c === void 0 ? void 0 : _c.push({
                    text: DATE_PICKER_UNKOWN_EN,
                    value: '**'
                });
        }
        else {
            if ((_d = this.config.unknownDateToggle) === null || _d === void 0 ? void 0 : _d.dayUnknown)
                (_e = this.dropDownConfigs.day.options) === null || _e === void 0 ? void 0 : _e.push({
                    text: DATE_PICKER_UNKOWN_FR,
                    value: '**'
                });
        }
        this.days.forEach((day) => {
            var _a;
            (_a = this.dropDownConfigs.day.options) === null || _a === void 0 ? void 0 : _a.push({ text: day.toString() });
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
        var _a, _b, _c, _d, _e, _f;
        let datePickerState = false;
        datePickerState =
            (((_a = this.config.formGroup.get(this.dropDownConfigs.year.id)) === null || _a === void 0 ? void 0 : _a.touched) &&
                ((_b = this.config.formGroup.get(this.dropDownConfigs.year.id)) === null || _b === void 0 ? void 0 : _b.invalid)) ||
                (((_c = this.config.formGroup.get(this.dropDownConfigs.month.id)) === null || _c === void 0 ? void 0 : _c.touched) &&
                    ((_d = this.config.formGroup.get(this.dropDownConfigs.month.id)) === null || _d === void 0 ? void 0 : _d.invalid)) ||
                (((_e = this.config.formGroup.get(this.dropDownConfigs.day.id)) === null || _e === void 0 ? void 0 : _e.touched) &&
                    ((_f = this.config.formGroup.get(this.dropDownConfigs.day.id)) === null || _f === void 0 ? void 0 : _f.invalid));
        this.touched = datePickerState || false;
        this.getAriaOverride(datePickerState);
        return datePickerState !== null && datePickerState !== void 0 ? datePickerState : false;
        //  return this.config.formGroup?.touched && this.config.formGroup?.invalid;
    }
    /**
     * Override the aria labels for each of the select fields in the date picker
     * @param hasError is the field in error?
     */
    getAriaOverride(hasError) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (this.yearSelect !== '') {
            if (hasError &&
                ((_a = this.config.formGroup.get(this.dropDownConfigs.year.id)) === null || _a === void 0 ? void 0 : _a.touched) &&
                ((_b = this.config.formGroup.get(this.dropDownConfigs.year.id)) === null || _b === void 0 ? void 0 : _b.invalid)) {
                (_c = this.yearSelect) === null || _c === void 0 ? void 0 : _c.setAttribute('aria-label', this.getLabelCore() +
                    this.dropDownConfigs.year.label +
                    ' ' +
                    this.getErrorAria());
            }
            else {
                (_d = this.yearSelect) === null || _d === void 0 ? void 0 : _d.setAttribute('aria-label', this.getLabelCore() + this.dropDownConfigs.year.label);
            }
        }
        if (this.monthSelect !== '') {
            if (hasError &&
                ((_e = this.config.formGroup.get(this.dropDownConfigs.month.id)) === null || _e === void 0 ? void 0 : _e.touched) &&
                ((_f = this.config.formGroup.get(this.dropDownConfigs.month.id)) === null || _f === void 0 ? void 0 : _f.invalid)) {
                (_g = this.monthSelect) === null || _g === void 0 ? void 0 : _g.setAttribute('aria-label', this.getLabelCore() +
                    this.dropDownConfigs.month.label +
                    ' ' +
                    this.getErrorAria());
            }
            else {
                (_h = this.monthSelect) === null || _h === void 0 ? void 0 : _h.setAttribute('aria-label', this.getLabelCore() + this.dropDownConfigs.month.label);
            }
        }
        if (this.daySelect !== '') {
            if (hasError &&
                ((_j = this.config.formGroup.get(this.dropDownConfigs.day.id)) === null || _j === void 0 ? void 0 : _j.touched) &&
                ((_k = this.config.formGroup.get(this.dropDownConfigs.day.id)) === null || _k === void 0 ? void 0 : _k.invalid)) {
                (_l = this.daySelect) === null || _l === void 0 ? void 0 : _l.setAttribute('aria-label', this.getLabelCore() +
                    this.dropDownConfigs.day.label +
                    ' ' +
                    this.getErrorAria());
            }
            else {
                (_m = this.daySelect) === null || _m === void 0 ? void 0 : _m.setAttribute('aria-label', this.getLabelCore() + this.dropDownConfigs.day.label);
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
DatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DatePickerComponent, deps: [{ token: i1.TranslateService }, { token: StandAloneFunctions }], target: i0.ɵɵFactoryTarget.Component });
DatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: DatePickerComponent, selector: "ircc-cl-lib-date-picker", inputs: { config: "config", formGroup: "formGroup", id: "id", size: "size", label: "label", required: "required", hint: "hint", desc: "desc", errorMessages: "errorMessages", maxYear: "maxYear", minYear: "minYear", unknownDateToggle: "unknownDateToggle", yearSelectShow: "yearSelectShow", monthSelectShow: "monthSelectShow", daySelectShow: "daySelectShow" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatePickerComponent),
            multi: true
        }
    ], usesOnChanges: true, ngImport: i0, template: "<div class=\"{{ config.size }}\">\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <fieldset class=\"all-select-container\">\n    <ircc-cl-lib-select\n      class=\"select-year\"\n      [attr.aria-live]=\"'off'\"\n      [config]=\"dropDownConfigs.year\"\n      *ngIf=\"config.yearSelectShow\"\n    ></ircc-cl-lib-select>\n    <ircc-cl-lib-select\n      class=\"select-month\"\n      [config]=\"dropDownConfigs.month\"\n      *ngIf=\"config.monthSelectShow\"\n    ></ircc-cl-lib-select>\n    <ircc-cl-lib-select\n      class=\"select-day\"\n      [config]=\"dropDownConfigs.day\"\n      *ngIf=\"config.daySelectShow\"\n    ></ircc-cl-lib-select>\n  </fieldset>\n  <div aria-live=\"polite\">\n    <ng-container *ngIf=\"datePickerTouchedOrInvalid()\">\n      <span class=\"sr-only\">{{\n        errorStubText + ': ' + (config.label || '' | translate) + ': '\n      }}</span>\n      <!-- TODO: Do something clever here to add which of the dropdowns are in error and put them in the above p tag -->\n      <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n        <div\n          *ngIf=\"config.formGroup.get(dropDownConfigs.year.id)?.errors?.[errors.key] || config.formGroup.get(dropDownConfigs.month.id)?.errors?.[errors.key] || config.formGroup.get(dropDownConfigs.day.id)?.errors?.[errors.key]\"\n          class=\"radio-errors\"\n        >\n          <ircc-cl-lib-error\n            [id]=\"errors.id\"\n            [errorLOV]=\"errors.errorLOV\"\n            [size]=\"config.size\"\n          ></ircc-cl-lib-error>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "component", type: ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "component", type: SelectComponent, selector: "ircc-cl-lib-select", inputs: ["config", "id", "formGroup", "size", "label", "desc", "hint", "placeholder", "required", "options", "errorMessages", "topLabel", "disableError"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-date-picker', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DatePickerComponent),
                            multi: true
                        }
                    ], template: "<div class=\"{{ config.size }}\">\n  <ircc-cl-lib-label\n    [config]=\"labelConfig\"\n    [attr.size]=\"config.size\"\n  ></ircc-cl-lib-label>\n  <fieldset class=\"all-select-container\">\n    <ircc-cl-lib-select\n      class=\"select-year\"\n      [attr.aria-live]=\"'off'\"\n      [config]=\"dropDownConfigs.year\"\n      *ngIf=\"config.yearSelectShow\"\n    ></ircc-cl-lib-select>\n    <ircc-cl-lib-select\n      class=\"select-month\"\n      [config]=\"dropDownConfigs.month\"\n      *ngIf=\"config.monthSelectShow\"\n    ></ircc-cl-lib-select>\n    <ircc-cl-lib-select\n      class=\"select-day\"\n      [config]=\"dropDownConfigs.day\"\n      *ngIf=\"config.daySelectShow\"\n    ></ircc-cl-lib-select>\n  </fieldset>\n  <div aria-live=\"polite\">\n    <ng-container *ngIf=\"datePickerTouchedOrInvalid()\">\n      <span class=\"sr-only\">{{\n        errorStubText + ': ' + (config.label || '' | translate) + ': '\n      }}</span>\n      <!-- TODO: Do something clever here to add which of the dropdowns are in error and put them in the above p tag -->\n      <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n        <div\n          *ngIf=\"config.formGroup.get(dropDownConfigs.year.id)?.errors?.[errors.key] || config.formGroup.get(dropDownConfigs.month.id)?.errors?.[errors.key] || config.formGroup.get(dropDownConfigs.day.id)?.errors?.[errors.key]\"\n          class=\"radio-errors\"\n        >\n          <ircc-cl-lib-error\n            [id]=\"errors.id\"\n            [errorLOV]=\"errors.errorLOV\"\n            [size]=\"config.size\"\n          ></ircc-cl-lib-error>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: StandAloneFunctions }]; }, propDecorators: { config: [{
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

const MAX_CHAR_LIMIT_EN = 'Maximum character limit reached.';
const MAX_CHAR_LIMIT_FR = 'Limite maximale de caractères atteinte.';
const WARNING_CHAR_LIMIT_EN = 'Maximum character limit reached in 15 characters.';
const WARNING_CHAR_LIMIT_FR = 'Limite maximale de caractères atteinte en 15 caractères.';
var ResizableTypes;
(function (ResizableTypes) {
    ResizableTypes["vertical"] = "vertical";
    ResizableTypes["horizontal"] = "password";
    ResizableTypes["both"] = "both";
    ResizableTypes["none"] = "none";
})(ResizableTypes || (ResizableTypes = {}));
class TextareaComponent {
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
            var _a;
            this.characterCountStatus((_a = change[this.config.id]) === null || _a === void 0 ? void 0 : _a.length);
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
        var _a, _b, _c, _d;
        let currLang = this.translate.currentLang;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.charLimit) {
            if (((_b = this.config) === null || _b === void 0 ? void 0 : _b.charLimit) == currCharCount) {
                this.charLimitStatus = 'maxLimit';
                (currLang === 'en' || currLang === 'en-US')
                    ? (this.currentCharacterStatusAria = MAX_CHAR_LIMIT_EN)
                    : (this.currentCharacterStatusAria = MAX_CHAR_LIMIT_FR);
                this.announceCharStatusChangeAria = true;
            }
            else if (Number((_c = this.config) === null || _c === void 0 ? void 0 : _c.charLimit) - currCharCount == 15) {
                this.charLimitStatus = 'warningLimit';
                (currLang === 'en' || currLang === 'en-US')
                    ? (this.currentCharacterStatusAria = WARNING_CHAR_LIMIT_EN)
                    : (this.currentCharacterStatusAria = WARNING_CHAR_LIMIT_FR);
                this.announceCharStatusChangeAria = true;
            }
            else if (Number((_d = this.config) === null || _d === void 0 ? void 0 : _d.charLimit) - currCharCount < 15) {
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
TextareaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TextareaComponent, deps: [{ token: StandAloneFunctions }, { token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
TextareaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: TextareaComponent, selector: "ircc-cl-lib-textarea", inputs: { config: "config", id: "id", formGroup: "formGroup", size: "size", label: "label", desc: "desc", hint: "hint", placeholder: "placeholder", required: "required", charLimit: "charLimit", resizable: "resizable", errorMessages: "errorMessages", errorIcon: "errorIcon" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextareaComponent),
            multi: true
        }
    ], usesOnChanges: true, ngImport: i0, template: "<div>\n  <form [formGroup]=\"config.formGroup\">\n    <div\n      class=\"textarea-container\"\n      ngClass=\"{{ config.size }} resize-{{ config.resizable }}\"\n    >\n      <div>\n        <ircc-cl-lib-label\n          [config]=\"labelConfig\"\n          [attr.size]=\"config.size\"\n        ></ircc-cl-lib-label>\n        <div\n          class=\"content-area\"\n          [ngClass]=\"focusState === true ? 'focus' : ''\"\n        >\n          <textarea\n            class=\"textarea-field\"\n            maxlength=\"{{ config.charLimit }}\"\n            placeholder=\"{{\n              announceCharStatusChangeAria\n                ? ''\n                : (config.placeholder || '' | translate)\n            }}\"\n            [id]=\"config.id\"\n            tabindex=\"0\"\n            (blur)=\"onBlur()\"\n            [formControlName]=\"config.id\"\n            [attr.aria-label]=\"\n              announceCharStatusChangeAria\n                ? currentCharacterStatusAria\n                : (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate) +\n                  ' ' +\n                  (config.placeholder || '' | translate) +\n                  ' ' +\n                  formatCharacterUsedString(charLength)\n            \"\n            #textareaInput\n          >\n          </textarea>\n          <p\n            *ngIf=\"config.charLimit\"\n            class=\"character-count\"\n            [ngClass]=\"charLimitStatus\"\n          >\n            {{ textareaInput.value.length }}/{{ config.charLimit }}\n          </p>\n        </div>\n      </div>\n\n      <div\n        *ngIf=\"\n          config.formGroup.get(config.id)?.touched &&\n          config.formGroup.get(config.id)?.invalid\n        \"\n        class=\"check-error\"\n      >\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"config.formGroup.get(config.id)?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [size]=\"config.size\"\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </form>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: LabelComponent, selector: "ircc-cl-lib-label", inputs: ["config", "formGroup", "errorMessages", "parentID", "label", "desc", "hint", "required", "iconButton", "topLabel", "touched"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: ErrorComponent, selector: "ircc-cl-lib-error", inputs: ["config", "id", "errorLOV", "icon", "size"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-textarea', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => TextareaComponent),
                            multi: true
                        }
                    ], template: "<div>\n  <form [formGroup]=\"config.formGroup\">\n    <div\n      class=\"textarea-container\"\n      ngClass=\"{{ config.size }} resize-{{ config.resizable }}\"\n    >\n      <div>\n        <ircc-cl-lib-label\n          [config]=\"labelConfig\"\n          [attr.size]=\"config.size\"\n        ></ircc-cl-lib-label>\n        <div\n          class=\"content-area\"\n          [ngClass]=\"focusState === true ? 'focus' : ''\"\n        >\n          <textarea\n            class=\"textarea-field\"\n            maxlength=\"{{ config.charLimit }}\"\n            placeholder=\"{{\n              announceCharStatusChangeAria\n                ? ''\n                : (config.placeholder || '' | translate)\n            }}\"\n            [id]=\"config.id\"\n            tabindex=\"0\"\n            (blur)=\"onBlur()\"\n            [formControlName]=\"config.id\"\n            [attr.aria-label]=\"\n              announceCharStatusChangeAria\n                ? currentCharacterStatusAria\n                : (config.label || '' | translate) +\n                  ' ' +\n                  (config.desc || '' | translate) +\n                  ' ' +\n                  (config.hint || '' | translate) +\n                  ' ' +\n                  (config.placeholder || '' | translate) +\n                  ' ' +\n                  formatCharacterUsedString(charLength)\n            \"\n            #textareaInput\n          >\n          </textarea>\n          <p\n            *ngIf=\"config.charLimit\"\n            class=\"character-count\"\n            [ngClass]=\"charLimitStatus\"\n          >\n            {{ textareaInput.value.length }}/{{ config.charLimit }}\n          </p>\n        </div>\n      </div>\n\n      <div\n        *ngIf=\"\n          config.formGroup.get(config.id)?.touched &&\n          config.formGroup.get(config.id)?.invalid\n        \"\n        class=\"check-error\"\n      >\n        <ng-container *ngFor=\"let errors of errorIds; let i = index\">\n          <div\n            *ngIf=\"config.formGroup.get(config.id)?.errors?.[errors.key]\"\n            class=\"radio-errors\"\n          >\n            <ircc-cl-lib-error\n              [size]=\"config.size\"\n              [id]=\"errors.id\"\n              [errorLOV]=\"errors.errorLOV\"\n            ></ircc-cl-lib-error>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </form>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: StandAloneFunctions }, { type: i1.TranslateService }]; }, propDecorators: { config: [{
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

const IrccDsAngularFormComponents = [
    CheckboxComponent,
    ErrorComponent,
    InputComponent,
    RadioInputComponent,
    DatePickerComponent,
    TextareaComponent,
    SelectComponent
];
class IrccDsAngularFormComponentsModule {
}
IrccDsAngularFormComponentsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularFormComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularFormComponentsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularFormComponentsModule, declarations: [CheckboxComponent,
        ErrorComponent,
        InputComponent,
        RadioInputComponent,
        DatePickerComponent,
        TextareaComponent,
        SelectComponent], imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule], exports: [CheckboxComponent,
        ErrorComponent,
        InputComponent,
        RadioInputComponent,
        DatePickerComponent,
        TextareaComponent,
        SelectComponent] });
IrccDsAngularFormComponentsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularFormComponentsModule, imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularFormComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...IrccDsAngularFormComponents],
                    imports: [
                        CommonModule,
                        IrccDsAngularComponentsSharedModule,
                        TranslateModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [...IrccDsAngularFormComponents]
                }]
        }] });

class LanguageSwitchButtonService {
    constructor() {
        this.languageClickSub = new BehaviorSubject(false);
        this.languageClickObs$ = this.languageClickSub.asObservable();
    }
    languageToggleClick() {
        this.languageClickSub.next(true);
    }
}
LanguageSwitchButtonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LanguageSwitchButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LanguageSwitchButtonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LanguageSwitchButtonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LanguageSwitchButtonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

const LANGUAGE_SWITCH_TEXT_ENGLISH = 'Français';
const LANGUAGE_SWITCH_TEXT_ENGLISH_MOBILE = 'FR';
const LANGUAGE_SWITCH_TEXT_FRENCH = 'English';
const LANGUAGE_SWITCH_TEXT_FRENCH_MOBILE = 'EN';
class LanguageSwitchComponent {
    constructor(platformId, langToggle, translate, router, titleService) {
        this.platformId = platformId;
        this.langToggle = langToggle;
        this.translate = translate;
        this.router = router;
        this.titleService = titleService;
        this.id = '';
        this.isMobile = false;
        this.text = '';
        this.aria = '';
        this.isMobile = window.innerWidth <= 360; //phone breakpoint
    }
    /** Listens for screen resizes and sets mobile boolean */
    handleResize(e) {
        if (isPlatformBrowser(this.platformId)) {
            this.isMobile = window.innerWidth <= 360; //tablet breakpoint
            this.setText(this.translate.currentLang);
        }
    }
    ngOnInit() {
        let lang = this.translate.currentLang;
        this.setText(lang);
        this.translate.onLangChange.subscribe((newLang) => {
            console.log(newLang.lang, 'switch');
            this.setText(newLang.lang);
        });
    }
    switch() {
        this.langToggle.languageToggleClick();
        this.titleService.updateTitle(this.router.routerState.snapshot);
    }
    setText(lang) {
        if (lang === 'en' || lang === 'en-US') {
            this.isMobile
                ? (this.text = LANGUAGE_SWITCH_TEXT_ENGLISH_MOBILE)
                : (this.text = LANGUAGE_SWITCH_TEXT_ENGLISH);
        }
        else {
            this.isMobile
                ? (this.text = LANGUAGE_SWITCH_TEXT_FRENCH_MOBILE)
                : (this.text = LANGUAGE_SWITCH_TEXT_FRENCH);
        }
    }
}
LanguageSwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LanguageSwitchComponent, deps: [{ token: PLATFORM_ID }, { token: LanguageSwitchButtonService }, { token: i1.TranslateService }, { token: i3.Router }, { token: i3.TitleStrategy }], target: i0.ɵɵFactoryTarget.Component });
LanguageSwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: LanguageSwitchComponent, selector: "ircc-cl-lib-language-switch", inputs: { id: "id" }, host: { listeners: { "window:resize": "handleResize($event)" } }, ngImport: i0, template: "<button\n  category=\"link\"\n  role=\"link\"\n  [id]=\"id\"\n  (click)=\"switch()\"\n  id=\"language-toggle\"\n>\n  {{ text }}\n</button>\n", preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LanguageSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-language-switch', template: "<button\n  category=\"link\"\n  role=\"link\"\n  [id]=\"id\"\n  (click)=\"switch()\"\n  id=\"language-toggle\"\n>\n  {{ text }}\n</button>\n" }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [PLATFORM_ID]
                    }] }, { type: LanguageSwitchButtonService }, { type: i1.TranslateService }, { type: i3.Router }, { type: i3.TitleStrategy }];
    }, propDecorators: { id: [{
                type: Input
            }], handleResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

class ThemeSwitchComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.isDarkTheme = false;
        this.currentTheme = '';
        this.previousTheme = '';
    }
    ngOnInit() {
        this.darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        this.isDarkTheme = this.darkModeQuery.matches;
        this.isDarkTheme ? this.currentTheme = 'dark' : this.currentTheme = 'light';
        this.currentTheme === 'dark' ? this.previousTheme = 'Light' : this.previousTheme = 'Dark';
        this.darkModeQuery.addEventListener('change', this.handleDarkModeChange.bind(this));
    }
    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        this.isDarkTheme ? this.currentTheme = 'dark' : this.currentTheme = 'light';
        this.currentTheme === 'dark' ? this.previousTheme = 'Light' : this.previousTheme = 'Dark';
        this.renderer.setAttribute(document.documentElement, 'scheme', this.currentTheme);
        this.darkModeQuery.removeEventListener('change', this.handleDarkModeChange.bind(this));
    }
    handleDarkModeChange(event) {
        this.isDarkTheme = event.matches;
        this.isDarkTheme ? this.currentTheme = 'dark' : this.currentTheme = 'light';
        this.currentTheme === 'dark' ? this.previousTheme = 'Light' : this.previousTheme = 'Dark';
    }
}
ThemeSwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ThemeSwitchComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
ThemeSwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ThemeSwitchComponent, selector: "ircc-cl-lib-theme-switch", ngImport: i0, template: "<button\n  (click)=\"toggleTheme()\"\n  category=\"secondary\"\n  color=\"critical\"\n>\n  {{ this.previousTheme }}\n</button>\n", preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ThemeSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-theme-switch', template: "<button\n  (click)=\"toggleTheme()\"\n  category=\"secondary\"\n  color=\"critical\"\n>\n  {{ this.previousTheme }}\n</button>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; } });

const ENGLISH_BANNER_URL = 'https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg';
const FRENCH_BANNER_URL = 'https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-fr.svg';
const HEADER_IMG_LINK_EN = 'https://www.canada.ca/en.html';
const HEADER_IMG_LINK_FR = 'https://www.canada.ca/fr.html';
const CANADA_LOGO_ARIA_LABEL_ENGLISH = 'Symbol of the Government of Canada';
const CANADA_LOGO_ARIA_LABEL_FRENCH = 'Symbole du gouvernement du Canada';
class HeaderComponent {
    constructor(translate) {
        this.translate = translate;
        /**
         * This is the ID of the header component. Will be applied as the ID of the header Element within the custom element.
         *
         * All IDs must be unique and can be used to specifically target an element within your project.
         */
        this.id = '';
        this.themeToggle = false;
        this.imageURL = '';
        this.alt = '';
        this.govCanadaLink = '';
    }
    /**
    * ngOnInit() lifecycle method run immediately when the component is initialized. c
    *
    * For Header Component the ngOnInit() checks for current url Language and subscribes to changes. Appropriate translations
    * will be pulled as a result and content will be displayed in the users selected language.
    */
    ngOnInit() {
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
            this.imageURL = ENGLISH_BANNER_URL;
            this.alt = CANADA_LOGO_ARIA_LABEL_ENGLISH;
            this.govCanadaLink = HEADER_IMG_LINK_EN;
        }
        else {
            this.imageURL = FRENCH_BANNER_URL;
            this.alt = CANADA_LOGO_ARIA_LABEL_FRENCH;
            this.govCanadaLink = HEADER_IMG_LINK_FR;
        }
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HeaderComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: HeaderComponent, selector: "ircc-cl-lib-header", inputs: { id: "id", themeToggle: "themeToggle" }, ngImport: i0, template: "<header\n  class=\"heading\"\n  role=\"banner\"\n  [id]=\"id\"\n>\n  <div class=\"header-content\">\n    <div class=\"image-container\">\n      <a\n        href=\"{{ govCanadaLink }}\"\n        id=\"canada-home-img-link\"\n        target=\"_blank\"\n        property=\"url\"\n        role=\"link\"\n        tabindex=\"0\"\n      >\n        <img\n          src=\"{{ imageURL }}\"\n          alt=\"{{ alt }}\"\n          property=\"logo\"\n        />\n      </a>\n    </div>\n\n    <div class=\"languageSwitch\">\n      <ircc-cl-lib-language-switch\n        [id]=\"id + '_langToggle'\"\n      ></ircc-cl-lib-language-switch>\n      <ircc-cl-lib-theme-switch *ngIf=\"themeToggle\"></ircc-cl-lib-theme-switch>\n    </div>\n  </div>\n  <hr class=\"headerLine\" />\n</header>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: LanguageSwitchComponent, selector: "ircc-cl-lib-language-switch", inputs: ["id"] }, { kind: "component", type: ThemeSwitchComponent, selector: "ircc-cl-lib-theme-switch" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-header', template: "<header\n  class=\"heading\"\n  role=\"banner\"\n  [id]=\"id\"\n>\n  <div class=\"header-content\">\n    <div class=\"image-container\">\n      <a\n        href=\"{{ govCanadaLink }}\"\n        id=\"canada-home-img-link\"\n        target=\"_blank\"\n        property=\"url\"\n        role=\"link\"\n        tabindex=\"0\"\n      >\n        <img\n          src=\"{{ imageURL }}\"\n          alt=\"{{ alt }}\"\n          property=\"logo\"\n        />\n      </a>\n    </div>\n\n    <div class=\"languageSwitch\">\n      <ircc-cl-lib-language-switch\n        [id]=\"id + '_langToggle'\"\n      ></ircc-cl-lib-language-switch>\n      <ircc-cl-lib-theme-switch *ngIf=\"themeToggle\"></ircc-cl-lib-theme-switch>\n    </div>\n  </div>\n  <hr class=\"headerLine\" />\n</header>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { id: [{
                type: Input
            }], themeToggle: [{
                type: Input
            }] } });

const GOV_LOGO_FOOTER = 'https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg';
const GOV_LOGO_ALT_TEXT_EN = 'Canada wordmark';
const GOV_LOGO_ALT_TEXT_FR = 'FR Canada wordmark';
class FooterComponent {
    constructor(translate) {
        this.translate = translate;
        this.id = '';
        this.imageURL = '';
        this.altImage = '';
    }
    ngOnInit() {
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
    }
    setLang(lang) {
        if (lang === 'en' || lang === 'en-US') {
            this.imageURL = GOV_LOGO_FOOTER;
            this.altImage = GOV_LOGO_ALT_TEXT_EN;
        }
        else {
            this.imageURL = GOV_LOGO_FOOTER;
            this.altImage = GOV_LOGO_ALT_TEXT_FR;
        }
    }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FooterComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: FooterComponent, selector: "ircc-cl-lib-footer", inputs: { id: "id" }, ngImport: i0, template: "<footer\n  class=\"ircc-cl-lib-footer footing\"\n  role=\"contentinfo\"\n>\n  <div\n    class=\"grid-container\"\n    [id]=\"id\"\n  >\n    <div class=\"item1 body3\">\n      <ng-content></ng-content>\n    </div>\n    <picture class=\"item2\">\n      <img\n        src=\"{{ imageURL }}\"\n        alt=\"{{ altImage }}\"\n      />\n    </picture>\n  </div>\n</footer>\n", preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-footer', template: "<footer\n  class=\"ircc-cl-lib-footer footing\"\n  role=\"contentinfo\"\n>\n  <div\n    class=\"grid-container\"\n    [id]=\"id\"\n  >\n    <div class=\"item1 body3\">\n      <ng-content></ng-content>\n    </div>\n    <picture class=\"item2\">\n      <img\n        src=\"{{ imageURL }}\"\n        alt=\"{{ altImage }}\"\n      />\n    </picture>\n  </div>\n</footer>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { id: [{
                type: Input
            }] } });

class HiddenNavComponent {
    constructor() {
        this.config = {
            id: ''
        };
    }
    scrollToAnchor(id) {
        if (id) {
            const el = document.getElementById(id);
            el === null || el === void 0 ? void 0 : el.scrollIntoView();
            el === null || el === void 0 ? void 0 : el.setAttribute('tabindex', '-1');
            el === null || el === void 0 ? void 0 : el.focus();
        }
    }
    handleKeyDown(key, link) {
        key === 'Tab' ? this.showNav() : null;
        key === 'Enter' && link ? this.scrollToAnchor(link) : null;
    }
    showNav() {
        const container = document.getElementById('hidden-nav-container');
        const btns = document.getElementsByClassName('hidden-btns');
        container === null || container === void 0 ? void 0 : container.classList.add('active-nav');
    }
}
HiddenNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HiddenNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HiddenNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: HiddenNavComponent, selector: "ircc-cl-lib-hidden-nav", inputs: { config: "config" }, host: { listeners: { "keydown": "handleKeyDown($event.key)" } }, ngImport: i0, template: "<div id=\"hidden-nav-container\">\n  <ng-container *ngFor=\"let link of config?.skipLinks; let i = index\">\n    <button\n      class=\"hidden-btns\"\n      role=\"link\"\n      (click)=\"scrollToAnchor(link.href)\"\n      (keydown)=\"handleKeyDown($event.key, link.href)\"\n      [tabindex]=\"i + 1\"\n      [attr.aria-label]=\"link.ariaLabel\"\n    >\n      {{ link.title }}\n    </button>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HiddenNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-hidden-nav', template: "<div id=\"hidden-nav-container\">\n  <ng-container *ngFor=\"let link of config?.skipLinks; let i = index\">\n    <button\n      class=\"hidden-btns\"\n      role=\"link\"\n      (click)=\"scrollToAnchor(link.href)\"\n      (keydown)=\"handleKeyDown($event.key, link.href)\"\n      [tabindex]=\"i + 1\"\n      [attr.aria-label]=\"link.ariaLabel\"\n    >\n      {{ link.title }}\n    </button>\n  </ng-container>\n</div>\n" }]
        }], propDecorators: { config: [{
                type: Input
            }], handleKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event.key']]
            }] } });

const IrccDsHeaderFooterComponents = [
    HeaderComponent,
    FooterComponent,
    LanguageSwitchComponent,
    HiddenNavComponent,
    ThemeSwitchComponent
];
class IrccDsAngularHeaderFooterModule {
}
IrccDsAngularHeaderFooterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularHeaderFooterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularHeaderFooterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularHeaderFooterModule, declarations: [HeaderComponent,
        FooterComponent,
        LanguageSwitchComponent,
        HiddenNavComponent,
        ThemeSwitchComponent], imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule], exports: [HeaderComponent,
        FooterComponent,
        LanguageSwitchComponent,
        HiddenNavComponent,
        ThemeSwitchComponent] });
IrccDsAngularHeaderFooterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularHeaderFooterModule, imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularHeaderFooterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...IrccDsHeaderFooterComponents],
                    imports: [
                        CommonModule,
                        IrccDsAngularComponentsSharedModule,
                        TranslateModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [...IrccDsHeaderFooterComponents]
                }]
        }] });

class ChipItemComponent {
    constructor() {
        this.iconClickEvent = new EventEmitter();
    }
    onIconClick() {
        this.iconClickEvent.emit();
    }
    onEnterKeyPress() {
        this.iconClickEvent.emit();
    }
}
ChipItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ChipItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ChipItemComponent, selector: "lib-chip-item", inputs: { chipContent: "chipContent" }, outputs: { iconClickEvent: "iconClickEvent" }, ngImport: i0, template: "<div\n  class=\"chip-item\"\n  tabindex=\"0\"\n  (keydown.enter)=\"onEnterKeyPress()\"\n>\n  <span class=\"chip-text\">{{ chipContent || '' }}</span>\n  <span\n    class=\"icon-container\"\n    (click)=\"onIconClick()\"\n  >\n    <i class=\"fa-solid fa-circle-xmark clickable-icon\"></i>\n  </span>\n</div>\n", preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ChipItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-chip-item', template: "<div\n  class=\"chip-item\"\n  tabindex=\"0\"\n  (keydown.enter)=\"onEnterKeyPress()\"\n>\n  <span class=\"chip-text\">{{ chipContent || '' }}</span>\n  <span\n    class=\"icon-container\"\n    (click)=\"onIconClick()\"\n  >\n    <i class=\"fa-solid fa-circle-xmark clickable-icon\"></i>\n  </span>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { chipContent: [{
                type: Input
            }], iconClickEvent: [{
                type: Output
            }] } });

/**
 * TODO: This particular component, while functional, is not ideal. Components should not import other components directly in the .ts
 * unless absolutely necessary. Furthermore, the use of DoCheck, while interesting, is not ideal, since it ignores the built-in
 * angular lifecycle hooks and change detection.
 */
class AutocompleteComponent {
    constructor(differs) {
        this.differs = differs;
        //TODO: Change this to a config
        this.options = [];
        this.title = `Title`;
        this.hintText = `Hint Text`;
        this.name = `Add Name`;
        this.error = false;
        this.limit = 0;
        this.selectValueChange = new EventEmitter();
        this.savedSelectedOptions = [];
        this.selectedOptions = [];
        this.originalOptions = [];
        this.hideDropdown = true;
        this.isFocusInsideComponent = false;
        this.isComponentClicked = false;
        this.addHover = false;
        this.emptyResults = false;
        this.differ = this.differs.find({}).create();
    }
    handleKeyDown(event) {
        var _a;
        event.stopPropagation();
        if (this.hideDropdown === false || this.options.length > 0) {
            (_a = this.inputComponent) === null || _a === void 0 ? void 0 : _a.clearvalue();
            this.returnOptionsToDefault();
            this.isComponentClicked = false;
            this.isFocusInsideComponent = false;
            this.hideDropdown = true;
        }
    }
    clickInside(event) {
        const target = event.target;
        if (this.hideDropdown === true &&
            target.type === `text` &&
            this.options.length > 0) {
            this.isFocusInsideComponent = true;
            this.isComponentClicked = true;
            this.toggleDropDown();
            this.addHover = true;
        }
        else if (target.classList.contains('select-target') ||
            target.classList.contains(`selected`)) {
            this.isComponentClicked = false;
            this.isFocusInsideComponent = false;
            this.toggleDropDown();
        }
    }
    clickout() {
        var _a;
        if (!this.isFocusInsideComponent && this.isComponentClicked) {
            this.toggleDropDown();
            (_a = this.inputComponent) === null || _a === void 0 ? void 0 : _a.clearvalue();
            this.returnOptionsToDefault();
            this.isComponentClicked = false;
        }
        this.isFocusInsideComponent = false;
    }
    onMouseEnter() {
        this.addHover = false;
    }
    ngDoCheck() {
        const change = this.differ.diff(this);
        if (change) {
            change.forEachChangedItem((item) => {
                if (item.key === `options`) {
                    this.selectValueChange.emit(this.selectedOptions);
                }
            });
        }
    }
    valueChange(event) {
        this.filterList(event);
    }
    filterList(filterValue) {
        if (filterValue.length < 1) {
            this.returnOptionsToDefault();
        }
        else {
            const filteredOptions = this.originalOptions.filter((value) => {
                return value.text.toLowerCase().includes(filterValue.toLowerCase());
            });
            this.options = filteredOptions.slice(0);
            if (this.options.length === 0) {
                this.emptyResults = true;
            }
            else {
                this.emptyResults = false;
            }
        }
    }
    checkActive(value) {
        for (const selectedOption of this.selectedOptions) {
            if (selectedOption.value === value) {
                return true;
            }
        }
        return false;
    }
    returnOptionsToDefault() {
        this.emptyResults = false;
        this.options = this.originalOptions.slice(0);
    }
    toggleDropDown() {
        var _a;
        this.hideDropdown = !this.hideDropdown;
        (_a = this.inputComponent) === null || _a === void 0 ? void 0 : _a.focusInput(this.hideDropdown);
    }
    toggleDropDownKey(event) {
        if (event.keyCode === 13) {
            this.toggleDropDown();
        }
    }
    removeChipItem(index) {
        this.selectedOptions.splice(index, 1);
        this.returnOptionsToDefault();
    }
    removeAllChipItems() {
        this.selectedOptions = [];
        this.returnOptionsToDefault();
    }
    selectAll() {
        for (const option of this.options) {
            this.selectedOptions.push(option);
        }
        this.returnOptionsToDefault();
    }
    selectIndex(index) {
        var _a;
        if (this.limit !== 0 && this.selectedOptions.length >= this.limit) {
            return;
        }
        else {
            (_a = this.inputComponent) === null || _a === void 0 ? void 0 : _a.clearvalue();
            this.returnOptionsToDefault();
            if (this.checkDuplicated(index) === false) {
                this.selectedOptions.push(this.options[index]);
            }
        }
    }
    checkDuplicated(index) {
        return this.selectedOptions.some((element) => {
            if (element.value === this.options[index].value) {
                return true;
            }
            return false;
        });
    }
    ngOnInit() {
        this.selectedOptions = [];
        this.originalOptions = this.options.slice(0);
        this.selectedOptions = this.savedSelectedOptions;
        this.savedSelectedOptions = [];
        this.returnOptionsToDefault();
    }
}
AutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AutocompleteComponent, deps: [{ token: i0.KeyValueDiffers }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: AutocompleteComponent, selector: "lib-autocomplete", inputs: { options: "options", title: "title", hintText: "hintText", name: "name", error: "error", limit: "limit", savedSelectedOptions: "savedSelectedOptions" }, outputs: { selectValueChange: "selectValueChange" }, host: { listeners: { "window:keydown.escape": "handleKeyDown($event)", "click": "clickInside($event)", "document:click": "clickout()" } }, viewQueries: [{ propertyName: "inputComponent", first: true, predicate: InputComponent, descendants: true, static: true }], ngImport: i0, template: "<div\n  class=\"autocomplete-container\"\n  [ngClass]=\"{ error: error }\"\n>\n  <div>\n    <!-- <jl-pr-sclp-input\n      [label]=\"title\"\n      [hintText]=\"hintText\"\n      [placeholder]=\"'+ ' + (name | translate)\"\n      [error]=\"error\"\n      (valueChange)=\"valueChange($event)\"\n    > -->\n    <lib-chip-item\n      *ngFor=\"let option of selectedOptions; let index = index\"\n      [chipContent]=\"option['text']\"\n      (iconClickEvent)=\"removeChipItem(index)\"\n    ></lib-chip-item>\n    <!-- </jl-pr-sclp-input> -->\n  </div>\n\n  <div\n    class=\"autocomplete-options\"\n    [ngClass]=\"hideDropdown === false ? '' : 'hide'\"\n    (mouseenter)=\"onMouseEnter()\"\n  >\n    <div\n      *ngIf=\"limit === 0\"\n      class=\"option autocomplete-target all-results\"\n      (click)=\"selectAll()\"\n      [tabindex]=\"0\"\n      [ngClass]=\"emptyResults === false ? '' : 'hide-option'\"\n    >\n      <p class=\"select-target\">\n        {{ 'AllOptionsForAutocomplete' | translate }} {{ title | translate }}s\n      </p>\n    </div>\n    <div\n      class=\"option autocomplete-target\"\n      *ngFor=\"let option of options; let index = index; first as isFirst\"\n      (click)=\"selectIndex(index)\"\n      [tabindex]=\"index + 1\"\n      [ngClass]=\"checkActive(option['value']) ? 'active' : ''\"\n    >\n      <p class=\"select-target\">{{ option['text'] }}</p>\n    </div>\n    <div\n      class=\"option autocomplete-target\"\n      [ngClass]=\"emptyResults === false ? 'hide-option' : ''\"\n    >\n      <p>{{ 'NoResults' | translate }}</p>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ChipItemComponent, selector: "lib-chip-item", inputs: ["chipContent"], outputs: ["iconClickEvent"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-autocomplete', template: "<div\n  class=\"autocomplete-container\"\n  [ngClass]=\"{ error: error }\"\n>\n  <div>\n    <!-- <jl-pr-sclp-input\n      [label]=\"title\"\n      [hintText]=\"hintText\"\n      [placeholder]=\"'+ ' + (name | translate)\"\n      [error]=\"error\"\n      (valueChange)=\"valueChange($event)\"\n    > -->\n    <lib-chip-item\n      *ngFor=\"let option of selectedOptions; let index = index\"\n      [chipContent]=\"option['text']\"\n      (iconClickEvent)=\"removeChipItem(index)\"\n    ></lib-chip-item>\n    <!-- </jl-pr-sclp-input> -->\n  </div>\n\n  <div\n    class=\"autocomplete-options\"\n    [ngClass]=\"hideDropdown === false ? '' : 'hide'\"\n    (mouseenter)=\"onMouseEnter()\"\n  >\n    <div\n      *ngIf=\"limit === 0\"\n      class=\"option autocomplete-target all-results\"\n      (click)=\"selectAll()\"\n      [tabindex]=\"0\"\n      [ngClass]=\"emptyResults === false ? '' : 'hide-option'\"\n    >\n      <p class=\"select-target\">\n        {{ 'AllOptionsForAutocomplete' | translate }} {{ title | translate }}s\n      </p>\n    </div>\n    <div\n      class=\"option autocomplete-target\"\n      *ngFor=\"let option of options; let index = index; first as isFirst\"\n      (click)=\"selectIndex(index)\"\n      [tabindex]=\"index + 1\"\n      [ngClass]=\"checkActive(option['value']) ? 'active' : ''\"\n    >\n      <p class=\"select-target\">{{ option['text'] }}</p>\n    </div>\n    <div\n      class=\"option autocomplete-target\"\n      [ngClass]=\"emptyResults === false ? 'hide-option' : ''\"\n    >\n      <p>{{ 'NoResults' | translate }}</p>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.KeyValueDiffers }]; }, propDecorators: { inputComponent: [{
                type: ViewChild,
                args: [InputComponent, { static: true }]
            }], options: [{
                type: Input
            }], title: [{
                type: Input
            }], hintText: [{
                type: Input
            }], name: [{
                type: Input
            }], error: [{
                type: Input
            }], limit: [{
                type: Input
            }], selectValueChange: [{
                type: Output
            }], savedSelectedOptions: [{
                type: Input
            }], handleKeyDown: [{
                type: HostListener,
                args: ['window:keydown.escape', ['$event']]
            }], clickInside: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], clickout: [{
                type: HostListener,
                args: ['document:click']
            }] } });

class ChipListComponent {
    constructor() {
        this.chipListChange = new EventEmitter();
    }
    ngOnInit() { }
    removeChipItem(chipIdx) {
        var _a;
        (_a = this.chipList) === null || _a === void 0 ? void 0 : _a.splice(chipIdx, 1);
        this.chipListChange.emit(this.chipList);
    }
    onSubmit() {
        var _a;
        if (this.chipContentText) {
            (_a = this.chipList) === null || _a === void 0 ? void 0 : _a.push(this.chipContentText);
            this.chipListChange.emit(this.chipList);
            this.chipContentText = '';
        }
    }
}
ChipListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ChipListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ChipListComponent, selector: "lib-chip-list", inputs: { chipList: "chipList" }, outputs: { chipListChange: "chipListChange" }, ngImport: i0, template: "<form\n  #form=\"ngForm\"\n  (ngSubmit)=\"onSubmit()\"\n>\n  <ircc-cl-lib-input\n    name=\"chipContentText\"\n    [(ngModel)]=\"chipContentText\"\n    placeholder=\"Add Chip\"\n  >\n  </ircc-cl-lib-input>\n</form>\n<div class=\"chip-list\">\n  <lib-chip-item\n    *ngFor=\"let chip of chipList; let idx = index\"\n    [chipContent]=\"chip\"\n    (iconClickEvent)=\"removeChipItem(idx)\"\n  ></lib-chip-item>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i5.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: ChipItemComponent, selector: "lib-chip-item", inputs: ["chipContent"], outputs: ["iconClickEvent"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ChipListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-chip-list', template: "<form\n  #form=\"ngForm\"\n  (ngSubmit)=\"onSubmit()\"\n>\n  <ircc-cl-lib-input\n    name=\"chipContentText\"\n    [(ngModel)]=\"chipContentText\"\n    placeholder=\"Add Chip\"\n  >\n  </ircc-cl-lib-input>\n</form>\n<div class=\"chip-list\">\n  <lib-chip-item\n    *ngFor=\"let chip of chipList; let idx = index\"\n    [chipContent]=\"chip\"\n    (iconClickEvent)=\"removeChipItem(idx)\"\n  ></lib-chip-item>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { chipList: [{
                type: Input
            }], chipListChange: [{
                type: Output
            }] } });

class SecondaryChipsComponent {
    constructor() { }
    ngOnInit() { }
}
SecondaryChipsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SecondaryChipsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SecondaryChipsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: SecondaryChipsComponent, selector: "lib-secondary-chips", inputs: { chipContent: "chipContent" }, ngImport: i0, template: "<div\n  class=\"secondary-chip\"\n  tabindex=\"0\"\n>\n  <span class=\"secondary-chip-text\">{{ chipContent || '' | translate }}</span>\n</div>\n", dependencies: [{ kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SecondaryChipsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-secondary-chips', template: "<div\n  class=\"secondary-chip\"\n  tabindex=\"0\"\n>\n  <span class=\"secondary-chip-text\">{{ chipContent || '' | translate }}</span>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { chipContent: [{
                type: Input
            }] } });

class SearchInputComponent {
    constructor() {
        this.searchEvent = new EventEmitter();
        this.searchInputControl = new FormControl();
    }
    ngOnInit() {
        console.log('testing');
    }
}
SearchInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: SearchInputComponent, selector: "lib-search-input", inputs: { config: "config" }, outputs: { searchEvent: "searchEvent" }, ngImport: i0, template: "<input formControlName=\"searchInputControl\" />\n<!-- TODO: Translation? -->\n<ng-container *ngIf=\"config?.searchButton\">\n  <button>{{ config?.searchButton?.text }}</button>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SearchInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-search-input', template: "<input formControlName=\"searchInputControl\" />\n<!-- TODO: Translation? -->\n<ng-container *ngIf=\"config?.searchButton\">\n  <button>{{ config?.searchButton?.text }}</button>\n</ng-container>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], searchEvent: [{
                type: Output
            }] } });

const IrccDsLegacyOldComponents = [
    AutocompleteComponent,
    ChipListComponent,
    SecondaryChipsComponent,
    ChipItemComponent,
    SearchInputComponent
];
class IrccDsAngularLegacyOldModule {
}
IrccDsAngularLegacyOldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularLegacyOldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularLegacyOldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularLegacyOldModule, declarations: [AutocompleteComponent,
        ChipListComponent,
        SecondaryChipsComponent,
        ChipItemComponent,
        SearchInputComponent], imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule], exports: [AutocompleteComponent,
        ChipListComponent,
        SecondaryChipsComponent,
        ChipItemComponent,
        SearchInputComponent] });
IrccDsAngularLegacyOldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularLegacyOldModule, imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularLegacyOldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...IrccDsLegacyOldComponents],
                    imports: [
                        CommonModule,
                        IrccDsAngularComponentsSharedModule,
                        TranslateModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [...IrccDsLegacyOldComponents]
                }]
        }] });

//TODO: Add detailed readme listing how this actually works. People will be SOOOO confused.
class NavigationService {
    constructor() {
        //Used entirely as a workaround for the change detection limitations
        this.itemChangeSubj = new Subject();
        this.itemChangeObs$ = this.itemChangeSubj.asObservable();
        this.navEventSubj = new Subject();
        this.navEventObs$ = this.navEventSubj.asObservable(); //Use this for any events we need propagated up to parents
        this.navConfigSubj = new BehaviorSubject({
            id: '',
            label: '',
            iconLeading: '',
            iconTrailing: '',
            height: '',
            size: 'small',
            scrolling: false,
            marginTop: 0,
            navigationConfig: []
        });
        this.navConfigObs$ = this.navConfigSubj.asObservable();
        this.flattenedNavigation = [];
        /**
         * Flatten an object into a simple array
         * @param obj object being flattened
         * @returns flattened array
         */
        this.flatten = (obj) => {
            const stack = [obj];
            let stackB = [];
            while ((stack === null || stack === void 0 ? void 0 : stack.length) > 0) {
                const currentObj = stack.pop();
                if (!Array.isArray(currentObj)) {
                    stackB.push(currentObj);
                }
                Object.keys(currentObj).forEach((key) => {
                    if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
                        stack.push(currentObj[key]);
                    }
                });
            }
            return stackB;
        };
        /**
         *
         * @param items flattened array
         * @param key of the key value pair ('id')
         * @param value id of the piece being searched for (update.id)
         * @returns
         */
        this.findByKey = (items, key, value) => {
            let returnItem = {
                id: '',
                label: '',
                type: 'accordion',
                children: []
            };
            returnItem = items.find((element) => element[key] === value) || {
                id: '',
                label: '',
                type: 'accordion',
                children: []
            };
            return returnItem;
        };
        /**
         * Replace the contents of one object with those of another. This is done to keep our
         * memory trick going
         * @param obj1 object being updated
         * @param obj2 values to put in obj1
         */
        this.setNavItemFields = (obj1, obj2) => {
            Object.keys(obj2).forEach((key) => {
                obj1[key] = obj2[key];
            });
        };
    }
    /**
     * Broadcast the config object of the value and flatten the array
     * @param update: INavigationConfig
     */
    setNavConfig(update) {
        this.navConfigSubj.next(update);
        this.flattenedNavigation = this.flatten(update);
    }
    /**
     * General broadcast of an element update
     * @param event
     */
    setNavItem(update) {
        this.setNavItemFields(this.findByKey(this.flattenedNavigation, 'id', update.id), update);
        this.itemChangeSubj.next(update.id); //This is used to get around a change detection problem in the various child components
    }
    /**
     * Broadcast element events
     * @param event: INavItemEvent where id is the id of the component broadcasting and event is the Event
     */
    navEvent(event) {
        this.navEventSubj.next(event);
    }
}
NavigationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NavigationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NavigationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NavigationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NavigationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class navItemHeadingComponent {
    constructor(navEvent) {
        var _a, _b;
        this.navEvent = navEvent;
        this.config = {
            id: '',
            label: '',
            iconLeading: '',
            size: 'small',
            type: 'heading',
            children: []
        };
        this.id = '';
        this.label = '';
        this.iconLeading = '';
        this.buttonIcon = {
            id: `${this.config.id}-button`,
            category: 'custom',
            size: (_a = this.config) === null || _a === void 0 ? void 0 : _a.size,
            icon: {
                class: (_b = this.config) === null || _b === void 0 ? void 0 : _b.iconLeading,
                color: 'var(--text-primary)'
            }
        };
        this.navObjectChangeSub = new Subscription();
    }
    ngOnInit() {
        var _a, _b;
        this.id !== '' ? (this.config.id = this.id) : undefined;
        this.label !== '' ? (this.config.label = this.label) : undefined;
        this.iconLeading !== ''
            ? (this.config.iconLeading = this.iconLeading)
            : undefined;
        this.children !== undefined
            ? (this.config.children = this.children)
            : undefined;
        this.size !== undefined ? (this.config.size = this.size) : undefined;
        this.buttonIcon = {
            id: `${this.config.id}_button`,
            category: 'custom',
            size: (_a = this.config) === null || _a === void 0 ? void 0 : _a.size,
            icon: {
                class: (_b = this.config) === null || _b === void 0 ? void 0 : _b.iconLeading,
                color: 'var(--text-primary)'
            }
        };
    }
}
navItemHeadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemHeadingComponent, deps: [{ token: NavigationService }], target: i0.ɵɵFactoryTarget.Component });
navItemHeadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navItemHeadingComponent, selector: "ircc-cl-lib-nav-header", inputs: { config: "config", id: "id", label: "label", iconLeading: "iconLeading", children: "children", size: "size" }, ngImport: i0, template: "<div [id]=\"config.id\">\n  <div\n    class=\"nav-header-header\"\n    [class]=\"config.iconLeading.length > 0 ? 'grid-header' : ''\"\n  >\n    <ircc-cl-lib-icon\n      *ngIf=\"config.iconLeading.length > 0\"\n      [config]=\"{ FA_keywords: config.iconLeading }\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n    <h2>{{ config?.label || '' | translate }}</h2>\n  </div>\n  <div class=\"nav-header-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemHeadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-nav-header', template: "<div [id]=\"config.id\">\n  <div\n    class=\"nav-header-header\"\n    [class]=\"config.iconLeading.length > 0 ? 'grid-header' : ''\"\n  >\n    <ircc-cl-lib-icon\n      *ngIf=\"config.iconLeading.length > 0\"\n      [config]=\"{ FA_keywords: config.iconLeading }\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n    <h2>{{ config?.label || '' | translate }}</h2>\n  </div>\n  <div class=\"nav-header-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: NavigationService }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], label: [{
                type: Input
            }], iconLeading: [{
                type: Input
            }], children: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

//TODO: Fix class name (NavItemNavComponent)
class navItemNavComponent {
    constructor(renderer, navEvent, cdr) {
        this.renderer = renderer;
        this.navEvent = navEvent;
        this.cdr = cdr;
        //TODO: Pattern is supposed to be that any elements that may not be used should be OPTIONAL
        this.config = {
            id: '',
            href: '',
            anchor: '',
            external: false,
            border: false,
            label: '',
            iconLeading: '',
            iconTrailing: '',
            type: 'link',
            children: [],
            header: false
        };
        this.id = '';
        this.indicatorConfig = {
            category: 'weak',
            purpose: 'status',
            type: 'dot',
            tabIndex: -1
        };
        this.headerConfig = {
            iconLeading: '',
            id: 'header_link',
            label: 'Header Title',
            type: 'heading',
            children: []
        };
        this.navObjectChangeSub = new Subscription();
    }
    ngOnInit() {
        //Used entirely as a workaround for the change detection limitations
        this.navObjectChangeSub = this.navEvent.itemChangeObs$
            .pipe(filter((item) => item === this.config.id))
            .subscribe(() => {
            var _a, _b;
            this.indicatorConfig.status = (_a = this.config.indicator) === null || _a === void 0 ? void 0 : _a.status;
            this.indicatorConfig.icon = (_b = this.config.indicator) === null || _b === void 0 ? void 0 : _b.icon;
        });
        this.id !== '' ? (this.config.id = this.id) : undefined;
        if (this.config.indicator) {
            this.indicatorConfig = {
                type: 'dot',
                category: 'weak',
                purpose: 'status',
                status: this.config.indicator.status,
                icon: this.config.indicator.icon,
                tabIndex: -1
            };
            this.config.indicator.label
                ? (this.indicatorConfig = Object.assign(Object.assign({}, this.indicatorConfig), { type: 'text', label: this.config.indicator.label, tabIndex: -1 }))
                : null;
            this.size
                ? (this.indicatorConfig = Object.assign(Object.assign({}, this.indicatorConfig), { size: this.size }))
                : null;
        }
        this.size !== undefined ? (this.config.size = this.size) : undefined;
    }
    linkClick(e) {
        this.navEvent.navEvent({ id: this.config.id, event: e }); //Broadcast the event
        if (!this.config.external) {
            setTimeout(() => {
                var _a;
                if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.anchor) {
                    const anchorElement = this.renderer.selectRootElement(`#${this.config.anchor}`, true);
                    anchorElement
                        ? anchorElement.scrollIntoView({ behavior: 'smooth' })
                        : null;
                }
            }, 0);
        }
    }
    enterPress(event) {
        var _a, _b;
        if (this.config.external) {
            (_a = this.externalLinkA) === null || _a === void 0 ? void 0 : _a.nativeElement.click();
        }
        else {
            (_b = this.internalLink) === null || _b === void 0 ? void 0 : _b.nativeElement.click();
        }
    }
}
navItemNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemNavComponent, deps: [{ token: i0.Renderer2 }, { token: NavigationService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
navItemNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navItemNavComponent, selector: "ircc-cl-lib-nav-item", inputs: { config: "config", id: "id", size: "size", indicator: "indicator" }, viewQueries: [{ propertyName: "externalLinkA", first: true, predicate: ["externalLinkA"], descendants: true }, { propertyName: "internalLink", first: true, predicate: ["internalLink"], descendants: true }], ngImport: i0, template: "<div\n  tabindex=\"1\"\n  [id]=\"config.id\"\n  class=\"lib-nav-item\"\n  [ngClass]=\"config?.border ? 'border-left' : null\"\n  (keydown.enter)=\"enterPress($event)\"\n>\n  <div>\n    <ng-container *ngIf=\"config?.external !== true; else externalLink\">\n      <a\n        [routerLink]=\"config?.href || '' | translate\"\n        [fragment]=\"config?.anchor\"\n        [routerLinkActive]=\"'active-link'\"\n        (click)=\"linkClick($event)\"\n        #internalLink\n      >\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconLeading\"\n          class=\"icon-left\"\n          [config]=\"{ FA_keywords: config?.iconLeading || '' }\"\n        ></ircc-cl-lib-icon>\n        <p *ngIf=\"config?.header !== true\">\n          {{ config?.label || '' | translate }}\n        </p>\n        <h2\n          *ngIf=\"config?.header === true\"\n          class=\"h5\"\n        >\n          {{ config?.label || '' | translate }}\n        </h2>\n        <!-- <ircc-cl-lib-nav-header\n          [attr.size]=\"config.size\"\n          [size]=\"config.size\"\n          [label]=\"\"\n          *ngIf=\"config?.header === true\"\n        >\n        </ircc-cl-lib-nav-header> -->\n        <ircc-cl-lib-indicator\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.indicator\"\n          [config]=\"indicatorConfig\"\n        ></ircc-cl-lib-indicator>\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconTrailing\"\n          class=\"icon-trailing\"\n          [config]=\"{ FA_keywords: config?.iconTrailing || '' }\"\n        ></ircc-cl-lib-icon>\n      </a>\n    </ng-container>\n    <ng-template #externalLink>\n      <a\n        #externalLinkA\n        target=\"_blank\"\n        [attr.href]=\"\n          config?.href + (config?.anchor ? '#' + config.anchor : '') || ''\n            | translate\n        \"\n      >\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconLeading\"\n          class=\"icon-left\"\n          [config]=\"{ FA_keywords: config?.iconLeading || '' }\"\n        ></ircc-cl-lib-icon>\n        <p>{{ config?.label || '' | translate }} {{ config.size }}</p>\n        <ircc-cl-lib-indicator\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.indicator\"\n          [config]=\"indicatorConfig\"\n        ></ircc-cl-lib-indicator>\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconTrailing\"\n          class=\"icon-trailing\"\n          [config]=\"{ FA_keywords: config?.iconTrailing || '' }\"\n        ></ircc-cl-lib-icon>\n      </a>\n    </ng-template>\n  </div>\n  <div>\n    <ng-content></ng-content>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "component", type: IndicatorComponent, selector: "ircc-cl-lib-indicator", inputs: ["config", "size", "type", "icon", "category", "purpose", "status", "palette", "ariaLabel", "tabIndex"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-nav-item', template: "<div\n  tabindex=\"1\"\n  [id]=\"config.id\"\n  class=\"lib-nav-item\"\n  [ngClass]=\"config?.border ? 'border-left' : null\"\n  (keydown.enter)=\"enterPress($event)\"\n>\n  <div>\n    <ng-container *ngIf=\"config?.external !== true; else externalLink\">\n      <a\n        [routerLink]=\"config?.href || '' | translate\"\n        [fragment]=\"config?.anchor\"\n        [routerLinkActive]=\"'active-link'\"\n        (click)=\"linkClick($event)\"\n        #internalLink\n      >\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconLeading\"\n          class=\"icon-left\"\n          [config]=\"{ FA_keywords: config?.iconLeading || '' }\"\n        ></ircc-cl-lib-icon>\n        <p *ngIf=\"config?.header !== true\">\n          {{ config?.label || '' | translate }}\n        </p>\n        <h2\n          *ngIf=\"config?.header === true\"\n          class=\"h5\"\n        >\n          {{ config?.label || '' | translate }}\n        </h2>\n        <!-- <ircc-cl-lib-nav-header\n          [attr.size]=\"config.size\"\n          [size]=\"config.size\"\n          [label]=\"\"\n          *ngIf=\"config?.header === true\"\n        >\n        </ircc-cl-lib-nav-header> -->\n        <ircc-cl-lib-indicator\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.indicator\"\n          [config]=\"indicatorConfig\"\n        ></ircc-cl-lib-indicator>\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconTrailing\"\n          class=\"icon-trailing\"\n          [config]=\"{ FA_keywords: config?.iconTrailing || '' }\"\n        ></ircc-cl-lib-icon>\n      </a>\n    </ng-container>\n    <ng-template #externalLink>\n      <a\n        #externalLinkA\n        target=\"_blank\"\n        [attr.href]=\"\n          config?.href + (config?.anchor ? '#' + config.anchor : '') || ''\n            | translate\n        \"\n      >\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconLeading\"\n          class=\"icon-left\"\n          [config]=\"{ FA_keywords: config?.iconLeading || '' }\"\n        ></ircc-cl-lib-icon>\n        <p>{{ config?.label || '' | translate }} {{ config.size }}</p>\n        <ircc-cl-lib-indicator\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.indicator\"\n          [config]=\"indicatorConfig\"\n        ></ircc-cl-lib-indicator>\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconTrailing\"\n          class=\"icon-trailing\"\n          [config]=\"{ FA_keywords: config?.iconTrailing || '' }\"\n        ></ircc-cl-lib-icon>\n      </a>\n    </ng-template>\n  </div>\n  <div>\n    <ng-content></ng-content>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: NavigationService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { externalLinkA: [{
                type: ViewChild,
                args: ['externalLinkA', { static: false }]
            }], internalLink: [{
                type: ViewChild,
                args: ['internalLink', { static: false }]
            }], config: [{
                type: Input
            }], id: [{
                type: Input
            }], size: [{
                type: Input
            }], indicator: [{
                type: Input
            }] } });

class navItemAccordionComponent {
    constructor(navEvent) {
        var _a, _b;
        this.navEvent = navEvent;
        this.config = {
            id: '',
            open: false,
            label: '',
            size: 'small',
            type: 'accordion',
            children: []
        };
        this.id = '';
        this.label = '';
        this.iconLeading = '';
        this.headerID = '';
        this.buttonIconOpen = {
            id: `${this.config.id}-button`,
            category: 'custom',
            size: (_a = this.config) === null || _a === void 0 ? void 0 : _a.size,
            icon: {
                class: 'fa-light fa-arrow-right',
                color: 'var(--text-primary)'
            }
        };
        this.buttonIconClose = {
            id: `${this.config.id}-button`,
            category: 'custom',
            size: (_b = this.config) === null || _b === void 0 ? void 0 : _b.size,
            icon: {
                class: 'fa-light fa-arrow-right',
                color: 'var(--text-primary)'
            }
        };
        this.navObjectChangeSub = new Subscription();
    }
    ngOnInit() {
        var _a, _b;
        // this.navObjectChangeSub = this.navEvent.navObjectChangeObs$.pipe(
        //   filter(item => (item.id === this.config.id && item.type === 'accordion'))).subscribe(response => {
        //     this.config = response as NavigationItemAccordion;
        //   });
        this.id !== '' ? (this.config.id = this.id) : undefined;
        this.open !== undefined ? (this.config.open = this.open) : undefined;
        this.label !== '' ? (this.config.label = this.label) : undefined;
        this.size !== undefined ? (this.config.size = this.size) : undefined;
        this.iconLeading !== ''
            ? (this.config.iconLeading = this.iconLeading)
            : undefined;
        console.log(this.config);
        this.headerID = `${this.config.id}_header`;
        this.buttonIconOpen = {
            id: `${this.config.id}_button_open`,
            category: 'custom',
            size: (_a = this.config) === null || _a === void 0 ? void 0 : _a.size,
            icon: {
                class: 'fa-light fa-chevron-up',
                color: 'var(--text-primary)'
            }
        };
        this.buttonIconClose = {
            id: `${this.config.id}_button_close`,
            category: 'custom',
            size: (_b = this.config) === null || _b === void 0 ? void 0 : _b.size,
            icon: {
                class: 'fa-light fa-chevron-down',
                color: 'var(--text-primary)'
            }
        };
    }
    openAccordion(event) {
        this.config.open = !this.config.open;
        this.navEvent.navEvent({ id: this.config.id, event: event });
    }
    enterPress(event) {
        this.config.open = !this.config.open;
    }
}
navItemAccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemAccordionComponent, deps: [{ token: NavigationService }], target: i0.ɵɵFactoryTarget.Component });
navItemAccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navItemAccordionComponent, selector: "ircc-cl-lib-nav-accordion", inputs: { config: "config", id: "id", open: "open", label: "label", size: "size", iconLeading: "iconLeading" }, ngImport: i0, template: "<div\n  [id]=\"config.id\"\n  class=\"lib-nav-item\"\n>\n  <div class=\"accordion-panel\">\n    <div\n      class=\"accordion-nav\"\n      tabindex=\"1\"\n      (keydown.enter)=\"enterPress($event)\"\n    >\n      <ircc-cl-lib-nav-header\n        [id]=\"headerID\"\n        [attr.size]=\"config.size\"\n        [size]=\"config.size\"\n        [label]=\"config?.label || ''\"\n        [iconLeading]=\"config?.iconLeading || ''\"\n      >\n      </ircc-cl-lib-nav-header>\n\n      <ircc-cl-lib-icon-button\n        *ngIf=\"config.open === true\"\n        (clickEvent)=\"openAccordion($event)\"\n        [config]=\"buttonIconOpen\"\n        [attr.size]=\"config.size\"\n        class=\"open\"\n      ></ircc-cl-lib-icon-button>\n      <ircc-cl-lib-icon-button\n        *ngIf=\"config.open === false\"\n        (clickEvent)=\"openAccordion($event)\"\n        [attr.size]=\"config.size\"\n        [config]=\"buttonIconClose\"\n        class=\"close\"\n      ></ircc-cl-lib-icon-button>\n    </div>\n    <div\n      [class]=\"\n        config.open ? 'open accordion-content' : 'close accordion-content'\n      \"\n    >\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: IconButtonComponent, selector: "ircc-cl-lib-icon-button", inputs: ["config", "id", "category", "size", "ariaLabel", "disabled", "icon"], outputs: ["clickEvent"] }, { kind: "component", type: navItemHeadingComponent, selector: "ircc-cl-lib-nav-header", inputs: ["config", "id", "label", "iconLeading", "children", "size"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemAccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-nav-accordion', template: "<div\n  [id]=\"config.id\"\n  class=\"lib-nav-item\"\n>\n  <div class=\"accordion-panel\">\n    <div\n      class=\"accordion-nav\"\n      tabindex=\"1\"\n      (keydown.enter)=\"enterPress($event)\"\n    >\n      <ircc-cl-lib-nav-header\n        [id]=\"headerID\"\n        [attr.size]=\"config.size\"\n        [size]=\"config.size\"\n        [label]=\"config?.label || ''\"\n        [iconLeading]=\"config?.iconLeading || ''\"\n      >\n      </ircc-cl-lib-nav-header>\n\n      <ircc-cl-lib-icon-button\n        *ngIf=\"config.open === true\"\n        (clickEvent)=\"openAccordion($event)\"\n        [config]=\"buttonIconOpen\"\n        [attr.size]=\"config.size\"\n        class=\"open\"\n      ></ircc-cl-lib-icon-button>\n      <ircc-cl-lib-icon-button\n        *ngIf=\"config.open === false\"\n        (clickEvent)=\"openAccordion($event)\"\n        [attr.size]=\"config.size\"\n        [config]=\"buttonIconClose\"\n        class=\"close\"\n      ></ircc-cl-lib-icon-button>\n    </div>\n    <div\n      [class]=\"\n        config.open ? 'open accordion-content' : 'close accordion-content'\n      \"\n    >\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: NavigationService }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], open: [{
                type: Input
            }], label: [{
                type: Input
            }], size: [{
                type: Input
            }], iconLeading: [{
                type: Input
            }] } });

class navItemDividerComponent {
    constructor() {
        this.config = {
            id: '',
            children: [],
            label: '',
            type: 'link'
        };
        this.id = '';
    }
    ngOnInit() {
        this.id !== '' ? (this.config.id = this.id) : undefined;
    }
}
navItemDividerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemDividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
navItemDividerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navItemDividerComponent, selector: "ircc-cl-lib-nav-divider", inputs: { config: "config", id: "id" }, ngImport: i0, template: "<div\n  [id]=\"config.id\"\n  class=\"nav-seperator\"\n></div>\n", preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemDividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-nav-divider', template: "<div\n  [id]=\"config.id\"\n  class=\"nav-seperator\"\n></div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }] } });

class navigationComponent {
    constructor(navService, renderer) {
        this.navService = navService;
        this.renderer = renderer;
        this.id = '';
        this.label = '';
        this.iconLeading = '';
        this.iconTrailing = '';
        //TODO: NavigationItem and all other interfaces must be renamed starting with 'I'
        this.navigationConfig = [];
        this.flattenNavigation = [];
        this.config = {
            id: '',
            label: '',
            iconLeading: '',
            iconTrailing: '',
            size: 'small',
            navigationConfig: [],
            scrolling: false,
            height: '75vh',
            marginTop: 0
        };
        this.listenerScroll = () => { };
        this.listenerResize = () => { };
        this.isArray = (obj) => {
            return Array.isArray(obj);
        };
        this.arrayOfObject = (obj) => {
            return Object.keys(obj);
        };
        this.getIconsStatus = () => {
            var _a, _b;
            return (this.config &&
                (((_a = this.config) === null || _a === void 0 ? void 0 : _a.iconLeading) || '').length > 0 &&
                (((_b = this.config) === null || _b === void 0 ? void 0 : _b.iconTrailing) || '').length > 0);
        };
        //These are in THIS component, not in it's own. I.e. the buttons in the actual
        //header are not in a child component.
        this.clickIconLeading = (event) => {
            this.navService.navEvent({ id: this.config.id, event: event });
        };
        this.clickIconTrailing = (event) => {
            this.navService.navEvent({ id: this.config.id, event: event });
        };
        this.navigationClass = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (((((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.iconLeading) === null || _b === void 0 ? void 0 : _b.length) || ''.length > 0) &&
                ((_d = (_c = this.config) === null || _c === void 0 ? void 0 : _c.iconTrailing) === null || _d === void 0 ? void 0 : _d.length)) ||
                ''.length > 0) {
                return 'header-full';
            }
            else if (((_f = (_e = this.config) === null || _e === void 0 ? void 0 : _e.iconLeading) === null || _f === void 0 ? void 0 : _f.length) || ''.length > 0) {
                return 'header-iconleading';
            }
            else if (((_h = (_g = this.config) === null || _g === void 0 ? void 0 : _g.iconTrailing) === null || _h === void 0 ? void 0 : _h.length) || ''.length > 0) {
                return 'header-icontrailing';
            }
            return '';
        };
        this.getHeight = () => {
            this.listenerScroll();
            this.listenerResize();
            if (this.complicatedMaths() === true) {
                this.disableStickyNav();
                this.setScrollableNavigationArea();
                this.listenerResize = this.renderer.listen('window', 'resize', () => {
                    this.setScrollableNavigationArea();
                });
            }
            else if (this.complicatedMaths() === false) {
                this.disableSetScrollableNavigationArea();
                this.setStickyNav();
                this.listenerScroll = this.renderer.listen('window', 'scroll', () => {
                    this.scrolling();
                });
            }
        };
        this.scrolling = () => {
            if (this.scrollTimeout) {
                clearTimeout(this.scrollTimeout);
            }
            this.scrollTimeout = setTimeout((() => {
                this.setStickyNav();
            }).bind(this), 50);
        };
        this.setStickyNav = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (window.pageYOffset > ((_a = this.navigationHeader) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight)) {
                this.renderer.addClass((_b = this.navigationHeader) === null || _b === void 0 ? void 0 : _b.nativeElement, 'position-fixed');
                this.renderer.setStyle((_c = this.navigationHeader) === null || _c === void 0 ? void 0 : _c.nativeElement, 'top', `${(_d = this.config) === null || _d === void 0 ? void 0 : _d.marginTop}px`);
                this.renderer.setStyle((_e = this.navigationAreaScroll) === null || _e === void 0 ? void 0 : _e.nativeElement, 'margin-top', ((_f = this.navigationHeader) === null || _f === void 0 ? void 0 : _f.nativeElement.offsetHeight) +
                    ((_g = this.config) === null || _g === void 0 ? void 0 : _g.marginTop) +
                    'px');
            }
            else {
                this.renderer.removeClass((_h = this.navigationHeader) === null || _h === void 0 ? void 0 : _h.nativeElement, 'position-fixed');
                this.renderer.removeStyle((_j = this.navigationHeader) === null || _j === void 0 ? void 0 : _j.nativeElement, 'top');
                this.renderer.removeStyle((_k = this.navigationAreaScroll) === null || _k === void 0 ? void 0 : _k.nativeElement, 'margin-top');
            }
        };
        this.disableStickyNav = () => {
            var _a, _b, _c, _d;
            this.renderer.removeClass((_a = this.navigationHeader) === null || _a === void 0 ? void 0 : _a.nativeElement, 'position-fixed');
            this.renderer.removeStyle((_b = this.navigationHeader) === null || _b === void 0 ? void 0 : _b.nativeElement, 'top');
            this.renderer.removeStyle((_c = this.navigationAreaScroll) === null || _c === void 0 ? void 0 : _c.nativeElement, 'margin-top');
            this.renderer.removeStyle((_d = this.navigationArea) === null || _d === void 0 ? void 0 : _d.nativeElement, 'height');
        };
        this.complicatedMaths = () => {
            var _a, _b, _c;
            let windowheight = window.innerHeight;
            let usableHeight = windowheight -
                (((_a = this.navigationHeader) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight) +
                    ((_b = this.navigationContentTop) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetHeight) +
                    ((_c = this.navigationContentBottom) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetHeight));
            return usableHeight > windowheight / 2 ? true : false;
        };
        this.setScrollableNavigationArea = () => {
            var _a, _b, _c;
            this.renderer.setStyle((_a = this.navigation) === null || _a === void 0 ? void 0 : _a.nativeElement, 'height', this.config.height);
            this.renderer.setStyle((_b = this.navigation) === null || _b === void 0 ? void 0 : _b.nativeElement, 'overflow-y', 'auto');
            this.renderer.setStyle((_c = this.navigation) === null || _c === void 0 ? void 0 : _c.nativeElement, 'overflow-x', 'clip');
        };
        this.disableSetScrollableNavigationArea = () => {
            var _a, _b, _c;
            this.renderer.removeStyle((_a = this.navigation) === null || _a === void 0 ? void 0 : _a.nativeElement, 'height');
            this.renderer.removeStyle((_b = this.navigation) === null || _b === void 0 ? void 0 : _b.nativeElement, 'overflow-y');
            this.renderer.removeStyle((_c = this.navigation) === null || _c === void 0 ? void 0 : _c.nativeElement, 'overflow-x');
        };
        this.setIndex = (index) => {
            return (index += 1);
        };
    }
    ngOnInit() {
        this.configSub = this.navService.navConfigObs$.subscribe((response) => {
            this.config = response;
        });
    }
    ngAfterViewInit() {
        if (this.config.scrolling === true) {
            this.getHeight();
            this.renderer.listen('window', 'resize', () => {
                this.getHeight();
            });
        }
    }
}
navigationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navigationComponent, deps: [{ token: NavigationService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
navigationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navigationComponent, selector: "ircc-cl-lib-navigation", inputs: { id: "id", label: "label", iconLeading: "iconLeading", iconTrailing: "iconTrailing", size: "size", navigationConfig: "navigationConfig" }, viewQueries: [{ propertyName: "navigationHeader", first: true, predicate: ["navigationHeader"], descendants: true }, { propertyName: "navigationContentTop", first: true, predicate: ["navigationContentTop"], descendants: true }, { propertyName: "navigationContentBottom", first: true, predicate: ["navigationContentBottom"], descendants: true }, { propertyName: "navigationArea", first: true, predicate: ["navigationArea"], descendants: true }, { propertyName: "navigationAreaScroll", first: true, predicate: ["navigationAreaScroll"], descendants: true }, { propertyName: "navigation", first: true, predicate: ["navigation"], descendants: true }], ngImport: i0, template: "<div\n  [id]=\"config.id\"\n  [attr.size]=\"config.size\"\n  class=\"lib-navigation\"\n  #navigation\n>\n  <div\n    class=\"navigation-header\"\n    [class]=\"navigationClass()\"\n    #navigationHeader\n  >\n    <ircc-cl-lib-icon\n      class=\"icon-leading\"\n      [config]=\"{ FA_keywords: config?.iconLeading || '' }\"\n      (click)=\"clickIconLeading(config.id + '_icon_leading')\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n    <h3>{{ config?.label || '' | translate }}</h3>\n    <ircc-cl-lib-icon\n      [id]=\"config.id + '_icon_trailing'\"\n      class=\"icon-trailing\"\n      [attr.size]=\"config.size\"\n      [config]=\"{ FA_keywords: config?.iconTrailing || '' }\"\n      (click)=\"clickIconTrailing(config.id + '_icon_trailing')\"\n    ></ircc-cl-lib-icon>\n  </div>\n\n  <div #navigationAreaScroll>\n    <!-- prettier-ignore -->\n    <div class=\"navigation-content-top\" #navigationContentTop ><ng-content select=\"[navigationContentTop]\"></ng-content></div>\n\n    <!-- TODO: Document this like crazy - recursive templating is cool, but EXTREMELY unusual -->\n    <div\n      class=\"navigation-area\"\n      #navigationArea\n    >\n      <ul class=\"parent-navigation\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            recursiveListTmpl;\n            context: { list: this.config.navigationConfig, index: 0 }\n          \"\n        ></ng-container>\n      </ul>\n    </div>\n\n    <ng-template\n      #recursiveListTmpl\n      let-list=\"list\"\n      let-index=\"index\"\n    >\n      <li *ngFor=\"let item of list\">\n        <ng-container [ngSwitch]=\"item.type\">\n          <!--Type Heading-->\n          <ng-container *ngSwitchCase=\"'heading'\"\n            ><ircc-cl-lib-nav-header\n              [attr.size]=\"config.size\"\n              [size]=\"config.size\"\n              [config]=\"item\"\n            >\n              <ul\n                *ngIf=\"item.children.length > 0\"\n                class=\"child-navigation\"\n                [class]=\"'indent-' + index\"\n              >\n                <ng-container\n                  *ngTemplateOutlet=\"\n                    recursiveListTmpl;\n                    context: { list: item.children, index: setIndex(index) }\n                  \"\n                ></ng-container></ul></ircc-cl-lib-nav-header\n          ></ng-container>\n\n          <!--Type Link-->\n          <ng-container *ngSwitchCase=\"'link'\">\n            <ircc-cl-lib-nav-item\n              [attr.size]=\"config.size\"\n              [size]=\"config.size\"\n              [config]=\"item\"\n            >\n              <ul\n                *ngIf=\"item.children.length > 0\"\n                class=\"child-navigation\"\n                [class]=\"'indent-' + index\"\n              >\n                <ng-container\n                  *ngTemplateOutlet=\"\n                    recursiveListTmpl;\n                    context: { list: item.children, index: setIndex(index) }\n                  \"\n                ></ng-container></ul></ircc-cl-lib-nav-item\n          ></ng-container>\n\n          <!--Type Accordion-->\n          <ng-container *ngSwitchCase=\"'accordion'\">\n            <ircc-cl-lib-nav-accordion\n              [attr.size]=\"config.size\"\n              [size]=\"config.size\"\n              [config]=\"item\"\n            >\n              <ul\n                *ngIf=\"item.children.length > 0\"\n                class=\"child-navigation\"\n                [class]=\"'indent-' + index\"\n              >\n                <ng-container\n                  *ngTemplateOutlet=\"\n                    recursiveListTmpl;\n                    context: { list: item.children, index: setIndex(index) }\n                  \"\n                ></ng-container></ul\n            ></ircc-cl-lib-nav-accordion>\n          </ng-container>\n\n          <ng-container *ngSwitchCase=\"'divider'\">\n            <ircc-cl-lib-nav-divider\n              [attr.size]=\"config.size\"\n              [config]=\"item\"\n            >\n              <ul\n                *ngIf=\"item.children.length > 0\"\n                class=\"child-navigation\"\n                [class]=\"'indent-' + index\"\n              >\n                <ng-container\n                  *ngTemplateOutlet=\"\n                    recursiveListTmpl;\n                    context: { list: item.children, index: setIndex(index) }\n                  \"\n                ></ng-container></ul\n            ></ircc-cl-lib-nav-divider>\n          </ng-container>\n        </ng-container>\n      </li>\n    </ng-template>\n\n    <!-- prettier-ignore -->\n    <div class=\"navigation-content-bottom\" #navigationContentBottom><ng-content select=\"[navigationContentBottom]\"></ng-content></div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "component", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "component", type: navItemHeadingComponent, selector: "ircc-cl-lib-nav-header", inputs: ["config", "id", "label", "iconLeading", "children", "size"] }, { kind: "component", type: navItemNavComponent, selector: "ircc-cl-lib-nav-item", inputs: ["config", "id", "size", "indicator"] }, { kind: "component", type: navItemAccordionComponent, selector: "ircc-cl-lib-nav-accordion", inputs: ["config", "id", "open", "label", "size", "iconLeading"] }, { kind: "component", type: navItemDividerComponent, selector: "ircc-cl-lib-nav-divider", inputs: ["config", "id"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navigationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-navigation', template: "<div\n  [id]=\"config.id\"\n  [attr.size]=\"config.size\"\n  class=\"lib-navigation\"\n  #navigation\n>\n  <div\n    class=\"navigation-header\"\n    [class]=\"navigationClass()\"\n    #navigationHeader\n  >\n    <ircc-cl-lib-icon\n      class=\"icon-leading\"\n      [config]=\"{ FA_keywords: config?.iconLeading || '' }\"\n      (click)=\"clickIconLeading(config.id + '_icon_leading')\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n    <h3>{{ config?.label || '' | translate }}</h3>\n    <ircc-cl-lib-icon\n      [id]=\"config.id + '_icon_trailing'\"\n      class=\"icon-trailing\"\n      [attr.size]=\"config.size\"\n      [config]=\"{ FA_keywords: config?.iconTrailing || '' }\"\n      (click)=\"clickIconTrailing(config.id + '_icon_trailing')\"\n    ></ircc-cl-lib-icon>\n  </div>\n\n  <div #navigationAreaScroll>\n    <!-- prettier-ignore -->\n    <div class=\"navigation-content-top\" #navigationContentTop ><ng-content select=\"[navigationContentTop]\"></ng-content></div>\n\n    <!-- TODO: Document this like crazy - recursive templating is cool, but EXTREMELY unusual -->\n    <div\n      class=\"navigation-area\"\n      #navigationArea\n    >\n      <ul class=\"parent-navigation\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            recursiveListTmpl;\n            context: { list: this.config.navigationConfig, index: 0 }\n          \"\n        ></ng-container>\n      </ul>\n    </div>\n\n    <ng-template\n      #recursiveListTmpl\n      let-list=\"list\"\n      let-index=\"index\"\n    >\n      <li *ngFor=\"let item of list\">\n        <ng-container [ngSwitch]=\"item.type\">\n          <!--Type Heading-->\n          <ng-container *ngSwitchCase=\"'heading'\"\n            ><ircc-cl-lib-nav-header\n              [attr.size]=\"config.size\"\n              [size]=\"config.size\"\n              [config]=\"item\"\n            >\n              <ul\n                *ngIf=\"item.children.length > 0\"\n                class=\"child-navigation\"\n                [class]=\"'indent-' + index\"\n              >\n                <ng-container\n                  *ngTemplateOutlet=\"\n                    recursiveListTmpl;\n                    context: { list: item.children, index: setIndex(index) }\n                  \"\n                ></ng-container></ul></ircc-cl-lib-nav-header\n          ></ng-container>\n\n          <!--Type Link-->\n          <ng-container *ngSwitchCase=\"'link'\">\n            <ircc-cl-lib-nav-item\n              [attr.size]=\"config.size\"\n              [size]=\"config.size\"\n              [config]=\"item\"\n            >\n              <ul\n                *ngIf=\"item.children.length > 0\"\n                class=\"child-navigation\"\n                [class]=\"'indent-' + index\"\n              >\n                <ng-container\n                  *ngTemplateOutlet=\"\n                    recursiveListTmpl;\n                    context: { list: item.children, index: setIndex(index) }\n                  \"\n                ></ng-container></ul></ircc-cl-lib-nav-item\n          ></ng-container>\n\n          <!--Type Accordion-->\n          <ng-container *ngSwitchCase=\"'accordion'\">\n            <ircc-cl-lib-nav-accordion\n              [attr.size]=\"config.size\"\n              [size]=\"config.size\"\n              [config]=\"item\"\n            >\n              <ul\n                *ngIf=\"item.children.length > 0\"\n                class=\"child-navigation\"\n                [class]=\"'indent-' + index\"\n              >\n                <ng-container\n                  *ngTemplateOutlet=\"\n                    recursiveListTmpl;\n                    context: { list: item.children, index: setIndex(index) }\n                  \"\n                ></ng-container></ul\n            ></ircc-cl-lib-nav-accordion>\n          </ng-container>\n\n          <ng-container *ngSwitchCase=\"'divider'\">\n            <ircc-cl-lib-nav-divider\n              [attr.size]=\"config.size\"\n              [config]=\"item\"\n            >\n              <ul\n                *ngIf=\"item.children.length > 0\"\n                class=\"child-navigation\"\n                [class]=\"'indent-' + index\"\n              >\n                <ng-container\n                  *ngTemplateOutlet=\"\n                    recursiveListTmpl;\n                    context: { list: item.children, index: setIndex(index) }\n                  \"\n                ></ng-container></ul\n            ></ircc-cl-lib-nav-divider>\n          </ng-container>\n        </ng-container>\n      </li>\n    </ng-template>\n\n    <!-- prettier-ignore -->\n    <div class=\"navigation-content-bottom\" #navigationContentBottom><ng-content select=\"[navigationContentBottom]\"></ng-content></div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: NavigationService }, { type: i0.Renderer2 }]; }, propDecorators: { navigationHeader: [{
                type: ViewChild,
                args: ['navigationHeader', { static: false }]
            }], navigationContentTop: [{
                type: ViewChild,
                args: ['navigationContentTop', { static: false }]
            }], navigationContentBottom: [{
                type: ViewChild,
                args: ['navigationContentBottom', { static: false }]
            }], navigationArea: [{
                type: ViewChild,
                args: ['navigationArea', { static: false }]
            }], navigationAreaScroll: [{
                type: ViewChild,
                args: ['navigationAreaScroll', { static: false }]
            }], navigation: [{
                type: ViewChild,
                args: ['navigation', { static: false }]
            }], id: [{
                type: Input
            }], label: [{
                type: Input
            }], iconLeading: [{
                type: Input
            }], iconTrailing: [{
                type: Input
            }], size: [{
                type: Input
            }], navigationConfig: [{
                type: Input
            }] } });

class navItemStatusComponent {
    constructor() {
        this.status = 'notStarted';
    }
    ngOnInit() {
    }
}
navItemStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemStatusComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
navItemStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navItemStatusComponent, selector: "ircc-cl-lib-nav-item-status", inputs: { status: "status" }, ngImport: i0, template: "<div>\n  <ng-container [ngSwitch]=\"status\">\n    <ng-container *ngSwitchCase=\"'notStarted'\">\n      <ircc-cl-lib-indicator></ircc-cl-lib-indicator>\n    </ng-container>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "component", type: IndicatorComponent, selector: "ircc-cl-lib-indicator", inputs: ["config", "size", "type", "icon", "category", "purpose", "status", "palette", "ariaLabel", "tabIndex"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-nav-item-status', template: "<div>\n  <ng-container [ngSwitch]=\"status\">\n    <ng-container *ngSwitchCase=\"'notStarted'\">\n      <ircc-cl-lib-indicator></ircc-cl-lib-indicator>\n    </ng-container>\n  </ng-container>\n</div>\n" }]
        }], propDecorators: { status: [{
                type: Input
            }] } });

const IrccDsNavigationComponents = [
    navigationComponent,
    navItemHeadingComponent,
    navItemNavComponent,
    navItemAccordionComponent,
    navItemDividerComponent,
    navItemStatusComponent
];
class IrccDsAngularNavigationModule {
}
IrccDsAngularNavigationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularNavigationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularNavigationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularNavigationModule, declarations: [navigationComponent,
        navItemHeadingComponent,
        navItemNavComponent,
        navItemAccordionComponent,
        navItemDividerComponent,
        navItemStatusComponent], imports: [CommonModule, IrccDsAngularComponentsSharedModule, TranslateModule], exports: [navigationComponent,
        navItemHeadingComponent,
        navItemNavComponent,
        navItemAccordionComponent,
        navItemDividerComponent,
        navItemStatusComponent] });
IrccDsAngularNavigationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularNavigationModule, imports: [CommonModule, IrccDsAngularComponentsSharedModule, TranslateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularNavigationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...IrccDsNavigationComponents],
                    imports: [CommonModule, IrccDsAngularComponentsSharedModule, TranslateModule],
                    exports: [...IrccDsNavigationComponents]
                }]
        }] });

var NavigationItemType;
(function (NavigationItemType) {
    NavigationItemType["accordion"] = "accordion";
    NavigationItemType["heading"] = "heading";
    NavigationItemType["link"] = "link";
    NavigationItemType["divider"] = "divider";
})(NavigationItemType || (NavigationItemType = {}));
var NavigationStatus;
(function (NavigationStatus) {
    NavigationStatus["notStarted"] = "notStarted";
    NavigationStatus["inProgress"] = "inProgress";
    NavigationStatus["complete"] = "complete";
    NavigationStatus["locked"] = "locked";
})(NavigationStatus || (NavigationStatus = {}));

/*
 * Public API Surface of ircc-ds-angular-component-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ARIA_TEXT, AutocompleteComponent, BannerComponent, BannerSize, BannerType, BreadcrumbComponent, BreadcrumbLinkComponent, ButtonCategories, ButtonColor, ButtonComponent, ButtonIconDirection, ButtonSize, CANADA_LOGO_ARIA_LABEL_ENGLISH, CANADA_LOGO_ARIA_LABEL_FRENCH, CLASS_TRASHCAN, CLASS_X_MARK, CTAType, CheckboxComponent, ChipItemComponent, ChipListComponent, DATE_PICKER_DAY_CONTROL_ID_EXTENSION, DATE_PICKER_LABELS_EN, DATE_PICKER_LABELS_FR, DATE_PICKER_MONTHS_EN, DATE_PICKER_MONTHS_FR, DATE_PICKER_MONTH_CONTROL_ID_EXTENSION, DATE_PICKER_PLACEHOLDER_DAY_EN, DATE_PICKER_PLACEHOLDER_DAY_FR, DATE_PICKER_PLACEHOLDER_MONTH_EN, DATE_PICKER_PLACEHOLDER_MONTH_FR, DATE_PICKER_PLACEHOLDER_YEAR_EN, DATE_PICKER_PLACEHOLDER_YEAR_FR, DATE_PICKER_UNKOWN_EN, DATE_PICKER_UNKOWN_FR, DATE_PICKER_YEAR_CONTROL_ID_EXTENSION, DROPDOWN_ARIA, DSFullSizes, DSOrientations, DSSizes, DatePickerComponent, DropDownActions, DropdownComponent, DropdownTypes, ENGLISH_BANNER_URL, ERROR_TEXT_STUB, ErrorComponent, FLYOUT_CURRENT_SELECTED, FRENCH_BANNER_URL, FlyoutComponent, FlyoutOptionComponent, FooterComponent, GOV_LOGO_ALT_TEXT_EN, GOV_LOGO_ALT_TEXT_FR, GOV_LOGO_FOOTER, HEADER_IMG_LINK_EN, HEADER_IMG_LINK_FR, HELP_ICON_ALT, HeaderComponent, HiddenNavComponent, IFlyoutOptionType, IFlyoutSelectTypes, IconButtonCategories, IconButtonComponent, IconComponent, IndicatorComponent, IndicatorPalette, IndicatorPurpose, IndicatorStatus, IndicatorTreatment, IndicatorType, InputComponent, InputTypes, IrccDsAngularBannerModule, IrccDsAngularComponentsSharedModule, IrccDsAngularFormComponentsModule, IrccDsAngularHeaderFooterModule, IrccDsAngularLegacyOldModule, IrccDsAngularNavigationModule, LANGUAGE_SWITCH_TEXT_ENGLISH, LANGUAGE_SWITCH_TEXT_ENGLISH_MOBILE, LANGUAGE_SWITCH_TEXT_FRENCH, LANGUAGE_SWITCH_TEXT_FRENCH_MOBILE, LabelButtonService, LabelComponent, LanguageSwitchButtonService, LanguageSwitchComponent, LinkType, MAX_CHAR_LIMIT_EN, MAX_CHAR_LIMIT_FR, NavigationItemType, NavigationService, NavigationStatus, Orientations, PROGRESS_INDICATOR_STEP_EN, PROGRESS_INDICATOR_STEP_FR, ProgressIndicatorComponent, ProgressTagsComponent, RadioInputComponent, ResizableTypes, SPINNER_LABELS_EN, SPINNER_LABELS_FR, SearchInputComponent, SecondaryChipsComponent, SelectComponent, SpinnerComponent, SpinnerType, StandAloneFunctions, TAG_LABELS_EN, TAG_LABELS_FR, TabsComponent, TagType, TextareaComponent, ThemeSwitchComponent, WARNING_CHAR_LIMIT_EN, WARNING_CHAR_LIMIT_FR, navItemAccordionComponent, navItemDividerComponent, navItemHeadingComponent, navItemNavComponent, navItemStatusComponent, navigationComponent };
//# sourceMappingURL=ircc-ds-angular-component-library.mjs.map
