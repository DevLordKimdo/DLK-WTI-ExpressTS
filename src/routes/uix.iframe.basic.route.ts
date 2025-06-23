import { Router } from 'express';
import * as uixIframeBasicRoute from '../controllers/uix.iframe.basic.controller';

const router = Router();

router.get(['/', '/index'], uixIframeBasicRoute.index);
router.get('/content', uixIframeBasicRoute.content);

export default router;