import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../navigation.service";
import * as i2 from "@angular/common";
import * as i3 from "../../icon-button/icon-button.component";
import * as i4 from "../nav-item-heading/nav-item-heading.component";
export class navItemAccordionComponent {
    constructor(navEvent) {
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
            size: this.config?.size,
            icon: {
                class: 'fa-light fa-arrow-right',
                color: 'var(--text-primary)'
            }
        };
        this.buttonIconClose = {
            id: `${this.config.id}-button`,
            category: 'custom',
            size: this.config?.size,
            icon: {
                class: 'fa-light fa-arrow-right',
                color: 'var(--text-primary)'
            }
        };
        this.navObjectChangeSub = new Subscription();
    }
    ngOnInit() {
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
            size: this.config?.size,
            icon: {
                class: 'fa-light fa-chevron-up',
                color: 'var(--text-primary)'
            }
        };
        this.buttonIconClose = {
            id: `${this.config.id}_button_close`,
            category: 'custom',
            size: this.config?.size,
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
navItemAccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemAccordionComponent, deps: [{ token: i1.NavigationService }], target: i0.ɵɵFactoryTarget.Component });
navItemAccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navItemAccordionComponent, selector: "ircc-cl-lib-nav-accordion", inputs: { config: "config", id: "id", open: "open", label: "label", size: "size", iconLeading: "iconLeading" }, ngImport: i0, template: "<div\n  [id]=\"config.id\"\n  class=\"lib-nav-item\"\n>\n  <div class=\"accordion-panel\">\n    <div\n      class=\"accordion-nav\"\n      tabindex=\"1\"\n      (keydown.enter)=\"enterPress($event)\"\n    >\n      <ircc-cl-lib-nav-header\n        [id]=\"headerID\"\n        [attr.size]=\"config.size\"\n        [size]=\"config.size\"\n        [label]=\"config?.label || ''\"\n        [iconLeading]=\"config?.iconLeading || ''\"\n      >\n      </ircc-cl-lib-nav-header>\n\n      <ircc-cl-lib-icon-button\n        *ngIf=\"config.open === true\"\n        (clickEvent)=\"openAccordion($event)\"\n        [config]=\"buttonIconOpen\"\n        [attr.size]=\"config.size\"\n        class=\"open\"\n      ></ircc-cl-lib-icon-button>\n      <ircc-cl-lib-icon-button\n        *ngIf=\"config.open === false\"\n        (clickEvent)=\"openAccordion($event)\"\n        [attr.size]=\"config.size\"\n        [config]=\"buttonIconClose\"\n        class=\"close\"\n      ></ircc-cl-lib-icon-button>\n    </div>\n    <div\n      [class]=\"\n        config.open ? 'open accordion-content' : 'close accordion-content'\n      \"\n    >\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.IconButtonComponent, selector: "ircc-cl-lib-icon-button", inputs: ["config", "id", "category", "size", "ariaLabel", "disabled", "icon"], outputs: ["clickEvent"] }, { kind: "component", type: i4.navItemHeadingComponent, selector: "ircc-cl-lib-nav-header", inputs: ["config", "id", "label", "iconLeading", "children", "size"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemAccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-nav-accordion', template: "<div\n  [id]=\"config.id\"\n  class=\"lib-nav-item\"\n>\n  <div class=\"accordion-panel\">\n    <div\n      class=\"accordion-nav\"\n      tabindex=\"1\"\n      (keydown.enter)=\"enterPress($event)\"\n    >\n      <ircc-cl-lib-nav-header\n        [id]=\"headerID\"\n        [attr.size]=\"config.size\"\n        [size]=\"config.size\"\n        [label]=\"config?.label || ''\"\n        [iconLeading]=\"config?.iconLeading || ''\"\n      >\n      </ircc-cl-lib-nav-header>\n\n      <ircc-cl-lib-icon-button\n        *ngIf=\"config.open === true\"\n        (clickEvent)=\"openAccordion($event)\"\n        [config]=\"buttonIconOpen\"\n        [attr.size]=\"config.size\"\n        class=\"open\"\n      ></ircc-cl-lib-icon-button>\n      <ircc-cl-lib-icon-button\n        *ngIf=\"config.open === false\"\n        (clickEvent)=\"openAccordion($event)\"\n        [attr.size]=\"config.size\"\n        [config]=\"buttonIconClose\"\n        class=\"close\"\n      ></ircc-cl-lib-icon-button>\n    </div>\n    <div\n      [class]=\"\n        config.open ? 'open accordion-content' : 'close accordion-content'\n      \"\n    >\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NavigationService }]; }, propDecorators: { config: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0tYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvbmF2aWdhdGlvbi9uYXYtaXRlbS1hY2NvcmRpb24vbmF2LWl0ZW0tYWNjb3JkaW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvbmF2aWdhdGlvbi9uYXYtaXRlbS1hY2NvcmRpb24vbmF2LWl0ZW0tYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBTzVDLE1BQU0sT0FBTyx5QkFBeUI7SUF1Q3BDLFlBQW9CLFFBQTJCO1FBQTNCLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBdEN0QyxXQUFNLEdBQTZCO1lBQzFDLEVBQUUsRUFBRSxFQUFFO1lBQ04sSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLFdBQVc7WUFDakIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBQ08sT0FBRSxHQUFXLEVBQUUsQ0FBQztRQUVoQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRWxDLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsbUJBQWMsR0FBK0I7WUFDM0MsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVM7WUFDOUIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FB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LENBQUM7SUFDL0QsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDdkMsQ0FBQzs7dUhBdEZVLHlCQUF5QjsyR0FBekIseUJBQXlCLGlMQ1p0Qyw0cENBMkNBOzRGRC9CYSx5QkFBeUI7a0JBSnJDLFNBQVM7K0JBQ0UsMkJBQTJCO3dHQUk1QixNQUFNO3NCQUFkLEtBQUs7Z0JBUUcsRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERTU2l6ZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29uc3RhbnRzL2psLWNvbXBvbmVudHMuY29uc3RhbnRzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGlvbkl0ZW1BY2NvcmRpb24gfSBmcm9tICcuLi9uYXZpZ2F0aW9uLnR5cGVzJztcbmltcG9ydCB7IElJY29uQnV0dG9uQ29tcG9uZW50Q29uZmlnIH0gZnJvbSAnLi4vLi4vaWNvbi1idXR0b24vaWNvbi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lyY2MtY2wtbGliLW5hdi1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LWl0ZW0tYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBuYXZJdGVtQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZmlnOiBJTmF2aWdhdGlvbkl0ZW1BY2NvcmRpb24gPSB7XG4gICAgaWQ6ICcnLFxuICAgIG9wZW46IGZhbHNlLFxuICAgIGxhYmVsOiAnJyxcbiAgICBzaXplOiAnc21hbGwnLFxuICAgIHR5cGU6ICdhY2NvcmRpb24nLFxuICAgIGNoaWxkcmVuOiBbXVxuICB9O1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc2l6ZToga2V5b2YgdHlwZW9mIERTU2l6ZXMgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGljb25MZWFkaW5nOiBzdHJpbmcgPSAnJztcblxuICBoZWFkZXJJRDogc3RyaW5nID0gJyc7XG5cbiAgYnV0dG9uSWNvbk9wZW46IElJY29uQnV0dG9uQ29tcG9uZW50Q29uZmlnID0ge1xuICAgIGlkOiBgJHt0aGlzLmNvbmZpZy5pZH0tYnV0dG9uYCxcbiAgICBjYXRlZ29yeTogJ2N1c3RvbScsXG4gICAgc2l6ZTogdGhpcy5jb25maWc/LnNpemUsXG4gICAgaWNvbjoge1xuICAgICAgY2xhc3M6ICdmYS1saWdodCBmYS1hcnJvdy1yaWdodCcsXG4gICAgICBjb2xvcjogJ3ZhcigtLXRleHQtcHJpbWFyeSknXG4gICAgfVxuICB9O1xuXG4gIGJ1dHRvbkljb25DbG9zZTogSUljb25CdXR0b25Db21wb25lbnRDb25maWcgPSB7XG4gICAgaWQ6IGAke3RoaXMuY29uZmlnLmlkfS1idXR0b25gLFxuICAgIGNhdGVnb3J5OiAnY3VzdG9tJyxcbiAgICBzaXplOiB0aGlzLmNvbmZpZz8uc2l6ZSxcbiAgICBpY29uOiB7XG4gICAgICBjbGFzczogJ2ZhLWxpZ2h0IGZhLWFycm93LXJpZ2h0JyxcbiAgICAgIGNvbG9yOiAndmFyKC0tdGV4dC1wcmltYXJ5KSdcbiAgICB9XG4gIH07XG5cbiAgbmF2T2JqZWN0Q2hhbmdlU3ViID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2RXZlbnQ6IE5hdmlnYXRpb25TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMubmF2T2JqZWN0Q2hhbmdlU3ViID0gdGhpcy5uYXZFdmVudC5uYXZPYmplY3RDaGFuZ2VPYnMkLnBpcGUoXG4gICAgLy8gICBmaWx0ZXIoaXRlbSA9PiAoaXRlbS5pZCA9PT0gdGhpcy5jb25maWcuaWQgJiYgaXRlbS50eXBlID09PSAnYWNjb3JkaW9uJykpKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgIC8vICAgICB0aGlzLmNvbmZpZyA9IHJlc3BvbnNlIGFzIE5hdmlnYXRpb25JdGVtQWNjb3JkaW9uO1xuICAgIC8vICAgfSk7XG5cbiAgICB0aGlzLmlkICE9PSAnJyA/ICh0aGlzLmNvbmZpZy5pZCA9IHRoaXMuaWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMub3BlbiAhPT0gdW5kZWZpbmVkID8gKHRoaXMuY29uZmlnLm9wZW4gPSB0aGlzLm9wZW4pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgIT09ICcnID8gKHRoaXMuY29uZmlnLmxhYmVsID0gdGhpcy5sYWJlbCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplICE9PSB1bmRlZmluZWQgPyAodGhpcy5jb25maWcuc2l6ZSA9IHRoaXMuc2l6ZSkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uTGVhZGluZyAhPT0gJydcbiAgICAgID8gKHRoaXMuY29uZmlnLmljb25MZWFkaW5nID0gdGhpcy5pY29uTGVhZGluZylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5jb25maWcpO1xuXG4gICAgdGhpcy5oZWFkZXJJRCA9IGAke3RoaXMuY29uZmlnLmlkfV9oZWFkZXJgO1xuICAgIHRoaXMuYnV0dG9uSWNvbk9wZW4gPSB7XG4gICAgICBpZDogYCR7dGhpcy5jb25maWcuaWR9X2J1dHRvbl9vcGVuYCxcbiAgICAgIGNhdGVnb3J5OiAnY3VzdG9tJyxcbiAgICAgIHNpemU6IHRoaXMuY29uZmlnPy5zaXplLFxuICAgICAgaWNvbjoge1xuICAgICAgICBjbGFzczogJ2ZhLWxpZ2h0IGZhLWNoZXZyb24tdXAnLFxuICAgICAgICBjb2xvcjogJ3ZhcigtLXRleHQtcHJpbWFyeSknXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYnV0dG9uSWNvbkNsb3NlID0ge1xuICAgICAgaWQ6IGAke3RoaXMuY29uZmlnLmlkfV9idXR0b25fY2xvc2VgLFxuICAgICAgY2F0ZWdvcnk6ICdjdXN0b20nLFxuICAgICAgc2l6ZTogdGhpcy5jb25maWc/LnNpemUsXG4gICAgICBpY29uOiB7XG4gICAgICAgIGNsYXNzOiAnZmEtbGlnaHQgZmEtY2hldnJvbi1kb3duJyxcbiAgICAgICAgY29sb3I6ICd2YXIoLS10ZXh0LXByaW1hcnkpJ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBvcGVuQWNjb3JkaW9uKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZy5vcGVuID0gIXRoaXMuY29uZmlnLm9wZW47XG4gICAgdGhpcy5uYXZFdmVudC5uYXZFdmVudCh7IGlkOiB0aGlzLmNvbmZpZy5pZCwgZXZlbnQ6IGV2ZW50IH0pO1xuICB9XG5cbiAgZW50ZXJQcmVzcyhldmVudDogYW55KSB7XG4gICAgdGhpcy5jb25maWcub3BlbiA9ICF0aGlzLmNvbmZpZy5vcGVuO1xuICB9XG59XG4iLCI8ZGl2XG4gIFtpZF09XCJjb25maWcuaWRcIlxuICBjbGFzcz1cImxpYi1uYXYtaXRlbVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tcGFuZWxcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImFjY29yZGlvbi1uYXZcIlxuICAgICAgdGFiaW5kZXg9XCIxXCJcbiAgICAgIChrZXlkb3duLmVudGVyKT1cImVudGVyUHJlc3MoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGlyY2MtY2wtbGliLW5hdi1oZWFkZXJcbiAgICAgICAgW2lkXT1cImhlYWRlcklEXCJcbiAgICAgICAgW2F0dHIuc2l6ZV09XCJjb25maWcuc2l6ZVwiXG4gICAgICAgIFtzaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgW2xhYmVsXT1cImNvbmZpZz8ubGFiZWwgfHwgJydcIlxuICAgICAgICBbaWNvbkxlYWRpbmddPVwiY29uZmlnPy5pY29uTGVhZGluZyB8fCAnJ1wiXG4gICAgICA+XG4gICAgICA8L2lyY2MtY2wtbGliLW5hdi1oZWFkZXI+XG5cbiAgICAgIDxpcmNjLWNsLWxpYi1pY29uLWJ1dHRvblxuICAgICAgICAqbmdJZj1cImNvbmZpZy5vcGVuID09PSB0cnVlXCJcbiAgICAgICAgKGNsaWNrRXZlbnQpPVwib3BlbkFjY29yZGlvbigkZXZlbnQpXCJcbiAgICAgICAgW2NvbmZpZ109XCJidXR0b25JY29uT3BlblwiXG4gICAgICAgIFthdHRyLnNpemVdPVwiY29uZmlnLnNpemVcIlxuICAgICAgICBjbGFzcz1cIm9wZW5cIlxuICAgICAgPjwvaXJjYy1jbC1saWItaWNvbi1idXR0b24+XG4gICAgICA8aXJjYy1jbC1saWItaWNvbi1idXR0b25cbiAgICAgICAgKm5nSWY9XCJjb25maWcub3BlbiA9PT0gZmFsc2VcIlxuICAgICAgICAoY2xpY2tFdmVudCk9XCJvcGVuQWNjb3JkaW9uKCRldmVudClcIlxuICAgICAgICBbYXR0ci5zaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgW2NvbmZpZ109XCJidXR0b25JY29uQ2xvc2VcIlxuICAgICAgICBjbGFzcz1cImNsb3NlXCJcbiAgICAgID48L2lyY2MtY2wtbGliLWljb24tYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIFtjbGFzc109XCJcbiAgICAgICAgY29uZmlnLm9wZW4gPyAnb3BlbiBhY2NvcmRpb24tY29udGVudCcgOiAnY2xvc2UgYWNjb3JkaW9uLWNvbnRlbnQnXG4gICAgICBcIlxuICAgID5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==