import {BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import User from './user';

@Entity()
export default class Auth extends BaseEntity {
    constructor(authId: string, users?: User[]) {
        super();
        this.authId = authId;
        if (users) this.users = users;
    }

    @PrimaryGeneratedColumn('increment')
    seq!: number;

    @Column({type: 'varchar'})
    authId = '';

    @ManyToMany(type => User, users => users.auths)
    @JoinTable()
    users!: User[];
}
