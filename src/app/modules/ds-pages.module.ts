import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared.module';
import { ShellComponent } from '@app/shell/shell.component';
import { TranslateModule } from '@ngx-translate/core';

// pages
import { loginPage } from '@app/pages/login/login.component';
import { verifyPage } from '@app/pages/verify/verify.component';
import { pageOnePage } from '@app/pages/survey/page-one/page-one.component';
import { pageTwoPage } from '@app/pages/survey/page-two/page-two.component';
import { pageThreePage } from '@app/pages/survey/page-three/page-three.component';
import { resultsPage } from '@app/pages/results/results.component';

// components
import { cardComponent } from '@app/components/card/card.component';
import { surveyShellComponent } from '@app/components/survey-shell/survey-shell.component';



@NgModule({
  declarations: [
    ShellComponent,
    loginPage,
    verifyPage,
    pageOnePage,
    pageTwoPage,
    pageThreePage,
    resultsPage,
    cardComponent,
    surveyShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    SharedModule,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class DsPageModule {}
