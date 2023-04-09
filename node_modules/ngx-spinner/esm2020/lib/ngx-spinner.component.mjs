import { Component, Input, ChangeDetectionStrategy, HostListener, ViewChild, Optional, Inject, } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { LOADERS, DEFAULTS, NgxSpinner, PRIMARY_SPINNER, } from "./ngx-spinner.enum";
import { trigger, state, style, transition, animate, } from "@angular/animations";
import { NGX_SPINNER_CONFIG } from "./config";
import * as i0 from "@angular/core";
import * as i1 from "./ngx-spinner.service";
import * as i2 from "@angular/common";
import * as i3 from "./safe-html.pipe";
export class NgxSpinnerComponent {
    /**
     * Creates an instance of NgxSpinnerComponent.
     *
     * @memberof NgxSpinnerComponent
     */
    constructor(spinnerService, changeDetector, elementRef, globalConfig) {
        this.spinnerService = spinnerService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.globalConfig = globalConfig;
        /**
         * To enable/disable animation
         *
         * @type {boolean}
         * @memberof NgxSpinnerComponent
         */
        this.disableAnimation = false;
        /**
         * Spinner Object
         *
         * @memberof NgxSpinnerComponent
         */
        this.spinner = new NgxSpinner();
        /**
         * Unsubscribe from spinner's observable
         *
         * @memberof NgxSpinnerComponent
         **/
        this.ngUnsubscribe = new Subject();
        /**
         * To set default ngx-spinner options
         *
         * @memberof NgxSpinnerComponent
         */
        this.setDefaultOptions = () => {
            const { type } = this.globalConfig ?? {};
            this.spinner = NgxSpinner.create({
                name: this.name,
                bdColor: this.bdColor,
                size: this.size,
                color: this.color,
                type: this.type ?? type,
                fullScreen: this.fullScreen,
                divArray: this.divArray,
                divCount: this.divCount,
                show: this.show,
                zIndex: this.zIndex,
                template: this.template,
                showSpinner: this.showSpinner,
            });
        };
        this.bdColor = DEFAULTS.BD_COLOR;
        this.zIndex = DEFAULTS.Z_INDEX;
        this.color = DEFAULTS.SPINNER_COLOR;
        this.size = "large";
        this.fullScreen = true;
        this.name = PRIMARY_SPINNER;
        this.template = null;
        this.showSpinner = false;
        this.divArray = [];
        this.divCount = 0;
        this.show = false;
    }
    handleKeyboardEvent(event) {
        if (this.spinnerDOM && this.spinnerDOM.nativeElement) {
            if (this.fullScreen ||
                (!this.fullScreen && this.isSpinnerZone(event.target))) {
                event.returnValue = false;
                event.preventDefault();
            }
        }
    }
    initObservable() {
        this.spinnerService
            .getSpinner(this.name)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((spinner) => {
            this.setDefaultOptions();
            Object.assign(this.spinner, spinner);
            if (spinner.show) {
                this.onInputChange();
            }
            this.changeDetector.detectChanges();
        });
    }
    /**
     * Initialization method
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnInit() {
        this.setDefaultOptions();
        this.initObservable();
    }
    /**
     * To check event triggers inside the Spinner Zone
     *
     * @param {*} element
     * @returns {boolean}
     * @memberof NgxSpinnerComponent
     */
    isSpinnerZone(element) {
        if (element === this.elementRef.nativeElement.parentElement) {
            return true;
        }
        return element.parentNode && this.isSpinnerZone(element.parentNode);
    }
    /**
     * On changes event for input variables
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnChanges(changes) {
        for (const propName in changes) {
            if (propName) {
                const changedProp = changes[propName];
                if (changedProp.isFirstChange()) {
                    return;
                }
                else if (typeof changedProp.currentValue !== "undefined" &&
                    changedProp.currentValue !== changedProp.previousValue) {
                    if (changedProp.currentValue !== "") {
                        this.spinner[propName] = changedProp.currentValue;
                        if (propName === "showSpinner") {
                            if (changedProp.currentValue) {
                                this.spinnerService.show(this.spinner.name, this.spinner);
                            }
                            else {
                                this.spinnerService.hide(this.spinner.name);
                            }
                        }
                        if (propName === "name") {
                            this.initObservable();
                        }
                    }
                }
            }
        }
    }
    /**
     * To get class for spinner
     *
     * @memberof NgxSpinnerComponent
     */
    getClass(type, size) {
        this.spinner.divCount = LOADERS[type];
        this.spinner.divArray = Array(this.spinner.divCount)
            .fill(0)
            .map((_, i) => i);
        let sizeClass = "";
        switch (size.toLowerCase()) {
            case "small":
                sizeClass = "la-sm";
                break;
            case "medium":
                sizeClass = "la-2x";
                break;
            case "large":
                sizeClass = "la-3x";
                break;
            default:
                break;
        }
        return "la-" + type + " " + sizeClass;
    }
    /**
     * Check if input variables have changed
     *
     * @memberof NgxSpinnerComponent
     */
    onInputChange() {
        this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
    }
    /**
     * Component destroy event
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
NgxSpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxSpinnerComponent, deps: [{ token: i1.NgxSpinnerService }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: NGX_SPINNER_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Component });
NgxSpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: NgxSpinnerComponent, selector: "ngx-spinner", inputs: { bdColor: "bdColor", size: "size", color: "color", type: "type", fullScreen: "fullScreen", name: "name", zIndex: "zIndex", template: "template", showSpinner: "showSpinner", disableAnimation: "disableAnimation" }, host: { listeners: { "document:keydown": "handleKeyboardEvent($event)" } }, viewQueries: [{ propertyName: "spinnerDOM", first: true, predicate: ["overlay"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div\n  [@.disabled]=\"disableAnimation\"\n  [@fadeIn]=\"'in'\"\n  *ngIf=\"spinner.show\"\n  class=\"ngx-spinner-overlay\"\n  [style.background-color]=\"spinner.bdColor\"\n  [style.z-index]=\"spinner.zIndex\"\n  [style.position]=\"spinner.fullScreen ? 'fixed' : 'absolute'\"\n  #overlay\n>\n  <div *ngIf=\"!template\" [class]=\"spinner.class\" [style.color]=\"spinner.color\">\n    <div *ngFor=\"let index of spinner.divArray\"></div>\n  </div>\n  <div *ngIf=\"template\" [innerHTML]=\"template | safeHtml\"></div>\n  <div class=\"loading-text\" [style.z-index]=\"spinner.zIndex\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i3.SafeHtmlPipe, name: "safeHtml" }], animations: [
        trigger("fadeIn", [
            state("in", style({ opacity: 1 })),
            transition(":enter", [style({ opacity: 0 }), animate(300)]),
            transition(":leave", animate(200, style({ opacity: 0 }))),
        ]),
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: "ngx-spinner", changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                        trigger("fadeIn", [
                            state("in", style({ opacity: 1 })),
                            transition(":enter", [style({ opacity: 0 }), animate(300)]),
                            transition(":leave", animate(200, style({ opacity: 0 }))),
                        ]),
                    ], template: "<div\n  [@.disabled]=\"disableAnimation\"\n  [@fadeIn]=\"'in'\"\n  *ngIf=\"spinner.show\"\n  class=\"ngx-spinner-overlay\"\n  [style.background-color]=\"spinner.bdColor\"\n  [style.z-index]=\"spinner.zIndex\"\n  [style.position]=\"spinner.fullScreen ? 'fixed' : 'absolute'\"\n  #overlay\n>\n  <div *ngIf=\"!template\" [class]=\"spinner.class\" [style.color]=\"spinner.color\">\n    <div *ngFor=\"let index of spinner.divArray\"></div>\n  </div>\n  <div *ngIf=\"template\" [innerHTML]=\"template | safeHtml\"></div>\n  <div class=\"loading-text\" [style.z-index]=\"spinner.zIndex\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NgxSpinnerService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NGX_SPINNER_CONFIG]
                }] }]; }, propDecorators: { bdColor: [{
                type: Input
            }], size: [{
                type: Input
            }], color: [{
                type: Input
            }], type: [{
                type: Input
            }], fullScreen: [{
                type: Input
            }], name: [{
                type: Input
            }], zIndex: [{
                type: Input
            }], template: [{
                type: Input
            }], showSpinner: [{
                type: Input
            }], disableAnimation: [{
                type: Input
            }], spinnerDOM: [{
                type: ViewChild,
                args: ["overlay"]
            }], handleKeyboardEvent: [{
                type: HostListener,
                args: ["document:keydown", ["$event"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwaW5uZXIvc3JjL2xpYi9uZ3gtc3Bpbm5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3Bpbm5lci9zcmMvbGliL25neC1zcGlubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUlMLHVCQUF1QixFQUV2QixZQUFZLEVBQ1osU0FBUyxFQUVULFFBQVEsRUFDUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBRVIsVUFBVSxFQUNWLGVBQWUsR0FDaEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sR0FDUixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7O0FBZWhFLE1BQU0sT0FBTyxtQkFBbUI7SUFtSDlCOzs7O09BSUc7SUFDSCxZQUNVLGNBQWlDLEVBQ2pDLGNBQWlDLEVBQ2pDLFVBQXNCLEVBR3RCLFlBQThCO1FBTDlCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUd0QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFyRXhDOzs7OztXQUtHO1FBQ00scUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQzNDOzs7O1dBSUc7UUFDSCxZQUFPLEdBQWUs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SztnQkFNRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU1HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU1HLE1BQU07c0JBQWQsS0FBSztnQkFNRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9HLFdBQVc7c0JBQW5CLEtBQUs7Z0JBUUcsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQXFDZ0IsVUFBVTtzQkFBL0IsU0FBUzt1QkFBQyxTQUFTO2dCQUdwQixtQkFBbUI7c0JBRGxCLFlBQVk7dUJBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2UsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9wdGlvbmFsLFxuICBJbmplY3QsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZ3hTcGlubmVyU2VydmljZSB9IGZyb20gXCIuL25neC1zcGlubmVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge1xuICBMT0FERVJTLFxuICBERUZBVUxUUyxcbiAgU2l6ZSxcbiAgTmd4U3Bpbm5lcixcbiAgUFJJTUFSWV9TUElOTkVSLFxufSBmcm9tIFwiLi9uZ3gtc3Bpbm5lci5lbnVtXCI7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIGFuaW1hdGUsXG59IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBOZ3hTcGlubmVyQ29uZmlnLCBOR1hfU1BJTk5FUl9DT05GSUcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5neC1zcGlubmVyXCIsXG4gIHRlbXBsYXRlVXJsOiBcIm5neC1zcGlubmVyLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9uZ3gtc3Bpbm5lci5jb21wb25lbnQuY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoXCJmYWRlSW5cIiwgW1xuICAgICAgc3RhdGUoXCJpblwiLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxuICAgICAgdHJhbnNpdGlvbihcIjplbnRlclwiLCBbc3R5bGUoeyBvcGFjaXR5OiAwIH0pLCBhbmltYXRlKDMwMCldKSxcbiAgICAgIHRyYW5zaXRpb24oXCI6bGVhdmVcIiwgYW5pbWF0ZSgyMDAsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBUbyBzZXQgYmFja2Ryb3AgY29sb3JcbiAgICogT25seSBzdXBwb3J0cyBSR0JBIGNvbG9yIGZvcm1hdFxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYmRDb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogVG8gc2V0IHNwaW5uZXIgc2l6ZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogU2l6ZTtcbiAgLyoqXG4gICAqIFRvIHNldCBzcGlubmVyIGNvbG9yKERFRkFVTFRTLlNQSU5ORVJfQ09MT1IpXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogVG8gc2V0IHR5cGUgb2Ygc3Bpbm5lclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICAvKipcbiAgICogVG8gdG9nZ2xlIGZ1bGxzY3JlZW4gbW9kZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZnVsbFNjcmVlbjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNwaW5uZXIgbmFtZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogei1pbmRleCB2YWx1ZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDdXN0b20gdGVtcGxhdGUgZm9yIHNwaW5uZXIvbG9hZGVyXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogc3RyaW5nO1xuICAvKipcbiAgICogU2hvdy9IaWRlIHRoZSBzcGlubmVyXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2hvd1NwaW5uZXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRvIGVuYWJsZS9kaXNhYmxlIGFuaW1hdGlvblxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVBbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIFNwaW5uZXIgT2JqZWN0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBzcGlubmVyOiBOZ3hTcGlubmVyID0gbmV3IE5neFNwaW5uZXIoKTtcbiAgLyoqXG4gICAqIEFycmF5IGZvciBzcGlubmVyJ3MgZGl2XG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBkaXZBcnJheTogQXJyYXk8bnVtYmVyPjtcbiAgLyoqXG4gICAqIENvdW50ZXIgZm9yIGRpdlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKlxuICAgKi9cbiAgZGl2Q291bnQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFNob3cgc3Bpbm5lclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKiovXG4gIHNob3c6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHNwaW5uZXIncyBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqKi9cbiAgbmdVbnN1YnNjcmliZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG4gIC8qKlxuICAgKiBFbGVtZW50IFJlZmVyZW5jZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgQFZpZXdDaGlsZChcIm92ZXJsYXlcIikgc3Bpbm5lckRPTTogeyBuYXRpdmVFbGVtZW50OiBhbnkgfTtcblxuICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6a2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gIGhhbmRsZUtleWJvYXJkRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5zcGlubmVyRE9NICYmIHRoaXMuc3Bpbm5lckRPTS5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiB8fFxuICAgICAgICAoIXRoaXMuZnVsbFNjcmVlbiAmJiB0aGlzLmlzU3Bpbm5lclpvbmUoZXZlbnQudGFyZ2V0KSlcbiAgICAgICkge1xuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE5neFNwaW5uZXJDb21wb25lbnQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNwaW5uZXJTZXJ2aWNlOiBOZ3hTcGlubmVyU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KE5HWF9TUElOTkVSX0NPTkZJRylcbiAgICBwcml2YXRlIGdsb2JhbENvbmZpZzogTmd4U3Bpbm5lckNvbmZpZ1xuICApIHtcbiAgICB0aGlzLmJkQ29sb3IgPSBERUZBVUxUUy5CRF9DT0xPUjtcbiAgICB0aGlzLnpJbmRleCA9IERFRkFVTFRTLlpfSU5ERVg7XG4gICAgdGhpcy5jb2xvciA9IERFRkFVTFRTLlNQSU5ORVJfQ09MT1I7XG4gICAgdGhpcy5zaXplID0gXCJsYXJnZVwiO1xuICAgIHRoaXMuZnVsbFNjcmVlbiA9IHRydWU7XG4gICAgdGhpcy5uYW1lID0gUFJJTUFSWV9TUElOTkVSO1xuICAgIHRoaXMudGVtcGxhdGUgPSBudWxsO1xuICAgIHRoaXMuc2hvd1NwaW5uZXIgPSBmYWxzZTtcblxuICAgIHRoaXMuZGl2QXJyYXkgPSBbXTtcbiAgICB0aGlzLmRpdkNvdW50ID0gMDtcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgfVxuXG4gIGluaXRPYnNlcnZhYmxlKCkge1xuICAgIHRoaXMuc3Bpbm5lclNlcnZpY2VcbiAgICAgIC5nZXRTcGlubmVyKHRoaXMubmFtZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLm5nVW5zdWJzY3JpYmUpKVxuICAgICAgLnN1YnNjcmliZSgoc3Bpbm5lcjogTmd4U3Bpbm5lcikgPT4ge1xuICAgICAgICB0aGlzLnNldERlZmF1bHRPcHRpb25zKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zcGlubmVyLCBzcGlubmVyKTtcbiAgICAgICAgaWYgKHNwaW5uZXIuc2hvdykge1xuICAgICAgICAgIHRoaXMub25JbnB1dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb24gbWV0aG9kXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldERlZmF1bHRPcHRpb25zKCk7XG4gICAgdGhpcy5pbml0T2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIGNoZWNrIGV2ZW50IHRyaWdnZXJzIGluc2lkZSB0aGUgU3Bpbm5lciBab25lXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIGlzU3Bpbm5lclpvbmUoZWxlbWVudDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlICYmIHRoaXMuaXNTcGlubmVyWm9uZShlbGVtZW50LnBhcmVudE5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHNldCBkZWZhdWx0IG5neC1zcGlubmVyIG9wdGlvbnNcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIHNldERlZmF1bHRPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5nbG9iYWxDb25maWcgPz8ge307XG4gICAgdGhpcy5zcGlubmVyID0gTmd4U3Bpbm5lci5jcmVhdGUoe1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgYmRDb2xvcjogdGhpcy5iZENvbG9yLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUgPz8gdHlwZSxcbiAgICAgIGZ1bGxTY3JlZW46IHRoaXMuZnVsbFNjcmVlbixcbiAgICAgIGRpdkFycmF5OiB0aGlzLmRpdkFycmF5LFxuICAgICAgZGl2Q291bnQ6IHRoaXMuZGl2Q291bnQsXG4gICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICB6SW5kZXg6IHRoaXMuekluZGV4LFxuICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG4gICAgICBzaG93U3Bpbm5lcjogdGhpcy5zaG93U3Bpbm5lcixcbiAgICB9KTtcbiAgfTtcbiAgLyoqXG4gICAqIE9uIGNoYW5nZXMgZXZlbnQgZm9yIGlucHV0IHZhcmlhYmxlc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcEtleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChwcm9wTmFtZSkge1xuICAgICAgICBjb25zdCBjaGFuZ2VkUHJvcCA9IGNoYW5nZXNbcHJvcE5hbWVdO1xuICAgICAgICBpZiAoY2hhbmdlZFByb3AuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHR5cGVvZiBjaGFuZ2VkUHJvcC5jdXJyZW50VmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICBjaGFuZ2VkUHJvcC5jdXJyZW50VmFsdWUgIT09IGNoYW5nZWRQcm9wLnByZXZpb3VzVmFsdWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZWRQcm9wLmN1cnJlbnRWYWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyW3Byb3BOYW1lXSA9IGNoYW5nZWRQcm9wLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCJzaG93U3Bpbm5lclwiKSB7XG4gICAgICAgICAgICAgIGlmIChjaGFuZ2VkUHJvcC5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNob3codGhpcy5zcGlubmVyLm5hbWUsIHRoaXMuc3Bpbm5lcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGlubmVyU2VydmljZS5oaWRlKHRoaXMuc3Bpbm5lci5uYW1lKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdE9ic2VydmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRvIGdldCBjbGFzcyBmb3Igc3Bpbm5lclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgZ2V0Q2xhc3ModHlwZTogc3RyaW5nLCBzaXplOiBTaXplKTogc3RyaW5nIHtcbiAgICB0aGlzLnNwaW5uZXIuZGl2Q291bnQgPSBMT0FERVJTW3R5cGVdO1xuICAgIHRoaXMuc3Bpbm5lci5kaXZBcnJheSA9IEFycmF5KHRoaXMuc3Bpbm5lci5kaXZDb3VudClcbiAgICAgIC5maWxsKDApXG4gICAgICAubWFwKChfLCBpKSA9PiBpKTtcbiAgICBsZXQgc2l6ZUNsYXNzID0gXCJcIjtcbiAgICBzd2l0Y2ggKHNpemUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSBcInNtYWxsXCI6XG4gICAgICAgIHNpemVDbGFzcyA9IFwibGEtc21cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgIHNpemVDbGFzcyA9IFwibGEtMnhcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGFyZ2VcIjpcbiAgICAgICAgc2l6ZUNsYXNzID0gXCJsYS0zeFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gXCJsYS1cIiArIHR5cGUgKyBcIiBcIiArIHNpemVDbGFzcztcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgaW5wdXQgdmFyaWFibGVzIGhhdmUgY2hhbmdlZFxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgb25JbnB1dENoYW5nZSgpIHtcbiAgICB0aGlzLnNwaW5uZXIuY2xhc3MgPSB0aGlzLmdldENsYXNzKHRoaXMuc3Bpbm5lci50eXBlLCB0aGlzLnNwaW5uZXIuc2l6ZSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbXBvbmVudCBkZXN0cm95IGV2ZW50XG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm5nVW5zdWJzY3JpYmUubmV4dCgpO1xuICAgIHRoaXMubmdVbnN1YnNjcmliZS5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCI8ZGl2XG4gIFtALmRpc2FibGVkXT1cImRpc2FibGVBbmltYXRpb25cIlxuICBbQGZhZGVJbl09XCInaW4nXCJcbiAgKm5nSWY9XCJzcGlubmVyLnNob3dcIlxuICBjbGFzcz1cIm5neC1zcGlubmVyLW92ZXJsYXlcIlxuICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJzcGlubmVyLmJkQ29sb3JcIlxuICBbc3R5bGUuei1pbmRleF09XCJzcGlubmVyLnpJbmRleFwiXG4gIFtzdHlsZS5wb3NpdGlvbl09XCJzcGlubmVyLmZ1bGxTY3JlZW4gPyAnZml4ZWQnIDogJ2Fic29sdXRlJ1wiXG4gICNvdmVybGF5XG4+XG4gIDxkaXYgKm5nSWY9XCIhdGVtcGxhdGVcIiBbY2xhc3NdPVwic3Bpbm5lci5jbGFzc1wiIFtzdHlsZS5jb2xvcl09XCJzcGlubmVyLmNvbG9yXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaW5kZXggb2Ygc3Bpbm5lci5kaXZBcnJheVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cInRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJ0ZW1wbGF0ZSB8IHNhZmVIdG1sXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsb2FkaW5nLXRleHRcIiBbc3R5bGUuei1pbmRleF09XCJzcGlubmVyLnpJbmRleFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==