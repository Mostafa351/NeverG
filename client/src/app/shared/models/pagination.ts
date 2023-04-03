import { IProduct } from './product';
export interface IPagination {
  pageIndex: number | null;
  pageSize: number | null;
  count: number;
  data: IProduct[];
}