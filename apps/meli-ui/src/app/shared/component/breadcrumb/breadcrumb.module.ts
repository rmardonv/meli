import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule],
  providers: [],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
