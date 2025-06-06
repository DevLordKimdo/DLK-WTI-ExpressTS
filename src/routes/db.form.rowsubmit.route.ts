import { Router } from 'express';
import * as DbFormRowSubmitRoute from '../controllers/db.form.rowsubmit.controller';

const router = Router();

router.get(['/', '/form'], DbFormRowSubmitRoute.form);
router.post('/submit', DbFormRowSubmitRoute.submit);

export default router;