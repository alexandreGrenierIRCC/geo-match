import { Input, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../navigation.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "../../icon/icon.component";
import * as i5 from "../../indicator/indicator.component";
import * as i6 from "@ngx-translate/core";
//TODO: Fix class name (NavItemNavComponent)
export class navItemNavComponent {
    constructor(renderer, navEvent, cdr) {
        this.renderer = renderer;
        this.navEvent = navEvent;
        this.cdr = cdr;
        //TODO: Pattern is supposed to be that any elements that may not be used should be OPTIONAL
        this.config = {
            id: '',
            href: '',
            anchor: '',
            external: false,
            border: false,
            label: '',
            iconLeading: '',
            iconTrailing: '',
            type: 'link',
            children: [],
            header: false
        };
        this.id = '';
        this.indicatorConfig = {
            category: 'weak',
            purpose: 'status',
            type: 'dot',
            tabIndex: -1
        };
        this.headerConfig = {
            iconLeading: '',
            id: 'header_link',
            label: 'Header Title',
            type: 'heading',
            children: []
        };
        this.navObjectChangeSub = new Subscription();
    }
    ngOnInit() {
        //Used entirely as a workaround for the change detection limitations
        this.navObjectChangeSub = this.navEvent.itemChangeObs$
            .pipe(filter((item) => item === this.config.id))
            .subscribe(() => {
            this.indicatorConfig.status = this.config.indicator?.status;
            this.indicatorConfig.icon = this.config.indicator?.icon;
        });
        this.id !== '' ? (this.config.id = this.id) : undefined;
        if (this.config.indicator) {
            this.indicatorConfig = {
                type: 'dot',
                category: 'weak',
                purpose: 'status',
                status: this.config.indicator.status,
                icon: this.config.indicator.icon,
                tabIndex: -1
            };
            this.config.indicator.label
                ? (this.indicatorConfig = {
                    ...this.indicatorConfig,
                    type: 'text',
                    label: this.config.indicator.label,
                    tabIndex: -1
                })
                : null;
            this.size
                ? (this.indicatorConfig = { ...this.indicatorConfig, size: this.size })
                : null;
        }
        this.size !== undefined ? (this.config.size = this.size) : undefined;
    }
    linkClick(e) {
        this.navEvent.navEvent({ id: this.config.id, event: e }); //Broadcast the event
        if (!this.config.external) {
            setTimeout(() => {
                if (this.config?.anchor) {
                    const anchorElement = this.renderer.selectRootElement(`#${this.config.anchor}`, true);
                    anchorElement
                        ? anchorElement.scrollIntoView({ behavior: 'smooth' })
                        : null;
                }
            }, 0);
        }
    }
    enterPress(event) {
        if (this.config.external) {
            this.externalLinkA?.nativeElement.click();
        }
        else {
            this.internalLink?.nativeElement.click();
        }
    }
}
navItemNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemNavComponent, deps: [{ token: i0.Renderer2 }, { token: i1.NavigationService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
navItemNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navItemNavComponent, selector: "ircc-cl-lib-nav-item", inputs: { config: "config", id: "id", size: "size", indicator: "indicator" }, viewQueries: [{ propertyName: "externalLinkA", first: true, predicate: ["externalLinkA"], descendants: true }, { propertyName: "internalLink", first: true, predicate: ["internalLink"], descendants: true }], ngImport: i0, template: "<div\n  tabindex=\"1\"\n  [id]=\"config.id\"\n  class=\"lib-nav-item\"\n  [ngClass]=\"config?.border ? 'border-left' : null\"\n  (keydown.enter)=\"enterPress($event)\"\n>\n  <div>\n    <ng-container *ngIf=\"config?.external !== true; else externalLink\">\n      <a\n        [routerLink]=\"config?.href || '' | translate\"\n        [fragment]=\"config?.anchor\"\n        [routerLinkActive]=\"'active-link'\"\n        (click)=\"linkClick($event)\"\n        #internalLink\n      >\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconLeading\"\n          class=\"icon-left\"\n          [config]=\"{ FA_keywords: config?.iconLeading || '' }\"\n        ></ircc-cl-lib-icon>\n        <p *ngIf=\"config?.header !== true\">\n          {{ config?.label || '' | translate }}\n        </p>\n        <h2\n          *ngIf=\"config?.header === true\"\n          class=\"h5\"\n        >\n          {{ config?.label || '' | translate }}\n        </h2>\n        <!-- <ircc-cl-lib-nav-header\n          [attr.size]=\"config.size\"\n          [size]=\"config.size\"\n          [label]=\"\"\n          *ngIf=\"config?.header === true\"\n        >\n        </ircc-cl-lib-nav-header> -->\n        <ircc-cl-lib-indicator\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.indicator\"\n          [config]=\"indicatorConfig\"\n        ></ircc-cl-lib-indicator>\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconTrailing\"\n          class=\"icon-trailing\"\n          [config]=\"{ FA_keywords: config?.iconTrailing || '' }\"\n        ></ircc-cl-lib-icon>\n      </a>\n    </ng-container>\n    <ng-template #externalLink>\n      <a\n        #externalLinkA\n        target=\"_blank\"\n        [attr.href]=\"\n          config?.href + (config?.anchor ? '#' + config.anchor : '') || ''\n            | translate\n        \"\n      >\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconLeading\"\n          class=\"icon-left\"\n          [config]=\"{ FA_keywords: config?.iconLeading || '' }\"\n        ></ircc-cl-lib-icon>\n        <p>{{ config?.label || '' | translate }} {{ config.size }}</p>\n        <ircc-cl-lib-indicator\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.indicator\"\n          [config]=\"indicatorConfig\"\n        ></ircc-cl-lib-indicator>\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconTrailing\"\n          class=\"icon-trailing\"\n          [config]=\"{ FA_keywords: config?.iconTrailing || '' }\"\n        ></ircc-cl-lib-icon>\n      </a>\n    </ng-template>\n  </div>\n  <div>\n    <ng-content></ng-content>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: i4.IconComponent, selector: "ircc-cl-lib-icon", inputs: ["config", "ariaLabel", "FA_keywords", "size"] }, { kind: "component", type: i5.IndicatorComponent, selector: "ircc-cl-lib-indicator", inputs: ["config", "size", "type", "icon", "category", "purpose", "status", "palette", "ariaLabel", "tabIndex"] }, { kind: "pipe", type: i6.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-nav-item', template: "<div\n  tabindex=\"1\"\n  [id]=\"config.id\"\n  class=\"lib-nav-item\"\n  [ngClass]=\"config?.border ? 'border-left' : null\"\n  (keydown.enter)=\"enterPress($event)\"\n>\n  <div>\n    <ng-container *ngIf=\"config?.external !== true; else externalLink\">\n      <a\n        [routerLink]=\"config?.href || '' | translate\"\n        [fragment]=\"config?.anchor\"\n        [routerLinkActive]=\"'active-link'\"\n        (click)=\"linkClick($event)\"\n        #internalLink\n      >\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconLeading\"\n          class=\"icon-left\"\n          [config]=\"{ FA_keywords: config?.iconLeading || '' }\"\n        ></ircc-cl-lib-icon>\n        <p *ngIf=\"config?.header !== true\">\n          {{ config?.label || '' | translate }}\n        </p>\n        <h2\n          *ngIf=\"config?.header === true\"\n          class=\"h5\"\n        >\n          {{ config?.label || '' | translate }}\n        </h2>\n        <!-- <ircc-cl-lib-nav-header\n          [attr.size]=\"config.size\"\n          [size]=\"config.size\"\n          [label]=\"\"\n          *ngIf=\"config?.header === true\"\n        >\n        </ircc-cl-lib-nav-header> -->\n        <ircc-cl-lib-indicator\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.indicator\"\n          [config]=\"indicatorConfig\"\n        ></ircc-cl-lib-indicator>\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconTrailing\"\n          class=\"icon-trailing\"\n          [config]=\"{ FA_keywords: config?.iconTrailing || '' }\"\n        ></ircc-cl-lib-icon>\n      </a>\n    </ng-container>\n    <ng-template #externalLink>\n      <a\n        #externalLinkA\n        target=\"_blank\"\n        [attr.href]=\"\n          config?.href + (config?.anchor ? '#' + config.anchor : '') || ''\n            | translate\n        \"\n      >\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconLeading\"\n          class=\"icon-left\"\n          [config]=\"{ FA_keywords: config?.iconLeading || '' }\"\n        ></ircc-cl-lib-icon>\n        <p>{{ config?.label || '' | translate }} {{ config.size }}</p>\n        <ircc-cl-lib-indicator\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.indicator\"\n          [config]=\"indicatorConfig\"\n        ></ircc-cl-lib-indicator>\n        <ircc-cl-lib-icon\n          [attr.size]=\"config.size\"\n          tabindex=\"-1\"\n          *ngIf=\"config?.iconTrailing\"\n          class=\"icon-trailing\"\n          [config]=\"{ FA_keywords: config?.iconTrailing || '' }\"\n        ></ircc-cl-lib-icon>\n      </a>\n    </ng-template>\n  </div>\n  <div>\n    <ng-content></ng-content>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i1.NavigationService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { externalLinkA: [{
                type: ViewChild,
                args: ['externalLinkA', { static: false }]
            }], internalLink: [{
                type: ViewChild,
                args: ['internalLink', { static: false }]
            }], config: [{
                type: Input
            }], id: [{
                type: Input
            }], size: [{
                type: Input
            }], indicator: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0tbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvbmF2aWdhdGlvbi9uYXYtaXRlbS1uYXYvbmF2LWl0ZW0tbmF2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvbmF2aWdhdGlvbi9uYXYtaXRlbS1uYXYvbmF2LWl0ZW0tbmF2LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxLQUFLLEVBR0wsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7O0FBTzVDLDRDQUE0QztBQUM1QyxNQUFNLE9BQU8sbUJBQW1CO0lBNkM5QixZQUNVLFFBQW1CLEVBQ25CLFFBQTJCLEVBQzNCLEdBQXNCO1FBRnRCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF2Q2hDLDJGQUEyRjtRQUNsRixXQUFNLEdBQXdCO1lBQ3JDLEVBQUUsRUFBRSxFQUFFO1lBQ04sSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsRUFBRTtZQUNULFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQztRQUVPLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFJekIsb0JBQWUsR0FBcUI7WUFDbEMsUUFBUSxFQUFFLE1BQU07WUFDaEIsT0FBTyxFQUFFLFFBQVE7WUFDakIsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ2IsQ0FBQztRQUVGLGlCQUFZLEdBQTJCO1lBQ3JDLFdBQVcsRUFBRSxFQUFFO1lBQ2YsRUFBRSxFQUFFLGFBQWE7WUFDakIsS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLFNBQVM7WUFDZixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFFRix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXJDLENBQUM7SUFFSixRQUFRO1FBQ04sb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWM7YUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDL0MsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztZQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUc7Z0JBQ3JCLElBQUksRUFBRSxLQUFLO2dCQUNYLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJO2dCQUNoQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2IsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUc7b0JBQ3RCLEdBQUcsSUFBSSxDQUFDLGVBQWU7b0JBQ3ZCLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLO29CQUNsQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUNiLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNULElBQUksQ0FBQyxJQUFJO2dCQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkUsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdkUsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFRO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQXFCO1FBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN6QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7b0JBQ3ZCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQ25ELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFDeEIsSUFBSSxDQUNMLENBQUM7b0JBQ0YsYUFBYTt3QkFDWCxDQUFDLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzt3QkFDdEQsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDVjtZQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0M7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7aUhBNUdVLG1CQUFtQjtxR0FBbkIsbUJBQW1CLHlWQ3pCaEMsMjFGQTJGQTs0RkRsRWEsbUJBQW1CO2tCQU4vQixTQUFTOytCQUNFLHNCQUFzQjtnS0FNZSxhQUFhO3NCQUEzRCxTQUFTO3VCQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBSUMsWUFBWTtzQkFBekQsU0FBUzt1QkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUtuQyxNQUFNO3NCQUFkLEtBQUs7Z0JBY0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUmVuZGVyZXIyLFxuICBJbnB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERTU2l6ZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29uc3RhbnRzL2psLWNvbXBvbmVudHMuY29uc3RhbnRzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBJTmF2aWdhdGlvbkluZGljYXRvcixcbiAgSU5hdmlnYXRpb25JdGVtSGVhZGluZyxcbiAgSU5hdmlnYXRpb25JdGVtTGlua1xufSBmcm9tICcuLi9uYXZpZ2F0aW9uLnR5cGVzJztcbmltcG9ydCB7IElJbmRpY2F0b3JDb25maWcgfSBmcm9tICcuLi8uLi9pbmRpY2F0b3IvaW5kaWNhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGZpbHRlciB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpcmNjLWNsLWxpYi1uYXYtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtaXRlbS1uYXYuY29tcG9uZW50Lmh0bWwnXG59KVxuXG4vL1RPRE86IEZpeCBjbGFzcyBuYW1lIChOYXZJdGVtTmF2Q29tcG9uZW50KVxuZXhwb3J0IGNsYXNzIG5hdkl0ZW1OYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdleHRlcm5hbExpbmtBJywgeyBzdGF0aWM6IGZhbHNlIH0pIGV4dGVybmFsTGlua0E6XG4gICAgfCBFbGVtZW50UmVmXG4gICAgfCB1bmRlZmluZWQ7XG5cbiAgQFZpZXdDaGlsZCgnaW50ZXJuYWxMaW5rJywgeyBzdGF0aWM6IGZhbHNlIH0pIGludGVybmFsTGluazpcbiAgICB8IEVsZW1lbnRSZWZcbiAgICB8IHVuZGVmaW5lZDtcblxuICAvL1RPRE86IFBhdHRlcm4gaXMgc3VwcG9zZWQgdG8gYmUgdGhhdCBhbnkgZWxlbWVudHMgdGhhdCBtYXkgbm90IGJlIHVzZWQgc2hvdWxkIGJlIE9QVElPTkFMXG4gIEBJbnB1dCgpIGNvbmZpZzogSU5hdmlnYXRpb25JdGVtTGluayA9IHtcbiAgICBpZDogJycsXG4gICAgaHJlZjogJycsXG4gICAgYW5jaG9yOiAnJyxcbiAgICBleHRlcm5hbDogZmFsc2UsXG4gICAgYm9yZGVyOiBmYWxzZSxcbiAgICBsYWJlbDogJycsXG4gICAgaWNvbkxlYWRpbmc6ICcnLFxuICAgIGljb25UcmFpbGluZzogJycsXG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBoZWFkZXI6IGZhbHNlXG4gIH07XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG4gIEBJbnB1dCgpIGluZGljYXRvcj86IElOYXZpZ2F0aW9uSW5kaWNhdG9yO1xuXG4gIGluZGljYXRvckNvbmZpZzogSUluZGljYXRvckNvbmZpZyA9IHtcbiAgICBjYXRlZ29yeTogJ3dlYWsnLFxuICAgIHB1cnBvc2U6ICdzdGF0dXMnLFxuICAgIHR5cGU6ICdkb3QnLFxuICAgIHRhYkluZGV4OiAtMVxuICB9O1xuXG4gIGhlYWRlckNvbmZpZzogSU5hdmlnYXRpb25JdGVtSGVhZGluZyA9IHtcbiAgICBpY29uTGVhZGluZzogJycsXG4gICAgaWQ6ICdoZWFkZXJfbGluaycsXG4gICAgbGFiZWw6ICdIZWFkZXIgVGl0bGUnLFxuICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICBjaGlsZHJlbjogW11cbiAgfTtcblxuICBuYXZPYmplY3RDaGFuZ2VTdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmF2RXZlbnQ6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9Vc2VkIGVudGlyZWx5IGFzIGEgd29ya2Fyb3VuZCBmb3IgdGhlIGNoYW5nZSBkZXRlY3Rpb24gbGltaXRhdGlvbnNcbiAgICB0aGlzLm5hdk9iamVjdENoYW5nZVN1YiA9IHRoaXMubmF2RXZlbnQuaXRlbUNoYW5nZU9icyRcbiAgICAgIC5waXBlKGZpbHRlcigoaXRlbSkgPT4gaXRlbSA9PT0gdGhpcy5jb25maWcuaWQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yQ29uZmlnLnN0YXR1cyA9IHRoaXMuY29uZmlnLmluZGljYXRvcj8uc3RhdHVzO1xuICAgICAgICB0aGlzLmluZGljYXRvckNvbmZpZy5pY29uID0gdGhpcy5jb25maWcuaW5kaWNhdG9yPy5pY29uO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmlkICE9PSAnJyA/ICh0aGlzLmNvbmZpZy5pZCA9IHRoaXMuaWQpIDogdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLmNvbmZpZy5pbmRpY2F0b3IpIHtcbiAgICAgIHRoaXMuaW5kaWNhdG9yQ29uZmlnID0ge1xuICAgICAgICB0eXBlOiAnZG90JyxcbiAgICAgICAgY2F0ZWdvcnk6ICd3ZWFrJyxcbiAgICAgICAgcHVycG9zZTogJ3N0YXR1cycsXG4gICAgICAgIHN0YXR1czogdGhpcy5jb25maWcuaW5kaWNhdG9yLnN0YXR1cyxcbiAgICAgICAgaWNvbjogdGhpcy5jb25maWcuaW5kaWNhdG9yLmljb24sXG4gICAgICAgIHRhYkluZGV4OiAtMVxuICAgICAgfTtcbiAgICAgIHRoaXMuY29uZmlnLmluZGljYXRvci5sYWJlbFxuICAgICAgICA/ICh0aGlzLmluZGljYXRvckNvbmZpZyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW5kaWNhdG9yQ29uZmlnLFxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLmluZGljYXRvci5sYWJlbCxcbiAgICAgICAgICAgIHRhYkluZGV4OiAtMVxuICAgICAgICAgIH0pXG4gICAgICAgIDogbnVsbDtcbiAgICAgIHRoaXMuc2l6ZVxuICAgICAgICA/ICh0aGlzLmluZGljYXRvckNvbmZpZyA9IHsgLi4udGhpcy5pbmRpY2F0b3JDb25maWcsIHNpemU6IHRoaXMuc2l6ZSB9KVxuICAgICAgICA6IG51bGw7XG4gICAgfVxuICAgIHRoaXMuc2l6ZSAhPT0gdW5kZWZpbmVkID8gKHRoaXMuY29uZmlnLnNpemUgPSB0aGlzLnNpemUpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgbGlua0NsaWNrKGU6IEV2ZW50KSB7XG4gICAgdGhpcy5uYXZFdmVudC5uYXZFdmVudCh7IGlkOiB0aGlzLmNvbmZpZy5pZCwgZXZlbnQ6IGUgfSk7IC8vQnJvYWRjYXN0IHRoZSBldmVudFxuICAgIGlmICghdGhpcy5jb25maWcuZXh0ZXJuYWwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb25maWc/LmFuY2hvcikge1xuICAgICAgICAgIGNvbnN0IGFuY2hvckVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KFxuICAgICAgICAgICAgYCMke3RoaXMuY29uZmlnLmFuY2hvcn1gLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgYW5jaG9yRWxlbWVudFxuICAgICAgICAgICAgPyBhbmNob3JFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIGVudGVyUHJlc3MoZXZlbnQ6IGFueSkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5leHRlcm5hbCkge1xuICAgICAgdGhpcy5leHRlcm5hbExpbmtBPy5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxMaW5rPy5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2XG4gIHRhYmluZGV4PVwiMVwiXG4gIFtpZF09XCJjb25maWcuaWRcIlxuICBjbGFzcz1cImxpYi1uYXYtaXRlbVwiXG4gIFtuZ0NsYXNzXT1cImNvbmZpZz8uYm9yZGVyID8gJ2JvcmRlci1sZWZ0JyA6IG51bGxcIlxuICAoa2V5ZG93bi5lbnRlcik9XCJlbnRlclByZXNzKCRldmVudClcIlxuPlxuICA8ZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWc/LmV4dGVybmFsICE9PSB0cnVlOyBlbHNlIGV4dGVybmFsTGlua1wiPlxuICAgICAgPGFcbiAgICAgICAgW3JvdXRlckxpbmtdPVwiY29uZmlnPy5ocmVmIHx8ICcnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgW2ZyYWdtZW50XT1cImNvbmZpZz8uYW5jaG9yXCJcbiAgICAgICAgW3JvdXRlckxpbmtBY3RpdmVdPVwiJ2FjdGl2ZS1saW5rJ1wiXG4gICAgICAgIChjbGljayk9XCJsaW5rQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICNpbnRlcm5hbExpbmtcbiAgICAgID5cbiAgICAgICAgPGlyY2MtY2wtbGliLWljb25cbiAgICAgICAgICBbYXR0ci5zaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAqbmdJZj1cImNvbmZpZz8uaWNvbkxlYWRpbmdcIlxuICAgICAgICAgIGNsYXNzPVwiaWNvbi1sZWZ0XCJcbiAgICAgICAgICBbY29uZmlnXT1cInsgRkFfa2V5d29yZHM6IGNvbmZpZz8uaWNvbkxlYWRpbmcgfHwgJycgfVwiXG4gICAgICAgID48L2lyY2MtY2wtbGliLWljb24+XG4gICAgICAgIDxwICpuZ0lmPVwiY29uZmlnPy5oZWFkZXIgIT09IHRydWVcIj5cbiAgICAgICAgICB7eyBjb25maWc/LmxhYmVsIHx8ICcnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgyXG4gICAgICAgICAgKm5nSWY9XCJjb25maWc/LmhlYWRlciA9PT0gdHJ1ZVwiXG4gICAgICAgICAgY2xhc3M9XCJoNVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBjb25maWc/LmxhYmVsIHx8ICcnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDwhLS0gPGlyY2MtY2wtbGliLW5hdi1oZWFkZXJcbiAgICAgICAgICBbYXR0ci5zaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgICBbc2l6ZV09XCJjb25maWcuc2l6ZVwiXG4gICAgICAgICAgW2xhYmVsXT1cIlwiXG4gICAgICAgICAgKm5nSWY9XCJjb25maWc/LmhlYWRlciA9PT0gdHJ1ZVwiXG4gICAgICAgID5cbiAgICAgICAgPC9pcmNjLWNsLWxpYi1uYXYtaGVhZGVyPiAtLT5cbiAgICAgICAgPGlyY2MtY2wtbGliLWluZGljYXRvclxuICAgICAgICAgIFthdHRyLnNpemVdPVwiY29uZmlnLnNpemVcIlxuICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICpuZ0lmPVwiY29uZmlnPy5pbmRpY2F0b3JcIlxuICAgICAgICAgIFtjb25maWddPVwiaW5kaWNhdG9yQ29uZmlnXCJcbiAgICAgICAgPjwvaXJjYy1jbC1saWItaW5kaWNhdG9yPlxuICAgICAgICA8aXJjYy1jbC1saWItaWNvblxuICAgICAgICAgIFthdHRyLnNpemVdPVwiY29uZmlnLnNpemVcIlxuICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICpuZ0lmPVwiY29uZmlnPy5pY29uVHJhaWxpbmdcIlxuICAgICAgICAgIGNsYXNzPVwiaWNvbi10cmFpbGluZ1wiXG4gICAgICAgICAgW2NvbmZpZ109XCJ7IEZBX2tleXdvcmRzOiBjb25maWc/Lmljb25UcmFpbGluZyB8fCAnJyB9XCJcbiAgICAgICAgPjwvaXJjYy1jbC1saWItaWNvbj5cbiAgICAgIDwvYT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2V4dGVybmFsTGluaz5cbiAgICAgIDxhXG4gICAgICAgICNleHRlcm5hbExpbmtBXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIFthdHRyLmhyZWZdPVwiXG4gICAgICAgICAgY29uZmlnPy5ocmVmICsgKGNvbmZpZz8uYW5jaG9yID8gJyMnICsgY29uZmlnLmFuY2hvciA6ICcnKSB8fCAnJ1xuICAgICAgICAgICAgfCB0cmFuc2xhdGVcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPGlyY2MtY2wtbGliLWljb25cbiAgICAgICAgICBbYXR0ci5zaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAqbmdJZj1cImNvbmZpZz8uaWNvbkxlYWRpbmdcIlxuICAgICAgICAgIGNsYXNzPVwiaWNvbi1sZWZ0XCJcbiAgICAgICAgICBbY29uZmlnXT1cInsgRkFfa2V5d29yZHM6IGNvbmZpZz8uaWNvbkxlYWRpbmcgfHwgJycgfVwiXG4gICAgICAgID48L2lyY2MtY2wtbGliLWljb24+XG4gICAgICAgIDxwPnt7IGNvbmZpZz8ubGFiZWwgfHwgJycgfCB0cmFuc2xhdGUgfX0ge3sgY29uZmlnLnNpemUgfX08L3A+XG4gICAgICAgIDxpcmNjLWNsLWxpYi1pbmRpY2F0b3JcbiAgICAgICAgICBbYXR0ci5zaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAqbmdJZj1cImNvbmZpZz8uaW5kaWNhdG9yXCJcbiAgICAgICAgICBbY29uZmlnXT1cImluZGljYXRvckNvbmZpZ1wiXG4gICAgICAgID48L2lyY2MtY2wtbGliLWluZGljYXRvcj5cbiAgICAgICAgPGlyY2MtY2wtbGliLWljb25cbiAgICAgICAgICBbYXR0ci5zaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAqbmdJZj1cImNvbmZpZz8uaWNvblRyYWlsaW5nXCJcbiAgICAgICAgICBjbGFzcz1cImljb24tdHJhaWxpbmdcIlxuICAgICAgICAgIFtjb25maWddPVwieyBGQV9rZXl3b3JkczogY29uZmlnPy5pY29uVHJhaWxpbmcgfHwgJycgfVwiXG4gICAgICAgID48L2lyY2MtY2wtbGliLWljb24+XG4gICAgICA8L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19