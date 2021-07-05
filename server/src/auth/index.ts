import {RequestHandler} from 'express';
import {HTTPError} from '../error/class/HTTPError';

const auth: RequestHandler = (req, res, next) => {
    try {
        if (!req.isAuthenticated()) throw new HTTPError(401, '401 not authenticated');
    } catch (error) {
        next(error);
    }
};
export default auth;
