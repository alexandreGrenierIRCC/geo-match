import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/common";
export class TabsComponent {
    constructor(translate) {
        this.translate = translate;
        this.config = {
            id: '',
            showContent: true
        };
        this.valueChange = new EventEmitter();
    }
    ngOnInit() {
        //set config from individual options, if present
        if (this.id)
            this.config.id = this.id;
        if (this.tab)
            this.config.tab = this.tab;
        if (this.size)
            this.config.size = this.size;
        if (this.selected)
            this.config.selected = this.selected;
        if (this.showContent)
            this.config.showContent = this.showContent;
        if (this.config.selected === undefined && this.config.tab) {
            this.config.selected = this.config.tab[0].id;
            this.valueChange.emit(this.config.selected);
        }
    }
    setSelected(selectedID) {
        if (selectedID)
            this.config.selected = selectedID; //set the selected tab
        if (this.config?.selected) {
            let tab = document.getElementById(this.config?.selected);
            let x = tab?.getBoundingClientRect().left;
            if (document.querySelector('.page-nav')) {
                let nav = document.querySelector('.page-nav');
                nav && x ? (nav.scrollLeft = x) : null;
            }
            this.valueChange.emit(selectedID);
        }
    }
}
TabsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TabsComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
TabsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: TabsComponent, selector: "ircc-cl-lib-tabs", inputs: { config: "config", id: "id", tab: "tab", size: "size", selected: "selected", showContent: "showContent" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<div class=\"{{ config.size }}\">\n  <nav class=\"page-nav\">\n    <div *ngFor=\"let val of config.tab\">\n      <button\n        *ngIf=\"val.id === config.selected\"\n        selected\n        class=\"tabs-btn\"\n        [id]=\"val.id\"\n        (click)=\"setSelected(val.id)\"\n        [attr.aria-label]=\"val.title + ' selected'\"\n      >\n        {{ val.title || '' | translate }}\n      </button>\n      <button\n        *ngIf=\"val.id !== config.selected\"\n        class=\"tabs-btn\"\n        [id]=\"val.id\"\n        (click)=\"setSelected(val.id)\"\n      >\n        {{ val.title || '' | translate }}\n      </button>\n    </div>\n  </nav>\n  <ng-container *ngIf=\"config.showContent === true\">\n    <br />\n    <div class=\"col-lg-10\">\n      <div class=\"side-menu-content\">\n        <div *ngFor=\"let cont of config.tab\">\n          <div\n            *ngIf=\"cont.id === config.selected\"\n            class=\"content\"\n          >\n            {{ cont.value || '' | translate }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TabsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-tabs', template: "<div class=\"{{ config.size }}\">\n  <nav class=\"page-nav\">\n    <div *ngFor=\"let val of config.tab\">\n      <button\n        *ngIf=\"val.id === config.selected\"\n        selected\n        class=\"tabs-btn\"\n        [id]=\"val.id\"\n        (click)=\"setSelected(val.id)\"\n        [attr.aria-label]=\"val.title + ' selected'\"\n      >\n        {{ val.title || '' | translate }}\n      </button>\n      <button\n        *ngIf=\"val.id !== config.selected\"\n        class=\"tabs-btn\"\n        [id]=\"val.id\"\n        (click)=\"setSelected(val.id)\"\n      >\n        {{ val.title || '' | translate }}\n      </button>\n    </div>\n  </nav>\n  <ng-container *ngIf=\"config.showContent === true\">\n    <br />\n    <div class=\"col-lg-10\">\n      <div class=\"side-menu-content\">\n        <div *ngFor=\"let cont of config.tab\">\n          <div\n            *ngIf=\"cont.id === config.selected\"\n            class=\"content\"\n          >\n            {{ cont.value || '' | translate }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }], tab: [{
                type: Input
            }], size: [{
                type: Input
            }], selected: [{
                type: Input
            }], showContent: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL3RhYnMvdGFicy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL3RhYnMvdGFicy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQW1CbEQsTUFBTSxPQUFPLGFBQWE7SUFheEIsWUFDVSxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQWI1QixXQUFNLEdBQWtCO1lBQy9CLEVBQUUsRUFBRSxFQUFFO1lBQ04sV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQU9RLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUloRCxDQUFDO0lBRUosUUFBUTtRQUNOLGdEQUFnRDtRQUNoRCxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxHQUFHO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUdqRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsVUFBZTtRQUN6QixJQUFJLFVBQVU7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxzQkFBc0I7UUFFekUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRTtZQUN6QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDOUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDeEM7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7OzJHQTVDVSxhQUFhOytGQUFiLGFBQWEscU5DcEIxQiwrakNBdUNBOzRGRG5CYSxhQUFhO2tCQUp6QixTQUFTOytCQUNFLGtCQUFrQjt1R0FJbkIsTUFBTTtzQkFBZCxLQUFLO2dCQUlHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRFNTaXplcyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb25zdGFudHMvamwtY29tcG9uZW50cy5jb25zdGFudHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuZXhwb3J0IGludGVyZmFjZSBJVGFiTmF2Q29uZmlnIHtcbiAgaWQ6IHN0cmluZztcbiAgdGFiPzogSVRhYkNvbmZpZ1tdO1xuICBzaXplPzoga2V5b2YgdHlwZW9mIERTU2l6ZXM7XG4gIHNlbGVjdGVkPzogc3RyaW5nO1xuICBzaG93Q29udGVudD86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElUYWJDb25maWcge1xuICBpZD86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpcmNjLWNsLWxpYi10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb25maWc6IElUYWJOYXZDb25maWcgPSB7XG4gICAgaWQ6ICcnLFxuICAgIHNob3dDb250ZW50OiB0cnVlXG4gIH07XG4gIEBJbnB1dCgpIGlkPzogc3RyaW5nO1xuICBASW5wdXQoKSB0YWI/OiBJVGFiQ29uZmlnW107XG4gIEBJbnB1dCgpIHNpemU/OiBrZXlvZiB0eXBlb2YgRFNTaXplcztcbiAgQElucHV0KCkgc2VsZWN0ZWQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3dDb250ZW50PzogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9zZXQgY29uZmlnIGZyb20gaW5kaXZpZHVhbCBvcHRpb25zLCBpZiBwcmVzZW50XG4gICAgaWYgKHRoaXMuaWQpIHRoaXMuY29uZmlnLmlkID0gdGhpcy5pZDtcbiAgICBpZiAodGhpcy50YWIpIHRoaXMuY29uZmlnLnRhYiA9IHRoaXMudGFiO1xuICAgIGlmICh0aGlzLnNpemUpIHRoaXMuY29uZmlnLnNpemUgPSB0aGlzLnNpemU7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHRoaXMuY29uZmlnLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICBpZiAodGhpcy5zaG93Q29udGVudCkgdGhpcy5jb25maWcuc2hvd0NvbnRlbnQgPSB0aGlzLnNob3dDb250ZW50O1xuXG5cbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0ZWQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmNvbmZpZy50YWIpIHtcbiAgICAgIHRoaXMuY29uZmlnLnNlbGVjdGVkID0gdGhpcy5jb25maWcudGFiWzBdLmlkO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuY29uZmlnLnNlbGVjdGVkKTtcbiAgICB9XG4gIH1cblxuICBzZXRTZWxlY3RlZChzZWxlY3RlZElEOiBhbnkpIHtcbiAgICBpZiAoc2VsZWN0ZWRJRCkgdGhpcy5jb25maWcuc2VsZWN0ZWQgPSBzZWxlY3RlZElEOyAvL3NldCB0aGUgc2VsZWN0ZWQgdGFiXG5cbiAgICBpZiAodGhpcy5jb25maWc/LnNlbGVjdGVkKSB7XG4gICAgICBsZXQgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb25maWc/LnNlbGVjdGVkKTtcbiAgICAgIGxldCB4ID0gdGFiPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLW5hdicpKSB7XG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1uYXYnKTtcbiAgICAgICAgbmF2ICYmIHggPyAobmF2LnNjcm9sbExlZnQgPSB4KSA6IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoc2VsZWN0ZWRJRCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwie3sgY29uZmlnLnNpemUgfX1cIj5cbiAgPG5hdiBjbGFzcz1cInBhZ2UtbmF2XCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgdmFsIG9mIGNvbmZpZy50YWJcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgKm5nSWY9XCJ2YWwuaWQgPT09IGNvbmZpZy5zZWxlY3RlZFwiXG4gICAgICAgIHNlbGVjdGVkXG4gICAgICAgIGNsYXNzPVwidGFicy1idG5cIlxuICAgICAgICBbaWRdPVwidmFsLmlkXCJcbiAgICAgICAgKGNsaWNrKT1cInNldFNlbGVjdGVkKHZhbC5pZClcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInZhbC50aXRsZSArICcgc2VsZWN0ZWQnXCJcbiAgICAgID5cbiAgICAgICAge3sgdmFsLnRpdGxlIHx8ICcnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgKm5nSWY9XCJ2YWwuaWQgIT09IGNvbmZpZy5zZWxlY3RlZFwiXG4gICAgICAgIGNsYXNzPVwidGFicy1idG5cIlxuICAgICAgICBbaWRdPVwidmFsLmlkXCJcbiAgICAgICAgKGNsaWNrKT1cInNldFNlbGVjdGVkKHZhbC5pZClcIlxuICAgICAgPlxuICAgICAgICB7eyB2YWwudGl0bGUgfHwgJycgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L25hdj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5zaG93Q29udGVudCA9PT0gdHJ1ZVwiPlxuICAgIDxiciAvPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLW1lbnUtY29udGVudFwiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb250IG9mIGNvbmZpZy50YWJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdJZj1cImNvbnQuaWQgPT09IGNvbmZpZy5zZWxlY3RlZFwiXG4gICAgICAgICAgICBjbGFzcz1cImNvbnRlbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGNvbnQudmFsdWUgfHwgJycgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==