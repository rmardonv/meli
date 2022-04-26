
export class FindProductCommand {
    query: string;
    constructor(props: FindProductCommand) {
        this.query = props.query;
    }
}

export class ProductDetailCommand {
    id: string;
    constructor(props: ProductDetailCommand) {
        this.id = props.id;
    }
}