import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnChanges {

  @Input() customers: any[];
  @Output() select = new EventEmitter<any>();

  constructor() { }

  displayedColumns: string[] = ['lastname', 'firstname', 'company', 'street'];

  selectByIndex(index) {
    this.customers.forEach(element => {
      delete element['selected'];
    });
    this.customers[index].selected = true;
    this.select.emit(this.customers[index]);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.customers);
  }
}
