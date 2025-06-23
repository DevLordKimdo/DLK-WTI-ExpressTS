import { Router } from 'express';
import * as uixPopupModalRoute from '../controllers/uix.popup.modal.controller';

const router = Router();

router.get(['/', '/index'], uixPopupModalRoute.index);

export default router;