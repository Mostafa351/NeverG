import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';




@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    NgbCarouselModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    NgbCarouselModule,
    OrderTotalsComponent,
    ReactiveFormsModule,
    TextInputComponent
  ]
})
export class SharedModule { }
