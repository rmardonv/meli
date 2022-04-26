import { FindProduct, ProductDetail } from '@meli/meli-entity';
import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProductService } from '../../../application/product/product.service';
import { FindProductCommand, ProductDetailCommand } from '../../../domain/command/product.command';
import { FindProductDTO, ProductDetailDTO } from '../../dto/product.dto';

@Controller('product')
export class ProductController {

    constructor(
        private readonly service: ProductService
    ) { }

    @Get('detail/:id')
    @HttpCode(200)
    getProductDetail(
        @Param() params: ProductDetailDTO
    ): Observable<ProductDetail.Response> {
        const { id } = params;
        return this.service.detail(new ProductDetailCommand({ id }));
    }

    @Get('search/:query')
    @HttpCode(200)
    getProducts(
        @Param() params: FindProductDTO
    ): Observable<FindProduct.Response> {
        const { query } = params;
        return this.service.findProducts(new FindProductCommand({ query }));
    }
}
