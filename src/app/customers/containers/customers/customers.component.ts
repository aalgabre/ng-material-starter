import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers$: Observable<any>;

  selected: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers$ = this.customerService.getAll();
  }
}
