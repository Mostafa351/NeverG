import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() totalCount: number | null | undefined;
  @Input() pageSize: number | null | undefined;
  @Input() pageNumber: number | null | undefined;
  @Output() pageChanged = new EventEmitter<number>();



  onPagerChange(event: any) {
    this.pageChanged.emit(event.page)
  }
}
