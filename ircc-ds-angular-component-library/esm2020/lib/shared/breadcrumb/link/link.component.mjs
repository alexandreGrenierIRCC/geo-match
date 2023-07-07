import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "@ngx-translate/core";
export class BreadcrumbLinkComponent {
    constructor() {
        this.config = {
            text: '',
            overflow: false
        };
    }
}
BreadcrumbLinkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbLinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbLinkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: BreadcrumbLinkComponent, selector: "ircc-cl-lib-breadcrumb-link", inputs: { config: "config" }, ngImport: i0, template: "<ng-container *ngIf=\"config.href\">\n  <a\n    [href]=\"config.href\"\n    tabindex=\"-1\"\n    >{{ config.text | translate }}\n  </a>\n</ng-container>\n<ng-container *ngIf=\"config.routerLink\">\n  <a\n    type=\"button\"\n    tabindex=\"-1\"\n    [routerLink]=\"config.routerLink\"\n    >{{ config.text | translate }}\n  </a>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-breadcrumb-link', template: "<ng-container *ngIf=\"config.href\">\n  <a\n    [href]=\"config.href\"\n    tabindex=\"-1\"\n    >{{ config.text | translate }}\n  </a>\n</ng-container>\n<ng-container *ngIf=\"config.routerLink\">\n  <a\n    type=\"button\"\n    tabindex=\"-1\"\n    [routerLink]=\"config.routerLink\"\n    >{{ config.text | translate }}\n  </a>\n</ng-container>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2JyZWFkY3J1bWIvbGluay9saW5rLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvYnJlYWRjcnVtYi9saW5rL2xpbmsuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBY2pELE1BQU0sT0FBTyx1QkFBdUI7SUFNbEM7UUFMUyxXQUFNLEdBQXlCO1lBQ3RDLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztJQUVhLENBQUM7O3FIQU5MLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLGlHQ2RwQyw2VkFlQTs0RkREYSx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0UsNkJBQTZCOzBFQUk5QixNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmtDb21wb25lbnRDb25maWcge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGxpbmtLZXk/OiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIHJvdXRlckxpbms/OiBzdHJpbmc7XG4gIG92ZXJmbG93PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItYnJlYWRjcnVtYi1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpbmsuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJMaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlnOiBJTGlua0NvbXBvbmVudENvbmZpZyA9IHtcbiAgICB0ZXh0OiAnJyxcbiAgICBvdmVyZmxvdzogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmhyZWZcIj5cbiAgPGFcbiAgICBbaHJlZl09XCJjb25maWcuaHJlZlwiXG4gICAgdGFiaW5kZXg9XCItMVwiXG4gICAgPnt7IGNvbmZpZy50ZXh0IHwgdHJhbnNsYXRlIH19XG4gIDwvYT5cbjwvbmctY29udGFpbmVyPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5yb3V0ZXJMaW5rXCI+XG4gIDxhXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgdGFiaW5kZXg9XCItMVwiXG4gICAgW3JvdXRlckxpbmtdPVwiY29uZmlnLnJvdXRlckxpbmtcIlxuICAgID57eyBjb25maWcudGV4dCB8IHRyYW5zbGF0ZSB9fVxuICA8L2E+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==