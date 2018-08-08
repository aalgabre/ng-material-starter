import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerService } from '../../../customers/services/customer.service';
import { Location } from '@angular/common';
import { OrdersService } from '../../services/orders.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  order: any;
  customers$: Observable<any[]>;

  constructor(
    private customerService: CustomerService,
    private orderService: OrdersService,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(paramData => {
        debugger;
        this.order = paramData.data['order'] || null;
        if (!this.order) return;
        this.customers$ = of([paramData.data['customer']]);
      });
  }
  searchCustomer(searchText: string) {
    if (!searchText) { return; }
    return this.customers$ = this.customerService.search(searchText);
  }

  async save(formValue: any) {
    console.log(formValue);
    if (this.order && this.order.id) {
      const result = await this.orderService.update(this.order.id, formValue);
      console.log('result update', result);
    } else {
      const result = await this.orderService.create(formValue);
      console.log('result create', result);
    }
  }

  back() {
    this.location.back();
  }
}
