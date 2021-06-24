import {Request, Response, NextFunction} from 'express';
import passport from 'passport';
import {Strategy as LocalStrategy, IStrategyOptionsWithRequest, VerifyFunction} from 'passport-local';

const opt: IStrategyOptionsWithRequest = {usernameField: 'id', passwordField: 'pw', passReqToCallback: true, session: true};

//tempt
const user: Express.User = {id: '성호', pw: '1234'};

const localStrategy = new LocalStrategy(opt, (req, id, pw, done) => {
    if (id == 'yusungho' && pw == '1234') {
        return done(null, user);
    } else {
        return done(null, false, {message: 'no'});
    }
});
export default localStrategy;
