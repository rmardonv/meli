import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetail } from '@meli/meli-entity';
import { catchError, Subject, takeUntil, throwError } from 'rxjs';
import { Constants } from '../../shared/util/constant.util';
import { ProductService } from '../result/shared/services/product.service';

@Component({
  selector: 'meli-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  protected obs$ = new Subject();

  detail: ProductDetail.Response;

  showError = false;

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
    this.showError = false;
    const { id } = this.route.snapshot.params
    this.productService.getDetail(id)
      .pipe(
        takeUntil(this.obs$),
        catchError(err => {
          this.showError = true;
          return throwError(() => new Error(err))
        }))
      .subscribe(res => this.detail = res)
  }

  find = (evt: string): void => {
    this.router.navigate([Constants.ROUTES_ITEMS], { queryParams: { search: evt } });
  }

  ngOnDestroy(): void {
    this.obs$.next(null);
    this.obs$.complete();
  }

}
