import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidenavListComponent],
  imports: [MaterialModule, RouterModule, FlexLayoutModule],
  exports: [],
  providers: [],
})
export class LayoutModule { }
