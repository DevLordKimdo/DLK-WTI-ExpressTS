import { Router } from 'express';
import * as uixFormSearchSelectboxRoute from '../controllers/uix.form.searchselectbox.controller';

const router = Router();

router.get(['/', '/form'], uixFormSearchSelectboxRoute.form);
router.post('/submit', uixFormSearchSelectboxRoute.submit);

export default router;