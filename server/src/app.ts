import e from 'express';
import session from 'express-session';
import path from 'path';
import flash from 'connect-flash';
import dotenv from 'dotenv';
import passport from 'passport';
import passportSetting from './auth';
import router from './router';
import connectionOptions from './DB/typeormConfig';
import {getConnection, createConnection} from 'typeorm';
//types
import {} from 'types/express-session/session';
import {User} from './entities/user';

dotenv.config();
const app = e();
const clientPath = path.join(process.cwd(), 'client', 'build');
passportSetting();
createConnection(connectionOptions).then(() => {
    const user = new User();
    user.firstName = 'asdf';
    user.lastName = 'asfwef';
    user.age = 24;
    getConnection().manager.save(user);
});
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
app.use(router);

app.listen(7000);
