import e from 'express';

const router = e.Router();
router.use('/:param1/:param2', async (req, res, next) => {
    req.params;
});
router.use('/', (req, res, next) => {
    res.send('hi');
});

export default router;
