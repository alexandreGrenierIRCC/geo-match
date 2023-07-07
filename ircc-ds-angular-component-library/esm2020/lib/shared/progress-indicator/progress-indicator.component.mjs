import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/common";
import * as i3 from "../progress-tags/progress-tags.component";
export const PROGRESS_INDICATOR_STEP_EN = 'Step';
export const PROGRESS_INDICATOR_STEP_FR = 'Étap';
export var Orientations;
(function (Orientations) {
    Orientations["horizontal"] = "horizontal";
    Orientations["vertical"] = "vertical";
})(Orientations || (Orientations = {}));
export class ProgressIndicatorComponent {
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
ProgressIndicatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ProgressIndicatorComponent, selector: "ircc-cl-lib-progress-indicator", inputs: { config: "config", id: "id", size: "size", orientation: "orientation", steps: "steps", selected: "selected" }, outputs: { tabClick: "tabClick" }, ngImport: i0, template: "<div\n  [class]=\"config.orientation\"\n  class=\"main-container\"\n>\n  <div\n    class=\"container-plus-line\"\n    *ngFor=\"let step of config.steps; let i = index\"\n  >\n    <nav\n      class=\"progress-nav\"\n      role=\"navigation\"\n    >\n      <button\n        role=\"tab\"\n        class=\"container\"\n        [ngClass]=\"config.size\"\n        category=\"plain\"\n        [attr.disabled]=\"step.tagConfig.type === 'locked' ? 'disabled' : null\"\n        (click)=\"tabClickFn(i)\"\n      >\n        <div class=\"except-line\">\n          <button\n            tabindex=\"-1\"\n            *ngIf=\"i === config.selected\"\n            selected\n            class=\"tags-btn\"\n            [id]=\"config.id + '_step_' + i\"\n            [attr.aria-label]=\"stepText + ' ' + (i + 1) + ' selected'\"\n          >\n            {{ stepText + ' ' + (i + 1) }}\n          </button>\n          <button\n            tabindex=\"-1\"\n            *ngIf=\"i !== config.selected\"\n            class=\"tags-btn-plus\"\n            [id]=\"config.id + '_step_' + i\"\n            [attr.aria-label]=\"stepText + ' ' + (i + 1)\"\n          >\n            {{ stepText + ' ' + (i + 1) }}\n          </button>\n          <span\n            class=\"stepTitle\"\n            [innerHTML]=\"step.title || '' | translate\"\n          ></span>\n          <div [ngClass]=\"{ small: config.size === 'small' }\">\n            <ircc-cl-lib-progress-tags\n              [config]=\"step.tagConfig\"\n            ></ircc-cl-lib-progress-tags>\n          </div>\n        </div>\n      </button>\n    </nav>\n    <div\n      [ngClass]=\"{ 'green-line': step.tagConfig.type === 'success' }\"\n      class=\"line\"\n    ></div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.ProgressTagsComponent, selector: "ircc-cl-lib-progress-tags", inputs: ["config", "id", "type", "size"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvcHJvZ3Jlc3MtaW5kaWNhdG9yL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL3Byb2dyZXNzLWluZGljYXRvci9wcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNL0UsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsTUFBTSxDQUFDO0FBQ2pELE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHLE1BQU0sQ0FBQztBQWFqRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLHlDQUF5QixDQUFBO0lBQ3pCLHFDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUtELE1BQU0sT0FBTywwQkFBMEI7SUEwQnJDLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBekJ0QyxXQUFNLEdBQTZCO1lBQzFDLEVBQUUsRUFBRSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsQyxXQUFXLEVBQUUsWUFBWTtTQUMxQixDQUFDO1FBUVEsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNELGNBQVMsR0FBZTtZQUN0QixFQUFFLEVBQUUsRUFBRTtZQUNOLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztRQUNGLGlCQUFZLEdBQWtCO1lBQzVCLEVBQUUsRUFBRSxFQUFFO1lBQ04sR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUM3QixDQUFDO1FBRUYsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVvQyxDQUFDO0lBRW5ELFFBQVE7UUFDTixnREFBZ0Q7UUFDaEQsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDakUsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0MsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLFFBQWdCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLDBCQUEwQixDQUFDO1NBQzVDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLDBCQUEwQixDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7d0hBekRVLDBCQUEwQjs0R0FBMUIsMEJBQTBCLGlPQzVCdkMsMnJEQTBEQTs0RkQ5QmEsMEJBQTBCO2tCQUp0QyxTQUFTOytCQUNFLGdDQUFnQzt1R0FJakMsTUFBTTtzQkFBZCxLQUFLO2dCQU1HLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFFSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRFNTaXplcyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb25zdGFudHMvamwtY29tcG9uZW50cy5jb25zdGFudHMnO1xuaW1wb3J0IHsgSVByb2dyZXNzVGFnc0NvbmZpZyB9IGZyb20gJy4uL3Byb2dyZXNzLXRhZ3MvcHJvZ3Jlc3MtdGFncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVRhYkNvbmZpZywgSVRhYk5hdkNvbmZpZyB9IGZyb20gJy4uL3RhYnMvdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgUFJPR1JFU1NfSU5ESUNBVE9SX1NURVBfRU4gPSAnU3RlcCc7XG5leHBvcnQgY29uc3QgUFJPR1JFU1NfSU5ESUNBVE9SX1NURVBfRlIgPSAnw4l0YXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdGVwQ29uZmlnIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHRhZ0NvbmZpZzogSVByb2dyZXNzVGFnc0NvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2dyZXNzSW5kaWNhdG9yQ29uZmlnIHtcbiAgaWQ6IHN0cmluZztcbiAgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzO1xuICBvcmllbnRhdGlvbj86IGtleW9mIHR5cGVvZiBPcmllbnRhdGlvbnM7XG4gIHN0ZXBzPzogSVN0ZXBDb25maWdbXTtcbiAgc2VsZWN0ZWQ/OiBudW1iZXI7XG59XG5leHBvcnQgZW51bSBPcmllbnRhdGlvbnMge1xuICBob3Jpem9udGFsID0gJ2hvcml6b250YWwnLFxuICB2ZXJ0aWNhbCA9ICd2ZXJ0aWNhbCdcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lyY2MtY2wtbGliLXByb2dyZXNzLWluZGljYXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZmlnOiBJUHJvZ3Jlc3NJbmRpY2F0b3JDb25maWcgPSB7XG4gICAgaWQ6ICcnLFxuICAgIHN0ZXBzOiBbeyB0YWdDb25maWc6IHsgaWQ6ICcnIH0gfV0sXG4gICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJ1xuICB9O1xuXG4gIEBJbnB1dCgpIGlkPzogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG4gIEBJbnB1dCgpIG9yaWVudGF0aW9uPzoga2V5b2YgdHlwZW9mIE9yaWVudGF0aW9ucztcbiAgQElucHV0KCkgc3RlcHM/OiBJU3RlcENvbmZpZ1tdO1xuICBASW5wdXQoKSBzZWxlY3RlZD86IG51bWJlcjtcblxuICBAT3V0cHV0KCkgdGFiQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHRhYkNvbmZpZzogSVRhYkNvbmZpZyA9IHtcbiAgICBpZDogJycsXG4gICAgdGl0bGU6ICcnXG4gIH07XG4gIHRhYk5hdkNvbmZpZzogSVRhYk5hdkNvbmZpZyA9IHtcbiAgICBpZDogJycsXG4gICAgdGFiOiBbeyBpZDogJycsIHRpdGxlOiAnJyB9XVxuICB9O1xuXG4gIHN0ZXBUZXh0ID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9zZXQgY29uZmlnIGZyb20gaW5kaXZpZHVhbCBvcHRpb25zLCBpZiBwcmVzZW50XG4gICAgaWYgKHRoaXMuaWQpIHRoaXMuY29uZmlnLmlkID0gdGhpcy5pZDtcbiAgICBpZiAodGhpcy5zaXplKSB0aGlzLmNvbmZpZy5zaXplID0gdGhpcy5zaXplO1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uKSB0aGlzLmNvbmZpZy5vcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb247XG4gICAgaWYgKHRoaXMuc3RlcHMpIHRoaXMuY29uZmlnLnN0ZXBzID0gdGhpcy5zdGVwcztcbiAgICBpZiAodGhpcy5zZWxlY3RlZCkgdGhpcy5jb25maWcuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vcmllbnRhdGlvbikgdGhpcy5jb25maWcub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgdGhpcy5zZXRMYW5nKHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nKTtcbiAgICB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChjaGFuZ2UpID0+IHtcbiAgICAgIHRoaXMuc2V0TGFuZyhjaGFuZ2UubGFuZyk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jb25maWcuc2VsZWN0ZWQgPSAwO1xuICAgIH1cbiAgfVxuXG4gIHRhYkNsaWNrRm4oc2VsZWN0ZWQ6IG51bWJlcikge1xuICAgIHRoaXMudGFiQ2xpY2suZW1pdChzZWxlY3RlZCk7XG4gIH1cblxuICBzZXRMYW5nKGxhbmc6IHN0cmluZykge1xuICAgIGlmIChsYW5nID09PSAnZW4nIHx8IGxhbmcgPT09ICdlbi1VUycpIHtcbiAgICAgIHRoaXMuc3RlcFRleHQgPSBQUk9HUkVTU19JTkRJQ0FUT1JfU1RFUF9FTjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGVwVGV4dCA9IFBST0dSRVNTX0lORElDQVRPUl9TVEVQX0ZSO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdlxuICBbY2xhc3NdPVwiY29uZmlnLm9yaWVudGF0aW9uXCJcbiAgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiXG4+XG4gIDxkaXZcbiAgICBjbGFzcz1cImNvbnRhaW5lci1wbHVzLWxpbmVcIlxuICAgICpuZ0Zvcj1cImxldCBzdGVwIG9mIGNvbmZpZy5zdGVwczsgbGV0IGkgPSBpbmRleFwiXG4gID5cbiAgICA8bmF2XG4gICAgICBjbGFzcz1cInByb2dyZXNzLW5hdlwiXG4gICAgICByb2xlPVwibmF2aWdhdGlvblwiXG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgY2xhc3M9XCJjb250YWluZXJcIlxuICAgICAgICBbbmdDbGFzc109XCJjb25maWcuc2l6ZVwiXG4gICAgICAgIGNhdGVnb3J5PVwicGxhaW5cIlxuICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJzdGVwLnRhZ0NvbmZpZy50eXBlID09PSAnbG9ja2VkJyA/ICdkaXNhYmxlZCcgOiBudWxsXCJcbiAgICAgICAgKGNsaWNrKT1cInRhYkNsaWNrRm4oaSlcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhjZXB0LWxpbmVcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaSA9PT0gY29uZmlnLnNlbGVjdGVkXCJcbiAgICAgICAgICAgIHNlbGVjdGVkXG4gICAgICAgICAgICBjbGFzcz1cInRhZ3MtYnRuXCJcbiAgICAgICAgICAgIFtpZF09XCJjb25maWcuaWQgKyAnX3N0ZXBfJyArIGlcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJzdGVwVGV4dCArICcgJyArIChpICsgMSkgKyAnIHNlbGVjdGVkJ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgc3RlcFRleHQgKyAnICcgKyAoaSArIDEpIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAqbmdJZj1cImkgIT09IGNvbmZpZy5zZWxlY3RlZFwiXG4gICAgICAgICAgICBjbGFzcz1cInRhZ3MtYnRuLXBsdXNcIlxuICAgICAgICAgICAgW2lkXT1cImNvbmZpZy5pZCArICdfc3RlcF8nICsgaVwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInN0ZXBUZXh0ICsgJyAnICsgKGkgKyAxKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgc3RlcFRleHQgKyAnICcgKyAoaSArIDEpIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwic3RlcFRpdGxlXCJcbiAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic3RlcC50aXRsZSB8fCAnJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsgc21hbGw6IGNvbmZpZy5zaXplID09PSAnc21hbGwnIH1cIj5cbiAgICAgICAgICAgIDxpcmNjLWNsLWxpYi1wcm9ncmVzcy10YWdzXG4gICAgICAgICAgICAgIFtjb25maWddPVwic3RlcC50YWdDb25maWdcIlxuICAgICAgICAgICAgPjwvaXJjYy1jbC1saWItcHJvZ3Jlc3MtdGFncz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25hdj5cbiAgICA8ZGl2XG4gICAgICBbbmdDbGFzc109XCJ7ICdncmVlbi1saW5lJzogc3RlcC50YWdDb25maWcudHlwZSA9PT0gJ3N1Y2Nlc3MnIH1cIlxuICAgICAgY2xhc3M9XCJsaW5lXCJcbiAgICA+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=