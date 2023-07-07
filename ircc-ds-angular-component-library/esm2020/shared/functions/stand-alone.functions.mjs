import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class StandAloneFunctions {
    constructor(translate) {
        this.translate = translate;
    }
    getErrorAria(formGroup, id, errorMessages) {
        let returnError = '';
        if (formGroup.get(id)?.dirty && formGroup.get(id)?.invalid) {
            errorMessages?.forEach((error) => {
                if (formGroup.get(id)?.errors?.[error.key]) {
                    returnError === ''
                        ? (returnError += this.translate.instant(error.errorLOV))
                        : (returnError += ', ' + this.translate.instant(error.errorLOV));
                }
            });
            returnError += '.';
        }
        return returnError;
    }
    /**
     * When run, returns an IErrorIds object. It generates IDs based on the errorMessages object
     * and which errors are currently in effect, thereby ensuring that the first element is given
     * an id ending in _error0
     * @param formGroup
     * @param id of the parent (input) component
     * @param errorMessages: IErrorPairs[]
     * @returns errorIds: IErrorIDs[]
     */
    getErrorIds(formGroup, id, errorMessages) {
        let errorIds = [];
        errorMessages?.forEach((message) => {
            errorIds.push({ key: message.key, errorLOV: message.errorLOV });
        });
        //Code block to get errors that have occurred before the statusChange obs is activated
        let i = 0;
        errorIds.forEach((error) => {
            if (formGroup.get(id)?.errors?.[error.key]) {
                error.id = id + '_error' + i;
                i++;
            }
        });
        formGroup.get(id)?.statusChanges.subscribe((change) => {
            let i = 0;
            errorIds.forEach((error) => {
                if (formGroup.get(id)?.errors?.[error.key]) {
                    error.id = id + '_error' + i;
                    i++;
                }
            });
        });
        return errorIds;
    }
    /**
     * Create a label config - for use inside form input components
     * @param formGroup
     * @param id
     * @param parentID
     * @param errorMessages
     * @param label
     * @param desc
     * @param hint
     * @param required
     */
    makeLabelConfig(formGroup, parentID, errorMessages, label, desc, hint, required, iconButton, topLabel) {
        const config = {
            formGroup: formGroup,
            parentID: parentID,
            errorMessages: errorMessages,
            label: label,
            desc: desc,
            hint: hint,
            required: required,
            iconButton: iconButton,
            topLabel: topLabel
        };
        return config;
    }
    /**
     * A function designed to deal with how AWFUL Safari is. Safari does not consider touched to be a valid state in <body>,
     * therefore this is needed to force it to acknowledge the state.
     * @param formGroup
     * @param id of the parent (input) component
     */
    wasTouched(formGroup, id) {
        formGroup.get(id)?.markAsTouched();
    }
    /**
     * Get the current base url.
     * @param baseUrl
     * @param baseUrlKey Translation key of base url
     */
    getBaseUrl(baseUrl = '', baseUrlKey) {
        const curLang = this.translate.currentLang;
        const langKey = curLang === 'en-US' || curLang === 'en' ? 'en' : 'fr';
        let i = window.location.href.slice(window.location.href.indexOf(langKey), window.location.href.length);
        i = i.split('/');
        let index = 0;
        for (const j of i) {
            if (j === this.translate.instant(baseUrlKey ?? '')) {
                baseUrl += '/' + j;
                // Should halt when find the base url segment
                break;
            }
            else if (index !== i.length - 1) {
                baseUrl += '/' + j;
                index += 1;
            }
        }
        if (baseUrl[baseUrl.length] !== '/')
            baseUrl += '/';
        return baseUrl;
    }
}
StandAloneFunctions.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StandAloneFunctions, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable });
StandAloneFunctions.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StandAloneFunctions, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StandAloneFunctions, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmQtYWxvbmUuZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvc2hhcmVkL2Z1bmN0aW9ucy9zdGFuZC1hbG9uZS5mdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBa0IzQyxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCxZQUFZLENBQUMsU0FBb0IsRUFBRSxFQUFVLEVBQUUsYUFBNEI7UUFDekUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUU7WUFDMUQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUMvQixJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMxQyxXQUFXLEtBQUssRUFBRTt3QkFDaEIsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDekQsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDcEU7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILFdBQVcsSUFBSSxHQUFHLENBQUM7U0FDcEI7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixD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QUNGLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRTtnQkFDbEQsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLDZDQUE2QztnQkFDN0MsTUFBTTthQUNQO2lCQUFNLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsS0FBSyxJQUFJLENBQUMsQ0FBQzthQUNaO1NBQ0Y7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRztZQUFFLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFFcEQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7aUhBaElVLG1CQUFtQjtxSEFBbkIsbUJBQW1CLGNBRmxCLE1BQU07NEZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7XG4gIElMYWJlbENvbmZpZyxcbiAgSUxhYmVsSWNvbkNvbmZpZ1xufSBmcm9tICcuLi8uLi9saWIvc2hhcmVkL2xhYmVsL2xhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJRXJyb3JQYWlycyB9IGZyb20gJy4uL2ludGVyZmFjZXMvY29tcG9uZW50LWNvbmZpZ3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvcklEcyB7XG4gIGlkPzogc3RyaW5nO1xuICBrZXk6IHN0cmluZztcbiAgZXJyb3JMT1Y6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RhbmRBbG9uZUZ1bmN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuXG4gIGdldEVycm9yQXJpYShmb3JtR3JvdXA6IEZvcm1Hcm91cCwgaWQ6IHN0cmluZywgZXJyb3JNZXNzYWdlczogSUVycm9yUGFpcnNbXSkge1xuICAgIGxldCByZXR1cm5FcnJvciA9ICcnO1xuICAgIGlmIChmb3JtR3JvdXAuZ2V0KGlkKT8uZGlydHkgJiYgZm9ybUdyb3VwLmdldChpZCk/LmludmFsaWQpIHtcbiAgICAgIGVycm9yTWVzc2FnZXM/LmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChmb3JtR3JvdXAuZ2V0KGlkKT8uZXJyb3JzPy5bZXJyb3Iua2V5XSkge1xuICAgICAgICAgIHJldHVybkVycm9yID09PSAnJ1xuICAgICAgICAgICAgPyAocmV0dXJuRXJyb3IgKz0gdGhpcy50cmFuc2xhdGUuaW5zdGFudChlcnJvci5lcnJvckxPVikpXG4gICAgICAgICAgICA6IChyZXR1cm5FcnJvciArPSAnLCAnICsgdGhpcy50cmFuc2xhdGUuaW5zdGFudChlcnJvci5lcnJvckxPVikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybkVycm9yICs9ICcuJztcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkVycm9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gcnVuLCByZXR1cm5zIGFuIElFcnJvcklkcyBvYmplY3QuIEl0IGdlbmVyYXRlcyBJRHMgYmFzZWQgb24gdGhlIGVycm9yTWVzc2FnZXMgb2JqZWN0XG4gICAqIGFuZCB3aGljaCBlcnJvcnMgYXJlIGN1cnJlbnRseSBpbiBlZmZlY3QsIHRoZXJlYnkgZW5zdXJpbmcgdGhhdCB0aGUgZmlyc3QgZWxlbWVudCBpcyBnaXZlblxuICAgKiBhbiBpZCBlbmRpbmcgaW4gX2Vycm9yMFxuICAgKiBAcGFyYW0gZm9ybUdyb3VwXG4gICAqIEBwYXJhbSBpZCBvZiB0aGUgcGFyZW50IChpbnB1dCkgY29tcG9uZW50XG4gICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VzOiBJRXJyb3JQYWlyc1tdXG4gICAqIEByZXR1cm5zIGVycm9ySWRzOiBJRXJyb3JJRHNbXVxuICAgKi9cbiAgZ2V0RXJyb3JJZHMoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGlkOiBzdHJpbmcsIGVycm9yTWVzc2FnZXM6IElFcnJvclBhaXJzW10pIHtcbiAgICBsZXQgZXJyb3JJZHM6IElFcnJvcklEc1tdID0gW107XG4gICAgZXJyb3JNZXNzYWdlcz8uZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgZXJyb3JJZHMucHVzaCh7IGtleTogbWVzc2FnZS5rZXksIGVycm9yTE9WOiBtZXNzYWdlLmVycm9yTE9WIH0pO1xuICAgIH0pO1xuXG4gICAgLy9Db2RlIGJsb2NrIHRvIGdldCBlcnJvcnMgdGhhdCBoYXZlIG9jY3VycmVkIGJlZm9yZSB0aGUgc3RhdHVzQ2hhbmdlIG9icyBpcyBhY3RpdmF0ZWRcbiAgICBsZXQgaSA9IDA7XG4gICAgZXJyb3JJZHMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGlmIChmb3JtR3JvdXAuZ2V0KGlkKT8uZXJyb3JzPy5bZXJyb3Iua2V5XSkge1xuICAgICAgICBlcnJvci5pZCA9IGlkICsgJ19lcnJvcicgKyBpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3JtR3JvdXAuZ2V0KGlkKT8uc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKGNoYW5nZSkgPT4ge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZXJyb3JJZHMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGZvcm1Hcm91cC5nZXQoaWQpPy5lcnJvcnM/LltlcnJvci5rZXldKSB7XG4gICAgICAgICAgZXJyb3IuaWQgPSBpZCArICdfZXJyb3InICsgaTtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBlcnJvcklkcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsYWJlbCBjb25maWcgLSBmb3IgdXNlIGluc2lkZSBmb3JtIGlucHV0IGNvbXBvbmVudHNcbiAgICogQHBhcmFtIGZvcm1Hcm91cFxuICAgKiBAcGFyYW0gaWRcbiAgICogQHBhcmFtIHBhcmVudElEXG4gICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VzXG4gICAqIEBwYXJhbSBsYWJlbFxuICAgKiBAcGFyYW0gZGVzY1xuICAgKiBAcGFyYW0gaGludFxuICAgKiBAcGFyYW0gcmVxdWlyZWRcbiAgICovXG4gIG1ha2VMYWJlbENvbmZpZyhcbiAgICBmb3JtR3JvdXA6IEZvcm1Hcm91cCxcbiAgICBwYXJlbnRJRDogc3RyaW5nLFxuICAgIGVycm9yTWVzc2FnZXM/OiBJRXJyb3JQYWlyc1tdLFxuICAgIGxhYmVsPzogc3RyaW5nLFxuICAgIGRlc2M/OiBzdHJpbmcsXG4gICAgaGludD86IHN0cmluZyxcbiAgICByZXF1aXJlZD86IGJvb2xlYW4sXG4gICAgaWNvbkJ1dHRvbj86IElMYWJlbEljb25Db25maWcsXG4gICAgdG9wTGFiZWw/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3QgY29uZmlnOiBJTGFiZWxDb25maWcgPSB7XG4gICAgICBmb3JtR3JvdXA6IGZvcm1Hcm91cCxcbiAgICAgIHBhcmVudElEOiBwYXJlbnRJRCxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGVycm9yTWVzc2FnZXMsXG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICBkZXNjOiBkZXNjLFxuICAgICAgaGludDogaGludCxcbiAgICAgIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgICAgIGljb25CdXR0b246IGljb25CdXR0b24sXG4gICAgICB0b3BMYWJlbDogdG9wTGFiZWxcbiAgICB9O1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBkZXNpZ25lZCB0byBkZWFsIHdpdGggaG93IEFXRlVMIFNhZmFyaSBpcy4gU2FmYXJpIGRvZXMgbm90IGNvbnNpZGVyIHRvdWNoZWQgdG8gYmUgYSB2YWxpZCBzdGF0ZSBpbiA8Ym9keT4sXG4gICAqIHRoZXJlZm9yZSB0aGlzIGlzIG5lZWRlZCB0byBmb3JjZSBpdCB0byBhY2tub3dsZWRnZSB0aGUgc3RhdGUuXG4gICAqIEBwYXJhbSBmb3JtR3JvdXBcbiAgICogQHBhcmFtIGlkIG9mIHRoZSBwYXJlbnQgKGlucHV0KSBjb21wb25lbnRcbiAgICovXG4gIHdhc1RvdWNoZWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGlkOiBzdHJpbmcpIHtcbiAgICBmb3JtR3JvdXAuZ2V0KGlkKT8ubWFya0FzVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBiYXNlIHVybC5cbiAgICogQHBhcmFtIGJhc2VVcmxcbiAgICogQHBhcmFtIGJhc2VVcmxLZXkgVHJhbnNsYXRpb24ga2V5IG9mIGJhc2UgdXJsXG4gICAqL1xuICBnZXRCYXNlVXJsKGJhc2VVcmw6IHN0cmluZyA9ICcnLCBiYXNlVXJsS2V5Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjdXJMYW5nID0gdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmc7XG4gICAgY29uc3QgbGFuZ0tleSA9IGN1ckxhbmcgPT09ICdlbi1VUycgfHwgY3VyTGFuZyA9PT0gJ2VuJyA/ICdlbicgOiAnZnInO1xuICAgIGxldCBpOiBzdHJpbmcgfCBzdHJpbmdbXSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKFxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihsYW5nS2V5KSxcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmxlbmd0aFxuICAgICk7XG4gICAgaSA9IGkuc3BsaXQoJy8nKTtcblxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBqIG9mIGkpIHtcbiAgICAgIGlmIChqID09PSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KGJhc2VVcmxLZXkgPz8gJycpKSB7XG4gICAgICAgIGJhc2VVcmwgKz0gJy8nICsgajtcbiAgICAgICAgLy8gU2hvdWxkIGhhbHQgd2hlbiBmaW5kIHRoZSBiYXNlIHVybCBzZWdtZW50XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCAhPT0gaS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGJhc2VVcmwgKz0gJy8nICsgajtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJhc2VVcmxbYmFzZVVybC5sZW5ndGhdICE9PSAnLycpIGJhc2VVcmwgKz0gJy8nO1xuXG4gICAgcmV0dXJuIGJhc2VVcmw7XG4gIH1cbn1cbiJdfQ==