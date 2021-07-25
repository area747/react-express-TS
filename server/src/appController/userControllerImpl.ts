import {RequestHandler} from 'express';
import {UserController} from 'controller/userController';
import {provide} from 'inversify-binding-decorators';

@provide(UserControllerImpl)
export class UserControllerImpl implements UserController {
    loginUser: RequestHandler = function (req, res, next) {
        const userId = req.body.userId;
        const userPw = req.body.userPw;
        console.log('hi');
    };
    loginKakao: RequestHandler = function (req, res, next) {
        //
    };
    selectUse: RequestHandler = function (req) {
        //
    };
}
