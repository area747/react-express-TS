//configs
import dotenv from 'dotenv';
dotenv.config();
//types
import {} from 'types/express-session/session';
import {} from './enum/loginType';
import e from 'express';
import session from 'express-session';
import path from 'path';
import flash from 'connect-flash';
import passport from 'passport';
import passportSetting from './passport';
import auth from './auth';
import router from './router';
import connectionOptions from './DB/typeormConfig';
import {createConnection} from 'typeorm';
import errorHandler from './error/errorHandler';

createConnection(connectionOptions).then(() => {
    passportSetting();
    const app = e();
    const clientPath = path.join(process.cwd(), 'client', 'build');
    app.use(
        session({
            secret: '#ABCDEFG',
            resave: false,
            saveUninitialized: true,
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(e.static(clientPath));
    app.use(e.json());
    app.use(e.urlencoded({extended: true}));
    app.use(flash());
    app.use(auth);
    app.use(router);
    app.use(errorHandler);

    app.listen(7000);
});
