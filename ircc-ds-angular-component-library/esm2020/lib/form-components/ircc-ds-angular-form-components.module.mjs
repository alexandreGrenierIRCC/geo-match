import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { InputComponent } from './input/input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { IrccDsAngularComponentsSharedModule } from '../shared/ircc-ds-angular-component-shared.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SelectComponent } from './select/select.component';
import * as i0 from "@angular/core";
const IrccDsAngularFormComponents = [
    CheckboxComponent,
    ErrorComponent,
    InputComponent,
    RadioInputComponent,
    DatePickerComponent,
    TextareaComponent,
    SelectComponent
];
export class IrccDsAngularFormComponentsModule {
}
IrccDsAngularFormComponentsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularFormComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularFormComponentsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularFormComponentsModule, declarations: [CheckboxComponent,
        ErrorComponent,
        InputComponent,
        RadioInputComponent,
        DatePickerComponent,
        TextareaComponent,
        SelectComponent], imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule], exports: [CheckboxComponent,
        ErrorComponent,
        InputComponent,
        RadioInputComponent,
        DatePickerComponent,
        TextareaComponent,
        SelectComponent] });
IrccDsAngularFormComponentsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularFormComponentsModule, imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularFormComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...IrccDsAngularFormComponents],
                    imports: [
                        CommonModule,
                        IrccDsAngularComponentsSharedModule,
                        TranslateModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [...IrccDsAngularFormComponents]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXJjYy1kcy1hbmd1bGFyLWZvcm0tY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvZm9ybS1jb21wb25lbnRzL2lyY2MtZHMtYW5ndWxhci1mb3JtLWNvbXBvbmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDeEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRTVELE1BQU0sMkJBQTJCLEdBQUc7SUFDbEMsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtDQUNoQixDQUFDO0FBYUYsTUFBTSxPQUFPLGlDQUFpQzs7K0hBQWpDLGlDQUFpQztnSUFBakMsaUNBQWlDLGlCQXBCNUMsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsZUFBZSxhQU1iLFlBQVk7UUFDWixtQ0FBbUM7UUFDbkMsZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUIsYUFoQnJCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGVBQWU7Z0lBY0osaUNBQWlDLFlBUjFDLFlBQVk7UUFDWixtQ0FBbUM7UUFDbkMsZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUI7NEZBSVYsaUNBQWlDO2tCQVg3QyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLEdBQUcsMkJBQTJCLENBQUM7b0JBQzlDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1DQUFtQzt3QkFDbkMsZUFBZTt3QkFDZixXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQztpQkFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYWRpb0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby1pbnB1dC9yYWRpby1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXJjY0RzQW5ndWxhckNvbXBvbmVudHNTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvaXJjYy1kcy1hbmd1bGFyLWNvbXBvbmVudC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuXG5jb25zdCBJcmNjRHNBbmd1bGFyRm9ybUNvbXBvbmVudHMgPSBbXG4gIENoZWNrYm94Q29tcG9uZW50LFxuICBFcnJvckNvbXBvbmVudCxcbiAgSW5wdXRDb21wb25lbnQsXG4gIFJhZGlvSW5wdXRDb21wb25lbnQsXG4gIERhdGVQaWNrZXJDb21wb25lbnQsXG4gIFRleHRhcmVhQ29tcG9uZW50LFxuICBTZWxlY3RDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWy4uLklyY2NEc0FuZ3VsYXJGb3JtQ29tcG9uZW50c10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSXJjY0RzQW5ndWxhckNvbXBvbmVudHNTaGFyZWRNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogWy4uLklyY2NEc0FuZ3VsYXJGb3JtQ29tcG9uZW50c11cbn0pXG5leHBvcnQgY2xhc3MgSXJjY0RzQW5ndWxhckZvcm1Db21wb25lbnRzTW9kdWxlIHt9XG4iXX0=