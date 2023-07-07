import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IButtonConfig,
  IInputComponentConfig,
  InputTypes,
} from 'ircc-ds-angular-component-library';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class loginPage implements OnInit {
  form = new FormGroup({});

  inputConfig: IInputComponentConfig = {
    label: 'User name',
    required: true,
    type: InputTypes.text,
    id: 'inputConfig',
    formGroup: this.form,
  };

  passConfig: IInputComponentConfig = {
    label: 'Password',
    required: true,
    type: InputTypes.password,
    id: 'passConfig',
    formGroup: this.form,
  };

  buttonConfig: IButtonConfig = {
    id: 'buttonContinue',
    disabled: true,
  };

  constructor(private router: Router){}

  ngOnInit() {
    this.form.addControl(
      this.inputConfig.id,
      new FormControl('', Validators.required)
    );
    this.form.addControl(
      this.passConfig.id,
      new FormControl('', Validators.required)
    );
    this.form.valueChanges.subscribe((changes) => {
      let booleanButtonControl = false;

      for (const controls in this.form.controls) {
        if (this.form.get(controls)?.value.length > 0) {
          booleanButtonControl = false;
        } else {
          booleanButtonControl = true;
        }
      }
      this.buttonConfig.disabled = booleanButtonControl;
    });
  }

  detectClick = (event: any) => {
    this.router.navigateByUrl('/verify');
  };
}
