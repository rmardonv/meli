import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetail } from '@meli/meli-entity';
import { Subject, takeUntil } from 'rxjs';
import { Constants } from '../../shared/util/constant.util';
import { ProductService } from '../result/shared/services/product.service';

@Component({
  selector: 'meli-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  protected obs$ = new Subject();

  detail: ProductDetail.Response

  categories: Array<string> = [];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly title: Title
  ) {
    this.title.setTitle(Constants.TITLE_DETAIL)
  }

  ngOnInit(): void {
    this.getDetail();
    this.getBreadcrumbData();
  }

  getBreadcrumbData = () => {
    if (history.state?.categories && history.state?.categories.length > 0) {
      const categories = history.state.categories;
      categories.push(Constants.DETAILS)
      this.categories = categories;
    }
  }

  getDetail = () => {
    const { id } = this.route.snapshot.params
    this.productService.getDetail(id)
      .pipe(takeUntil(this.obs$))
      .subscribe(d => this.detail = d);
  }

  find = (evt: string): void => {
    this.router.navigate([Constants.ROUTES_ITEMS], { queryParams: { search: evt } });
  }

  ngOnDestroy(): void {
    this.obs$.next(null);
    this.obs$.complete();
  }

}
