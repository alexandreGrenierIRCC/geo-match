import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/button.component";
import * as i3 from "@ngx-translate/core";
export var IFlyoutOptionType;
(function (IFlyoutOptionType) {
    IFlyoutOptionType["text"] = "text";
    IFlyoutOptionType["checkbox"] = "checkbox";
    IFlyoutOptionType["dropdown"] = "dropdown";
    IFlyoutOptionType["line"] = "line";
    IFlyoutOptionType["heading"] = "heading";
})(IFlyoutOptionType || (IFlyoutOptionType = {}));
;
export class FlyoutOptionComponent {
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
FlyoutOptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: FlyoutOptionComponent, selector: "ircc-cl-lib-flyout-option", inputs: { config: "config", id: "id", size: "size", value: "value", selected: "selected", active: "active", disabled: "disabled", type: "type", clickable: "clickable" }, ngImport: i0, template: "<div\n  class=\"option-container\"\n  [ngClass]=\"config.size\"\n>\n  <ircc-cl-lib-button\n    [category]=\"'plain'\"\n    [id]=\"config.id ? config.id : ''\"\n    role=\"option\"\n    [tabIndex]=\"-1\"\n  >\n    <div class=\"option-contents\">\n      <p class=\"option-text\">{{ config.value || '' | translate }}</p>\n      <div *ngIf=\"config.selected\">\n        <span class=\"fa-solid fa-check option-check\"></span>\n      </div>\n    </div>\n  </ircc-cl-lib-button>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.ButtonComponent, selector: "ircc-cl-lib-button", inputs: ["config", "id", "category", "size", "color", "ariaLabel", "disabled", "icon", "iconDirection", "tabIndex"], outputs: ["btnAction"] }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2ZseW91dC1vcHRpb24vZmx5b3V0LW9wdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2ZseW91dC1vcHRpb24vZmx5b3V0LW9wdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHekQsTUFBTSxDQUFOLElBQVksaUJBTVg7QUFORCxXQUFZLGlCQUFpQjtJQUMzQixrQ0FBYSxDQUFBO0lBQ2IsMENBQXFCLENBQUE7SUFDckIsMENBQXFCLENBQUE7SUFDckIsa0NBQWEsQ0FBQTtJQUNiLHdDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFOVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBTTVCO0FBV0EsQ0FBQztBQU1GLE1BQU0sT0FBTyxxQkFBcUI7SUFnQmhDO1FBZFMsV0FBTSxHQUF5QjtZQUN0QyxFQUFFLEVBQUUsRUFBRTtZQUNOLEtBQUssRUFBRSxhQUFhO1NBQ3JCLENBQUE7SUFXZSxDQUFDO0lBRWpCLFFBQVE7UUFDTCxnREFBZ0Q7UUFDakQsSUFBRyxJQUFJLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDckMsSUFBRyxJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBRyxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBRyxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkQsSUFBRyxJQUFJLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBRyxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkQsSUFBRyxJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBRyxJQUFJLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFMUQsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzdELElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDaEksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBQUEsQ0FBQzs7bUhBbkNTLHFCQUFxQjt1R0FBckIscUJBQXFCLDJPQzFCbEMsbWVBa0JBOzRGRFFhLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSwyQkFBMkI7MEVBSzVCLE1BQU07c0JBQWQsS0FBSztnQkFLRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLOztBQXVCUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEU1NpemVzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9qbC1jb21wb25lbnRzLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBlbnVtIElGbHlvdXRPcHRpb25UeXBlIHtcbiAgdGV4dCA9ICd0ZXh0JyxcbiAgY2hlY2tib3ggPSAnY2hlY2tib3gnLFxuICBkcm9wZG93biA9ICdkcm9wZG93bicsXG4gIGxpbmUgPSAnbGluZScsXG4gIGhlYWRpbmcgPSAnaGVhZGluZydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmx5b3V0T3B0aW9uQ29uZmlnIHtcbiAgaWQ/OiBzdHJpbmcsXG4gIHZhbHVlOiBzdHJpbmcsXG4gIHNlbGVjdGVkPzogYm9vbGVhbixcbiAgYWN0aXZlPzogYm9vbGVhbixcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICB0eXBlPzoga2V5b2YgdHlwZW9mIElGbHlvdXRPcHRpb25UeXBlLFxuICBjbGlja2FibGU/OiBib29sZWFuLFxuICBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXNcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lyY2MtY2wtbGliLWZseW91dC1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZmx5b3V0LW9wdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0T3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBjb25maWcgOiBJRmx5b3V0T3B0aW9uQ29uZmlnID0ge1xuICAgIGlkOiAnJyxcbiAgICB2YWx1ZTogJ0JsYW5rIGxhYmVsJ1xuICB9XG5cbiAgQElucHV0KCkgaWQ/IDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplPyA6IGtleW9mIHR5cGVvZiBEU1NpemVzO1xuICBASW5wdXQoKSB2YWx1ZT86IHN0cmluZztcbiAgQElucHV0KCkgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBhY3RpdmU/OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHR5cGU/OiBrZXlvZiB0eXBlb2YgSUZseW91dE9wdGlvblR5cGU7XG4gIEBJbnB1dCgpIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgLy9zZXQgY29uZmlnIGZyb20gaW5kaXZpZHVhbCBvcHRpb25zLCBpZiBwcmVzZW50XG4gICAgaWYodGhpcy5pZCkgdGhpcy5jb25maWcuaWQgPSB0aGlzLmlkO1xuICAgIGlmKHRoaXMuc2l6ZSkgdGhpcy5jb25maWcuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICBpZih0aGlzLnZhbHVlKSB0aGlzLmNvbmZpZy52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgaWYodGhpcy5zZWxlY3RlZCkgdGhpcy5jb25maWcuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgIGlmKHRoaXMuYWN0aXZlKSB0aGlzLmNvbmZpZy5hY3RpdmUgPSB0aGlzLmFjdGl2ZTtcbiAgICBpZih0aGlzLmRpc2FibGVkKSB0aGlzLmNvbmZpZy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgaWYodGhpcy50eXBlKSB0aGlzLmNvbmZpZy50eXBlID0gdGhpcy50eXBlO1xuICAgIGlmKHRoaXMuY2xpY2thYmxlKSB0aGlzLmNvbmZpZy5jbGlja2FibGUgPSB0aGlzLmNsaWNrYWJsZTtcblxuICAgIGlmKHRoaXMuY29uZmlnLnR5cGUgPT09IHVuZGVmaW5lZCkgdGhpcy5jb25maWcudHlwZSA9ICd0ZXh0JztcbiAgICBpZigodGhpcy5jb25maWcudHlwZSA9PT0gJ3RleHQnIHx8ICdjaGVja2JveCcgfHwgJ2Ryb3Bkb3duJykgJiYgdGhpcy5jb25maWcuY2xpY2thYmxlICE9PSBmYWxzZSAmJiB0aGlzLmNvbmZpZy5kaXNhYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jb25maWcuY2xpY2thYmxlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcuY2xpY2thYmxlID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG59O1xuIiwiPGRpdlxuICBjbGFzcz1cIm9wdGlvbi1jb250YWluZXJcIlxuICBbbmdDbGFzc109XCJjb25maWcuc2l6ZVwiXG4+XG4gIDxpcmNjLWNsLWxpYi1idXR0b25cbiAgICBbY2F0ZWdvcnldPVwiJ3BsYWluJ1wiXG4gICAgW2lkXT1cImNvbmZpZy5pZCA/IGNvbmZpZy5pZCA6ICcnXCJcbiAgICByb2xlPVwib3B0aW9uXCJcbiAgICBbdGFiSW5kZXhdPVwiLTFcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cIm9wdGlvbi1jb250ZW50c1wiPlxuICAgICAgPHAgY2xhc3M9XCJvcHRpb24tdGV4dFwiPnt7IGNvbmZpZy52YWx1ZSB8fCAnJyB8IHRyYW5zbGF0ZSB9fTwvcD5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb25maWcuc2VsZWN0ZWRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVjayBvcHRpb24tY2hlY2tcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9pcmNjLWNsLWxpYi1idXR0b24+XG48L2Rpdj5cbiJdfQ==