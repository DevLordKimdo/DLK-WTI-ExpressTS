import { Router } from 'express';
import * as uixPopupSendvalueRoute from '../controllers/uix.popup.sendvalue.controller';

const router = Router();

router.get(['/', '/index'], uixPopupSendvalueRoute.index);
router.get('/popup', uixPopupSendvalueRoute.popup);

export default router;