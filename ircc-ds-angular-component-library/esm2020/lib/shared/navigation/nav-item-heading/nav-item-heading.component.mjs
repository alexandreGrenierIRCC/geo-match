import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../navigation.service";
import * as i2 from "@angular/common";
import * as i3 from "../../icon/icon.component";
import * as i4 from "@ngx-translate/core";
export class navItemHeadingComponent {
    constructor(navEvent) {
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
            size: this.config?.size,
            icon: {
                class: this.config?.iconLeading,
                color: 'var(--text-primary)'
            }
        };
        this.navObjectChangeSub = new Subscription();
    }
    ngOnInit() {
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
            size: this.config?.size,
            icon: {
                class: this.config?.iconLeading,
                color: 'var(--text-primary)'
            }
        };
    }
}
navItemHeadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemHeadingComponent, deps: [{ token: i1.NavigationService }], target: i0.ɵɵFactoryTarget.Component });
navItemHeadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navItemHeadingComponent, selector: "ircc-cl-lib-nav-header", inputs: { config: "config", id: "id", label: "label", iconLeading: "iconLeading", children: "children", size: "size" }, ngImport: i0, template: "<div [id]=\"config.id\">\n  <div\n    class=\"nav-header-header\"\n    [class]=\"config.iconLeading.length > 0 ? 'grid-header' : ''\"\n  >\n    <ircc-cl-lib-icon\n      *ngIf=\"config.iconLeading.length > 0\"\n      [config]=\"{ FA_keywords: config.iconLeading }\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n    <h2>{{ config?.label || '' | translate }}</h2>\n  </div>\n  <div class=\"nav-header-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "pipe", type: i4.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemHeadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-nav-header', template: "<div [id]=\"config.id\">\n  <div\n    class=\"nav-header-header\"\n    [class]=\"config.iconLeading.length > 0 ? 'grid-header' : ''\"\n  >\n    <ircc-cl-lib-icon\n      *ngIf=\"config.iconLeading.length > 0\"\n      [config]=\"{ FA_keywords: config.iconLeading }\"\n      [attr.size]=\"config.size\"\n    ></ircc-cl-lib-icon>\n    <h2>{{ config?.label || '' | translate }}</h2>\n  </div>\n  <div class=\"nav-header-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NavigationService }]; }, propDecorators: { config: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0taGVhZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL25hdmlnYXRpb24vbmF2LWl0ZW0taGVhZGluZy9uYXYtaXRlbS1oZWFkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvbmF2aWdhdGlvbi9uYXYtaXRlbS1oZWFkaW5nL25hdi1pdGVtLWhlYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBTXBDLE1BQU0sT0FBTyx1QkFBdUI7SUE0QmxDLFlBQW9CLFFBQTJCO1FBQTNCLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBM0J0QyxXQUFNLEdBQTJCO1lBQ3hDLEVBQUUsRUFBRSxFQUFFO1lBQ04sS0FBSyxFQUFFLEVBQUU7WUFDVCxXQUFXLEVBQUUsRUFBRTtZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLFNBQVM7WUFDZixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFFTyxPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFJbEMsZUFBVSxHQUErQjtZQUN2QyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUztZQUM5QixRQUFRLEVBQUUsUUFBUTtZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJO1lBQ3ZCLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXO2dCQUMvQixLQUFLLEVBQUUscUJBQXFCO2FBQzdCO1NBQ0YsQ0FBQztRQUVGLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFVSxDQUFDO0lBRW5ELFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxLQUFLLEVBQUU7WUFDckIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUM5QyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTO1lBQ3pCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRXJFLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVM7WUFDOUIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSTtZQUN2QixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVztnQkFDL0IsS0FBSyxFQUFFLHFCQUFxQjthQUM3QjtTQUNGLENBQUM7SUFDSixDQUFDOztxSEFsRFUsdUJBQXVCO3lHQUF2Qix1QkFBdUIsc0xDWHBDLDhkQWdCQTs0RkRMYSx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0Usd0JBQXdCO3dHQUl6QixNQUFNO3NCQUFkLEtBQUs7Z0JBU0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEU1NpemVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9qbC1jb21wb25lbnRzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJTmF2aWdhdGlvbkl0ZW0sIElOYXZpZ2F0aW9uSXRlbUhlYWRpbmcgfSBmcm9tICcuLi9uYXZpZ2F0aW9uLnR5cGVzJztcbmltcG9ydCB7IElJY29uQnV0dG9uQ29tcG9uZW50Q29uZmlnIH0gZnJvbSAnLi4vLi4vaWNvbi1idXR0b24vaWNvbi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpcmNjLWNsLWxpYi1uYXYtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1pdGVtLWhlYWRpbmcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIG5hdkl0ZW1IZWFkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZmlnOiBJTmF2aWdhdGlvbkl0ZW1IZWFkaW5nID0ge1xuICAgIGlkOiAnJyxcbiAgICBsYWJlbDogJycsXG4gICAgaWNvbkxlYWRpbmc6ICcnLFxuICAgIHNpemU6ICdzbWFsbCcsXG4gICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgIGNoaWxkcmVuOiBbXVxuICB9O1xuXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpY29uTGVhZGluZzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNoaWxkcmVuOiBBcnJheTxJTmF2aWdhdGlvbkl0ZW0+IHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBzaXplOiBrZXlvZiB0eXBlb2YgRFNTaXplcyB8IHVuZGVmaW5lZDtcblxuICBidXR0b25JY29uOiBJSWNvbkJ1dHRvbkNvbXBvbmVudENvbmZpZyA9IHtcbiAgICBpZDogYCR7dGhpcy5jb25maWcuaWR9LWJ1dHRvbmAsXG4gICAgY2F0ZWdvcnk6ICdjdXN0b20nLFxuICAgIHNpemU6IHRoaXMuY29uZmlnPy5zaXplLFxuICAgIGljb246IHtcbiAgICAgIGNsYXNzOiB0aGlzLmNvbmZpZz8uaWNvbkxlYWRpbmcsXG4gICAgICBjb2xvcjogJ3ZhcigtLXRleHQtcHJpbWFyeSknXG4gICAgfVxuICB9O1xuXG4gIG5hdk9iamVjdENoYW5nZVN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdkV2ZW50OiBOYXZpZ2F0aW9uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlkICE9PSAnJyA/ICh0aGlzLmNvbmZpZy5pZCA9IHRoaXMuaWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgIT09ICcnID8gKHRoaXMuY29uZmlnLmxhYmVsID0gdGhpcy5sYWJlbCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uTGVhZGluZyAhPT0gJydcbiAgICAgID8gKHRoaXMuY29uZmlnLmljb25MZWFkaW5nID0gdGhpcy5pY29uTGVhZGluZylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZFxuICAgICAgPyAodGhpcy5jb25maWcuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaXplICE9PSB1bmRlZmluZWQgPyAodGhpcy5jb25maWcuc2l6ZSA9IHRoaXMuc2l6ZSkgOiB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmJ1dHRvbkljb24gPSB7XG4gICAgICBpZDogYCR7dGhpcy5jb25maWcuaWR9X2J1dHRvbmAsXG4gICAgICBjYXRlZ29yeTogJ2N1c3RvbScsXG4gICAgICBzaXplOiB0aGlzLmNvbmZpZz8uc2l6ZSxcbiAgICAgIGljb246IHtcbiAgICAgICAgY2xhc3M6IHRoaXMuY29uZmlnPy5pY29uTGVhZGluZyxcbiAgICAgICAgY29sb3I6ICd2YXIoLS10ZXh0LXByaW1hcnkpJ1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiIsIjxkaXYgW2lkXT1cImNvbmZpZy5pZFwiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJuYXYtaGVhZGVyLWhlYWRlclwiXG4gICAgW2NsYXNzXT1cImNvbmZpZy5pY29uTGVhZGluZy5sZW5ndGggPiAwID8gJ2dyaWQtaGVhZGVyJyA6ICcnXCJcbiAgPlxuICAgIDxpcmNjLWNsLWxpYi1pY29uXG4gICAgICAqbmdJZj1cImNvbmZpZy5pY29uTGVhZGluZy5sZW5ndGggPiAwXCJcbiAgICAgIFtjb25maWddPVwieyBGQV9rZXl3b3JkczogY29uZmlnLmljb25MZWFkaW5nIH1cIlxuICAgICAgW2F0dHIuc2l6ZV09XCJjb25maWcuc2l6ZVwiXG4gICAgPjwvaXJjYy1jbC1saWItaWNvbj5cbiAgICA8aDI+e3sgY29uZmlnPy5sYWJlbCB8fCAnJyB8IHRyYW5zbGF0ZSB9fTwvaDI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibmF2LWhlYWRlci1jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19