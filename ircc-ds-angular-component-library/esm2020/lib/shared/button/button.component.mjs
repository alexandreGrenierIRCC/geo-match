import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icon/icon.component";
export var ButtonCategories;
(function (ButtonCategories) {
    ButtonCategories["primary"] = "primary";
    ButtonCategories["secondary"] = "secondary";
    ButtonCategories["plain"] = "plain";
})(ButtonCategories || (ButtonCategories = {}));
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["small"] = "small";
    ButtonSize["large"] = "large";
})(ButtonSize || (ButtonSize = {}));
export var ButtonColor;
(function (ButtonColor) {
    ButtonColor["critical"] = "critical";
    ButtonColor["CTA"] = "CTA";
})(ButtonColor || (ButtonColor = {}));
// export enum ButtonType {
//     button = 'button',
//     submit = 'submit',
//     reset = 'reset'
// }
export var ButtonIconDirection;
(function (ButtonIconDirection) {
    ButtonIconDirection["left"] = "left";
    ButtonIconDirection["right"] = "right";
})(ButtonIconDirection || (ButtonIconDirection = {}));
export class ButtonComponent {
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
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ButtonComponent, selector: "ircc-cl-lib-button", inputs: { config: "config", id: "id", category: "category", size: "size", color: "color", ariaLabel: "ariaLabel", disabled: "disabled", icon: "icon", iconDirection: "iconDirection", tabIndex: "tabIndex" }, outputs: { btnAction: "btnAction" }, ngImport: i0, template: "<button\n  [attr.aria-label]=\"config.ariaLabel\"\n  [attr.color]=\"config.color\"\n  [attr.category]=\"config.category\"\n  [attr.size]=\"config.size\"\n  [attr.tabIndex]=\"config.tabIndex\"\n  [disabled]=\"config.disabled\"\n  [ngClass]=\"config.iconDirection\"\n  (click)=\"clickEvent(config.id)\"\n  class=\"lib-button\"\n  [id]=\"config.id\"\n>\n  <div class=\"button-content-container\">\n    <span\n      class=\"icon\"\n      *ngIf=\"config.icon\"\n    >\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: config.icon }\"\n      ></ircc-cl-lib-icon>\n    </span>\n    <span class=\"text\"><ng-content></ng-content></span>\n  </div>\n</button>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }], preserveWhitespaces: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUV2RSxNQUFNLENBQU4sSUFBWSxnQkFJWDtBQUpELFdBQVksZ0JBQWdCO0lBQzFCLHVDQUFtQixDQUFBO0lBQ25CLDJDQUF1QixDQUFBO0lBQ3ZCLG1DQUFlLENBQUE7QUFDakIsQ0FBQyxFQUpXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLDZCQUFlLENBQUE7SUFDZiw2QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDckIsb0NBQXFCLENBQUE7SUFDckIsMEJBQVcsQ0FBQTtBQUNiLENBQUMsRUFIVyxXQUFXLEtBQVgsV0FBVyxRQUd0QjtBQUVELDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixJQUFJO0FBRUosTUFBTSxDQUFOLElBQVksbUJBR1g7QUFIRCxXQUFZLG1CQUFtQjtJQUM3QixvQ0FBYSxDQUFBO0lBQ2Isc0NBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSFcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUc5QjtBQWtCRCxNQUFNLE9BQU8sZUFBZTtJQUo1QjtRQUtXLFdBQU0sR0FB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c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIEJ1dHRvbkNhdGVnb3JpZXMge1xuICBwcmltYXJ5ID0gJ3ByaW1hcnknLFxuICBzZWNvbmRhcnkgPSAnc2Vjb25kYXJ5JyxcbiAgcGxhaW4gPSAncGxhaW4nXG59XG5cbmV4cG9ydCBlbnVtIEJ1dHRvblNpemUge1xuICBzbWFsbCA9ICdzbWFsbCcsXG4gIGxhcmdlID0gJ2xhcmdlJ1xufVxuXG5leHBvcnQgZW51bSBCdXR0b25Db2xvciB7XG4gIGNyaXRpY2FsID0gJ2NyaXRpY2FsJyxcbiAgQ1RBID0gJ0NUQSdcbn1cblxuLy8gZXhwb3J0IGVudW0gQnV0dG9uVHlwZSB7XG4vLyAgICAgYnV0dG9uID0gJ2J1dHRvbicsXG4vLyAgICAgc3VibWl0ID0gJ3N1Ym1pdCcsXG4vLyAgICAgcmVzZXQgPSAncmVzZXQnXG4vLyB9XG5cbmV4cG9ydCBlbnVtIEJ1dHRvbkljb25EaXJlY3Rpb24ge1xuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQnV0dG9uQ29uZmlnIHtcbiAgaWQ6IHN0cmluZztcbiAgY2F0ZWdvcnk/OiBrZXlvZiB0eXBlb2YgQnV0dG9uQ2F0ZWdvcmllcztcbiAgc2l6ZT86IGtleW9mIHR5cGVvZiBCdXR0b25TaXplO1xuICBjb2xvcj86IGtleW9mIHR5cGVvZiBCdXR0b25Db2xvcjtcbiAgYXJpYUxhYmVsPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG4gIGljb25EaXJlY3Rpb24/OiBrZXlvZiB0eXBlb2YgQnV0dG9uSWNvbkRpcmVjdGlvbjtcbiAgdGFiSW5kZXg/OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lyY2MtY2wtbGliLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbmZpZzogSUJ1dHRvbkNvbmZpZyA9IHtcbiAgICBpZDogJydcbiAgfTtcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgY2F0ZWdvcnk/OiBrZXlvZiB0eXBlb2YgQnV0dG9uQ2F0ZWdvcmllcztcbiAgQElucHV0KCkgc2l6ZT86IGtleW9mIHR5cGVvZiBCdXR0b25TaXplO1xuICBASW5wdXQoKSBjb2xvcj86IGtleW9mIHR5cGVvZiBCdXR0b25Db2xvcjtcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGljb24/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25EaXJlY3Rpb24/OiBrZXlvZiB0eXBlb2YgQnV0dG9uSWNvbkRpcmVjdGlvbjtcbiAgQElucHV0KCkgdGFiSW5kZXg/OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIGJ0bkFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pZCAhPT0gJycgPyAodGhpcy5jb25maWcuaWQgPSB0aGlzLmlkKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhdGVnb3J5ID09PSB1bmRlZmluZWRcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6ICh0aGlzLmNvbmZpZy5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnkpO1xuICAgIHRoaXMuc2l6ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHRoaXMuY29uZmlnLnNpemUgPSB0aGlzLnNpemUpO1xuICAgIHRoaXMuY29sb3IgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmNvbmZpZy5jb2xvciA9IHRoaXMuY29sb3IpO1xuICAgIHRoaXMuYXJpYUxhYmVsICE9PSB1bmRlZmluZWRcbiAgICAgID8gKHRoaXMuY29uZmlnLmFyaWFMYWJlbCA9IHRoaXMuYXJpYUxhYmVsKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkXG4gICAgICA/ICh0aGlzLmNvbmZpZy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhYkluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgID8gKHRoaXMuY29uZmlnLnRhYkluZGV4ID0gdGhpcy50YWJJbmRleClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLmljb24gfHwgdGhpcy5jb25maWcuaWNvbikge1xuICAgICAgdGhpcy5jb25maWcuaWNvbiA9IHRoaXMuaWNvbiA/IHRoaXMuaWNvbiA6IHRoaXMuY29uZmlnLmljb247XG4gICAgICB0aGlzLmNvbmZpZy5pY29uRGlyZWN0aW9uID0gdGhpcy5pY29uRGlyZWN0aW9uXG4gICAgICAgID8gdGhpcy5pY29uRGlyZWN0aW9uXG4gICAgICAgIDogdGhpcy5jb25maWcuaWNvbkRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY29uZmlnLmljb25EaXJlY3Rpb24gPSB0aGlzLmNvbmZpZy5pY29uRGlyZWN0aW9uXG4gICAgICAgID8gdGhpcy5jb25maWcuaWNvbkRpcmVjdGlvblxuICAgICAgICA6ICdsZWZ0JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuY29uZmlnLmljb25EaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tFdmVudChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5idG5BY3Rpb24uZW1pdChpZCk7XG4gIH1cbn1cbiIsIjxidXR0b25cbiAgW2F0dHIuYXJpYS1sYWJlbF09XCJjb25maWcuYXJpYUxhYmVsXCJcbiAgW2F0dHIuY29sb3JdPVwiY29uZmlnLmNvbG9yXCJcbiAgW2F0dHIuY2F0ZWdvcnldPVwiY29uZmlnLmNhdGVnb3J5XCJcbiAgW2F0dHIuc2l6ZV09XCJjb25maWcuc2l6ZVwiXG4gIFthdHRyLnRhYkluZGV4XT1cImNvbmZpZy50YWJJbmRleFwiXG4gIFtkaXNhYmxlZF09XCJjb25maWcuZGlzYWJsZWRcIlxuICBbbmdDbGFzc109XCJjb25maWcuaWNvbkRpcmVjdGlvblwiXG4gIChjbGljayk9XCJjbGlja0V2ZW50KGNvbmZpZy5pZClcIlxuICBjbGFzcz1cImxpYi1idXR0b25cIlxuICBbaWRdPVwiY29uZmlnLmlkXCJcbj5cbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250ZW50LWNvbnRhaW5lclwiPlxuICAgIDxzcGFuXG4gICAgICBjbGFzcz1cImljb25cIlxuICAgICAgKm5nSWY9XCJjb25maWcuaWNvblwiXG4gICAgPlxuICAgICAgPGlyY2MtY2wtbGliLWljb25cbiAgICAgICAgW2NvbmZpZ109XCJ7IEZBX2tleXdvcmRzOiBjb25maWcuaWNvbiB9XCJcbiAgICAgID48L2lyY2MtY2wtbGliLWljb24+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XG4gIDwvZGl2PlxuPC9idXR0b24+XG4iXX0=