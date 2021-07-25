import e from 'express';
import pageRouter from './page';
import apiRouter from './api';
import {container} from 'container';
import {UserControllerImpl} from '../appController/userControllerImpl';

const router = e.Router();
router.use('/api', apiRouter);
router.use('/container', container.get(UserControllerImpl).loginUser);
router.use('/', pageRouter);

export default router;
