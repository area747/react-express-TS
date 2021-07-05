import {ErrorRequestHandler} from 'express';
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    err.handle();
};
export = errorHandler;
