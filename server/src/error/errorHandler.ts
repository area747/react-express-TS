import {ErrorRequestHandler} from 'express';
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    err.handle();
};
export = errorHandler;
