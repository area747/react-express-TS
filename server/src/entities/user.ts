import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, Unique} from 'typeorm';
import {UserProp} from './userProp';

enum LoginType {
    Local = 'local',
    Kakao = 'kakao',
}
@Entity()
@Unique(['userId', 'loginType'])
export default class User extends BaseEntity {
    constructor(userId: string, userPassword: string) {
        super();
        this.userId = userId;
        this.userPw = userPassword;
    }
    @PrimaryGeneratedColumn('increment')
    seq!: number;

    @Column({type: 'varchar'})
    userId: string;

    @Column({type: 'varchar'})
    userPw!: string;

    @Column({type: 'enum', enum: LoginType})
    loginType!: LoginType;

    @OneToMany(type => UserProp, userProp => userProp.user)
    userProps!: UserProp[];
}
