import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type: 'varchar'})
    firstName!: string;

    @Column({type: 'varchar'})
    lastName!: string;

    @Column({type: 'varchar'})
    age!: number;
}
