import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-detail-view',
  templateUrl: './customer-detail-view.component.html',
  styleUrls: ['./customer-detail-view.component.scss']
})
export class CustomerDetailViewComponent implements OnInit {

  @Input() customer: any;

  constructor() { }

  ngOnInit() {
  }

}
