import { OnInit, OnChanges, SimpleChanges, ElementRef, AfterViewInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { ILinkComponentConfig } from './link/link.component';
import { TranslateService } from '@ngx-translate/core';
import { StandAloneFunctions } from '../../../shared/functions/stand-alone.functions';
import { IIconButtonComponentConfig } from '../icon-button/icon-button.component';
import * as i0 from "@angular/core";
export declare enum LinkType {
    href = "href",
    routerLink = "routerLink"
}
export interface IBreadcrumbConfig {
    id: string;
    size?: keyof typeof DSSizes;
    type: keyof typeof LinkType;
    baseUrlKey: string;
    links?: ILinkComponentConfig[];
}
export declare class BreadcrumbComponent implements OnInit, OnChanges, AfterViewInit {
    private translate;
    private standalone;
    private renderer;
    private changeRef;
    config: IBreadcrumbConfig;
    id?: string | undefined;
    size?: keyof typeof DSSizes;
    type?: keyof typeof LinkType;
    baseUrlKey?: string;
    baseUrl: string;
    separatorIcon: IIconButtonComponentConfig;
    overflowLinks?: ILinkComponentConfig[];
    normalLinks?: ILinkComponentConfig[];
    displayOverflow: boolean;
    private maxHeight;
    divRef?: ElementRef<HTMLDivElement>;
    childRef?: ElementRef<HTMLParagraphElement>;
    isChildOverflow: boolean;
    constructor(translate: TranslateService, standalone: StandAloneFunctions, renderer: Renderer2, changeRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Create href or routerLinks
     */
    createLinks(): void;
    getMaxHeight(): number;
    createOverflows(): void;
    onResize(event: Event): void;
    flipOverflow(buttonId: string): void;
    getChildOverflow(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "ircc-cl-lib-breadcrumb", never, { "config": "config"; "id": "id"; "size": "size"; "type": "type"; "baseUrlKey": "baseUrlKey"; }, {}, never, never, false>;
}
