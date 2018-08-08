import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnChanges {

  @Input() order: any;
  @Input() customers: any[];
  @Output() customerSearch = new EventEmitter();

  public customerFilterControl: FormControl = new FormControl();

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      customerId: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      comment: ['']
    });
  }

  ngOnInit() {
    this.customerFilterControl.valueChanges
      .pipe(
        skip(2),
        debounceTime(800),
        distinctUntilChanged(),
    )
      .subscribe((searchText) => {
        console.log(searchText);
        this.customerSearch.emit(searchText);
      });
  }

  ngOnChanges() {
    if (!this.customers) {
      this.customers = [{ id: undefined, lastname: 'Kein Kunde ausgewählt' }];
    } else {
      this.customers.push({ id: undefined, lastname: 'Kunde entfernen' });
    }
    if (!this.order) return;
    this.form.patchValue(this.order);
  }

  get value() {
    return this.form.value;
  }

  get valid() {
    return this.form.valid;
  }

  get valueChanges() {
    return this.form.valueChanges;
  }
}
