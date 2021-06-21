import {Request, Response, NextFunction} from 'express';

const session = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.user) {
        req.session.user = {
            id: 'newUser',
            pw: '1234',
        };
    } else {
        console.log(req.session.user);
    }
    next();
};

export default session;
