import { OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageSwitchButtonService } from './language-switch-button.service';
import * as i0 from "@angular/core";
export declare const LANGUAGE_SWITCH_TEXT_ENGLISH = "Fran\u00E7ais";
export declare const LANGUAGE_SWITCH_TEXT_ENGLISH_MOBILE = "FR";
export declare const LANGUAGE_SWITCH_TEXT_FRENCH = "English";
export declare const LANGUAGE_SWITCH_TEXT_FRENCH_MOBILE = "EN";
export declare class LanguageSwitchComponent implements OnInit {
    private platformId;
    private langToggle;
    private translate;
    private router;
    private titleService;
    id: string;
    isMobile: boolean;
    text: string;
    aria: string;
    constructor(platformId: object, langToggle: LanguageSwitchButtonService, translate: TranslateService, router: Router, titleService: TitleStrategy);
    /** Listens for screen resizes and sets mobile boolean */
    handleResize(e: any): void;
    ngOnInit(): void;
    switch(): void;
    setText(lang: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LanguageSwitchComponent, "ircc-cl-lib-language-switch", never, { "id": "id"; }, {}, never, never, false>;
}
