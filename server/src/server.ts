import e from 'express';
import router from './router/router';
import path from 'path';

const app = e();
const clientPath = path.join(process.cwd(), 'client', 'build');

app.use('/', e.static(clientPath));
app.use(e.json());
app.use(e.urlencoded({extended: true}));
app.use(router);

app.listen(7000);
