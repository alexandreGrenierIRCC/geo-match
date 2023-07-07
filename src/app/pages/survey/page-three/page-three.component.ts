import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IButtonConfig, ICheckBoxComponentConfig, IRadioInputComponentConfig, IStepConfig } from 'ircc-ds-angular-component-library';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pageThree',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class pageThreePage {

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
      type: 'success'
    },
  };
  stepThree: IStepConfig = {
    title: 'Checkbox',
    tagConfig: {
      id: 'step1',
      type:'primary'
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
  selected: number = 2;

  form = new FormGroup({});

  checkboxAtlantic: ICheckBoxComponentConfig = {
    id: 'checkboxAtlantic',
    formGroup: this.form,
    required: true,
    inlineLabel: 'Atlantic Region',
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      },
      {
        key: 'requiredTrue',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      }
    ]
  };

  checkboxCentral: ICheckBoxComponentConfig = {
    id: 'checkboxCentral',
    formGroup: this.form,
    required: true,
    inlineLabel: 'Central Canada ( Ontario )',
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      },
      {
        key: 'requiredTrue',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      }
    ]
  };

  checkboxPrairies: ICheckBoxComponentConfig = {
    id: 'checkboxPrairies',
    formGroup: this.form,
    required: true,
    inlineLabel: 'Prairie Provinces',
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      },
      {
        key: 'requiredTrue',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      }
    ]
  };

  checkboxWest: ICheckBoxComponentConfig = {
    id: 'checkboxWest',
    formGroup: this.form,
    required: true,
    inlineLabel: 'West Coast',
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      },
      {
        key: 'requiredTrue',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      }
    ]
  };

  checkboxNorth: ICheckBoxComponentConfig = {
    id: 'checkboxNort',
    formGroup: this.form,
    required: true,
    inlineLabel: 'Nothern Territories',
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      },
      {
        key: 'requiredTrue',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      }
    ]
  };

  checkboxNo: ICheckBoxComponentConfig = {
    id: 'checkboxNo',
    formGroup: this.form,
    required: true,
    inlineLabel: 'No Preferences',
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      },
      {
        key: 'requiredTrue',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      }
    ]
  };

  checkboxRegion: ICheckBoxComponentConfig = {
    id: 'checkboxRegion',
    formGroup: this.form,
    required: true,
    inlineLabel: 'I am not familiar with Canada\'s Regions',
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      },
      {
        key: 'requiredTrue',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      }
    ]
  };

  constructor(private router: Router, private location: Location){}

  ngOnInit() {
    this.form.addControl(
      this.checkboxAtlantic.id,
      new FormControl('', Validators.required)
    );
    this.form.addControl(
      this.checkboxCentral.id,
      new FormControl('', Validators.required)
    );
    this.form.addControl(
      this.checkboxPrairies.id,
      new FormControl('', Validators.required)
    );

    this.form.addControl(
      this.checkboxWest.id,
      new FormControl('', Validators.required)
    );

    this.form.addControl(
      this.checkboxNorth.id,
      new FormControl('', Validators.required)
    );

    this.form.addControl(
      this.checkboxNo.id,
      new FormControl('', Validators.required)
    );

    this.form.addControl(
      this.checkboxRegion.id,
      new FormControl('', Validators.required)
    );
    
    this.form.valueChanges.subscribe((changes) => {
      this.buttonConfig.disabled = false;
      console.log(changes)
    });
  }

  detectClickReturn = (event: any) => {
    this.router.navigateByUrl('/survey/two');
  };

  detectClick = (event: any) => {
    this.router.navigateByUrl('/results');
  };
}