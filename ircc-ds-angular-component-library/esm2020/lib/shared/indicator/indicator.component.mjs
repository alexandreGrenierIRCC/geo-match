import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icon/icon.component";
import * as i3 from "@ngx-translate/core";
export var IndicatorType;
(function (IndicatorType) {
    IndicatorType[IndicatorType["dot"] = 0] = "dot";
    IndicatorType[IndicatorType["text"] = 1] = "text";
    IndicatorType[IndicatorType["number"] = 2] = "number";
})(IndicatorType || (IndicatorType = {}));
export var IndicatorTreatment;
(function (IndicatorTreatment) {
    IndicatorTreatment["strong"] = "strong";
    IndicatorTreatment["weak"] = "weak";
})(IndicatorTreatment || (IndicatorTreatment = {}));
export var IndicatorPurpose;
(function (IndicatorPurpose) {
    IndicatorPurpose["status"] = "status";
    IndicatorPurpose["palette"] = "palette";
})(IndicatorPurpose || (IndicatorPurpose = {}));
export var IndicatorStatus;
(function (IndicatorStatus) {
    IndicatorStatus["information"] = "information";
    IndicatorStatus["warning"] = "warning";
    IndicatorStatus["critical"] = "critical";
    IndicatorStatus["neutral"] = "neutral";
    IndicatorStatus["primary"] = "primary";
    IndicatorStatus["success"] = "success";
})(IndicatorStatus || (IndicatorStatus = {}));
export var IndicatorPalette;
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
export class IndicatorComponent {
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
        if (this.config.type === 'number' &&
            this.config?.label &&
            this.config.label > 99) {
            this.config.label = '99+';
        }
    }
    // If label only have 1 character, it should be rounded
    checkLabelRounded() {
        if (typeof this.config?.label === 'string') {
            this.rounded = this.config.label.length == 1 && !this.config.icon;
        }
    }
    // Check if div exceeds 200px
    checkLabelLength() {
        if (this.config.type !== 'text')
            return;
        // Max 200px - padding 8px x2
        this.abbr = ((this.label?.nativeElement?.offsetWidth &&
            this.label?.nativeElement?.offsetWidth > 184));
    }
}
IndicatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IndicatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IndicatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: IndicatorComponent, selector: "ircc-cl-lib-indicator", inputs: { config: "config", size: "size", type: "type", icon: "icon", category: "category", purpose: "purpose", status: "status", palette: "palette", ariaLabel: "ariaLabel", tabIndex: "tabIndex" }, viewQueries: [{ propertyName: "label", first: true, predicate: ["label"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div\n  [ngClass]=\"['indicator-container', config.size ?? '']\"\n  [attr.aria-label]=\"\n    (config.ariaLabel ?? 'Indicator.Heading' | translate) +\n    ' ' +\n    (config.label ?? '')\n  \"\n  [tabindex]=\"config.tabIndex\"\n>\n  <div\n    *ngIf=\"config.type === 'text' || config.type === 'number'\"\n    #label\n    [ngClass]=\"[\n      config.type,\n      config.category,\n      config.purpose === 'status'\n        ? EIndicatorStatus[config.status ?? 'information']\n        : '',\n      config.purpose === 'palette' ? config.palette : '',\n      rounded ? 'rounded' : '',\n      config.label === '99+' ? 'num-lg' : '',\n      abbr ? 'abbr' : ''\n    ]\"\n  >\n    <ircc-cl-lib-icon\n      *ngIf=\"config.type === 'text' && config?.icon\"\n      [config]=\"{ FA_keywords: config.icon }\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n    <ng-container *ngIf=\"abbr; else nonAbbr\">\n      <span class=\"abbr\"\n        ><abbr [title]=\"config.label\">{{ config.label }}</abbr></span\n      >\n    </ng-container>\n    <ng-template #nonAbbr>\n      <span>{{ config.label }}</span>\n    </ng-template>\n  </div>\n  <span\n    *ngIf=\"config.type === 'dot'\"\n    [ngClass]=\"[\n      config.icon ? 'dot-icon' : '',\n      config.type,\n      config.category,\n      config.purpose === 'status'\n        ? EIndicatorStatus[config.status ?? 'information']\n        : '',\n      config.purpose === 'palette' ? config.palette : ''\n    ]\"\n  >\n    <ircc-cl-lib-icon\n      *ngIf=\"config?.icon\"\n      [config]=\"{ FA_keywords: config.icon }\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n  </span>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvaW5kaWNhdG9yL2luZGljYXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2luZGljYXRvci9pbmRpY2F0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBSUwsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDOzs7OztBQUd2QixNQUFNLENBQU4sSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3ZCLCtDQUFHLENBQUE7SUFDSCxpREFBSSxDQUFBO0lBQ0oscURBQU0sQ0FBQTtBQUNSLENBQUMsRUFKVyxhQUFhLEtBQWIsYUFBYSxRQUl4QjtBQUVELE1BQU0sQ0FBTixJQUFZLGtCQUdYO0FBSEQsV0FBWSxrQkFBa0I7SUFDNUIsdUNBQWlCLENBQUE7SUFDakIsbUNBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBRzdCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUMxQixxQ0FBaUIsQ0FBQTtJQUNqQix1Q0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUczQjtBQUVELE1BQU0sQ0FBTixJQUFZLGVBT1g7QUFQRCxXQUFZLGVBQWU7SUFDekIsOENBQTJCLENBQUE7SUFDM0Isc0NBQW1CLENBQUE7SUFDbkIsd0NBQXFCLENBQUE7SUFDckIsc0NBQW1CLENBQUE7SUFDbkIsc0NBQW1CLENBQUE7SUFDbkIsc0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQVBXLGVBQWUsS0FBZixlQUFlLFFBTzFCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JB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SUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNuRTtJQUNILENBQUM7SUFFRCw2QkFBNkI7SUFDckIsZ0JBQWdCO1FBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTTtZQUFFLE9BQU87UUFDeEMsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQVksQ0FDbkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxXQUFXO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FDaEQsQ0FBQztJQUNKLENBQUM7O2dIQS9FVSxrQkFBa0I7b0dBQWxCLGtCQUFrQix3WENqRS9CLGduREF5REE7NEZEUWEsa0JBQWtCO2tCQUo5QixTQUFTOytCQUNFLHVCQUF1Qjs4QkFJeEIsTUFBTTtzQkFBZCxLQUFLO2dCQU9HLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVpQyxLQUFLO3NCQUEzQyxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRFNTaXplcyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb25zdGFudHMvamwtY29tcG9uZW50cy5jb25zdGFudHMnO1xuXG5leHBvcnQgZW51bSBJbmRpY2F0b3JUeXBlIHtcbiAgZG90LFxuICB0ZXh0LFxuICBudW1iZXJcbn1cblxuZXhwb3J0IGVudW0gSW5kaWNhdG9yVHJlYXRtZW50IHtcbiAgc3Ryb25nID0gJ3N0cm9uZycsXG4gIHdlYWsgPSAnd2Vhaydcbn1cblxuZXhwb3J0IGVudW0gSW5kaWNhdG9yUHVycG9zZSB7XG4gIHN0YXR1cyA9ICdzdGF0dXMnLFxuICBwYWxldHRlID0gJ3BhbGV0dGUnXG59XG5cbmV4cG9ydCBlbnVtIEluZGljYXRvclN0YXR1cyB7XG4gIGluZm9ybWF0aW9uID0gJ2luZm9ybWF0aW9uJyxcbiAgd2FybmluZyA9ICd3YXJuaW5nJyxcbiAgY3JpdGljYWwgPSAnY3JpdGljYWwnLFxuICBuZXV0cmFsID0gJ25ldXRyYWwnLFxuICBwcmltYXJ5ID0gJ3ByaW1hcnknLFxuICBzdWNjZXNzID0gJ3N1Y2Nlc3MnXG59XG5cbmV4cG9ydCBlbnVtIEluZGljYXRvclBhbGV0dGUge1xuICB0ZWFsLFxuICBvcmFuZ2UsXG4gIHJlZCxcbiAgZ3JleSxcbiAgYmx1ZSxcbiAgZ3JlZW4sXG4gIHB1cnBsZSxcbiAgbmF2eVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbmRpY2F0b3JDb25maWcge1xuICBsYWJlbD86IHN0cmluZyB8IG51bWJlcjtcbiAgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzO1xuICB0eXBlOiBrZXlvZiB0eXBlb2YgSW5kaWNhdG9yVHlwZTtcbiAgaWNvbj86IHN0cmluZztcbiAgdGFiSW5kZXg/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNhdGVnb3J5OiBrZXlvZiB0eXBlb2YgSW5kaWNhdG9yVHJlYXRtZW50OyAvLyBUcmVhdG1lbnRcbiAgcHVycG9zZToga2V5b2YgdHlwZW9mIEluZGljYXRvclB1cnBvc2U7XG4gIHN0YXR1cz86IGtleW9mIHR5cGVvZiBJbmRpY2F0b3JTdGF0dXM7IC8vIFNlbnRpbWVudFxuICBwYWxldHRlPzoga2V5b2YgdHlwZW9mIEluZGljYXRvclBhbGV0dGU7IC8vIENvbG91clxuICBhcmlhTGFiZWw/OiBzdHJpbmc7IC8vIEFyaWEgbGFiZWwgbGluZSBvZiB2YWx1ZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpcmNjLWNsLWxpYi1pbmRpY2F0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5kaWNhdG9yLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbmRpY2F0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGNvbmZpZzogSUluZGljYXRvckNvbmZpZyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY2F0ZWdvcnk6IEluZGljYXRvclRyZWF0bWVudC53ZWFrLFxuICAgIHB1cnBvc2U6IEluZGljYXRvclB1cnBvc2Uuc3RhdHVzLFxuICAgIHRhYkluZGV4OiAwXG4gIH07XG5cbiAgQElucHV0KCkgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzO1xuICBASW5wdXQoKSB0eXBlPzoga2V5b2YgdHlwZW9mIEluZGljYXRvclR5cGU7XG4gIEBJbnB1dCgpIGljb24/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhdGVnb3J5Pzoga2V5b2YgdHlwZW9mIEluZGljYXRvclRyZWF0bWVudDsgLy8gVHJlYXRtZW50XG4gIEBJbnB1dCgpIHB1cnBvc2U/OiBrZXlvZiB0eXBlb2YgSW5kaWNhdG9yUHVycG9zZTtcbiAgQElucHV0KCkgc3RhdHVzPzoga2V5b2YgdHlwZW9mIEluZGljYXRvclN0YXR1czsgLy8gU2VudGltZW50XG4gIEBJbnB1dCgpIHBhbGV0dGU/OiBrZXlvZiB0eXBlb2YgSW5kaWNhdG9yUGFsZXR0ZTsgLy8gQ29sb3VyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IHN0cmluZzsgLy8gQXJpYSBsYWJlbCBsaW5lIG9mIHZhbHVlXG4gIEBJbnB1dCgpIHRhYkluZGV4ID0gdW5kZWZpbmVkO1xuXG4gIEBWaWV3Q2hpbGQoJ2xhYmVsJywgeyBzdGF0aWM6IGZhbHNlIH0pIGxhYmVsPzogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEVJbmRpY2F0b3JTdGF0dXMgPSBJbmRpY2F0b3JTdGF0dXM7XG4gIHJvdW5kZWQ/OiBib29sZWFuO1xuICBhYmJyPzogYm9vbGVhbjsgLy8gRGlzcGxheSBhYmJyIHRhZyB3aGVuIHRleHQgaXMgdHJ1bmNhdGVkXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9zZXQgY29uZmlnIGZyb20gaW5kaXZpZHVhbCBvcHRpb25zLCBpZiBwcmVzZW50XG4gICAgaWYgKHRoaXMuc2l6ZSkgdGhpcy5jb25maWcuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICBpZiAodGhpcy50eXBlKSB0aGlzLmNvbmZpZy50eXBlID0gdGhpcy50eXBlO1xuICAgIGlmICh0aGlzLmljb24pIHRoaXMuY29uZmlnLmljb24gPSB0aGlzLmljb247XG4gICAgaWYgKHRoaXMuY2F0ZWdvcnkpIHRoaXMuY29uZmlnLmNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yeTtcbiAgICBpZiAodGhpcy5wdXJwb3NlKSB0aGlzLmNvbmZpZy5wdXJwb3NlID0gdGhpcy5wdXJwb3NlO1xuICAgIGlmICh0aGlzLnN0YXR1cykgdGhpcy5jb25maWcuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gICAgaWYgKHRoaXMucGFsZXR0ZSkgdGhpcy5jb25maWcucGFsZXR0ZSA9IHRoaXMucGFsZXR0ZTtcbiAgICBpZiAodGhpcy5hcmlhTGFiZWwpIHRoaXMuY29uZmlnLmFyaWFMYWJlbCA9IHRoaXMuYXJpYUxhYmVsO1xuXG4gICAgdGhpcy5jaGVja0xhYmVsUm91bmRlZCgpO1xuICAgIHRoaXMuY2hlY2tOdW1iZXIoKTtcblxuICAgIHRoaXMudGFiSW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgPyAodGhpcy5jb25maWcudGFiSW5kZXggPSB0aGlzLnRhYkluZGV4KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrTGFiZWxMZW5ndGgoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5jaGVja051bWJlcigpO1xuICAgIHRoaXMuY2hlY2tMYWJlbFJvdW5kZWQoKTtcbiAgICB0aGlzLmNoZWNrTGFiZWxMZW5ndGgoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2tMYWJlbExlbmd0aCgpKTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIG51bWJlciBleGNlZWRzIDk5XG4gIHByaXZhdGUgY2hlY2tOdW1iZXIoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcudHlwZSA9PT0gJ251bWJlcicgJiZcbiAgICAgIHRoaXMuY29uZmlnPy5sYWJlbCAmJlxuICAgICAgdGhpcy5jb25maWcubGFiZWwgPiA5OVxuICAgICkge1xuICAgICAgdGhpcy5jb25maWcubGFiZWwgPSAnOTkrJztcbiAgICB9XG4gIH1cblxuICAvLyBJZiBsYWJlbCBvbmx5IGhhdmUgMSBjaGFyYWN0ZXIsIGl0IHNob3VsZCBiZSByb3VuZGVkXG4gIHByaXZhdGUgY2hlY2tMYWJlbFJvdW5kZWQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZz8ubGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdW5kZWQgPSB0aGlzLmNvbmZpZy5sYWJlbC5sZW5ndGggPT0gMSAmJiAhdGhpcy5jb25maWcuaWNvbjtcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiBkaXYgZXhjZWVkcyAyMDBweFxuICBwcml2YXRlIGNoZWNrTGFiZWxMZW5ndGgoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnR5cGUgIT09ICd0ZXh0JykgcmV0dXJuO1xuICAgIC8vIE1heCAyMDBweCAtIHBhZGRpbmcgOHB4IHgyXG4gICAgdGhpcy5hYmJyID0gPGJvb2xlYW4+KFxuICAgICAgKHRoaXMubGFiZWw/Lm5hdGl2ZUVsZW1lbnQ/Lm9mZnNldFdpZHRoICYmXG4gICAgICAgIHRoaXMubGFiZWw/Lm5hdGl2ZUVsZW1lbnQ/Lm9mZnNldFdpZHRoID4gMTg0KVxuICAgICk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgW25nQ2xhc3NdPVwiWydpbmRpY2F0b3ItY29udGFpbmVyJywgY29uZmlnLnNpemUgPz8gJyddXCJcbiAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAoY29uZmlnLmFyaWFMYWJlbCA/PyAnSW5kaWNhdG9yLkhlYWRpbmcnIHwgdHJhbnNsYXRlKSArXG4gICAgJyAnICtcbiAgICAoY29uZmlnLmxhYmVsID8/ICcnKVxuICBcIlxuICBbdGFiaW5kZXhdPVwiY29uZmlnLnRhYkluZGV4XCJcbj5cbiAgPGRpdlxuICAgICpuZ0lmPVwiY29uZmlnLnR5cGUgPT09ICd0ZXh0JyB8fCBjb25maWcudHlwZSA9PT0gJ251bWJlcidcIlxuICAgICNsYWJlbFxuICAgIFtuZ0NsYXNzXT1cIltcbiAgICAgIGNvbmZpZy50eXBlLFxuICAgICAgY29uZmlnLmNhdGVnb3J5LFxuICAgICAgY29uZmlnLnB1cnBvc2UgPT09ICdzdGF0dXMnXG4gICAgICAgID8gRUluZGljYXRvclN0YXR1c1tjb25maWcuc3RhdHVzID8/ICdpbmZvcm1hdGlvbiddXG4gICAgICAgIDogJycsXG4gICAgICBjb25maWcucHVycG9zZSA9PT0gJ3BhbGV0dGUnID8gY29uZmlnLnBhbGV0dGUgOiAnJyxcbiAgICAgIHJvdW5kZWQgPyAncm91bmRlZCcgOiAnJyxcbiAgICAgIGNvbmZpZy5sYWJlbCA9PT0gJzk5KycgPyAnbnVtLWxnJyA6ICcnLFxuICAgICAgYWJiciA/ICdhYmJyJyA6ICcnXG4gICAgXVwiXG4gID5cbiAgICA8aXJjYy1jbC1saWItaWNvblxuICAgICAgKm5nSWY9XCJjb25maWcudHlwZSA9PT0gJ3RleHQnICYmIGNvbmZpZz8uaWNvblwiXG4gICAgICBbY29uZmlnXT1cInsgRkFfa2V5d29yZHM6IGNvbmZpZy5pY29uIH1cIlxuICAgICAgW2F0dHIuc2l6ZV09XCJjb25maWcuc2l6ZVwiXG4gICAgPjwvaXJjYy1jbC1saWItaWNvbj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWJicjsgZWxzZSBub25BYmJyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImFiYnJcIlxuICAgICAgICA+PGFiYnIgW3RpdGxlXT1cImNvbmZpZy5sYWJlbFwiPnt7IGNvbmZpZy5sYWJlbCB9fTwvYWJicj48L3NwYW5cbiAgICAgID5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI25vbkFiYnI+XG4gICAgICA8c3Bhbj57eyBjb25maWcubGFiZWwgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG4gIDxzcGFuXG4gICAgKm5nSWY9XCJjb25maWcudHlwZSA9PT0gJ2RvdCdcIlxuICAgIFtuZ0NsYXNzXT1cIltcbiAgICAgIGNvbmZpZy5pY29uID8gJ2RvdC1pY29uJyA6ICcnLFxuICAgICAgY29uZmlnLnR5cGUsXG4gICAgICBjb25maWcuY2F0ZWdvcnksXG4gICAgICBjb25maWcucHVycG9zZSA9PT0gJ3N0YXR1cydcbiAgICAgICAgPyBFSW5kaWNhdG9yU3RhdHVzW2NvbmZpZy5zdGF0dXMgPz8gJ2luZm9ybWF0aW9uJ11cbiAgICAgICAgOiAnJyxcbiAgICAgIGNvbmZpZy5wdXJwb3NlID09PSAncGFsZXR0ZScgPyBjb25maWcucGFsZXR0ZSA6ICcnXG4gICAgXVwiXG4gID5cbiAgICA8aXJjYy1jbC1saWItaWNvblxuICAgICAgKm5nSWY9XCJjb25maWc/Lmljb25cIlxuICAgICAgW2NvbmZpZ109XCJ7IEZBX2tleXdvcmRzOiBjb25maWcuaWNvbiB9XCJcbiAgICAgIFthdHRyLnNpemVdPVwiY29uZmlnLnNpemVcIlxuICAgID48L2lyY2MtY2wtbGliLWljb24+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19