import e from 'express';
import fs from 'fs';
import path from 'path';
import passport from 'passport';
import {createUser} from '../../appService/userService';
import {LoginType} from '../../enum/loginType';

const router = e.Router();
const clientPath = path.join(process.cwd(), 'client', 'build');
router.get('/');
router.get('/', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.send('hello, World!');
    } else {
        res.status(403).send('not authenticated?????212312??');
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

router.get('/login', (req, res, next) => {
    fs.readFile(path.join(clientPath, 'login', 'login.html'), (err, data) => {
        res.end(data);
    });
});

router.get('/auth/kakao/callback', passport.authenticate('kakao', {successRedirect: '/', failureRedirect: '/'}));

router.get('/kakao', passport.authenticate('kakao'));

router.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: true}));

router.get('/react', (req, res, next) => {
    fs.readFile(path.join(clientPath, 'main.html'), (err, data) => {
        res.end(data);
    });
});

router.get('/createUser', (req, res, next) => {
    createUser(req.query.userId as string, req.query.userPw as string, LoginType.local);
});

export default router;
