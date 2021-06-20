import e from 'express';
import execute from '../../DB/index';

const router = e.Router();
router.use('/db', async (req, res, next) => {
    const r = await execute('test', 'test', {});
    res.json(r);
    //res.send(r);
});
router.use('/', (req, res, next) => {
    res.send('hi');
});

export default router;
