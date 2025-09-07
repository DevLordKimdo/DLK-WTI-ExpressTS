import { Router } from 'express';
import * as uixPopupTermsRoute from '../controllers/uix.popup.terms.controller';

const router = Router();

router.get(['/', '/index'], uixPopupTermsRoute.index);
router.get('/:terms', uixPopupTermsRoute.terms);

export default router;