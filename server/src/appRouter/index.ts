import e from 'express';
import pageRouter from './page';
import apiRouter from './api';

const router = e.Router();
router.use('/api', apiRouter);
router.use('/', pageRouter);

export default router;
