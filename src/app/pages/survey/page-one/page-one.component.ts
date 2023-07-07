import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IButtonConfig, IStepConfig } from 'ircc-ds-angular-component-library';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pageOne',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class pageOnePage {

  buttonConfig: IButtonConfig = {
    id: 'buttonContinue',
    
  };

  backButtonConfig: IButtonConfig = {
    id: 'buttonContinue',
    category: 'secondary'
    
  };

  stepOne: IStepConfig = {
    title: 'Draggable',
    tagConfig: {
      id: 'step1',
      type: 'primary'
    },
  };

  stepTwo: IStepConfig = {
    title: 'Radio',
    tagConfig: {
      id: 'step2',
      type:'notStarted'
    },
  };
  stepThree: IStepConfig = {
    title: 'Checkbox',
    tagConfig: {
      id: 'step1',
      type:'notStarted'
    },
  };

  stepFour: IStepConfig = {
    title: 'Results',
    tagConfig: {
      id: 'step1',
      type:'notStarted'
    },
  };


  steps: Array<IStepConfig> = [this.stepOne, this.stepTwo, this.stepThree, this.stepFour];
  selected: number = 0;

  constructor(private router: Router, private location: Location){}

  ngOnInit() {

  }

  detectClickReturn = (event: any) => {
    this.router.navigateByUrl('/verify');
  };

  detectClick = (event: any) => {
    this.router.navigateByUrl('/survey/two');
  };
}