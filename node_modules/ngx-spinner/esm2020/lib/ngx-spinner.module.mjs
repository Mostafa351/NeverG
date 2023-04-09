import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSpinnerComponent } from "./ngx-spinner.component";
import { SafeHtmlPipe } from "./safe-html.pipe";
import { NGX_SPINNER_CONFIG } from "./config";
import * as i0 from "@angular/core";
export class NgxSpinnerModule {
    static forRoot(config) {
        return {
            ngModule: NgxSpinnerModule,
            providers: [{ provide: NGX_SPINNER_CONFIG, useValue: config }],
        };
    }
}
NgxSpinnerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxSpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxSpinnerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: NgxSpinnerModule, declarations: [NgxSpinnerComponent, SafeHtmlPipe], imports: [CommonModule], exports: [NgxSpinnerComponent] });
NgxSpinnerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxSpinnerModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxSpinnerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [NgxSpinnerComponent, SafeHtmlPipe],
                    exports: [NgxSpinnerComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwaW5uZXIvc3JjL2xpYi9uZ3gtc3Bpbm5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQU9oRSxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQ1osTUFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQy9ELENBQUM7SUFDSixDQUFDOzs2R0FSVSxnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkFIWixtQkFBbUIsRUFBRSxZQUFZLGFBRHRDLFlBQVksYUFFWixtQkFBbUI7OEdBRWxCLGdCQUFnQixZQUpqQixZQUFZOzJGQUlYLGdCQUFnQjtrQkFMNUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztvQkFDakQsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmd4U3Bpbm5lckNvbXBvbmVudCB9IGZyb20gXCIuL25neC1zcGlubmVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2FmZUh0bWxQaXBlIH0gZnJvbSBcIi4vc2FmZS1odG1sLnBpcGVcIjtcbmltcG9ydCB7IE5neFNwaW5uZXJDb25maWcsIE5HWF9TUElOTkVSX0NPTkZJRyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmd4U3Bpbm5lckNvbXBvbmVudCwgU2FmZUh0bWxQaXBlXSxcbiAgZXhwb3J0czogW05neFNwaW5uZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTcGlubmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgY29uZmlnPzogTmd4U3Bpbm5lckNvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neFNwaW5uZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFNwaW5uZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HWF9TUElOTkVSX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=