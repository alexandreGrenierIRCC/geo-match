import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/common";
export const TAG_LABELS_EN = [
    'In Progress',
    'Completed',
    'Error',
    'Locked',
    'Not started'
];
export const TAG_LABELS_FR = [
    'En cours',
    'Complété',
    'Erreur',
    'Verrouillé',
    'Pas commencé'
];
export var TagType;
(function (TagType) {
    TagType["primary"] = "primary";
    TagType["success"] = "success";
    TagType["critical"] = "critical";
    TagType["locked"] = "locked";
    TagType["notStarted"] = "notStarted";
})(TagType || (TagType = {}));
export class ProgressTagsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtdGFncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL3Byb2dyZXNzLXRhZ3MvcHJvZ3Jlc3MtdGFncy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL3Byb2dyZXNzLXRhZ3MvcHJvZ3Jlc3MtdGFncy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7Ozs7QUFJcEUsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBQzNCLGFBQWE7SUFDYixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0NBQ2QsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRztJQUMzQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7SUFDUixZQUFZO0lBQ1osY0FBYztDQUNmLENBQUM7QUFFRixNQUFNLENBQU4sSUFBWSxPQU1YO0FBTkQsV0FBWSxPQUFPO0lBQ2pCLDhCQUFtQixDQUFBO0lBQ25CLDhCQUFtQixDQUFBO0lBQ25CLGdDQUFxQixDQUFBO0lBQ3JCLDRCQUFpQixDQUFBO0lBQ2pCLG9DQUF5QixDQUFBO0FBQzNCLENBQUMsRUFOVyxPQUFPLEtBQVAsT0FBTyxRQU1sQjtBQVVELE1BQU0sT0FBTyxxQkFBcUI7SUFVaEMsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFUL0MsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUVYLFdBQU0sR0FBd0I7WUFDckMsRUFBRSxFQUFFLEVBQUU7U0FDUCxDQUFDO1FBQ08sT0FBRSxHQUFHLEVBQUUsQ0FBQztJQUlpQyxDQUFDO0lBRW5ELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSTtZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsS0FBSyxPQUFPLEVBQ3RDO1lBQ0EsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7bUhBbkNVLHFCQUFxQjt1R0FBckIscUJBQXFCLDBKQ25DbEMsNnlDQXFDQTs0RkRGYSxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UsMkJBQTJCO3VHQU01QixNQUFNO3NCQUFkLEtBQUs7Z0JBR0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRFNTaXplcyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb25zdGFudHMvamwtY29tcG9uZW50cy5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgVEFHX0xBQkVMU19FTiA9IFtcbiAgJ0luIFByb2dyZXNzJyxcbiAgJ0NvbXBsZXRlZCcsXG4gICdFcnJvcicsXG4gICdMb2NrZWQnLFxuICAnTm90IHN0YXJ0ZWQnXG5dO1xuZXhwb3J0IGNvbnN0IFRBR19MQUJFTFNfRlIgPSBbXG4gICdFbiBjb3VycycsXG4gICdDb21wbMOpdMOpJyxcbiAgJ0VycmV1cicsXG4gICdWZXJyb3VpbGzDqScsXG4gICdQYXMgY29tbWVuY8OpJ1xuXTtcblxuZXhwb3J0IGVudW0gVGFnVHlwZSB7XG4gIHByaW1hcnkgPSAncHJpbWFyeScsXG4gIHN1Y2Nlc3MgPSAnc3VjY2VzcycsXG4gIGNyaXRpY2FsID0gJ2NyaXRpY2FsJyxcbiAgbG9ja2VkID0gJ2xvY2tlZCcsXG4gIG5vdFN0YXJ0ZWQgPSAnbm90U3RhcnRlZCdcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2dyZXNzVGFnc0NvbmZpZyB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU/OiBrZXlvZiB0eXBlb2YgVGFnVHlwZTtcbiAgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItcHJvZ3Jlc3MtdGFncycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy10YWdzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1RhZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0ZXh0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogSVByb2dyZXNzVGFnc0NvbmZpZyA9IHtcbiAgICBpZDogJydcbiAgfTtcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgdHlwZT86IGtleW9mIHR5cGVvZiBUYWdUeXBlIHwgVGFnVHlwZTtcbiAgQElucHV0KCkgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzIHwgRFNTaXplcztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pZCkgdGhpcy5jb25maWcuaWQgPSB0aGlzLmlkO1xuICAgIGlmICh0aGlzLnR5cGUpIHRoaXMuY29uZmlnLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgaWYgKHRoaXMuc2l6ZSkgdGhpcy5jb25maWcuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB0aGlzLnNldFR5cGVUaXRsZSgpO1xuICAgIHRoaXMudHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUeXBlVGl0bGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2V0VHlwZVRpdGxlKCk7XG4gIH1cblxuICBzZXRUeXBlVGl0bGUoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgPT09ICdlbicgfHxcbiAgICAgIHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nID09PSAnZW4tVVMnXG4gICAgKSB7XG4gICAgICB0aGlzLnRleHQgPSBUQUdfTEFCRUxTX0VOO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRleHQgPSBUQUdfTEFCRUxTX0ZSO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cInt7IGNvbmZpZy5zaXplIH19XCJcbiAgaWQ9XCJ7eyBjb25maWcuaWQgfX1cIlxuICBjbGFzcz1cInRhZy1jb21wb25lbnRcIlxuICBbbmdDbGFzc109XCJ7XG4gICAgc3VjY2VzczogY29uZmlnLnR5cGUgPT09ICdzdWNjZXNzJyxcbiAgICBjcml0aWNhbDogY29uZmlnLnR5cGUgPT09ICdjcml0aWNhbCcsXG4gICAgbmV1dHJhbDogY29uZmlnLnR5cGUgPT09ICdsb2NrZWQnIHx8IGNvbmZpZy50eXBlID09PSAnbm90U3RhcnRlZCdcbiAgfVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJ0YWctY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhZy1sZWZ0XCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb25maWcudHlwZVwiPlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc3VjY2VzcydcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLWNpcmNsZS1jaGVjayBmYS1yZWd1bGFyIHRhZy1pY29uXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudFwiPnt7IHRleHRbMV0gfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY3JpdGljYWwnXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1jaXJjbGUtZXhjbGFtYXRpb24gZmEtcmVndWxhciB0YWctaWNvblwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnRcIj57eyB0ZXh0WzJdIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2xvY2tlZCdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLWxpZ2h0IGZhLWxvY2sgdGFnLWljb25cIj48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50XCI+e3sgdGV4dFszXSB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidub3RTdGFydGVkJ1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtbGlnaHQgZmEtY2lyY2xlIHRhZy1pY29uXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudFwiPnt7IHRleHRbNF0gfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1oYWxmLXN0cm9rZSB0YWctaWNvblwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnRcIj57eyB0ZXh0WzBdIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19