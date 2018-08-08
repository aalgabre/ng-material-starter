import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './containers/layout/layout.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidenavListComponent],
  imports: [SharedModule],
  exports: [],
  providers: [],
})
export class LayoutModule { }
