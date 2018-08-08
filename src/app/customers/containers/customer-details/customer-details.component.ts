import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService } from '../../services/customer.service';

@Component({
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer: any;

  constructor(
    private location: Location,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(data => {
        this.customer = data['customer'] || null;
      });
  }

  async save(formValue: any) {
    if (this.customer && this.customer.id) {
      const result = await this.customerService.update(this.customer.id, formValue);
      console.log('result update', result);
    } else {
      const result = await this.customerService.create(formValue);
      console.log('result create', result);
    }
  }

  back() {
    this.location.back();
  }
}
