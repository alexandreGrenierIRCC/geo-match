import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import { IrccDsAngularComponentsSharedModule } from '../shared/ircc-ds-angular-component-shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HiddenNavComponent } from './hidden-nav/hidden-nav.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import * as i0 from "@angular/core";
const IrccDsHeaderFooterComponents = [
    HeaderComponent,
    FooterComponent,
    LanguageSwitchComponent,
    HiddenNavComponent,
    ThemeSwitchComponent
];
export class IrccDsAngularHeaderFooterModule {
}
IrccDsAngularHeaderFooterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularHeaderFooterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularHeaderFooterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularHeaderFooterModule, declarations: [HeaderComponent,
        FooterComponent,
        LanguageSwitchComponent,
        HiddenNavComponent,
        ThemeSwitchComponent], imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule], exports: [HeaderComponent,
        FooterComponent,
        LanguageSwitchComponent,
        HiddenNavComponent,
        ThemeSwitchComponent] });
IrccDsAngularHeaderFooterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularHeaderFooterModule, imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularHeaderFooterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...IrccDsHeaderFooterComponents],
                    imports: [
                        CommonModule,
                        IrccDsAngularComponentsSharedModule,
                        TranslateModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [...IrccDsHeaderFooterComponents]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXJjYy1kcy1hbmd1bGFyLWhlYWRlci1mb290ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2hlYWRlci1mb290ZXIvaXJjYy1kcy1hbmd1bGFyLWhlYWRlci1mb290ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDeEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFFN0UsTUFBTSw0QkFBNEIsR0FBRztJQUNuQyxlQUFlO0lBQ2YsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3JCLENBQUM7QUFhRixNQUFNLE9BQU8sK0JBQStCOzs2SEFBL0IsK0JBQStCOzhIQUEvQiwrQkFBK0IsaUJBbEIxQyxlQUFlO1FBQ2YsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsb0JBQW9CLGFBTWxCLFlBQVk7UUFDWixtQ0FBbUM7UUFDbkMsZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUIsYUFkckIsZUFBZTtRQUNmLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLG9CQUFvQjs4SEFjVCwrQkFBK0IsWUFSeEMsWUFBWTtRQUNaLG1DQUFtQztRQUNuQyxlQUFlO1FBQ2YsV0FBVztRQUNYLG1CQUFtQjs0RkFJViwrQkFBK0I7a0JBWDNDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsR0FBRyw0QkFBNEIsQ0FBQztvQkFDL0MsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUNBQW1DO3dCQUNuQyxlQUFlO3dCQUNmLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLDRCQUE0QixDQUFDO2lCQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExhbmd1YWdlU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5ndWFnZS1zd2l0Y2gvbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJcmNjRHNBbmd1bGFyQ29tcG9uZW50c1NoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9pcmNjLWRzLWFuZ3VsYXItY29tcG9uZW50LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEhpZGRlbk5hdkNvbXBvbmVudCB9IGZyb20gJy4vaGlkZGVuLW5hdi9oaWRkZW4tbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZVN3aXRjaENvbXBvbmVudCB9IGZyb20gJy4vdGhlbWUtc3dpdGNoL3RoZW1lLXN3aXRjaC5jb21wb25lbnQnO1xuXG5jb25zdCBJcmNjRHNIZWFkZXJGb290ZXJDb21wb25lbnRzID0gW1xuICBIZWFkZXJDb21wb25lbnQsXG4gIEZvb3RlckNvbXBvbmVudCxcbiAgTGFuZ3VhZ2VTd2l0Y2hDb21wb25lbnQsXG4gIEhpZGRlbk5hdkNvbXBvbmVudCxcbiAgVGhlbWVTd2l0Y2hDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWy4uLklyY2NEc0hlYWRlckZvb3RlckNvbXBvbmVudHNdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElyY2NEc0FuZ3VsYXJDb21wb25lbnRzU2hhcmVkTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFsuLi5JcmNjRHNIZWFkZXJGb290ZXJDb21wb25lbnRzXVxufSlcbmV4cG9ydCBjbGFzcyBJcmNjRHNBbmd1bGFySGVhZGVyRm9vdGVyTW9kdWxlIHt9XG4iXX0=