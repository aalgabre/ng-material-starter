import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
