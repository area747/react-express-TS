import {createConnection, ConnectionOptions} from 'typeorm';

const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: ['server/src/entities/**/*.ts'],
};

export default connectionOptions;
