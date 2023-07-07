import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, PLATFORM_ID } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./language-switch-button.service";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/router";
export const LANGUAGE_SWITCH_TEXT_ENGLISH = 'Français';
export const LANGUAGE_SWITCH_TEXT_ENGLISH_MOBILE = 'FR';
export const LANGUAGE_SWITCH_TEXT_FRENCH = 'English';
export const LANGUAGE_SWITCH_TEXT_FRENCH_MOBILE = 'EN';
export class LanguageSwitchComponent {
    constructor(platformId, langToggle, translate, router, titleService) {
        this.platformId = platformId;
        this.langToggle = langToggle;
        this.translate = translate;
        this.router = router;
        this.titleService = titleService;
        this.id = '';
        this.isMobile = false;
        this.text = '';
        this.aria = '';
        this.isMobile = window.innerWidth <= 360; //phone breakpoint
    }
    /** Listens for screen resizes and sets mobile boolean */
    handleResize(e) {
        if (isPlatformBrowser(this.platformId)) {
            this.isMobile = window.innerWidth <= 360; //tablet breakpoint
            this.setText(this.translate.currentLang);
        }
    }
    ngOnInit() {
        let lang = this.translate.currentLang;
        this.setText(lang);
        this.translate.onLangChange.subscribe((newLang) => {
            console.log(newLang.lang, 'switch');
            this.setText(newLang.lang);
        });
    }
    switch() {
        this.langToggle.languageToggleClick();
        this.titleService.updateTitle(this.router.routerState.snapshot);
    }
    setText(lang) {
        if (lang === 'en' || lang === 'en-US') {
            this.isMobile
                ? (this.text = LANGUAGE_SWITCH_TEXT_ENGLISH_MOBILE)
                : (this.text = LANGUAGE_SWITCH_TEXT_ENGLISH);
        }
        else {
            this.isMobile
                ? (this.text = LANGUAGE_SWITCH_TEXT_FRENCH_MOBILE)
                : (this.text = LANGUAGE_SWITCH_TEXT_FRENCH);
        }
    }
}
LanguageSwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LanguageSwitchComponent, deps: [{ token: PLATFORM_ID }, { token: i1.LanguageSwitchButtonService }, { token: i2.TranslateService }, { token: i3.Router }, { token: i3.TitleStrategy }], target: i0.ɵɵFactoryTarget.Component });
LanguageSwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: LanguageSwitchComponent, selector: "ircc-cl-lib-language-switch", inputs: { id: "id" }, host: { listeners: { "window:resize": "handleResize($event)" } }, ngImport: i0, template: "<button\n  category=\"link\"\n  role=\"link\"\n  [id]=\"id\"\n  (click)=\"switch()\"\n  id=\"language-toggle\"\n>\n  {{ text }}\n</button>\n", preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LanguageSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-language-switch', template: "<button\n  category=\"link\"\n  role=\"link\"\n  [id]=\"id\"\n  (click)=\"switch()\"\n  id=\"language-toggle\"\n>\n  {{ text }}\n</button>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i1.LanguageSwitchButtonService }, { type: i2.TranslateService }, { type: i3.Router }, { type: i3.TitleStrategy }]; }, propDecorators: { id: [{
                type: Input
            }], handleResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9oZWFkZXItZm9vdGVyL2xhbmd1YWdlLXN3aXRjaC9sYW5ndWFnZS1zd2l0Y2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2hlYWRlci1mb290ZXIvbGFuZ3VhZ2Utc3dpdGNoL2xhbmd1YWdlLXN3aXRjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFLdkIsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQUcsVUFBVSxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxNQUFNLG1DQUFtQyxHQUFHLElBQUksQ0FBQztBQUV4RCxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRyxTQUFTLENBQUM7QUFDckQsTUFBTSxDQUFDLE1BQU0sa0NBQWtDLEdBQUcsSUFBSSxDQUFDO0FBTXZELE1BQU0sT0FBTyx1QkFBdUI7SUFRbEMsWUFDK0IsVUFBa0IsRUFDdkMsVUFBdUMsRUFDdkMsU0FBMkIsRUFDM0IsTUFBYyxFQUNkLFlBQTJCO1FBSk4sZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxlQUFVLEdBQVYsVUFBVSxDQUE2QjtRQUN2QyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWU7UUFaNUIsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUVqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBVVIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQjtJQUM5RCxDQUFDO0lBRUQseURBQXlEO0lBRXpELFlBQVksQ0FBQyxDQUFNO1FBQ2pCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQyxtQkFBbUI7WUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUTtnQkFDWCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLG1DQUFtQyxDQUFDO2dCQUNuRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLDRCQUE0QixDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRO2dCQUNYLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsa0NBQWtDLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsMkJBQTJCLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7O3FIQXBEVSx1QkFBdUIsa0JBU3hCLFdBQVc7eUdBVFYsdUJBQXVCLDJKQ3ZCcEMsOElBU0E7NEZEY2EsdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNFLDZCQUE2Qjs7MEJBWXBDLE1BQU07MkJBQUMsV0FBVztzS0FSWixFQUFFO3NCQUFWLEtBQUs7Z0JBb0JOLFlBQVk7c0JBRFgsWUFBWTt1QkFBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBQTEFURk9STV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgVGl0bGVTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVN3aXRjaEJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL2xhbmd1YWdlLXN3aXRjaC1idXR0b24uc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBMQU5HVUFHRV9TV0lUQ0hfVEVYVF9FTkdMSVNIID0gJ0ZyYW7Dp2Fpcyc7XG5leHBvcnQgY29uc3QgTEFOR1VBR0VfU1dJVENIX1RFWFRfRU5HTElTSF9NT0JJTEUgPSAnRlInO1xuXG5leHBvcnQgY29uc3QgTEFOR1VBR0VfU1dJVENIX1RFWFRfRlJFTkNIID0gJ0VuZ2xpc2gnO1xuZXhwb3J0IGNvbnN0IExBTkdVQUdFX1NXSVRDSF9URVhUX0ZSRU5DSF9NT0JJTEUgPSAnRU4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpcmNjLWNsLWxpYi1sYW5ndWFnZS1zd2l0Y2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkID0gJyc7XG5cbiAgaXNNb2JpbGUgPSBmYWxzZTtcblxuICB0ZXh0ID0gJyc7XG4gIGFyaWEgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IG9iamVjdCxcbiAgICBwcml2YXRlIGxhbmdUb2dnbGU6IExhbmd1YWdlU3dpdGNoQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZVN0cmF0ZWd5XG5cbiAgKSB7XG4gICAgdGhpcy5pc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDM2MDsgLy9waG9uZSBicmVha3BvaW50XG4gIH1cblxuICAvKiogTGlzdGVucyBmb3Igc2NyZWVuIHJlc2l6ZXMgYW5kIHNldHMgbW9iaWxlIGJvb2xlYW4gKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIGhhbmRsZVJlc2l6ZShlOiBhbnkpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5pc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDM2MDsgLy90YWJsZXQgYnJlYWtwb2ludFxuICAgICAgdGhpcy5zZXRUZXh0KHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgbGFuZyA9IHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nO1xuICAgIHRoaXMuc2V0VGV4dChsYW5nKTtcbiAgICB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChuZXdMYW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhuZXdMYW5nLmxhbmcsICdzd2l0Y2gnKTtcbiAgICAgIHRoaXMuc2V0VGV4dChuZXdMYW5nLmxhbmcpO1xuICAgIH0pO1xuICB9XG5cbiAgc3dpdGNoKCkge1xuICAgIHRoaXMubGFuZ1RvZ2dsZS5sYW5ndWFnZVRvZ2dsZUNsaWNrKCk7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UudXBkYXRlVGl0bGUodGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QpO1xuICB9XG5cbiAgc2V0VGV4dChsYW5nOiBzdHJpbmcpIHtcbiAgICBpZiAobGFuZyA9PT0gJ2VuJyB8fCBsYW5nID09PSAnZW4tVVMnKSB7XG4gICAgICB0aGlzLmlzTW9iaWxlXG4gICAgICAgID8gKHRoaXMudGV4dCA9IExBTkdVQUdFX1NXSVRDSF9URVhUX0VOR0xJU0hfTU9CSUxFKVxuICAgICAgICA6ICh0aGlzLnRleHQgPSBMQU5HVUFHRV9TV0lUQ0hfVEVYVF9FTkdMSVNIKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc01vYmlsZVxuICAgICAgICA/ICh0aGlzLnRleHQgPSBMQU5HVUFHRV9TV0lUQ0hfVEVYVF9GUkVOQ0hfTU9CSUxFKVxuICAgICAgICA6ICh0aGlzLnRleHQgPSBMQU5HVUFHRV9TV0lUQ0hfVEVYVF9GUkVOQ0gpO1xuICAgIH1cbiAgfVxufVxuIiwiPGJ1dHRvblxuICBjYXRlZ29yeT1cImxpbmtcIlxuICByb2xlPVwibGlua1wiXG4gIFtpZF09XCJpZFwiXG4gIChjbGljayk9XCJzd2l0Y2goKVwiXG4gIGlkPVwibGFuZ3VhZ2UtdG9nZ2xlXCJcbj5cbiAge3sgdGV4dCB9fVxuPC9idXR0b24+XG4iXX0=