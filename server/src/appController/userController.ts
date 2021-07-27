import * as express from 'express';
import {interfaces} from 'inversify-express-utils';

export interface UserController extends interfaces.Controller {
    loginUser(req: express.Request, res: express.Response): string;
}
