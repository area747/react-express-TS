import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from 'typeorm';
import {UserProp} from './userProp';

@Entity({name: 'users'})
export class User extends BaseEntity {
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
    userPw: string;

    @OneToMany(type => UserProp, userProp => userProp.user)
    userProps!: UserProp[];
}
