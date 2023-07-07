import { DSSizes } from '../../../../shared/constants/jl-components.constants';
import { OnInit } from '@angular/core';
import { INavigationItemAccordion } from '../navigation.types';
import { IIconButtonComponentConfig } from '../../icon-button/icon-button.component';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';
import * as i0 from "@angular/core";
export declare class navItemAccordionComponent implements OnInit {
    private navEvent;
    config: INavigationItemAccordion;
    id: string;
    open: boolean | undefined;
    label: string;
    size: keyof typeof DSSizes | undefined;
    iconLeading: string;
    headerID: string;
    buttonIconOpen: IIconButtonComponentConfig;
    buttonIconClose: IIconButtonComponentConfig;
    navObjectChangeSub: Subscription;
    constructor(navEvent: NavigationService);
    ngOnInit(): void;
    openAccordion(event: any): void;
    enterPress(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<navItemAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<navItemAccordionComponent, "ircc-cl-lib-nav-accordion", never, { "config": "config"; "id": "id"; "open": "open"; "label": "label"; "size": "size"; "iconLeading": "iconLeading"; }, {}, never, ["*"], false>;
}
