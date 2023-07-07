//TODO: Add detailed readme listing how this actually works. People will be SOOOO confused.
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class NavigationService {
    constructor() {
        //Used entirely as a workaround for the change detection limitations
        this.itemChangeSubj = new Subject();
        this.itemChangeObs$ = this.itemChangeSubj.asObservable();
        this.navEventSubj = new Subject();
        this.navEventObs$ = this.navEventSubj.asObservable(); //Use this for any events we need propagated up to parents
        this.navConfigSubj = new BehaviorSubject({
            id: '',
            label: '',
            iconLeading: '',
            iconTrailing: '',
            height: '',
            size: 'small',
            scrolling: false,
            marginTop: 0,
            navigationConfig: []
        });
        this.navConfigObs$ = this.navConfigSubj.asObservable();
        this.flattenedNavigation = [];
        /**
         * Flatten an object into a simple array
         * @param obj object being flattened
         * @returns flattened array
         */
        this.flatten = (obj) => {
            const stack = [obj];
            let stackB = [];
            while (stack?.length > 0) {
                const currentObj = stack.pop();
                if (!Array.isArray(currentObj)) {
                    stackB.push(currentObj);
                }
                Object.keys(currentObj).forEach((key) => {
                    if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
                        stack.push(currentObj[key]);
                    }
                });
            }
            return stackB;
        };
        /**
         *
         * @param items flattened array
         * @param key of the key value pair ('id')
         * @param value id of the piece being searched for (update.id)
         * @returns
         */
        this.findByKey = (items, key, value) => {
            let returnItem = {
                id: '',
                label: '',
                type: 'accordion',
                children: []
            };
            returnItem = items.find((element) => element[key] === value) || {
                id: '',
                label: '',
                type: 'accordion',
                children: []
            };
            return returnItem;
        };
        /**
         * Replace the contents of one object with those of another. This is done to keep our
         * memory trick going
         * @param obj1 object being updated
         * @param obj2 values to put in obj1
         */
        this.setNavItemFields = (obj1, obj2) => {
            Object.keys(obj2).forEach((key) => {
                obj1[key] = obj2[key];
            });
        };
    }
    /**
     * Broadcast the config object of the value and flatten the array
     * @param update: INavigationConfig
     */
    setNavConfig(update) {
        this.navConfigSubj.next(update);
        this.flattenedNavigation = this.flatten(update);
    }
    /**
     * General broadcast of an element update
     * @param event
     */
    setNavItem(update) {
        this.setNavItemFields(this.findByKey(this.flattenedNavigation, 'id', update.id), update);
        this.itemChangeSubj.next(update.id); //This is used to get around a change detection problem in the various child components
    }
    /**
     * Broadcast element events
     * @param event: INavItemEvent where id is the id of the component broadcasting and event is the Event
     */
    navEvent(event) {
        this.navEventSubj.next(event);
    }
}
NavigationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NavigationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NavigationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NavigationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NavigationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL3NoYXJlZC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRkFBMkY7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFpQmhELE1BQU0sT0FBTyxpQkFBaUI7SUFIOUI7UUFJRSxvRUFBb0U7UUFDNUQsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQy9DLG1CQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU1QyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO1FBQ3BELGlCQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLDBEQUEwRDtRQUVuRyxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFvQjtZQUM3RCxFQUFFLEVBQUUsRUFBRTtZQUNOLEtBQUssRUFBRSxFQUFFO1lBQ1QsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLENBQUM7WUFDWixnQkFBZ0IsRUFBRSxFQUFFO1NBQ3JCLENBQUMsQ0FBQztRQUNILGtCQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVsRCx3QkFBbUIsR0FBMkIsRUFBRSxDQUFDO1FBb0NqRDs7OztXQUlHO1FBQ0ssWUFBTyxHQUFHLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDN0IsTUFBTSxLQUFLLEdBQUcs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IGRldGFpbGVkIHJlYWRtZSBsaXN0aW5nIGhvdyB0aGlzIGFjdHVhbGx5IHdvcmtzLiBQZW9wbGUgd2lsbCBiZSBTT09PTyBjb25mdXNlZC5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgSU5hdmlnYXRpb25Db25maWcsXG4gIElOYXZpZ2F0aW9uSXRlbSxcbiAgSU5hdmlnYXRpb25JdGVtQWNjb3JkaW9uLFxuICBJTmF2aWdhdGlvbkl0ZW1IZWFkaW5nLFxuICBJTmF2aWdhdGlvbkl0ZW1MaW5rXG59IGZyb20gJy4vbmF2aWdhdGlvbi50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5hdkl0ZW1FdmVudCB7XG4gIGlkOiBzdHJpbmc7XG4gIGV2ZW50OiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgLy9Vc2VkIGVudGlyZWx5IGFzIGEgd29ya2Fyb3VuZCBmb3IgdGhlIGNoYW5nZSBkZXRlY3Rpb24gbGltaXRhdGlvbnNcbiAgcHJpdmF0ZSBpdGVtQ2hhbmdlU3ViaiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgaXRlbUNoYW5nZU9icyQgPSB0aGlzLml0ZW1DaGFuZ2VTdWJqLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgbmF2RXZlbnRTdWJqID0gbmV3IFN1YmplY3Q8SU5hdkl0ZW1FdmVudD4oKTtcbiAgbmF2RXZlbnRPYnMkID0gdGhpcy5uYXZFdmVudFN1YmouYXNPYnNlcnZhYmxlKCk7IC8vVXNlIHRoaXMgZm9yIGFueSBldmVudHMgd2UgbmVlZCBwcm9wYWdhdGVkIHVwIHRvIHBhcmVudHNcblxuICBwcml2YXRlIG5hdkNvbmZpZ1N1YmogPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElOYXZpZ2F0aW9uQ29uZmlnPih7XG4gICAgaWQ6ICcnLFxuICAgIGxhYmVsOiAnJyxcbiAgICBpY29uTGVhZGluZzogJycsXG4gICAgaWNvblRyYWlsaW5nOiAnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHNpemU6ICdzbWFsbCcsXG4gICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICBtYXJnaW5Ub3A6IDAsXG4gICAgbmF2aWdhdGlvbkNvbmZpZzogW11cbiAgfSk7XG4gIG5hdkNvbmZpZ09icyQgPSB0aGlzLm5hdkNvbmZpZ1N1YmouYXNPYnNlcnZhYmxlKCk7XG5cbiAgZmxhdHRlbmVkTmF2aWdhdGlvbjogQXJyYXk8SU5hdmlnYXRpb25JdGVtPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBCcm9hZGNhc3QgdGhlIGNvbmZpZyBvYmplY3Qgb2YgdGhlIHZhbHVlIGFuZCBmbGF0dGVuIHRoZSBhcnJheVxuICAgKiBAcGFyYW0gdXBkYXRlOiBJTmF2aWdhdGlvbkNvbmZpZ1xuICAgKi9cbiAgc2V0TmF2Q29uZmlnKHVwZGF0ZTogSU5hdmlnYXRpb25Db25maWcpIHtcbiAgICB0aGlzLm5hdkNvbmZpZ1N1YmoubmV4dCh1cGRhdGUpO1xuICAgIHRoaXMuZmxhdHRlbmVkTmF2aWdhdGlvbiA9IHRoaXMuZmxhdHRlbih1cGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYWwgYnJvYWRjYXN0IG9mIGFuIGVsZW1lbnQgdXBkYXRlXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgc2V0TmF2SXRlbShcbiAgICB1cGRhdGU6XG4gICAgICB8IElOYXZpZ2F0aW9uSXRlbUxpbmtcbiAgICAgIHwgSU5hdmlnYXRpb25JdGVtQWNjb3JkaW9uXG4gICAgICB8IElOYXZpZ2F0aW9uSXRlbUhlYWRpbmdcbiAgKSB7XG4gICAgdGhpcy5zZXROYXZJdGVtRmllbGRzKFxuICAgICAgdGhpcy5maW5kQnlLZXkodGhpcy5mbGF0dGVuZWROYXZpZ2F0aW9uLCAnaWQnLCB1cGRhdGUuaWQpLFxuICAgICAgdXBkYXRlXG4gICAgKTtcbiAgICB0aGlzLml0ZW1DaGFuZ2VTdWJqLm5leHQodXBkYXRlLmlkKTsgLy9UaGlzIGlzIHVzZWQgdG8gZ2V0IGFyb3VuZCBhIGNoYW5nZSBkZXRlY3Rpb24gcHJvYmxlbSBpbiB0aGUgdmFyaW91cyBjaGlsZCBjb21wb25lbnRzXG4gIH1cblxuICAvKipcbiAgICogQnJvYWRjYXN0IGVsZW1lbnQgZXZlbnRzXG4gICAqIEBwYXJhbSBldmVudDogSU5hdkl0ZW1FdmVudCB3aGVyZSBpZCBpcyB0aGUgaWQgb2YgdGhlIGNvbXBvbmVudCBicm9hZGNhc3RpbmcgYW5kIGV2ZW50IGlzIHRoZSBFdmVudFxuICAgKi9cbiAgbmF2RXZlbnQoZXZlbnQ6IElOYXZJdGVtRXZlbnQpIHtcbiAgICB0aGlzLm5hdkV2ZW50U3Viai5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGbGF0dGVuIGFuIG9iamVjdCBpbnRvIGEgc2ltcGxlIGFycmF5XG4gICAqIEBwYXJhbSBvYmogb2JqZWN0IGJlaW5nIGZsYXR0ZW5lZFxuICAgKiBAcmV0dXJucyBmbGF0dGVuZWQgYXJyYXlcbiAgICovXG4gIHByaXZhdGUgZmxhdHRlbiA9IChvYmo6IGFueSkgPT4ge1xuICAgIGNvbnN0IHN0YWNrID0gW29ial07XG4gICAgbGV0IHN0YWNrQiA9IFtdO1xuICAgIHdoaWxlIChzdGFjaz8ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY3VycmVudE9iaiA9IHN0YWNrLnBvcCgpO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGN1cnJlbnRPYmopKSB7XG4gICAgICAgIHN0YWNrQi5wdXNoKGN1cnJlbnRPYmopO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoY3VycmVudE9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudE9ialtrZXldID09PSAnb2JqZWN0JyAmJiBjdXJyZW50T2JqW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdGFjay5wdXNoKGN1cnJlbnRPYmpba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhY2tCO1xuICB9O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbXMgZmxhdHRlbmVkIGFycmF5XG4gICAqIEBwYXJhbSBrZXkgb2YgdGhlIGtleSB2YWx1ZSBwYWlyICgnaWQnKVxuICAgKiBAcGFyYW0gdmFsdWUgaWQgb2YgdGhlIHBpZWNlIGJlaW5nIHNlYXJjaGVkIGZvciAodXBkYXRlLmlkKVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHJpdmF0ZSBmaW5kQnlLZXkgPSAoXG4gICAgaXRlbXM6IEFycmF5PElOYXZpZ2F0aW9uSXRlbT4sXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWU6IHN0cmluZ1xuICApID0+IHtcbiAgICBsZXQgcmV0dXJuSXRlbTogSU5hdmlnYXRpb25JdGVtID0ge1xuICAgICAgaWQ6ICcnLFxuICAgICAgbGFiZWw6ICcnLFxuICAgICAgdHlwZTogJ2FjY29yZGlvbicsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9O1xuICAgIHJldHVybkl0ZW0gPSBpdGVtcy5maW5kKChlbGVtZW50OiBhbnkpID0+IGVsZW1lbnRba2V5XSA9PT0gdmFsdWUpIHx8IHtcbiAgICAgIGlkOiAnJyxcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIHR5cGU6ICdhY2NvcmRpb24nLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfTtcbiAgICByZXR1cm4gcmV0dXJuSXRlbTtcbiAgfTtcblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgY29udGVudHMgb2Ygb25lIG9iamVjdCB3aXRoIHRob3NlIG9mIGFub3RoZXIuIFRoaXMgaXMgZG9uZSB0byBrZWVwIG91clxuICAgKiBtZW1vcnkgdHJpY2sgZ29pbmdcbiAgICogQHBhcmFtIG9iajEgb2JqZWN0IGJlaW5nIHVwZGF0ZWRcbiAgICogQHBhcmFtIG9iajIgdmFsdWVzIHRvIHB1dCBpbiBvYmoxXG4gICAqL1xuICBwcml2YXRlIHNldE5hdkl0ZW1GaWVsZHMgPSAob2JqMTogSU5hdmlnYXRpb25JdGVtLCBvYmoyOiBJTmF2aWdhdGlvbkl0ZW0pID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmoyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIG9iajFba2V5XSA9IG9iajJba2V5XTtcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==