import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, ManyToOne} from 'typeorm';
import User from './user';

@Entity()
export class UserProp extends BaseEntity {
    constructor() {
        super();
    }
    @PrimaryGeneratedColumn('increment')
    seq!: number;

    @Column({type: 'varchar'})
    propId!: string;

    @Column({type: 'varchar'})
    propValue!: string;

    @ManyToOne(type => User, user => user.userProps)
    user!: User;
}
