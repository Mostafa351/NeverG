import { IProduct } from './product';
export interface IPagination {
  pageIndex: number | null;
  pageSize: number | null;
  count: number;
  data: IProduct[];
}

export class Pagination implements IPagination {
  pageIndex: number | null = 0
  pageSize: number | null = 0
  count: number = 0
  data: IProduct[] = [];
}