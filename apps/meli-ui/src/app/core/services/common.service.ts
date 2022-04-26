import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private loading = new Subject<boolean>();

  constructor() { }

  isLoading$ = (): Observable<boolean> => {
    return this.loading.asObservable();
  }

  setLoading = (loading: boolean): void => {
    this.loading.next(loading);
  }
}
