import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/containers/login/login.component';


export const routes = [
  { path: '', component: LoginComponent },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
