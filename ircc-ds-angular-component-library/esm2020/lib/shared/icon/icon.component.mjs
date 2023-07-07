import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class IconComponent {
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
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: IconComponent, selector: "ircc-cl-lib-icon", inputs: { config: "config", ariaLabel: "ariaLabel", FA_keywords: "FA_keywords", size: "size" }, viewQueries: [{ propertyName: "iconSpan", first: true, predicate: ["iconSpan"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<span\n  class=\"ds-icon-container\"\n  [ngClass]=\"config.size\"\n>\n  <span\n    #iconSpan\n    [attr.aria-hidden]=\"config.ariaLabel ? false : true\"\n    [attr.aria-label]=\"config.ariaLabel ? config.ariaLabel : null\"\n    [attr.role]=\"config.ariaLabel ? 'img' : null\"\n  >\n    <i\n      class=\"font-icon\"\n      [ngClass]=\"config.FA_keywords\"\n    ></i>\n  </span>\n</span>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], preserveWhitespaces: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2ljb24vaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFJTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7OztBQWF2QixNQUFNLE9BQU8sYUFBYTtJQUoxQjtRQU1XLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO0tBNEJuQztJQXZCQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ3ZELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDOUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxJQUFJLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDVCxXQUFXLElBQUksT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7U0FDckQ7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLGdEQUFnRDtRQUNoRCxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzRCxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNqRSxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUU1QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7MkdBN0JVLGFBQWE7K0ZBQWIsYUFBYSxtUkNyQjFCLHNZQWdCQTs0RkRLYSxhQUFhO2tCQUp6QixTQUFTOytCQUNFLGtCQUFrQjs4QkFJTCxRQUFRO3NCQUE5QixTQUFTO3VCQUFDLFVBQVU7Z0JBQ1osTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRFNTaXplcyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb25zdGFudHMvamwtY29tcG9uZW50cy5jb25zdGFudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJY29uQ29uZmlnIHtcbiAgYXJpYUxhYmVsPzogc3RyaW5nO1xuICBGQV9rZXl3b3Jkcz86IHN0cmluZztcbiAgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpcmNjLWNsLWxpYi1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2ljb25TcGFuJykgaWNvblNwYW4hOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBjb25maWc6IElJY29uQ29uZmlnID0ge307XG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IHN0cmluZztcbiAgQElucHV0KCkgRkFfa2V5d29yZHM/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNTaXplcztcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ2NvbmZpZyddICYmICFjaGFuZ2VzWydjb25maWcnXS5maXJzdENoYW5nZSkge1xuICAgICAgY29uc3QgY2hhbmdlID0gY2hhbmdlc1snY29uZmlnJ10uY3VycmVudFZhbHVlO1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZSk7XG4gICAgICBsZXQgc3BhbkNvbnRlbnQgPSBgPGkgY2xhc3M9J2ZvbnQtaWNvbiBgO1xuICAgICAga2V5cy5pbmNsdWRlcygnRkFfa2V5d29yZHMnKVxuICAgICAgICA/IChzcGFuQ29udGVudCArPSBgJHtjaGFuZ2VbJ0ZBX2tleXdvcmRzJ119J2ApXG4gICAgICAgIDogbnVsbDtcbiAgICAgIHNwYW5Db250ZW50ICs9IGA+PC9pPmA7XG4gICAgICB0aGlzLmljb25TcGFuLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gc3BhbkNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9zZXQgY29uZmlnIGZyb20gaW5kaXZpZHVhbCBvcHRpb25zLCBpZiBwcmVzZW50XG4gICAgaWYgKHRoaXMuYXJpYUxhYmVsKSB0aGlzLmNvbmZpZy5hcmlhTGFiZWwgPSB0aGlzLmFyaWFMYWJlbDtcbiAgICBpZiAodGhpcy5GQV9rZXl3b3JkcykgdGhpcy5jb25maWcuRkFfa2V5d29yZHMgPSB0aGlzLkZBX2tleXdvcmRzO1xuICAgIGlmICh0aGlzLnNpemUpIHRoaXMuY29uZmlnLnNpemUgPSB0aGlzLnNpemU7XG5cbiAgICBpZiAodGhpcy5jb25maWcuYXJpYUxhYmVsID09PSAnJykge1xuICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLmFyaWFMYWJlbDtcbiAgICB9XG4gIH1cbn1cbiIsIjxzcGFuXG4gIGNsYXNzPVwiZHMtaWNvbi1jb250YWluZXJcIlxuICBbbmdDbGFzc109XCJjb25maWcuc2l6ZVwiXG4+XG4gIDxzcGFuXG4gICAgI2ljb25TcGFuXG4gICAgW2F0dHIuYXJpYS1oaWRkZW5dPVwiY29uZmlnLmFyaWFMYWJlbCA/IGZhbHNlIDogdHJ1ZVwiXG4gICAgW2F0dHIuYXJpYS1sYWJlbF09XCJjb25maWcuYXJpYUxhYmVsID8gY29uZmlnLmFyaWFMYWJlbCA6IG51bGxcIlxuICAgIFthdHRyLnJvbGVdPVwiY29uZmlnLmFyaWFMYWJlbCA/ICdpbWcnIDogbnVsbFwiXG4gID5cbiAgICA8aVxuICAgICAgY2xhc3M9XCJmb250LWljb25cIlxuICAgICAgW25nQ2xhc3NdPVwiY29uZmlnLkZBX2tleXdvcmRzXCJcbiAgICA+PC9pPlxuICA8L3NwYW4+XG48L3NwYW4+XG4iXX0=