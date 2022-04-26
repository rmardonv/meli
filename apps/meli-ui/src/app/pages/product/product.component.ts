import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Constants } from '../../shared/util/constant.util';

@Component({
  selector: 'meli-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly title: Title
  ) {
    this.title.setTitle(Constants.TITLE_PRODUCT);
  }

  ngOnInit(): void { }

  find = (evt: string): void => {
    this.router.navigate(['items'], { queryParams: { search: evt } });
  }

}
