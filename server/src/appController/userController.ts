import {RequestHandler} from 'express';

const createUser: RequestHandler = (req, res, next) => {
    const userId = req.body.userId;
    const userPw = req.body.userPw;
};

const selectUser: RequestHandler = (req, res, next) => {
    const userId = req.body.userId;
};
