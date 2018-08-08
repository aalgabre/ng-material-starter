import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './containers/orders/orders.component';
import { OrderDetailsComponent } from './containers/order-details/order-details.component';
import { RouterModule } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrdersService } from './services/orders.service';
import { OrderDetailViewComponent } from './components/order-detail-view/order-detail-view.component';
import { OrderResolver } from './resolvers/order.resolver';

export const routes = [
  { path: '', component: OrdersComponent },
  { path: 'new', component: OrderDetailsComponent },
  { path: ':id', component: OrderDetailsComponent, resolve: { data: OrderResolver } }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OrdersComponent,
    OrderDetailsComponent,
    OrderListComponent,
    OrderFormComponent,
    OrderDetailViewComponent
  ]
})
export class OrdersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OrdersModule,
      providers: [
        OrdersService,
        OrderResolver
      ]
    };
  }
}
