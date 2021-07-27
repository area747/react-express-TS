import * as express from 'express';
import {UserController} from 'controller/userController';
import {controller, httpGet, request, response} from 'inversify-express-utils';

@controller('/user')
export class UserControllerImpl implements UserController {
    constructor() {
        //
    }

    @httpGet('/login')
    loginUser(@request() req: express.Request, @response() res: express.Response): string {
        console.log(req.query.userId);
        console.log('login');
        return '';
    }
}
