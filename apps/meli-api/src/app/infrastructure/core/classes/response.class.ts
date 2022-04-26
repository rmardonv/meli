export class HttpResponse {
    success: boolean;
    message?: string;
    data?: any;

    constructor(props: HttpResponse) {
        this.success = props?.success;
        this.message = props?.message;
        this.data = props?.data
    }
}