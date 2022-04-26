import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './component/header/header.module';
import { BreadcrumbModule } from './component/breadcrumb/breadcrumb.module';
import { LoaderModule } from './component/loader/loader.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    BreadcrumbModule,
    LoaderModule
  ],
  providers: [],
  exports: [
    HeaderModule,
    HeaderModule,
    BreadcrumbModule,
    LoaderModule
  ],
})
export class SharedModule { }
