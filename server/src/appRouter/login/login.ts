import {Router} from 'express';
import {UserController} from 'server/src/appController/userController';

const router = Router();
const userController = new UserController();
router.get('/', userController.loginUser);
