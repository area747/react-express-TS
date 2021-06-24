import e from 'express';
import fs from 'fs';
import path from 'path';
import passport from 'passport';

const router = e.Router();
const clientPath = path.join(process.cwd(), 'client', 'build');
router.get('/', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.send('hello, World!');
    } else {
        res.status(403).send('not authenticated');
    }
});
router.get('/debug', (req, res, next) => {
    const results = {
        'req.session': req.session, // 세션 데이터
        'req.user': req.user, // 유저 데이터(뒷 부분에서 설명)
        'req.header': req.headers,
        'req.body': req.body,
    };
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(results, null, 4));
});
router.get('/loginPage', (req, res, next) => {
    fs.readFile(path.join(clientPath, 'test', 'login.html'), (err, data) => {
        res.end(data);
    });
});
router.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/loginPage', failureFlash: true}));
router.get('/react', (req, res, next) => {
    fs.readFile(path.join(clientPath, 'main.html'), (err, data) => {
        res.end(data);
    });
});

export default router;
