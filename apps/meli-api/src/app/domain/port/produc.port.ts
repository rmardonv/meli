import { Observable } from "rxjs";
import { FindProductCommand, ProductDetailCommand } from "../command/product.command";

export interface IProduct {
    findProducts(command: FindProductCommand): Observable<any>;

    detail(command: ProductDetailCommand): Observable<any>;

    detailDescription(command: ProductDetailCommand): Observable<any>;
}

export const PRODUCT_TOKEN = 'IProduct';