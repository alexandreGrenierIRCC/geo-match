import { OnInit } from '@angular/core';
import { DSSizes } from '../../../../shared/constants/jl-components.constants';
import { INavigationItem, INavigationItemHeading } from '../navigation.types';
import { IIconButtonComponentConfig } from '../../icon-button/icon-button.component';
import { NavigationService } from '../navigation.service';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class navItemHeadingComponent implements OnInit {
    private navEvent;
    config: INavigationItemHeading;
    id: string;
    label: string;
    iconLeading: string;
    children: Array<INavigationItem> | undefined;
    size: keyof typeof DSSizes | undefined;
    buttonIcon: IIconButtonComponentConfig;
    navObjectChangeSub: Subscription;
    constructor(navEvent: NavigationService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<navItemHeadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<navItemHeadingComponent, "ircc-cl-lib-nav-header", never, { "config": "config"; "id": "id"; "label": "label"; "iconLeading": "iconLeading"; "children": "children"; "size": "size"; }, {}, never, ["*"], false>;
}
