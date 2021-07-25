import {RequestHandler} from 'express';

export interface UserController {
    loginUser: RequestHandler;
    loginKakao: RequestHandler;
    selectUse: RequestHandler;
}
