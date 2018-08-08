import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from '../../services/orders.service';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders$: Observable<any>;
  selected: any;

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.orders$ = this.orderService.getAll();
  }

}
