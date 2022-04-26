import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FindProduct } from '@meli/meli-entity';
import { Subject, takeUntil } from 'rxjs';
import { Constants } from '../../shared/util/constant.util';
import { ProductService } from './shared/services/product.service';

@Component({
  selector: 'meli-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  protected obs$ = new Subject();

  result: FindProduct.Response;

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly title: Title
  ) {
    this.title.setTitle(Constants.TITLE_RESULT);
  }

  ngOnInit(): void {
    const { search } = this.route.snapshot.queryParams;
    this.getFindResult(search);
  }

  find = (evt: string): void => {
    this.router.navigate([Constants.ROUTES_ITEMS], { queryParams: { search: evt } });
    this.getFindResult(evt);
  }

  getFindResult = (query: string) => {
    this.productService.find(query).pipe(
      takeUntil(this.obs$)
    ).subscribe(f => this.result = f);
  }

  detail = (item: any) => {
    const id = item.id;
    this.router.navigate([Constants.ROUTES_ITEMS, id], { state: { categories: this.result.categories } });
  }

  ngOnDestroy(): void {
    this.obs$.next(null);
    this.obs$.complete();
  }
}
