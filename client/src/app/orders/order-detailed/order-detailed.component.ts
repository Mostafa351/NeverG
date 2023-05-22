import { OrdersService } from './../orders.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder | undefined;
  constructor(private route: ActivatedRoute, private breadcrumbService: BreadcrumbService, private ordersService: OrdersService) {
    this.breadcrumbService.set('@OrderDetailed', '');
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap?.get('id');
    if (id) {
      this.ordersService.getOrderDetailed(+id).subscribe({
        next: (order: IOrder) => {
          this.order = order;
          this.breadcrumbService.set('@OrderDetailed', `Order# ${order.id} - ${order.status}`);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

}
