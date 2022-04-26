import { Module } from "@nestjs/common";
import { ProductService } from "../../../application/product/product.service";
import { PRODUCT_TOKEN } from "../../../domain/port/produc.port";
import { ProductAdapter } from "../../adapter/product.adapter";
import { CoreModule } from "../../core/core.module";
import { ProductController } from "./product.controller";

@Module({
    imports: [
        CoreModule
    ],
    controllers: [ProductController],
    providers: [
        ProductService,
        {
            provide: PRODUCT_TOKEN,
            useClass: ProductAdapter
        }
    ]
})

export class ProductModule { }
