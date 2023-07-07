import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  IProgressIndicatorConfig,
  IStepConfig,
} from 'ircc-ds-angular-component-library';

@Component({
  selector: 'app-survey-shell',
  templateUrl: './survey-shell.component.html',
  styleUrls: ['./survey-shell.component.scss'],
})
export class surveyShellComponent implements OnInit {
  progressIndicator: IProgressIndicatorConfig = {
    id: 'progressIndicator',
    selected: 0,
    steps: [],
  };

  @Input() steps: Array<IStepConfig> = [];
  @Input() selectedSteps: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.progressIndicator.steps = this.steps;
    this.progressIndicator.selected = this.selectedSteps;
  }

  progressTabButtonEvent = (event: any) => {
    switch (event) {
      case 0: {
        this.router.navigateByUrl('/survey/one');
        break;
      }
      case 1: {
        this.router.navigateByUrl('/survey/two');
        break;
      }
      case 2: {
        this.router.navigateByUrl('/survey/three');
        break;
      }
      case 3: {
        this.router.navigateByUrl('/results');
        break;
      }
    }
  };
}
