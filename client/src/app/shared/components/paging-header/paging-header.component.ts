import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.scss']
})
export class PagingHeaderComponent {
  @Input() totalCount: number | null | undefined;
  @Input() pageNumber: number | null | undefined;
  @Input() pageSize: number | null | undefined;
}
