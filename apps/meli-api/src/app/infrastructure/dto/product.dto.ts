import { IsNotEmpty } from "class-validator";

export class FindProductDTO {
    @IsNotEmpty()
    query: string;
}

export class ProductDetailDTO {
    @IsNotEmpty()
    id: string;
}