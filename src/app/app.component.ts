import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// @ts-ignore
import en from '../assets/locales/en.json';
// @ts-ignore
import fr from '../assets/locales/fr.json';
import { NavigationEnd, Router } from '@angular/router';

export enum Languages {
  English = 'en',
  French = 'fr'
}

export enum DisplayLanguages {
  EN = 'EN',
  FR = 'FR',
  English = 'English',
  French = 'Français'
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'geo-match';

  constructor(private translate: TranslateService,private router: Router){
    translate.setDefaultLang(Languages.English);
    translate.setTranslation(Languages.English, en);
    translate.setTranslation(Languages.French, fr);

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.translate.use(
          this.router.url.includes('/fr') ? Languages.French : Languages.English
        );
        //Sets the html language attribute to current language
        document.documentElement.lang = this.translate.currentLang.substring(
          0,
          2
        );
      }
     
    });
  }
}
