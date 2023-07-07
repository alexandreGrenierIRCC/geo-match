import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare const GOV_LOGO_FOOTER = "https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg";
export declare const GOV_LOGO_ALT_TEXT_EN = "Canada wordmark";
export declare const GOV_LOGO_ALT_TEXT_FR = "FR Canada wordmark";
export declare class FooterComponent {
    private translate;
    id: string;
    imageURL: string;
    altImage: string;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    setLang(lang: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FooterComponent, "ircc-cl-lib-footer", never, { "id": "id"; }, {}, never, ["*"], false>;
}
