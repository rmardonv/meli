import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'meli-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {

  @Input() categories: Array<string>;

  constructor() { }

  ngOnInit(): void { }
}
