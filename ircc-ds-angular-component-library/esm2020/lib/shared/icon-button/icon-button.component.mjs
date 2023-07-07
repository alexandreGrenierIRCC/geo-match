import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icon.component";
export var IconButtonCategories;
(function (IconButtonCategories) {
    IconButtonCategories["primary"] = "primary";
    IconButtonCategories["critical"] = "critical";
    IconButtonCategories["custom"] = "custom";
})(IconButtonCategories || (IconButtonCategories = {}));
export const CLASS_X_MARK = 'fa-thin fa-xmark';
export const CLASS_TRASHCAN = 'fa-solid fa-trash-can';
export class IconButtonComponent {
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
IconButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: IconButtonComponent, selector: "ircc-cl-lib-icon-button", inputs: { config: "config", id: "id", category: "category", size: "size", ariaLabel: "ariaLabel", disabled: "disabled", icon: "icon" }, outputs: { clickEvent: "clickEvent" }, ngImport: i0, template: "<button\n  category=\"plain\"\n  [id]=\"config.id\"\n  [attr.aria-label]=\"config.ariaLabel\"\n  [disabled]=\"config.disabled\"\n  (click)=\"buttonClick()\"\n  [class]=\"config.category + ' ' + config.size\"\n  class=\"icon-btn\"\n>\n  <span>\n    <ircc-cl-lib-icon\n      [config]=\"{ FA_keywords: config.icon?.class }\"\n      [style.color]=\"config.icon?.color\"\n    ></ircc-cl-lib-icon>\n  </span>\n</button>\n", dependencies: [{ kind: "component", type: i1.IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }], preserveWhitespaces: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL3NoYXJlZC9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQUUvRSxNQUFNLENBQU4sSUFBWSxvQkFJWDtBQUpELFdBQVksb0JBQW9CO0lBQzlCLDJDQUFtQixDQUFBO0lBQ25CLDZDQUFxQixDQUFBO0lBQ3JCLHlDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBSS9CO0FBZ0JELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUMvQyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUM7QUFLdEQsTUFBTSxPQUFPLG1CQUFtQjtJQUpoQztRQUtXLFdBQU0sR0FBK0I7WUFDNUMsRUFBRSxFQUFFLEVBQUU7WUFDTixRQUFRLEVBQUUsb0JBQW9CLENBQUMsT0FBTztZQUN0QyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFDTyxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBTVAsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbEQsK0JBQStCO1FBQy9CLGdCQUFXLEdBQTZDO1lBQ3RELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUUsWUFBWTtnQkFDbkIsS0FBSyxFQUFFLHFCQUFxQjthQUM3QjtZQUNELFFBQVEsRUFBRTtnQkFDUixLQUFLLEVBQUUsY0FBYztnQkFDckIsS0FBSyxFQUFFLHNCQUFzQjthQUM5QjtTQUNGLENBQUM7S0F3Qkg7SUF0QkMsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLElBQUk7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssb0JBQW9CLENBQUMsTUFBTTtvQkFDbEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO29CQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxvQkFBb0IsQ0FBQyxNQUFNO29CQUNsRCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO29CQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELFdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2lIQTlDVSxtQkFBbUI7cUdBQW5CLG1CQUFtQiw4T0M1QmhDLGlhQWdCQTs0RkRZYSxtQkFBbUI7a0JBSi9CLFNBQVM7K0JBQ0UseUJBQXlCOzhCQUkxQixNQUFNO3NCQUFkLEtBQUs7Z0JBS0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksVUFBVTtzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERTRnVsbFNpemVzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9qbC1jb21wb25lbnRzLmNvbnN0YW50cyc7XG5leHBvcnQgZW51bSBJY29uQnV0dG9uQ2F0ZWdvcmllcyB7XG4gIHByaW1hcnkgPSAncHJpbWFyeScsXG4gIGNyaXRpY2FsID0gJ2NyaXRpY2FsJyxcbiAgY3VzdG9tID0gJ2N1c3RvbSdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSWNvbkJ1dHRvbkljb25Db25maWcge1xuICBjbGFzczogc3RyaW5nOyAvLyBGb250YXdlc29tZSBpY29uIGNsYXNzXG4gIGNvbG9yPzogc3RyaW5nOyAvLyBpY29uIGNvbG9yXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUljb25CdXR0b25Db21wb25lbnRDb25maWcge1xuICBpZDogc3RyaW5nO1xuICBjYXRlZ29yeToga2V5b2YgdHlwZW9mIEljb25CdXR0b25DYXRlZ29yaWVzO1xuICBzaXplPzoga2V5b2YgdHlwZW9mIERTRnVsbFNpemVzO1xuICBhcmlhTGFiZWw/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWNvbj86IElJY29uQnV0dG9uSWNvbkNvbmZpZztcbn1cblxuZXhwb3J0IGNvbnN0IENMQVNTX1hfTUFSSyA9ICdmYS10aGluIGZhLXhtYXJrJztcbmV4cG9ydCBjb25zdCBDTEFTU19UUkFTSENBTiA9ICdmYS1zb2xpZCBmYS10cmFzaC1jYW4nO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItaWNvbi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEljb25CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb25maWc6IElJY29uQnV0dG9uQ29tcG9uZW50Q29uZmlnID0ge1xuICAgIGlkOiAnJyxcbiAgICBjYXRlZ29yeTogSWNvbkJ1dHRvbkNhdGVnb3JpZXMucHJpbWFyeSxcbiAgICBhcmlhTGFiZWw6ICcnXG4gIH07XG4gIEBJbnB1dCgpIGlkID0gJyc7XG4gIEBJbnB1dCgpIGNhdGVnb3J5Pzoga2V5b2YgdHlwZW9mIEljb25CdXR0b25DYXRlZ29yaWVzIHwgSWNvbkJ1dHRvbkNhdGVnb3JpZXM7XG4gIEBJbnB1dCgpIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNGdWxsU2l6ZXMgfCBEU0Z1bGxTaXplcztcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGljb24/OiBJSWNvbkJ1dHRvbkljb25Db25maWc7XG4gIEBPdXRwdXQoKSBjbGlja0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIC8vIE1hcHBpbmcgb2YgaWNvbnMgdG8gY2F0ZWdvcnlcbiAgaWNvbkNvbmZpZ3M6IHsgW2tleTogc3RyaW5nXTogSUljb25CdXR0b25JY29uQ29uZmlnIH0gPSB7XG4gICAgcHJpbWFyeToge1xuICAgICAgY2xhc3M6IENMQVNTX1hfTUFSSyxcbiAgICAgIGNvbG9yOiAndmFyKC0tcHJpbWFyeS10ZXh0KSdcbiAgICB9LFxuICAgIGNyaXRpY2FsOiB7XG4gICAgICBjbGFzczogQ0xBU1NfVFJBU0hDQU4sXG4gICAgICBjb2xvcjogJ3ZhcigtLWNyaXRpY2FsLXRleHQpJ1xuICAgIH1cbiAgfTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pZCkgdGhpcy5jb25maWcuaWQgPSB0aGlzLmlkO1xuICAgIGlmICh0aGlzLmNhdGVnb3J5KSB0aGlzLmNvbmZpZy5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnk7XG4gICAgaWYgKHRoaXMuc2l6ZSkgdGhpcy5jb25maWcuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICBpZiAodGhpcy5hcmlhTGFiZWwpIHRoaXMuY29uZmlnLmFyaWFMYWJlbCA9IHRoaXMuYXJpYUxhYmVsO1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB0aGlzLmNvbmZpZy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuaWNvbilcbiAgICAgIHRoaXMuY29uZmlnLmljb24gPVxuICAgICAgICB0aGlzLmNvbmZpZy5jYXRlZ29yeSA9PT0gSWNvbkJ1dHRvbkNhdGVnb3JpZXMuY3VzdG9tXG4gICAgICAgICAgPyB0aGlzLmljb25cbiAgICAgICAgICA6IHRoaXMuaWNvbkNvbmZpZ3NbdGhpcy5jb25maWcuY2F0ZWdvcnldO1xuICAgIGVsc2UgaWYgKCF0aGlzLmljb24gJiYgdGhpcy5jb25maWcuaWNvbilcbiAgICAgIHRoaXMuY29uZmlnLmljb24gPVxuICAgICAgICB0aGlzLmNvbmZpZy5jYXRlZ29yeSA9PT0gSWNvbkJ1dHRvbkNhdGVnb3JpZXMuY3VzdG9tXG4gICAgICAgICAgPyB0aGlzLmNvbmZpZy5pY29uXG4gICAgICAgICAgOiB0aGlzLmljb25Db25maWdzW3RoaXMuY29uZmlnLmNhdGVnb3J5XTtcbiAgICBlbHNlIHRoaXMuY29uZmlnLmljb24gPSB0aGlzLmljb25Db25maWdzW3RoaXMuY29uZmlnLmNhdGVnb3J5XTtcbiAgfVxuXG4gIGJ1dHRvbkNsaWNrKGlkID0gdGhpcy5jb25maWcuaWQpIHtcbiAgICB0aGlzLmNsaWNrRXZlbnQuZW1pdChpZCk7XG4gIH1cbn1cbiIsIjxidXR0b25cbiAgY2F0ZWdvcnk9XCJwbGFpblwiXG4gIFtpZF09XCJjb25maWcuaWRcIlxuICBbYXR0ci5hcmlhLWxhYmVsXT1cImNvbmZpZy5hcmlhTGFiZWxcIlxuICBbZGlzYWJsZWRdPVwiY29uZmlnLmRpc2FibGVkXCJcbiAgKGNsaWNrKT1cImJ1dHRvbkNsaWNrKClcIlxuICBbY2xhc3NdPVwiY29uZmlnLmNhdGVnb3J5ICsgJyAnICsgY29uZmlnLnNpemVcIlxuICBjbGFzcz1cImljb24tYnRuXCJcbj5cbiAgPHNwYW4+XG4gICAgPGlyY2MtY2wtbGliLWljb25cbiAgICAgIFtjb25maWddPVwieyBGQV9rZXl3b3JkczogY29uZmlnLmljb24/LmNsYXNzIH1cIlxuICAgICAgW3N0eWxlLmNvbG9yXT1cImNvbmZpZy5pY29uPy5jb2xvclwiXG4gICAgPjwvaXJjYy1jbC1saWItaWNvbj5cbiAgPC9zcGFuPlxuPC9idXR0b24+XG4iXX0=