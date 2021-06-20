import e from 'express';
import pageRouter from './page/pageRouter';
import apiRouter from './api/index';

const router = e.Router();

router.get('/', (req, res, next) => {
    req.session;
});
router.use('/api', apiRouter);
router.use('/', router);

export default router;
