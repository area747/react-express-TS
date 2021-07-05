import execute from 'server/src/DB/sqlConnector';
import {Request, Response, NextFunction} from 'express';
import {Strategy as LocalStrategy, IStrategyOptionsWithRequest, VerifyFunction} from 'passport-local';
import User from '../entities/user';
import {LoginType} from '../enum/loginType';

const opt: IStrategyOptionsWithRequest = {usernameField: 'id', passwordField: 'pw', passReqToCallback: true, session: true};

const localStrategy = new LocalStrategy(opt, async (req, id, pw, done) => {
    try {
        const user = await User.findOneOrFail({userId: id, userPw: pw, loginType: LoginType.local});
        if (user) return done(null, user);
        else throw new Error('loginFail');
    } catch (error) {
        console.log(error);
        return done(null, false, {message: error});
    }
});
export default localStrategy;
