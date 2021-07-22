import {RequestHandler} from 'express';
import {selectUser as service_selectUser} from '../appService/userService';

const createUser: RequestHandler = (req, res, next) => {
    const userId = req.body.userId;
    const userPw = req.body.userPw;
};

const selectUse: RequestHandler = (req, res, next) => {
    const userId = req.body.userId;
    service_selectUser(userId);
};

export {selectUse};
