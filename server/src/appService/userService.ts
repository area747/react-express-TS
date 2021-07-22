import Auth from '../entities/auth';
import User from '../entities/user';
import {AuthType} from '../enum/authType';
import {LoginType} from '../enum/loginType';

const createUser = async (userId: string, userPw: string, loginType: LoginType): Promise<void> => {
    console.log(userId);
    console.log(userPw);
    const user = new User(userId, loginType);
    const [auth] = await Auth.find({seq: 1});
    user.auths = [auth];
    await user.save();
    const u = await User.find({where: [{userId: 1}]});
    console.log(u);
};

const selectUser = async (userId: string): Promise<any> => {
    const user = await User.findOne({where: {userId: userId}, relations: ['auths']});
    return user;
};

export {createUser, selectUser};
