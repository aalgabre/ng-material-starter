import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  @Input() orders: any[];
  @Output() select = new EventEmitter<any>();

  displayedColumns: string[] = ['title', 'street', 'zip', 'city'];

  constructor() { }

  ngOnInit() {
  }

  selectByIndex(index) {
    this.orders.forEach(element => {
      delete element['selected'];
    });
    this.orders[index].selected = true;
    this.select.emit(this.orders[index]);
  }
}
