import passport from 'passport';
import localStrategy from './local';

export default (): void => {
    passport.use(localStrategy);

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((userId: number, done) => {
        console.log(userId);
        const user: Express.User = {id: '성호', pw: '1234'};
        done(null, user);
    });
};
