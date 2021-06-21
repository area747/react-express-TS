import e from 'express';
import session from 'express-session';
import path from 'path';
import router from './router';
import auth from './auth';
import {} from './DB';
//types
import {} from 'types/express-session/session';

const app = e();
const clientPath = path.join(process.cwd(), 'client', 'build');
app.use(
    session({
        secret: '#ABCDEFG',
        resave: false,
        saveUninitialized: true,
    })
);
app.use(auth);
app.use(e.static(clientPath));
app.use(e.json());
app.use(e.urlencoded({extended: true}));
app.use(router);

app.listen(7000);
