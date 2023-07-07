import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ILabelConfig, ILabelIconConfig } from '../../lib/shared/label/label.component';
import { IErrorPairs } from '../interfaces/component-configs';
import * as i0 from "@angular/core";
export interface IErrorIDs {
    id?: string;
    key: string;
    errorLOV: string;
}
export declare class StandAloneFunctions {
    private translate;
    constructor(translate: TranslateService);
    getErrorAria(formGroup: FormGroup, id: string, errorMessages: IErrorPairs[]): string;
    /**
     * When run, returns an IErrorIds object. It generates IDs based on the errorMessages object
     * and which errors are currently in effect, thereby ensuring that the first element is given
     * an id ending in _error0
     * @param formGroup
     * @param id of the parent (input) component
     * @param errorMessages: IErrorPairs[]
     * @returns errorIds: IErrorIDs[]
     */
    getErrorIds(formGroup: FormGroup, id: string, errorMessages: IErrorPairs[]): IErrorIDs[];
    /**
     * Create a label config - for use inside form input components
     * @param formGroup
     * @param id
     * @param parentID
     * @param errorMessages
     * @param label
     * @param desc
     * @param hint
     * @param required
     */
    makeLabelConfig(formGroup: FormGroup, parentID: string, errorMessages?: IErrorPairs[], label?: string, desc?: string, hint?: string, required?: boolean, iconButton?: ILabelIconConfig, topLabel?: string): ILabelConfig;
    /**
     * A function designed to deal with how AWFUL Safari is. Safari does not consider touched to be a valid state in <body>,
     * therefore this is needed to force it to acknowledge the state.
     * @param formGroup
     * @param id of the parent (input) component
     */
    wasTouched(formGroup: FormGroup, id: string): void;
    /**
     * Get the current base url.
     * @param baseUrl
     * @param baseUrlKey Translation key of base url
     */
    getBaseUrl(baseUrl?: string, baseUrlKey?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StandAloneFunctions, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StandAloneFunctions>;
}
