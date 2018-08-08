import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-detail-view',
  templateUrl: './order-detail-view.component.html',
  styleUrls: ['./order-detail-view.component.scss']
})
export class OrderDetailViewComponent implements OnInit {

  @Input() order: any;

  constructor() { }

  ngOnInit() {
  }

}
