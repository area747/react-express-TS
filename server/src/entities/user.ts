import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, Unique} from 'typeorm';
import {LoginType} from '../enum/loginType';
import {UserProp} from './userProp';
@Entity()
@Unique(['userId', 'loginType'])
export default class User extends BaseEntity {
    constructor(userId: string, loginType: LoginType) {
        super();
        this.userId = userId;
        this.loginType = loginType;
    }
    @PrimaryGeneratedColumn('increment')
    seq!: number;

    @Column({type: 'varchar'})
    userId: string;

    @Column({type: 'varchar', nullable: true, default: null})
    userPw!: string;

    @Column({type: 'enum', enum: LoginType})
    loginType: LoginType;

    @OneToMany(type => UserProp, userProp => userProp.user)
    userProps!: UserProp[];
}
