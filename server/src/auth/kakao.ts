import {Strategy as KakaoStrategy, StrategyOption} from 'passport-kakao';

const strategyOption: StrategyOption = {
    clientID: process.env.KAKAO_REST_API as string,
    clientSecret: '',
    callbackURL: '/auth/kakao/callback',
};

const kakaoStrategy = new KakaoStrategy(strategyOption, (accessToken, refreshToken, profile, done) => {
    const user: Express.User = {id: '', pw: ''};
    console.log(profile);
    done('', user);
});

export default kakaoStrategy;
