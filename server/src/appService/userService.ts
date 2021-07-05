import User from '../entities/user';
import {LoginType} from '../enum/loginType';

const createUser = (userId: string, userPw: string, loginType: LoginType): void => {
    const user = new User(userId, loginType);
};

export {};
