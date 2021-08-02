import passport from 'passport';
import localStrategy from './local';
import kakaoStrategy from './kakao';
import User from '../entities/user';

export default (): void => {
    passport.use(localStrategy);
    passport.use(kakaoStrategy);

    passport.serializeUser((callBackuser, done) => {
        console.log('serializeUser');
        try {
            const user = callBackuser as User;
            console.log(user);
            console.log('user');
            done(null, user.seq);
        } catch (error) {
            console.log(error);
            done(error);
        }
    });

    passport.deserializeUser(async (seq: number, done) => {
        console.log('deserializeUser');
        const user = await User.findOne({seq: seq});
        done(null, user);
    });
};
