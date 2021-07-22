import {RequestHandler} from 'express';
import {selectUser as service_selectUser} from '../appService/userService';

export class UserController {
    loginUser: RequestHandler = function (req, res, next) {
        const userId = req.body.userId;
        const userPw = req.body.userPw;
    };
    loginKakao: RequestHandler = function (req, res, next) {
        //
    };

    selectUse: RequestHandler = (req, res, next) => {
        const userId = req.body.userId;
        service_selectUser(userId);
    };
}
