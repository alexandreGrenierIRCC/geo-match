import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ngx-translate/core";
export class ErrorComponent {
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
ErrorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ErrorComponent, selector: "ircc-cl-lib-error", inputs: { config: "config", id: "id", errorLOV: "errorLOV", icon: "icon", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<div\n  id=\"{{ config?.id }}\"\n  [ngClass]=\"['errorContainer', config?.size ?? '']\"\n>\n  <i\n    *ngIf=\"config?.id?.endsWith('error0')\"\n    [ngClass]=\"\n      config?.icon !== undefined\n        ? config?.icon?.class\n        : 'fa-light fa-circle-exclamation'\n    \"\n    class=\"errorIcon\"\n  ></i>\n  <p\n    [ngClass]=\"{ additionalError: !config?.id?.endsWith('error0') }\"\n    class=\"errorText\"\n  >\n    {{ config?.errorLOV || '' | translate }}\n  </p>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2Zvcm0tY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvZm9ybS1jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDOzs7O0FBbUJ2QixNQUFNLE9BQU8sY0FBYztJQU96QixnQkFBZSxDQUFDO0lBQ2hCLFFBQVE7UUFDTixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRztnQkFDWixFQUFFLEVBQUUsRUFBRTtnQkFDTixRQUFRLEVBQUUsRUFBRTthQUNiLENBQUM7UUFDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3RDLElBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLElBQUksQ0FBQyxJQUFJO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7NEdBN0JVLGNBQWM7Z0dBQWQsY0FBYyx3S0N6QjNCLHFlQW9CQTs0RkRLYSxjQUFjO2tCQUoxQixTQUFTOytCQUNFLG1CQUFtQjswRUFJcEIsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERTU2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uc3RhbnRzL2psLWNvbXBvbmVudHMuY29uc3RhbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRXJyb3JJY29uQ29uZmlnIHtcbiAgY2xhc3M6IHN0cmluZzsgLy8gRm9udGF3ZXNvbWUgaWNvbiBjbGFzc1xuICBjb2xvcj86IHN0cmluZzsgLy8gaWNvbiBjb2xvclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckNvbXBvbmVudENvbmZpZyB7XG4gIGlkOiBzdHJpbmc7XG4gIGVycm9yTE9WOiBzdHJpbmc7XG4gIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNTaXplcztcbiAgaWNvbj86IElFcnJvckljb25Db25maWc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lyY2MtY2wtbGliLWVycm9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY29uZmlnPzogSUVycm9yQ29tcG9uZW50Q29uZmlnO1xuICBASW5wdXQoKSBpZD86IHN0cmluZztcbiAgQElucHV0KCkgZXJyb3JMT1Y/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb24/OiBJRXJyb3JJY29uQ29uZmlnO1xuICBASW5wdXQoKSBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ09uSW5pdCgpIHtcbiAgICAvL0luaXRpYWwgbnVsbCBhbmQgb3ZlcnJpZGUgY2hlY2s6XG4gICAgaWYgKCF0aGlzLmNvbmZpZylcbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIGVycm9yTE9WOiAnJ1xuICAgICAgfTtcbiAgICB0aGlzLnBvcnRJbnB1dFZhbHVlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMucG9ydElucHV0VmFsdWVzKCk7XG4gIH1cblxuICBwcml2YXRlIHBvcnRJbnB1dFZhbHVlcygpIHtcbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIGlmICh0aGlzLmlkKSB0aGlzLmNvbmZpZy5pZCA9IHRoaXMuaWQ7XG4gICAgICBpZiAodGhpcy5lcnJvckxPVikgdGhpcy5jb25maWcuZXJyb3JMT1YgPSB0aGlzLmVycm9yTE9WO1xuICAgICAgaWYgKHRoaXMuaWNvbikgdGhpcy5jb25maWcuaWNvbiA9IHRoaXMuaWNvbjtcbiAgICAgIGlmICh0aGlzLnNpemUpIHRoaXMuY29uZmlnLnNpemUgPSB0aGlzLnNpemU7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2XG4gIGlkPVwie3sgY29uZmlnPy5pZCB9fVwiXG4gIFtuZ0NsYXNzXT1cIlsnZXJyb3JDb250YWluZXInLCBjb25maWc/LnNpemUgPz8gJyddXCJcbj5cbiAgPGlcbiAgICAqbmdJZj1cImNvbmZpZz8uaWQ/LmVuZHNXaXRoKCdlcnJvcjAnKVwiXG4gICAgW25nQ2xhc3NdPVwiXG4gICAgICBjb25maWc/Lmljb24gIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGNvbmZpZz8uaWNvbj8uY2xhc3NcbiAgICAgICAgOiAnZmEtbGlnaHQgZmEtY2lyY2xlLWV4Y2xhbWF0aW9uJ1xuICAgIFwiXG4gICAgY2xhc3M9XCJlcnJvckljb25cIlxuICA+PC9pPlxuICA8cFxuICAgIFtuZ0NsYXNzXT1cInsgYWRkaXRpb25hbEVycm9yOiAhY29uZmlnPy5pZD8uZW5kc1dpdGgoJ2Vycm9yMCcpIH1cIlxuICAgIGNsYXNzPVwiZXJyb3JUZXh0XCJcbiAgPlxuICAgIHt7IGNvbmZpZz8uZXJyb3JMT1YgfHwgJycgfCB0cmFuc2xhdGUgfX1cbiAgPC9wPlxuPC9kaXY+XG4iXX0=