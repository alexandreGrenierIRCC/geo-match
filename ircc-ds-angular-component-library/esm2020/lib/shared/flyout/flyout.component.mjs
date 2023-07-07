import { Component, Input, Output, EventEmitter, HostListener, ViewChildren, QueryList } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/common";
import * as i3 from "../flyout-option/flyout-option.component";
export var IFlyoutSelectTypes;
(function (IFlyoutSelectTypes) {
    IFlyoutSelectTypes["single"] = "single";
    IFlyoutSelectTypes["multi"] = "multi";
})(IFlyoutSelectTypes || (IFlyoutSelectTypes = {}));
export const FLYOUT_CURRENT_SELECTED = {
    en: ' currently selected',
    fr: ' actuellement selectionne'
};
export class FlyoutComponent {
    constructor(translate) {
        this.translate = translate;
        this.optionContainers = new QueryList();
        this.config = {
            id: ''
        };
        //TODO: Must add the other config parameters
        this.isSelected = new EventEmitter();
        this.selectedIndex = -1;
        this.a11yText = '';
        this.currentSelected = '';
    }
    ngOnInit() {
        if (this.config.type === undefined)
            this.config.type = 'single';
        if (this.id)
            this.config.id = this.id;
        if (this.options)
            this.config.options = this.options;
        if (this.disabled)
            this.config.disabled = this.disabled;
        if (this.selection)
            this.config.selection = this.selection;
        if (this.type)
            this.config.type = this.type;
        if (this.size)
            this.config.size = this.size;
        this.setLang(this.translate.currentLang);
        this.translate.onLangChange.subscribe((change) => {
            this.setLang(change.lang);
        });
    }
    onClick(event) {
        let target = event.target;
        if (!target.classList.contains('option-contents') &&
            !target.classList.contains('dropdown')) {
            this.isSelected.emit(null);
        }
    }
    onArrowDown(event) {
        event.preventDefault();
        if (this.config.options) {
            let foundClickable = false;
            this.config.options
                .slice(this.selectedIndex + 1)
                .forEach((option, index) => {
                if (!foundClickable && option.clickable !== false) {
                    this.selectedIndex += index + 1;
                    this.highlightIndex(option.id);
                    foundClickable = true;
                }
            });
        }
    }
    onArrowUp(event) {
        event.preventDefault();
        if (this.config.options) {
            let foundClickable = false;
            this.config.options
                .slice(0, this.selectedIndex)
                .reverse()
                .forEach((option, index) => {
                if (!foundClickable && option.clickable !== false) {
                    this.selectedIndex -= index + 1;
                    this.highlightIndex(option.id);
                    foundClickable = true;
                }
            });
            // Ensure selectedIndex does not fall below 0
            this.selectedIndex = Math.max(this.selectedIndex, 0);
        }
    }
    onEnter(event) {
        event.preventDefault();
        //if the index hasn't changes through arrow navigation, emits our event but lets the parent know nothing was selected
        this.selectedIndex != -1
            ? this.optionSelected(this.selectedIndex)
            : this.isSelected.emit(null);
    }
    //takes in the active index from HostListeners and sets the config option to active state which triggers styling
    highlightIndex(el_id) {
        if (el_id) {
            this.config.options?.forEach((option) => {
                if (option.id === el_id) {
                    option.active = true;
                    this.optionContainers
                        .toArray()[this.selectedIndex]?.nativeElement?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
                    console.log('HERE', option.value);
                    this.a11yText = option.value;
                    //updates a11yText to indicate currently selected item if scrolling through flyout again
                    if (option.selected)
                        this.a11yText += this.currentSelected;
                }
                else {
                    option.active = false;
                }
            });
        }
    }
    /**
     * setLang detects changes to the language toggle to serve the correct aria error text
     */
    setLang(lang) {
        lang === 'en' || lang === 'en-US'
            ? (this.currentSelected = FLYOUT_CURRENT_SELECTED.en)
            : (this.currentSelected = FLYOUT_CURRENT_SELECTED.fr);
    }
    //clears all selections by setting the option.selected to false
    clearOptions() {
        this.config?.options?.forEach((option) => {
            option.selected = false;
        });
    }
    //function takes in index value of current active option and selects it
    optionSelected(i) {
        if (this.config.options &&
            !this.config.options[i].selected &&
            this.config.options[i].clickable) {
            //setup for future multi select feature
            this.config.type !== 'multi'
                ? this.clearOptions()
                : /*this.config.selection = [].push(this.config.options[i]);*/ console.log('MULTI');
            this.config.options[i].selected = true;
            //emits the value of the selected index so it's visible to the parent
            this.isSelected.emit(this.config.options[i].value);
        }
    }
}
FlyoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FlyoutComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
FlyoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: FlyoutComponent, selector: "ircc-cl-lib-flyout", inputs: { config: "config", id: "id", options: "options", disabled: "disabled", selection: "selection", type: "type", size: "size" }, outputs: { isSelected: "isSelected" }, host: { listeners: { "document:click": "onClick($event)", "document:keydown.arrowdown": "onArrowDown($event)", "document:keydown.arrowup": "onArrowUp($event)", "document:keydown.enter": "onEnter($event)" } }, viewQueries: [{ propertyName: "optionContainers", predicate: ["option"], descendants: true }], ngImport: i0, template: "<div class=\"{{ config?.size }} flyout-container\">\n  <div\n    #option\n    *ngFor=\"let option of config?.options; let index = index\"\n    [ngClass]=\"{\n      'flyout-option-container': option.clickable !== false,\n      'disabled-option': option.disabled === true,\n      selected: option.active\n    }\"\n  >\n    <ircc-cl-lib-flyout-option\n      [config]=\"option\"\n      [size]=\"config.size\"\n      (click)=\"optionSelected(index)\"\n      [id]=\"config.id + '_option_' + (index + 1)\"\n    ></ircc-cl-lib-flyout-option>\n  </div>\n</div>\n<span\n  id=\"sr\"\n  class=\"sr-only\"\n  aria-live=\"polite\"\n  >{{ a11yText }}{{currentSelected}}</span\n>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.FlyoutOptionComponent, selector: "ircc-cl-lib-flyout-option", inputs: ["config", "id", "size", "value", "selected", "active", "disabled", "type", "clickable"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FlyoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-flyout', template: "<div class=\"{{ config?.size }} flyout-container\">\n  <div\n    #option\n    *ngFor=\"let option of config?.options; let index = index\"\n    [ngClass]=\"{\n      'flyout-option-container': option.clickable !== false,\n      'disabled-option': option.disabled === true,\n      selected: option.active\n    }\"\n  >\n    <ircc-cl-lib-flyout-option\n      [config]=\"option\"\n      [size]=\"config.size\"\n      (click)=\"optionSelected(index)\"\n      [id]=\"config.id + '_option_' + (index + 1)\"\n    ></ircc-cl-lib-flyout-option>\n  </div>\n</div>\n<span\n  id=\"sr\"\n  class=\"sr-only\"\n  aria-live=\"polite\"\n  >{{ a11yText }}{{currentSelected}}</span\n>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { optionContainers: [{
                type: ViewChildren,
                args: ['option']
            }], config: [{
                type: Input
            }], id: [{
                type: Input
            }], options: [{
                type: Input
            }], disabled: [{
                type: Input
            }], selection: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], isSelected: [{
                type: Output
            }], onClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }], onArrowDown: [{
                type: HostListener,
                args: ['document:keydown.arrowdown', ['$event']]
            }], onArrowUp: [{
                type: HostListener,
                args: ['document:keydown.arrowup', ['$event']]
            }], onEnter: [{
                type: HostListener,
                args: ['document:keydown.enter', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvZmx5b3V0L2ZseW91dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2ZseW91dC9mbHlvdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFDWixZQUFZLEVBQ1osWUFBWSxFQUVaLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFLdkIsTUFBTSxDQUFOLElBQVksa0JBR1g7QUFIRCxXQUFZLGtCQUFrQjtJQUM1Qix1Q0FBaUIsQ0FBQTtJQUNqQixxQ0FBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBRzdCO0FBVUQsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUc7SUFDckMsRUFBRSxFQUFFLHFCQUFxQjtJQUN6QixFQUFFLEVBQUUsMkJBQTJCO0NBQ2hDLENBQUM7QUFNRixNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUN2QixxQkFBZ0IsR0FDdEMsSUFBSSxTQUFTLEVBQWMsQ0FBQztRQUVyQixXQUFNLEdBQWtCO1lBQy9CLEVBQUUsRUFBRSxFQUFFO1NBQ1AsQ0FBQztRQVFGLDRDQUE0QztRQUNsQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxQyxrQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsb0JBQWUsR0FBVyxFQUFFLENBQUM7SUFuQnFCLENBQUM7SUFxQm5ELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMs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T0FBTyxDQUFDLEdBQUcsQ0FDdEUsT0FBTyxDQUNSLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLHFFQUFxRTtZQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7OzZHQXZKVSxlQUFlO2lHQUFmLGVBQWUsdWhCQ3JDNUIsMnBCQXdCQTs0RkRhYSxlQUFlO2tCQUozQixTQUFTOytCQUNFLG9CQUFvQjt1R0FLTixnQkFBZ0I7c0JBQXZDLFlBQVk7dUJBQUMsUUFBUTtnQkFHYixNQUFNO3NCQUFkLEtBQUs7Z0JBR0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFHSSxVQUFVO3NCQUFuQixNQUFNO2dCQXNCUCxPQUFPO3NCQUROLFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBWTFDLFdBQVc7c0JBRFYsWUFBWTt1QkFBQyw0QkFBNEIsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFrQnRELFNBQVM7c0JBRFIsWUFBWTt1QkFBQywwQkFBMEIsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFxQnBELE9BQU87c0JBRE4sWUFBWTt1QkFBQyx3QkFBd0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgVmlld0NoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEU1NpemVzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9qbC1jb21wb25lbnRzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJRmx5b3V0T3B0aW9uQ29uZmlnIH0gZnJvbSAnLi4vZmx5b3V0LW9wdGlvbi9mbHlvdXQtb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmV4cG9ydCBlbnVtIElGbHlvdXRTZWxlY3RUeXBlcyB7XG4gIHNpbmdsZSA9ICdzaW5nbGUnLFxuICBtdWx0aSA9ICdtdWx0aSdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmx5b3V0Q29uZmlnIHtcbiAgaWQ6IHN0cmluZztcbiAgb3B0aW9ucz86IElGbHlvdXRPcHRpb25Db25maWdbXTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBzZWxlY3Rpb24/OiBbXSB8IG51bWJlcjtcbiAgdHlwZT86IGtleW9mIHR5cGVvZiBJRmx5b3V0U2VsZWN0VHlwZXM7XG4gIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNTaXplcztcbn1cbmV4cG9ydCBjb25zdCBGTFlPVVRfQ1VSUkVOVF9TRUxFQ1RFRCA9IHtcbiAgZW46ICcgY3VycmVudGx5IHNlbGVjdGVkJyxcbiAgZnI6ICcgYWN0dWVsbGVtZW50IHNlbGVjdGlvbm5lJ1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItZmx5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZseW91dC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG4gIEBWaWV3Q2hpbGRyZW4oJ29wdGlvbicpIG9wdGlvbkNvbnRhaW5lcnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPiA9XG4gICAgbmV3IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPigpO1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogSUZseW91dENvbmZpZyA9IHtcbiAgICBpZDogJydcbiAgfTtcbiAgQElucHV0KCkgaWQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbnM/OiBJRmx5b3V0T3B0aW9uQ29uZmlnW107XG4gIEBJbnB1dCgpIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0aW9uPzogW10gfCBudW1iZXI7XG4gIEBJbnB1dCgpIHR5cGU/OiBrZXlvZiB0eXBlb2YgSUZseW91dFNlbGVjdFR5cGVzO1xuICBASW5wdXQoKSBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG5cbiAgLy9UT0RPOiBNdXN0IGFkZCB0aGUgb3RoZXIgY29uZmlnIHBhcmFtZXRlcnNcbiAgQE91dHB1dCgpIGlzU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG4gIGExMXlUZXh0OiBzdHJpbmcgPSAnJztcbiAgY3VycmVudFNlbGVjdGVkOiBzdHJpbmcgPSAnJztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb25maWcudHlwZSA9PT0gdW5kZWZpbmVkKSB0aGlzLmNvbmZpZy50eXBlID0gJ3NpbmdsZSc7XG4gICAgaWYgKHRoaXMuaWQpIHRoaXMuY29uZmlnLmlkID0gdGhpcy5pZDtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB0aGlzLmNvbmZpZy5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB0aGlzLmNvbmZpZy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uKSB0aGlzLmNvbmZpZy5zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcbiAgICBpZiAodGhpcy50eXBlKSB0aGlzLmNvbmZpZy50eXBlID0gdGhpcy50eXBlO1xuICAgIGlmICh0aGlzLnNpemUpIHRoaXMuY29uZmlnLnNpemUgPSB0aGlzLnNpemU7XG5cbiAgICB0aGlzLnNldExhbmcodGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcpO1xuICAgIHRoaXMudHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGNoYW5nZSkgPT4ge1xuICAgICAgdGhpcy5zZXRMYW5nKGNoYW5nZS5sYW5nKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChcbiAgICAgICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcHRpb24tY29udGVudHMnKSAmJlxuICAgICAgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duJylcbiAgICApIHtcbiAgICAgIHRoaXMuaXNTZWxlY3RlZC5lbWl0KG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uYXJyb3dkb3duJywgWyckZXZlbnQnXSlcbiAgb25BcnJvd0Rvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLmNvbmZpZy5vcHRpb25zKSB7XG4gICAgICBsZXQgZm91bmRDbGlja2FibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29uZmlnLm9wdGlvbnNcbiAgICAgICAgLnNsaWNlKHRoaXMuc2VsZWN0ZWRJbmRleCArIDEpXG4gICAgICAgIC5mb3JFYWNoKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKCFmb3VuZENsaWNrYWJsZSAmJiBvcHRpb24uY2xpY2thYmxlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ICs9IGluZGV4ICsgMTtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0SW5kZXgob3B0aW9uLmlkKTtcbiAgICAgICAgICAgIGZvdW5kQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uYXJyb3d1cCcsIFsnJGV2ZW50J10pXG4gIG9uQXJyb3dVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIGxldCBmb3VuZENsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jb25maWcub3B0aW9uc1xuICAgICAgICAuc2xpY2UoMCwgdGhpcy5zZWxlY3RlZEluZGV4KVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5mb3JFYWNoKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKCFmb3VuZENsaWNrYWJsZSAmJiBvcHRpb24uY2xpY2thYmxlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4IC09IGluZGV4ICsgMTtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0SW5kZXgob3B0aW9uLmlkKTtcbiAgICAgICAgICAgIGZvdW5kQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgLy8gRW5zdXJlIHNlbGVjdGVkSW5kZXggZG9lcyBub3QgZmFsbCBiZWxvdyAwXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBNYXRoLm1heCh0aGlzLnNlbGVjdGVkSW5kZXgsIDApO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZW50ZXInLCBbJyRldmVudCddKVxuICBvbkVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvL2lmIHRoZSBpbmRleCBoYXNuJ3QgY2hhbmdlcyB0aHJvdWdoIGFycm93IG5hdmlnYXRpb24sIGVtaXRzIG91ciBldmVudCBidXQgbGV0cyB0aGUgcGFyZW50IGtub3cgbm90aGluZyB3YXMgc2VsZWN0ZWRcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggIT0gLTFcbiAgICAgID8gdGhpcy5vcHRpb25TZWxlY3RlZCh0aGlzLnNlbGVjdGVkSW5kZXgpXG4gICAgICA6IHRoaXMuaXNTZWxlY3RlZC5lbWl0KG51bGwpO1xuICB9XG5cbiAgLy90YWtlcyBpbiB0aGUgYWN0aXZlIGluZGV4IGZyb20gSG9zdExpc3RlbmVycyBhbmQgc2V0cyB0aGUgY29uZmlnIG9wdGlvbiB0byBhY3RpdmUgc3RhdGUgd2hpY2ggdHJpZ2dlcnMgc3R5bGluZ1xuICBoaWdobGlnaHRJbmRleChlbF9pZDogYW55KSB7XG4gICAgaWYgKGVsX2lkKSB7XG4gICAgICB0aGlzLmNvbmZpZy5vcHRpb25zPy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbi5pZCA9PT0gZWxfaWQpIHtcbiAgICAgICAgICBvcHRpb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm9wdGlvbkNvbnRhaW5lcnNcbiAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAgIFt0aGlzLnNlbGVjdGVkSW5kZXhdPy5uYXRpdmVFbGVtZW50Py5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgYmxvY2s6ICdlbmQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnSEVSRScsIG9wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgICB0aGlzLmExMXlUZXh0ID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgIC8vdXBkYXRlcyBhMTF5VGV4dCB0byBpbmRpY2F0ZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSBpZiBzY3JvbGxpbmcgdGhyb3VnaCBmbHlvdXQgYWdhaW5cbiAgICAgICAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB0aGlzLmExMXlUZXh0ICs9IHRoaXMuY3VycmVudFNlbGVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHNldExhbmcgZGV0ZWN0cyBjaGFuZ2VzIHRvIHRoZSBsYW5ndWFnZSB0b2dnbGUgdG8gc2VydmUgdGhlIGNvcnJlY3QgYXJpYSBlcnJvciB0ZXh0XG4gICAqL1xuICBzZXRMYW5nKGxhbmc6IHN0cmluZykge1xuICAgIGxhbmcgPT09ICdlbicgfHwgbGFuZyA9PT0gJ2VuLVVTJ1xuICAgICAgPyAodGhpcy5jdXJyZW50U2VsZWN0ZWQgPSBGTFlPVVRfQ1VSUkVOVF9TRUxFQ1RFRC5lbilcbiAgICAgIDogKHRoaXMuY3VycmVudFNlbGVjdGVkID0gRkxZT1VUX0NVUlJFTlRfU0VMRUNURUQuZnIpO1xuICB9XG5cbiAgLy9jbGVhcnMgYWxsIHNlbGVjdGlvbnMgYnkgc2V0dGluZyB0aGUgb3B0aW9uLnNlbGVjdGVkIHRvIGZhbHNlXG4gIGNsZWFyT3B0aW9ucygpIHtcbiAgICB0aGlzLmNvbmZpZz8ub3B0aW9ucz8uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vZnVuY3Rpb24gdGFrZXMgaW4gaW5kZXggdmFsdWUgb2YgY3VycmVudCBhY3RpdmUgb3B0aW9uIGFuZCBzZWxlY3RzIGl0XG4gIG9wdGlvblNlbGVjdGVkKGk6IG51bWJlcikge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLm9wdGlvbnMgJiZcbiAgICAgICF0aGlzLmNvbmZpZy5vcHRpb25zW2ldLnNlbGVjdGVkICYmXG4gICAgICB0aGlzLmNvbmZpZy5vcHRpb25zW2ldLmNsaWNrYWJsZVxuICAgICkge1xuICAgICAgLy9zZXR1cCBmb3IgZnV0dXJlIG11bHRpIHNlbGVjdCBmZWF0dXJlXG4gICAgICB0aGlzLmNvbmZpZy50eXBlICE9PSAnbXVsdGknXG4gICAgICAgID8gdGhpcy5jbGVhck9wdGlvbnMoKVxuICAgICAgICA6IC8qdGhpcy5jb25maWcuc2VsZWN0aW9uID0gW10ucHVzaCh0aGlzLmNvbmZpZy5vcHRpb25zW2ldKTsqLyBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdNVUxUSSdcbiAgICAgICAgICApO1xuICAgICAgdGhpcy5jb25maWcub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAvL2VtaXRzIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgaW5kZXggc28gaXQncyB2aXNpYmxlIHRvIHRoZSBwYXJlbnRcbiAgICAgIHRoaXMuaXNTZWxlY3RlZC5lbWl0KHRoaXMuY29uZmlnLm9wdGlvbnNbaV0udmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInt7IGNvbmZpZz8uc2l6ZSB9fSBmbHlvdXQtY29udGFpbmVyXCI+XG4gIDxkaXZcbiAgICAjb3B0aW9uXG4gICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWc/Lm9wdGlvbnM7IGxldCBpbmRleCA9IGluZGV4XCJcbiAgICBbbmdDbGFzc109XCJ7XG4gICAgICAnZmx5b3V0LW9wdGlvbi1jb250YWluZXInOiBvcHRpb24uY2xpY2thYmxlICE9PSBmYWxzZSxcbiAgICAgICdkaXNhYmxlZC1vcHRpb24nOiBvcHRpb24uZGlzYWJsZWQgPT09IHRydWUsXG4gICAgICBzZWxlY3RlZDogb3B0aW9uLmFjdGl2ZVxuICAgIH1cIlxuICA+XG4gICAgPGlyY2MtY2wtbGliLWZseW91dC1vcHRpb25cbiAgICAgIFtjb25maWddPVwib3B0aW9uXCJcbiAgICAgIFtzaXplXT1cImNvbmZpZy5zaXplXCJcbiAgICAgIChjbGljayk9XCJvcHRpb25TZWxlY3RlZChpbmRleClcIlxuICAgICAgW2lkXT1cImNvbmZpZy5pZCArICdfb3B0aW9uXycgKyAoaW5kZXggKyAxKVwiXG4gICAgPjwvaXJjYy1jbC1saWItZmx5b3V0LW9wdGlvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxzcGFuXG4gIGlkPVwic3JcIlxuICBjbGFzcz1cInNyLW9ubHlcIlxuICBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICA+e3sgYTExeVRleHQgfX17e2N1cnJlbnRTZWxlY3RlZH19PC9zcGFuXG4+XG4iXX0=