import {Request, Response, NextFunction} from 'express';
import passport from 'passport';
import execute from 'execute';
import {Strategy as LocalStrategy, IStrategyOptionsWithRequest, VerifyFunction} from 'passport-local';

const opt: IStrategyOptionsWithRequest = {usernameField: 'id', passwordField: 'pw', passReqToCallback: true, session: true};

//tempt

const localStrategy = new LocalStrategy(opt, async (req, id, pw, done) => {
    const res = await execute('user', 'selectUser', {id: id, pw: pw});
    if (res[0]) {
        const user: Express.User = {id: id, pw: pw};
        return done(null, user);
    } else {
        return done(null, false, {message: 'no'});
    }
});
export default localStrategy;
