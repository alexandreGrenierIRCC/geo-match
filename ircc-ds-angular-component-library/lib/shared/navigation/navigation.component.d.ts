import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { INavigationItem, INavigationConfig } from './navigation.types';
import { Subscription } from 'rxjs';
import { NavigationService } from './navigation.service';
import * as i0 from "@angular/core";
export declare class navigationComponent implements OnInit, AfterViewInit {
    private navService;
    private renderer;
    navigationHeader: ElementRef | undefined;
    navigationContentTop: ElementRef | undefined;
    navigationContentBottom: ElementRef | undefined;
    navigationArea: ElementRef | undefined;
    navigationAreaScroll: ElementRef | undefined;
    navigation: ElementRef | undefined;
    id: string;
    label: string;
    iconLeading: string;
    iconTrailing: string;
    size: keyof typeof DSSizes | undefined;
    navigationConfig: Array<INavigationItem>;
    flattenNavigation: Array<INavigationItem>;
    config: INavigationConfig;
    configSub?: Subscription;
    scrollTimeout: any;
    listenerScroll: () => void;
    listenerResize: () => void;
    constructor(navService: NavigationService, renderer: Renderer2);
    ngOnInit(): void;
    isArray: (obj: any) => boolean;
    arrayOfObject: (obj: any) => string[];
    getIconsStatus: () => boolean;
    clickIconLeading: (event: any) => void;
    clickIconTrailing: (event: any) => void;
    navigationClass: () => string;
    ngAfterViewInit(): void;
    getHeight: () => void;
    scrolling: () => void;
    setStickyNav: () => void;
    disableStickyNav: () => void;
    complicatedMaths: () => boolean;
    setScrollableNavigationArea: () => void;
    disableSetScrollableNavigationArea: () => void;
    setIndex: (index: number) => number;
    static ɵfac: i0.ɵɵFactoryDeclaration<navigationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<navigationComponent, "ircc-cl-lib-navigation", never, { "id": "id"; "label": "label"; "iconLeading": "iconLeading"; "iconTrailing": "iconTrailing"; "size": "size"; "navigationConfig": "navigationConfig"; }, {}, never, ["[navigationContentTop]", "[navigationContentBottom]"], false>;
}
