export namespace FindProduct {

    export class Price {
        currency: string;
        amount: number;
    }

    export class Author {
        name: string;
        lastName: string;
    }

    export class Response {
        items: Array<Result>;
        categories: Array<string>;
        author: Author;
    }

    export class Result {
        id: string;
        title: string;
        picture: string;
        condition: string;
        freeShipping: boolean;
        cityName: string;
        price: Price;
    }
}

export namespace ProductDetail {

    export class Response {
        author: FindProduct.Author;
        item: Item;
    }

    export class Item {
        id: string;
        price: FindProduct.Price;
        title: string;
        soldQuantity: number;
        condition: string;
        picture: string;
        freeShipping: boolean;
        description: string;
    }
}