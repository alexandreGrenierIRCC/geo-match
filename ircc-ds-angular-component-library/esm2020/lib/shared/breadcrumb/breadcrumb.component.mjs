import { Component, Input, HostListener, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "../../../shared/functions/stand-alone.functions";
import * as i3 from "@angular/common";
import * as i4 from "./link/link.component";
import * as i5 from "../icon/icon.component";
import * as i6 from "../icon-button/icon-button.component";
import * as i7 from "../../../shared/directives/dom-change.directive";
export var LinkType;
(function (LinkType) {
    LinkType["href"] = "href";
    LinkType["routerLink"] = "routerLink";
})(LinkType || (LinkType = {}));
export class BreadcrumbComponent {
    constructor(translate, standalone, renderer, changeRef) {
        this.translate = translate;
        this.standalone = standalone;
        this.renderer = renderer;
        this.changeRef = changeRef;
        this.config = {
            id: '',
            baseUrlKey: '',
            type: 'href'
        };
        this.id = '';
        this.baseUrl = '';
        this.separatorIcon = {
            id: 'breadcrumb_separator',
            category: 'custom',
            size: this.config?.size,
            icon: {
                class: 'fa-light fa-ellipsis',
                color: 'var(--text-primary)'
            },
            ariaLabel: ''
        };
        this.displayOverflow = false;
        this.maxHeight = 0; // Max height of element in px
        this.isChildOverflow = false;
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.id && this.id !== '')
            this.config.id = this.id;
        if (this.size)
            this.config.size = this.size;
        if (this.type)
            this.config.type = this.type;
        if (this.baseUrlKey)
            this.config.baseUrlKey = this.baseUrlKey;
        this.createLinks();
        this.separatorIcon.size = this.config.size;
        this.maxHeight = this.getMaxHeight();
        this.separatorIcon.ariaLabel = this.translate.instant('ACC_DEMO.BREADCRUMB_COMPONENT.ADDITIONAL_LINKS');
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.createOverflows();
            this.isChildOverflow = this.getChildOverflow();
            this.changeRef.detectChanges();
        }, 500);
    }
    ngOnChanges(changes) {
        // If changing size, update max height
        if (!changes['config'].firstChange &&
            changes['config'].currentValue.size !==
                changes['config'].previousValue.size) {
            this.maxHeight = this.getMaxHeight();
        }
        // If changing link type, recreate all links
        if (!changes['config'].firstChange &&
            changes['config'].currentValue.type !==
                changes['config'].previousValue.type) {
            this.createLinks();
        }
        if (this.config?.links && this.config?.links.length > 0) {
            if (this.config.type == 'routerLink') {
                this.config?.links.forEach((link) => {
                    delete link.href;
                });
            }
            else {
                this.config?.links.forEach((link) => {
                    delete link.routerLink;
                });
            }
        }
        this.separatorIcon.size = this.config.size;
    }
    /**
     * Create href or routerLinks
     */
    createLinks() {
        this.baseUrl = this.standalone.getBaseUrl('', this.config.baseUrlKey);
        if (this.config.links && this.config.links.length > 1) {
            let prev;
            this.config?.links.forEach((link, i) => {
                if (i === 0) {
                    link[this.config.type] = this.baseUrl;
                    prev = link[this.config.type];
                }
                else if (link.linkKey) {
                    link[this.config.type] =
                        prev + this.translate.instant(link.linkKey) + '/';
                    prev = link[this.config.type];
                }
                link.overflow = false;
            });
            this.overflowLinks = this.config?.links.filter((link) => link.overflow);
            this.normalLinks = this.config?.links.filter((link) => !link.overflow);
        }
    }
    getMaxHeight() {
        const containerElement = this.divRef && this.divRef.nativeElement;
        if (containerElement == undefined)
            return 0;
        const tempElement = this.renderer.createElement('p');
        const text = this.renderer.createText('Test');
        this.renderer.appendChild(tempElement, text);
        this.renderer.addClass(tempElement, 'breadcrumb-child');
        this.renderer.appendChild(containerElement, tempElement);
        const maxHeight = tempElement.offsetHeight;
        this.renderer.removeChild(containerElement, tempElement);
        // Calculate based on elipsis icon size to p tag ratio
        return maxHeight * 1.375;
    }
    createOverflows() {
        if (this.divRef &&
            this.divRef?.nativeElement.offsetHeight <= this.maxHeight)
            return;
        if (this.config.links && this.config.links.length > 1) {
            const linksLength = this.config.links.length;
            const overflow = this.config?.links.find((link, i) => i > 0 && i < linksLength - 1 && !link.overflow);
            if (overflow)
                overflow.overflow = true;
            this.overflowLinks = this.config?.links.filter((link) => link.overflow);
            this.normalLinks = this.config?.links.filter((link) => !link.overflow);
        }
    }
    onResize(event) {
        this.overflowLinks = [];
        this.normalLinks = [];
        this.createLinks();
        this.createOverflows();
        this.isChildOverflow = this.getChildOverflow();
    }
    flipOverflow(buttonId) {
        this.displayOverflow = !this.displayOverflow;
    }
    // Check if child page title overflows to 2nd line
    getChildOverflow() {
        if (this.childRef) {
            return (this.childRef.nativeElement.offsetWidth <
                this.childRef.nativeElement.scrollWidth);
        }
        else {
            return false;
        }
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbComponent, deps: [{ token: i1.TranslateService }, { token: i2.StandAloneFunctions }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: BreadcrumbComponent, selector: "ircc-cl-lib-breadcrumb", inputs: { config: "config", id: "id", size: "size", type: "type", baseUrlKey: "baseUrlKey" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "divRef", first: true, predicate: ["breadcrumb_div"], descendants: true }, { propertyName: "childRef", first: true, predicate: ["breadcrumb_child"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"{{ config.size }}\"\n  (domChange)=\"createOverflows()\"\n  #breadcrumb_div\n>\n  <ng-container\n    *ngFor=\"let link of normalLinks; first as first; last as last; index as i\"\n  >\n    <ng-container *ngIf=\"first\">\n      <ircc-cl-lib-breadcrumb-link\n        tabindex=\"0\"\n        class=\"breadcrumb-root\"\n        [config]=\"link\"\n      ></ircc-cl-lib-breadcrumb-link>\n      <div\n        *ngIf=\"overflowLinks && overflowLinks.length > 0\"\n        class=\"overflow-container\"\n      >\n        <ircc-cl-lib-icon\n          [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n          id=\"overflow\"\n        ></ircc-cl-lib-icon>\n        <ircc-cl-lib-icon-button\n          (clickEvent)=\"flipOverflow($event)\"\n          class=\"elipsis-icon\"\n          [config]=\"separatorIcon\"\n        ></ircc-cl-lib-icon-button>\n        <div\n          class=\"overflow-menu\"\n          *ngIf=\"displayOverflow && overflowLinks && overflowLinks.length > 0\"\n        >\n          <ng-container *ngFor=\"let link of overflowLinks\">\n            <ircc-cl-lib-breadcrumb-link\n              tabindex=\"0\"\n              class=\"breadcrumb-overflow\"\n              [config]=\"link\"\n            ></ircc-cl-lib-breadcrumb-link>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"!first && !last\">\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n      ></ircc-cl-lib-icon>\n      <ircc-cl-lib-breadcrumb-link\n        tabindex=\"0\"\n        class=\"breadcrumb-item\"\n        [config]=\"link\"\n      ></ircc-cl-lib-breadcrumb-link>\n    </ng-container>\n    <ng-container *ngIf=\"last\">\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n        class=\"\"\n      ></ircc-cl-lib-icon>\n      <p\n        class=\"breadcrumb-child\"\n        #breadcrumb_child\n      >\n        <span *ngIf=\"!isChildOverflow\">{{ link.text }}</span>\n        <abbr\n          *ngIf=\"isChildOverflow\"\n          [title]=\"link.text\"\n          >{{ link.text }}</abbr\n        >\n      </p>\n    </ng-container>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.BreadcrumbLinkComponent, selector: "ircc-cl-lib-breadcrumb-link", inputs: ["config"] }, { kind: "component", type: i5.IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "component", type: i6.IconButtonComponent, selector: "ircc-cl-lib-icon-button", inputs: ["config", "id", "category", "size", "ariaLabel", "disabled", "icon"], outputs: ["clickEvent"] }, { kind: "directive", type: i7.DomChangeDirective, selector: "[domChange]", outputs: ["domChange"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-breadcrumb', template: "<div\n  class=\"{{ config.size }}\"\n  (domChange)=\"createOverflows()\"\n  #breadcrumb_div\n>\n  <ng-container\n    *ngFor=\"let link of normalLinks; first as first; last as last; index as i\"\n  >\n    <ng-container *ngIf=\"first\">\n      <ircc-cl-lib-breadcrumb-link\n        tabindex=\"0\"\n        class=\"breadcrumb-root\"\n        [config]=\"link\"\n      ></ircc-cl-lib-breadcrumb-link>\n      <div\n        *ngIf=\"overflowLinks && overflowLinks.length > 0\"\n        class=\"overflow-container\"\n      >\n        <ircc-cl-lib-icon\n          [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n          id=\"overflow\"\n        ></ircc-cl-lib-icon>\n        <ircc-cl-lib-icon-button\n          (clickEvent)=\"flipOverflow($event)\"\n          class=\"elipsis-icon\"\n          [config]=\"separatorIcon\"\n        ></ircc-cl-lib-icon-button>\n        <div\n          class=\"overflow-menu\"\n          *ngIf=\"displayOverflow && overflowLinks && overflowLinks.length > 0\"\n        >\n          <ng-container *ngFor=\"let link of overflowLinks\">\n            <ircc-cl-lib-breadcrumb-link\n              tabindex=\"0\"\n              class=\"breadcrumb-overflow\"\n              [config]=\"link\"\n            ></ircc-cl-lib-breadcrumb-link>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"!first && !last\">\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n      ></ircc-cl-lib-icon>\n      <ircc-cl-lib-breadcrumb-link\n        tabindex=\"0\"\n        class=\"breadcrumb-item\"\n        [config]=\"link\"\n      ></ircc-cl-lib-breadcrumb-link>\n    </ng-container>\n    <ng-container *ngIf=\"last\">\n      <ircc-cl-lib-icon\n        [config]=\"{ FA_keywords: 'fa-light fa-chevron-right' }\"\n        class=\"\"\n      ></ircc-cl-lib-icon>\n      <p\n        class=\"breadcrumb-child\"\n        #breadcrumb_child\n      >\n        <span *ngIf=\"!isChildOverflow\">{{ link.text }}</span>\n        <abbr\n          *ngIf=\"isChildOverflow\"\n          [title]=\"link.text\"\n          >{{ link.text }}</abbr\n        >\n      </p>\n    </ng-container>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: i2.StandAloneFunctions }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], baseUrlKey: [{
                type: Input
            }], divRef: [{
                type: ViewChild,
                args: ['breadcrumb_div', { static: false }]
            }], childRef: [{
                type: ViewChild,
                args: ['breadcrumb_child', { static: false }]
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFJTCxZQUFZLEVBS1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFPdkIsTUFBTSxDQUFOLElBQVksUUFHWDtBQUhELFdBQVksUUFBUTtJQUNsQix5QkFBYSxDQUFBO0lBQ2IscUNBQXlCLENBQUE7QUFDM0IsQ0FBQyxFQUhXLFFBQVEsS0FBUixRQUFRLFFBR25CO0FBZ0JELE1BQU0sT0FBTyxtQkFBbUI7SUFrQzlCLFlBQ1UsU0FBMkIsRUFDM0IsVUFBK0IsRUFDL0IsUUFBbUIsRUFDbkIsU0FBNEI7UUFINUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQXJDN0IsV0FBTSxHQUFzQjtZQUNuQyxFQUFFLEVBQUUsRUFBRTtZQUNOLFVBQVUsRUFBRSxFQUFFO1lBQ2QsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDO1FBRU8sT0FBRSxHQUFJLEVBQUUsQ0FBQztRQU9sQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2Isa0JBQWEsR0FBK0I7WUFDMUMsRUFBRSxFQUFFLHNCQUFzQjtZQUMxQixRQUFRLEVBQUUsUUFBUTtZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJO1lBQ3ZCLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixLQUFLLEVBQUUscUJBQXFCO2FBQzdCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBR0Ysb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFXLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtRQUs3RCxvQkFBZSxHQUFZLEtBQUssQ0FBQztJQU05QixDQUFDO0lBRUosUUFBUTtRQUNOLGdEQUFnRDtRQUNoRCxJQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN2RCxJQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFHLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQTtRQUU1RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ25ELGdEQUFnRCxDQUNqRCxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLHNDQUFzQztRQUN0QyxJQUNFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVc7WUFDOUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJO2dCQUNqQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksRUFDdEM7WUFDQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN0QztRQUNELDRDQUE0QztRQUM1QyxJQUNFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVc7WUFDOUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJO2dCQUNqQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksRUFDdEM7WUFDQSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JELElBQUksSUFBd0IsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUN0QyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO3FCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDcEQsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvQjtnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDbEUsSUFBSSxnQkFBZ0IsSUFBSSxTQUFTO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDekQsc0RBQXNEO1FBQ3RELE9BQU8sU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQ0UsSUFBSSxDQUFDLE1BQU07WUFDWCxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFNBQVM7WUFFekQsT0FBTztRQUVULElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUN0QyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUM1RCxDQUFDO1lBQ0YsSUFBSSxRQUFRO2dCQUFFLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztJQUdELFFBQVEsQ0FBQyxLQUFZO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsZ0JBQWdCO1FBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQ3hDLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7O2lIQWhMVSxtQkFBbUI7cUdBQW5CLG1CQUFtQix3YkN0Q2hDLDBwRUFzRUE7NEZEaENhLG1CQUFtQjtrQkFKL0IsU0FBUzsrQkFDRSx3QkFBd0I7aU1BSXpCLE1BQU07c0JBQWQsS0FBSztnQkFNRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFRyxVQUFVO3NCQUFsQixLQUFLO2dCQW1CTixNQUFNO3NCQURMLFNBQVM7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUc5QyxRQUFRO3NCQURQLFNBQVM7dUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQTJIaEQsUUFBUTtzQkFEUCxZQUFZO3VCQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBIb3N0TGlzdGVuZXIsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERTU2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uc3RhbnRzL2psLWNvbXBvbmVudHMuY29uc3RhbnRzJztcbmltcG9ydCB7IElMaW5rQ29tcG9uZW50Q29uZmlnIH0gZnJvbSAnLi9saW5rL2xpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFN0YW5kQWxvbmVGdW5jdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvZnVuY3Rpb25zL3N0YW5kLWFsb25lLmZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBJSWNvbkJ1dHRvbkNvbXBvbmVudENvbmZpZyB9IGZyb20gJy4uL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBlbnVtIExpbmtUeXBlIHtcbiAgaHJlZiA9ICdocmVmJyxcbiAgcm91dGVyTGluayA9ICdyb3V0ZXJMaW5rJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElCcmVhZGNydW1iQ29uZmlnIHtcbiAgaWQ6IHN0cmluZztcbiAgc2l6ZT86IGtleW9mIHR5cGVvZiBEU1NpemVzO1xuICB0eXBlOiBrZXlvZiB0eXBlb2YgTGlua1R5cGU7XG4gIC8vIFRyYW5zbGF0aW9uIGtleSBvZiBiYXNlIHVybCBzZWdtZW50XG4gIGJhc2VVcmxLZXk6IHN0cmluZztcbiAgLy8gVGhlIG1pZC1sYXllciBuYXZpZ2F0aW9uIHRvIHRoZSBhbmNlc3RvciBsaW5rcywgdGhlIHByZXZpb3VzIHBhZ2VzIHRoYXQgbGVhZCB0byB1c2VycyB0byB0aGUgY2hpbGQgcGFnZVxuICBsaW5rcz86IElMaW5rQ29tcG9uZW50Q29uZmlnW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lyY2MtY2wtbGliLWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgY29uZmlnOiBJQnJlYWRjcnVtYkNvbmZpZyA9IHtcbiAgICBpZDogJycsXG4gICAgYmFzZVVybEtleTogJycsXG4gICAgdHlwZTogJ2hyZWYnXG4gIH07XG5cbiAgQElucHV0KCkgaWQ/ID0gJyc7XG4gIEBJbnB1dCgpIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNTaXplcztcbiAgQElucHV0KCkgdHlwZT86IGtleW9mIHR5cGVvZiBMaW5rVHlwZTtcbiAgLy8gVHJhbnNsYXRpb24ga2V5IG9mIGJhc2UgdXJsIHNlZ21lbnRcbiAgQElucHV0KCkgYmFzZVVybEtleT86IHN0cmluZztcblxuXG4gIGJhc2VVcmwgPSAnJztcbiAgc2VwYXJhdG9ySWNvbjogSUljb25CdXR0b25Db21wb25lbnRDb25maWcgPSB7XG4gICAgaWQ6ICdicmVhZGNydW1iX3NlcGFyYXRvcicsXG4gICAgY2F0ZWdvcnk6ICdjdXN0b20nLFxuICAgIHNpemU6IHRoaXMuY29uZmlnPy5zaXplLFxuICAgIGljb246IHtcbiAgICAgIGNsYXNzOiAnZmEtbGlnaHQgZmEtZWxsaXBzaXMnLFxuICAgICAgY29sb3I6ICd2YXIoLS10ZXh0LXByaW1hcnkpJ1xuICAgIH0sXG4gICAgYXJpYUxhYmVsOiAnJ1xuICB9O1xuICBvdmVyZmxvd0xpbmtzPzogSUxpbmtDb21wb25lbnRDb25maWdbXTtcbiAgbm9ybWFsTGlua3M/OiBJTGlua0NvbXBvbmVudENvbmZpZ1tdOyAvLyBMaW5rcyB0aGF0IGFyZSBub3Qgb3ZlcmZsb3dcbiAgZGlzcGxheU92ZXJmbG93ID0gZmFsc2U7XG4gIHByaXZhdGUgbWF4SGVpZ2h0OiBudW1iZXIgPSAwOyAvLyBNYXggaGVpZ2h0IG9mIGVsZW1lbnQgaW4gcHhcbiAgQFZpZXdDaGlsZCgnYnJlYWRjcnVtYl9kaXYnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgZGl2UmVmPzogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2JyZWFkY3J1bWJfY2hpbGQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgY2hpbGRSZWY/OiBFbGVtZW50UmVmPEhUTUxQYXJhZ3JhcGhFbGVtZW50PjtcbiAgaXNDaGlsZE92ZXJmbG93OiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhbmRhbG9uZTogU3RhbmRBbG9uZUZ1bmN0aW9ucyxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL3NldCBjb25maWcgZnJvbSBpbmRpdmlkdWFsIG9wdGlvbnMsIGlmIHByZXNlbnRcbiAgICBpZih0aGlzLmlkICYmIHRoaXMuaWQgIT09ICcnKSB0aGlzLmNvbmZpZy5pZCA9IHRoaXMuaWQ7XG4gICAgaWYodGhpcy5zaXplKSB0aGlzLmNvbmZpZy5zaXplID0gdGhpcy5zaXplO1xuICAgIGlmKHRoaXMudHlwZSkgdGhpcy5jb25maWcudHlwZSA9IHRoaXMudHlwZTtcbiAgICBpZih0aGlzLmJhc2VVcmxLZXkpIHRoaXMuY29uZmlnLmJhc2VVcmxLZXkgPSB0aGlzLmJhc2VVcmxLZXlcblxuICAgIHRoaXMuY3JlYXRlTGlua3MoKTtcbiAgICB0aGlzLnNlcGFyYXRvckljb24uc2l6ZSA9IHRoaXMuY29uZmlnLnNpemU7XG4gICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLmdldE1heEhlaWdodCgpO1xuICAgIHRoaXMuc2VwYXJhdG9ySWNvbi5hcmlhTGFiZWwgPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgJ0FDQ19ERU1PLkJSRUFEQ1JVTUJfQ09NUE9ORU5ULkFERElUSU9OQUxfTElOS1MnXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlT3ZlcmZsb3dzKCk7XG4gICAgICB0aGlzLmlzQ2hpbGRPdmVyZmxvdyA9IHRoaXMuZ2V0Q2hpbGRPdmVyZmxvdygpO1xuICAgICAgdGhpcy5jaGFuZ2VSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy8gSWYgY2hhbmdpbmcgc2l6ZSwgdXBkYXRlIG1heCBoZWlnaHRcbiAgICBpZiAoXG4gICAgICAhY2hhbmdlc1snY29uZmlnJ10uZmlyc3RDaGFuZ2UgJiZcbiAgICAgIGNoYW5nZXNbJ2NvbmZpZyddLmN1cnJlbnRWYWx1ZS5zaXplICE9PVxuICAgICAgICBjaGFuZ2VzWydjb25maWcnXS5wcmV2aW91c1ZhbHVlLnNpemVcbiAgICApIHtcbiAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy5nZXRNYXhIZWlnaHQoKTtcbiAgICB9XG4gICAgLy8gSWYgY2hhbmdpbmcgbGluayB0eXBlLCByZWNyZWF0ZSBhbGwgbGlua3NcbiAgICBpZiAoXG4gICAgICAhY2hhbmdlc1snY29uZmlnJ10uZmlyc3RDaGFuZ2UgJiZcbiAgICAgIGNoYW5nZXNbJ2NvbmZpZyddLmN1cnJlbnRWYWx1ZS50eXBlICE9PVxuICAgICAgICBjaGFuZ2VzWydjb25maWcnXS5wcmV2aW91c1ZhbHVlLnR5cGVcbiAgICApIHtcbiAgICAgIHRoaXMuY3JlYXRlTGlua3MoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlnPy5saW5rcyAmJiB0aGlzLmNvbmZpZz8ubGlua3MubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnR5cGUgPT0gJ3JvdXRlckxpbmsnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnPy5saW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgZGVsZXRlIGxpbmsuaHJlZjtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbmZpZz8ubGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgIGRlbGV0ZSBsaW5rLnJvdXRlckxpbms7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlcGFyYXRvckljb24uc2l6ZSA9IHRoaXMuY29uZmlnLnNpemU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGhyZWYgb3Igcm91dGVyTGlua3NcbiAgICovXG4gIGNyZWF0ZUxpbmtzKCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuc3RhbmRhbG9uZS5nZXRCYXNlVXJsKCcnLCB0aGlzLmNvbmZpZy5iYXNlVXJsS2V5KTtcbiAgICBpZiAodGhpcy5jb25maWcubGlua3MgJiYgdGhpcy5jb25maWcubGlua3MubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHByZXY6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuY29uZmlnPy5saW5rcy5mb3JFYWNoKChsaW5rLCBpKSA9PiB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgbGlua1t0aGlzLmNvbmZpZy50eXBlXSA9IHRoaXMuYmFzZVVybDtcbiAgICAgICAgICBwcmV2ID0gbGlua1t0aGlzLmNvbmZpZy50eXBlXTtcbiAgICAgICAgfSBlbHNlIGlmIChsaW5rLmxpbmtLZXkpIHtcbiAgICAgICAgICBsaW5rW3RoaXMuY29uZmlnLnR5cGVdID1cbiAgICAgICAgICAgIHByZXYgKyB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KGxpbmsubGlua0tleSkgKyAnLyc7XG4gICAgICAgICAgcHJldiA9IGxpbmtbdGhpcy5jb25maWcudHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgbGluay5vdmVyZmxvdyA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMub3ZlcmZsb3dMaW5rcyA9IHRoaXMuY29uZmlnPy5saW5rcy5maWx0ZXIoKGxpbmspID0+IGxpbmsub3ZlcmZsb3cpO1xuICAgICAgdGhpcy5ub3JtYWxMaW5rcyA9IHRoaXMuY29uZmlnPy5saW5rcy5maWx0ZXIoKGxpbmspID0+ICFsaW5rLm92ZXJmbG93KTtcbiAgICB9XG4gIH1cblxuICBnZXRNYXhIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gdGhpcy5kaXZSZWYgJiYgdGhpcy5kaXZSZWYubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoY29udGFpbmVyRWxlbWVudCA9PSB1bmRlZmluZWQpIHJldHVybiAwO1xuICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCgnVGVzdCcpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGVtcEVsZW1lbnQsIHRleHQpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGVtcEVsZW1lbnQsICdicmVhZGNydW1iLWNoaWxkJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChjb250YWluZXJFbGVtZW50LCB0ZW1wRWxlbWVudCk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdGVtcEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyRWxlbWVudCwgdGVtcEVsZW1lbnQpO1xuICAgIC8vIENhbGN1bGF0ZSBiYXNlZCBvbiBlbGlwc2lzIGljb24gc2l6ZSB0byBwIHRhZyByYXRpb1xuICAgIHJldHVybiBtYXhIZWlnaHQgKiAxLjM3NTtcbiAgfVxuXG4gIGNyZWF0ZU92ZXJmbG93cygpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmRpdlJlZiAmJlxuICAgICAgdGhpcy5kaXZSZWY/Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDw9IHRoaXMubWF4SGVpZ2h0XG4gICAgKVxuICAgICAgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmxpbmtzICYmIHRoaXMuY29uZmlnLmxpbmtzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGxpbmtzTGVuZ3RoID0gdGhpcy5jb25maWcubGlua3MubGVuZ3RoO1xuXG4gICAgICBjb25zdCBvdmVyZmxvdyA9IHRoaXMuY29uZmlnPy5saW5rcy5maW5kKFxuICAgICAgICAobGluaywgaSkgPT4gaSA+IDAgJiYgaSA8IGxpbmtzTGVuZ3RoIC0gMSAmJiAhbGluay5vdmVyZmxvd1xuICAgICAgKTtcbiAgICAgIGlmIChvdmVyZmxvdykgb3ZlcmZsb3cub3ZlcmZsb3cgPSB0cnVlO1xuXG4gICAgICB0aGlzLm92ZXJmbG93TGlua3MgPSB0aGlzLmNvbmZpZz8ubGlua3MuZmlsdGVyKChsaW5rKSA9PiBsaW5rLm92ZXJmbG93KTtcbiAgICAgIHRoaXMubm9ybWFsTGlua3MgPSB0aGlzLmNvbmZpZz8ubGlua3MuZmlsdGVyKChsaW5rKSA9PiAhbGluay5vdmVyZmxvdyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMub3ZlcmZsb3dMaW5rcyA9IFtdO1xuICAgIHRoaXMubm9ybWFsTGlua3MgPSBbXTtcbiAgICB0aGlzLmNyZWF0ZUxpbmtzKCk7XG4gICAgdGhpcy5jcmVhdGVPdmVyZmxvd3MoKTtcbiAgICB0aGlzLmlzQ2hpbGRPdmVyZmxvdyA9IHRoaXMuZ2V0Q2hpbGRPdmVyZmxvdygpO1xuICB9XG5cbiAgZmxpcE92ZXJmbG93KGJ1dHRvbklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRpc3BsYXlPdmVyZmxvdyA9ICF0aGlzLmRpc3BsYXlPdmVyZmxvdztcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGNoaWxkIHBhZ2UgdGl0bGUgb3ZlcmZsb3dzIHRvIDJuZCBsaW5lXG4gIGdldENoaWxkT3ZlcmZsb3coKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY2hpbGRSZWYpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuY2hpbGRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA8XG4gICAgICAgIHRoaXMuY2hpbGRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cInt7IGNvbmZpZy5zaXplIH19XCJcbiAgKGRvbUNoYW5nZSk9XCJjcmVhdGVPdmVyZmxvd3MoKVwiXG4gICNicmVhZGNydW1iX2RpdlxuPlxuICA8bmctY29udGFpbmVyXG4gICAgKm5nRm9yPVwibGV0IGxpbmsgb2Ygbm9ybWFsTGlua3M7IGZpcnN0IGFzIGZpcnN0OyBsYXN0IGFzIGxhc3Q7IGluZGV4IGFzIGlcIlxuICA+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpcnN0XCI+XG4gICAgICA8aXJjYy1jbC1saWItYnJlYWRjcnVtYi1saW5rXG4gICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgIGNsYXNzPVwiYnJlYWRjcnVtYi1yb290XCJcbiAgICAgICAgW2NvbmZpZ109XCJsaW5rXCJcbiAgICAgID48L2lyY2MtY2wtbGliLWJyZWFkY3J1bWItbGluaz5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nSWY9XCJvdmVyZmxvd0xpbmtzICYmIG92ZXJmbG93TGlua3MubGVuZ3RoID4gMFwiXG4gICAgICAgIGNsYXNzPVwib3ZlcmZsb3ctY29udGFpbmVyXCJcbiAgICAgID5cbiAgICAgICAgPGlyY2MtY2wtbGliLWljb25cbiAgICAgICAgICBbY29uZmlnXT1cInsgRkFfa2V5d29yZHM6ICdmYS1saWdodCBmYS1jaGV2cm9uLXJpZ2h0JyB9XCJcbiAgICAgICAgICBpZD1cIm92ZXJmbG93XCJcbiAgICAgICAgPjwvaXJjYy1jbC1saWItaWNvbj5cbiAgICAgICAgPGlyY2MtY2wtbGliLWljb24tYnV0dG9uXG4gICAgICAgICAgKGNsaWNrRXZlbnQpPVwiZmxpcE92ZXJmbG93KCRldmVudClcIlxuICAgICAgICAgIGNsYXNzPVwiZWxpcHNpcy1pY29uXCJcbiAgICAgICAgICBbY29uZmlnXT1cInNlcGFyYXRvckljb25cIlxuICAgICAgICA+PC9pcmNjLWNsLWxpYi1pY29uLWJ1dHRvbj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwib3ZlcmZsb3ctbWVudVwiXG4gICAgICAgICAgKm5nSWY9XCJkaXNwbGF5T3ZlcmZsb3cgJiYgb3ZlcmZsb3dMaW5rcyAmJiBvdmVyZmxvd0xpbmtzLmxlbmd0aCA+IDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbGluayBvZiBvdmVyZmxvd0xpbmtzXCI+XG4gICAgICAgICAgICA8aXJjYy1jbC1saWItYnJlYWRjcnVtYi1saW5rXG4gICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnJlYWRjcnVtYi1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgIFtjb25maWddPVwibGlua1wiXG4gICAgICAgICAgICA+PC9pcmNjLWNsLWxpYi1icmVhZGNydW1iLWxpbms+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaXJzdCAmJiAhbGFzdFwiPlxuICAgICAgPGlyY2MtY2wtbGliLWljb25cbiAgICAgICAgW2NvbmZpZ109XCJ7IEZBX2tleXdvcmRzOiAnZmEtbGlnaHQgZmEtY2hldnJvbi1yaWdodCcgfVwiXG4gICAgICA+PC9pcmNjLWNsLWxpYi1pY29uPlxuICAgICAgPGlyY2MtY2wtbGliLWJyZWFkY3J1bWItbGlua1xuICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiXG4gICAgICAgIFtjb25maWddPVwibGlua1wiXG4gICAgICA+PC9pcmNjLWNsLWxpYi1icmVhZGNydW1iLWxpbms+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxhc3RcIj5cbiAgICAgIDxpcmNjLWNsLWxpYi1pY29uXG4gICAgICAgIFtjb25maWddPVwieyBGQV9rZXl3b3JkczogJ2ZhLWxpZ2h0IGZhLWNoZXZyb24tcmlnaHQnIH1cIlxuICAgICAgICBjbGFzcz1cIlwiXG4gICAgICA+PC9pcmNjLWNsLWxpYi1pY29uPlxuICAgICAgPHBcbiAgICAgICAgY2xhc3M9XCJicmVhZGNydW1iLWNoaWxkXCJcbiAgICAgICAgI2JyZWFkY3J1bWJfY2hpbGRcbiAgICAgID5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXNDaGlsZE92ZXJmbG93XCI+e3sgbGluay50ZXh0IH19PC9zcGFuPlxuICAgICAgICA8YWJiclxuICAgICAgICAgICpuZ0lmPVwiaXNDaGlsZE92ZXJmbG93XCJcbiAgICAgICAgICBbdGl0bGVdPVwibGluay50ZXh0XCJcbiAgICAgICAgICA+e3sgbGluay50ZXh0IH19PC9hYmJyXG4gICAgICAgID5cbiAgICAgIDwvcD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==