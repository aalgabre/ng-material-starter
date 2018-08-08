import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit, OnChanges {

  @Input() customer: any;

  public genders = [
    { key: 'female', value: 'Frau' },
    { key: 'male', value: 'Herr' },
    { key: 'others', value: 'Andere' }
  ];

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      gender: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      company: [''],
      street: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.form.patchValue(this.customer);
  }

  get value() {
    return { ...this.form.value };
  }

  get valid() {
    return this.form.valid;
  }

  get valueChanges() {
    return this.form.valueChanges;
  }
}
