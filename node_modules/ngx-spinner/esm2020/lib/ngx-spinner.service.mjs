import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
import { NgxSpinner, PRIMARY_SPINNER } from "./ngx-spinner.enum";
import * as i0 from "@angular/core";
export class NgxSpinnerService {
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    constructor() {
        /**
         * Spinner observable
         *
         * @memberof NgxSpinnerService
         */
        // private spinnerObservable = new ReplaySubject<NgxSpinner>(1);
        this.spinnerObservable = new BehaviorSubject(null);
    }
    /**
     * Get subscription of desired spinner
     * @memberof NgxSpinnerService
     **/
    getSpinner(name) {
        return this.spinnerObservable
            .asObservable()
            .pipe(filter((x) => x && x.name === name));
    }
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    show(name = PRIMARY_SPINNER, spinner) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                if (spinner && Object.keys(spinner).length) {
                    spinner["name"] = name;
                    this.spinnerObservable.next(new NgxSpinner({ ...spinner, show: true }));
                    resolve(true);
                }
                else {
                    this.spinnerObservable.next(new NgxSpinner({ name, show: true }));
                    resolve(true);
                }
            }, 10);
        });
    }
    /**
     * To hide spinner
     *
     * @memberof NgxSpinnerService
     */
    hide(name = PRIMARY_SPINNER, debounce = 10) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                this.spinnerObservable.next(new NgxSpinner({ name, show: false }));
                resolve(true);
            }, debounce);
        });
    }
}
NgxSpinnerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxSpinnerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxSpinnerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxSpinnerService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxSpinnerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcGlubmVyL3NyYy9saWIvbmd4LXNwaW5uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFXLE1BQU0sb0JBQW9CLENBQUM7O0FBSzFFLE1BQU0sT0FBTyxpQkFBaUI7SUFRNUI7OztPQUdHO0lBQ0g7UUFYQTs7OztXQUlHO1FBQ0gsZ0VBQWdFO1FBQ3pELHNCQUFpQixHQUFHLElBQUksZUFBZSxDQUFhLElBQUksQ0FBQyxDQUFDO0lBS2xELENBQUM7SUFDaEI7OztRQUdJO0lBQ0osVUFBVSxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsaUJBQWlCO2FBQzFCLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsT0FBZSxlQUFlLEVBQUUsT0FBaUI7UUFDcEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUN0QyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUMxQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUN6QixJQUFJLFVBQVUsQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMzQyxDQUFDO29CQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDZjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDZjtZQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsT0FBZSxlQUFlLEVBQUUsV0FBbUIsRUFBRTtRQUN4RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs4R0F2RFUsaUJBQWlCO2tIQUFqQixpQkFBaUIsY0FGaEIsTUFBTTsyRkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBOZ3hTcGlubmVyLCBQUklNQVJZX1NQSU5ORVIsIFNwaW5uZXIgfSBmcm9tIFwiLi9uZ3gtc3Bpbm5lci5lbnVtXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIE5neFNwaW5uZXJTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFNwaW5uZXIgb2JzZXJ2YWJsZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICovXG4gIC8vIHByaXZhdGUgc3Bpbm5lck9ic2VydmFibGUgPSBuZXcgUmVwbGF5U3ViamVjdDxOZ3hTcGlubmVyPigxKTtcbiAgcHVibGljIHNwaW5uZXJPYnNlcnZhYmxlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOZ3hTcGlubmVyPihudWxsKTtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTmd4U3Bpbm5lclNlcnZpY2UuXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7fVxuICAvKipcbiAgICogR2V0IHN1YnNjcmlwdGlvbiBvZiBkZXNpcmVkIHNwaW5uZXJcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqKi9cbiAgZ2V0U3Bpbm5lcihuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5neFNwaW5uZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zcGlubmVyT2JzZXJ2YWJsZVxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShmaWx0ZXIoKHg6IE5neFNwaW5uZXIpID0+IHggJiYgeC5uYW1lID09PSBuYW1lKSk7XG4gIH1cbiAgLyoqXG4gICAqIFRvIHNob3cgc3Bpbm5lclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICovXG4gIHNob3cobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSLCBzcGlubmVyPzogU3Bpbm5lcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgX3JlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChzcGlubmVyICYmIE9iamVjdC5rZXlzKHNwaW5uZXIpLmxlbmd0aCkge1xuICAgICAgICAgIHNwaW5uZXJbXCJuYW1lXCJdID0gbmFtZTtcbiAgICAgICAgICB0aGlzLnNwaW5uZXJPYnNlcnZhYmxlLm5leHQoXG4gICAgICAgICAgICBuZXcgTmd4U3Bpbm5lcih7IC4uLnNwaW5uZXIsIHNob3c6IHRydWUgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5uZXh0KG5ldyBOZ3hTcGlubmVyKHsgbmFtZSwgc2hvdzogdHJ1ZSB9KSk7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBUbyBoaWRlIHNwaW5uZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICBoaWRlKG5hbWU6IHN0cmluZyA9IFBSSU1BUllfU1BJTk5FUiwgZGVib3VuY2U6IG51bWJlciA9IDEwKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5uZXh0KG5ldyBOZ3hTcGlubmVyKHsgbmFtZSwgc2hvdzogZmFsc2UgfSkpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfSwgZGVib3VuY2UpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=