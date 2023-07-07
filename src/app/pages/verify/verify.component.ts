import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IButtonConfig } from 'ircc-ds-angular-component-library';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class verifyPage {

  buttonConfig: IButtonConfig = {
    id: 'buttonContinue',
    
  };

  backButtonConfig: IButtonConfig = {
    id: 'buttonContinue',
    category: 'secondary'
    
  };

  constructor(private router: Router){}

  ngOnInit() {

  }

  detectClickReturn = (event: any) => {
    this.router.navigateByUrl('/login');
  };

  detectClick = (event: any) => {
    this.router.navigateByUrl('/survey/one');
  };
}