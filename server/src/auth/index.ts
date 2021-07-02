import passport from 'passport';
import localStrategy from './local';
import kakaoStrategy from './kakao';
import execute from 'execute';
import User from '../entities/user';

export default (): void => {
    passport.use(localStrategy);
    passport.use(kakaoStrategy);

    passport.serializeUser((callBackuser, done) => {
        const user = callBackuser as User;
        done(null, user.seq);
    });

    passport.deserializeUser(async (userId: number, done) => {
        const user = await User.findOne({seq: userId});
        done(null, user);
    });
};
