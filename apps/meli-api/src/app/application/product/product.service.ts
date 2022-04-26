import { FindProduct, ProductDetail } from '@meli/meli-entity';
import { Inject, Injectable } from '@nestjs/common';
import { forkJoin, map, Observable } from 'rxjs';
import { FindProductCommand, ProductDetailCommand } from '../../domain/command/product.command';
import { IProduct, PRODUCT_TOKEN } from '../../domain/port/produc.port';
import { Constants } from '../../infrastructure/core/util/constants.util';

@Injectable()
export class ProductService {
    constructor(
        @Inject(PRODUCT_TOKEN) private readonly port: IProduct
    ) { }

    detail = (command: ProductDetailCommand): Observable<any> => {
        return forkJoin(
            {
                detail$: this.port.detail(command),
                description$: this.port.detailDescription(command)
            }
        ).pipe(map(detail => this.createDetailResponse(detail)));
    }

    findProducts = (command: FindProductCommand): Observable<FindProduct.Response> => {
        return this.port.findProducts(command).pipe(map(products => this.createFindResponse(products)));
    }

    private createDetailResponse = (values: any): ProductDetail.Response => {
        const { detail$, description$ } = values;

        return {
            item: {
                id: detail$.id,
                condition: detail$.condition,
                soldQuantity: detail$.sold_quantity,
                title: detail$.title,
                price: {
                    amount: detail$.price,
                    currency: detail$.currency_id
                },
                picture: detail$.thumbnail,
                freeShipping: detail$.shipping.free_shipping,
                description: description$.plain_text,
            },
            author: {
                name: Constants.PRODUCT_NAME,
                lastName: Constants.PRODUCT_LAST_NAME
            }
        }
    }

    private createFindResponse = (values: any): FindProduct.Response => {
        const { results, filters } = values;
        return {
            items: this.getItems(results),
            categories: this.getCategories(filters),
            author: {
                name: Constants.PRODUCT_NAME,
                lastName: Constants.PRODUCT_LAST_NAME
            }
        };
    }

    private getItems = (results: any): Array<FindProduct.Result> => {
        return results.map(res => {
            return {
                id: res.id,
                title: res.title,
                picture: res.thumbnail,
                condition: res.condition,
                freeShipping: res.shipping.free_shipping,
                cityName: res.address.city_name,
                price: {
                    currency: res.prices.presentation.display_currency,
                    amount: res.price
                }
            }
        });
    }

    private getCategories = (filters: any): Array<string> => {
        const categories = filters?.find(f => f?.id === Constants.PRODUCT_CATEGORY)?.values || Array.from([]);
        return categories[0]?.path_from_root.map(path => path.name) || Array.from([]);
    }
}
