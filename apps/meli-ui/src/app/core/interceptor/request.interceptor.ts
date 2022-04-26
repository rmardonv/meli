import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  private countReq = 0;

  private headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  constructor(
    private readonly commonService: CommonService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.countReq++;
    this.commonService.setLoading(true);
    return next.handle(request.clone({
      headers: new HttpHeaders(this.headers)
    })).pipe(
      finalize(() => {
        this.countReq--;
        if (this.countReq === 0) { this.commonService.setLoading(false) };
      }));
  }
}
