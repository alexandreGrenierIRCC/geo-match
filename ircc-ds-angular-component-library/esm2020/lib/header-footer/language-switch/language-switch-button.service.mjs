import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class LanguageSwitchButtonService {
    constructor() {
        this.languageClickSub = new BehaviorSubject(false);
        this.languageClickObs$ = this.languageClickSub.asObservable();
    }
    languageToggleClick() {
        this.languageClickSub.next(true);
    }
}
LanguageSwitchButtonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LanguageSwitchButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LanguageSwitchButtonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LanguageSwitchButtonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LanguageSwitchButtonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Utc3dpdGNoLWJ1dHRvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2hlYWRlci1mb290ZXIvbGFuZ3VhZ2Utc3dpdGNoL2xhbmd1YWdlLXN3aXRjaC1idXR0b24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTywyQkFBMkI7SUFIeEM7UUFJVSxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUMvRCxzQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FLMUQ7SUFIQyxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzt5SEFOVSwyQkFBMkI7NkhBQTNCLDJCQUEyQixjQUYxQixNQUFNOzRGQUVQLDJCQUEyQjtrQkFIdkMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTd2l0Y2hCdXR0b25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYW5ndWFnZUNsaWNrU3ViID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIGxhbmd1YWdlQ2xpY2tPYnMkID0gdGhpcy5sYW5ndWFnZUNsaWNrU3ViLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGxhbmd1YWdlVG9nZ2xlQ2xpY2soKSB7XG4gICAgdGhpcy5sYW5ndWFnZUNsaWNrU3ViLm5leHQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==