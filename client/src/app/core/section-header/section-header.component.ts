import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit, OnDestroy {
  breadcrumb$: Observable<any[]> | undefined;
  constructor(private bcService: BreadcrumbService) { }
  ngOnInit(): void {
    this.breadcrumb$ = this.bcService.breadcrumbs$;
  }
  ngOnDestroy(): void {
  }
}
