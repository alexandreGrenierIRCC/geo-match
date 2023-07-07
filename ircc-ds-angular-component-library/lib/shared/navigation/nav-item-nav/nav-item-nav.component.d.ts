import { Renderer2, ChangeDetectorRef, ElementRef } from '@angular/core';
import { DSSizes } from '../../../../shared/constants/jl-components.constants';
import { OnInit } from '@angular/core';
import { INavigationIndicator, INavigationItemHeading, INavigationItemLink } from '../navigation.types';
import { IIndicatorConfig } from '../../indicator/indicator.component';
import { NavigationService } from '../navigation.service';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class navItemNavComponent implements OnInit {
    private renderer;
    private navEvent;
    private cdr;
    externalLinkA: ElementRef | undefined;
    internalLink: ElementRef | undefined;
    config: INavigationItemLink;
    id: string;
    size?: keyof typeof DSSizes;
    indicator?: INavigationIndicator;
    indicatorConfig: IIndicatorConfig;
    headerConfig: INavigationItemHeading;
    navObjectChangeSub: Subscription;
    constructor(renderer: Renderer2, navEvent: NavigationService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    linkClick(e: Event): void;
    enterPress(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<navItemNavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<navItemNavComponent, "ircc-cl-lib-nav-item", never, { "config": "config"; "id": "id"; "size": "size"; "indicator": "indicator"; }, {}, never, ["*"], false>;
}
