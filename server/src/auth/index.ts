import {Router, RequestHandler} from 'express';
const router = Router();
const auth: RequestHandler = (req, res, next) => {
    req.isAuthenticated;
};
router.use();
export default router;
