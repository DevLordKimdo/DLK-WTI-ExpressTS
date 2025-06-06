import { Router } from 'express';
import * as uixFormRowSubmitRoute from '../controllers/uix.form.rowsubmit.controller';

const router = Router();

router.get(['/', '/form'], uixFormRowSubmitRoute.form);
router.post('/submit', uixFormRowSubmitRoute.submit);
router.get('/form-fetch', uixFormRowSubmitRoute.formFetch);
router.post('/submit-fetch', uixFormRowSubmitRoute.submitFetch);

export default router;