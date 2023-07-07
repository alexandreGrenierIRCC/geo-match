import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare const ENGLISH_BANNER_URL = "https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg";
export declare const FRENCH_BANNER_URL = "https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-fr.svg";
export declare const HEADER_IMG_LINK_EN = "https://www.canada.ca/en.html";
export declare const HEADER_IMG_LINK_FR = "https://www.canada.ca/fr.html";
export declare const CANADA_LOGO_ARIA_LABEL_ENGLISH = "Symbol of the Government of Canada";
export declare const CANADA_LOGO_ARIA_LABEL_FRENCH = "Symbole du gouvernement du Canada";
export declare class HeaderComponent {
    private translate;
    /**
     * This is the ID of the header component. Will be applied as the ID of the header Element within the custom element.
     *
     * All IDs must be unique and can be used to specifically target an element within your project.
     */
    id: string;
    themeToggle?: boolean | undefined;
    imageURL: string;
    alt: string;
    govCanadaLink: string;
    constructor(translate: TranslateService);
    /**
    * ngOnInit() lifecycle method run immediately when the component is initialized. c
    *
    * For Header Component the ngOnInit() checks for current url Language and subscribes to changes. Appropriate translations
    * will be pulled as a result and content will be displayed in the users selected language.
    */
    ngOnInit(): void;
    /**
    * setLang(lang: string) if a function which accepts a string value.
    * This value currently needs to be 'en' or 'en-US' to trigger English translations otherwise
    * french translations will be triggered.
    */
    setLang(lang: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "ircc-cl-lib-header", never, { "id": "id"; "themeToggle": "themeToggle"; }, {}, never, never, false>;
}
