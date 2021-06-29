import execute from 'execute';
import {Strategy as KakaoStrategy, StrategyOption} from 'passport-kakao';

const strategyOption: StrategyOption = {
    clientID: process.env.KAKAO_REST_API as string,
    clientSecret: '',
    callbackURL: '/auth/kakao/callback',
};

const kakaoStrategy = new KakaoStrategy(strategyOption, (accessToken, refreshToken, profile, done) => {
    const user: Express.User = {id: profile.id, pw: '', loginType: profile.provider};
    execute('user', 'loginSocialUser', {userId: profile.id, loginType: profile.provider});
    done('', user);
});

export default kakaoStrategy;
