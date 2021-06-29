import e from 'express';
import execute from '../../DB/index';

const router = e.Router();
router.use('/:param1/:param2', async (req, res, next) => {
    req.params;
    const r = await execute('test', 'test', {});
    res.json(r);
});
router.use('/', (req, res, next) => {
    res.send('hi');
});

export default router;
