import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IButtonConfig, IIndicatorConfig } from 'ircc-ds-angular-component-library';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class resultsPage {

  buttonConfig: IButtonConfig = {
    id: 'buttonContinue',
    
  };
  buttonDownloadConfig: IButtonConfig = {
    id: 'buttonContinue',
  };

  buttonDiscover: IButtonConfig = {
    id:'discover',
    category: 'secondary'
  }

  indicatorUrban: IIndicatorConfig = {
    label: 'Urban',
    type: 'text',
    category: 'weak',
    purpose: 'status'
  }

  indicatorDiverse: IIndicatorConfig = {
    label: 'Diverse',
    type: 'text',
    category: 'weak',
    purpose: 'status'
  }

  indicatorSchools: IIndicatorConfig = {
    label: 'Good Schools',
    type: 'text',
    category: 'weak',
    purpose: 'status',
    palette: 'blue'
  }

  constructor(private router: Router){}

  ngOnInit() {

  }

  detectClickReturn = (event: any) => {
    this.router.navigateByUrl('/login');
  };

  detectClick = (event: any) => {
    this.router.navigateByUrl('/survey/one');
  };

  discoverOttawa = (event: any) => {
    window.location.href = 'https://ottawatourism.ca/en';
  };

  discoverWindsor = (event: any) => {
    window.location.href = 'https://www.visitwindsoressex.com/';
  };

  discoverBanff = (event: any) => {
    window.location.href = 'https://www.travelalberta.com/places-to-go/cities-towns/banff-lake-louise';
  };
  
}