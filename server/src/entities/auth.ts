import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique} from 'typeorm';
import {AuthType} from '../enum/authType';
import User from './user';

@Entity()
@Unique(['authType'])
export default class Auth extends BaseEntity {
    constructor(authType: AuthType, users?: User[]) {
        super();
        this.authType = authType;
        if (users) this.users = users;
    }

    @PrimaryGeneratedColumn('increment')
    seq!: number;

    @Column({type: 'enum', enum: AuthType})
    authType = AuthType.admin;

    @ManyToMany(type => User, users => users.auths)
    users?: User[];
}
