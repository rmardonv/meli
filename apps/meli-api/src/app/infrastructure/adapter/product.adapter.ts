import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { FindProductCommand, ProductDetailCommand } from '../../domain/command/product.command';
import { IProduct } from '../../domain/port/produc.port';
import { environment } from 'apps/meli-api/src/environments/environment';

@Injectable()
export class ProductAdapter implements IProduct {

    constructor(
        private readonly httpService: HttpService
    ) { }

    detailDescription(command: ProductDetailCommand): Observable<any> {
        const uri = `${environment.services.baseUrl}${environment.services.items}${command.id}/description`;
        return this.httpService.get(uri)
            .pipe(map(m => m.data));
    }
    detail(command: ProductDetailCommand): Observable<any> {
        const uri = `${environment.services.baseUrl}${environment.services.items}${command.id}`;
        return this.httpService.get(uri)
            .pipe(map(m => m.data));
    }

    findProducts(command: FindProductCommand): Observable<any> {
        const uri = `${environment.services.baseUrl}${environment.services.sites}search?q=${command.query}`;
        return this.httpService.get(uri)
            .pipe(map(m => m.data));
    }
}
