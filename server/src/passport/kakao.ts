import {Strategy as KakaoStrategy, StrategyOption} from 'passport-kakao';
import User from '../entities/user';
import {LoginType} from '../enum/loginType';

const strategyOption: StrategyOption = {
    clientID: process.env.KAKAO_REST_API as string,
    clientSecret: '',
    callbackURL: '/auth/kakao/callback',
};

const kakaoStrategy = new KakaoStrategy(strategyOption, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({userId: profile.id, loginType: LoginType.kakao});
        if (user) done(null, user);
        else {
            await new User(profile.id, LoginType.kakao).save();
            user = await User.findOne({userId: profile.id, loginType: LoginType.kakao});
            done(null, user);
        }
    } catch (error) {
        console.log(error);
    }
});

export default kakaoStrategy;
