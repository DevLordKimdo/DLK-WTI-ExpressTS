import { Router } from 'express';
import * as authCookieBasicController from '../controllers/auth.cookie.basic.controller';

const router = Router();

router.get(['/', '/index'], authCookieBasicController.index);
router.get('/request-backend', authCookieBasicController.requestBackend);
router.get('/check-cookie', authCookieBasicController.checkCookie);

export default router;