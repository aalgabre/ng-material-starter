import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { of, Observable } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { first } from 'rxjs/operators';



@Injectable()
export class CustomerResolver implements Resolve<any> {

  constructor(private customerService: CustomerService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if (route.paramMap.get('id') === 'new') {
      return of(undefined);
    }

    return this.customerService.getById(route.paramMap.get('id')).pipe(first());
  }
}
