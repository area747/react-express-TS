import e from 'express';
import path from 'path';

const router = e.Router();
const clientPath = path.join(process.cwd(), 'client', 'build');
router.get('/', (req, res, next) => {
    res.send('hello, World!');
});
router.get('/react', (req, res, next) => {
    res.send(path.join(clientPath, 'index.html'));
});

export default router;
