import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    SearchComponent
  ],
  declarations: [SearchComponent]
})
export class SharedModule { }
