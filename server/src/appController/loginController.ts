import {Request, Response, NextFunction} from 'express';
import {controller, httpGet, httpPost, interfaces, next, request, response} from 'inversify-express-utils';
import passport from 'passport';
import {logger} from 'logger';
import path from 'path';
import fs from 'fs';
const clientPath = path.join(process.cwd(), 'client', 'build');
@controller('/login')
export class LoginController implements interfaces.Controller {
    constructor() {
        //
    }

    @httpGet('/')
    loginUser(@request() req: Request, @response() res: Response): void {
        if (req.isAuthenticated()) {
            res.redirect('/');
        } else {
            fs.readFile(path.join(clientPath, 'index.html'), (err, data) => {
                res.end(data);
            });
        }
    }

    @httpPost('/local', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login'}))
    localLogin(@request() req: Request, @response() res: Response, @next() next: NextFunction): void {
        //
    }

    @httpGet('/kakao')
    kakaoLogin(@request() req: Request, @response() res: Response, @next() next: NextFunction): void {
        passport.authenticate('kakao', {successRedirect: '/login', failureRedirect: '/login'})(req, res, next);
    }
}
