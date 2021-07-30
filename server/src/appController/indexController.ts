import * as express from 'express';
import {controller, httpGet, httpPost, interfaces, request, response, httpMethod} from 'inversify-express-utils';
@controller('*')
export class IndexController {
    constructor() {
        //
    }

    @httpGet('/')
    mainPage(@request() req: express.Request, @response() res: express.Response): string {
        console.log('main');
        return 'main';
    }

    @httpGet('/index')
    test1(): string {
        return 'index';
    }
}
