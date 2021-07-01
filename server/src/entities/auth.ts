import {BaseEntity, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'auths'})
export class Auth extends BaseEntity {
    constructor(parameters: any) {
        super();
    }

    @PrimaryGeneratedColumn('increment')
    seq!: number;
}
