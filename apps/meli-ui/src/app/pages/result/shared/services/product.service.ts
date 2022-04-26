import { Injectable } from '@angular/core';
import { FindProduct, HttpEntity, ProductDetail } from '@meli/meli-entity';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/meli-ui/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private readonly http: HttpClient
  ) { }

  find = (query: string): Observable<FindProduct.Response> => {
    return this.http.get<HttpEntity.response>(`${environment.serverUri}product/search/${query}`)
      .pipe(map(res => res.data))
  }

  getDetail = (id: number): Observable<ProductDetail.Response> => {
    return this.http.get<HttpEntity.response>(`${environment.serverUri}product/detail/${id}`)
      .pipe(map(res => res.data))
  }

}
