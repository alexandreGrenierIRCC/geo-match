import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export const GOV_LOGO_FOOTER = 'https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg';
export const GOV_LOGO_ALT_TEXT_EN = 'Canada wordmark';
export const GOV_LOGO_ALT_TEXT_FR = 'FR Canada wordmark';
export class FooterComponent {
    constructor(translate) {
        this.translate = translate;
        this.id = '';
        this.imageURL = '';
        this.altImage = '';
    }
    ngOnInit() {
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
    }
    setLang(lang) {
        if (lang === 'en' || lang === 'en-US') {
            this.imageURL = GOV_LOGO_FOOTER;
            this.altImage = GOV_LOGO_ALT_TEXT_EN;
        }
        else {
            this.imageURL = GOV_LOGO_FOOTER;
            this.altImage = GOV_LOGO_ALT_TEXT_FR;
        }
    }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FooterComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: FooterComponent, selector: "ircc-cl-lib-footer", inputs: { id: "id" }, ngImport: i0, template: "<footer\n  class=\"ircc-cl-lib-footer footing\"\n  role=\"contentinfo\"\n>\n  <div\n    class=\"grid-container\"\n    [id]=\"id\"\n  >\n    <div class=\"item1 body3\">\n      <ng-content></ng-content>\n    </div>\n    <picture class=\"item2\">\n      <img\n        src=\"{{ imageURL }}\"\n        alt=\"{{ altImage }}\"\n      />\n    </picture>\n  </div>\n</footer>\n", preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-footer', template: "<footer\n  class=\"ircc-cl-lib-footer footing\"\n  role=\"contentinfo\"\n>\n  <div\n    class=\"grid-container\"\n    [id]=\"id\"\n  >\n    <div class=\"item1 body3\">\n      <ng-content></ng-content>\n    </div>\n    <picture class=\"item2\">\n      <img\n        src=\"{{ imageURL }}\"\n        alt=\"{{ altImage }}\"\n      />\n    </picture>\n  </div>\n</footer>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { id: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9oZWFkZXItZm9vdGVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2hlYWRlci1mb290ZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBR2pELE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FDMUIsdUVBQXVFLENBQUM7QUFHMUUsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsaUJBQWlCLENBQUM7QUFDdEQsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7QUFNekQsTUFBTSxPQUFPLGVBQWU7SUFNMUIsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFMdEMsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUVqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVvQyxDQUFDO0lBRW5ELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztTQUN0QztJQUNILENBQUM7OzZHQXZCVSxlQUFlO2lHQUFmLGVBQWUsZ0ZDZDVCLGtYQW1CQTs0RkRMYSxlQUFlO2tCQUozQixTQUFTOytCQUNFLG9CQUFvQjt1R0FJckIsRUFBRTtzQkFBVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgR09WX0xPR09fRk9PVEVSID1cbiAgJ2h0dHBzOi8vd3d3LmNhbmFkYS5jYS9ldGMvZGVzaWducy9jYW5hZGEvd2V0LWJvZXcvYXNzZXRzL3dtbXMtYmxrLnN2Zyc7XG5cblxuZXhwb3J0IGNvbnN0IEdPVl9MT0dPX0FMVF9URVhUX0VOID0gJ0NhbmFkYSB3b3JkbWFyayc7XG5leHBvcnQgY29uc3QgR09WX0xPR09fQUxUX1RFWFRfRlIgPSAnRlIgQ2FuYWRhIHdvcmRtYXJrJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWQgPSAnJztcblxuICBpbWFnZVVSTCA9ICcnO1xuICBhbHRJbWFnZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0TGFuZyh0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyk7XG4gICAgdGhpcy50cmFuc2xhdGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoY2hhbmdlKSA9PiB7XG4gICAgICB0aGlzLnNldExhbmcoY2hhbmdlLmxhbmcpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TGFuZyhsYW5nOiBzdHJpbmcpIHtcbiAgICBpZiAobGFuZyA9PT0gJ2VuJyB8fCBsYW5nID09PSAnZW4tVVMnKSB7XG4gICAgICB0aGlzLmltYWdlVVJMID0gR09WX0xPR09fRk9PVEVSO1xuICAgICAgdGhpcy5hbHRJbWFnZSA9IEdPVl9MT0dPX0FMVF9URVhUX0VOO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlVVJMID0gR09WX0xPR09fRk9PVEVSO1xuICAgICAgdGhpcy5hbHRJbWFnZSA9IEdPVl9MT0dPX0FMVF9URVhUX0ZSO1xuICAgIH1cbiAgfVxufVxuIiwiPGZvb3RlclxuICBjbGFzcz1cImlyY2MtY2wtbGliLWZvb3RlciBmb290aW5nXCJcbiAgcm9sZT1cImNvbnRlbnRpbmZvXCJcbj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIlxuICAgIFtpZF09XCJpZFwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiaXRlbTEgYm9keTNcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8cGljdHVyZSBjbGFzcz1cIml0ZW0yXCI+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cInt7IGltYWdlVVJMIH19XCJcbiAgICAgICAgYWx0PVwie3sgYWx0SW1hZ2UgfX1cIlxuICAgICAgLz5cbiAgICA8L3BpY3R1cmU+XG4gIDwvZGl2PlxuPC9mb290ZXI+XG4iXX0=