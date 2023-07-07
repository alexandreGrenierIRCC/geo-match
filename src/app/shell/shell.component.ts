import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import { LanguageSwitchButtonService } from "ircc-ds-angular-component-library";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  title = 'ds-sdc-doc';
  mobile = false;
  navStatus = 'nav-open';
  public innerWidth: any; // Width of viewport window
  /** String for storing the URL of the page with the alternative language set */
  altLangURL: string = '';
  altPathKey: string = '';
  language: string = this.translate.currentLang;

  constructor(
    private translate: TranslateService,
    
    private languageSwitchButton: LanguageSwitchButtonService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
   
  ) {
    
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
  }

}
