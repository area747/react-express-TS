export class HTTPError extends Error {
    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'HTTPError';
    }
    statusCode: number;

    handle(): void {
        console.log(typeof this);
    }
}
