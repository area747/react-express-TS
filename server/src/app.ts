import e from 'express';
import session from 'express-session';
import path from 'path';
import flash from 'connect-flash';
import passport from 'passport';
import passportSetting from './auth';
import router from './router';
import {} from './DB';
//types
import 'types/express-session/session';

const app = e();
const clientPath = path.join(process.cwd(), 'client', 'build');
passportSetting();

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