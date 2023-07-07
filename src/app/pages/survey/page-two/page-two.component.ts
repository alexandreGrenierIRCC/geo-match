import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IButtonConfig, IRadioInputComponentConfig, IStepConfig } from 'ircc-ds-angular-component-library';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pageTwo',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class pageTwoPage {

  buttonConfig: IButtonConfig = {
    id: 'buttonContinue',
    disabled: true,
  };

  backButtonConfig: IButtonConfig = {
    id: 'buttonContinue',
    category: 'secondary'
    
  };

  stepOne: IStepConfig = {
    title: 'Draggable',
    tagConfig: {
      id: 'step1',
      type: 'success'
    },
  };

  stepTwo: IStepConfig = {
    title: 'Radio',
    tagConfig: {
      id: 'step2',
      type:'primary'
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
  selected: number = 1;

  form = new FormGroup({});

  // radioOne: IRadioInputComponentConfig = {
  //   id: 'radioOne',
  //   formGroup: this.form
  // }
  radioOne: IRadioInputComponentConfig = {
    id: 'sex_at_birth_radio',
    formGroup: this.form,
    required: true,
    options: [
      {
        text: 'Rural',
        value: 'Rural'
      },
      {
        text: 'Somewhat Rural',
        value: 'mid-rural'
      },
      {
        text: 'Subburban',
        value: 'Subburban'
      },
      {
        text: 'Somewhat Subburban',
        value: 'Mid Subburban'
      },
      {
        text: 'Urban',
        value: 'Urban'
      },
      {
        text: 'No Preference',
        value: 'No Preference'
      }
    ],
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ERROR.requiredRadioError'
      }
    ]
  };

  constructor(private router: Router, private location: Location){}

  ngOnInit() {
    this.form.addControl(
      this.radioOne.id,
      new FormControl('', Validators.required)
    );

    this.form.valueChanges.subscribe((changes) => {
      this.buttonConfig.disabled = false;
    });
  }

  detectClickReturn = (event: any) => {
    this.router.navigateByUrl('/survey/one');
  };

  detectClick = (event: any) => {
    this.router.navigateByUrl('/survey/three');
  };
}