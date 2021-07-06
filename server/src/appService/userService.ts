import Auth from '../entities/auth';
import User from '../entities/user';
import {AuthType} from '../enum/authType';
import {LoginType} from '../enum/loginType';

const createUser = async (userId: string, userPw: string, loginType: LoginType): Promise<void> => {
    console.log(userId);
    console.log(userPw);
    let user = new User(userId, loginType);
    user = await user.save();
    console.log(user);
    user.auths.push(new Auth(AuthType.user));
};

export {createUser};
