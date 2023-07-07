import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from './shell/shell.service';

import { loginPage } from '@app/pages/login/login.component';
import { verifyPage } from '@app/pages/verify/verify.component';
import { pageOnePage } from '@app/pages/survey/page-one/page-one.component';
import { pageTwoPage } from '@app/pages/survey/page-two/page-two.component';
import { pageThreePage } from '@app/pages/survey/page-three/page-three.component';
import { resultsPage } from '@app/pages/results/results.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'login',
      component: loginPage,
      title: 'Login Page',
    },
    {
      path: 'verify',
      component: verifyPage,
      title: 'Verify Page',
    },
    { path: 'survey', redirectTo: 'survey/one', pathMatch: 'full' },
    {
      path: 'survey/one',
      component: pageOnePage,
      title: 'Survey Page 1',
    },
    {
      path: 'survey/two',
      component: pageTwoPage,
      title: 'Survey Page 2',
    },

    {
      path: 'survey/three',
      component: pageThreePage,
      title: 'Survey Page 3',
    },

    {
      path: 'results',
      component: resultsPage,
      title: 'Results',
    },

    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ]),

  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
