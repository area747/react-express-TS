import * as express from 'express';
import {controller, httpGet, httpPost, interfaces, request, response} from 'inversify-express-utils';
import passport from 'passport';
@controller('/login')
export class LoginController implements interfaces.Controller {
    constructor() {
        //
    }

    @httpGet('/')
    loginUser(@request() req: express.Request, @response() res: express.Response): string {
        return '로그인';
    }

    @httpGet('/local', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login'}))
    localLogin(@request() req: express.Request, @response() res: express.Response): void {
        //
    }

    @httpGet('/kakao', passport.authenticate('kakao'))
    kakaoLogin(@request() req: express.Request, @response() res: express.Response): void {
        //
    }
}
