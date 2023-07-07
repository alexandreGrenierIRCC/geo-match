import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/common";
import * as i3 from "../language-switch/language-switch.component";
import * as i4 from "../theme-switch/theme-switch.component";
export const ENGLISH_BANNER_URL = 'https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg';
export const FRENCH_BANNER_URL = 'https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-fr.svg';
export const HEADER_IMG_LINK_EN = 'https://www.canada.ca/en.html';
export const HEADER_IMG_LINK_FR = 'https://www.canada.ca/fr.html';
export const CANADA_LOGO_ARIA_LABEL_ENGLISH = 'Symbol of the Government of Canada';
export const CANADA_LOGO_ARIA_LABEL_FRENCH = 'Symbole du gouvernement du Canada';
export class HeaderComponent {
    constructor(translate) {
        this.translate = translate;
        /**
         * This is the ID of the header component. Will be applied as the ID of the header Element within the custom element.
         *
         * All IDs must be unique and can be used to specifically target an element within your project.
         */
        this.id = '';
        this.themeToggle = false;
        this.imageURL = '';
        this.alt = '';
        this.govCanadaLink = '';
    }
    /**
    * ngOnInit() lifecycle method run immediately when the component is initialized. c
    *
    * For Header Component the ngOnInit() checks for current url Language and subscribes to changes. Appropriate translations
    * will be pulled as a result and content will be displayed in the users selected language.
    */
    ngOnInit() {
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
    }
    /**
    * setLang(lang: string) if a function which accepts a string value.
    * This value currently needs to be 'en' or 'en-US' to trigger English translations otherwise
    * french translations will be triggered.
    */
    setLang(lang) {
        if (lang === 'en' || lang === 'en-US') {
            this.imageURL = ENGLISH_BANNER_URL;
            this.alt = CANADA_LOGO_ARIA_LABEL_ENGLISH;
            this.govCanadaLink = HEADER_IMG_LINK_EN;
        }
        else {
            this.imageURL = FRENCH_BANNER_URL;
            this.alt = CANADA_LOGO_ARIA_LABEL_FRENCH;
            this.govCanadaLink = HEADER_IMG_LINK_FR;
        }
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HeaderComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: HeaderComponent, selector: "ircc-cl-lib-header", inputs: { id: "id", themeToggle: "themeToggle" }, ngImport: i0, template: "<header\n  class=\"heading\"\n  role=\"banner\"\n  [id]=\"id\"\n>\n  <div class=\"header-content\">\n    <div class=\"image-container\">\n      <a\n        href=\"{{ govCanadaLink }}\"\n        id=\"canada-home-img-link\"\n        target=\"_blank\"\n        property=\"url\"\n        role=\"link\"\n        tabindex=\"0\"\n      >\n        <img\n          src=\"{{ imageURL }}\"\n          alt=\"{{ alt }}\"\n          property=\"logo\"\n        />\n      </a>\n    </div>\n\n    <div class=\"languageSwitch\">\n      <ircc-cl-lib-language-switch\n        [id]=\"id + '_langToggle'\"\n      ></ircc-cl-lib-language-switch>\n      <ircc-cl-lib-theme-switch *ngIf=\"themeToggle\"></ircc-cl-lib-theme-switch>\n    </div>\n  </div>\n  <hr class=\"headerLine\" />\n</header>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.LanguageSwitchComponent, selector: "ircc-cl-lib-language-switch", inputs: ["id"] }, { kind: "component", type: i4.ThemeSwitchComponent, selector: "ircc-cl-lib-theme-switch" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-header', template: "<header\n  class=\"heading\"\n  role=\"banner\"\n  [id]=\"id\"\n>\n  <div class=\"header-content\">\n    <div class=\"image-container\">\n      <a\n        href=\"{{ govCanadaLink }}\"\n        id=\"canada-home-img-link\"\n        target=\"_blank\"\n        property=\"url\"\n        role=\"link\"\n        tabindex=\"0\"\n      >\n        <img\n          src=\"{{ imageURL }}\"\n          alt=\"{{ alt }}\"\n          property=\"logo\"\n        />\n      </a>\n    </div>\n\n    <div class=\"languageSwitch\">\n      <ircc-cl-lib-language-switch\n        [id]=\"id + '_langToggle'\"\n      ></ircc-cl-lib-language-switch>\n      <ircc-cl-lib-theme-switch *ngIf=\"themeToggle\"></ircc-cl-lib-theme-switch>\n    </div>\n  </div>\n  <hr class=\"headerLine\" />\n</header>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { id: [{
                type: Input
            }], themeToggle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9oZWFkZXItZm9vdGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2hlYWRlci1mb290ZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBR2pELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUM3Qix5RUFBeUUsQ0FBQztBQUM1RSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FDNUIseUVBQXlFLENBQUM7QUFDNUUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsK0JBQStCLENBQUM7QUFDbEUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsK0JBQStCLENBQUM7QUFDbEUsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBQ3pDLG9DQUFvQyxDQUFDO0FBQ3ZDLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUN4QyxtQ0FBbUMsQ0FBQztBQU10QyxNQUFNLE9BQU8sZUFBZTtJQVkxQixZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVgvQzs7OztXQUlHO1FBQ00sT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLGdCQUFXLEdBQUksS0FBSyxDQUFDO1FBQzlCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1Qsa0JBQWEsR0FBRyxFQUFFLENBQUM7SUFFK0IsQ0FBQztJQUVuRDs7Ozs7TUFLRTtJQUNGLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyw4QkFBOEIsQ0FBQztZQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDO1NBQ3pDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsNkJBQTZCLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztTQUN6QztJQUNILENBQUM7OzZHQTFDVSxlQUFlO2lHQUFmLGVBQWUsNEdDbEI1Qixxd0JBZ0NBOzRGRGRhLGVBQWU7a0JBSjNCLFNBQVM7K0JBQ0Usb0JBQW9CO3VHQVNyQixFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuZXhwb3J0IGNvbnN0IEVOR0xJU0hfQkFOTkVSX1VSTCA9XG4gICdodHRwczovL3d3dy5jYW5hZGEuY2EvZXRjL2Rlc2lnbnMvY2FuYWRhL3dldC1ib2V3L2Fzc2V0cy9zaWctYmxrLWVuLnN2Zyc7XG5leHBvcnQgY29uc3QgRlJFTkNIX0JBTk5FUl9VUkwgPVxuICAnaHR0cHM6Ly93d3cuY2FuYWRhLmNhL2V0Yy9kZXNpZ25zL2NhbmFkYS93ZXQtYm9ldy9hc3NldHMvc2lnLWJsay1mci5zdmcnO1xuZXhwb3J0IGNvbnN0IEhFQURFUl9JTUdfTElOS19FTiA9ICdodHRwczovL3d3dy5jYW5hZGEuY2EvZW4uaHRtbCc7XG5leHBvcnQgY29uc3QgSEVBREVSX0lNR19MSU5LX0ZSID0gJ2h0dHBzOi8vd3d3LmNhbmFkYS5jYS9mci5odG1sJztcbmV4cG9ydCBjb25zdCBDQU5BREFfTE9HT19BUklBX0xBQkVMX0VOR0xJU0ggPVxuICAnU3ltYm9sIG9mIHRoZSBHb3Zlcm5tZW50IG9mIENhbmFkYSc7XG5leHBvcnQgY29uc3QgQ0FOQURBX0xPR09fQVJJQV9MQUJFTF9GUkVOQ0ggPVxuICAnU3ltYm9sZSBkdSBnb3V2ZXJuZW1lbnQgZHUgQ2FuYWRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIElEIG9mIHRoZSBoZWFkZXIgY29tcG9uZW50LiBXaWxsIGJlIGFwcGxpZWQgYXMgdGhlIElEIG9mIHRoZSBoZWFkZXIgRWxlbWVudCB3aXRoaW4gdGhlIGN1c3RvbSBlbGVtZW50LlxuICAgKlxuICAgKiBBbGwgSURzIG11c3QgYmUgdW5pcXVlIGFuZCBjYW4gYmUgdXNlZCB0byBzcGVjaWZpY2FsbHkgdGFyZ2V0IGFuIGVsZW1lbnQgd2l0aGluIHlvdXIgcHJvamVjdC5cbiAgICovXG4gIEBJbnB1dCgpIGlkID0gJyc7XG4gIEBJbnB1dCgpIHRoZW1lVG9nZ2xlPyA9IGZhbHNlO1xuICBpbWFnZVVSTCA9ICcnO1xuICBhbHQgPSAnJztcbiAgZ292Q2FuYWRhTGluayA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAqIG5nT25Jbml0KCkgbGlmZWN5Y2xlIG1ldGhvZCBydW4gaW1tZWRpYXRlbHkgd2hlbiB0aGUgY29tcG9uZW50IGlzIGluaXRpYWxpemVkLiBjXG4gICpcbiAgKiBGb3IgSGVhZGVyIENvbXBvbmVudCB0aGUgbmdPbkluaXQoKSBjaGVja3MgZm9yIGN1cnJlbnQgdXJsIExhbmd1YWdlIGFuZCBzdWJzY3JpYmVzIHRvIGNoYW5nZXMuIEFwcHJvcHJpYXRlIHRyYW5zbGF0aW9uc1xuICAqIHdpbGwgYmUgcHVsbGVkIGFzIGEgcmVzdWx0IGFuZCBjb250ZW50IHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSB1c2VycyBzZWxlY3RlZCBsYW5ndWFnZS5cbiAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRMYW5nKHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nKTtcbiAgICB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChjaGFuZ2UpID0+IHtcbiAgICAgIHRoaXMuc2V0TGFuZyhjaGFuZ2UubGFuZyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgKiBzZXRMYW5nKGxhbmc6IHN0cmluZykgaWYgYSBmdW5jdGlvbiB3aGljaCBhY2NlcHRzIGEgc3RyaW5nIHZhbHVlLlxuICAqIFRoaXMgdmFsdWUgY3VycmVudGx5IG5lZWRzIHRvIGJlICdlbicgb3IgJ2VuLVVTJyB0byB0cmlnZ2VyIEVuZ2xpc2ggdHJhbnNsYXRpb25zIG90aGVyd2lzZVxuICAqIGZyZW5jaCB0cmFuc2xhdGlvbnMgd2lsbCBiZSB0cmlnZ2VyZWQuXG4gICovXG4gIHNldExhbmcobGFuZzogc3RyaW5nKSB7XG4gICAgaWYgKGxhbmcgPT09ICdlbicgfHwgbGFuZyA9PT0gJ2VuLVVTJykge1xuICAgICAgdGhpcy5pbWFnZVVSTCA9IEVOR0xJU0hfQkFOTkVSX1VSTDtcbiAgICAgIHRoaXMuYWx0ID0gQ0FOQURBX0xPR09fQVJJQV9MQUJFTF9FTkdMSVNIO1xuICAgICAgdGhpcy5nb3ZDYW5hZGFMaW5rID0gSEVBREVSX0lNR19MSU5LX0VOO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlVVJMID0gRlJFTkNIX0JBTk5FUl9VUkw7XG4gICAgICB0aGlzLmFsdCA9IENBTkFEQV9MT0dPX0FSSUFfTEFCRUxfRlJFTkNIO1xuICAgICAgdGhpcy5nb3ZDYW5hZGFMaW5rID0gSEVBREVSX0lNR19MSU5LX0ZSO1xuICAgIH1cbiAgfVxufVxuIiwiPGhlYWRlclxuICBjbGFzcz1cImhlYWRpbmdcIlxuICByb2xlPVwiYmFubmVyXCJcbiAgW2lkXT1cImlkXCJcbj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cInt7IGdvdkNhbmFkYUxpbmsgfX1cIlxuICAgICAgICBpZD1cImNhbmFkYS1ob21lLWltZy1saW5rXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcHJvcGVydHk9XCJ1cmxcIlxuICAgICAgICByb2xlPVwibGlua1wiXG4gICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJ7eyBpbWFnZVVSTCB9fVwiXG4gICAgICAgICAgYWx0PVwie3sgYWx0IH19XCJcbiAgICAgICAgICBwcm9wZXJ0eT1cImxvZ29cIlxuICAgICAgICAvPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImxhbmd1YWdlU3dpdGNoXCI+XG4gICAgICA8aXJjYy1jbC1saWItbGFuZ3VhZ2Utc3dpdGNoXG4gICAgICAgIFtpZF09XCJpZCArICdfbGFuZ1RvZ2dsZSdcIlxuICAgICAgPjwvaXJjYy1jbC1saWItbGFuZ3VhZ2Utc3dpdGNoPlxuICAgICAgPGlyY2MtY2wtbGliLXRoZW1lLXN3aXRjaCAqbmdJZj1cInRoZW1lVG9nZ2xlXCI+PC9pcmNjLWNsLWxpYi10aGVtZS1zd2l0Y2g+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8aHIgY2xhc3M9XCJoZWFkZXJMaW5lXCIgLz5cbjwvaGVhZGVyPlxuIl19