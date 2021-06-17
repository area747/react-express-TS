import e from 'express';

const router = e.Router();
router.use('/', (req, res, next) => {
    res.send('hi');
});

export default router;
