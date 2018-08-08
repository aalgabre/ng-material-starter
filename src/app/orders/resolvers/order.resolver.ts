import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { of, Observable } from 'rxjs';
import { first, switchMap, map } from 'rxjs/operators';
import { OrdersService } from '../services/orders.service';
import { CustomerService } from '../../customers/services/customer.service';



@Injectable()
export class OrderResolver implements Resolve<any> {

  constructor(private orderService: OrdersService, private customerService: CustomerService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if (route.paramMap.get('id') === 'new') {
      return of(undefined);
    }

    let order;

    return this.orderService.getById(route.paramMap.get('id')).pipe(
      switchMap(orderParam => {
        order = orderParam;
        return this.customerService.getById(orderParam.customerId);
      }),
      map(customer => {
        return { customer, order };
      }),
      first());
  }
}
