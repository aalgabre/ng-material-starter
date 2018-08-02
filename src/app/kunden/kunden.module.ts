import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KundenComponent } from './containers/kunden/kunden.component';
import { KundenDetailsComponent } from './containers/kunden-details/kunden-details.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { KundenListComponent } from './components/kunden-list/kunden-list.component';
import { KundenDetailViewComponent } from './components/kunden-detail-view/kunden-detail-view.component';

export const routes = [
  { path: '', component: KundenComponent },
  { path: ':id', component: KundenDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KundenComponent, KundenDetailsComponent, KundenListComponent, KundenDetailViewComponent]
})
export class KundenModule { }
