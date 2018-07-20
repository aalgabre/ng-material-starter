import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  declarations: []
})
export class SharedModule { }
