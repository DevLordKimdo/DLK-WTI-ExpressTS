import { Router } from 'express';
import * as authSessionBasicController from '../controllers/auth.session.basic.controller';

const router = Router();

router.get(['/', '/index'], authSessionBasicController.index);
router.get('/request-session', authSessionBasicController.requestSession);
router.get('/check-session', authSessionBasicController.checkSession);
router.get('/delete-session', authSessionBasicController.deleteSession);

export default router;