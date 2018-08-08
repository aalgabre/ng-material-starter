import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './containers/customers/customers.component';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './components/Customer-list/Customer-list.component';
import { CustomerDetailViewComponent } from './components/customer-detail-view/customer-detail-view.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerService } from './services/customer.service';
import { CustomerResolver } from './resolvers/customer.resolver';
import { CustomerDetailsComponent } from './containers/customer-details/customer-details.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const routes = [
  { path: '', component: CustomersComponent },
  { path: 'new', component: CustomerDetailsComponent },
  { path: ':id', component: CustomerDetailsComponent, resolve: { customer: CustomerResolver } }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CustomersComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    CustomerDetailViewComponent,
    CustomerFormComponent
  ]
})
export class CustomersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomersModule,
      providers: [
        CustomerService,
        CustomerResolver
      ]
    };
  }
}
