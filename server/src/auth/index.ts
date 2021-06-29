import passport from 'passport';
import localStrategy from './local';
import kakaoStrategy from './kakao';
import execute from 'execute';

export default (): void => {
    passport.use(localStrategy);
    passport.use(kakaoStrategy);

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (userId: number, done) => {
        const [res] = await execute('user', 'selectUser', {id: userId});
        const user: Express.User = {id: res.userId, pw: res.userPw, loginType: res.loginType};
        done(null, user);
    });
};
