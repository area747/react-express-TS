import {ConnectionOptions} from 'typeorm';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: ['log'],
    entities: ['server/src/entities/**/*.ts'],
    namingStrategy: new SnakeNamingStrategy(),
};

export default connectionOptions;
